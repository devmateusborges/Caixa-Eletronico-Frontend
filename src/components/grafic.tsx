"use client";
import { Chart, GoogleChartWrapperChartType } from "react-google-charts";

interface grafic {
  data: any[];
  width: string;
  height: string;
  type: GoogleChartWrapperChartType;
}

export function Grafic({ data, height, width, type }: grafic) {
  return (
    <Chart
      className="w-[90%]"
      chartType={type}
      data={data}
      width={width}
      height={height}
      chartLanguage="pt-BR"
      legendToggle
    />
  );
}
