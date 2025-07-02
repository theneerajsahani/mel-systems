import DynamicProductPage from "@/components/DynamicProductPage";
import { systemsProductMapping } from "@/lib/systems-products";

export default function MVCU1500Page() {
  const product =
    systemsProductMapping[
      "/products/systems/motec/video-control-units/mvcu1500"
    ];
  return <DynamicProductPage productData={product} />;
}
