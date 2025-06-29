import DynamicProductPage from "@/components/DynamicProductPage"
import { gatewayHubData } from "@/lib/oil-conditioning-products"

export default function GatewayHubPage() {
    return <DynamicProductPage productData={gatewayHubData} />
}
