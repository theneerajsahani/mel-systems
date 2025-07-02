import DynamicProductPage from "@/components/DynamicProductPage";
import { systemsProductMapping } from "@/lib/systems-products";

export default function LCD17ZollMonitorPage() {
  const product =
    systemsProductMapping["/products/systems/motec/monitors/17-zoll-lcd"];
  return <DynamicProductPage productData={product} />;
}
