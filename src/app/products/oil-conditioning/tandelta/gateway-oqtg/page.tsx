import DynamicProductPage from "@/components/DynamicProductPage"
import { gatewayOQTgData } from "@/lib/oil-conditioning-products"

export default function GatewayOQTgPage() {
    return <DynamicProductPage productData={gatewayOQTgData} />
}
