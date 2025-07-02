import { memo, useCallback, useMemo } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavigationItem, buildHrefFromSlugs } from "@/lib/navigation";
import { SIDEBAR_STYLES } from "./styles";

interface NavigationItemProps {
  item: NavigationItem;
  level: number;
  slugPath: string[];
  currentSlugPath: string[];
  expandedItems: Set<string>;
  toggleExpanded: (path: string) => void;
  onItemClick?: () => void;
}

function isItemOrChildrenActive(item: NavigationItem, slugPath: string[], currentSlugPath: string[]): boolean {
  if (slugPath.join("/") === currentSlugPath.slice(0, slugPath.length).join("/")) return true;
  if (!item.children) return false;
  return item.children.some(child => isItemOrChildrenActive(child, [...slugPath, child.slug], currentSlugPath));
}

export const NavigationItemComponent = memo<NavigationItemProps>(({ 
  item, 
  level, 
  slugPath,
  currentSlugPath,
  expandedItems,
  toggleExpanded,
  onItemClick
}) => {
  const hasChildren = item.children && item.children.length > 0;
  const isActive = slugPath.join("/") === currentSlugPath.join("/");
  const isParentOfActive = hasChildren && isItemOrChildrenActive(item, slugPath, currentSlugPath);
  const itemKey = slugPath.join("/");

  const shouldExpand = useMemo(() => {
    if (level === 0) return true;
    if (isParentOfActive) return true;
    if (expandedItems.has(itemKey)) return true;
    return false;
  }, [level, isParentOfActive, expandedItems, itemKey]);

  const isExpanded = shouldExpand;

  const handleToggle = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (hasChildren) {
      toggleExpanded(itemKey);
    }
  }, [hasChildren, toggleExpanded, itemKey]);

  const getItemStyles = () => {
    const levelStyle = SIDEBAR_STYLES.navigationItem.level[level as keyof typeof SIDEBAR_STYLES.navigationItem.level] 
      || SIDEBAR_STYLES.navigationItem.level.default;
    const stateStyles = [
      SIDEBAR_STYLES.navigationItem.states.hover,
      SIDEBAR_STYLES.navigationItem.states.focus,
      isActive && SIDEBAR_STYLES.navigationItem.states.active,
      isParentOfActive && !isActive && SIDEBAR_STYLES.navigationItem.states.parentOfActive,
    ].filter(Boolean).join(" ");
    return cn(
      SIDEBAR_STYLES.navigationItem.base,
      levelStyle,
      stateStyles
    );
  };

  const getMarginLeft = () => {
    return level > 0 ? `${Math.min(level * 12, 48)}px` : '0px';
  };

  if (hasChildren) {
    return (
      <div className="w-full">
        <div
          className={getItemStyles()}
          style={{ marginLeft: getMarginLeft() }}
          role="treeitem"
          aria-expanded={isExpanded}
          aria-level={level + 1}
          aria-selected={isActive}
        >
          <Link 
            href={buildHrefFromSlugs(slugPath)}
            className="flex-1 flex items-center min-w-0 focus:outline-none" 
            onClick={onItemClick}
            tabIndex={-1}
          >
            <span className="truncate" title={item.label}>{item.label}</span>
          </Link>
          <button
            onClick={handleToggle}
            className={SIDEBAR_STYLES.expandButton}
            aria-label={isExpanded ? `Collapse ${item.label}` : `Expand ${item.label}`}
            tabIndex={0}
          >
            {isExpanded ? (
              <ChevronDown className="h-3 w-3" />
            ) : (
              <ChevronRight className="h-3 w-3" />
            )}
          </button>
        </div>
        {isExpanded && (
          <div 
            className={SIDEBAR_STYLES.childrenContainer}
            role="group"
            aria-label={`${item.label} submenu`}
          >
            {item.children!.map((child, index) => (
              <NavigationItemComponent
                key={`${child.slug}-${index}`}
                item={child}
                level={level + 1}
                slugPath={[...slugPath, child.slug]}
                currentSlugPath={currentSlugPath}
                onItemClick={onItemClick}
                expandedItems={expandedItems}
                toggleExpanded={toggleExpanded}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={getItemStyles()}
      style={{ marginLeft: getMarginLeft() }}
      role="treeitem"
      aria-level={level + 1}
      aria-selected={isActive}
    >
      <Link 
        href={buildHrefFromSlugs(slugPath)}
        className="block truncate w-full focus:outline-none" 
        onClick={onItemClick} 
        title={item.label}
      >
        {item.label}
      </Link>
    </div>
  );
});

NavigationItemComponent.displayName = "NavigationItemComponent";
