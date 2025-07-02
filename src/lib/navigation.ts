import { productStructure, ProductNode } from './product-structure';

export type NavigationItem = ProductNode;
export type ProductCategory = ProductNode;

// Export the product structure as the navigation
export const productNavigation: ProductCategory[] = productStructure;

// Helper to build hrefs from a path of slugs
export function buildHrefFromSlugs(slugs: string[]): string {
  return '/products/' + slugs.join('/');
}

// Helper function to find the current navigation context by slug path
export function findCurrentNavigationBySlugs(slugPath: string[]): {
  category?: ProductCategory;
  brand?: NavigationItem;
  product?: NavigationItem;
} {
  let category: ProductCategory | undefined;
  let brand: NavigationItem | undefined;
  let product: NavigationItem | undefined;

  function search(nodes: ProductNode[], depth: number): ProductNode | undefined {
    for (const node of nodes) {
      if (node.slug === slugPath[depth]) {
        if (depth === 0) category = node;
        else if (depth === 1) brand = node;
        else product = node;
        if (node.children && slugPath[depth + 1]) {
          return search(node.children, depth + 1);
        }
        return node;
      }
    }
    return undefined;
  }

  search(productStructure, 0);
  return { category, brand, product };
}
