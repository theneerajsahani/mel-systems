import DynamicProductPage from "@/components/DynamicProductPage";
import { watchlogWirelessAccessoriesData } from "@/lib/oil-conditioning-products";

export default function watchlogWirelessAccessoriesPage() {
  return <DynamicProductPage productData={watchlogWirelessAccessoriesData} />;
}
