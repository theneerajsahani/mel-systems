"use client";

import DynamicProductPage from "@/components/DynamicProductPage";
import { watchlogUSBDualSensorData } from "@/lib/oil-conditioning-products";

export default function WatchlogUSBDualSensorPage() {
  return <DynamicProductPage productData={watchlogUSBDualSensorData} />;
}
