import DynamicProductPage from "@/components/DynamicProductPage";
import { systemsProductMapping } from "@/lib/systems-products";

export default function MB1405QuadPage() {
  const product =
    systemsProductMapping[
      "/products/systems/motec/video-control-units/mb1405-quad"
    ];
  return <DynamicProductPage productData={product} />;
}
