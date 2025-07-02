import DynamicProductPage from "@/components/DynamicProductPage";
import { systemsProductMapping } from "@/lib/systems-products";

export default function MVCU1300Page() {
  const product =
    systemsProductMapping[
      "/products/systems/motec/video-control-units/mvcu1300"
    ];
  return <DynamicProductPage productData={product} />;
}
