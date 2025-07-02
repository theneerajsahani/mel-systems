import { useMemo, useState, useCallback } from "react";
import { NavigationItem, ProductCategory } from "@/lib/navigation";

// Helper function to check if an item or its children are active by slug path
function isItemOrChildrenActive(
  item: NavigationItem,
  slugPath: string[],
  currentSlugPath: string[],
): boolean {
  if (
    slugPath.join("/") === currentSlugPath.slice(0, slugPath.length).join("/")
  )
    return true;
  if (!item.children) return false;
  return item.children.some((child) =>
    isItemOrChildrenActive(child, [...slugPath, child.slug], currentSlugPath),
  );
}

export function useExpandedItems(
  category: ProductCategory | undefined,
  currentSlugPath: string[],
) {
  const autoExpandedItems = useMemo(() => {
    if (!category) return new Set<string>();
    const expanded = new Set<string>();
    // Auto-expand items that contain the current slug path
    const addParentPaths = (
      items: NavigationItem[],
      parentSlugPath: string[],
    ) => {
      items.forEach((item) => {
        const itemSlugPath = [...parentSlugPath, item.slug];
        if (isItemOrChildrenActive(item, itemSlugPath, currentSlugPath)) {
          expanded.add(itemSlugPath.join("/"));
        }
        if (item.children) {
          addParentPaths(item.children, itemSlugPath);
        }
      });
    };
    addParentPaths(category.children || [], [category.slug]);
    return expanded;
  }, [category, currentSlugPath]);

  const [manuallyExpandedItems, setManuallyExpandedItems] = useState<
    Set<string>
  >(new Set());

  const expandedItems = useMemo(() => {
    const combined = new Set([...autoExpandedItems, ...manuallyExpandedItems]);
    return combined;
  }, [autoExpandedItems, manuallyExpandedItems]);

  const toggleExpanded = useCallback((itemKey: string) => {
    setManuallyExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemKey)) {
        newSet.delete(itemKey);
      } else {
        newSet.add(itemKey);
      }
      return newSet;
    });
  }, []);

  return {
    expandedItems,
    toggleExpanded,
  };
}
