import DynamicProductPage from "@/components/DynamicProductPage";
import { systemsProductMapping } from "@/lib/systems-products";

export default function MDDE1102Page() {
  const product =
    systemsProductMapping["/products/systems/motec/digital-monitors/mdde1102"];
  return <DynamicProductPage productData={product} />;
}
