import DynamicProductPage from '@/components/DynamicProductPage';
import { systemsProductMapping } from '@/lib/systems-products';

export default function MC5201Page() {
  const product = systemsProductMapping['/products/systems/motec/crane-cameras/mc5201'];
  return <DynamicProductPage productData={product} />;
} 