import DynamicProductPage from "@/components/DynamicProductPage";
import { wlbTtCompactBluetoothTemperatureSensorData } from "@/lib/oil-conditioning-products";

export default function wlbTtCompactBluetoothTemperatureSensorPage() {
  return (
    <DynamicProductPage
      productData={wlbTtCompactBluetoothTemperatureSensorData}
    />
  );
}
