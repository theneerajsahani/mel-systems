import DynamicProductPage from "@/components/DynamicProductPage";
import { systemsProductMapping } from "@/lib/systems-products";

export default function MVCD2000Page() {
  const product =
    systemsProductMapping[
      "/products/systems/motec/video-control-units/mvcd2000"
    ];
  return <DynamicProductPage productData={product} />;
}
