import DynamicProductPage from "@/components/DynamicProductPage";
import { watchlogWirelessSignalGatewayModulesData } from "@/lib/oil-conditioning-products";

export default function watchlogWirelessSignalGatewayModulesPage() {
  return (
    <DynamicProductPage
      productData={watchlogWirelessSignalGatewayModulesData}
    />
  );
}
