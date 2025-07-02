import DynamicProductPage from "@/components/DynamicProductPage";
import { systemsProductMapping } from "@/lib/systems-products";

export default function MC7000BMH1Page() {
  const product =
    systemsProductMapping[
      "/products/systems/motec/rear-view-cameras/mc7000b-mh1-heavy-duty-camera"
    ];
  return <DynamicProductPage productData={product} />;
}
