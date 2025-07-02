import DynamicProductPage from "@/components/DynamicProductPage";
import { systemsProductMapping } from "@/lib/systems-products";

export default function MC4000AIrWlPage() {
  const product =
    systemsProductMapping[
      "/products/systems/motec/rear-view-cameras/mc4000a-ir-wl-night-vision-compatible-heavy-duty-infrared-camera-with-built-in-light"
    ];
  return <DynamicProductPage productData={product} />;
}
