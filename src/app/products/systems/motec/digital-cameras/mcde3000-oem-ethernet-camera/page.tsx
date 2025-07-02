import DynamicProductPage from "@/components/DynamicProductPage";
import { systemsProductMapping } from "@/lib/systems-products";

export default function MCDE3000Page() {
  const product =
    systemsProductMapping["/products/systems/motec/digital-cameras/mcde3000"];
  return <DynamicProductPage productData={product} />;
}
