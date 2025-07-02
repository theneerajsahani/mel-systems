import DynamicProductPage from '@/components/DynamicProductPage';
import { systemsProductMapping } from '@/lib/systems-products';

export default function MC6000DPage() {
  const product = systemsProductMapping['/products/systems/motec/rear-view-cameras/mc6000d-sturdy-universal-camera'];
  return <DynamicProductPage productData={product} />;
} 