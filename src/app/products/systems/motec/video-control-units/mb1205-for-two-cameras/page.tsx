import DynamicProductPage from '@/components/DynamicProductPage';
import { systemsProductMapping } from '@/lib/systems-products';

export default function MB1205Page() {
  const product = systemsProductMapping['/products/systems/motec/video-control-units/mb1205'];
  return <DynamicProductPage productData={product} />;
} 