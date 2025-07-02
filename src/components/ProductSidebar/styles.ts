export const SIDEBAR_STYLES = {
  desktop:
    "hidden lg:block w-full bg-white border-r border-gray-200 p-4 max-h-screen overflow-y-auto",

  header: "sticky top-0 bg-white pb-2 border-b border-gray-200 mb-4",

  mobileButton: "flex items-center gap-2 w-full justify-start",

  mobileOverlay: "fixed inset-0 z-50 lg:hidden",

  mobilePanel:
    "fixed inset-y-0 left-0 w-80 bg-white border-r border-gray-200 shadow-lg overflow-y-auto",

  navigationItem: {
    base: "flex items-center justify-between w-full text-left p-2 rounded-md text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1",

    level: {
      0: "font-semibold text-gray-900 border-b border-gray-100 mb-1",
      1: "text-gray-700 font-medium",
      2: "text-gray-600",
      default: "text-gray-500 text-xs",
    },

    states: {
      active:
        "bg-blue-100 text-blue-700 font-medium border-l-2 border-blue-500",
      parentOfActive: "text-blue-600",
      hover: "hover:bg-gray-50 hover:text-gray-900",
      focus: "focus:bg-gray-100",
    },
  },

  expandButton:
    "ml-2 p-1 hover:bg-gray-200 rounded transition-colors flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1",

  childrenContainer: "mt-1 space-y-1",
} as const;
