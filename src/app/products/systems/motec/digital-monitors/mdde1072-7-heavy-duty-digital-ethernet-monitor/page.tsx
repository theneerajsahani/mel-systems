import DynamicProductPage from "@/components/DynamicProductPage";
import { systemsProductMapping } from "@/lib/systems-products";

export default function MDDE1072Page() {
  const product =
    systemsProductMapping["/products/systems/motec/digital-monitors/mdde1072"];
  return <DynamicProductPage productData={product} />;
}
