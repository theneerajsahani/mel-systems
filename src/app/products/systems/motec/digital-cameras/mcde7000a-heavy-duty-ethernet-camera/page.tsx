import DynamicProductPage from "@/components/DynamicProductPage";
import { systemsProductMapping } from "@/lib/systems-products";

export default function MCDE7000APage() {
  const product =
    systemsProductMapping["/products/systems/motec/digital-cameras/mcde7000a"];
  return <DynamicProductPage productData={product} />;
}
