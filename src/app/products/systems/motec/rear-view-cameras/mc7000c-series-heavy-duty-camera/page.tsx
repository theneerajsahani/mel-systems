import DynamicProductPage from "@/components/DynamicProductPage";
import { systemsProductMapping } from "@/lib/systems-products";

export default function MC7000CSeriesPage() {
  const product =
    systemsProductMapping[
      "/products/systems/motec/rear-view-cameras/mc7000c-series-heavy-duty-camera"
    ];
  return <DynamicProductPage productData={product} />;
}
