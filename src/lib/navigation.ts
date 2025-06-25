export interface NavigationItem {
  label: string;
  href?: string;
  children?: NavigationItem[];
}

export interface ProductCategory {
  label: string;
  href: string;
  children: NavigationItem[];
}

export const productNavigation: ProductCategory[] = [
  {
    label: "Oil Conditioning",
    href: "/products/oil-conditioning",
    children: [
      {
        label: "TanDelta",
        href: "/products/oil-conditioning/tandelta",
        children: [
          {
            label: "OQSx-G2 Oil Quality Sensor",
            href: "/products/oil-conditioning/tandelta/oqsx-g2-oil-quality-sensor"
          },
          {
            label: "OQSx-G2 HAZ Oil Quality Sensor",
            href: "/products/oil-conditioning/tandelta/oqsx-g2-haz-oil-quality-sensor"
          },
          {
            label: "MOT – Mobile Oil Test Kit",
            href: "/products/oil-conditioning/tandelta/mot-mobile-oil-test-kit"
          },
          {
            label: "OQSX-G2 Sensor kit",
            href: "/products/oil-conditioning/tandelta/oqsx-g2-sensor-kit"
          },
          {
            label: "SENSE2 Display Kit",
            href: "/products/oil-conditioning/tandelta/sense2-display-kit"
          },
          {
            label: "SENSE3 Gateway Kit",
            href: "/products/oil-conditioning/tandelta/sense3-gateway-kit"
          },
          {
            label: "Gateway (OQTg)",
            href: "/products/oil-conditioning/tandelta/gateway-oqtg"
          },
          {
            label: "OQDe-G2 Display Express",
            href: "/products/oil-conditioning/tandelta/oqde-g2-display-express"
          },
          {
            label: "Gateway Hub",
            href: "/products/oil-conditioning/tandelta/gateway-hub"
          },
          {
            label: "Manifold",
            href: "/products/oil-conditioning/tandelta/manifold"
          },
          {
            label: "Cables",
            href: "/products/oil-conditioning/tandelta/cables"
          }
        ]
      },
      {
        label: "Hydrotechnik",
        href: "/products/oil-conditioning/hydrotechnik",
        children: [
          {
            label: "Watchlog USB",
            href: "/products/oil-conditioning/hydrotechnik/watchlog-usb",
            children: [
              {
                label: "Watchlog USB Dual Pressure and Temperature Sensor",
                href: "/products/oil-conditioning/hydrotechnik/watchlog-usb/dual-pressure-temperature-sensor"
              },
              {
                label: "Watchlog USB Windows® PC/tablet pressure & temperature measurement software",
                href: "/products/oil-conditioning/hydrotechnik/watchlog-usb/windows-software"
              }
            ]
          },
          {
            label: "Watchlog Bluetooth Sensors, Gauges and Mobile Apps",
            href: "/products/oil-conditioning/hydrotechnik/watchlog-bluetooth-sensors",
            children: [
              {
                label: "Watchlog Bluetooth Pressure & Temperature Sensors, Gauges and App for up to 4 sensors connected simultaneously",
                href: "/products/oil-conditioning/hydrotechnik/watchlog-bluetooth-sensors/4-sensors",
                children: [
                  {
                    label: "WLB-PT Compact Bluetooth Pressure Sensor",
                    href: "/products/oil-conditioning/hydrotechnik/watchlog-bluetooth-sensors/4-sensors/wlb-pt"
                  },
                  {
                    label: "WLB-TT Compact Bluetooth Temperature Sensor",
                    href: "/products/oil-conditioning/hydrotechnik/watchlog-bluetooth-sensors/4-sensors/wlb-tt"
                  },
                  {
                    label: "WLB-DDPG Series Bluetooth Digital Datalogging Pressure Gauges",
                    href: "/products/oil-conditioning/hydrotechnik/watchlog-bluetooth-sensors/4-sensors/wlb-ddpg"
                  },
                  {
                    label: "WLB-DPG Series Watchlog Bluetooth Digital Pressure Gauge",
                    href: "/products/oil-conditioning/hydrotechnik/watchlog-bluetooth-sensors/4-sensors/wlb-dpg"
                  },
                  {
                    label: "Watchlog Bluetooth Live View & Datalogging App for iOS and Android",
                    href: "/products/oil-conditioning/hydrotechnik/watchlog-bluetooth-sensors/4-sensors/mobile-app"
                  },
                  {
                    label: "DDPG Series Digital Datalogging Blutooth Pressure Gauge & Minimess® Test Kit",
                    href: "/products/oil-conditioning/hydrotechnik/watchlog-bluetooth-sensors/4-sensors/ddpg-test-kit"
                  },
                  {
                    label: "DGP Series Digital Bluetooth Pressure Gauge & Minimess Test Kit",
                    href: "/products/oil-conditioning/hydrotechnik/watchlog-bluetooth-sensors/4-sensors/dgp-test-kit"
                  }
                ]
              },
              {
                label: "Watchlog Bluetooth-Plus Pressure, Level & Force Sensors and App for up to 12 connected sensors & advanced app calculation features",
                href: "/products/oil-conditioning/hydrotechnik/watchlog-bluetooth-sensors/12-sensors",
                children: [
                  {
                    label: "HT-WLBP Watchlog Bluetooth-Plus Pressure Sensor",
                    href: "/products/oil-conditioning/hydrotechnik/watchlog-bluetooth-sensors/12-sensors/ht-wlbp"
                  },
                  {
                    label: "HT-WLBL Watchlog Bluetooth-Plus Hydrostatic Level Sensors",
                    href: "/products/oil-conditioning/hydrotechnik/watchlog-bluetooth-sensors/12-sensors/ht-wlbl"
                  },
                  {
                    label: "HT-WLBLC Watchlog Bluetooth-Plus Compression Load Cells",
                    href: "/products/oil-conditioning/hydrotechnik/watchlog-bluetooth-sensors/12-sensors/ht-wlblc"
                  },
                  {
                    label: "HT-WLBLL Watchlog Bluetooth-Plus Compression Load Link",
                    href: "/products/oil-conditioning/hydrotechnik/watchlog-bluetooth-sensors/12-sensors/ht-wlbll"
                  },
                  {
                    label: "Watchlog Bluetooth-Plus iOS and Android App",
                    href: "/products/oil-conditioning/hydrotechnik/watchlog-bluetooth-sensors/12-sensors/mobile-app"
                  }
                ]
              }
            ]
          },
          {
            label: "Watchlog Wireless Pressure, Temperature and Flow Sensors",
            href: "/products/oil-conditioning/hydrotechnik/watchlog-wireless-sensors",
            children: [
              {
                label: "Watchlog Wireless Pressure, Flow & Temperature Test Kit",
                href: "/products/oil-conditioning/hydrotechnik/watchlog-wireless-sensors/test-kit"
              },
              {
                label: "Watchlog Wireless Vision",
                href: "/products/oil-conditioning/hydrotechnik/watchlog-wireless-sensors/vision"
              },
              {
                label: "Watchlog ATEX Wireless Pressure Sensors",
                href: "/products/oil-conditioning/hydrotechnik/watchlog-wireless-sensors/atex-pressure"
              },
              {
                label: "Watchlog Wireless Pressure Sensors",
                href: "/products/oil-conditioning/hydrotechnik/watchlog-wireless-sensors/pressure"
              },
              {
                label: "Watchlog Wireless Temperature Sensors",
                href: "/products/oil-conditioning/hydrotechnik/watchlog-wireless-sensors/temperature"
              },
              {
                label: "Watchlog Wireless Linear Position Sensor",
                href: "/products/oil-conditioning/hydrotechnik/watchlog-wireless-sensors/linear-position"
              },
              {
                label: "Watchlog Wireless Turbine Flow Meters",
                href: "/products/oil-conditioning/hydrotechnik/watchlog-wireless-sensors/turbine-flow"
              },
              {
                label: "Watchlog Wireless Oval Gear Flow Meters",
                href: "/products/oil-conditioning/hydrotechnik/watchlog-wireless-sensors/oval-gear-flow"
              },
              {
                label: "Watchlog Wireless USB Base Stations / Receivers",
                href: "/products/oil-conditioning/hydrotechnik/watchlog-wireless-sensors/usb-base-stations"
              },
              {
                label: "WLW-AR Wireless Signal Extender",
                href: "/products/oil-conditioning/hydrotechnik/watchlog-wireless-sensors/wlw-ar"
              },
              {
                label: "Watchlog Wireless Signal Gateway Modules",
                href: "/products/oil-conditioning/hydrotechnik/watchlog-wireless-sensors/gateway-modules"
              },
              {
                label: "Watchlog Wireless Configuring, Monitoring & Logging Software",
                href: "/products/oil-conditioning/hydrotechnik/watchlog-wireless-sensors/software"
              },
              {
                label: "Watchlog Wireless Accessories",
                href: "/products/oil-conditioning/hydrotechnik/watchlog-wireless-sensors/accessories"
              },
              {
                label: "WLWPL Series Cellular Level Sensor",
                href: "/products/oil-conditioning/hydrotechnik/watchlog-wireless-sensors/wlwpl-cellular"
              }
            ]
          },
          {
            label: "Watchlog Pro Remote Monitoring",
            href: "/products/oil-conditioning/hydrotechnik/watchlog-pro-remote-monitoring",
            children: [
              {
                label: "Watchlog PRO ORB Cellular / Wi-Fi Cloud Gateway for Mobile Applications",
                href: "/products/oil-conditioning/hydrotechnik/watchlog-pro-remote-monitoring/pro-orb"
              },
              {
                label: "Watchlog PRO QUAD Cellular / Wi-Fi Cloud Gateway for Fixed Systems",
                href: "/products/oil-conditioning/hydrotechnik/watchlog-pro-remote-monitoring/pro-quad"
              },
              {
                label: "Watchlog Pro Hydraulic System Monitoring",
                href: "/products/oil-conditioning/hydrotechnik/watchlog-pro-remote-monitoring/hydraulic-monitoring"
              },
              {
                label: "Watchlog PRO Custom Cloud Monitoring",
                href: "/products/oil-conditioning/hydrotechnik/watchlog-pro-remote-monitoring/custom-cloud"
              }
            ]
          },
          {
            label: "Watchlog CSV Visualizer Software",
            href: "/products/oil-conditioning/hydrotechnik/watchlog-csv-visualizer"
          }
        ]
      },
      {
        label: "Filtertechnik",
        href: "/products/oil-conditioning/filtertechnik",
        children: [
          {
            label: "S120 Digital Imaging Particle Counter",
            href: "/products/oil-conditioning/filtertechnik/s120-digital-imaging-particle-counter"
          },
          {
            label: "Particle Pal",
            href: "/products/oil-conditioning/filtertechnik/particle-pal",
            children: [
              {
                label: "Particle Pal - Laser Portable Particle Counter",
                href: "/products/oil-conditioning/filtertechnik/particle-pal/laser-portable-particle-counter"
              },
              {
                label: "Particle Pal + Water Sensor - Laser Portable Particle Counter",
                href: "/products/oil-conditioning/filtertechnik/particle-pal/laser-water-sensor"
              },
              {
                label: "Particle Pal + Water & Density Sensor - Laser Portable Particle Counter",
                href: "/products/oil-conditioning/filtertechnik/particle-pal/laser-water-density"
              },
              {
                label: "Remaining Oil Life Portable Test Kit",
                href: "/products/oil-conditioning/filtertechnik/particle-pal/oil-life-test-kit"
              },
              {
                label: "Particle Pal Pro - Digital Imaging Portable Particle Counter",
                href: "/products/oil-conditioning/filtertechnik/particle-pal/pro-digital-imaging"
              },
              {
                label: "Particle Pal Pro + Water Sensor - Digital Imaging Portable Particle Counter",
                href: "/products/oil-conditioning/filtertechnik/particle-pal/pro-water-sensor"
              },
              {
                label: "Particle Pal Pro : Life - Digital Imaging Portable Particle Counter : Including water and remaining oil life sensor",
                href: "/products/oil-conditioning/filtertechnik/particle-pal/pro-life"
              },
              {
                label: "Particle Pal Pro + Viscosity - Digital Imaging Portable Particle Counter",
                href: "/products/oil-conditioning/filtertechnik/particle-pal/pro-viscosity"
              },
              {
                label: "Particle Pal Plus + Water RH%: Digital Imaging Portable Particle Counter",
                href: "/products/oil-conditioning/filtertechnik/particle-pal/plus-water-rh"
              },
              {
                label: "Particle Pal Plus + Water PPM: Digital Imaging Portable Particle Counter",
                href: "/products/oil-conditioning/filtertechnik/particle-pal/plus-water-ppm"
              },
              {
                label: "Particle Pal Plus: Digital Imaging Portable Particle Counter",
                href: "/products/oil-conditioning/filtertechnik/particle-pal/plus"
              },
              {
                label: "Particle Pal Plus High Viscosity: Digital Imaging Portable Particle Counter",
                href: "/products/oil-conditioning/filtertechnik/particle-pal/plus-high-viscosity"
              },
              {
                label: "Particle Pal Plus + Water PPM and Density Sensor : Digital Imaging Portable Particle Counter",
                href: "/products/oil-conditioning/filtertechnik/particle-pal/plus-water-ppm-density"
              },
              {
                label: "Particle Pal Plus High Viscosity + Water RH%: Digital Imaging Portable Particle Counter",
                href: "/products/oil-conditioning/filtertechnik/particle-pal/plus-high-viscosity-water-rh"
              },
              {
                label: "Particle Pal Plus High Viscosity: Particulate, Water RH%, Viscosity and Density",
                href: "/products/oil-conditioning/filtertechnik/particle-pal/plus-high-viscosity-complete"
              }
            ]
          }
        ]
      },
      {
        label: "Evamo",
        href: "/products/oil-conditioning/evamo"
      }
    ]
  },
  {
    label: "Systems",
    href: "/products/systems",
    children: [
      {
        label: "Motec",
        href: "/products/systems/motec",
        children: [
          {
            label: "Rear View Cameras",
            href: "/products/systems/motec/rear-view-cameras",
            children: [
              {
                label: "MC3000B",
                href: "/products/systems/motec/rear-view-cameras/mc3000b"
              },
              {
                label: "MC3000B-VA",
                href: "/products/systems/motec/rear-view-cameras/mc3000b-va"
              },
              {
                label: "MC3000C-IR & WL",
                href: "/products/systems/motec/rear-view-cameras/mc3000c-ir-wl"
              },
              {
                label: "MC4000A",
                href: "/products/systems/motec/rear-view-cameras/mc4000a"
              },
              {
                label: "MC4000A-IR & WL",
                href: "/products/systems/motec/rear-view-cameras/mc4000a-ir-wl"
              },
              {
                label: "MC6000D",
                href: "/products/systems/motec/rear-view-cameras/mc6000d"
              },
              {
                label: "MC7000C Series",
                href: "/products/systems/motec/rear-view-cameras/mc7000c-series"
              },
              {
                label: "MC7180N",
                href: "/products/systems/motec/rear-view-cameras/mc7180n"
              },
              {
                label: "MC7000B-MH1",
                href: "/products/systems/motec/rear-view-cameras/mc7000b-mh1"
              },
              {
                label: "MC7000B-MH2",
                href: "/products/systems/motec/rear-view-cameras/mc7000b-mh2"
              }
            ]
          },
          {
            label: "Front Camera System",
            href: "/products/systems/motec/front-camera-system",
            children: [
              {
                label: "MC3050B-4-VKMS",
                href: "/products/systems/motec/front-camera-system/mc3050b-4-vkms"
              }
            ]
          },
          {
            label: "Digital Camera's",
            href: "/products/systems/motec/digital-cameras",
            children: [
              {
                label: "MCDB7000A",
                href: "/products/systems/motec/digital-cameras/mcdb7000a"
              },
              {
                label: "MCDE3000",
                href: "/products/systems/motec/digital-cameras/mcde3000"
              },
              {
                label: "MCDL7000A",
                href: "/products/systems/motec/digital-cameras/mcdl7000a"
              },
              {
                label: "MCDE7000A",
                href: "/products/systems/motec/digital-cameras/mcde7000a"
              },
              {
                label: "MCDE5200",
                href: "/products/systems/motec/digital-cameras/mcde5200"
              }
            ]
          },
          {
            label: "Monitors",
            href: "/products/systems/motec/monitors",
            children: [
              {
                label: "MD3071A",
                href: "/products/systems/motec/monitors/md3071a"
              },
              {
                label: "MD3073",
                href: "/products/systems/motec/monitors/md3073"
              },
              {
                label: "MD3100",
                href: "/products/systems/motec/monitors/md3100"
              },
              {
                label: "17 Zoll LCD Monitor",
                href: "/products/systems/motec/monitors/17-zoll-lcd"
              },
              {
                label: "MD4074-Quad-IP30 & IP67",
                href: "/products/systems/motec/monitors/md4074-quad"
              }
            ]
          },
          {
            label: "Digital Monitors",
            href: "/products/systems/motec/digital-monitors",
            children: [
              {
                label: "MDDE1072",
                href: "/products/systems/motec/digital-monitors/mdde1072"
              },
              {
                label: "MDDE1102",
                href: "/products/systems/motec/digital-monitors/mdde1102"
              },
              {
                label: "MDDE1122",
                href: "/products/systems/motec/digital-monitors/mdde1122"
              }
            ]
          },
          {
            label: "Fork Camera's",
            href: "/products/systems/motec/fork-cameras",
            children: [
              {
                label: "MC9000",
                href: "/products/systems/motec/fork-cameras/mc9000"
              },
              {
                label: "MC9150B",
                href: "/products/systems/motec/fork-cameras/mc9150b"
              },
              {
                label: "MC9250",
                href: "/products/systems/motec/fork-cameras/mc9250"
              },
              {
                label: "MC925C",
                href: "/products/systems/motec/fork-cameras/mc925c"
              }
            ]
          },
          {
            label: "Video Control Units",
            href: "/products/systems/motec/video-control-units",
            children: [
              {
                label: "MVCD2000",
                href: "/products/systems/motec/video-control-units/mvcd2000"
              },
              {
                label: "MVCU1300",
                href: "/products/systems/motec/video-control-units/mvcu1300"
              },
              {
                label: "MVCU1400",
                href: "/products/systems/motec/video-control-units/mvcu1400"
              },
              {
                label: "MVCU1500",
                href: "/products/systems/motec/video-control-units/mvcu1500"
              },
              {
                label: "MVCU1600",
                href: "/products/systems/motec/video-control-units/mvcu1600"
              },
              {
                label: "MB1205",
                href: "/products/systems/motec/video-control-units/mb1205"
              },
              {
                label: "MB1405-Quad",
                href: "/products/systems/motec/video-control-units/mb1405-quad"
              },
              {
                label: "MBE5200",
                href: "/products/systems/motec/video-control-units/mbe5200"
              },
              {
                label: "MV13",
                href: "/products/systems/motec/video-control-units/mv13"
              },
              {
                label: "MV5201-1",
                href: "/products/systems/motec/video-control-units/mv5201-1"
              }
            ]
          },
          {
            label: "Crane Camera's",
            href: "/products/systems/motec/crane-cameras",
            children: [
              {
                label: "MWS",
                href: "/products/systems/motec/crane-cameras/mws"
              },
              {
                label: "MC5201",
                href: "/products/systems/motec/crane-cameras/mc5201"
              },
              {
                label: "MCDE5200",
                href: "/products/systems/motec/crane-cameras/mcde5200"
              }
            ]
          },
          {
            label: "Transmissions",
            href: "/products/systems/motec/transmissions",
            children: [
              {
                label: "MVRD1100",
                href: "/products/systems/motec/transmissions/mvrd1100"
              },
              {
                label: "MAB2000",
                href: "/products/systems/motec/transmissions/mab2000"
              },
              {
                label: "MVR5200",
                href: "/products/systems/motec/transmissions/mvr5200"
              },
              {
                label: "MTP-VS and MTP-VE",
                href: "/products/systems/motec/transmissions/mtp-vs-ve"
              },
              {
                label: "MKW-Kabel",
                href: "/products/systems/motec/transmissions/mkw-kabel"
              },
              {
                label: "MK5-cabel",
                href: "/products/systems/motec/transmissions/mk5-cabel"
              },
              {
                label: "MK25.15-MA2-cable",
                href: "/products/systems/motec/transmissions/mk25-15-ma2-cable"
              },
              {
                label: "Mk67-cable",
                href: "/products/systems/motec/transmissions/mk67-cable"
              },
              {
                label: "MK84-cable",
                href: "/products/systems/motec/transmissions/mk84-cable"
              },
              {
                label: "MK228-cabel",
                href: "/products/systems/motec/transmissions/mk228-cabel"
              },
              {
                label: "MK232-cabel",
                href: "/products/systems/motec/transmissions/mk232-cabel"
              },
              {
                label: "MK295-cabel",
                href: "/products/systems/motec/transmissions/mk295-cabel"
              },
              {
                label: "MK296-cabel",
                href: "/products/systems/motec/transmissions/mk296-cabel"
              }
            ]
          }
        ]
      }
    ]
  }
];

// Helper function to find the current navigation context
export function findCurrentNavigation(pathname: string): {
  category?: ProductCategory;
  brand?: NavigationItem;
  product?: NavigationItem;
} {
  // Helper function to recursively search through nested items
  function findInChildren(
    items: NavigationItem[], 
    targetPath: string,
    category: ProductCategory,
    brand?: NavigationItem,
    product?: NavigationItem
  ): { category?: ProductCategory; brand?: NavigationItem; product?: NavigationItem } | null {
    for (const item of items) {
      if (item.href === targetPath) {
        return { category, brand: brand || item, product: product || item };
      }
      
      if (item.children) {
        const found = findInChildren(
          item.children, 
          targetPath, 
          category, 
          brand || item, 
          product || item
        );
        if (found) return found;
      }
      
      // Also check if the current path starts with this item's href (for partial matches)
      if (item.href && targetPath.startsWith(item.href)) {
        if (item.children) {
          const found = findInChildren(
            item.children, 
            targetPath, 
            category, 
            brand || item, 
            product || item
          );
          if (found) return found;
        }
        return { category, brand: brand || item, product: product || item };
      }
    }
    return null;
  }

  for (const category of productNavigation) {
    if (pathname.startsWith(category.href)) {
      // First try to find exact match
      const exactMatch = findInChildren(category.children, pathname, category);
      if (exactMatch) return exactMatch;
      
      // If no exact match, find the best partial match
      for (const brand of category.children) {
        if (brand.href && pathname.startsWith(brand.href)) {
          const partialMatch = findInChildren(brand.children || [], pathname, category, brand);
          if (partialMatch) return partialMatch;
          return { category, brand };
        }
      }
      return { category };
    }
  }
  return {};
}
