import DynamicProductPage from "@/components/DynamicProductPage";
import { systemsProductMapping } from "@/lib/systems-products";

export default function MD3073Page() {
  const product =
    systemsProductMapping["/products/systems/motec/monitors/md3073"];
  return <DynamicProductPage productData={product} />;
}
