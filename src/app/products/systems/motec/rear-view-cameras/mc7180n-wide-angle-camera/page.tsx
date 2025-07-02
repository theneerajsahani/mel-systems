import DynamicProductPage from "@/components/DynamicProductPage";
import { systemsProductMapping } from "@/lib/systems-products";

export default function MC7180NPage() {
  const product =
    systemsProductMapping[
      "/products/systems/motec/rear-view-cameras/mc7180n-wide-angle-camera"
    ];
  return <DynamicProductPage productData={product} />;
}
