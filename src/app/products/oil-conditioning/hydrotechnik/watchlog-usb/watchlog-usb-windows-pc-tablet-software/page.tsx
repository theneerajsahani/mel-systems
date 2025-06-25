"use client";

import DynamicProductPage from "@/components/DynamicProductPage";
import { watchlogUSBSoftwareData } from "@/lib/products";

export default function WatchlogUSBSoftwarePage() {
  return <DynamicProductPage productData={watchlogUSBSoftwareData} />;
}
