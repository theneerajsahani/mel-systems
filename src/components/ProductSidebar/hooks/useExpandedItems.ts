import { useMemo, useState, useCallback } from "react";
import { NavigationItem, ProductCategory } from "@/lib/navigation";

// Helper function to check if an item or its children are active
function isItemOrChildrenActive(item: NavigationItem, currentPath: string): boolean {
  if (item.href === currentPath) return true;
  if (!item.children) return false;
  
  return item.children.some(child => isItemOrChildrenActive(child, currentPath));
}

export function useExpandedItems(category: ProductCategory | undefined, currentPath: string) {
  const autoExpandedItems = useMemo(() => {
    if (!category) return new Set<string>();
    
    const expanded = new Set<string>();
    
    // Auto-expand items that contain the current path
    const addParentPaths = (items: NavigationItem[]) => {
      items.forEach(item => {
        if (isItemOrChildrenActive(item, currentPath)) {
          expanded.add(item.href || item.label);
        }
        
        if (item.children) {
          addParentPaths(item.children);
        }
      });
    };
    
    addParentPaths(category.children);
    return expanded;
  }, [category, currentPath]);

  const [manuallyExpandedItems, setManuallyExpandedItems] = useState<Set<string>>(new Set());

  const expandedItems = useMemo(() => {
    const combined = new Set([...autoExpandedItems, ...manuallyExpandedItems]);
    return combined;
  }, [autoExpandedItems, manuallyExpandedItems]);

  const toggleExpanded = useCallback((itemKey: string) => {
    setManuallyExpandedItems(prev => {
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
    toggleExpanded
  };
}
