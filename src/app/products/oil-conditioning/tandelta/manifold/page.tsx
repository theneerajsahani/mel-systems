import DynamicProductPage from "@/components/DynamicProductPage";
import { manifoldData } from "@/lib/oil-conditioning-products";

export default function Page() {
  return <DynamicProductPage productData={manifoldData} />;
}
