import DynamicProductPage from "@/components/DynamicProductPage";
import { watchlogWirelessUsbBaseStationsReceiversData } from "@/lib/oil-conditioning-products";

export default function watchlogWirelessUsbBaseStationsReceiversPage() {
  return (
    <DynamicProductPage
      productData={watchlogWirelessUsbBaseStationsReceiversData}
    />
  );
}
