import DynamicProductPage from "@/components/DynamicProductPage";
import { sense2DisplayKitData } from "@/lib/oil-conditioning-products";

export default function Page() {
  return <DynamicProductPage productData={sense2DisplayKitData} />;
}
