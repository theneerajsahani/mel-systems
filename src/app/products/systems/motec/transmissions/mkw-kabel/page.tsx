import { mkwKabelData } from '@/lib/systems-products';
import DynamicProductPage from '@/components/DynamicProductPage';

export default function MkwKabelPage() {
  return <DynamicProductPage productData={mkwKabelData} />;
}
