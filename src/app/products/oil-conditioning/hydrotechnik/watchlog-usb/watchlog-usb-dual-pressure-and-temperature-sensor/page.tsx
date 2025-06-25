"use client";

import DynamicProductPage from "@/components/DynamicProductPage";
import { watchlogUSBDualSensorData } from "@/lib/products";

export default function WatchlogUSBDualSensorPage() {
  return <DynamicProductPage productData={watchlogUSBDualSensorData} />;
}
