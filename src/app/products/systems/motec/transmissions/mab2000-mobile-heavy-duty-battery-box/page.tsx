import DynamicProductPage from "@/components/DynamicProductPage";
import { systemsProductMapping } from "@/lib/systems-products";

export default function MAB2000Page() {
  const product =
    systemsProductMapping["/products/systems/motec/transmissions/mab2000"];
  return <DynamicProductPage productData={product} />;
}
