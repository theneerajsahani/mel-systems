import DynamicProductPage from '@/components/DynamicProductPage';
import { systemsProductMapping } from '@/lib/systems-products';

export default function MBE5200Page() {
  const product = systemsProductMapping['/products/systems/motec/video-control-units/mbe5200'];
  return <DynamicProductPage productData={product} />;
} 