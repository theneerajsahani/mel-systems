import DynamicProductPage from '@/components/DynamicProductPage';
import { systemsProductMapping } from '@/lib/systems-products';

export default function MVR5200Page() {
  const product = systemsProductMapping['/products/systems/motec/transmissions/mvr5200'];
  return <DynamicProductPage productData={product} />;
} 