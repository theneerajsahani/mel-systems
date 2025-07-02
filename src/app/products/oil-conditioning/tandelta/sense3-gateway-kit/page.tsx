import DynamicProductPage from "@/components/DynamicProductPage"
import { sense3GatewayKitData } from "@/lib/oil-conditioning-products"

export default function Page() {
    return <DynamicProductPage productData={sense3GatewayKitData} />
}
