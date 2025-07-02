import DynamicProductPage from "@/components/DynamicProductPage";
import { systemsProductMapping } from "@/lib/systems-products";

export default function MCDE5200Page() {
  const product =
    systemsProductMapping["/products/systems/motec/crane-cameras/mcde5200"];
  return <DynamicProductPage productData={product} />;
}
