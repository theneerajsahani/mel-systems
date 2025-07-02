import DynamicProductPage from "@/components/DynamicProductPage";
import { systemsProductMapping } from "@/lib/systems-products";

export default function MD3100Page() {
  const product =
    systemsProductMapping["/products/systems/motec/monitors/md3100"];
  return <DynamicProductPage productData={product} />;
}
