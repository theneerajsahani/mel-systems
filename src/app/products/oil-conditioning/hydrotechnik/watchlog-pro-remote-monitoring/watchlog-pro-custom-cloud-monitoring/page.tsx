import DynamicProductPage from "@/components/DynamicProductPage";
import { watchlogProCustomCloudMonitoringData } from "@/lib/oil-conditioning-products";

export default function watchlogProCustomCloudMonitoringPage() {
  return (
    <DynamicProductPage productData={watchlogProCustomCloudMonitoringData} />
  );
}
