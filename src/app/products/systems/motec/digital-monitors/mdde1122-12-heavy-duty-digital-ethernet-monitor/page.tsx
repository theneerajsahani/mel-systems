import DynamicProductPage from "@/components/DynamicProductPage";
import { systemsProductMapping } from "@/lib/systems-products";

export default function MDDE1122Page() {
  const product =
    systemsProductMapping["/products/systems/motec/digital-monitors/mdde1122"];
  return <DynamicProductPage productData={product} />;
}
