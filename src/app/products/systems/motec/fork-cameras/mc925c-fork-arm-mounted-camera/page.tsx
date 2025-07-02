import DynamicProductPage from "@/components/DynamicProductPage";
import { systemsProductMapping } from "@/lib/systems-products";

export default function MC925CPage() {
  const product =
    systemsProductMapping["/products/systems/motec/fork-cameras/mc925c"];
  return <DynamicProductPage productData={product} />;
}
