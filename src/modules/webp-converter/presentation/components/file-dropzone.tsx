import type * as React from "react";

type FileDropzoneProps = {
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  folderInputRef: React.RefObject<HTMLInputElement | null>;
  isDragging: boolean;
  onDragEnter: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragLeave: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (event: React.DragEvent<HTMLDivElement>) => void;
  onFileInputChange: React.ChangeEventHandler<HTMLInputElement>;
  onFolderInputChange: React.ChangeEventHandler<HTMLInputElement>;
};

export function FileDropzone({
  fileInputRef,
  folderInputRef,
  isDragging,
  onDragEnter,
  onDragLeave,
  onDragOver,
  onDrop,
  onFileInputChange,
  onFolderInputChange,
}: FileDropzoneProps) {
  return (
    <div
      className={`mt-6 rounded-[1.75rem] border border-dashed p-5 transition sm:p-6 ${
        isDragging
          ? "border-teal-600 bg-teal-50"
          : "border-stone-300 bg-gradient-to-br from-white to-stone-50"
      }`}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={onFileInputChange}
      />
      <input
        ref={folderInputRef}
        type="file"
        accept="image/*"
        multiple
        directory=""
        webkitdirectory=""
        className="hidden"
        onChange={onFolderInputChange}
      />

      <div className="flex flex-col items-center text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-700 text-2xl text-white shadow-[0_12px_30px_rgba(15,118,110,0.35)]">
          W
        </div>
        <h3 className="mt-4 text-xl font-semibold text-stone-900">Suelta tus imagenes aqui</h3>
        <p className="mt-2 max-w-md text-sm leading-6 text-stone-600">
          Tambien puedes elegir archivos o carpetas completas. Si subes una carpeta, mantendremos
          su estructura al devolverte un archivo ZIP.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-stone-700"
          >
            Seleccionar imagenes
          </button>
          <button
            type="button"
            onClick={() => folderInputRef.current?.click()}
            className="rounded-full border border-stone-300 px-5 py-3 text-sm font-medium text-stone-800 transition hover:border-stone-500 hover:bg-white"
          >
            Seleccionar carpeta
          </button>
        </div>
      </div>
    </div>
  );
}
