import DynamicProductPage from "@/components/DynamicProductPage";
import { systemsProductMapping } from "@/lib/systems-products";

export default function MC4000APage() {
  const product =
    systemsProductMapping[
      "/products/systems/motec/rear-view-cameras/mc4000a-heavy-duty-camera"
    ];
  return <DynamicProductPage productData={product} />;
}
