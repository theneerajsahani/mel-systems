import DynamicProductPage from "@/components/DynamicProductPage";
import { watchlogWirelessPressureFlowTemperatureTestKitData } from "@/lib/oil-conditioning-products";

export default function watchlogWirelessPressureFlowTempTestKitPage() {
  return (
    <DynamicProductPage
      productData={watchlogWirelessPressureFlowTemperatureTestKitData}
    />
  );
}
