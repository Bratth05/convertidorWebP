export type ConversionQualityOption = {
  value: number;
  label: string;
};

export const CONVERSION_QUALITY_OPTIONS: ConversionQualityOption[] = [
  { value: 0.65, label: "Ligero" },
  { value: 0.8, label: "Equilibrado" },
  { value: 0.92, label: "Alta calidad" },
];
