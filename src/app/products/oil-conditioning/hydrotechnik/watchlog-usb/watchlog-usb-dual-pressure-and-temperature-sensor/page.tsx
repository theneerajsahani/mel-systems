import DynamicProductPage from "@/components/DynamicProductPage";
import { watchlogUSBDualSensorData } from "@/lib/oil-conditioning-products";

export default function Page() {
  return <DynamicProductPage productData={watchlogUSBDualSensorData} />;
}
