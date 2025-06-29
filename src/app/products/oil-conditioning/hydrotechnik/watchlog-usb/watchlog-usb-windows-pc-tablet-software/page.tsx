"use client";

import DynamicProductPage from "@/components/DynamicProductPage";
import { watchlogUSBSoftwareData } from "@/lib/oil-conditioning-products";

export default function WatchlogUSBSoftwarePage() {
  return <DynamicProductPage productData={watchlogUSBSoftwareData} />;
}
