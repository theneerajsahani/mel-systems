import DynamicProductPage from "@/components/DynamicProductPage";
import { wlbPtCompactBluetoothPressureSensorData } from "@/lib/oil-conditioning-products";

export default function wlbPtCompactBluetoothPressureSensorPage() {
  return (
    <DynamicProductPage productData={wlbPtCompactBluetoothPressureSensorData} />
  );
}
