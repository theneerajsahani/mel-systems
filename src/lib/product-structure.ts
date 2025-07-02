export interface ProductNode {
  label: string;
  slug: string;
  children?: ProductNode[];
}

// Helper to generate slugs from labels (for reference, not used inline)
export function slugify(label: string): string {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export const productStructure: ProductNode[] = [
  {
    label: "Oil Conditioning",
    slug: "oil-conditioning",
    children: [
      {
        label: "TanDelta",
        slug: "tandelta",
        children: [
          {
            label: "OQSx-G2 Oil Quality Sensor",
            slug: "oqsx-g2-oil-quality-sensor",
          },
          {
            label: "OQSx-G2 HAZ Oil Quality Sensor",
            slug: "oqsx-g2-haz-oil-quality-sensor",
          },
          {
            label: "MOT – Mobile Oil Test Kit",
            slug: "mot-mobile-oil-test-kit",
          },
          { label: "OQSX-G2 Sensor kit", slug: "oqsx-g2-sensor-kit" },
          { label: "SENSE2 Display Kit", slug: "sense2-display-kit" },
          { label: "SENSE3 Gateway Kit", slug: "sense3-gateway-kit" },
          { label: "Gateway (OQTg)", slug: "gateway-oqtg" },
          { label: "OQDe-G2 Display Express", slug: "oqde-g2-display-express" },
          { label: "Gateway Hub", slug: "gateway-hub" },
          { label: "Manifold", slug: "manifold" },
          {
            label: "Cables",
            slug: "cables",
            children: [
              { label: "Cable J", slug: "cable-j" },
              { label: "Cable X", slug: "cable-x" },
              { label: "Cable M", slug: "cable-m" },
              { label: "Cable HP", slug: "cable-hp" },
              { label: "Cable BBHaz", slug: "cable-bbhaz" },
              { label: "Cable BBSt", slug: "cable-bbst" },
              { label: "Cable DB", slug: "cable-db" },
              { label: "Cable HB", slug: "cable-hb" },
              { label: "Cable GH", slug: "cable-gh" },
              { label: "Cable SD", slug: "cable-sd" },
              { label: "Cable SB", slug: "cable-sb" },
              { label: "Cable SH", slug: "cable-sh" },
              { label: "Cable HH", slug: "cable-hh" },
              { label: "Cable HCP-1", slug: "cable-hcp-1" },
            ],
          },
        ],
      },
      {
        label: "Hydrotechnik",
        slug: "hydrotechnik",
        children: [
          {
            label: "Watchlog USB",
            slug: "watchlog-usb",
            children: [
              {
                label: "Watchlog USB Dual Pressure and Temperature Sensor",
                slug: "watchlog-usb-dual-pressure-and-temperature-sensor",
              },
              {
                label:
                  "Watchlog USB Windows® PC/tablet pressure & temperature measurement software",
                slug: "watchlog-usb-windows-pc-tablet-pressure-temperature-measurement-software",
              },
            ],
          },
          {
            label: "Watchlog Bluetooth Sensors, Gauges and Mobile Apps",
            slug: "watchlog-bluetooth-sensors-gauges-and-mobile-apps",
            children: [
              {
                label:
                  "Watchlog Bluetooth Pressure & Temperature Sensors, Gauges and App for up to 4 sensors connected simultaneously",
                slug: "watchlog-bluetooth-pressure-temperature-sensors-gauges-and-app-for-up-to-4-sensors-connected-simultaneously",
                children: [
                  {
                    label: "WLB-PT Compact Bluetooth Pressure Sensor",
                    slug: "wlb-pt-compact-bluetooth-pressure-sensor",
                  },
                  {
                    label: "WLB-TT Compact Bluetooth Temperature Sensor",
                    slug: "wlb-tt-compact-bluetooth-temperature-sensor",
                  },
                  {
                    label:
                      "WLB-DDPG Series Bluetooth Digital Datalogging Pressure Gauges",
                    slug: "wlb-ddpg-series-bluetooth-digital-datalogging-pressure-gauges",
                  },
                  {
                    label:
                      "WLB-DPG Series Watchlog Bluetooth Digital Pressure Gauge",
                    slug: "wlb-dpg-series-watchlog-bluetooth-digital-pressure-gauge",
                  },
                  {
                    label:
                      "Watchlog Bluetooth Live View & Datalogging App for iOS and Android",
                    slug: "watchlog-bluetooth-live-view-datalogging-app-for-ios-and-android",
                  },
                  {
                    label:
                      "DDPG Series Digital Datalogging Bluetooth Pressure Gauge & Minimess® Test Kit",
                    slug: "ddpg-series-digital-datalogging-bluetooth-pressure-gauge-minimess-test-kit",
                  },
                  {
                    label:
                      "DPG Series Digital Bluetooth Pressure Gauge & Minimess® Test Kit",
                    slug: "dpg-series-digital-bluetooth-pressure-gauge-minimess-test-kit",
                  },
                ],
              },
              {
                label:
                  "Watchlog Bluetooth-Plus Pressure, Level & Force Sensors and App for up to 12 connected sensors & advanced app calculation features",
                slug: "watchlog-bluetooth-plus-pressure-level-force-sensors-and-app-for-up-to-12-connected-sensors-advanced-app-calculation-features",
                children: [
                  {
                    label: "HT-WLBP Watchlog Bluetooth-Plus Pressure Sensor",
                    slug: "ht-wlbp-watchlog-bluetooth-plus-pressure-sensor",
                  },
                  {
                    label:
                      "HT-WLBL Watchlog Bluetooth-Plus Hydrostatic Level Sensors",
                    slug: "ht-wlbl-watchlog-bluetooth-plus-hydrostatic-level-sensors",
                  },
                  {
                    label:
                      "HT-WLBLC Watchlog Bluetooth-Plus Compression Load Cells",
                    slug: "ht-wlblc-watchlog-bluetooth-plus-compression-load-cells",
                  },
                  {
                    label:
                      "HT-WLBLL Watchlog Bluetooth-Plus Compression Load Link",
                    slug: "ht-wlbll-watchlog-bluetooth-plus-compression-load-link",
                  },
                  {
                    label: "Watchlog Bluetooth-Plus iOS and Android App",
                    slug: "watchlog-bluetooth-plus-ios-and-android-app",
                  },
                ],
              },
            ],
          },
          {
            label: "Watchlog Wireless Pressure, Temperature and Flow Sensors",
            slug: "watchlog-wireless-pressure-temperature-and-flow-sensors",
            children: [
              {
                label:
                  "Watchlog Wireless Pressure, Flow & Temperature Test Kit",
                slug: "watchlog-wireless-pressure-flow-temperature-test-kit",
              },
              {
                label: "Watchlog Wireless Vision",
                slug: "watchlog-wireless-vision",
              },
              {
                label: "Watchlog ATEX Wireless Pressure Sensors",
                slug: "watchlog-atex-wireless-pressure-sensors",
              },
              {
                label: "Watchlog Wireless Pressure Sensors",
                slug: "watchlog-wireless-pressure-sensors",
              },
              {
                label: "Watchlog Wireless Temperature Sensors",
                slug: "watchlog-wireless-temperature-sensors",
              },
              {
                label: "Watchlog Wireless Linear Position Sensor",
                slug: "watchlog-wireless-linear-position-sensor",
              },
              {
                label: "Watchlog Wireless Turbine Flow Meters",
                slug: "watchlog-wireless-turbine-flow-meters",
              },
              {
                label: "Watchlog Wireless Oval Gear Flow Meters",
                slug: "watchlog-wireless-oval-gear-flow-meters",
              },
              {
                label: "Watchlog Wireless USB Base Stations / Receivers",
                slug: "watchlog-wireless-usb-base-stations-receivers",
              },
              {
                label: "WLW-AR Wireless Signal Extender",
                slug: "wlw-ar-wireless-signal-extender",
              },
              {
                label: "Watchlog Wireless Signal Gateway Modules",
                slug: "watchlog-wireless-signal-gateway-modules",
              },
              {
                label:
                  "Watchlog Wireless Configuring, Monitoring & Logging Software",
                slug: "watchlog-wireless-configuring-monitoring-logging-software",
              },
              {
                label: "Watchlog Wireless Accessories",
                slug: "watchlog-wireless-accessories",
              },
              {
                label: "WLWPL Series Cellular Level Sensor",
                slug: "wlwpl-series-cellular-level-sensor",
              },
            ],
          },
          {
            label: "Watchlog Pro Remote Monitoring",
            slug: "watchlog-pro-remote-monitoring",
            children: [
              {
                label:
                  "Watchlog PRO ORB Cellular / Wi-Fi Cloud Gateway for Mobile Applications",
                slug: "watchlog-pro-orb-cellular-wi-fi-cloud-gateway-for-mobile-applications",
              },
              {
                label:
                  "Watchlog PRO QUAD Cellular / Wi-Fi Cloud Gateway for Fixed Systems",
                slug: "watchlog-pro-quad-cellular-wi-fi-cloud-gateway-for-fixed-systems",
              },
              {
                label: "Watchlog Pro Hydraulic System Monitoring",
                slug: "watchlog-pro-hydraulic-system-monitoring",
              },
              {
                label: "Watchlog PRO Custom Cloud Monitoring",
                slug: "watchlog-pro-custom-cloud-monitoring",
              },
            ],
          },
          {
            label: "Watchlog CSV Visualizer Software",
            slug: "watchlog-csv-visualizer-software",
          },
        ],
      },
      {
        label: "Filtertechnik",
        slug: "filtertechnik",
        children: [
          {
            label: "S120 Digital Imaging Particle Counter",
            slug: "s120-digital-imaging-particle-counter",
          },
          {
            label: "Particle Pal",
            slug: "particle-pal",
            children: [
              {
                label: "FS9V2 - Particle Pal - Laser Portable Particle Counter",
                slug: "fs9v2-particle-pal-laser-portable-particle-counter",
              },
              {
                label:
                  "FS9V2-RH - Particle Pal + Water Sensor - Laser Portable Particle Counter",
                slug: "fs9v2-rh-particle-pal-water-sensor-laser-portable-particle-counter",
              },
              {
                label:
                  "FS9V2-RH-DEN - Particle Pal + Water & Density Sensor - Laser Portable Particle Counter",
                slug: "fs9v2-rh-den-particle-pal-water-density-sensor-laser-portable-particle-counter",
              },
              {
                label: "FS9-OLO - Remaining Oil Life Portable Test Kit",
                slug: "fs9-olo-remaining-oil-life-portable-test-kit",
              },
              {
                label:
                  "FS9V3 - Particle Pal Pro - Digital Imaging Portable Particle Counter",
                slug: "fs9v3-particle-pal-pro-digital-imaging-portable-particle-counter",
              },
              {
                label:
                  "FS9V3-RH - Particle Pal Pro + Water Sensor - Digital Imaging Portable Particle Counter",
                slug: "fs9v3-rh-particle-pal-pro-water-sensor-digital-imaging-portable-particle-counter",
              },
              {
                label:
                  "FS9V3-OLU - Particle Pal Pro: Life - Digital Imaging Portable Particle Counter: Including water and remaining oil life sensor",
                slug: "fs9v3-olu-particle-pal-pro-life-digital-imaging-portable-particle-counter-including-water-and-remaining-oil-life-sensor",
              },
              {
                label:
                  "FS9V3-OLU-VISCO - Particle Pal Pro + Viscosity - Digital Imaging Portable Particle Counter",
                slug: "fs9v3-olu-visco-particle-pal-pro-viscosity-digital-imaging-portable-particle-counter",
              },
              {
                label:
                  "FS9V4-RH - Particle Pal Plus + Water RH%: Digital Imaging Portable Particle Counter",
                slug: "fs9v4-rh-particle-pal-plus-water-rh-digital-imaging-portable-particle-counter",
              },
              {
                label:
                  "FS9V4-PPM - Particle Pal Plus + Water PPM: Digital Imaging Portable Particle Counter",
                slug: "fs9v4-ppm-particle-pal-plus-water-ppm-digital-imaging-portable-particle-counter",
              },
              {
                label:
                  "FS9V4 - Particle Pal Plus: Digital Imaging Portable Particle Counter",
                slug: "fs9v4-particle-pal-plus-digital-imaging-portable-particle-counter",
              },
              {
                label:
                  "FS9V4-HV - Particle Pal Plus High Viscosity: Digital Imaging Portable Particle Counter",
                slug: "fs9v4-hv-particle-pal-plus-high-viscosity-digital-imaging-portable-particle-counter",
              },
              {
                label:
                  "FS9V4-PPM-DEN - Particle Pal Plus + Water PPM and Density Sensor: Digital Imaging Portable Particle Counter",
                slug: "fs9v4-ppm-den-particle-pal-plus-water-ppm-and-density-sensor-digital-imaging-portable-particle-counter",
              },
              {
                label:
                  "FS9V4-RH-HV - Particle Pal Plus High Viscosity + Water RH%: Digital Imaging Portable Particle Counter",
                slug: "fs9v4-rh-hv-particle-pal-plus-high-viscosity-water-rh-digital-imaging-portable-particle-counter",
              },
              {
                label:
                  "FS9V4-RH-V-D-HV - Particle Pal Plus High Viscosity: Particulate, Water RH%, Viscosity and Density",
                slug: "fs9v4-rh-v-d-hv-particle-pal-plus-high-viscosity-particulate-water-rh-viscosity-and-density",
              },
            ],
          },
        ],
      },
      {
        label: "Evamo",
        slug: "evamo",
        children: [
          {
            label: "Evamo - Smart Bubble System",
            slug: "evamo-smart-bubble-system",
          },
        ],
      },
    ],
  },
  {
    label: "Systems",
    slug: "systems",
    children: [
      {
        label: "Motec",
        slug: "motec",
        children: [
          {
            label: "Rear View Cameras",
            slug: "rear-view-cameras",
            children: [
              {
                label: "MC3000B - Heavy-Duty Camera",
                slug: "mc3000b-heavy-duty-camera",
              },
              {
                label: "MC3000B-VA - Heavy-duty stainless steel-camera",
                slug: "mc3000b-va-heavy-duty-stainless-steel-camera",
              },
              {
                label:
                  "MC3000C-IR & WL - Night vision-compatible heavy-duty infrared camera with built-in light",
                slug: "mc3000c-ir-wl-night-vision-compatible-heavy-duty-infrared-camera-with-built-in-light",
              },
              {
                label: "MC4000A - Heavy-duty camera",
                slug: "mc4000a-heavy-duty-camera",
              },
              {
                label:
                  "MC4000A-IR & WL - Night-vision-compatible heavy-duty infrared camera with built-in light",
                slug: "mc4000a-ir-wl-night-vision-compatible-heavy-duty-infrared-camera-with-built-in-light",
              },
              {
                label: "MC6000D - Sturdy universal camera",
                slug: "mc6000d-sturdy-universal-camera",
              },
              {
                label: "MC7000C Series - Heavy Duty Camera",
                slug: "mc7000c-series-heavy-duty-camera",
              },
              {
                label: "MC7180N - Wide-angle camera",
                slug: "mc7180n-wide-angle-camera",
              },
              {
                label: "MC7000B-MH1 - Heavy Duty Camera",
                slug: "mc7000b-mh1-heavy-duty-camera",
              },
              {
                label: "MC7000B-MH2 Heavy Duty Camera",
                slug: "mc7000b-mh2-heavy-duty-camera",
              },
            ],
          },
          {
            label: "Front Camera System",
            slug: "front-camera-system",
            children: [
              {
                label:
                  "MC3050B-4-VKMS - Heavy Duty Camera for front implements",
                slug: "mc3050b-4-vkms-heavy-duty-camera-for-front-implements",
              },
            ],
          },
          {
            label: "Digital Camera's",
            slug: "digital-cameras",
            children: [
              {
                label: "MCDB7000A - Heavy Duty Broadr-Reach Camera",
                slug: "mcdb7000a-heavy-duty-broadr-reach-camera",
              },
              {
                label: "MCDE3000 - OEM Ethernet Camera",
                slug: "mcde3000-oem-ethernet-camera",
              },
              {
                label: "MCDL7000A - Heavy-Duty LVDS Camera",
                slug: "mcdl7000a-heavy-duty-lvds-camera",
              },
              {
                label: "MCDE7000A - Heavy-Duty Ethernet Camera",
                slug: "mcde7000a-heavy-duty-ethernet-camera",
              },
              {
                label: "MCDE5200 - Digital Motor Zoom Camera",
                slug: "mcde5200-digital-motor-zoom-camera",
              },
            ],
          },
          {
            label: "Monitors",
            slug: "monitors",
            children: [
              { label: 'MD3071A  - 7" Monitor', slug: "md3071a-7-monitor" },
              {
                label: "MD3073 - Waterproof heavy-duty monitor",
                slug: "md3073-waterproof-heavy-duty-monitor",
              },
              { label: 'MD3100 - 10.2" Monitor', slug: "md3100-10-2-monitor" },
              { label: "17 Zoll LCD Monitor", slug: "17-zoll-lcd-monitor" },
              {
                label: "MD4074-Quad-IP30 & IP67 Heavy duty monitor",
                slug: "md4074-quad-ip30-ip67-heavy-duty-monitor",
              },
            ],
          },
          {
            label: "Digital Monitors",
            slug: "digital-monitors",
            children: [
              {
                label: 'MDDE1072 7" Heavy duty digital ethernet monitor',
                slug: "mdde1072-7-heavy-duty-digital-ethernet-monitor",
              },
              {
                label: 'MDDE1102 10" heavy duty digital ethernet monitor',
                slug: "mdde1102-10-heavy-duty-digital-ethernet-monitor",
              },
              {
                label: 'MDDE1122 12" heavy duty digital ethernet monitor',
                slug: "mdde1122-12-heavy-duty-digital-ethernet-monitor",
              },
            ],
          },
          {
            label: "Fork Camera's",
            slug: "fork-cameras",
            children: [
              {
                label: "MC9000 - Sturdy fork camera",
                slug: "mc9000-sturdy-fork-camera",
              },
              {
                label: "MC9150B - heavy duty pinhole camera",
                slug: "mc9150b-heavy-duty-pinhole-camera",
              },
              {
                label: "MC9250 - sturdy fork camera",
                slug: "mc9250-sturdy-fork-camera",
              },
              {
                label: "MC925C - fork-arm mounted camera",
                slug: "mc925c-fork-arm-mounted-camera",
              },
            ],
          },
          {
            label: "Video Control Units",
            slug: "video-control-units",
            children: [
              {
                label: "MVCD2000 - digital video control unit",
                slug: "mvcd2000-digital-video-control-unit",
              },
              { label: "MVCU1300", slug: "mvcu1300" },
              { label: "MVCU1400", slug: "mvcu1400" },
              { label: "MVCU1500", slug: "mvcu1500" },
              { label: "MVCU1600", slug: "mvcu1600" },
              {
                label: "MB1205 - for two cameras",
                slug: "mb1205-for-two-cameras",
              },
              {
                label: "MB1405-Quad - with split function",
                slug: "mb1405-quad-with-split-function",
              },
              { label: "MBE5200 - for cranes", slug: "mbe5200-for-cranes" },
              { label: "MV13 - video unit", slug: "mv13-video-unit" },
              { label: "MV5201-1", slug: "mv5201-1" },
            ],
          },
          {
            label: "Crane Camera's",
            slug: "crane-cameras",
            children: [
              {
                label: "MWS - motec workview system",
                slug: "mws-motec-workview-system",
              },
              {
                label: "MC5201 - motor zoom camera",
                slug: "mc5201-motor-zoom-camera",
              },
              {
                label: "MCDE5200 - digital motor zoom camera",
                slug: "mcde5200-digital-motor-zoom-camera",
              },
            ],
          },
          {
            label: "Transmissions",
            slug: "transmissions",
            children: [
              {
                label: "MVRD1100 - digital radio system",
                slug: "mvrd1100-digital-radio-system",
              },
              {
                label: "MAB2000 - mobile heavy duty battery box",
                slug: "mab2000-mobile-heavy-duty-battery-box",
              },
              {
                label: "MVR5200 - wireless system for cranes",
                slug: "mvr5200-wireless-system-for-cranes",
              },
              {
                label: "MTP-VS and MTP-VE - video signal amplifier",
                slug: "mtp-vs-and-mtp-ve-video-signal-amplifier",
              },
              { label: "MKW-Kabel", slug: "mkw-kabel" },
              { label: "MK5-cabel", slug: "mk5-cabel" },
              { label: "MK25.15-MA2-cable", slug: "mk25-15-ma2-cable" },
              { label: "Mk67-cable", slug: "mk67-cable" },
              { label: "MK84-cable", slug: "mk84-cable" },
              { label: "MK228-cabel", slug: "mk228-cabel" },
              { label: "MK232-cabel", slug: "mk232-cabel" },
              { label: "MK295-cabel", slug: "mk295-cabel" },
              { label: "MK296-cabel", slug: "mk296-cabel" },
            ],
          },
        ],
      },
    ],
  },
];
