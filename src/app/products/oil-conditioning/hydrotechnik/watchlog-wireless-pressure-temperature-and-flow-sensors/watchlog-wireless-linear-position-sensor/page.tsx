import DynamicProductPage from "@/components/DynamicProductPage";
import { watchlogWirelessLinearPositionSensorData } from "@/lib/oil-conditioning-products";

export default function watchlogWirelessLinearPositionSensorPage() {
  return (
    <DynamicProductPage
      productData={watchlogWirelessLinearPositionSensorData}
    />
  );
}
