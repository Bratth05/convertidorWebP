"use client";

import { useEffect, useRef, useState } from "react";
import type { ChangeEvent, DragEvent } from "react";

import { downloadConvertedQueueAsZip } from "@/modules/webp-converter/application/use-cases/download-converted-queue-as-zip";
import { convertQueueItemToWebP } from "@/modules/webp-converter/application/use-cases/convert-queue-item-to-webp";
import { createQueueItems } from "@/modules/webp-converter/application/use-cases/create-queue-items";
import { downloadConvertedQueueItem } from "@/modules/webp-converter/application/use-cases/download-converted-queue-item";
import type { ConversionQueueItem } from "@/modules/webp-converter/domain/entities/conversion-queue-item";
import { CONVERSION_QUALITY_OPTIONS } from "@/modules/webp-converter/domain/value-objects/conversion-quality-option";
import { webpConverterDependencies } from "@/modules/webp-converter/shared/webp-converter-dependencies";

const DEFAULT_QUALITY = 0.8;

function revokeQueueItemUrls(item: ConversionQueueItem) {
  webpConverterDependencies.objectUrlService.revoke(item.previewUrl);

  if (item.outputUrl) {
    webpConverterDependencies.objectUrlService.revoke(item.outputUrl);
  }
}

export function useWebpConverter() {
  const [items, setItems] = useState<ConversionQueueItem[]>([]);
  const [quality, setQuality] = useState(DEFAULT_QUALITY);
  const [isDragging, setIsDragging] = useState(false);
  const [isConverting, setIsConverting] = useState(false);
  const [isZipping, setIsZipping] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const folderInputRef = useRef<HTMLInputElement>(null);
  const itemsRef = useRef<ConversionQueueItem[]>([]);

  useEffect(() => {
    itemsRef.current = items;
  }, [items]);

  useEffect(() => {
    return () => {
      itemsRef.current.forEach(revokeQueueItemUrls);
    };
  }, []);

  function appendFiles(fileList: FileList | null) {
    if (!fileList?.length) {
      return;
    }

    const nextItems = createQueueItems(
      Array.from(fileList),
      webpConverterDependencies.objectUrlService,
    );
    setItems((current) => [...current, ...nextItems]);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    appendFiles(event.target.files);
    event.target.value = "";
  }

  function handleFolderInputChange(event: ChangeEvent<HTMLInputElement>) {
    appendFiles(event.target.files);
    event.target.value = "";
  }

  function handleDragEnter(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragging(true);
  }

  function handleDragLeave(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragging(false);
  }

  function handleDragOver(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
  }

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragging(false);
    appendFiles(event.dataTransfer.files);
  }

  function removeItem(id: string) {
    setItems((current) => {
      const target = current.find((item) => item.id === id);
      if (target) {
        revokeQueueItemUrls(target);
      }

      return current.filter((item) => item.id !== id);
    });
  }

  async function convertAll() {
    setIsConverting(true);

    for (const item of items) {
      if (item.status === "done") {
        continue;
      }

      setItems((current) =>
        current.map((entry) =>
          entry.id === item.id ? { ...entry, status: "converting", error: undefined } : entry,
        ),
      );

      try {
        const { outputBlob, outputUrl } = await convertQueueItemToWebP(item, quality, {
          imageConversionService: webpConverterDependencies.imageConversionService,
          objectUrlService: webpConverterDependencies.objectUrlService,
        });

        setItems((current) =>
          current.map((entry) => {
            if (entry.id !== item.id) {
              return entry;
            }

            if (entry.outputUrl) {
              webpConverterDependencies.objectUrlService.revoke(entry.outputUrl);
            }

            return {
              ...entry,
              outputBlob,
              outputUrl,
              status: "done",
            };
          }),
        );
      } catch (error) {
        setItems((current) =>
          current.map((entry) =>
            entry.id === item.id
              ? {
                  ...entry,
                  status: "error",
                  error: error instanceof Error ? error.message : "Ocurrio un error inesperado.",
                }
              : entry,
          ),
        );
      }
    }

    setIsConverting(false);
  }

  function downloadItem(item: ConversionQueueItem) {
    downloadConvertedQueueItem(item, webpConverterDependencies.fileDownloadService);
  }

  async function downloadZip() {
    setIsZipping(true);

    try {
      await downloadConvertedQueueAsZip(items, {
        archiveService: webpConverterDependencies.archiveService,
        fileDownloadService: webpConverterDependencies.fileDownloadService,
        objectUrlService: webpConverterDependencies.objectUrlService,
      });
    } finally {
      setIsZipping(false);
    }
  }

  const hasConvertedItems = items.some((item) => item.status === "done" && item.outputBlob);

  return {
    fileInputRef,
    folderInputRef,
    isDragging,
    isConverting,
    isZipping,
    items,
    quality,
    qualityOptions: CONVERSION_QUALITY_OPTIONS,
    convertedCount: items.filter((item) => item.status === "done").length,
    hasItems: items.length > 0,
    hasConvertedItems,
    setQuality,
    downloadItem,
    downloadZip,
    removeItem,
    convertAll,
    handleDrop,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleFileInputChange: handleInputChange,
    handleFolderInputChange,
  };
}
