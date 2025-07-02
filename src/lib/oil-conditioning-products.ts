import { TechnicalSpecsSection } from "@/components/TechnicalSpecsTable"

export interface ProductImage {
  src: string;
  alt: string;
}

export interface ProductData {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  subsubcategory?: string;
  subsubsubcategory?: string;
  brand: string;
  images?: ProductImage[];
  video?: string;
  description?: string[];
  features?: string[];
  kitContents?: string[];
  additionalSections?: {
    title?: string;
    content?: string;
    image?: ProductImage;
    videoEmbedUrl?: string;
  }[];
  technicalSpecs?: TechnicalSpecsSection[];
  orderCodes?: {
    baseCode: string;
    description: string;
    options: {
      label: string;
      choices: {
        range: string;
        code: string;
      }[];
    }[];
    note?: string;
  };
  slugPath: string[];
  categoryProductIds?: string[];
  href?: string;
}


// ============================
// TANDELTA PRODUCTS
// - TanDelta
//     - OQSx-G2 Oil Quality Sensor
//     - OQSx-G2 HAZ Oil Quality Sensor
//     - MOT – Mobile Oil Test Kit
//     - OQSX-G2 Sensor kit
//     - SENSE2 Display Kit
//     - SENSE3 Gateway Kit
//     - Gateway (OQTg)
//     - OQDe-G2 Display Express
//     - Gateway Hub
//     - Manifold
//     - Cables
//         - Cable J
//         - Cable X
//         - Cable M
//         - Cable HP
//         - Cable BBHaz
//         - Cable BBSt
//         - Cable DB
//         - Cable HB
//         - Cable GH
//         - Cable SD
//         - Cable SB
//         - Cable SH
//         - Cable HH
//         - Cable HCP-1

// ============================

// Category Data - Tandelta
export const tandeltaCategoryData: ProductData = {
  id: "tandelta",
  name: "Tandelta",
  category: "oil-conditioning",
  subcategory: "tandelta",
  brand: "Tandelta",
  images: [
    {
      src: "/products/oil conditioning/Tandelta/OQSx-G2 Oil Quality Sensor/OQSx-G2 Oil Quality Sensor-1.jpg",
      alt: "Tandelta"
    },
  ],
  categoryProductIds: [
    'oqsx-g2-oil-quality-sensor',
    'oqsx-g2-haz-oil-quality-sensor',
    'mot-mobile-oil-test-kit',
    'oqsx-g2-sensor-kit',
    'sense2-display-kit',
    'sense3-gateway-kit',
    'gateway-oqtg',
    'oqde-g2-display-express',
    'gateway-hub',
    'manifold',
    'cables'
  ],
  additionalSections: [
    {
      title: "Product Ranges",
      content: "PRODUCT_GRID:tandelta-products"
    }
  ],
  slugPath: ["oil-conditioning", "tandelta"]
};

// Product Data - OQSx-G2 Oil Quality Sensor
export const oqsxG2OilQualitySensorData: ProductData = {
  id: "oqsx-g2-oil-quality-sensor",
  name: "OQSx-G2 Oil Quality Sensor",
  category: "oil-conditioning",
  subcategory: "tandelta",
  brand: "TanDelta",
  images: [
    {
      src: "/products/oil conditioning/Tandelta/OQSx-G2 Oil Quality Sensor/OQSx-G2 Oil Quality Sensor-1.jpg",
      alt: "OQSx-G2 Oil Quality Sensor"
    },
    {
      src: "/products/oil conditioning/Tandelta/OQSx-G2 Oil Quality Sensor/OQSx-G2 Oil Quality Sensor-2.jpg",
      alt: "OQSx-G2 Oil Quality Sensor"
    }
  ],
  description: [
    "Real time oil condition analysis sensor with integrated intelligent equipment maintenance optimisation analytics for all industrial and commercial applications.",
    "OQSx-G2 delivers the ultimate high-quality real-time oil condition analysis. This enables multiple tangible operating benefits that include reduced maintenance costs, improved reliability, reduced oil wastage, and extended equipment life.",
    "TanDelta's FSH™ core technology analyses oil condition holistically, detecting, measuring and tracking all and any contamination or wear with 0.01% sensitivity (100ppm) – other sensor systems typically look at specific parameters and ignore others. This unmatched real-time complete oil analysis capability is achieved through continuous analysis of the electro-chemical properties of the oil at a molecular level.",
    "OQSx-G2 analysis data provides unrivalled high-confidence insight into real-time equipment health and maintenance status. Reliable forecasting and planning of maintenance based upon actual equipment need and thus extended optimised maintenance intervals and reduced cost becomes possible; with the assurance and safety of continuous over-watch that detects any unexpected anomalies and or contamination.",
    "OQSx-G2 works with any oil type and is easily fitted to any equipment operating in any environment or application."
  ],
  additionalSections: [
    {
      title: "Oil Interpreting Guide",
      image: {
        src: "/products/oil conditioning/Tandelta/OQSx-G2 Oil Quality Sensor/OQSx-G2 Oil Quality Sensor-3.png",
        alt: "Oil Interpreting Guide"
      }
    }
  ],
  technicalSpecs: [
    {
      title: "PRODUCT INFORMATION",
      specs: [
        { label: "Name", value: "Gen 2 - Oil Quality Sensor" },
        { label: "Product No.", value: "OQSxG2-1-XX-XX-5" },
      ]
    },
    {
      title: "PHYSICAL",
      specs: [
        { label: "Material", value: "Stainless Steel AISI304" },
        { label: "Dimensions", value: "102 x 36mm (L x W)" },
        { label: "Weight", value: "180g" },
        { label: "Connection", value: "32mm AF Hex Collar" },
        { label: "Torque", value: "25N m" },
      ]
    },
    {
      title: "AVAILABLE THREADS",
      specs: [
        { label: "1/2\" BSPP", value: "Dowty Type" },
        { label: "1/2\" NPT", value: "n/a" },
        { label: "7/8\" UNF", value: "'O' Ring" },
        { label: "M18", value: "Dowty Type" },
      ],
      additionalText: "(Alternative threads available upon request)"
    },
    {
      title: "CONNECTORS",
      specs: [
        { label: "Connector", value: "6-Pin Bulgin PXP4013/06P/PC" },
      ]
    },
    {
      title: "ELECTRICAL",
      specs: [
        { label: "Supply", value: "+9-30V DC" },
        { label: "Consumption", value: "0.4w Average" },
      ]
    },
    {
      title: "DATA OUTPUT/INPUT",
      specs: [
        { label: "Digital output", value: "RS485, CANbus" },
        { label: "Protocols supported", value: "Modbus, CanOpen and J1939" },
        { label: "Analog output", value: "4-20mA" },
      ]
    },
    {
      title: "OIL QUALITY DETECTION PARAMETERS",
      specs: [
        { label: "Output", value: "Tan Delta Number (TDN) Oil Temperature (C or F)" },
        { label: "Sensitivity", value: "0.01%" },
        { label: "Elements", value: "All wear and contamination" },
      ]
    },
    {
      title: "OIL TYPE",
      specs: [
        { label: "Configuration", value: "Any mineral, semi-synthetic or synthetic oil, including fuels (diesel & bio-diesel)" },
      ]
    },
    {
      title: "ENVIRONMENTAL",
      specs: [
        { label: "Operating temperature", value: "-40°C (-40°F) to +120°C (+248°F)" },
        { label: "Calibrated temperature", value: "-20°C (-4°F) to +120°C (+248°F)" },
        { label: "Fluid temperature", value: "-40°C (-40°F) to +120°C (+248°F)" },
        { label: "Fluid pressure", value: "Up to 70 bar (1015 psi)" },
        { label: "Storage temperature", value: "-55°C (-67°F) to +150°C (+302°F)" },
      ]
    },
    {
      title: "STANDARDS AND CERTIFICATION",
      specs: [
        { label: "Water and dust", value: "IP68 when connected" },
        { label: "Shock and vibration", value: "BS EN 60068-2-30 (Test Db - Cyc.Hum.) BS EN 60068-2-6 (Test Fc - Sine Vib.) BS EN 60068-2-27 (Test Ea - Mech. Shock)" },
        { label: "EMC", value: "EN 61000-6-4:2007 (Generic Emissions Standard for Industrial Environments) EN 61000-6-2:2005 (Generic Immunity Standard for Industrial Environments)" },
        { label: "Conformity", value: "CE Marked RoHS Compliant" },
      ]
    }
  ],
  slugPath: ["oil-conditioning", "tandelta", "oqsx-g2-oil-quality-sensor"]
};

// Product Data - OQSx-G2 HAZ Oil Quality Sensor
export const oqsxG2HAZOilQualitySensorData: ProductData = {
  id: "oqsx-g2-haz-oil-quality-sensor",
  name: "OQSx-G2 HAZ Oil Quality Sensor",
  category: "oil-conditioning",
  subcategory: "tandelta",
  brand: "TanDelta",
  images: [
    {
      src: "/products/oil conditioning/Tandelta/OQSx-G2 HAZ Oil Quality Sensor/OQSx-G2 HAZ Oil Quality Sensor.jpg",
      alt: "OQSX-G2 Sensor Kit"
    },
    {
      src: "/products/oil conditioning/Tandelta/OQSx-G2 HAZ Oil Quality Sensor/OQSx-G2 HAZ Oil Quality Sensor-1.jpg",
      alt: "OQSX-G2 Sensor Kit Detail"
    }
  ],
  description: [
    "Zone 2 certified to ATEX, IECEx, UKEX, and Class 1 Division 2 US/C standards allowing real time oil condition analysis for hazardous area industrial and commercial applications.",
    "OQSx-G2 HAZ is a high-performance real-time oil condition analysis sensor for use in most explosion hazardous areas.",
    "It delivers the ultimate high-quality real-time oil condition analysis. This enables multiple tangible operating benefits that include reduced maintenance costs, improved reliability, reduced oil wastage, and extended equipment life.",
    "Our unique FSH™ core technology analyses oil condition holistically, detecting, measuring, and tracking all and any contamination or wear with 0.01% sensitivity (10ppm) - other sensor systems typically look at specific parameters and ignore others. This unmatched real-time complete oil analysis capability is achieved through continuous analysis of the electro-chemical properties of the oil at a molecular level.",
    "OQSx-G2 HAZ works with any oil type with any equipment operating in any application. It is certified ATEX Zone 2/intrinsically safe/ Class 1 Div 2"
  ],
  additionalSections: [
    {
      title: "Oil Interpreting Guide",
      image: {
        src: "/products/oil conditioning/Tandelta/OQSx-G2 HAZ Oil Quality Sensor/OQSx-G2 HAZ Oil Quality Sensor-2.png",
        alt: "Oil Interpreting Guide"
      }
    }
  ],
  technicalSpecs: [
    {
      title: "PRODUCT INFORMATION",
      specs: [
        { label: "Name", value: "Ex Gen II Oil Quality Sensor" },
        { label: "Product No.", value: "OQSx-G2 HAZ" },
      ]
    },
    {
      title: "PHYSICAL",
      specs: [
        { label: "Material", value: "Stainless Steel AISI304" },
        { label: "Dimensions", value: "118mm x 46mm (L x W)" },
        { label: "Weight", value: "160g" },
        { label: "Connection", value: "32mm AF Hex Collar" },
        { label: "Torque", value: "25N m" },
      ]
    },
    {
      title: "AVAILABLE THREADS",
      specs: [
        { label: "Thread", value: "Seal" },
        { label: "1/2\" BSPP", value: "Dowty Type" },
        { label: "1/2\" NPT", value: "n/a" },
        { label: "7/8\" UNF", value: "'O' Ring" },
        { label: "M18", value: "Dowty Type" },
      ],
      additionalText: "(Alternative threads available upon request)"
    },
    {
      title: "CONNECTIONS",
      specs: [
        { label: "Glanded integral cable", value: "10m as standard (350 max possible)" },
      ]
    },
    {
      title: "ELECTRICAL",
      specs: [
        { label: "Supply", value: "+10-28.8V DC" },
        { label: "Consumption", value: "0.4w Average" },
      ]
    },
    {
      title: "DATA OUTPUT/INPUT",
      specs: [
        { label: "Digital output", value: "RS485, CANbus" },
        { label: "Protocols supported", value: "CANopen, Modbus, J1939" },
        { label: "Analog output", value: "4-20mA" },
      ]
    },
    {
      title: "OIL QUALITY DETECTION PARAMETERS",
      specs: [
        { label: "Output", value: "Tan Delta Number (TDN) Oil Temperature (C or F)" },
        { label: "Sensitivity", value: "0.01%" },
        { label: "Elements", value: "All wear and contamination" },
      ]
    },
    {
      title: "OIL TYPE",
      specs: [
        { label: "Configuration", value: "Any mineral, semi-synthetic or synthetic oil, including fuels (diesel and bio-diesel)" },
      ]
    },
    {
      title: "ENVIRONMENTAL",
      specs: [
        { label: "Calibrated temperature", value: "-20°C (-4°F) to +120°C (+248°F)" },
        { label: "Operating temperature", value: "-20°C (-4°F) to +120°C (+248°F)" },
        { label: "Fluid temperature", value: "-20°C (-4°F) to +120°C (+248°F)" },
        { label: "Fluid pressure", value: "Up to 70 bar (1015 psi)" },
        { label: "Storage temperature", value: "-55°C (-67°F) to +150°C (+302°F)" },
      ]
    },
    {
      title: "STANDARDS AND CERTIFICATION",
      specs: [
        { label: "Water and dust", value: "IP68" },
        { label: "Shock and vibration", value: "BS EN 60068-2-30 (Test Db - Cyc.Hum.) BS EN 60068-2-6 (Test Fc - Sine Vib.) BS EN 60068-2-27 (Test Ea - Mech. Shock)" },
        { label: "EMC", value: "EN 61000-6-4:2007 (Generic Emissions Standard for Industrial Environments) EN 61000-6-2:2005 (Generic Immunity Standard for Industrial Environments)" },
        { label: "Ex compliance standards", value: "BS EN IEC 60079-0:2018 BS EN 60079-11:2012" },
        { label: "Ex certification options", value: "Intrinsically safe order codes" },
        { label: "Conformity", value: "CE Marked RoHS Compliant" },
      ]
    }
  ],
  slugPath: ["oil-conditioning", "tandelta", "oqsx-g2-haz-oil-quality-sensor"]
};

// Product Data - MOT - Mobile Oil Test Kit
export const motMobileOilTestKitData: ProductData = {
  id: "mot-mobile-oil-test-kit",
  name: "MOT – Mobile Oil Test Kit",
  category: "oil-conditioning",
  subcategory: "tandelta",
  brand: "TanDelta",
  images: [
    {
      src: "/products/oil conditioning/Tandelta/MOT – Mobile Oil Test Kit/MOT – Mobile Oil Test Kit.png",
      alt: "MOT - Mobile Oil Test Kit"
    }
  ],
  description: [
    "Easily analyse any oil from any equipment in seconds with the portable MOT kit, enabling maintenance crews to make fact-based decision making. Instantly and scientifically determine exactly how worn oil is, how long until it needs to be changed or refreshed, how long until equipment maintenance is needed and be alerted to unseen internal issues with equipment which could lead to an unexpected breakdown needing attention.",
    "Simple and easy to use with no training required. Prevents wasting of good oil and ensures equipment is maintained when needed. Typically enables a significant reduction in oil use and maintenance - resulting in significant cost savings.",
    "The kit is built around the OQSx-G2 real time oil condition analysis sensor, which analyses oil at a molecular level to determine its exact condition. Results are displayed using the MOT results application which runs on any Windows based laptop or PC. Everything is included within a single portable Peli case designed for continuous use in rough industrial and commercial environments."
  ],
  features: [
    "INSTANT OIL CONDITION ANALYSIS: Anywhere, anytime, any oil.",
    "CONFIGURABLE TO ANY OIL TYPE: Mineral and synthetic.",
    "TRACK AND TREND: Easily keep track of samples from different assets.",
    "SIMPLE & RELIABLE: Portable and easy to use in any field or workshop environment.",
    "DETECT ISSUES: Instantly detect unexpected equipment and oil issues.",
    "MINIMISE CARBON FOOTPRINT: Achieve ESG targets by safely maximising oil life."
  ],
  additionalSections: [
    {
      title: "Oil Interpreting Guide",
      image: {
        src: "/products/oil conditioning/Tandelta/MOT – Mobile Oil Test Kit/MOT – Mobile Oil Test Kit-1.png",
        alt: "Oil Interpreting Guide"
      }
    }
  ],
  technicalSpecs: [
    {
      title: "PRODUCT INFORMATION",
      specs: [
        { label: "Name", value: "Mobile Oil Tester (MOT) Kit" },
        { label: "Product No.", value: "OQ-MOT-I-G2" },
      ]
    },
    {
      title: "PHYSICAL",
      specs: [
        { label: "Security", value: "Stainless steel padlock hasps" },
        { label: "Weight", value: "3kg" },
        { label: "Handle", value: "Single, fold-down, rubber over-moulded handle." },
        { label: "Features", value: "Automatic pressure equalisation valve, rubber fibre washer seal, solid wall design, scratch resistant." },
      ]
    },
    {
      title: "OIL QUALITY DETECTION PARAMETERS",
      specs: [
        { label: "Sensitivity", value: "100ppm / 0.01%" },
        { label: "Elements", value: "All wear and contamination" },
      ]
    },
    {
      title: "SYSTEM REQUIREMENTS",
      specs: [
        { label: "Operating system", value: "Windows 10 or above" },
        { label: "Minimum space", value: "100Mb" },
        { label: "Internet connection", value: "Optional for application and database updates" },
      ]
    },
    {
      title: "STANDARDS AND CERTIFICATION",
      specs: [
        { label: "Water and dust", value: "IP67" },
        { label: "Shock and vibration", value: "BS EN 60068-2-30 (Test Db - Cyc.Hum.) BS EN 60068-2-6 (Test Fc - Sine Vib.) BS EN 60068-2-27 (Test Ea - Mech.Shock)" },
        { label: "EMC", value: "EN 61000-6-4:2007 (Generic Emissions Standard for Industrial Environments) EN 61000-6-2:2005 (Generic Immunity Standard for Industrial Environments) EN 61000-6-2:2007 (Generic Immunity Standard for Industrial Environments)" },
        { label: "Case protection", value: "Waterproof, Crush-proof, Dust-proof, Corrosion-proof." },
        { label: "Case certification", value: "IP67, Stanag 4280/ Defstan 81-41, MIL C-1450J, ATA" },
      ]
    }
  ],
  slugPath: ["oil-conditioning", "tandelta", "mot-mobile-oil-test-kit"]
};

// Product Data - OQSX-G2 Sensor kit
export const oqsxG2SensorKitData: ProductData = {
  id: "oqsx-g2-sensor-kit",
  name: "OQSX-G2 Sensor kit",
  category: "oil-conditioning",
  subcategory: "tandelta",
  brand: "TanDelta",
  images: [
    {
      src: "/products/oil conditioning/Tandelta/OQSX-G2 Sensor kit/OQSX-G2 Sensor kit.jpg",
      alt: "OQSX-G2 Sensor Kit"
    }
  ],
  description: [
    "An OQSX-G2 Sensor kit for installations connecting to an existing monitoring system or local display. Includes the OQSx-G2 sensor and CADS configuration pack.",
    "SENSE-1 includes our OQSx-G2 real time oil analysis sensor, and our CADS sensor configuration pack which can be used to configure all Tan Delta sensors. The CADS configuration kit enables you to configure the sensor to the correct oil type and application and set the data output format that matches your target display.",
    "OQSx-G2 analyses oil in real time at a molecular level (0.001% accuracy), detecting, analysing and measuring changes caused by wear, contamination or mechanical issues with the equipment itself. This information enables you to significantly cut maintenance costs through using oil fully to the end of its life, undertaking maintenance when actually needed and reducing break downs.",
    "Once you have configured the OQSx-G2 to the target oil in your equipment using the CADS kit, you can install and connect it to your desired display to see the oil analysis data. You can retain the CADS kit for future use and means that you only need buy the sensor without a CADS kit in the future."
  ],
  additionalSections: [
    {
      title: "Oil Interpreting Guide",
      image: {
        src: "/products/oil conditioning/Tandelta/OQSX-G2 Sensor kit/OQSX-G2 Sensor kit-1.png",
        alt: "Oil Interpreting Guide"
      }
    }
  ],
  technicalSpecs: [
    {
      title: "PRODUCT INFORMATION",
      specs: [
        { label: "Name", value: "Gen 2 - Oil Quality Sensor" },
        { label: "Product Number", value: "OQSxG2-1-XX-XX-5" },
      ]
    },
    {
      title: "PHYSICAL",
      specs: [
        { label: "Material", value: "Stainless Steel AISI304" },
        { label: "Dimensions", value: "102 x 36mm (L x W)" },
        { label: "Weight", value: "180g" },
        { label: "Connection", value: "32mm AF Hex Collar" },
        { label: "Torque", value: "25N m" },
      ]
    },
    {
      title: "AVAILABLE THREADS",
      specs: [
        { label: "1/2\" BSPP", value: "Dowty Type" },
        { label: "1/2\" NPT", value: "n/a" },
        { label: "7/8\" UNF", value: "'O' Ring" },
        { label: "M18", value: "Dowty Type" },
      ],
      additionalText: "(Alternative threads available upon request)"
    },
    {
      title: "CONNECTORS",
      specs: [
        { label: "Connector", value: "6-Pin Bulgin PXP4013/06P/PC" },
      ]
    },
    {
      title: "ELECTRICAL",
      specs: [
        { label: "Supply", value: "+9-30V DC" },
        { label: "Consumption", value: "0.4w Average" },
      ]
    },
    {
      title: "DATA OUTPUT/INPUT",
      specs: [
        { label: "Digital Output", value: "RS485, CANbus" },
        { label: "Protocols Supported", value: "Modbus, CanOpen and J1939" },
        { label: "Analog Output", value: "4-20mA" },
      ]
    },
    {
      title: "OIL QUALITY DETECTION PARAMETERS",
      specs: [
        { label: "Output", value: "Tan Delta Number (TDN) Oil Temperature (C or F)" },
        { label: "Sensitivity", value: "0.01%" },
        { label: "Elements", value: "All wear and contamination" },
      ]
    },
    {
      title: "ENVIRONMENTAL",
      specs: [
        { label: "Operating temperature", value: "-40°C (-40°F) to +120°C (+248°F)" },
        { label: "Calibrated temperature", value: "-20°C (-4°F) to +120°C (+248°F)" },
        { label: "Fluid temperature", value: "-40°C (-40°F) to +120°C (+248°F)" },
        { label: "Fluid pressure", value: "Up to 70 bar (1015 psi)" },
        { label: "Storage temperature", value: "-55°C (-67°F) to +150°C (+302°F)" },
      ]
    },
    {
      title: "STANDARDS AND CERTIFICATION",
      specs: [
        { label: "Water and dust", value: "IP68 when connected" },
        { label: "Shock and vibration", value: "BS EN 60068-2-30 (Test Db - Cyc.Hum.) BS EN 60068-2-6 (Test Fc - Sine Vib.) BS EN 60068-2-27 (Test Ea - Mech. Shock)" },
        { label: "EMC", value: "EN 61000-6-4:2007 (Generic Emissions Standard for Industrial Environments) EN 61000-6-2:2005 (Generic Immunity Standard for Industrial Environments)" },
        { label: "Conformity", value: "CE Marked RoHS Compliant" },
      ]
    }
  ],
  slugPath: ["oil-conditioning", "tandelta", "oqsx-g2-sensor-kit"]
};

// Product Data - SENSE2 Display Kit
export const sense2DisplayKitData: ProductData = {
  id: "sense2-display-kit",
  name: "SENSE2 Display Kit",
  category: "oil-conditioning",
  subcategory: "tandelta",
  brand: "TanDelta",
  images: [
    {
      src: "/products/oil conditioning/Tandelta/SENSE2 Display Kit/SENSE2 Display Kit.jpg",
      alt: "TODO: Add alt text"
    }
  ],
  description: [
    "Real-time oil analysis kit which can be easily retrofitted to any live operating equipment, providing continuous real-time oil analysis and equipment maintenance status insight.",
    "SENSE-2 is a complete real-time oil condition analysis and equipment health monitoring kit that can be easily retrofitted onto any equipment. It enables you to immediately enjoy the multiple benefits of real-time oil condition analysis and monitoring: reduced oil use, reduced maintenance costs, and pre-emptive fault detection. Investment pay-back can be as little as a couple of months.",
    "Built around the OQSx-G2 sensor, oil is continuously analysed at a molecular level in real-time, logged and shown on the included EXPRESS display. This enables maintenance engineers to instantly know and understand the condition of the oil and equipment. Our embedded analytics trigger automatic alerts in the event of unexpected contamination, oil wear or detection of unseen internal equipment issues which if left may cause expensive damage or breakdowns. The built-in data logger and wireless interfaces make downloading data for further analysis simple.",
    "SENSE-2 includes everything needed for a quick and easy installation on any equipment – no special training or skills are required."],
  additionalSections: [
    {
      title: "Oil Interpreting Guide",
      content: "",
      image: {
        src: "/products/oil conditioning/Tandelta/SENSE2 Display Kit/SENSE2 Display Kit-1.png",
        alt: "Oil Interpreting Guide"
      }
    }
  ],
  technicalSpecs: [
    {
      title: "PRODUCT INFORMATION",
      specs: [
        { label: "Name", value: "SENSE-2 Display Kit" },
        { label: "Product Number", value: "SENSE-2" },
      ]
    },
    {
      title: "PHYSICAL - SENSOR",
      specs: [
        { label: "Material", value: "Heat resistant polycarbonate" },
        { label: "Dimensions", value: "151mm x 60mm x 12mm (L x W x H)" },
        { label: "Weight", value: "300g" },
      ]
    },
    {
      title: "ELECTRICAL",
      specs: [
        { label: "Supply", value: "+9-30 V DC" },
        { label: "Consumption", value: "0.4W average, continuous 200mA" },
      ]
    },
    {
      title: "DATA LOGGING",
      specs: [
        { label: "Logging Interval", value: "5 minutes" },
        { label: "Battery Backup", value: "~10 years" },
        { label: "Data Download", value: "Via WiFi using any internet-enabled device" },
        { label: "Real Time Clock", value: "Yes" },
      ]
    },
    {
      title: "DATA OUTPUT / INPUT",
      specs: [
        { label: "Digital Output", value: "+/RS485, 9600 baud half duplex to sensor +/RS485, 115200 baud half duplex from display" },
        { label: "Analog Output", value: "1 x 4-20mA" },
      ]
    },
    {
      title: "ENVIRONMENTAL",
      specs: [
        { label: "Operating Temperature", value: "-30°C (-22°F) to +65°C (+149°F)" },
      ]
    },
    {
      title: "STANDARDS & CERTIFICATION",
      specs: [
        { label: "Shock & Vibration", value: "BS EN 60068-2-30 (Test Db - Cyc.Hum.) BS EN 60068-2-6 (Test Fc - Sine Vib.) BS EN 60068-2-27 (Test Ea - Mech.Shock)" },
        { label: "EMC", value: "EN 61000-6-4:2007 (Generic Emissions Standard for Industrial Environments) EN 61000-6-2:2007 (Generic Immunity Standard for Industrial Environments) EN 300 328 v1.8.1 (Electromagnetic compatibility and Radio spectrum Matters (ERM); Wideband Data Transmission Equipment operating in the 2,4GHz ISM Band and using Wideband Modulation Techniques.)" },
        { label: "Conformity", value: "CE Marked RoHS Compliant" },
      ]
    }
  ],
  slugPath: ["oil-conditioning", "tandelta", "sense2-display-kit"]
};

// Product Data - SENSE3 Gateway Kit
export const sense3GatewayKitData: ProductData = {
  id: "sense3-gateway-kit",
  name: "SENSE3 Gateway Kit",
  category: "oil-conditioning",
  subcategory: "tandelta",
  brand: "TanDelta",
  images: [
    {
      src: "/products/oil conditioning/Tandelta/SENSE3 Gateway Kit/SENSE3 Gateway Kit.jpg",
      alt: "SENSE3 Gateway Kit"
    }
  ],
  description: [
    "SENSE-3 is a scalable data monitoring & analysis solution giving you access to both live and historic data using any online M2M/IoT monitoring system, such as Tan Delta Online. Consisting of an IoT Gateway, mounted with Tan Delta's modular Gateway Hub system to form 1 single small footprint unit, the SENSE-3 Gateway Kit allows up to 3x OQSx-G2 sensors to be connected out of the box, with option to upgrade the system to 16x sensors by connecting multiple Gateway Hubs (sold separately) to the SENSE-3 unit, therefore catering for large multi-asset systems where timing of maintenance intervals is crucial.",
    "SENSE-3 enables data transmission using a variety of methods depending upon location and network availability. These include Cellular, WiFi and Ethernet."
  ],
  additionalSections: [
    {
      title: "Oil Interpreting Guide",
      content: "",
      image: {
        src: "/products/oil conditioning/Tandelta/SENSE3 Gateway Kit/SENSE3 Gateway Kit -1.png",
        alt: "Oil Interpreting Guide"
      }
    }
  ],
  technicalSpecs: [
    {
      title: "PRODUCT INFORMATION",
      specs: [
        { label: "Name", value: "SENSE-3 Gateway Kit" },
        { label: "Product Number", value: "SENSE-3" },
      ]
    },
    {
      title: "PHYSICAL",
      specs: [
        { label: "Enclosure", value: "Glass reinforced plastic" },
        { label: "Dimensions", value: "140mm x 100mm x 35mm (L x W x H)" },
        { label: "Weight", value: "300g" },
      ]
    },
    {
      title: "CONNECTIONS",
      specs: [
        { label: "Antenna Connector", value: "SMA (x2 antenna)" },
        { label: "System Connector", value: "1 to 7 RJ45 (3 x 5B pins)" },
        { label: "Other", value: "Modem Sim slot\nMicro SD slot\nUSB Port 2.0\nReset button\nEthernet RJ-45 socket" },
      ]
    },
    {
      title: "GSM & GPRS",
      specs: [
        { label: "GSM", value: "GSM 850 + 900B 1800 + 1900MHz + 2G\nQuad GPRS + EDGE + 3G\nClass 1 (1W) + EDGE + 3G\nGSM Max EDGE" },
        { label: "GPRS", value: "GPRS Class B, Class B (Class B)\nSMS MT, MO, Text, PST\nSMS GST + SG2\nOptional Carrier IDS and LTE via support" },
      ]
    },
    {
      title: "GNSS POSITIONING",
      specs: [
        { label: "Receiver", value: "GPS L1 Frequency\nL-2A mode, 50 channels continuous tracker receiver\nGLO L1 1.5 generations and 50 GNSS Ready" },
        { label: "SBAS", value: "WAAS, EGNOS, MSAS, GAGAN" },
        { label: "Accuracy", value: "2.5 meters CEP" },
        { label: "Signal Acquisition", value: "Cold Start: 35 sec. Warm Start: 28 sec.\nHot start: < 1 sec\nTracking sensitivity: < 160 dBm" },
      ]
    },
    {
      title: "POWER",
      specs: [
        { label: "Supply", value: "9V to 30V" },
        { label: "Batteries", value: "Standard backup battery for RTC\nOptional Li-Ion backup battery\nOptional rechargeable Battery Li-ion 17v (4.1 nominal 3600mAh\nIntegrated Low Battery Alert" },
      ]
    },
    {
      title: "SYSTEM SPECS & CPU",
      specs: [
        { label: "ARM Cortex A8", value: "800MHz clock speed" },
        { label: "LINUX OS", value: "Yocto 2.1" },
        { label: "RAM", value: "512MB DDR2" },
        { label: "NAND Flash", value: "1GB" },
        { label: "Additional Storage", value: "32GB via MicroSD Card" },
      ]
    },
    {
      title: "ENVIRONMENTAL",
      specs: [
        { label: "Storage Temperature", value: "-40°C (-40°F) to +85°C (+185°F)" },
        { label: "Operating Temp Off", value: "-30°C (-22°F) to +70°C (+158°F)" },
        { label: "Operating GSM On", value: "-30°C (-22°F) to +60°C (+140°F)" },
        { label: "Li-Ion Battery", value: "-20°C to +50°C (+14°F to +122°F) (recommended 0°C to +40°C, +32°F to +104°F)" },
      ]
    },
    {
      title: "STANDARDS & CERTIFICATION",
      specs: [
        { label: "Conformity", value: "CE Marked\nFCC Authorisation encapsulated\nIC Certification\nR & TTE\nRoHS Compliant" },
      ]
    }
  ],
  slugPath: ["oil-conditioning", "tandelta", "sense3-gateway-kit"]
};

// Product Data - Gateway (OQTg)
export const gatewayOQTgData: ProductData = {
  id: "gateway-oqtg",
  name: "Gateway (OQTg)",
  category: "oil-conditioning",
  subcategory: "tandelta",
  brand: "TanDelta",
  images: [
    {
      src: "/products/oil conditioning/Tandelta/Gateway (OQTg)/Gateway (OQTg).jpg",
      alt: "Gateway (OQTg)"
    },
    {
      src: "/products/oil conditioning/Tandelta/Gateway (OQTg)/Gateway (OQTg)-1.jpg",
      alt: "Gateway (OQTg) Detail"
    }
  ],
  description: [
    "The Oil Quality Telemetry Gateway (OQTg) is a sophisticated industrial IoT Gateway device that enables data from OQSx-G2 sensors to be accessed using any online IoT monitoring system such as Tan Delta Online.",
    "The Oil Quality Telemetry Gateway (OQTg) is a sophisticated industrial IoT Gateway device that enables data from your OQSx-G2 sensors to be accessed using any online M2M/IoT monitoring system, such as Tan Delta Online.",
    "The Gateway enables data transmission using a variety of methods depending upon location and network availability. These include Cellular, WiFi and Ethernet.",
    "Every equipment operator knows that machine monitoring enables effective management and thus increased reliability, efficiencies and profits. Oil condition monitoring with Tan Delta takes this to a new level through much greater insight into the real condition of your equipment to deliver significantly enhanced financial and operating benefits."
  ],
  additionalSections: [
    {
      title: "Oil Interpreting Guide",
      image: {
        src: "/products/oil conditioning/Tandelta/Gateway (OQTg)/Gateway (OQTg)-2.png",
        alt: "Oil Interpreting Guide"
      }
    }
  ],
  technicalSpecs: [
    {
      title: "PRODUCT INFORMATION",
      specs: [
        { label: "Name", value: "Oil Quality Telemetry Gateway" },
        { label: "Product No.", value: "OQTg-1G" },
      ]
    },
    {
      title: "PHYSICAL",
      specs: [
        { label: "Enclosure", value: "Glass reinforced plastic" },
        { label: "Dimensions", value: "140mm x 100mm x 35mm (L x W x H)" },
        { label: "Weight", value: "300g" },
      ]
    },
    {
      title: "CONNECTIONS",
      specs: [
        { label: "Antenna Connector", value: "SMA (x2 antenna)" },
        { label: "System Connector", value: "1 to 7 RJ45 (3 x 5B pins)" },
        { label: "Other", value: "Modem Sim slot\nMicro SD slot\nUSB Port 2.0\nReset button\nEthernet RJ-45 socket" },
      ]
    },
    {
      title: "GSM & GPRS",
      specs: [
        { label: "GSM", value: "GSM 850 + 900/900 + 1800/1900 + 2G/900MHz\nQuad GPRS + EDGE + 3G\nClass 1 (1W) + EDGE + 3G\nGSM Max EDGE" },
        { label: "GPRS", value: "GPRS Class B, Class B (8+1/5+2)\nSMS MT, MO, Class 1 (5V)\nSMS SMT + MO2\nOptional Carrier 100 and LTE via support" },
      ]
    },
    {
      title: "GNSS POSITIONING",
      specs: [
        { label: "Receiver", value: "GPS L1 Frequency\nL-2A mode, 50 channels continuous tracker receiver\nGLO L1 1.5 generations and 50 GNSS Ready" },
        { label: "SBAS", value: "WAAS, EGNOS, MSAS, GAGAN" },
        { label: "Accuracy", value: "2.5 meters CEP" },
        { label: "Signal Acquisition", value: "Cold Start: 35 sec. Warm Start: 28 sec.\nHot start: < 1 sec\nTracking sensitivity: < 160 dBm" },
      ]
    },
    {
      title: "POWER",
      specs: [
        { label: "Supply", value: "9V to 28V" },
        { label: "Batteries", value: "Standard backup battery for RTC\nDuration: 10 years\nOptional rechargeable Battery Li-ion 3.7V (4.1 nominal 3600mAh\nIntegrated Low Battery Alert" },
      ]
    },
    {
      title: "SYSTEM SPECS & CPU",
      specs: [
        { label: "ARM Cortex A8", value: "800MHz clock speed" },
        { label: "LINUX OS", value: "Yocto 2.1" },
        { label: "RAM", value: "512MB DDR2" },
        { label: "NAND Flash", value: "1GByte" },
        { label: "Additional Storage", value: "32GB via MicroSD Card" },
      ]
    },
    {
      title: "ENVIRONMENTAL",
      specs: [
        { label: "Storage Temperature", value: "-40°C (-40°F) to +85°C (+185°F)" },
        { label: "Operating GSM Off", value: "-30°C (-22°F) to +70°C (+158°F)" },
        { label: "Operating GSM On", value: "-30°C (-22°F) to +60°C (+140°F)" },
        { label: "Li-Ion Battery", value: "-20°C to +50°C (+14°F to +122°F) (recommended 0°C to +40°C, +32°F to +104°F)" },
      ]
    },
    {
      title: "STANDARDS & CERTIFICATION",
      specs: [
        { label: "Conformity", value: "CE Marked\nFCC Authorisation encapsulated\nIC Certification\nR & TTE\nRoHS Compliant" },
      ]
    }
  ],
  slugPath: ["oil-conditioning", "tandelta", "gateway-oqtg"]
};

// Product Data - OQDe-G2 Display Express
export const oqdeG2DisplayExpressData: ProductData = {
  id: "oqde-g2-display-express",
  name: "OQDe-G2 Display Express",
  category: "oil-conditioning",
  subcategory: "tandelta",
  brand: "TanDelta",
  images: [
    {
      src: "/products/oil conditioning/Tandelta/OQDe-G2 Display Express/OQDe-G2 Display Express.jpg",
      alt: "OQDe-G2 Display Express"
    }
  ],
  description: [
    "The Oil Quality Display Express (OQDe) allows you to Display, Log, & Analyse data from OQSxG2 Sensors. Comes bundled with Insight, a web-based app allowing configuration of alerts & warnings.",
    "The Display Express (OQDe) is an oil condition data display and logging solution designed for plug-and-play compatability with all Tan Delta real-time oil condition sensors.",
    "Real-time oil condition is clearly displayed in either Loss Factor (%) or Tan Delta Number (TDN), along with current oil temperature, providing you with an instant and accurate snapshot of the condition of your oil and equipment. Oil Life Remaining (days) enables easy prediction and therefore planning of when maintenance is needed.",
    "Display Express logs all data and is provided with our INSIGHT application, which enables you to connect any device to Display Express wirelessly, and to download and display data.",
    "OQDe is engineered for installation and continuous use in even the most extreme industrial or commercial environment. Quick and simple to install and easy to use."
  ],
  additionalSections: [
    {
      title: "Oil Interpreting Guide",
      image: {
        src: "/products/oil conditioning/Tandelta/OQDe-G2 Display Express/OQDe-G2 Display Express-1.png",
        alt: "Oil Interpreting Guide"
      }
    }
  ],
  technicalSpecs: [
    {
      title: "PRODUCT INFORMATION",
      specs: [
        { label: "Name", value: "Display Express (OQDe)" },
        { label: "Product Number", value: "Express" },
      ]
    },
    {
      title: "PHYSICAL",
      specs: [
        { label: "Material", value: "Heat resistant polycarbonate" },
        { label: "Dimensions", value: "151mm x 60mm x 12mm (L x W x H)" },
        { label: "Weight", value: "300g" },
      ]
    },
    {
      title: "ELECTRICAL",
      specs: [
        { label: "Supply", value: "+9-30 V DC" },
        { label: "Consumption", value: "0.4W Average, Continuous 200mA" },
      ]
    },
    {
      title: "DATA OUTPUT / INPUT",
      specs: [
        { label: "Analog Output", value: "1 x 4-20mA" },
        { label: "", value: "Digital Output: +/RS485, 9600 baud half duplex to sensor\n+/RS485, 115200 baud half duplex from display" },
      ]
    },
    {
      title: "DATA LOGGING",
      specs: [
        { label: "Logging Interval", value: "5 minutes" },
        { label: "Battery Backup", value: "~10 years" },
        { label: "Data Download", value: "Via WiFi using any internet-enabled device" },
        { label: "Real Time Clock", value: "Yes" },
      ]
    },
    {
      title: "DISPLAY",
      specs: [
        { label: "Oil Quality", value: "Tan Delta Number (TDN)" },
        { label: "Oil Temperature", value: "-20°C (-4°F) to +120°C (+248°F)" },
        { label: "Oil life remaining", value: "Days" },
        { label: "Status Indicator", value: "LED" },
      ]
    },
    {
      title: "ENVIRONMENTAL",
      specs: [
        { label: "Operating Temperature", value: "-30°C (-22°F) to +65°C (+149°F)" },
      ]
    },
    {
      title: "STANDARDS & CERTIFICATION",
      specs: [
        { label: "Water & Dust", value: "IP67 when connected BS EN 60529:1992+A2:2013" },
        { label: "Shock & Vibration", value: "BS EN 60068-2-30 (Test Db - Cyc.Hum.) BS EN 60068-2-6 (Test Fc - Sine Vib.) BS EN 60068-2-27 (Test Ea - Mech.Shock)" },
        { label: "EMC", value: "EN 61000-6-4:2007 (Generic Emissions Standard for Industrial Environments) EN 61000-6-2:2005 (Generic Immunity Standard for Industrial Environments) EN 61000-6-2:2007 (Generic Immunity Standard for Industrial Environments)" },
        { label: "Conformity", value: "CE & UKCA Marked RoHS Compliant" },
      ]
    }
  ],
  slugPath: ["oil-conditioning", "tandelta", "oqde-g2-display-express"]
};

// Product Data - Gateway Hub
export const gatewayHubData: ProductData = {
  id: "gateway-hub",
  name: "Gateway Hub",
  category: "oil-conditioning",
  subcategory: "tandelta",
  brand: "TanDelta",
  images: [
    {
      src: "/products/oil conditioning/Tandelta/Gateway Hub/Gateway Hub.jpg",
      alt: "Gateway Hub"
    }
  ],
  description: [
    "The Gateway Hub is a sophisticated accessory for the Gateway, allowing multiple Oil Quality Sensors to be connected and powered via a single power connection, and integrated into the Gateway IoT, which in turn enables data from your Oil Quality Sensors to be accessed on any IoT monitoring system such as Tan Delta Online.",
    "Every equipment operator knows that machine monitoring enables effective management and thus increased reliability, efficiencies and profits. Oil Condition Monitoring with Tan Delta takes this to a new level through much greater insight into the real condition of your equipment, and delivers significantly enhanced financial and operating benefits."
  ],
  additionalSections: [
    {
      title: "Oil Interpreting Guide",
      image: {
        src: "/products/oil conditioning/Tandelta/Gateway Hub/Gateway Hub-1.png",
        alt: "Oil Interpreting Guide"
      }
    }
  ],
  technicalSpecs: [
    {
      title: "PRODUCT INFORMATION",
      specs: [
        { label: "Name", value: "Gateway Hub" },
        { label: "Product Number", value: "Gateway Hub" },
      ]
    },
    {
      title: "PHYSICAL",
      specs: [
        { label: "Material", value: "Technomelt PA657" },
        { label: "Dimensions ex cables", value: "114mm x 55mm x 16mm (L x W x H)" },
        { label: "Weight", value: "200g" },
      ]
    },
    {
      title: "POWER",
      specs: [
        { label: "Supply", value: "9-30V" },
      ]
    },
    {
      title: "CONNECTIONS",
      specs: [
        { label: "Power connector", value: "Molex 33481-0201" },
        { label: "Sensor connectors", value: "Molex 33472-1206" },
        { label: "Continuity plug for ring", value: "Molex 33482-6201" },
        { label: "Gateway connector", value: "Molex 33482-6201" },
      ]
    },
    {
      title: "DATA OUTPUT / INPUT",
      specs: [
        { label: "Digital Output", value: "RS485, CANbus" },
        { label: "Protocols Supported", value: "Modbus RTU, CanOpen" },
      ]
    },
    {
      title: "ENVIRONMENTAL",
      specs: [
        { label: "Operating Temperature", value: "-40°C (-40°F) to +85°C" },
        { label: "Ingress protection", value: "IP67" },
      ]
    },
    {
      title: "STANDARDS & CERTIFICATION",
      specs: [
        { label: "Conformity", value: "CE, UKCA, RoHS Compliant" },
      ]
    }
  ],
  slugPath: ["oil-conditioning", "tandelta", "gateway-hub"]
};

// Product Data - Manifold
export const manifoldData: ProductData = {
  id: "manifold",
  name: "Manifold",
  category: "oil-conditioning",
  subcategory: "tandelta",
  brand: "TanDelta",
  images: [
    {
      src: "/products/oil conditioning/Tandelta/Manifold/Manifold.jpg",
      alt: "Manifold"
    }
  ],
  description: [
    "In most cases an existing inspection port provides the ideal location for installing the OQSx-G2. If this is unavailable, Tan Delta can provide custom Manifolds tailored to your application's requirements.",
    "Tan Delta manifolds are designed specifically for OQSx-G2 oil condition analysis sensors to enable reliable and easy installation where inspection ports or other suitable installation points are not available. Our manifolds are manufactured from solid aluminum and designed to optimise oil flow across the sensor head without impeding normal flow."
  ],
  additionalSections: [
    {
      title: "Oil Interpreting Guide",
      image: {
        src: "/products/oil conditioning/Tandelta/Manifold/Manifold-1.png",
        alt: "Oil Interpreting Guide"
      }
    }
  ],
  technicalSpecs: [
    {
      title: "PRODUCT INFORMATION",
      specs: [
        { label: "Product Name", value: "Full flow Manifold" },
        { label: "Product No", value: "OQA-MAN-4, OQA-MAN-5" },
      ]
    },
    {
      title: "PHYSICAL",
      specs: [
        { label: "Material", value: "Aluminium 6082" },
        { label: "Pressure", value: "Up to 70 Barg" },
        { label: "Weight", value: "315g" },
        { label: "Thread", value: "1/2\" BSPP or 1/2\" NPT available, depending on Sensor thread type" },
      ]
    }
  ],
  slugPath: ["oil-conditioning", "tandelta", "manifold"]
};

// Product Data - Tandelta Cables
// Note: Cables are displayed on a single page at /products/oil-conditioning/tandelta/cables
// Individual cable products do not have separate pages
// Cable data is managed in the cables page component, not as individual ProductData entries

// ============================
// HYDROTECHNIK PRODUCTS
// - Hydrotechnik
//     - Watchlog USB
//         - Watchlog USB Dual Pressure and Temperature Sensor
//         - Watchlog USB Windows® PC/tablet pressure & temperature measurement software
//     - Watchlog Bluetooth Sensors, Gauges and Mobile Apps
//         - Watchlog Bluetooth Pressure & Temperature Sensors, Gauges and App for up to 4 sensors connected simultaneously
//             - WLB-PT Compact Bluetooth Pressure Sensor
//             - WLB-TT Compact Bluetooth Temperature Sensor
//             - WLB-DDPG Series Bluetooth Digital Datalogging Pressure Gauges
//             - WLB-DPG Series Watchlog Bluetooth Digital Pressure Gauge
//             - Watchlog Bluetooth Live View & Datalogging App for iOS and Android
//             - DDPG Series Digital Datalogging Bluetooth Pressure Gauge & Minimess® Test Kit
//             - DPG Series Digital Bluetooth Pressure Gauge & Minimess® Test Kit
//         - Watchlog Bluetooth-Plus Pressure, Level & Force Sensors and App for up to 12 connected sensors & advanced app calculation features
//             - HT-WLBP Watchlog Bluetooth-Plus Pressure Sensor
//             - HT-WLBL Watchlog Bluetooth-Plus Hydrostatic Level Sensors
//             - HT-WLBLC Watchlog Bluetooth-Plus Compression Load Cells
//             - HT-WLBLL Watchlog Bluetooth-Plus Compression Load Link
//             - Watchlog Bluetooth-Plus iOS and Android App
//     - Watchlog Wireless Pressure, Temperature and Flow Sensors
//         - Watchlog Wireless Pressure, Flow & Temperature Test Kit
//         - Watchlog Wireless Vision
//         - Watchlog ATEX Wireless Pressure Sensors
//         - Watchlog Wireless Pressure Sensors
//         - Watchlog Wireless Temperature Sensors
//         - Watchlog Wireless Linear Position Sensor
//         - Watchlog Wireless Turbine Flow Meters
//         - Watchlog Wireless Oval Gear Flow Meters
//         - Watchlog Wireless USB Base Stations / Receivers
//         - WLW-AR Wireless Signal Extender
//         - Watchlog Wireless Signal Gateway Modules
//         - Watchlog Wireless Configuring, Monitoring & Logging Software
//         - Watchlog Wireless Accessories
//         - WLWPL Series Cellular Level Sensor
//     - Watchlog Pro Remote Monitoring
//         - Watchlog PRO ORB Cellular / Wi-Fi Cloud Gateway for Mobile Applications
//         - Watchlog PRO QUAD Cellular / Wi-Fi Cloud Gateway for Fixed Systems
//         - Watchlog Pro Hydraulic System Monitoring
//         - Watchlog PRO Custom Cloud Monitoring
//     - Watchlog CSV Visualizer Software
// ============================

// Category Data - Hydrotechnik
export const hydrotechnikCategoryData: ProductData = {
  id: "hydrotechnik",
  name: "Hydrotechnik",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  brand: "Hydrotechnik",
  images: [
    {
      src: "/products/oil conditioning/Hydrotechnik/Watchlog-USB/Watchlog USB Dual Pressure and Temperature Sensor/Watchlog USB Dual Pressure and Temperature Sensor.png",
      alt: "Hydrotechnik"
    },
  ],
  categoryProductIds: [
    'watchlog-usb',
    'watchlog-bluetooth-sensors-gauges-and-mobile-apps',
    'watchlog-wireless-pressure-temperature-and-flow-sensors',
    'watchlog-pro-remote-monitoring'
  ],
  slugPath: ["oil-conditioning", "hydrotechnik"]
};

// ============================
// WATCHLOG USB
// ============================

// Category Data - Watchlog USB
export const watchlogUSBCategoryData: ProductData = {
  id: "watchlog-usb",
  name: "Watchlog USB",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  subsubcategory: "watchlog-usb",
  brand: "Hydrotechnik",
  images: [
    {
      src: "/products/oil conditioning/Hydrotechnik/Watchlog-USB/Watchlog USB Dual Pressure and Temperature Sensor/Watchlog USB Dual Pressure and Temperature Sensor.png",
      alt: "Watchlog USB Pressure and Temperature Measurement System"
    },
    {
      src: "/products/oil conditioning/Hydrotechnik/Watchlog-USB/Watchlog USB Windows® PCtablet pressure & temperature measurement software/Watchlog USB Windows PCandtablet pressure and temperature measurement software.png",
      alt: "Watchlog USB Software Interface"
    }
  ],
  description: [
    "Watchlog USB is a new generation of sensors and datalogging solutions from Hydrotechnik UK, using our Watchlog USB pressure sensors with transmission rates of up to 20 times per second (50ms).",
    "Included with each sensor is our windows PC/Tablet software for simple, quick and cost-effective pressure measurement of up to 8 Watchlog USB sensors at the same time. Users can view the measurements in numerical or graphical format or both simultaneously. Test data can be viewed, zoomed and annotated during or after recording and data can then be exported for easy test file management."
  ],
  features: [
    "View & record up to 20 times per second, per sensor.",
    "25 bar, 160 bar, 400 bar & 700 bar sensors are available from stock.",
    "Connect, view & record up to 8 sensors at one time, using standard USB hubs.",
    "Watchlog USB software automatically detects any connected sensors.",
    "Min. / max. values and settable alarm limits.",
    "Manual, timed or scheduled recording options.",
    "Graph zooming and annotation even during recording.",
    "PDF and CSV test export options"
  ],
  categoryProductIds: [
    'watchlog-usb-dual-pressure-and-temperature-sensor',
    'watchlog-usb-windows-pc-tablet-pressure-temperature-measurement-software'
  ],
  additionalSections: [
    {
      title: "Product Ranges",
      content: "PRODUCT_GRID:watchlog-usb-products"
    }
  ],
  slugPath: ["oil-conditioning", "hydrotechnik", "watchlog-usb"]
};

// Product Data - Watchlog USB Dual Pressure and Temperature Sensor
export const watchlogUSBDualSensorData: ProductData = {
  id: "watchlog-usb-dual-pressure-and-temperature-sensor",
  name: "Watchlog USB Dual Pressure and Temperature Sensor",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  brand: "Hydrotechnik",
  images: [
    {
      src: "/products/oil conditioning/Hydrotechnik/Watchlog-USB/Watchlog USB Dual Pressure and Temperature Sensor/Watchlog USB Dual Pressure and Temperature Sensor.png",
      alt: "Watchlog USB Dual Pressure and Temperature Sensor"
    }
  ],
  description: [
    "A new range of high speed pressure sensors for connecting to any Windows PC or tablet, for measuring and recording pressures from up to 8 connected transducers.  Sensors are supplied with state-of-the-art software for displaying and analysing results."
  ],
  features: [
    "High-speed, controllable scanning rate from 500 readings per second (2mS), 10mS, 50mS, 100mS, 1s",
    "Dual pressure and temperature output",
    "25 bar, 160 bar, 400 bar & 700 bar sensors available from stock",
    "Watchlog USB software included free of charge with each sensor",
    "Connect, view & record up to 8 sensors at one time using standard USB hubs"
  ],
  orderCodes: {
    baseCode: "HT-WLUSB-XXXX",
    description: "Replace XXXX with pressure range code",
    options: [
      {
        label: "Pressure Range",
        choices: [
          { range: "0...25 bar", code: "0025" },
          { range: "0...160 bar", code: "0160" },
          { range: "0...400 bar", code: "0400" },
          { range: "0...700 bar", code: "0700" }
        ]
      }
    ],
    note: "Other pressure ranges available on request."
  },
  slugPath: ["oil-conditioning", "hydrotechnik", "watchlog-usb", "watchlog-usb-dual-pressure-and-temperature-sensor"]
};

// Product Data - Watchlog USB Windows® PC/tablet pressure & temperature measurement software
export const watchlogUsbWindowsPcTabletPressureTemperatureMeasurementSoftwareData: ProductData = {
  id: "watchlog-usb-windows-pc-tablet-pressure-temperature-measurement-software",
  name: "Watchlog USB Windows® PC/tablet pressure & temperature measurement software",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  brand: "Hydrotechnik",
  images: [
    {
      src: "/products/oil conditioning/Hydrotechnik/Watchlog-USB/Watchlog USB Windows® PCtablet pressure & temperature measurement software/Watchlog USB Windows PCandtablet pressure and temperature measurement software.png",
      alt: "Watchlog USB Windows® PC/tablet pressure & temperature measurement software"
    }
  ],
  description: [
    "Included with each sensor is our Windows® PC/tablet software for simple, quick and cost-effective pressure & temperature measurement of up to 8 Watchlog USB sensors at the same time.",
    "Users can view the measurements in numerical, graph or both simultaneously. Test data can be viewed, zoomed, and annotated during or after recording and data can be exported for easy test file management."
  ],
  features: [
    "Dual pressure and temperature output from each sensor",
    "View and record up to 500 times per second per sensor",
    "25 bar, 160 bar, 400 bar & 700 bar sensors available from stock",
    "Connect, view & record up to 8 sensors at one time, using standard USB hubs",
    "Watchlog USB software automatically detects any connected sensors",
    "Min. / max. values and settable alarm limits",
    "Manual target triggers, timed or scheduled recording options",
    "Capture events before and after a trigger point",
    "Graph zooming and annotation even during recording",
    "PDF and CSV test export options",
    "SECTORS: Industrial, food & beverage, pulp & paper, mobile hydraulics, and pump & component testing"
  ],
  slugPath: ["oil-conditioning", "hydrotechnik", "watchlog-usb", "watchlog-usb-windows-pc-tablet-pressure-temperature-measurement-software"]
};

// ============================
// WATCHLOG BLUETOOTH SENSORS, GAUGES, MOBILE APPS
// ============================

// Category Data - Watchlog Bluetooth Sensors, Gauges and Mobile Apps
export const watchlogBluetoothSensorsGaugesAndMobileAppsCategoryData: ProductData = {
  id: "watchlog-bluetooth-sensors-gauges-and-mobile-apps",
  name: "Watchlog Bluetooth Sensors, Gauges and Mobile Apps",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  brand: "Hydrotechnik",
  categoryProductIds: [
    'watchlog-bluetooth-pressure-temperature-sensors-gauges-and-app-for-up-to-4-sensors-connected-simultaneously',
    'watchlog-bluetooth-plus-pressure-level-force-sensors-and-app-for-up-to-12-connected-sensors-advanced-app-calculation-features'
  ],
  additionalSections: [
    {
      title: "Product Ranges",
      content: "PRODUCT_GRID:watchlog-bluetooth-sensors-gauges-and-mobile-apps-products"
    }
  ],
  slugPath: ["oil-conditioning", "hydrotechnik", "watchlog-bluetooth-sensors-gauges-and-mobile-apps"]
};

// ============================
// Watchlog Bluetooth Pressure & Temperature Sensors, Gauges and App for up to 4 sensors connected simultaneously
// ============================

// Category Data - Watchlog Bluetooth Pressure & Temperature Sensors, Gauges and App for up to 4 sensors connected simultaneously
export const watchlogBluetoothPressureTemperatureSensorsGaugesAndAppForUpTo4SensorsConnectedSimultaneouslyCategoryData = {
  id: "watchlog-bluetooth-pressure-temperature-sensors-gauges-and-app-for-up-to-4-sensors-connected-simultaneously",
  name: "Watchlog Bluetooth Pressure & Temperature Sensors, Gauges and App for up to 4 sensors connected simultaneously",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  subsubcategory: "watchlog-bluetooth-sensors-gauges-and-mobile-apps",
  subsubsubcategory: "watchlog-bluetooth-pressure-temperature-sensors-gauges-and-app-for-up-to-4-sensors-connected-simultaneously",
  brand: "Hydrotechnik",
  description: [
    "The Watchlog Bluetooth range is an extremely fast and easy way to add live pressure, temperature monitoring, and datalogging to your system. The low-cost, cable-free temperature sensors, pressure sensors, and pressure gauges are designed for use with our free monitoring and datalogging app, which is available in the iOS App Store and Android Google Play store."
  ],
  images: [
    {
      src: "/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/1st category/watchlog-bluetooth-pressure-temp-sensors.png",
      alt: "Watchlog Bluetooth Pressure & Temperature Sensors, Gauges and App for up to 4 sensors connected simultaneously"
    }
  ],
  categoryProductIds: [
    "wlb-pt-compact-bluetooth-pressure-sensor",
    "wlb-tt-compact-bluetooth-temperature-sensor",
    "wlb-ddpg-series-bluetooth-digital-datalogging-pressure-gauges",
    "wlb-dpg-series-watchlog-bluetooth-digital-pressure-gauge",
    "watchlog-bluetooth-live-view-datalogging-app-for-ios-and-android",
    "ddpg-series-digital-datalogging-bluetooth-pressure-gauge-minimess-test-kit",
    "dpg-series-digital-bluetooth-pressure-gauge-minimess-test-kit"
  ],
  additionalSections: [
    {
      title: "Product Ranges",
      content: "PRODUCT_GRID:watchlog-bluetooth-pressure-temperature-sensors-gauges-and-app-for-up-to-4-sensors-connected-simultaneously-products"
    }
  ],
  slugPath: ["oil-conditioning", "hydrotechnik", "watchlog-bluetooth-sensors-gauges-and-mobile-apps", "watchlog-bluetooth-pressure-temperature-sensors-gauges-and-app-for-up-to-4-sensors-connected-simultaneously"]
};

// Product Data - WLB-PT Compact Bluetooth Pressure Sensor
export const wlbPtCompactBluetoothPressureSensorData: ProductData = {
  id: "wlb-pt-compact-bluetooth-pressure-sensor",
  name: "WLB-PT Compact Bluetooth Pressure Sensor",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  brand: "Hydrotechnik",
  images: [
    {
      src: "public/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/1st category/WLB-PT Compact Bluetooth Pressure Sensor/WLB-PT Compact Bluetooth Pressure Sensor.png",
      alt: "WLB-PT Compact Bluetooth Pressure Sensor"
    }
  ],
  description: [
    "Low-cost, cable-free pressure sensor with free monitoring and datalogging app available in the iOS App Store and Android Google Play store. An extremely fast and easy way to add live pressure monitoring and datalogging to your system."
  ],
  features: [
    "Small size, max height 76mm",
    "1st transmission rate",
    "Bluetooth transmission greater than 20m",
    "Monitor and record pressures up to 700bar using the Watchlog iOS & Android Apps",
    "CR2032 battery-powered",
    "Typical battery life 12 months",
    "Secure screw cap for quick & easy battery changing ±0.5%FS accuracy",
    "Low-cost, cable-free pressure monitoring solution"
  ],
  orderCodes: {
    baseCode: "WLB-PT-XXXX",
    description: "Replace XXXX with pressure range code",
    options: [
      {
        label: "Required Pressure Range",
        choices: [
          { range: "-1...16 bar", code: "V016" },
          { range: "0...60 bar", code: "0060" },
          { range: "0...250 bar", code: "0250" },
          { range: "0...400 bar", code: "0400" },
          { range: "0...700 bar", code: "0700" }
        ]
      }
    ]
  },
  additionalSections: [
    {
      title: "Watchlog Bluetooth App",
      content: "The WLB-PT supports iOS and Android Bluetooth apps. Once connected, the app can be used to display pressure values, start/stop logging, and export CSV test files. See more in our overview video.",
      videoEmbedUrl: "https://youtu.be/ZsVAlXbAL2M"
    }
  ],
  slugPath: ["oil-conditioning", "hydrotechnik", "watchlog-bluetooth-sensors-gauges-and-mobile-apps", "watchlog-bluetooth-pressure-temperature-sensors-gauges-and-app-for-up-to-4-sensors-connected-simultaneously", "wlb-pt-compact-bluetooth-pressure-sensor"]
};

// Product Data - WLB-TT Compact Bluetooth Temperature Sensor
export const wlbTtCompactBluetoothTemperatureSensorData: ProductData = {
  id: "wlb-tt-compact-bluetooth-temperature-sensor",
  name: "WLB-TT Compact Bluetooth Temperature Sensor",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  brand: "Hydrotechnik",
  images: [
    {
      src: "public/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/1st category/WLB-TT Compact Bluetooth Temperature Sensor/WLB-TT Compact Bluetooth Temperature Sensor.png",
      alt: "WLB-TT Compact Bluetooth Pressure Sensor"
    }
  ],
  description: [
    "Low-cost, cable-free temperature sensor with free monitoring and datalogging app available in the iOS App Store and Android Google Play store. An extremely fast and easy way to add live temperature monitoring and datalogging to your system."
  ],
  features: [
    "Small size, max height 106mm",
    "1st transmission rate",
    "Bluetooth transmission greater than 20m",
    "Monitor & record temperature using the Watchlog iOS & Android apps",
    "CR2032 battery-powered",
    "Typical battery life 12 months",
    "Secure screw cap for quick & easy battery changing ±0.5%FS accuracy",
    "Low-cost, cable-free pressure monitoring solution"
  ],
  orderCodes: {
    baseCode: "", // Not needed for this table
    description: "",
    options: [
      {
        label: "Order code",
        choices: [
          {
            range: "WLB-TT-0200-G1/4",
            code: "G1/4\" BSP male with ED seal ø6x20mm long probe | Watchlog Bluetooth Temperature Sensor -50...200°C measuring range CR2032 battery powered"
          },
          {
            range: "WLB-TT-0200-G1/8",
            code: "G1/8\" BSP male with ED seal ø4x10mm long probe | Watchlog Bluetooth Temperature Sensor -50...200°C measuring range CR2032 battery powered"
          }
        ]
      }
    ]
  },
  additionalSections: [
    {
      title: "Watchlog Bluetooth App",
      content: "The WLPB-DDPG supports iOS and Android Bluetooth apps. Once connected, the app can be used to display pressure values, start/stop logging, and export CSV test files. See more in our overview video.",
      videoEmbedUrl: "https://youtu.be/ZsVAlXbAL2M"
    }
  ],
  slugPath: ["oil-conditioning", "hydrotechnik", "watchlog-bluetooth-sensors-gauges-and-mobile-apps", "watchlog-bluetooth-pressure-temperature-sensors-gauges-and-app-for-up-to-4-sensors-connected-simultaneously", "wlb-tt-compact-bluetooth-temperature-sensor"]
};

// Product Data - WLB-DDPG Series Bluetooth Digital Datalogging Pressure Gauges
export const wlbDdpgSeriesBluetoothDataloggingPressureGaugesData: ProductData = {
  id: "wlb-ddpg-series-bluetooth-digital-datalogging-pressure-gauges",
  name: "WLB-DDPG Series Bluetooth Digital Datalogging Pressure Gauges",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  brand: "Hydrotechnik",
  images: [
    {
      src: "public/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/1st category/WLB-DDPG Series Bluetooth Digital Datalogging Pressure Gauges/WLB-DDPG Series Bluetooth Digital Datalogging Pressure Gauges.png",
      alt: "WLB-DDPG Series Bluetooth Digital Datalogging Pressure Gauges"
    }
  ],
  description: [
    "WLB-DDPG series digital pressure gauges are designed for both stationary and mobile measurement, display and datalogging of pressure. They can be used as reference pressure gauges to simplify the checking, adjustment and calibration of other pressure measurement devices directly on site.",
    "Excellent protection against dust and moisture is provided by a membrane keypad with rubber buttons and rubber protective shroud."
  ],
  features: [
    "High-accuracy digital pressure measurement with an accuracy of ±0.2%.",
    "Internal datalogging of time, date, actual pressure, and MIN/MAX value.",
    "Easy data transfer as CSV files to PC/laptop for further analysis in spreadsheets, databases or Watchlog CSV Visualizer.",
    "Compatible with the Watchlog Bluetooth iOS and Android Apps for visualisation and datalogging on your mobile device."
  ],
  orderCodes: {
    baseCode: "", // Not needed for this table
    description: "",
    options: [
      {
        label: "Ordering code",
        choices: [
          { range: "WLB-DDPG-V016", code: "-1...16 bar | 10 mbar" },
          { range: "WLB-DDPG-0060", code: "0...60 bar | 10 mbar" },
          { range: "WLB-DDPG-0250", code: "0...250 bar | 100 mbar" },
          { range: "WLB-DDPG-0400", code: "0...400 bar | 100 mbar" },
          { range: "WLB-DDPG-0700", code: "0...700 bar | 100 mbar" },
          { range: "WLB-DDPG-1000", code: "0...1000 bar | 100 mbar" }
        ]
      }
    ],
    note: "Different measuring ranges and accuracies of ±0.1% and ±0.05% are available on request.\\nPlease download the datasheet on this page for technical information.\\n* Add -MM for Minimess® 1620 male adaptor fitted\\n  Add -MF for Minimess® 1620 female adaptor fitted"
  },
  additionalSections: [
    {
      title: "Watchlog Bluetooth App",
      content: "The WLPB-DDPG supports iOS and Android Bluetooth apps. Once connected, the app can display pressure values, start/stop logging, and export CSV test files. See more in our overview video.",
      videoEmbedUrl: "https://youtu.be/ZsVAlXbAL2M"
    }
  ],
  slugPath: ["oil-conditioning", "hydrotechnik", "watchlog-bluetooth-sensors-gauges-and-mobile-apps", "watchlog-bluetooth-pressure-temperature-sensors-gauges-and-app-for-up-to-4-sensors-connected-simultaneously", "wlb-ddpg-series-bluetooth-digital-datalogging-pressure-gauges"]
};

// Product Data - WLB-DPG Series Watchlog Bluetooth Digital Pressure Gauge
export const wlbDpgSeriesBluetoothPressureGaugeData: ProductData = {
  id: "wlb-dpg-series-watchlog-bluetooth-digital-pressure-gauge",
  name: "WLB-DPG Series Watchlog Bluetooth Digital Pressure Gauge",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  brand: "Hydrotechnik",
  images: [
    {
      src: "public/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/1st category/WLB-DPG Series Watchlog Bluetooth Digital Pressure Gauge/WLB-DPG Series Watchlog Bluetooth digital pressure gauge.png",
      alt: "WLB-DPG Series Bluetooth Digital Datalogging Pressure Gauge"
    },
    {
      src: "public/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/1st category/WLB-DPG Series Watchlog Bluetooth Digital Pressure Gauge/WLB-DPG Series Watchlog Bluetooth digital pressure gauge-1.png",
      alt: "WLB-DPG Series Bluetooth Digital Datalogging Pressure Gauge"
    }
  ],
  description: [
    "The Watchlog Bluetooth digital pressure gauges incorporate a high-precision pressure sensor with an accurate LCD display showing measured pressure in real-time and can transmit readings up to 100ms via Bluetooth."
  ],
  orderCodes: {
    baseCode: "WLB-DPG-XXXX",
    description: "Replace XXXX with the code for the required pressure range",
    options: [
      {
        label: "Pressure range",
        choices: [
          { range: "-1 to +1 bar", code: "V001" },
          { range: "-1 to +16 bar", code: "V016" },
          { range: "0 to 60 bar", code: "0060" },
          { range: "0 to 160 bar", code: "0160" },
          { range: "0 to 250 bar", code: "0250" },
          { range: "0 to 400 bar", code: "0400" },
          { range: "0 to 700 bar", code: "0700" },
          { range: "0 to 1000 bar", code: "1000" }
        ]
      }
    ]
  },
  additionalSections: [
    {
      title: "Watchlog Bluetooth App",
      content: "The WLPB-DDPG supports iOS and Android Bluetooth apps. Once connected, the app can display pressure values, start/stop logging, and export CSV test files. See more in our overview video.",
      videoEmbedUrl: "https://youtu.be/ZsVAlXbAL2M"
    }
  ],
  technicalSpecs: [
    {
      title: "MEASURING RANGE",
      specs: [
        { label: "Negative/compound pressure", value: "Vacuum to 1 & 16 bar" },
        { label: "Low pressure (on request)", value: "0...0.1, 0.4 & 0.6 bar" },
        { label: "Medium pressure", value: "0...60, 160 & 250 bar" },
        { label: "High Pressure", value: "0...400, 700 & 1000 bar" }
      ]
    },
    {
      title: "OVERLOAD CAPACITY",
      specs: [
        { label: "Up to 400 bar", value: "200% of FS" },
        { label: "700 bar", value: "150% of FS" },
        { label: "1000 bar", value: "120% of FS" }
      ]
    },
    {
      title: "ACCURACY",
      specs: [
        { label: "Accuracy", value: "0.2% FS" }
      ]
    },
    {
      title: "OPERATING TEMPERATURE",
      specs: [
        { label: "Operating Temperature", value: "-20...65°C" }
      ]
    },
    {
      title: "POWER SUPPLY VOLTAGE",
      specs: [
        { label: "Power supply voltage", value: "3V (2x AA batteries)" }
      ]
    },
    {
      title: "PRESSURE UNIT",
      specs: [
        { label: "Pressure unit", value: "MPa, bar, kgf, mH2O, PSI, kPa, mmHg, mBAR, mmH2O, Pa, inWC" }
      ]
    },
    {
      title: "PROTECTION LEVEL",
      specs: [
        { label: "Protection level", value: "IP54" }
      ]
    }
  ],
  slugPath: ["oil-conditioning", "hydrotechnik", "watchlog-bluetooth-sensors-gauges-and-mobile-apps", "watchlog-bluetooth-pressure-temperature-sensors-gauges-and-app-for-up-to-4-sensors-connected-simultaneously", "wlb-dpg-series-watchlog-bluetooth-digital-pressure-gauge"]
};

// Product Data - Watchlog Bluetooth Live View & Datalogging App for iOS and Android
export const watchlogBluetoothLiveViewAppData: ProductData = {
  id: "watchlog-bluetooth-live-view-datalogging-app-for-ios-and-android",
  name: "Watchlog Bluetooth Live View & Datalogging App for iOS and Android",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  brand: "Hydrotechnik",
  images: [
    {
      src: "public/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/1st category/Watchlog Bluetooth Live View & Datalogging App for iOS and Android/Watchlog Bluetooth Live View & Datalogging App for iOS and Android.png",
      alt: "Watchlog Bluetooth Live View & Datalogging App for iOS and Android"
    },
    {
      src: "public/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/1st category/Watchlog Bluetooth Live View & Datalogging App for iOS and Android/Watchlog Bluetooth Live View & Datalogging App for iOS and Android-1.png",
      alt: "Watchlog Bluetooth Live View & Datalogging App for iOS and Android"
    },
    {
      src: "public/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/1st category/Watchlog Bluetooth Live View & Datalogging App for iOS and Android/Watchlog Bluetooth Live View & Datalogging App for iOS and Android-2.png",
      alt: "Watchlog Bluetooth Live View & Datalogging App for iOS and Android"
    }
  ],
  description: [
    "The Watchlog Bluetooth app from Hydrotechnik UK Test Engineering Ltd allows users to connect to up to 4 local Bluetooth sensors to view and record live data as well as share saved data directly from their mobile device."
  ],
  features: [
    "The app will display any Watchlog Bluetooth sensors found within the local area (1). Easily connect by tapping the Bluetooth logo for the respective sensor. Once connected, a name and colour used to display sensor data can be chosen.",
    "Live data is shown numerically in a single tile per sensor of the live view page (2).",
    "Live data is plotted graphically over time for each sensor in a single graph (3). Up to 60 seconds of recorded data is available at any time.",
    "Tapping the graph at any point shows the data for each sensor at that point in time (4).",
    "If the recording option is enabled and data is recorded over a given time, the option to export the data as a CSV file becomes available using the standard share options used by your iOS or Android device."
  ],
  video: "https://youtu.be/ZsVAlXbAL2M",
  slugPath: ["oil-conditioning", "hydrotechnik", "watchlog-bluetooth-sensors-gauges-and-mobile-apps", "watchlog-bluetooth-pressure-temperature-sensors-gauges-and-app-for-up-to-4-sensors-connected-simultaneously", "watchlog-bluetooth-live-view-datalogging-app-for-ios-and-android"]
};

// Product Data - DDPG Series Digital Datalogging Bluetooth Pressure Gauge & Minimess® Test Kit
export const ddpgSeriesBluetoothPressureGaugeTestKitData: ProductData = {
  id: "ddpg-series-digital-datalogging-bluetooth-pressure-gauge-minimess-test-kit",
  name: "DDPG Series Digital Datalogging Bluetooth Pressure Gauge & Minimess® Test Kit",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  brand: "Hydrotechnik",
  images: [
    {
      src: "public/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/1st category/DDPG Series Digital Datalogging Blutooth Pressure Gauge & Minimess® Test Kit/DDPG Series Digital Datalogging Blutooth Pressure Gauge & Minimess® Test Kit.png",
      alt: "DDPG Series Digital Datalogging Bluetooth Pressure Gauge & Minimess® Test Kit"
    },
    {
      src: "public/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/1st category/DDPG Series Digital Datalogging Blutooth Pressure Gauge & Minimess® Test Kit/DDPG Series Digital Datalogging Blutooth Pressure Gauge & Minimess® Test Kit-1.png",
      alt: "DDPG Series Digital Datalogging Bluetooth Pressure Gauge & Minimess® Test Kit"
    }
  ],
  description: [
    "Accurate digital pressure testing provides the user with pressure readings to diagnose hydraulic faults.",
    "Kits are supplied with either 1 or 2  digital pressure gauges and a protective rubber shroud with the following pressures: -1...16, 0...60, 0...250, 0...400, 0...700, & 0...1000 bar.",
    "Kits contain Minimess® test points, microbore test hoses and pipe/thread adaptors, all in a carry case with foam inserts."
  ],
  kitContents: [
    "1 or 2 x DDPG series digital datalogging pressure gauges with 1620 male connection, user selectable up to 1000 bar.",
    "Internal datalogging and Bluetooth app datalogging capabilities.",
    "2 x SNA series Minimess® Male/Swivel Female 1620 inline test point adaptors. 3/8\" & 1/2\" BSP.",
    "2 x Minimess® 1620 test points - G1/4\" BSP and M10x1 male thread.",
    "1 x G1/4\" BSP gauge female to Minimess® 1620 female gauge adaptor.",
    "1 or 2 x 630 bar rated Minimess® microbore pressure test hose - 1.5 meters long.",
    "Additional 3/8\" & 1/2\" BSP male threaded adaptors & seals."
  ],
  orderCodes: {
    baseCode: "3101-81-XX.50",
    description: "Replace XX with the code for the required pressure gauge range",
    options: [
      {
        label: "Pressure Gauge Range",
        choices: [
          { range: "NO GAUGE", code: "0" },
          { range: "-1 to 16 bar", code: "1" },
          { range: "0 to 60 bar", code: "4" },
          { range: "0 to 250 bar", code: "7" },
          { range: "0 to 400 bar", code: "8" },
          { range: "0 to 700 bar", code: "9" },
          { range: "0 to 1000 bar", code: "A" }
        ]
      }
    ]
  },
  additionalSections: [
    {
      title: "Ordering examples",
      content: `**3101-81-09.50** = Single digital pressure gauge kit with 1x 0...700 bar digital gauge\n**3101-81-7A.50** = Double digital pressure gauge kit with 1x 0...250 bar & 1x 0...1000 bar digital gauges`
    },
    {
      title: "WLB-DDPG Digital Datalogging Gauge & App",
      content: "As well as the included internal datalogging facility, the WLPB-DDPG supports iOS and Android Bluetooth apps. Once connected, the app can display pressure values, start/stop logging, and export CSV test files. See more in our overview video.",
      videoEmbedUrl: "https://youtu.be/ZsVAlXbAL2M"
    }
  ],
  slugPath: ["oil-conditioning", "hydrotechnik", "watchlog-bluetooth-sensors-gauges-and-mobile-apps", "watchlog-bluetooth-pressure-temperature-sensors-gauges-and-app-for-up-to-4-sensors-connected-simultaneously", "ddpg-series-digital-datalogging-bluetooth-pressure-gauge-minimess-test-kit"]
};

// Product Data - DGP Series Digital Bluetooth Pressure Gauge & Minimess Test Kit
export const dgpSeriesBluetoothPressureGaugeTestKitData: ProductData = {
  id: "dpg-series-digital-bluetooth-pressure-gauge-minimess-test-kit",
  name: "DGP Series Digital Bluetooth Pressure Gauge & Minimess Test Kit",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  brand: "Hydrotechnik",
  images: [
    {
      src: "public/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/1st category/DPG Series Digital Bluetooth Pressure Gauge & Minimess® Test Kit/DPG Series Digital Bluetooth Pressure Gauge & Minimess® Test Kit.png",
      alt: "DGP Series Digital Bluetooth Pressure Gauge & Minimess Test Kit"
    },
    {
      src: "public/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/1st category/DPG Series Digital Bluetooth Pressure Gauge & Minimess® Test Kit/DPG Series Digital Bluetooth Pressure Gauge & Minimess® Test Kit-1.png",
      alt: "DGP Series Digital Bluetooth Pressure Gauge & Minimess Test Kit"
    }
  ],
  description: [
    "Accurate digital pressure testing provides the user with pressure readings to diagnose hydraulic faults.",
    "Kits are supplied with either 1 or 2  digital pressure gauges and a protective rubber shroud with the following pressures: -1...1, -1...16, 0...60, 0...160, 0...250, 0...400, 0...700, & 0...1000 bar.",
    "Kits contain Minimess® test points, microbore test hoses and pipe/thread adaptors, all in a carry case with foam inserts."
  ],
  kitContents: [
    "1 or 2 x DPG series digital datalogging pressure gauges with 1620 male connection, user selectable up to 1000 bar",
    "Internal datalogging and Bluetooth app datalogging capabilities.",
    "2 x SNA series Minimess® Male/Swivel Female 1620 inline test point adaptors. 3/8\" & 1/2\" BSP.",
    "2 x Minimess® 1620 test points - G1/4\" BSP and M10x1 male thread.",
    "1 x G1/4\" BSP gauge female to Minimess® 1620 female gauge adaptor.",
    "1 or 2 x 630 bar rated Minimess® microbore pressure test hose - 1.5 meters long.",
    "Additional 3/8\" & 1/2\" BSP male threaded adaptors & seals."
  ],
  orderCodes: {
    baseCode: "3101-WB-XX.50",
    description: "Replace XX with the code for the required pressure gauge range",
    options: [
      {
        label: "Pressure Gauge Range",
        choices: [
          { range: "NO GAUGE", code: "0" },
          { range: "-1...1 bar", code: "V" },
          { range: "-1...16 bar", code: "1" },
          { range: "0...60 bar", code: "4" },
          { range: "0...160 bar", code: "5" },
          { range: "0...250 bar", code: "7" },
          { range: "0...400 bar", code: "8" },
          { range: "0...700 bar", code: "9" },
          { range: "0...1000 bar", code: "A" }
        ]
      }
    ]
  },
  additionalSections: [
    {
      title: "Ordering examples",
      content: `**3101-WB-09.50** = Single digital pressure gauge kit with 1x 0...700 bar digital gauge\n**3101-WB-7A.50** = Double digital pressure gauge kit with 1x 0...250 bar & 1 x 0...1000 bar digital gauges`
    },
    {
      title: "WLB-DPG Digital Gauge & App",
      content: "The WLPB-DPG supports iOS and Android Bluetooth apps. Once connected, the app can display pressure values, start/stop logging, and export CSV test files. See more in our overview video.",
      videoEmbedUrl: "https://youtu.be/ZsVAlXbAL2M"
    }
  ],
  slugPath: ["oil-conditioning", "hydrotechnik", "watchlog-bluetooth-sensors-gauges-and-mobile-apps", "watchlog-bluetooth-pressure-temperature-sensors-gauges-and-app-for-up-to-4-sensors-connected-simultaneously", "dpg-series-digital-bluetooth-pressure-gauge-minimess-test-kit"]
};

// ============================
// Watchlog Bluetooth-Plus Pressure, Level & Force Sensors and App for up to 12 connected sensors & advanced app calculation features
// ============================

// Category Data - Watchlog Bluetooth-Plus Pressure, Level & Force Sensors and App for up to 12 connected sensors & advanced app calculation features
export const watchlogBluetoothPlusPressureLevelForceSensorsAndAppForUpTo12ConnectedSensorsAdvancedAppCalculationFeaturesData = {
  id: "watchlog-bluetooth-plus-pressure-level-force-sensors-and-app-for-up-to-12-connected-sensors-advanced-app-calculation-features",
  name: "Watchlog Bluetooth-Plus Pressure, Level & Force Sensors and App for up to 12 connected sensors & advanced app calculation features",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  subsubcategory: "watchlog-bluetooth-sensors-gauges-and-mobile-apps",
  subsubsubcategory: "watchlog-bluetooth-plus-pressure-level-force-sensors-and-app-for-up-to-12-connected-sensors-advanced-app-calculation-features",
  brand: "Hydrotechnik",
  description: [
    "Watchlog Bluetooth-Plus is a short-range wireless measurement solution, designed to work with iOS and Android mobile devices, as well as iPads and Android tablets.",
    "Our powerful free app lets users create custom projects and custom dashboards to display values and log data. The custom dashboard includes graphical display elements, such as gauges and tank level widgets, to represent data.",
    "Up to 12 transmitters at once can be monitored on one device or many devices up to 10 times per second and transmit distances to 90 meters, all powered from just 2 standard AA batteries."
  ],
  images: [
    {
      src: "/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/2nd category/watchlog-bluetooth-plus-pressure-level-force-sensor-app-12-sensors.png",
      alt: "Watchlog Bluetooth-Plus Pressure, Level & Force Sensors and App"
    }
  ],
  features: [
    "Free iOS and Android mobile apps for viewing and logging data",
    "Create custom projects/visuals",
    "View up to 12 sensor readings at a time",
    "Up to 90 meters data transmission distance",
    "From 100ms...25s selectable scanning rates",
    "Standard battery powered (2xAA)",
    "Password protection",
    "HT-WLBP Bluetooth-Plus pressure sensors with pressure ranges available from 0...25 bar up to 0...700 bar",
    "HT-WLBL Bluetooth-Plus hydrostatic level sensors with level ranges from 0...0.5 mH20 to 0...700 mH20",
    "HT-WLBLC Bluetooth-Plus compression load cells with capacities of 1 to 200kN",
    "HT-WLBLL Bluetooth-Plus load links with capacities of 1 to 500 tonnes"
  ],
  categoryProductIds: [
    "ht-wlbp-watchlog-bluetooth-plus-pressure-sensor",
    "ht-wlbl-watchlog-bluetooth-plus-hydrostatic-level-sensors",
    "ht-wlblc-watchlog-bluetooth-plus-compression-load-cells",
    "ht-wlbll-watchlog-bluetooth-plus-compression-load-link",
    "watchlog-bluetooth-plus-ios-and-android-app"
  ],
  additionalSections: [
    {
      title: "Product Ranges",
      content: "PRODUCT_GRID:watchlog-bluetooth-plus-pressure-level-force-sensors-and-app-for-up-to-12-connected-sensors-advanced-app-calculation-features-products"
    }
  ],
  slugPath: [
    "oil-conditioning",
    "hydrotechnik",
    "watchlog-bluetooth-sensors-gauges-and-mobile-apps",
    "watchlog-bluetooth-plus-pressure-level-force-sensors-and-app-for-up-to-12-connected-sensors-advanced-app-calculation-features"
  ]
};

// Product Data - HT-WLBP Watchlog Bluetooth-Plus Pressure Sensor
export const htWlbpWatchlogBluetoothPlusPressureSensorData: ProductData = {
  id: "ht-wlbp-watchlog-bluetooth-plus-pressure-sensor",
  name: "HT-WLBP Watchlog Bluetooth-Plus Pressure Sensor",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  brand: "Hydrotechnik",
  images: [
    {
      src: "/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/2nd category/HT-WLBP Watchlog Bluetooth-Plus Pressure Sensor/HT-WLBP Watchlog Bluetooth-Plus Pressure Sensor.png",
      alt: "HT-WLBP Watchlog Bluetooth-Plus Pressure Sensor"
    },
    {
      src: "/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/2nd category/HT-WLBP Watchlog Bluetooth-Plus Pressure Sensor/HT-WLBP Watchlog Bluetooth-Plus Pressure Sensor-1.png",
      alt: "HT-WLBP Watchlog Bluetooth-Plus Pressure Sensor"
    }
  ],
  description: [
    "Watchlog Bluetooth-Plus sensors send pressure readings straight to your mobile device or tablet, making multi-channel wireless pressure monitoring affordable for small-scale applications. Readings can be transmitted at rates from 100ms up to 10s over distances of up to 90m.",
    "A powerful app allows up to 12 sensors to be read simultaneously, available for Android and iOS. The app also allows for data logging, alarming and capture of minimum/maximum values, for more information and instructional videos visit the Watchlog Bluetooth App page. ",
    "Bluetooth transmitters are powered by AA batteries and have a long life.  Transmitters can be supplied as compact fixed units or with a connection cable, which allows for remote placement of the transmitter."
  ],
  orderCodes: {
    baseCode: "WLBP-XXXX-Y.ZZ",
    description: "Replace XXXX with pressure range, Y with connector type, and ZZ with cable length.",
    options: [
      {
        label: "Pressure range",
        choices: [
          { range: "0...25 bar", code: "0025" },
          { range: "0...160 bar", code: "0160" },
          { range: "0...400 bar", code: "0400" },
          { range: "0...700 bar", code: "0700" }
        ]
      },
      {
        label: "Connector type",
        choices: [
          { range: "90° angled", code: "A" },
          { range: "Straight", code: "S" }
        ]
      },
      {
        label: "Cable length",
        choices: [
          { range: "1.5 meters", code: "1.5" },
          { range: "3.0 meters", code: "3.0" },
          { range: "5.0 meters", code: "5.0" },
          { range: "10.0 meters", code: "10.0" }
        ]
      }
    ],
    note: "Other pressure ranges and cable lengths available on request. Leave connector type blank if no cable."
  },
  slugPath: [
    "oil-conditioning",
    "hydrotechnik",
    "watchlog-bluetooth-sensors-gauges-and-mobile-apps",
    "watchlog-bluetooth-plus-pressure-level-force-sensor-app-12-sensors",
    "ht-wlbp-watchlog-bluetooth-plus-pressure-sensor"
  ]
};

// Product Data - HT-WLBL Watchlog Bluetooth-Plus Hydrostatic Level Sensors
export const htWlblWatchlogBluetoothPlusHydrostaticLevelSensorsData: ProductData = {
  id: "ht-wlbl-watchlog-bluetooth-plus-hydrostatic-level-sensors",
  name: "HT-WLBL Watchlog Bluetooth-Plus Hydrostatic Level Sensors",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  brand: "Hydrotechnik",
  images: [
    {
      src: "/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/2nd category/HT-WLBL Watchlog Bluetooth-Plus Hydrostatic Level Sensors/HT-WLBL Watchlog Bluetooth-Plus Hydrostatic Level Sensors.png",
      alt: "HT-WLBL Watchlog Bluetooth-Plus Hydrostatic Level Sensors"
    },
    {
      src: "/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/2nd category/HT-WLBL Watchlog Bluetooth-Plus Hydrostatic Level Sensors/HT-WLBL Watchlog Bluetooth-Plus Hydrostatic Level Sensors-1.png",
      alt: "HT-WLBL Watchlog Bluetooth-Plus Hydrostatic Level Sensors"
    },
  ],
  description: [
    "Watchlog Bluetooth-Plus sensors send level readings straight to your mobile device or tablet, making multi-channel wireless level monitoring affordable for small-scale applications. Readings can be transmitted at rates of 100ms up to 10s over distances of up to 90m.",
    "The hydrostatic level sensor is available with pressure ranges from 0...0.15 mH20 up to 0...3 mH20 and cable lengths from 1.5m up to 4m, with other pressure ranges and cable lengths are available on request.",
    "A powerful app allows up to 12 sensors to be read simultaneously, available for Android and iOS.  The app also allows for data logging, alarming and capturing minimum/maximum values, for more information and instructional videos visit the Watchlog Bluetooth App page."
  ],
  orderCodes: {
    baseCode: "WLBL-XXXX-Z.Z",
    description: "Replace XXXX with level range and Z.Z with cable length.",
    options: [
      {
        label: "Level range",
        choices: [
          { range: "0...0.5 mH₂O", code: "0025" },
          { range: "0...160 mH₂O", code: "0160" },
          { range: "0...400 mH₂O", code: "0400" },
          { range: "0...700 mH₂O", code: "0700" }
        ]
      },
      {
        label: "Cable length",
        choices: [
          { range: "1.5 meters", code: "1.5" },
          { range: "2.0 meters", code: "2.0" },
          { range: "3.0 meters", code: "3.0" },
          { range: "4.0 meters", code: "4.0" }
        ]
      }
    ],
    note: "Other level ranges and cable lengths available on request."
  },
  slugPath: ["oil-conditioning", "hydrotechnik", "watchlog-bluetooth-sensors-gauges-and-mobile-apps", "watchlog-bluetooth-plus-pressure-level-force-sensors-and-app-for-up-to-12-connected-sensors-advanced-app-calculation-features", "ht-wlbl-watchlog-bluetooth-plus-hydrostatic-level-sensors"]
};

// Product Data - HT-WLBLC Watchlog Bluetooth-Plus Compression Load Cells
export const htWlblcWatchlogBluetoothPlusCompressionLoadCellsData: ProductData = {
  id: "ht-wlblc-watchlog-bluetooth-plus-compression-load-cells",
  name: "HT-WLBLC Watchlog Bluetooth-Plus Compression Load Cells",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  brand: "Hydrotechnik",
  images: [
    {
      src: "/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/2nd category/HT-WLBLC Watchlog Bluetooth-Plus Compression Load Cells/HT-WLBLC Watchlog Bluetooth-Plus Compression Load Cells.png",
      alt: "HT-WLBLC Watchlog Bluetooth-Plus Compression Load Cells"
    },
    {
      src: "/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/2nd category/HT-WLBLC Watchlog Bluetooth-Plus Compression Load Cells/HT-WLBLC Watchlog Bluetooth-Plus Compression Load Cells.png-1",
      alt: "HT-WLBLC Watchlog Bluetooth-Plus Compression Load Cells"
    },
  ],
  description: [
    "Our Bluetooth® compression load cell system sends data straight to your mobile device, making multi-channel wireless level monitoring affordable for small-scale applications. Create custom projects and displays to show data in a format which suits you. Displays can be created using several graphic and numeric widgets. Readings can be transmitted at rates of 100ms up to 10s over distances of up to 90m.",
    "The load compression load cell is robust and suitable for compression ranges from 5kN to 200kN. Cable options include 1.5m and 3m, with other lengths available on request.",
    "A powerful app allows up to 12 sensors to be read simultaneously, available for Android and iOS."
  ],
  orderCodes: {
    baseCode: "WLBLC-XXX-Z.Z",
    description: "Replace XXX with load capacity and Z.Z with cable length.",
    options: [
      {
        label: "Load capacity",
        choices: [
          { range: "1kN", code: "001" },
          { range: "5kN", code: "005" },
          { range: "10kN", code: "010" },
          { range: "20kN", code: "020" },
          { range: "50kN", code: "050" },
          { range: "100kN", code: "100" },
          { range: "200kN", code: "200" }
        ]
      },
      {
        label: "Cable length",
        choices: [
          { range: "1.5 meters", code: "1.5" },
          { range: "3.0 meters", code: "3.0" }
        ]
      }
    ],
    note: "Other load capacities and cable lengths are available on request."
  },
  slugPath: [
    "oil-conditioning",
    "hydrotechnik",
    "watchlog-bluetooth-sensors-gauges-and-mobile-apps",
    "watchlog-bluetooth-plus-pressure-level-force-sensors-and-app-for-up-to-12-connected-sensors-advanced-app-calculation-features",
    "ht-wlblc-watchlog-bluetooth-plus-compression-load-cells"
  ]
};

// Product Data - HT-WLBLL Watchlog Bluetooth-Plus Compression Load Link
export const htWlbllWatchlogBluetoothPlusCompressionLoadLinkData: ProductData = {
  id: "ht-wlbll-watchlog-bluetooth-plus-compression-load-link",
  name: "HT-WLBLL Watchlog Bluetooth-Plus Compression Load Link",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  brand: "Hydrotechnik",
  images: [
    {
      src: "/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/2nd category/HT-WLBLL Watchlog Bluetooth-Plus Compression Load Link/HT-WLBLL Watchlog Bluetooth-Plus Compression Load Link.png",
      alt: "HT-WLBLL Watchlog Bluetooth-Plus Compression Load Link"
    },
    {
      src: "/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/2nd category/HT-WLBLL Watchlog Bluetooth-Plus Compression Load Link/HT-WLBLL Watchlog Bluetooth-Plus Compression Load Link-1.png",
      alt: "HT-WLBLL Watchlog Bluetooth-Plus Compression Load Link"
    }
  ],
  description: [
    "Our Bluetooth® inline load link system sends data straight to your mobile device, making multi-channel wireless level monitoring affordable for small-scale applications. Create custom projects and displays to show data in a format which suits you. Displays can be created using several graphic and numeric widgets. Readings can be transmitted at rates of 100ms up to 10s over distances of up to 90m.",
    "The load link is robust and suitable for loads 1 tonne to 500 tonnes. Cable options include 1.5m and 3m, with other lengths available on request.",
    "A powerful app allows up to 12 sensors to be read simultaneously, available for Android and iOS."
  ],
  orderCodes: {
    baseCode: "HT-WLBLL-XXX-Z.Z",
    description: "Replace XXX with load capacity (tonnes) and Z.Z with cable length.",
    options: [
      {
        label: "Load capacity (tonnes)",
        choices: [
          { range: "1", code: "001" },
          { range: "2", code: "002" },
          { range: "5", code: "005" },
          { range: "25", code: "025" },
          { range: "35", code: "035" },
          { range: "50", code: "050" },
          { range: "100", code: "100" },
          { range: "250", code: "250" },
          { range: "500", code: "500" }
        ]
      },
      {
        label: "Cable length",
        choices: [
          { range: "1.5 meters", code: "1.5" },
          { range: "3.0 meters", code: "3.0" }
        ]
      }
    ],
    note: "Other cable lengths are available on request."
  },
  slugPath: [
    "oil-conditioning",
    "hydrotechnik",
    "watchlog-bluetooth-sensors-gauges-and-mobile-apps",
    "watchlog-bluetooth-plus-pressure-level-force-sensors-and-app-for-up-to-12-connected-sensors-advanced-app-calculation-features",
    "ht-wlbll-watchlog-bluetooth-plus-compression-load-link"
  ]
};

// Product Data - Watchlog Bluetooth-Plus iOS and Android App
export const watchlogBluetoothPlusIosAndAndroidAppData: ProductData = {
  id: "watchlog-bluetooth-plus-ios-and-android-app",
  name: "Watchlog Bluetooth-Plus iOS and Android App",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  brand: "Hydrotechnik",
  images: [
    {
      src: "/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/2nd category/Watchlog Bluetooth-Plus iOS and Android App/Watchlog Bluetooth-Plus iOS and Android App.png",
      alt: "Watchlog Bluetooth-Plus iOS and Android App"
    }
  ],
  description: [
    "Create custom projects and displays to show data in a format which suits you. Displays can be created using a number of graphic and numeric widgets.",
    "Transmission rates and password protection can be adjusted using the app. The datalogging feature includes scanning rates from 500ms up to 10 minutes and stored history points from 10 through to 10,000.",
    "Logged data can be shared using multiple methods including text message and email, directly from the app.",
    "Compared with our standard Watchlog Bluetooth App, the Watchlog Bluetooth-Plus app has the following features:",
    "1.\tConnect to more sensors; up to 12, as opposed to up to 4.",
    "2.\tCreate calculation channels programmable within the app. For example, using 2 the difference between 2 pressure sensor readings to calculate differential pressure. This calculation can then be displayed, graphed and recorded in real time and shared the same way as sensor readings.",
    "3.\tUse graphical widgets on custom dashboards to represent sensor values such as tank level indicators and gauges."
  ],
  features: [
    "Free iOS and Android mobile apps for viewing and logging data",
    "Create custom projects/visuals",
    "View up to 12 pressures at a time",
    "One Bluetooth-Plus pressure sensor to many devices, many to one or many to many",
    "Up to 90 meters datatransmission distance",
    "Password protection",
    "SECTORS: Automotive, industrial, food & beverage, pulp & paper, mobile hydraulics, machine tools, and pump testing"
  ],
  slugPath: [
    "oil-conditioning",
    "hydrotechnik",
    "watchlog-bluetooth-sensors-gauges-and-mobile-apps",
    "watchlog-bluetooth-plus-pressure-level-force-sensors-and-app-for-up-to-12-connected-sensors-advanced-app-calculation-features",
    "watchlog-bluetooth-plus-ios-and-android-app"
  ]
};

// ============================
// WATCHLOG WIRELESS PRESSURE, TEMPERATURE AND FLOW SENSORS
// ============================

// Category Data - Watchlog Wireless Pressure, Temperature and Flow Sensors
export const watchlogWirelessPressureTemperatureAndFlowSensorsCategoryData: ProductData = {
  id: "watchlog-wireless-pressure-temperature-and-flow-sensors",
  name: "Watchlog Wireless Pressure, Temperature and Flow Sensors",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  subsubcategory: "watchlog-wireless-pressure-temperature-and-flow-sensors",
  brand: "Hydrotechnik",
  description: [
    "Watchlog Wireless is our short to medium (800m to 1.6km) wireless transmission system for pressure, temperature, level, flow, position, force etc.",
    "Data can be viewed in multiple ways. For example, through the free Watchlog Wireless Windows tablet/PC software supplied with all sensors, which has powerful data visualisation features and datalogging capabilities.",
    "Many other signal gateways are available for easy integration into existing customer data management systems, providing analogue or Modbus signals and also for easy integration into cloud sensor platform, such as our Watchlog Vision system."
  ],
  images: [
    {
      src: "/products/oil conditioning/Hydrotechnik/Watchlog Wireless Pressure, Temperature and Flow Sensors/Watchlog Wireless Pressure, Temperature and Flow Sensors.png",
      alt: "Watchlog Bluetooth-Plus Pressure, Level & Force Sensors and App"
    },
    {
      src: "/products/oil conditioning/Hydrotechnik/Watchlog Wireless Pressure, Temperature and Flow Sensors/Watchlog Wireless Pressure, Temperature and Flow Sensors-1.png",
      alt: "Watchlog Bluetooth-Plus Pressure, Level & Force Sensors and App"
    }
  ],
  categoryProductIds: [
    "watchlog-wireless-pressure-flow-temperature-test-kit",
    "watchlog-wireless-vision",
    "watchlog-atex-wireless-pressure-sensors",
    "watchlog-wireless-pressure-sensors",
    "watchlog-wireless-temperature-sensors",
    "watchlog-wireless-linear-position-sensor",
    "watchlog-wireless-turbine-flow-meters",
    "watchlog-wireless-oval-gear-flow-meters",
    "watchlog-wireless-usb-base-stations-receivers",
    "wlw-ar-wireless-signal-extender",
    "watchlog-wireless-signal-gateway-modules",
    "watchlog-wireless-configuring-monitoring-logging-software",
    "watchlog-wireless-accessories",
    "wlwpl-series-cellular-level-sensor"
  ],
  additionalSections: [
    {
      title: "Product Ranges",
      content: "PRODUCT_GRID:watchlog-wireless-pressure-temperature-and-flow-sensors-products"
    }
  ],
  slugPath: [
    "oil-conditioning",
    "hydrotechnik",
    "watchlog-wireless-pressure-temperature-and-flow-sensors"
  ]
};

// Product Data - Watchlog Wireless Pressure, Flow & Temperature Test Kit
export const watchlogWirelessPressureFlowTemperatureTestKitData: ProductData = {
  id: "watchlog-wireless-pressure-flow-temperature-test-kit",
  name: "Watchlog Wireless Pressure, Flow & Temperature Test Kit",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  brand: "Hydrotechnik",
  images: [
    { src: "public/products/oil conditioning/Hydrotechnik/Watchlog Wireless Pressure, Temperature and Flow Sensors/Watchlog Wireless Pressure, Flow & Temperature Test Kit/Watchlog Wireless Pressure, Flow & Temperature Test Kit.png", alt: "Watchlog Wireless Pressure, Flow & Temperature Test Kit" },
    { src: "public/products/oil conditioning/Hydrotechnik/Watchlog Wireless Pressure, Temperature and Flow Sensors/Watchlog Wireless Pressure, Flow & Temperature Test Kit/Watchlog Wireless Pressure, Flow & Temperature Test Kit-1.png", alt: "Watchlog Wireless Pressure, Flow & Temperature Test Kit" }
  ],
  video: "https://youtu.be/tkPijlOLAI0",
  description: [
    "The Watchlog Wireless test kit is a portable wireless sensor test kit which allows for a user-configurable mix of pressure, temperature or flow sensors (others available on request).",
    "Kits are designed for any combination of up to 4 sensors with supplied Windows tablet and Watchlog software allowing for numerical and graphical viewing and logging of all sensors simultaneously up to 800m."
  ],
  features: [
    "Test pressures up to 700 bar, flow rates up to 1000 l/min & temperatures up to 200ºC",
    "Acquire sensor data wirelessly up to 800m distance",
    "Supplied with Windows tablet and receiver with Watchlog Wireless software",
    "View and log data numerically and graphically",
    "Powered by 2x AA batteries",
    "All housed in a rugged ABS IP67 carry case"
  ],
  kitContents: [
    "Rugged ABS IP67 carry case",
    "WLW-Bsue USB wireless signal receiver",
    "10\" touchscreen Window tablet and keyboard with Watchlog Wireless software"
  ],
  additionalSections: [
    {
      title: "User-Configurable Sensor Options",
      content: `
        <ol start=\"4\">
          <li>WLWP wireless pressure sensors. Transmitters sensor mounted or 3m cable mounted. 0...25, 160, 400 and 700 bar options</li>
          <li>WLWT wireless temperature sensors. Transmitter sensors mounted or 3m cable mounted. -50...100°C or -50° to 200°C</li>
          <li>WLWF wireless turbine flow meters sensors. Transmitters 4m cable mounted. Ranges from 1 up to 1000 l/min. 420 bar max.</li>
        </ol>
        <em>Other sensor options are available on request.</em>
      `
    },
  ],
  orderCodes: {
    baseCode: "WLWTK-X-X-X-X",
    description: "Select at least one and up to four sensors of your choice to configure your kit. Replace up to 4 Xs in the order code with your selections below.",
    options: [
      {
        label: "Pressure sensor options",
        choices: [
          { range: "0...25 bar, Direct mount", code: "P025" },
          { range: "0...25 bar, Cabled", code: "P025C" },
          { range: "0...160 bar, Direct mount", code: "P160" },
          { range: "0...160 bar, Cabled", code: "P160C" },
          { range: "0...400 bar, Direct mount", code: "P400" },
          { range: "0...400 bar, Cabled", code: "P400C" },
          { range: "0...700 bar, Direct mount", code: "P700" },
          { range: "0...700 bar, Cabled", code: "P700C" }
        ]
      },
      {
        label: "Temperature sensor options",
        choices: [
          { range: "-50...+100°C, Direct mount", code: "T510" },
          { range: "-50...+100°C, Cabled", code: "T510C" },
          { range: "-50...+200°C, Direct mount", code: "T520" },
          { range: "-50...+200°C, Cabled", code: "T520C" }
        ]
      },
      {
        label: "Flow meter options",
        choices: [
          { range: "1...10 l/min", code: "F0010C" },
          { range: "7.5...75 l/min", code: "F0075C" },
          { range: "15...300 l/min", code: "F0300C" },
          { range: "25...600 l/min", code: "F0600C" },
          { range: "45...1000 l/min", code: "F1000C" }
        ]
      }
    ]
  },
  slugPath: [
    "oil-conditioning",
    "hydrotechnik",
    "watchlog-wireless-pressure-temperature-and-flow-sensors",
    "watchlog-wireless-pressure-flow-temperature-test-kit"
  ]
};

// Product Data - Watchlog Wireless Vision
export const watchlogWirelessVisionData: ProductData = {
  id: "watchlog-wireless-vision",
  name: "Watchlog Wireless Vision",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  brand: "Hydrotechnik",
  images: [
    { src: "public/products/oil conditioning/Hydrotechnik/Watchlog Wireless Pressure, Temperature and Flow Sensors/Watchlog Wireless Vision/Watchlog Wireless Vision-3.png", alt: "Watchlog Wireless Vision" },
  ],
  additionalSections: [
    {
      content: "Our cloud platform, Watchlog Wireless Vision, when used in conjunction with the Watchlog Wireless sensors system allows remote access to your sensor data presented in graphical and tabular formats. Live data is trended and saved and can be downloaded for historical analysis/archiving."
    },
    {
      content: "A key feature is being able to set flexible alerts when values are breached. Alerts are easy to set up and manage. Alerts can be text messages or emails to key staff when a value is breached. Wireless uptime is also monitored, and any outages are logged and can be alerted."
    },
    {
      image: {
        src: "public/products/oil conditioning/Hydrotechnik/Watchlog Wireless Pressure, Temperature and Flow Sensors/Watchlog Wireless Vision/Watchlog Wireless Vision.png",
        alt: "Watchlog Wireless Vision dashboard screenshot"
      }
    },
    {
      content: "Hydrotechnik have support staff to help with Watchlog Wireless Vision deployment and can also facilitate 3rd party branding if required. The Vision cloud platform is a low-cost monthly subscription model which can also facilitate separate branding and logins if required."
    },
    {
      title: "You local environment",
      content: "Locally, Watchlog Wireless temperature, pressure, displacement, flow and other sensors connect wirelessly to the receiver, making readings immediately available for local viewing and alerting. Data can also be pushed from a local PC to the Watchlog Vision Cloud for long term monitoring and alerting.",
      image: {
        src: "public/products/oil conditioning/Hydrotechnik/Watchlog Wireless Pressure, Temperature and Flow Sensors/Watchlog Wireless Vision/Watchlog Wireless Vision-1.png",
        alt: "Local environment dashboard"
      }
    },
    {
      title: "Remote cloud access",
      content: "Data can be pushed to the cloud platform from PC software running locally or via WiFi or Cellular Gateways. Gateways take readings from up to 60 Sensors on the same network and push information to the cloud for analysis. This is then accessed remotely using a web browser on a PC, Tablet or Mobile device.",
      image: {
        src: "public/products/oil conditioning/Hydrotechnik/Watchlog Wireless Pressure, Temperature and Flow Sensors/Watchlog Wireless Vision/Watchlog Wireless Vision-2.png",
        alt: "Remote cloud access dashboard"
      }
    }
  ],
  slugPath: [
    "oil-conditioning",
    "hydrotechnik",
    "watchlog-wireless-pressure-temperature-and-flow-sensors",
    "watchlog-wireless-vision"
  ]
};

// Product Data - Watchlog ATEX Wireless Pressure Sensors
export const watchlogAtexWirelessPressureSensorsData: ProductData = {
  id: "watchlog-atex-wireless-pressure-sensors",
  name: "Watchlog ATEX Wireless Pressure Sensors",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  brand: "Hydrotechnik",
  images: [
    { src: "public/products/oil conditioning/Hydrotechnik/Watchlog Wireless Pressure, Temperature and Flow Sensors/Watchlog ATEX Wireless Pressure Sensors/Watchlog ATEX Wireless Pressure Sensors.png", alt: "Watchlog ATEX Wireless Pressure Sensors" }
  ],
  description: [
    "Pressure sensors fitted with ATEX Watchlog Wireless transmitters send measuring data to the BSx series signal receiving base stations.  2xAA batteries give up to 2 years of battery life. Adjust scanning and data transmission speeds via Watchlog Wireless software.",
    "Pressure transducers are supplied with 1/4\" BSP male connections or can be supplied with an adaptor to connect to Minimess test points for safe connection and disconnection."
  ],
  orderCodes: {
    baseCode: "WLWPX-AA-XXXX-Y.ZZ",
    description: "Replace XXXX with pressure range, Y with connector type, and Z.Z with cable length.",
    options: [
      {
        label: "Transmitter type",
        choices: [
          { range: "2xAA battery powered", code: "AA" },
          { range: "2xD battery powered or 5...18Vdc externally powered. Requires cabling option (cannot be sensor mounted).", code: "DD" }
        ]
      },
      {
        label: "Pressure range",
        choices: [
          { range: "0...25 bar", code: "0025" },
          { range: "0...60 bar", code: "0060" },
          { range: "0...160 bar", code: "0160" },
          { range: "0...250 bar", code: "0250" },
          { range: "0...400 bar", code: "0400" },
          { range: "0...700 bar", code: "0700" }
        ]
      },
      {
        label: "Connector type",
        choices: [
          { range: "Angled", code: "A" },
          { range: "Straight", code: "S" }
        ]
      },
      {
        label: "Cable length",
        choices: [
          { range: "1.5 meters", code: "1.5" },
          { range: "3.0 meters", code: "3.0" },
          { range: "5.0 meters", code: "5.0" },
          { range: "10.0 meters", code: "10.0" }
        ]
      }
    ]
  },
  slugPath: ["oil-conditioning", "hydrotechnik", "watchlog-wireless-pressure-temperature-and-flow-sensors", "watchlog-atex-wireless-pressure-sensors"]
};

// Product Data - Watchlog Wireless Pressure Sensors
export const watchlogWirelessPressureSensorsData: ProductData = {
  id: "watchlog-wireless-pressure-sensors",
  name: "Watchlog Wireless Pressure Sensors",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  brand: "Hydrotechnik",
  images: [
    { src: "public/products/oil conditioning/Hydrotechnik/Watchlog Wireless Pressure, Temperature and Flow Sensors/Watchlog Wireless Pressure Sensors/Watchlog Wireless Pressure Sensors.png", alt: "Watchlog Wireless Pressure Sensors" },
    { src: "public/products/oil conditioning/Hydrotechnik/Watchlog Wireless Pressure, Temperature and Flow Sensors/Watchlog Wireless Pressure Sensors/Watchlog Wireless Pressure Sensors-1.png", alt: "Watchlog Wireless Pressure Sensors" }
  ],
  description: [
    "Pressure sensors fitted with Watchlog Wireless transmitters send measuring data to the BSx series signal receiving base stations.  2xAA batteries give up to 2 years of battery life. Adjust scanning and data transmission speeds via Watchlog Wireless software.",
    "A version powered by 2xD batteries for up to 5...18Vdc is also available.",
    "Pressure transducers are supplied with 1/4\" BSP male connections or can be supplied with an adaptor to connect on to Minimess test points for safe connection and disconnection."
  ],
  orderCodes: {
    baseCode: "WLWP-**-XXXX-Y.ZZ",
    description: "Replace ** with transmitter type, XXXX with pressure range, Y with connector type (leave blank if no cable required), and Z.Z with cable length (leave blank if no cable required).",
    options: [
      {
        label: "Transmitter type",
        choices: [
          { range: "2xAA battery powered", code: "AA" },
          { range: "2xD battery powered or 5...18Vdc externally powered. Requires cabling option (cannot be sensor mounted).", code: "DD" }
        ]
      },
      {
        label: "Pressure range",
        choices: [
          { range: "0...25 bar", code: "0025" },
          { range: "0...60 bar", code: "0060" },
          { range: "0...160 bar", code: "0160" },
          { range: "0...250 bar", code: "0250" },
          { range: "0...400 bar", code: "0400" },
          { range: "0...700 bar", code: "0700" }
        ]
      },
      {
        label: "Connector type",
        choices: [
          { range: "Angled", code: "A" },
          { range: "Straight", code: "S" }
        ]
      },
      {
        label: "Cable length",
        choices: [
          { range: "1.5 meters", code: "1.5" },
          { range: "3.0 meters", code: "3.0" },
          { range: "5.0 meters", code: "5.0" },
          { range: "10.0 meters", code: "10.0" }
        ]
      }
    ]
  },
  slugPath: [
    "oil-conditioning",
    "hydrotechnik",
    "watchlog-wireless-pressure-temperature-and-flow-sensors",
    "watchlog-wireless-pressure-sensors"
  ]
};

// Product Data - Watchlog Wireless Temperature Sensors
export const watchlogWirelessTemperatureSensorsData: ProductData = {
  id: "watchlog-wireless-temperature-sensors",
  name: "Watchlog Wireless Temperature Sensors",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  brand: "Hydrotechnik",
  images: [
    { src: "public/products/oil conditioning/Hydrotechnik/Watchlog Wireless Pressure, Temperature and Flow Sensors/Watchlog Wireless Temperature Sensors/Watchlog Wireless Temperature Sensors.png", alt: "Watchlog Wireless Temperature Sensors" },
    { src: "public/products/oil conditioning/Hydrotechnik/Watchlog Wireless Pressure, Temperature and Flow Sensors/Watchlog Wireless Temperature Sensors/Watchlog Wireless Temperature Sensors-1.png", alt: "Watchlog Wireless Temperature Sensors" }
  ],
  description: [
    "Temperature sensors fitted with Watchlog Wireless transmitters send measuring data to the BSx series signal receiving base stations.  2x AA batteries give up to 2 years of battery life. Adjust scanning and data transmission speeds via Watchlog Wireless software.",
    "A version powered by 2xD batteries for up to 5...18Vdc is also available.",
    "The temperature sensor tip connects directly with the fluid in a pipe, rather than taking the temperature of the external pipe temperature. Standard models are designed to work up to max. pressures of 400 bar, with 630 bar versions available on request."
  ],
  orderCodes: {
    baseCode: "WLWT-**-XXXX-Y.ZZ",
    description: "Replace ** with transmitter type, XXXX with temperature range, Y with connector type (leave blank if no cable required), and Z.Z with cable length (leave blank if no cable required).",
    options: [
      {
        label: "Transmitter type",
        choices: [
          { range: "2xAA battery powered", code: "AA" },
          { range: "2xD battery powered or 5...18Vdc externally powered. Requires cabling option (cannot be sensor mounted).", code: "DD" }
        ]
      },
      {
        label: "Temperature range",
        choices: [
          { range: "-50...100° (160 bar max)", code: "L510" },
          { range: "-50...100° (400 bar max)", code: "H510" },
          { range: "-50...200° (160 bar max)", code: "L520" },
          { range: "-50...200° (400 bar max)", code: "H520" }
        ]
      },
      {
        label: "Connector type",
        choices: [
          { range: "Angled", code: "A" },
          { range: "Straight", code: "S" }
        ]
      },
      {
        label: "Cable length",
        choices: [
          { range: "1.5 meters", code: "1.5" },
          { range: "3.0 meters", code: "3.0" },
          { range: "5.0 meters", code: "5.0" },
          { range: "10.0 meters", code: "10.0" }
        ]
      }
    ]
  },
  slugPath: ["oil-conditioning", "hydrotechnik", "watchlog-wireless-pressure-temperature-and-flow-sensors", "watchlog-wireless-temperature-sensors"]
};

// Product Data - Watchlog Wireless Linear Position Sensor
export const watchlogWirelessLinearPositionSensorData: ProductData = {
  id: "watchlog-wireless-linear-position-sensor",
  name: "Watchlog Wireless Linear Position Sensor",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  brand: "Hydrotechnik",
  images: [
    { src: "public\products\oil conditioning\Hydrotechnik\Watchlog Wireless Pressure, Temperature and Flow Sensors\Watchlog Wireless Linear Position Sensor\Watchlog Wireless Linear Position Sensor.png", alt: "Watchlog Wireless Linear Position Sensor" }
  ],
  description: [
    "Watchlog wireless linear position sensors transmit movement in mm readings to a range of wireless receivers/base stations (PC, 4-20mA, cloud etc). There are two wireless transmitter options: the first is a battery-only solution using 2x AA batteries and the second is powered by either 2xD cell batteries or a 9-18VDC external supply. Settings for the wireless transmitters can be adjusted via the free Watchlog Wireless Toolkit.",
    "The linear sensors are supplied with 5mm diameter rod end connections, coming in 11 standard stroke lengths from 25mm up to 450mm.  Accuracy is +/-0.5% and Linearity is 0.1mm or better. "
  ],
  orderCodes: {
    baseCode: "WLWLP-**-XXX-R-Z.Z",
    description: "Replace ** with transmitter type, XXX with stroke length, R with cable exit, and Z.Z with cable length.",
    options: [
      {
        label: "Transmitter type",
        choices: [
          { range: "2xAA battery powered", code: "AA" },
          { range: "2xD battery powered or 5...18Vdc externally powered. Requires cabling option (cannot be sensor mounted).", code: "DD" }
        ]
      },
      {
        label: "Stroke length & Measuring range",
        choices: [
          { range: "25mm", code: "25" },
          { range: "50mm", code: "50" },
          { range: "75mm", code: "75" },
          { range: "100mm", code: "100" },
          { range: "150mm", code: "150" },
          { range: "200mm", code: "200" },
          { range: "250mm", code: "250" },
          { range: "300mm", code: "300" },
          { range: "350mm", code: "350" },
          { range: "400mm", code: "400" },
          { range: "450mm", code: "450" }
        ]
      },
      {
        label: "Cable exit",
        choices: [
          { range: "Reverse", code: "R" },
          { range: "Forward", code: "F" }
        ]
      },
      {
        label: "Cable length",
        choices: [
          { range: "0.5 meters", code: "0.5" },
          { range: "1.0 meters", code: "1.0" },
          { range: "3.0 meters", code: "3.0" },
          { range: "5.0 meters", code: "5.0" },
          { range: "10.0 meters", code: "10.0" }
        ]
      }
    ]
  },
  slugPath: ["oil-conditioning", "hydrotechnik", "watchlog-wireless-pressure-temperature-and-flow-sensors", "watchlog-wireless-linear-position-sensor"]
};

// Product Data - Watchlog Wireless Turbine Flow Meters
export const watchlogWirelessTurbineFlowMetersData: ProductData = {
  id: "watchlog-wireless-turbine-flow-meters",
  name: "Watchlog Wireless Turbine Flow Meters",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  brand: "Hydrotechnik",
  images: [
    { src: "public/products/oil conditioning/Hydrotechnik/Watchlog Wireless Pressure, Temperature and Flow Sensors/Watchlog Wireless Turbine Flow Meters/Watchlog Wireless Turbine Flow Meters.png", alt: "Watchlog Wireless Turbine Flow Meters" }
  ],
  description: [
    "Turbine flow meters fitted with Watchlog Wireless transmitters send measuring data to the BSx series signal receiving base stations.  2x AA batteries give up to 2 years of battery life. Adjust scanning and data transmission speeds via Watchlog Wireless software.",
    "This range of flowmeters is used for liquids such as water, light oils, solvents and low viscosity chemicals.",
    "You can use them for batching, flow rate monitoring, controlling, blending and filling. The flowmeter is highly accurate and often used for testing the performance of pumps, engines, valves and other flowmeters."
  ],
  orderCodes: {
    baseCode: "RN3/XX",
    description: "See table for order code, flow rate, K factor, thread size, length, diameter, and weight.",
    options: [
      {
        label: "Turbine Flowmeter Options",
        choices: [
          { range: "Flow rate: 1-10 Ltr/min, K factor: 5000 pulses/litre, Thread size: 3/8\" BSP, Length: 82.6 mm, Diameter: 38.0 mm, Weight: 0.3 kg", code: "RN3/10" },
          { range: "Flow rate: 2-20 Ltr/min, K factor: 3800 pulses/litre, Thread size: 1/2\" BSP, Length: 82.6 mm, Diameter: 50.0 mm, Weight: 0.5 kg", code: "RN3/15" },
          { range: "Flow rate: 5-50 Ltr/min, K factor: 1080 pulses/litre, Thread size: 3/4\" BSP, Length: 82.6 mm, Diameter: 50.0 mm, Weight: 0.5 kg", code: "RN3/20/5" },
          { range: "Flow rate: 8-80 Ltr/min, K factor: 1080 pulses/litre, Thread size: 3/4\" BSP, Length: 82.6 mm, Diameter: 50.0 mm, Weight: 0.5 kg", code: "RN3/20/8" },
          { range: "Flow rate: 15-150 Ltr/min, K factor: 620 pulses/litre, Thread size: 1\" BSP, Length: 90.5 mm, Diameter: 63.5 mm, Weight: 1.0 kg", code: "RN3/25/15" },
          { range: "Flow rate: 25-250 Ltr/min, K factor: 362 pulses/litre, Thread size: 1\" BSP, Length: 90.5 mm, Diameter: 63.5 mm, Weight: 0.8 kg", code: "RN3/25" },
          { range: "Flow rate: 45-450 Ltr/min, K factor: 111 pulses/litre, Thread size: 1 1/4\" BSP, Length: 110.0 mm, Diameter: 75.0 mm, Weight: 1.6 kg", code: "RN3/32" },
          { range: "Flow rate: 67-670 Ltr/min, K factor: 82 pulses/litre, Thread size: 1 1/2\" BSP, Length: 116.7 mm, Diameter: 76.2 mm, Weight: 1.7 kg", code: "RN3/40" },
          { range: "Flow rate: 110-1100 Ltr/min, K factor: 59 pulses/litre, Thread size: 2\" BSP, Length: 154.0 mm, Diameter: 89.0 mm, Weight: 3.1 kg", code: "RN3/50" },
          { range: "Flow rate: 225-2250 Ltr/min, K factor: 19 pulses/litre, Thread size: 3\" BSP, Length: 170.0 mm, Diameter: 95.0 mm, Weight: 3.5 kg", code: "RN3/65" }
        ]
      }
    ]
  },
  slugPath: ["oil-conditioning", "hydrotechnik", "watchlog-wireless-pressure-temperature-and-flow-sensors", "watchlog-wireless-turbine-flow-meters"]
};

// Product Data - Watchlog Wireless Oval Gear Flow Meters
export const watchlogWirelessOvalGearFlowMetersData: ProductData = {
  id: "watchlog-wireless-oval-gear-flow-meters",
  name: "Watchlog Wireless Oval Gear Flow Meters",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  brand: "Hydrotechnik",
  images: [
    { src: "public/products/oil conditioning/Hydrotechnik/Watchlog Wireless Pressure, Temperature and Flow Sensors/Watchlog Wireless Oval Gear Flow Meters/Watchlog Wireless Oval Gear Flow Meters.png", alt: "Watchlog Wireless Oval Gear Flow Meters" }
  ],
  description: [
    "Oval gear flow meters fitted with Watchlog Wireless transmitters send measuring data to the BSx series signal receiving base stations.  2x AA batteries give up to 2 years of battery life. Adjust scanning and data transmission speeds via Watchlog Wireless software.",
    "The OM oval gear meters have an increased flow range, offering the ability to handle a wide range of fluid viscosities and exceptional levels of repeatability.",
  ],
  features: [
    "High accuracy and repeatability, direct volumetric reading",
    "Measures high and low viscosity liquids",
    "Quadrature pulse output option and bi-directional flow",
    "Optional Exd I/IIB approval (ATEX, IECEx)",
    "No requirement for flow conditioning (straight pipe runs)"
  ],
  additionalSections: [
    {
      title: "OM Series Small Capacity Oval Flow Gear Flowmeter",
      content: `
        <ul>
          <li><b>004</b> = 1/8 inch [4mm] 1 - 36 L/hr (0.26 - 9.5 g/hr)</li>
          <li><b>006</b> = 1/4 inch [6mm] 2 - 100 L/hr (0.5 - 27 g/hr)</li>
          <li><b>008</b> = 3/8 inch [8mm] 15 - 550 L/hr (4 - 145 g/hr)</li>
        </ul>
      `
    },
    {
      title: "OM Series Medium Capacity Oval Flow Gear Flowmeter",
      content: `
        <ul>
          <li><b>015</b> = 1/2 inch [13mm], 1-40 L/min (0.26-10.6 g/min)</li>
          <li><b>025</b> = 1 inch [25mm], 10-150 L/min (2.6-40 GPM)</li>
          <li><b>040</b> = 1-1/2 inch [38mm], 15-250 L/min (4-66 g/min)</li>
          <li><b>050</b> = 2 inch [51mm], 30-450 L/min (8-120 g/min)</li>
        </ul>
      `
    },
    {
      title: "OM Series Large Capacity Oval Flow Gear Flowmeter",
      content: `
        <ul>
          <li><b>080</b> = 3 inch [76mm], 35-750 L/min (10-200 g/min)</li>
          <li><b>080E</b> = 3 inch [76mm], 50-1000 L/min (13-260 g/min) - Aluminium only</li>
          <li><b>0100</b> = 4 inch [102mm], 75-1500 L/min (20-400 g/min) - Aluminium only</li>
        </ul>
      `
    }
  ],
  slugPath: ["oil-conditioning", "hydrotechnik", "watchlog-wireless-pressure-temperature-and-flow-sensors", "watchlog-wireless-oval-gear-flow-meters"]
};

// Product Data - Watchlog Wireless USB Base Stations / Receivers
export const watchlogWirelessUsbBaseStationsReceiversData: ProductData = {
  id: "watchlog-wireless-usb-base-stations-receivers",
  name: "Watchlog Wireless USB Base Stations / Receivers",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  brand: "Hydrotechnik",
  description: [
    "The Watchlog BSd, BSu, BSue and BSi receivers are part of a range of base stations that are required for configuration and calibration of the Watchlog modular telemetry system."
  ],
  additionalSections: [
    {
      title: "HT-BSd",
      image: {
        src: "public/products/oil conditioning/Hydrotechnik/Watchlog Wireless Pressure, Temperature and Flow Sensors/Watchlog Wireless USB Base StationsReceivers/Watchlog Wireless USB Base StationsReceivers.png",
        alt: "HT-BSu USB Receiver"
      },
      content:
        `Power supply: USB (4.875 to 5.125 Vdc)
        <br/>
        Wireless range: 500m
        <br/>
        <br/>
        <b>
        Features & Benefits
        </b>
        <ul>
        <li>Very portable</li>
        <li>Ideal for use with laptops and tablets</li>
        <li>Smallest and most economically priced base station in our range</li>
        </ul>`
    },
    {
      title: "HT-BSu",
      image: {
        src: "public/products/oil conditioning/Hydrotechnik/Watchlog Wireless Pressure, Temperature and Flow Sensors/Watchlog Wireless USB Base StationsReceivers/Watchlog Wireless USB Base StationsReceivers-1.png",
        alt: "HT-BSu USB Receiver"
      },
      content:
        `Wireless range: 500m
        <br/>
        Power suply: USB (4.875 to 5.125 Vdc)
        <br/>
        <br/>
        <b>
        Features & Benefits
        </b>
        <ul>
        <li>Wall mounted or desktop use</li>
        <li>Can be moved independently of a laptop to achieve better reception</li>
        </ul>`
    },
    {
      title: "HT-BSue",
      image: {
        src: "public/products/oil conditioning/Hydrotechnik/Watchlog Wireless Pressure, Temperature and Flow Sensors/Watchlog Wireless USB Base StationsReceivers/Watchlog Wireless USB Base StationsReceivers-2.png",
        alt: "HT-BSu USB Receiver"
      },
      content:
        `Wireless range: 500m
        <br/>
        Power suply: USB (4.875 to 5.125 Vdc)
        <br/>
        <br/>
        <b>
        Features & Benefits
        </b>
        <ul>
        <li>Wall mounted or desktop use</li>
        <li>Can be moved independently of a laptop to achieve better reception</li>
        <li>Improved IP rating & greater range</li>
        </ul>`
    },
    {
      title: "HT-Bsi",
      image: {
        src: "public/products/oil conditioning/Hydrotechnik/Watchlog Wireless Pressure, Temperature and Flow Sensors/Watchlog Wireless USB Base StationsReceivers/Watchlog Wireless USB Base StationsReceivers-2.png",
        alt: "HT-BSu USB Receiver"
      },
      content:
        `Wireless range: 800m
        <br/>
        Power suply: USB (supply current at 12V: 100mA)
        <br/>
        <br/>
        <b>
        Features & Benefits
        </b>
        <ul>
        <li>Wall mounted or desktop use</li>
        <li>Can be moved independently of a laptop to achieve better reception</li>
        <li>•	Data collection for PC/PLC; Has USB/RS232/RS485 interface</li>
        </ul>`
    },
  ],
  slugPath: ["oil-conditioning", "hydrotechnik", "watchlog-wireless-pressure-temperature-and-flow-sensors", "watchlog-wireless-usb-base-stations-receivers"]
};

// Product Data - WLW-AR Wireless Signal Extender
export const wlwArWirelessSignalExtenderData: ProductData = {
  id: "wlw-ar-wireless-signal-extender",
  name: "WLW-AR Wireless Signal Extender",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  brand: "Hydrotechnik",
  images: [
    { src: "public/products/oil conditioning/Hydrotechnik/Watchlog Wireless Pressure, Temperature and Flow Sensors/WLW-AR Wireless Signal Extender/WLW-AR Wireless Signal Extender.png", alt: "WLW-AR Wireless Signal Extender" }
  ],
  description: [
    "The WLW-AR is a repeater, which will allow Watchlog system modules to span around obstacles, increase range and coverage by re-transmitting received messages. The data sent by the modules can be read by HT-BSx series signal receiving bases station computer interfaces. Receivers support common industrial power supplies and are available in robust IP rated enclosures, with internal antennas optimised to give outstanding coverage.",
    "The WLW-AR is housed in an IP67 rated enclosure, which accepts two D cell batteries as well as an external power supply. The repeater enables messages to be repeated once, so therefore extends the achievable wireless range. Adding further repeaters to the system will increase coverage, but will not further increase the range.",
    "Watchlog is a modular wireless telemetry sensor system for pressure, temperature & flow sensors. High accuracy, high-quality measurement is interfaced with a simple yet powerful configuration and monitoring software"
  ],
  slugPath: ["oil-conditioning", "hydrotechnik", "watchlog-wireless-pressure-temperature-and-flow-sensors", "wlw-ar-wireless-signal-extender"]
};

// Product Data - Watchlog Wireless Signal Gateway Modules
export const watchlogWirelessSignalGatewayModulesData: ProductData = {
  id: "watchlog-wireless-signal-gateway-modules",
  name: "Watchlog Wireless Signal Gateway Modules",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  brand: "Hydrotechnik",
  images: [
    { src: "public/products/oil conditioning/Hydrotechnik/Watchlog Wireless Pressure, Temperature and Flow Sensors/Watchlog Wireless Signal Gateway Modules/Watchlog Wireless Signal Gateway Modules.png", alt: "Watchlog Wireless Signal Gateway Modules" }
  ],
  description: [
    "A range of signal converting gateway modules that receive Watchlog wireless signals and convert to standard analogue signals, relays, alarms & serial Modbus or ASCII data.",
    "All gateways are programmed using the included free Toolkit configuration software."
  ],
  slugPath: ["oil-conditioning", "hydrotechnik", "watchlog-wireless-pressure-temperature-and-flow-sensors", "watchlog-wireless-signal-gateway-modules"]
};

// Product Data - Watchlog Wireless Configuring, Monitoring & Logging Software
export const watchlogWirelessConfigMonitoringLoggingSoftwareData: ProductData = {
  id: "watchlog-wireless-config-monitoring-logging-software",
  name: "Watchlog Wireless Configuring, Monitoring & Logging Software",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  brand: "Hydrotechnik",
  images: [
    { src: "public/products/oil conditioning/Hydrotechnik/Watchlog Wireless Pressure, Temperature and Flow Sensors/Watchlog Wireless Configuring, Monitoring & Logging Software/Watchlog Wireless Configuring, Monitoring & Logging Software.png", alt: "Watchlog Wireless Configuring, Monitoring & Logging Software" }
  ],
  description: [
    "Watchlog has been designed to allow the viewing and logging of up to 100 channels of data from the wireless telemetry range of sensor transmitters. This software allows users to build a visual picture of a system and assign live readings. The built-in web server provides a summary view page to other computers, tablets, iPads and smartphones etc., using a standard browser.",
    "Watchlog can log on demand, at pre-set intervals, on entering and leaving a pre-set overload and during an overload. Visual displays and audible alarms can indicate under and over range as well as loss in communication.",
    "The graphing function allows the construction of graphically rich custom views into your data (import a wide range of graphics/images and customise labelling).",
    "Watchlog is also available as a customised version (for a small charge), which allows users to create their own unique software package for distribution. It is provided with your choice of corporate branding, including company logo, colour scheme and contact information."
  ],
  slugPath: ["oil-conditioning", "hydrotechnik", "watchlog-wireless-pressure-temperature-and-flow-sensors", "watchlog-wireless-configuring-monitoring-logging-software"]
};

// Product Data - Watchlog Wireless Accessories
export const watchlogWirelessAccessoriesData: ProductData = {
  id: "watchlog-wireless-accessories",
  name: "Watchlog Wireless Accessories",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  brand: "Hydrotechnik",
  images: [
    { src: "public/products/oil conditioning/Hydrotechnik/Watchlog Wireless Pressure, Temperature and Flow Sensors/Watchlog Wireless Accessories/Watchlog Wireless Accessories.png", alt: "Watchlog Wireless Accessories" }
  ],
  description: [
    "These two products are designed to give continuous power to wireless boosting stations, if required.  Either a battery pack on its own or a battery pack and solar panel to give 24/7 power.",
    "A high capacity battery pack with solar and mains charging, providing long term 12 volt power for field applications and, more specifically, remote data collection. The power pack and solar panel provides dependable off-grid power generation to support a variety of HTUK Watchlog products.",
    "Packaged in an IP65 sealed case with rugged waterproof connectors, the PPI has two sources of charge for the internal battery: solar and mains power input charging. The case also features stainless steel padlock protectors for easily securing your supply on site. The PP1 has a single 12V fuse protected output. The mating connector comes pre-fitted with 5 metres of cable and bare end connections.",
    "The solar panel features hail-proof tempered glass and closely packed polycrystalline cells, sealed into a robust aluminium frame. The junction box on the rear of the panel does not protrude beyond the frame, so installation can be simple and neat.",
    "The solar cell comes with 3 metres of cable as standard, while longer lengths are available on request. The SP1 & PP1 combined are designed to provide a perpetual power supply for a 12 V system, drawing an average of 53 mA, even during winter. The PP1 can also be used as a mains 12 VDC supply with battery backup."
  ],
  slugPath: ["oil-conditioning", "hydrotechnik", "watchlog-wireless-pressure-temperature-and-flow-sensors", "watchlog-wireless-accessories"]
};

// Product Data - WLWPL Series Cellular Level Sensor
export const wlwplSeriesCellularLevelSensorData: ProductData = {
  id: "wlwpl-series-cellular-level-sensor",
  name: "WLWPL Series Cellular Level Sensor",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  brand: "Hydrotechnik",
  images: [
    { src: "public/products/oil conditioning/Hydrotechnik/Watchlog Wireless Pressure, Temperature and Flow Sensors/WLWPL Series Cellular Level Sensor/WLWPL Series Cellular Level Sensor.png", alt: "WLWPL Series Cellular Level Sensor" }
  ],
  description: [
    "The WLWPL series level sensor is designed for remote monitoring of levels in applications, such as boreholes, tanks, and open water via battery or an external power supply. Data can be sent to a specific IT infrastructure or to our own cloud platform (Watchlog Wireless Vision Pro), where current and historic data can be viewed and downloaded, as well as setting up alerts via text and email."
  ],
  additionalSections: [
    {
      content: `
        <ul>
          <li>Any range between 1…500 mH2O ranges</li>
          <li>Update rates from every minute to once per day</li>
          <li>No SIM card required</li>
          <li>Monthly, quarterly, 6 monthly, or yearly price plans for cellular data</li>
          <li>Mains or battery powered</li>
        </ul>
      `
    }
  ],
  slugPath: ["oil-conditioning", "hydrotechnik", "watchlog-wireless-pressure-temperature-and-flow-sensors", "wlwpl-series-cellular-level-sensor"]
};

// ============================
// WATCHLOG PRO REMOTE MONITORING
// ============================

// Category Data - Watchlog Pro Remote Monitoring
export const watchlogProRemoteMonitoringCategoryData: ProductData = {
  id: "watchlog-pro-remote-monitoring",
  name: "Watchlog Pro Remote Monitoring",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  subsubcategory: "watchlog-pro-remote-monitoring",
  brand: "Hydrotechnik",
  images: [
    { src: "public/products/oil conditioning/Hydrotechnik/Watchlog Pro Remote Monitoring/Watchlog Pro Remote Monitoring.png", alt: "Watchlog Pro Remote Monitoring" }
  ],
  description: [
    "The Watchlog Pro range includes rugged, programmable industrial IIoT/telemetry gateway devices which transmit data captured from sensors to a cloud portal of your choice via cellular or WIFI.",
  ],
  additionalSections: [
    {
      title: "Sensor compatibility",
      content: "The Watchlog Pro units allow the connection of nearly all sensor types and accept many inputs, including 4-20ma, 0-10V, Frequency, Modbus, CANbus and RS232/RS485. The Watchlog Pro telemetry units also include GPS and other internal sensors, such as ambient temperature, vibration and a tamper sensor."
    }
  ],
  slugPath: ["oil-conditioning", "hydrotechnik", "watchlog-pro-remote-monitoring"]
};

// Product Data - Watchlog PRO ORB Cellular / Wi-Fi Cloud Gateway for Mobile Applications
export const watchlogProOrbCellularWiFiCloudGatewayForMobileApplicationsData: ProductData = {
  id: "watchlog-pro-orb-cellular-wi-fi-cloud-gateway-for-mobile-applications",
  name: "Watchlog PRO ORB Cellular / Wi-Fi Cloud Gateway for Mobile Applications",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  brand: "Hydrotechnik",
  images: [
    {
      src: "public/products/oil conditioning/Hydrotechnik/Watchlog Pro Remote Monitoring/Watchlog PRO ORB Cellular Wi-Fi Cloud Gateway for Mobile Applications/Watchlog PRO ORB Cellular,Wi-Fi Cloud Gateway for Mobile Applications.png",
      alt: "Watchlog PRO ORB Cellular / Wi-Fi Cloud Gateway for Mobile Applications"
    },
    {
      src: "public/products/oil conditioning/Hydrotechnik/Watchlog Pro Remote Monitoring/Watchlog PRO ORB Cellular Wi-Fi Cloud Gateway for Mobile Applications/Watchlog PRO ORB Cellular,Wi-Fi Cloud Gateway for Mobile Applications-1.png",
      alt: "Watchlog PRO ORB Cellular / Wi-Fi Cloud Gateway for Mobile Applications"
    }
  ],
  description: [
    "Watchlog PRO ORB provides remote monitoring of just about any connected sensor, including Pressure, Temperature, Force, Contamination etc, as well as system data read from Canbus lines. In addition, the ORB includes several additional sensors.",
    "Powered by 10 to 75V DC or solar, the QUAD has GPS position, speed, temperature, angle, vibration, and tamper sensors built-in. External sensors such as pressure, temperature, flow, displacement and other sensors or machine data using common inputs such as 4-20mA, 0-10V, Frequency, Modbus, CANbus and RS232/RS485.",
    "Designed for harsh industrial environments, dust-proof, waterproof, UV resistant and strong, Watchlog Pro is a programmable device which allows sensor data to be transmitted to our Watchlog cloud monitoring portal or a custom web server via 4G (SIM card) or Wi-Fi."
  ],
  features: [
    "WiFi +4G LTE4\nCAT-M1 for best possible coverage. CAT-1 for global connectivity",
    "Bluetooth\nMonitor BLE beacons or send data to the BLE App",
    "Direct To Your Server\nSend data to the server of your choice",
    "GPS+GNSS\nAccurate position and speed",
    "Notifications\nReceive email and SMS warnings and alarms",
    "Secure\nEmbedded certificates validate identities, encrypt links and ensure integrity",
    "Simple Setup\nUse any phone, tablet or computer with the integrated web server",
    "External Antenna\n4G and GPS antenna included",
    "Flexible Sensor Interface\nRS232, RS485, MODBUS, CANBus, Bluetooth, output, 4-20mA, pulse and voltage",
    "User Programmable\nWrite scripts to manipulate data, create alerts, control devices, and create customised payloads",
    "Versatile Mounting\nDIN rail, wall or panel mount",
    "IP67\nWaterproof and Dustproof",
    "Built Tough\nUV-resistant and strong",
    "Cloud Services\nUse the Watchlog Portal to view and store data and configure and update devices",
    "10-72VDC\nIntegrated solar regulator Internal backup battery",
    "Internal Sensors\nAccelerometer for pitch, roll and vibration. Tamper detection, temperature, and voltage monitoring"
  ],
  additionalSections: [
    {
      title: "Remote Monitoring",
      image: {
        src: "public/products/oil conditioning/Hydrotechnik/Watchlog Pro Remote Monitoring/Watchlog PRO ORB Cellular Wi-Fi Cloud Gateway for Mobile Applications/Watchlog PRO ORB Cellular,Wi-Fi Cloud Gateway for Mobile Applications-2.png",
        alt: "Watchlog Pro Remote Monitoring Dashboard"
      },
      content: "Our powerful cloud platform allows users to monitor and log sensor data on customisable dashboards. Optionally, the Watchlog Pro can push Sensor data to your custom or 3rd party platform."
    }
  ],
  slugPath: ["oil-conditioning", "hydrotechnik", "watchlog-pro-remote-monitoring", "watchlog-pro-orb-cellular-wi-fi-cloud-gateway-for-mobile-applications"]
};

// Product Data - Watchlog PRO QUAD Cellular / Wi-Fi Cloud Gateway for Fixed Systems
export const watchlogProQuadCellularWiFiCloudGatewayForFixedSystemsData: ProductData = {
  id: "watchlog-pro-quad-cellular-wi-fi-cloud-gateway-for-fixed-systems",
  name: "Watchlog PRO QUAD Cellular / Wi-Fi Cloud Gateway for Fixed Systems",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  brand: "Hydrotechnik",
  images: [
    {
      src: "public/products/oil conditioning/Hydrotechnik/Watchlog Pro Remote Monitoring/Watchlog PRO QUAD Cellular Wi-Fi Cloud Gateway for Fixed Systems/Watchlog PRO QUAD Cellular Wi-Fi Cloud Gateway for Fixed Systems.png",
      alt: "Watchlog PRO QUAD Cellular / Wi-Fi Cloud Gateway for Fixed Systems"
    }
  ],
  description: [
    "Designed for harsh industrial environments, dust-proof, waterproof, UV resistant and strong, Watchlog Pro QUAD is a programmable device which allows sensor data to be transmitted to our Watchlog cloud monitoring portal or a custom web server via 4G (SIM card) or Wi-Fi.",
    "Powered by 10 to 75V DC or solar, the QUAD has GPS position, speed, temperature, angle, vibration, and tamper sensors built-in. External sensors such as pressure, temperature, flow, displacement and other sensors or machine data using common inputs such as 4-20mA, 0-10V, Frequency, Modbus, CANbus and RS232/RS485."
  ],
  features: [
    "WiFi +4G LTE4 - nCAT-M1 for best possible coverage. CAT-1 for global connectivity",
    "Bluetooth - nMonitor BLE beacons or send data to the BLE App",
    "Direct To Your Server - nSend data to the server of your choice",
    "GPS+GNSS - nAccurate position and speed",
    "Notifications - nReceive email and SMS warnings and alarms",
    "Secure - nEmbedded certificates validate identities, encrypt links and ensure integrity",
    "Simple Setup - nUse any phone, tablet or computer with the integrated web server",
    "External Antenna - n4G and GPS antenna included",
    "Flexible Sensor Interface - nRS232, RS485, MODBUS, CANBus, Bluetooth, output, 4-20mA, pulse and voltage",
    "User Programmable - nWrite scripts to manipulate data, create alerts, control devices, and create customised payloads",
    "Versatile Mounting - nDIN rail, wall or panel mount",
    "IP67 - nWaterproof and Dustproof",
    "Built Tough - nUV-resistant and strong",
    "Cloud Services - nUse the Watchlog Portal to view and store data and configure and update devices",
    "10-72VDC - nIntegrated solar regulator Internal backup battery",
    "Internal Sensors - nAccelerometer for pitch, roll and vibration. Tamper detection, temperature, and voltage monitoring"
  ],
  additionalSections: [
    {
      title: "Remote Monitoring",
      image: {
        src: "public/products/oil conditioning/Hydrotechnik/Watchlog Pro Remote Monitoring/Watchlog PRO QUAD Cellular Wi-Fi Cloud Gateway for Fixed Systems/Watchlog PRO QUAD Cellular Wi-Fi Cloud Gateway for Fixed Systems-1.png",
        alt: "Watchlog Pro Remote Monitoring Dashboard"
      },
      content: "Our powerful cloud platform allows users to monitor and log sensor data on customisable dashboards. Optionally, the Watchlog Pro can push Sensor data to your custom or 3rd party platform."
    }
  ],
  slugPath: ["oil-conditioning", "hydrotechnik", "watchlog-pro-remote-monitoring", "watchlog-pro-quad-cellular-wi-fi-cloud-gateway-for-fixed-systems"]
};

// Product Data - Watchlog Pro Hydraulic System Monitoring
export const watchlogProHydraulicSystemMonitoringData: ProductData = {
  id: "watchlog-pro-hydraulic-system-monitoring",
  name: "Watchlog Pro Hydraulic System Monitoring",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  brand: "Hydrotechnik",
  images: [
    {
      src: "public/products/oil conditioning/Hydrotechnik/Watchlog Pro Remote Monitoring/Watchlog Pro Hydraulic System Monitoring/Watchlog Pro Hydraulic System Monitoring.png",
      alt: "Watchlog Pro Hydraulic System Monitoring"
    },
    {
      src: "public/products/oil conditioning/Hydrotechnik/Watchlog Pro Remote Monitoring/Watchlog Pro Hydraulic System Monitoring/Watchlog Pro Hydraulic System Monitoring-1.png",
      alt: "Watchlog Pro Hydraulic System Monitoring"
    }
  ],
  description: [
    "Remote Monitoring Cloud Gateway with Integrated Pressure, Temperature, Flow and Oil Cleanliness Options.",
    "When integrated into your hydraulic system, a Watchlog PRO Hydraulic System Monitoring unit will continuously transmit flow rate, pressure, temperature and optionally oil cleanliness to the cloud, or by request to a custom web server via 4G (SIM card) or Wi-Fi.",
    "Sensor readings can be viewed and saved using our online cloud platform, accessible via most web browsers. Customisable alerts are possible both locally, using a light tower, buzzer or combination of both, as well as using alerts within the cloud software and with SMS messaging.",
    "Installed inline within your setup and powered by 24VDC, the Watchlog Pro Hydraulic System Monitoring unit is a one-stop solution for your remote hydraulic monitoring needs."
  ],
  slugPath: ["oil-conditioning", "hydrotechnik", "watchlog-pro-remote-monitoring", "watchlog-pro-hydraulic-system-monitoring"]
};

// Product Data - Watchlog PRO Custom Cloud Monitoring
export const watchlogProCustomCloudMonitoringData: ProductData = {
  id: "watchlog-pro-custom-cloud-monitoring",
  name: "Watchlog PRO Custom Cloud Monitoring",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  brand: "Hydrotechnik",
  images: [
    {
      src: "public/products/oil conditioning/Hydrotechnik/Watchlog Pro Remote Monitoring/WATCHLOG PRO Custom Cloud Monitoring/WATCHLOG PRO Custom Cloud Monitoring.png",
      alt: "Watchlog PRO Custom Cloud Monitoring"
    },
    {
      src: "public/products/oil conditioning/Hydrotechnik/Watchlog Pro Remote Monitoring/WATCHLOG PRO Custom Cloud Monitoring/WATCHLOG PRO Custom Cloud Monitoring-1.png",
      alt: "Watchlog PRO Custom Cloud Monitoring"
    },
    {
      src: "public/products/oil conditioning/Hydrotechnik/Watchlog Pro Remote Monitoring/WATCHLOG PRO Custom Cloud Monitoring/WATCHLOG PRO Custom Cloud Monitoring-2.png",
      alt: "Watchlog PRO Custom Cloud Monitoring"
    }
  ],
  description: [
    "Remote Monitoring Cloud Gateway with Integrated Pressure, Temperature, Flow and Oil Cleanliness Options.",
    "When integrated into your system, a Watchlog PRO Custom Cloud Monitoring unit continuously transmits all connected sensor data to the cloud or, upon request, to a custom web server via 4G (SIM card) or Wi-Fi.",
    "View and save sensor readings using our online cloud platform, which is accessible via most web browsers. Configurable alerts are possible locally, utilising a light tower, buzzer or combination of both, and via notifications within the cloud software and SMS messaging.",
    "Installed inline within your setup and powered by 12/24VDC or 240VAC, the Watchlog Pro Custom Cloud Monitor is the ultimate go-to for an existing or new sensor array. Depending on your requirement, a full range of sensor input options include Modbus, CAN bus, 4...20mA, 0...10V, RTD, Thermocouple K type and frequency. Switching outputs can optionally be included to control external equipment."
  ],
  slugPath: ["oil-conditioning", "hydrotechnik", "watchlog-pro-remote-monitoring", "watchlog-pro-custom-cloud-monitoring"]
};

// ============================
// WATCHLOG CSV VISUALIZER SOFTWARE
// ============================

// Product Data - Watchlog CSV Visualizer Software
export const watchlogCSVVisualizerSoftwareData: ProductData = {
  id: "watchlog-csv-visualizer-software",
  name: "Watchlog CSV Visualizer Software",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  subsubcategory: "watchlog-csv-visualizer-software",
  brand: "Hydrotechnik",
  video: "https://youtu.be/yGXGoifoPs0",
  description: [
    "Watchlog CSV Visualizer is unique Windows software for visualising time-based .csv files. The software can analyse any .csv performance data, regardless of its source and format, and has been tested on .csv files containing over 25 million data points across multiple channels.",
    "It is typically used where a large amount of time-based multi-channel data needs to be graphed and key sections zoomed in for close analysis.",
    "The software is excellent for creating test reports; key parts of a test can be analysed in great detail."
  ],
  additionalSections: [
    {
      title: "Quick drag and drop data import",
      image: {
        src: "public/products/oil conditioning/Hydrotechnik/Watchlog CSV Visualizer Software/Watchlog CSV Visualizer Software.png",
        alt: "Watchlog CSV Visualizer Software"
      },
      content: `At the heart of the software is a drag and drop import feature that allows a user to preview data in the file before importing it in the required format.

                Data can be grouped as it is being imported. Grouping data allows you to specify which columns should be shown in the same charts.

                Once imported data can be previewed so the relevant columns can be selected to display in charts. Line colours, chart type etc are all selectable.`
    },
    {
      title: "Multiple options for viewing data graphically",
      image: {
        src: "/products/oil conditioning/Hydrotechnik/Watchlog CSV Visualizer Software/Watchlog CSV Visualizer Software-1.png",
        alt: "Watchlog CSV Visualizer Software"
      },
      content: `When multiple parameters are being charted a user can see them all together or split into separate graphs (as specified by the grouping upon import) for individual manipulation.

                When viewing all graphs on the same screen a user can change the colour of the lines, remove lines and control the colour of the screen background.`
    },
    {
      title: "Limitless zoom and pan for finer analysis",
      image: {
        src: "public/products/oil conditioning/Hydrotechnik/Watchlog CSV Visualizer Software/Watchlog CSV Visualizer Software-2.png",
        alt: "Watchlog CSV Visualizer Software"
      },
      content: `Once imported, data is viewed graphically with a simple zooming feature to magnify test data via clicking and dragging over an area, there is no limit the how many times a user can zoom to pinpoint events.

                The ability to pan as well as zoom gives you the ability to dig down into the exact data points you are looking for.`
    },
    {
      title: "Annotate graphical data",
      image: {
        src: "public/products/oil conditioning/Hydrotechnik/Watchlog CSV Visualizer Software/Watchlog CSV Visualizer Software-3.png",
        alt: "Watchlog CSV Visualizer Software"
      },
      content: `The software allows annotation/text boxes to be added to graphs as well as pinpointing and measuring the differences between 2 points on a graph. These editable text boxes are saved and included in any generated reports.`
    },
    {
      title: "Generate PDF exports and export your",
      image: {
        src: "public/products/oil conditioning/Hydrotechnik/Watchlog CSV Visualizer Software/Watchlog CSV Visualizer Software-4.png",
        alt: "Watchlog CSV Visualizer Software"
      },
      content: `PDF reports are easily created via templates that are editable to suit the user. Add your company logo, title, text fields and create reports with tables of data and graphs.
      
                These reports can be customised using your own logo and variables such as [[TestName]] and [[Chart]] give you control over the flow and layout used in your reporting.`
    },
    {
      title: "Export all or parts of your data",
      content: `Tests can be manipulated and saved within the software for retrieving later, either save the entire test or just a portion of a test as a more focussed sub-set of the whole test. Saved tests can then be exported as pdfs or can be re-exported as a new .csv file.`
    },
  ],
  slugPath: ["oil-conditioning", "hydrotechnik", "watchlog-csv-visualizer-software"]
};

// ============================
// FILTERTECHNIK PRODUCTS
// - Filtertechnik
//     - S120 Digital Imaging Particle Counter
//     - Particle Pal
//         - Particle Pal - Laser Portable Particle Counter
//         - Particle Pal + Water Sensor - Laser Portable Particle Counter
//         - Particle Pal + Water & Density Sensor - Laser Portable Particle Counter
//         - Remaining Oil Life Portable Test Kit
//         - Particle Pal Pro - Digital Imaging Portable Particle Counter
//         - Particle Pal Pro + Water Sensor - Digital Imaging Portable Particle Counter
//         - Particle Pal Pro : Life - Digital Imaging Portable Particle Counter : Including water and remaining oil life sensor
//         - Particle Pal Pro + Viscosity - Digital Imaging Portable Particle Counter
//         - Particle Pal Plus + Water RH%: Digital Imaging Portable Particle Counter
//         - Particle Pal Plus + Water PPM: Digital Imaging Portable Particle Counter
//         - Particle Pal Plus: Digital Imaging Portable Particle Counter
//         - Particle Pal Plus High Viscosity: Digital Imaging Portable Particle Counter
//         - Particle Pal Plus + Water PPM and Density Sensor : Digital Imaging Portable Particle Counter
//         - Particle Pal Plus High Viscosity + Water RH%: Digital Imaging Portable Particle Counter
//         - Particle Pal Plus High Viscosity: Particulate, Water RH%, Viscosity and Density
// ============================

// Category Data - Filtertechnik
export const filtertechnikCategoryData: ProductData = {
  id: "filtertechnik",
  name: "Filtertechnik",
  category: "oil-conditioning",
  subcategory: "filtertechnik",
  brand: "Filtertechnik",
  images: [
    {
      src: "/products/oil conditioning/Filtertechnik/S120 Digital Imaging Particle Counter/S120 Digital Imaging Particle Counter.png",
      alt: "Filtertechnik"
    }
  ],
  categoryProductIds: [
    's120-digital-imaging-particle-counter',
    'particle-pal'
  ],
  slugPath: ["oil-conditioning", "filtertechnik"]
};

// ============================
// S120 DIGITAL IMAGING PARTICLE COUNTER
// ============================

// Product Data - S120 Digital Imaging Particle Counter
export const s120DigitalImagingParticleCounterData: ProductData = {
  id: "s120-digital-imaging-particle-counter",
  name: "S120 Digital Imaging Particle Counter",
  category: "oil-conditioning",
  subcategory: "filtertechnik",
  subsubcategory: "s120-digital-imaging-particle-counter",
  brand: "Filtertechnik",
  images: [
    {
      src: "/products/oil conditioning/Filtertechnik/S120 Digital Imaging Particle Counter/S120 Digital Imaging Particle Counter.png",
      alt: "S120 Digital Imaging Particle Counter"
    }
  ],
  description: [
    "The S120 digital imaging particle counter is a revolutionary sensor capable of counting a broad spectrum of particles, recognizing unusual and abnormal particle types from their shape. Many years of research and development have gone into this new sensor. Digital imaging particle counter provides enhanced data with a deeper insight never before available.",
    "The sensor has the ability to measure a broad size range from 4-150μm recognizing different shapes of particles such as both propagated irregular images, silicate, water and carbon wear as well as bubbles.",
    "Unlike conventional sensors which count only analog/digital pulses and are counted as bubbles or dirt, the digital imaging function distinguishes other lower particle concentrations due to the available information created by the use of machine vision, classification, often summarizing a particle count being created by 2 to 8 ISO codes, especially for 4, 6 and 14 micron channels."
  ],
  additionalSections: [
    {
      title: "Features",
      image: {
        src: "/products/oil conditioning/Filtertechnik/S120 Digital Imaging Particle Counter/S120 Digital Imaging Particle Counter-1.jpg",
        alt: "S120 Digital Imaging Particle Counter Features"
      },
      content: `13/20 particle size and shape recognition\nClassification codes: ISO 4406, NAS 1638, SAE AS4059\nParticles are grouped by various rules into size categories – 4, 6, 14, 21, 38, 70μm\nThe S120 counts air and gas bubbles and eliminates them from the count.\nThe unique recognition software is able to categorize particles into bubbles, cutting, silicate & wear.\nHighly accurate sensor capable of self-calibration.\nFull integration with SCADA/OPC/PLC which can be controlled with analogue or digital instrumentation.`
    }
  ],
  technicalSpecs: [
    {
      title: "Technical Information",
      specs: [
        { label: "Accuracy", value: "+/- 1 ISO code" },
        { label: "Power Supply", value: "24V DC" },
        { label: "Ports", value: "3/8'' BSP" },
        { label: "Max Pressure", value: "10 Bar" },
        { label: "Flow Rate", value: "0.3 – 0.7 l/min" },
        { label: "Viscosity Limit", value: "2,400 cSt" }
      ]
    },
    {
      title: "IP Rating & Compatibility",
      specs: [
        { label: "IP Rating", value: "IP65" },
        { label: "Fluid compatibility", value: "Mineral oils, synthetic oils, diesel, glycol, water, phosphate ester fluids possible – please contact us for more information." },
        { label: "Weight", value: "0.8kg" },
        { label: "Dimensions", value: "12 x 8 x 6.4cm" },
        { label: "Temperature range", value: "-20 to +85°C" }
      ]
    },
    {
      title: "Output Options",
      specs: [
        { label: "Protocols", value: "Modbus TCP (RS485)" },
        { label: "Output Options", value: "Relay output, local panel indicator, local output indicator" }
      ]
    }
  ],
  slugPath: ["oil-conditioning", "filtertechnik", "s120-digital-imaging-particle-counter"]
};

// ============================
// PARTICLE PAL
// ============================

// Category Data - Particle Pal
export const particlePalCategoryData: ProductData = {
  id: "particle-pal",
  name: "Particle Pal",
  category: "oil-conditioning",
  subcategory: "filtertechnik",
  subsubcategory: "particle-pal",
  brand: "Filtertechnik",
  slugPath: ["oil-conditioning", "filtertechnik", "particle-pal"]
};

// Product Data - FS9V2 - Particle Pal - Laser Portable Particle Counter
export const fs9v2ParticlePalLaserPortableParticleCounterData: ProductData = {
  id: "fs9v2-particle-pal-laser-portable-particle-counter",
  name: "FS9V2 - Particle Pal - Laser Portable Particle Counter",
  category: "oil-conditioning",
  subcategory: "filtertechnik",
  brand: "Filtertechnik",
  images: [
    {
      src: "public/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal - Laser Portable Particle Counter/Particle Pal - Laser Portable Particle Counter.png",
      alt: "Laser Portable Particle Counter"
    },
    {
      src: "public/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal - Laser Portable Particle Counter/Particle Pal - Laser Portable Particle Counter-1.png",
      alt: "Laser Portable Particle Counter"
    },
    {
      src: "public/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal - Laser Portable Particle Counter/Particle Pal - Laser Portable Particle Counter-2.png",
      alt: "Laser Portable Particle Counter"
    }
  ],
  features: [
    "Incorporates latest laser particle counting technology",
    "Single LCD",
    "Built-in memory for storing results",
    "Real-time graphics display via software transfer",
    "USB connectivity for data transfer",
    "The rechargeable battery gives up to 6 hours of continuous use"
  ],
  additionalSections: [
    {
      title: "Benefits",
      content: `
      • Live ISO, NAS and SAE results can be displayed
      • Compact, unit with robust casing
      • Self-contained with integral pump
      • Sample direct from oil reservoir or live system up to 350Bar
      • Accurate, repeatable and consistent results
      • The ideal survey tool for field and laboratory use`
    },
    {
      title: "Introducing our new Particle Pal FS9V2",
      content: `Particle Pal is a self-contained portable measuring system that gives ISO, NAS and SAE Particulate Cleanliness readings and Water Content analysis for Oils and Diesel Fuels. Complete with a rechargeable battery, high-pressure internal gear pump and controlled flow rate. Whether on-site or in the laboratory, the Particle Pal will provide cleanliness readings in real-time to allow you to understand the condition of your oil or fuel.

                Our FS9V2 units now have a single LCD showing all the connected sensors in real-time. We've added an internal memory for capturing data with a simple USB data transfer of results which can be printed in tabular or graphical format. Also included is powerful trending software which shows real-time cleanliness data in graphical format via USB transfer to a connected PC.`
    },
    {
      title: "Oil Testing",
      content: `In both Hydraulic and Lubrication systems knowing the particulate cleanliness and water content data can prevent serious system failures and component damage. By testing oil cleanliness in real-time, the necessary protection can be put in place to protect sensitive components. Samples can be taken directly from the reservoir or directly from an active fluid power system up to 350 Bar (via a High-Pressure Adaptor) or from an oil sample drawn from the system earlier. The Particle Pal can be used in a range of applications and industries including off-road plant, rail, construction, hydraulic and mechanical presses, marine and many, many more.`
    },
    {
      title: "Diesel Fuel Testing",
      content: `The Standard Particle Pal FS9V2 is also suitable for measuring the solid particulate content in all diesel fuels. Results are displayed as ISO codes. The diesel fuel market has adopted ISO cleanliness codes as the standard for ensuring fuel cleanliness. Ideally, fuel should be at least ISO 18/16/13 as a bare minimum.

                The FS9V2 is ideal for tank sampling, bottle sampling or drawing from a live system. For water analysis we've included an accurate, temperature compensated genuine Parts Per Million (PPM) water sensor. Also available is a highly accurate density sensor to detect the slightest change in diesel fuels integrity, this can be useful to detect if fuel has been tampered with or substituted with, for example, water or kerosene.`
    }
  ],
  slugPath: ["oil-conditioning", "filtertechnik", "particle-pal", "fs9v2-particle-pal-laser-portable-particle-counter"]
};

// Product Data - FS9V2-RH - Particle Pal + Water Sensor - Laser Portable Particle Counter
export const fs9v2RhParticlePalWaterSensorLaserPortableParticleCounterData: ProductData = {
  id: "fs9v2-rh-particle-pal-water-sensor-laser-portable-particle-counter",
  name: "FS9V2-RH - Particle Pal + Water Sensor - Laser Portable Particle Counter",
  category: "oil-conditioning",
  subcategory: "filtertechnik",
  brand: "Filtertechnik",
  images: [
    {
      src: "public/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal + Water Sensor - Laser Portable Particle Counter/Particle Pal + Water Sensor - Laser Portable Particle Counter.png",
      alt: "Particle Pal + Water Sensor - Laser Portable Particle Counter"
    }
  ],
  description: [
    "The Particle Pal Fuel Quality Monitor is a self-contained fuel quality testing system, complete with integral pump and governed flow rate. Whether on-site or in the laboratory, the Fuel Quality Monitor will provide instant cleanliness and density readings allowing you to determine if your fuel is within specification quickly.",
    "Samples from a live delivery, fuel tank or sample bottles can be analysed quickly and accurately, thereby minimising the frequency of laboratory analysis. This proactive maintenance approach is ideal for sites with multiple fuel tanks, thus making the Fuel Quality Monitor the ultimate survey and diagnostic unit.",
    "The Fuel Quality Monitor comes with a fitted Laser Particulate Sensor, Accurate Water %RH sensor as well as a highly accurate Density Sensor that can alert to the presence of just 1% by volume of kerosene or water, some of the fluids typically substituted in diesel to save cost. It works on all diesel fuels, bunker fuel and gas oil."
  ],
  features: [
    "Incorporates latest laser particle counting technology",
    "Real-time detection of solid contamination and moisture %",
    "Store readings on internal memory for analysis in Excel",
    "Integral gear pump and rechargeable battery",
    "Laptop connectivity for data transfer"
  ],
  additionalSections: [
    {
      title: "Benefits",
      content: `• Live ISO, NAS and SAE results plus water content %RH\n• Compact, lightweight unit with robust casing\n• Sample direct from oil reservoir or live system via pressure reducer valve\n• Accurate, repeatable and consistent results\n• The ideal survey tool for field and laboratory use`
    }
  ],
  slugPath: ["oil-conditioning", "filtertechnik", "particle-pal", "fs9v2-rh-particle-pal-water-sensor-laser-portable-particle-counter"]
};

// Product Data - FS9V2-RH-DEN - Particle Pal + Water & Density Sensor - Laser Portable Particle Counter
export const fs9v2RhDenParticlePalWaterDensitySensorLaserPortableParticleCounterData: ProductData = {
  id: "fs9v2-rh-den-particle-pal-water-density-sensor-laser-portable-particle-counter",
  name: "FS9V2-RH-DEN - Particle Pal + Water & Density Sensor - Laser Portable Particle Counter",
  category: "oil-conditioning",
  subcategory: "filtertechnik",
  brand: "Filtertechnik",
  images: [
    {
      src: "public/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal + Water & Density Sensor - Laser Portable Particle Counter/Particle Pal + Water & Density Sensor - Laser Portable Particle Counter.png",
      alt: "Particle Pal + Water & Density Sensor - Laser Portable Particle Counter"
    }
  ],
  description: [
    "The Particle Pal Fuel Quality Monitor is a self-contained fuel quality testing system, complete with integral pump and governed flow rate. Whether on-site or in the laboratory, the Fuel Quality Monitor will provide instant cleanliness and density readings allowing you to determine if your fuel is within specification quickly.",
    "Samples from a live delivery, fuel tank or sample bottles can be analysed quickly and accurately, thereby minimising the frequency of laboratory analysis. This proactive maintenance approach is ideal for sites with multiple fuel tanks, thus making the Fuel Quality Monitor the ultimate survey and diagnostic unit.",
    "The Fuel Quality Monitor comes with a fitted Laser Particulate Sensor, Accurate Water %RH sensor as well as a highly accurate Density Sensor that can alert to the presence of just 1% by volume of kerosene or water, some of the fluids typically substituted in diesel to save cost. It works on all diesel fuels, bunker fuel and gas oil."
  ],
  features: [
    "Self-contained with onboard pump",
    "Real-time detection of solid contamination and moisture",
    "Real-time graphics display via software",
    "Real-time density check with rapid response time",
    "Alerts to the presence of water, kerosene or any other non-diesel substitute",
    "Laptop connectivity for data transfer",
    "Archive creation via Excel",
    "Re-chargeable battery",
    "Incorporates latest laser particle counting technology"
  ],
  additionalSections: [
    {
      title: "Benefits",
      content: `• Compact, lightweight unit with robust casing\n• Viscosity range (1-320 CST)\n• Accurate, repeatable and consistent results\n\n• Instantly measure the quality of all modern diesel and marine-based fuels such as gas oil and bunker fuel\n• The ideal survey tool for field and laboratory use\n• Samples from a live delivery, fuel tank or fuel polishing cabinet`
    }
  ],
  slugPath: ["oil-conditioning", "filtertechnik", "particle-pal", "fs9v2-rh-den-particle-pal-water-density-sensor-laser-portable-particle-counter"]
};

// Product Data - FS9V3 - Particle Pal Pro - Digital Imaging Portable Particle Counter
export const fs9v3ParticlePalProDigitalImagingPortableParticleCounterData: ProductData = {
  id: "fs9v3-particle-pal-pro-digital-imaging-portable-particle-counter",
  name: "FS9V3 - Particle Pal Pro - Digital Imaging Portable Particle Counter",
  category: "oil-conditioning",
  subcategory: "filtertechnik",
  brand: "Filtertechnik",
  images: [
    {
      src: "public/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal Pro - Digital Imaging Portable Particle Counter/Particle Pal Pro - Digital Imaging Portable Particle Counter.png",
      alt: "Particle Pal Pro - Digital Imaging Portable Particle Counter"
    }
  ],
  description: [
    "Our all new NEW Particle Pal Pro utilises new digital imaging technology which provides greater insight into the size and type of particulate in any oil system. Air bubble elimination and shape recognition gives root cause particle analysis. Remaining oil life and water content sensors complete the package."
  ],
  features: [
    "Particle counts using the new counter: ISO 4406, SAE & NAS",
    "Broader spectrum of micron sizing – 4, 6, 14, 21, 38 and 70 micron",
    "Shape recognition in the software to categorise:",
    "  • Fatigue wear",
    "  • Sliding wear",
    "  • Cutting wear",
    "  • Fibres"
  ],
  additionalSections: [
    {
      title: "A vision of the future",
      content: `Harnessing the power of proven digital imaging technology.\n
      We've embedded the latest in particle counting technology into our new Particle Pal Pro series. Giving ISO 4406 counts as well as 4, 6, 14, 21, 38 and 70 micron sizing and bubble elimination. Digital imaging combined with advanced algorithms sorts particles into fatigue wear, cutting wear and sliding wear categories to give root cause analysis.\n
      This powerful technology, when coupled with additional sensors for measuring water content and oil life, gives unprecedented on the spot insight into the condition of your oil.`
    },
    {
      image:
      {
        src: "public/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal Pro - Digital Imaging Portable Particle Counter/Particle Pal Pro - Digital Imaging Portable Particle Counter-1.png",
        alt: "Particle Pal Pro - Digital Imaging Portable Particle Counter"
      }
    },
  ],
  technicalSpecs: [
    {
      title: "Technical Information",
      specs: [
        { label: "Fluid Compatibility", value: "Synthetic Oils, Organic Oils, Mineral Oils & Diesel Fuel (2,400 cSt viscosity limit)" },
        { label: "Display Information", value: "Particulate: ISO 4406, SAE AS4059 & NAS 1638, bubble elimination and particulate wear analysis. Water: Relative Humidity (RH%). Oil Condition: Utilises Tan Delta's oil life sensor to determine the remaining life of any oil profiled." },
        { label: "Modes of Operation", value: "High Pressure live system sampling (up to 350 bar) - via a high pressure adaptor. Bottle sampling and Tank sampling." },
        { label: "Data", value: "All data stored locally and backed up off-site. Export to .CSV or PDF" },
        { label: "Calibration", value: "500 oils profiled with the ability to self calibrate any oil also included, via a one time routine." }
      ]
    }
  ],
  slugPath: ["oil-conditioning", "filtertechnik", "particle-pal", "fs9v3-particle-pal-pro-digital-imaging-portable-particle-counter"]
};

// Product Data - FS9V3-RH - Particle Pal Pro + Water Sensor - Digital Imaging Portable Particle Counter
export const fs9v3RhParticlePalProWaterSensorDigitalImagingPortableParticleCounterData: ProductData = {
  id: "fs9v3-rh-particle-pal-pro-water-sensor-digital-imaging-portable-particle-counter",
  name: "FS9V3-RH - Particle Pal Pro + Water Sensor - Digital Imaging Portable Particle Counter",
  category: "oil-conditioning",
  subcategory: "filtertechnik",
  brand: "Filtertechnik",
  images: [
    {
      src: "public/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal Pro - Digital Imaging Portable Particle Counter/Particle Pal Pro - Digital Imaging Portable Particle Counter.png",
      alt: "Particle Pal Pro + Water Sensor - Digital Imaging Portable Particle Counter"
    }
  ],
  description: [
    "Our all new NEW Particle Pal Pro utilises new digital imaging technology which provides greater insight into the size and type of particulate in any oil system. Air bubble elimination and shape recognition gives root cause particle analysis. Remaining oil life and water content sensors complete the package."
  ],
  features: [
    "Particle counts using the new counter: ISO 4406, SAE & NAS",
    "Broader spectrum of micron sizing – 4, 6, 14, 21, 38 and 70 micron",
    "Shape recognition in the software to categorise:",
    "  • Fatigue wear",
    "  • Sliding wear",
    "  • Cutting wear",
    "  • Fibres"
  ],
  additionalSections: [
    {
      title: "A vision of the future",
      content: `We've embedded the latest in particle counting technology into our new Particle Pal Pro series. Giving ISO 4406 counts as well as 4, 6, 14, 21, 38, and 70 micron sizing and bubble elimination. Digital imaging combined with advanced algorithms sorts particles into fatigue wear, cutting wear and sliding wear categories to give root cause analysis.\n
      This powerful technology, when coupled with additional sensors for measuring water content and oil life, gives unprecedented on the spot insight into the condition of your oil.`
    },
    {
      image: {
        src: "public\products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal Pro + Water Sensor - Digital Imaging Portable Particle Counter/Particle Pal Pro + Water Sensor - Digital Imaging Portable Particle Counter.png",
        alt: "Particle Pal Pro + Water Sensor - Digital Imaging Portable Particle Counter"
      }
    }
  ],
  technicalSpecs: [
    {
      title: "Technical Information",
      specs: [
        { label: "Fluid Compatibility", value: "Synthetic Oils, Organic Oils, Mineral Oils & Diesel Fuel (2,400 cSt viscosity limit)" },
        { label: "Display Information", value: "Particulate: ISO 4406, SAE AS4059 & NAS 1638, bubble elimination and particulate wear analysis. Water: Relative Humidity (RH%). Oil Condition: Utilises Tan Delta's oil life sensor to determine the remaining life of any oil profiled." },
        { label: "Modes of Operation", value: "High Pressure live system sampling (up to 350 bar) - via a high pressure adaptor. Bottle sampling and Tank sampling." },
        { label: "Data", value: "All data stored locally and backed up off-site. Export to .CSV or PDF" },
        { label: "Calibration", value: "200 oils profiled with the ability to self calibrate any oil also included, via a one time routine." }
      ]
    }
  ],
  slugPath: ["oil-conditioning", "filtertechnik", "particle-pal", "fs9v3-rh-particle-pal-pro-water-sensor-digital-imaging-portable-particle-counter"]
};

// Product Data - FS9V3-OLU - Particle Pal Pro: Life - Digital Imaging Portable Particle Counter: Including water and remaining oil life sensor
export const fs9v3OluParticlePalProLifeDigitalImagingPortableParticleCounterData: ProductData = {
  id: "fs9v3-olu-particle-pal-pro-life-digital-imaging-portable-particle-counter",
  name: "FS9V3-OLU - Particle Pal Pro: Life - Digital Imaging Portable Particle Counter: Including water and remaining oil life sensor",
  category: "oil-conditioning",
  subcategory: "filtertechnik",
  brand: "Filtertechnik",
  images: [
    {
      src: "public/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal Pro Life - Digital Imaging Portable Particle Counter Including water and remaining oil life sensor/Particle Pal Pro Life - Digital Imaging Portable Particle Counter Including water and remaining oil life sensor.png",
      alt: "Particle Pal Pro : Life - Digital Imaging Portable Particle Counter : Including water and remaining oil life sensor"
    }
  ],
  description: [
    "Our all new NEW Particle Pal Pro utilises new digital imaging technology which provides greater insight into the size and type of particulate in any oil system. Air bubble elimination and shape recognition gives root cause particle analysis. Remaining oil life and water content sensors complete the package."
  ],
  features: [
    "Particle counts using the new counter: ISO 4406, SAE & NAS",
    "Broader spectrum of micron sizing – 4, 6, 14, 21, 38 and 70 micron",
    "Shape recognition in the software to categorise:",
    "  • Fatigue wear",
    "  • Sliding wear",
    "  • Cutting wear",
    "  • Fibres"
  ],
  additionalSections: [
    {
      title: "A vision of the future",
      content: `Harnessing the power of proven digital imaging technology\n
                We've embedded the latest in particle counting technology into our new Particle Pal Pro series. Giving ISO 4406 counts as well as 4, 6, 14, 21, 38 and 70 micron sizing and bubble elimination. Digital imaging combined with advanced algorithms sorts particles into fatigue wear, cutting wear and sliding wear categories to give root cause analysis.\n
                This powerful technology, when coupled with additional sensors for measuring water content and oil life, gives unprecedented on the spot insight into the condition of your oil.`
    },
    {
      image: {
        src: "public/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal Pro Life - Digital Imaging Portable Particle Counter Including water and remaining oil life sensor/Particle Pal Pro Life - Digital Imaging Portable Particle Counter Including water and remaining oil life sensor-1.png",
        alt: "Particle Pal Pro : Life - Digital Imaging Portable Particle Counter : Including water and remaining oil life sensor"
      }
    }
  ],
  technicalSpecs: [
    {
      title: "Technical Information",
      specs: [
        { label: "Fluid Compatibility", value: "Synthetic Oils, Organic Oils, Mineral Oils & Diesel Fuel (2,400 cSt viscosity limit)" },
        { label: "Display Information", value: "Particulate: ISO 4406, SAE AS4059 & NAS 1638, bubble elimination and particulate wear analysis. Water: Relative Humidity (RH%). Oil Condition: Utilises Tan Delta's oil life sensor to determine the remaining life of any oil profiled." },
        { label: "Modes of Operation", value: "High Pressure live system sampling (up to 350 bar) - via a high pressure adaptor. Bottle sampling and Tank sampling." },
        { label: "Data", value: "All data stored locally and backed up off-site. Export to .CSV or PDF" },
        { label: "Calibration", value: "200 oils profiled with the ability to self calibrate any oil also included, via a one time routine." }
      ]
    }
  ],
  slugPath: ["oil-conditioning", "filtertechnik", "particle-pal", "fs9v3-olu-particle-pal-pro-life-digital-imaging-portable-particle-counter"]
};

// Product Data - FS9V3-OLU-VISCO - Particle Pal Pro + Viscosity - Digital Imaging Portable Particle Counter
export const fs9v3OluViscoParticlePalProViscosityDigitalImagingPortableParticleCounterData: ProductData = {
  id: "fs9v3-olu-visco-particle-pal-pro-viscosity-digital-imaging-portable-particle-counter",
  name: "FS9V3-OLU-VISCO - Particle Pal Pro + Viscosity - Digital Imaging Portable Particle Counter",
  category: "oil-conditioning",
  subcategory: "filtertechnik",
  brand: "Filtertechnik",
  images: [
    {
      src: "public/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal Pro + Viscosity - Digital Imaging Portable Particle Counter/Particle Pal Pro + Viscosity - Digital Imaging Portable Particle Counter.png",
      alt: "Particle Pal Pro + Viscosity - Digital Imaging Portable Particle Counter"
    }
  ],
  description: [
    "Our all new Particle Pal Pro +Viscosity utilises breakthrough digital imaging technology which provides a greater insight into the size and type of particulate in any oil system. Air bubble elimination and shape recognition gives root cause particle analysis. Viscosity, oil degradation and water content sensors complete the package."
  ],
  features: [
    "Particle counts using the new counter: ISO 4406, SAE & NAS",
    "Broader spectrum of micron sizing – 4, 6, 14, 21, 38 and 70 micron",
    "Shape recognition in the software to categorise:",
    "  • Fatigue wear",
    "  • Sliding wear",
    "  • Cutting wear",
    "  • Fibres"
  ],
  additionalSections: [
    {
      title: "A vision of the future",
      content: `Harnessing the power of proven digital imaging technology with added viscosity, oil degradation and water sensing technology.\n
                We've embedded the latest in particle counting technology along with a viscosity sensor into our new Particle Pal Pro series. Giving ISO 4406 counts as well as 4, 6, 14, 21, 38 and 70 micron sizing and bubble elimination. Digital imaging, combined with advanced algorithms, sorts particles into fatigue wear, cutting wear and sliding wear categories to give root cause analysis.\n
                The viscosity sensor gives live kinematic and dynamic readings. This powerful technology, when coupled with additional sensors for measuring water content and oil life, gives unprecedented, on-the-spot insight into the condition of your oil.`
    },
    {
      image: {
        src: "public/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal Pro + Viscosity - Digital Imaging Portable Particle Counter/Particle Pal Pro + Viscosity - Digital Imaging Portable Particle Counter-1.png",
        alt: "Particle Pal Pro + Viscosity - Digital Imaging Portable Particle Counter"
      }
    }
  ],
  technicalSpecs: [
    {
      title: "Technical Information",
      specs: [
        { label: "Fluid Compatibility", value: "Synthetic oils, organic oils, mineral oils & diesel fuel (2,400 cSt viscosity limit)" },
        { label: "Display Information", value: "Particulate: ISO 4406, SAE AS4059 & NAS 1638, bubble elimination and particle wear analysis. Water: relative humidity (RH%). Oil condition: utilises Tan Delta's oil life sensor to determine the remaining life of any oil profiled. Water sensing: water is displayed as relative humidity (RH) or % saturation. Viscosity: Resonant/Vibration viscometer: 0 - 2,400cP. Repeatability: 0.3% of reading or +/- 0.05cP. Viscosity sensor accuracy: 1% of reading or +/- 0.1cP." },
        { label: "Modes of Operation", value: "High Pressure live system sampling (up to 350 bar) - via a high pressure adaptor. Bottle sampling and Tank sampling." },
        { label: "Data", value: "All data stored locally and backed up off-site. Export to .CSV or PDF" }
      ]
    }
  ],
  slugPath: ["oil-conditioning", "filtertechnik", "particle-pal", "fs9v3-olu-visco-particle-pal-pro-viscosity-digital-imaging-portable-particle-counter"]
};

// Product Data - FS9V4-RH - Particle Pal Plus + Water RH%: Digital Imaging Portable Particle Counter
export const fs9v4RhParticlePalPlusWaterRHDigitalImagingPortableParticleCounterData: ProductData = {
  id: "fs9v4-rh-particle-pal-plus-water-rh-digital-imaging-portable-particle-counter",
  name: "FS9V4-RH - Particle Pal Plus + Water RH%: Digital Imaging Portable Particle Counter",
  category: "oil-conditioning",
  subcategory: "filtertechnik",
  brand: "Filtertechnik",
  images: [
    {
      src: "public/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal Plus + Water RH Digital Imaging Portable Particle Counter/Particle Pal Plus + Water RH Digital Imaging Portable Particle Counter.png",
      alt: "Particle Pal Plus + Water RH%: Digital Imaging Portable Particle Counter"
    }
  ],
  additionalSections: [
    {
      title: "On-Site Fluid Analysis",
      content: "Our all new Particle Pal Plus utilises breakthrough digital imaging technology which provides a greater insight into the size and type of particulate in any oil system. Air bubble elimination and shape recognition gives root cause particle analysis. A water content sensor completes this package."
    },
    {
      title: "FS9V4-RH",
      image: {
        src: "public/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal Plus + Water RH Digital Imaging Portable Particle Counter/Particle Pal Plus + Water RH Digital Imaging Portable Particle Counter-1.png",
        alt: "Particle Pal Plus + Water RH%: Digital Imaging Portable Particle Counter"
      },
      content: `Harnessing the power of proven digital imaging particle counting with the addition of a Water Content sensor.\n
                We've embedded the latest in particle counting technology into our new Particle Pal Plus series.\n
                Giving ISO 11171 counts as well as 4, 6, 14, 21, 38 & 70-micron sizing and bubble elimination. Digital imaging, combined with advanced algorithms, sorts particles into fatigue wear, cutting wear and sliding wear categories to give root cause analysis. This powerful technology, when coupled with an additional sensor for measuring water content gives unprecedented, on-the-spot insight into the condition of your oil.\n
                Bubbles are counted and removed from ISO counts.  Digital imaging particle counting also has the benefit of not being affected by phantom particles/oil additive packages which is a drawback with Laser counters.  Water is displayed as % RH (Relative Humidity).`
    },
    {
      title: "Built-in Display",
      image: {
        src: "public/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal Plus + Water RH Digital Imaging Portable Particle Counter/Particle Pal Plus + Water RH Digital Imaging Portable Particle Counter-2.png",
        alt: "Particle Pal Plus + Water RH%: Digital Imaging Portable Particle Counter"
      },
      content: `1.	Clear and easy-to-read ISO code which changes between green, white and red to indicate the oil cleanliness.\n
                2.	Oil cleanliness for each size category details the ISO code, number of particles per millilitre and the bubbles detected.\n
                3.	Additional reporting methods such as NAS and SAE are also displayed.\n
                4.	Additional settings allow control of the pump speed for priming and flushing, datalogging, ISO cleanliness alarm limits and changing the time zone.\n
                5.	Oil cleanliness is trended over time to show how its condition changes.\n
                6.	Particles are analysed and sorted into fatigue wear, cutting wear, sliding wear and fibre identification for root cause analysis.\n
                7.	Open a full-size QR code which can be scanned from your mobile device to open the last 5 tests as a fully tabular and graphical report on particlepal.com.
                `
    },
    {
      title: "Online Reporting Tool",
      image: {
        src: "public/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal Plus + Water RH Digital Imaging Portable Particle Counter/Particle Pal Plus + Water RH Digital Imaging Portable Particle Counter-3.png",
        alt: "Particle Pal Plus + Water RH%: Digital Imaging Portable Particle Counter"
      },
      content: `Particle Pal Plus has the ability to generate a QR code, representing the 5 most recent tests. When scanned on a mobile device this will open a fully tabulated and graphical report based on those readings hosted on particlepal.com. After viewing the report you can choose to create or log into your user account, then save your reports.\n
                Additional test information can be added to saved reports for future retrieval, as well as optionally displaying your own company name and logo before being shared with third parties such as your own customers.`
    },
    {
      title: "Digital Imaging Particulate Counter",
      content: "Capable of broad size determination from 4, 6, 14, 21, 38 & 70 micron counts. Air bubble and water droplet elimination. Shape determination to identify fatigue, sliding or cutting wear as well as fibre identification."
    },
    {
      title: "Battery Life",
      content: "Internal rechargeable lithium batteries provide up to ten hours of use."
    },
    {
      title: "Water Sensor",
      content: "Water in oil is a contaminant that can contribute to microbial growth and encourage further contamination, from solids to rust. The inbuilt water sensor shows the relative humidity of any oil as % saturation for analysing oils."
    },
    {
      title: "Water Content",
      content: "Displayed as % saturation (relative humidity). Helps inform whether an oil change is actually required."
    },
    {
      title: "Particulate analysis",
      content: "The digital imaging particle counter gives advanced size and shape recognition for any sample. Counting particulate in fuel and virtually any oil up to 320cSt, the device also eliminates air bubbles, making it ideal for heavy lube and gear oil applications in cold temperatures. Reporting 4, 6, 14, 21, 38 & 70 micron counts as well as categorising any particle greater than 20 microns into Fatigue Wear, Sliding Wear, Cutting Wear and Fibres."
    },
  ],
  technicalSpecs: [
    {
      title: "Technical Information",
      specs: [
        { label: "Fluid Compatibility", value: "Synthetic Oils, Organic Oils, Mineral Oils & Diesel Fuel (320 cSt viscosity limit)" },
        { label: "Display Information", value: "Particulate: ISO 11171, SAE AS4059 & NAS 1638, bubble elimination and particulate wear analysis. Water sensing: Water is displayed as relative humidity (RH) % saturation." },
        { label: "Modes of Operation", value: "High pressure live system sampling (up to 350 bar) - via a high pressure adaptor. Bottle sampling and tank sampling." },
        { label: "Data", value: "All data stored locally with an option to export to CSV or PDF." }
      ]
    }
  ],
  slugPath: ["oil-conditioning", "filtertechnik", "particle-pal", "fs9v4-rh-particle-pal-plus-water-rh-digital-imaging-portable-particle-counter"]
};

// Product Data - FS9V4-PPM - Particle Pal Plus + Water PPM: Digital Imaging Portable Particle Counter
export const fs9v4PpmParticlePalPlusWaterPPMDigitalImagingPortableParticleCounterData: ProductData = {
  id: "fs9v4-ppm-particle-pal-plus-water-ppm-digital-imaging-portable-particle-counter",
  name: "FS9V4-PPM - Particle Pal Plus + Water PPM: Digital Imaging Portable Particle Counter",
  category: "oil-conditioning",
  subcategory: "filtertechnik",
  brand: "Filtertechnik",
  images: [
    {
      src: "public/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal Plus + Water PPM Digital Imaging Portable Particle Counter/Particle Pal Plus + Water PPM Digital Imaging Portable Particle Counter.png",
      alt: "Particle Pal Plus + Water PPM: Digital Imaging Portable Particle Counter"
    }
  ],
  additionalSections: [
    {
      title: "On-Site Fuel Analysis",
      content: "Our all new Particle Pal Plus utilises breakthrough digital imaging technology which provides a greater insight into the size and type of particulate in any fuel system. Air bubble elimination and shape recognition gives root cause particle analysis. A PPM Water sensor completes the package."
    },
    {
      title: "FS9V4-PPM",
      image: {
        src: "public/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal Plus + Water PPM Digital Imaging Portable Particle Counter/Particle Pal Plus + Water PPM Digital Imaging Portable Particle Counter-1.png",
        alt: "Image"
      },
      content: `Harnessing the power of proven digital imaging technology plus water sensing technology.\n
                We've embedded the latest in particle counting technology into our new Particle Pal Plus series. Giving ISO 11171 counts as well as 4, 6, 14, 21, 38 & 70 micron sizing and bubble elimination. Digital imaging, combined with advanced algorithms, sorts particles into fatigue wear, cutting wear and sliding wear categories to give root cause analysis. This powerful technology, when coupled with a Water PPM sensor for measuring water as Parts per Million, gives immediate on-the-spot insight into the condition of your fuel.\n
                The image is 4mm x 3mm and shows representative particulate that the human eye can't see, this is taken from the S120 particle counter embedded in the Particle Pal Plus range. (Images of fuel are not displayed on the screen).`
    },
    {
      title: "Built-in Display",
      image: {
        src: "public/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal Plus + Water PPM Digital Imaging Portable Particle Counter/Particle Pal Plus + Water PPM Digital Imaging Portable Particle Counter-2.png",
        alt: "Image"
      },
      content: `1.	Clear and easy to read ISO code which changes between green, white and red to indicate the fuel cleanliness.\n
                2.	Fuel cleanliness for each size category details the ISO code, the number of particles per millilitre and the bubbles detected.\n
                3.	A Water PPM Sensor gives the water parts per Million count.\n
                4.	Additional settings allow control of the pump speed for priming and flushing, data logging, ISO cleanliness alarm limits and changing the time zone.\n
                5.	Fluid cleanliness is trended over time to show how its condition changes.\n
                6.	Particles are analysed and sorted into fatigue wear, cutting wear, sliding wear and fibre identification to give root cause analysis.\n
                7.	Open a full-size QR code which can be scanned from your mobile device to open the last 5 tests as a fully tabular and graphical report on particlepal.com.\n
                `,
    },
    {
      title: "Online reporting tool",
      image: {
        src: "public/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal Plus + Water PPM Digital Imaging Portable Particle Counter/Particle Pal Plus + Water PPM Digital Imaging Portable Particle Counter-3.png",
        alt: "Image"
      },
      content: `Particle Pal Plus has the ability to generate a QR code, representing the 5 most recent tests. When scanned on a mobile device this will open a fully tabulated and graphical report based on those readings hosted on particlepal.com. After viewing the report you can choose to create or log into your user account, then save your reports.\n
                Additional test information can be added to saved reports for future retrieval, as well as optionally displaying your own company name and logo before being shared with third parties such as your own customers.`,
    },
    {
      title: "Digital Imaging Particulate Counter",
      content: "Capable of broad size determination from 4, 6, 14, 21, 38 & 70 micron counts. Air bubble and water droplet elimination. Shape determination to identify fatigue, sliding or cutting wear as well as fibre identification."
    },
    {
      title: "Battery Life",
      content: "Internal rechargeable lithium batteries provide up to ten hours of use."
    },
    {
      title: "Water Sensor",
      content: "Water in fuel is a contaminant that can contribute to microbial growth and encourage further contamination, from solids to rust. The inbuilt water sensor shows the water content of fuel in PPM."
    },
    {
      title: "Water content",
      content: "Displayed as parts per million (PPM). Helps inform whether water removal is actually required."
    },
    {
      title: "Particulate Analysis",
      content: "The digital imaging particle counter gives advanced size and shape recognition for any sample.    Counting particulate in fuel and virtually any oil up to 320cSt, the device also eliminates air bubbles, making it ideal for heavy lube and gear oil applications in cold temperatures. Reporting 4, 6, 14, 21, 38 & 70 micron counts as well as categorising any particle greater than 20 microns into Fatigue Wear, Sliding Wear, Cutting Wear and Fibres."
    },
  ],
  technicalSpecs: [
    {
      title: "Technical Information",
      specs: [
        { label: "Fluid Compatibility", value: "Synthetic Oils, Organic Oils, Mineral Oils & Diesel Fuel (320 cSt viscosity limit)" },
        { label: "Display Information", value: "Particulate: ISO 11171, SAE AS4059 & NAS 1638, bubble elimination and particulate wear analysis. Water sensing: Water is displayed in parts per million (PPM)." },
        { label: "Modes of Operation", value: "High pressure live system sampling (up to 350 bar) - via a high pressure adaptor. Bottle sampling and tank sampling." },
        { label: "Data", value: "All data stored locally with an option to export to CSV or PDF." }
      ]
    }
  ],
  slugPath: ["oil-conditioning", "filtertechnik", "particle-pal", "fs9v4-ppm-particle-pal-plus-water-ppm-digital-imaging-portable-particle-counter"]
};

// Product Data - FS9V4 - Particle Pal Plus: Digital Imaging Portable Particle Counter
export const fs9v4ParticlePalPlusDigitalImagingPortableParticleCounterData: ProductData = {
  id: "fs9v4-particle-pal-plus-digital-imaging-portable-particle-counter",
  name: "FS9V4 - Particle Pal Plus: Digital Imaging Portable Particle Counter",
  category: "oil-conditioning",
  subcategory: "filtertechnik",
  brand: "Filtertechnik",
  images: [
    {
      src: "public/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal Plus Digital Imaging Portable Particle Counter/Particle Pal Plus Digital Imaging Portable Particle Counter.png",
      alt: "Particle Pal Plus: Digital Imaging Portable Particle Counter"
    }
  ],
  additionalSections: [
    {
      title: "On-Site Fluid Analysis",
      content: "Our all-new Particle Pal Plus utilises breakthrough digital imaging technology which provides greater insight into the size and type of particulate in any oil system. Air bubble elimination and shape recognition gives root cause particle analysis.  Bubbles are counted and removed from ISO counts.  Digital imaging particle counting also has the benefit of not being affected by phantom particles/oil additive packages which is a drawback with Laser counters."
    },
    {
      title: "FS9V4",
      image: {
        src: "public/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal Plus Digital Imaging Portable Particle Counter/Particle Pal Plus Digital Imaging Portable Particle Counter-1.png",
        alt: "Particle Pal Plus: Digital Imaging Portable Particle Counter"
      },
      content: `Harnessing the power of proven digital imaging technology.\n
                We've embedded the latest in particle counting technology along into our new Particle Pal Plus series. Giving ISO 11171 counts as well as 4, 6, 14, 21, 38 & 70 micron sizing and bubble elimination. Digital imaging, combined with advanced algorithms, sorts particles into fatigue wear, cutting wear and sliding wear categories to give root cause analysis. This powerful technology gives unprecedented, on-the-spot insight into the condition of your oil.\n
                The image to the right is 4mm x 3mm and shows particulate that the human eye can't see, this is what the particle counter sees. Images are not displayed on the Particle Pal Plus screen.`
    },
    {
      title: "Built-in Display",
      image: {
        src: "public/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal Plus Digital Imaging Portable Particle Counter/Particle Pal Plus Digital Imaging Portable Particle Counter-2.png",
        alt: "Particle Pal Plus: Digital Imaging Portable Particle Counter"
      },
      content: `1.	Clear and easy-to-read ISO code which changes between green, white and red to indicate the oil cleanliness.\n
                2.	Oil cleanliness for each size category details the ISO code, number of particles per millilitre and the bubbles detected.\n
                3.	Additional reporting methods such as NAS and SAE are also displayed.\n
                4.	Additional settings allow control of the pump speed for priming and flushing, datalogging, ISO cleanliness alarm limits and changing the time zone.\n
                5.	Oil cleanliness is trended over time to show how its condition changes.\n
                6.	Particles are analysed and sorted into fatigue wear, cutting wear, sliding wear and fibre identification for root cause analysis.\n
                7.	Open a full-size QR code which can be scanned from your mobile device to open the last 5 tests as a fully tabular and graphical report on particlepal.com.\n
                `
    },
    {
      title: "Online reporting tool",
      image: {
        src: "public/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal Plus Digital Imaging Portable Particle Counter/Particle Pal Plus Digital Imaging Portable Particle Counter-3.png",
        alt: "Particle Pal Plus: Digital Imaging Portable Particle Counter"
      },
      content: `Particle Pal Plus has the ability to generate a QR code, representing the 5 most recent tests. When scanned on a mobile device this will open a fully tabulated and graphical report based on those readings hosted on particlepal.com. After viewing the report you can choose to create or log into your user account, then save your reports.\n
                Additional test information can be added to saved reports for future retrieval, as well as optionally displaying your own company name and logo before being shared with third parties such as your own customers.`
    },
    {
      title: "Digital Imaging Particulate Counter",
      content: "Capable of broad size determination from 4, 6, 14, 21, 38 & 70 micron counts. Air bubble and water droplet elimination. Shape determination to identify fatigue, sliding or cutting wear as well as fibre identification."
    },
    {
      title: "Battery Life",
      content: "Internal rechargeable lithium batteries provide up to ten hours of use."
    },
    {
      title: "Particulate Analysis",
      content: "The digital imaging particle counter gives advanced size and shape recognition for any sample.    Counting particulate in fuel and virtually any oil up to 320cSt.  Reporting 4, 6, 14, 21, 38 & 70 micron counts as well as categorising any particle greater than 20 microns into Fatigue Wear, Sliding Wear, Cutting Wear and Fibres."
    },
  ],
  technicalSpecs: [
    {
      title: "Technical Information",
      specs: [
        { label: "Fluid Compatibility", value: "Synthetic Oils, Organic Oils, Mineral Oils & Diesel Fuel (320 cSt viscosity limit)" },
        { label: "Display Information", value: "Particulate: ISO 11171, SAE AS4059 & NAS 1638, bubble elimination and particulate wear analysis." },
        { label: "Modes of Operation", value: "High pressure live system sampling (up to 350 bar) - via a high pressure adaptor. Bottle sampling and tank sampling." },
        { label: "Data", value: "All data stored locally with an option to export to CSV or PDF." }
      ]
    }
  ],
  slugPath: ["oil-conditioning", "filtertechnik", "particle-pal", "fs9v4-particle-pal-plus-digital-imaging-portable-particle-counter"]
};

// Product Data - FS9V4-HV - Particle Pal Plus High Viscosity: Digital Imaging Portable Particle Counter
export const fs9v4HvParticlePalPlusHighViscosityDigitalImagingPortableParticleCounterData: ProductData = {
  id: "fs9v4-hv-particle-pal-plus-high-viscosity-digital-imaging-portable-particle-counter",
  name: "FS9V4-HV - Particle Pal Plus High Viscosity: Digital Imaging Portable Particle Counter",
  category: "oil-conditioning",
  subcategory: "filtertechnik",
  brand: "Filtertechnik",
  images: [
    {
      src: "public/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal Plus High Viscosity Digital Imaging Portable Particle Counter/Particle Pal Plus High Viscosity Digital Imaging Portable Particle Counter.png",
      alt: "Particle Pal Plus High Viscosity: Digital Imaging Portable Particle Counter"
    }
  ],
  additionalSections: [
    {
      title: "Portable Oil analysis up to 2,400cSt",
      content: "Our all new Particle Pal Plus High Viscosity utilises breakthrough digital imaging technology providing unparalleled insight into the size and type of particulate in any oil system up to 2,400cSt. Air bubble elimination and shape recognition gives root cause particle analysis. A stepper motor pump for high viscosity oils completes this package."
    },
    {
      title: "FS9V4-HV (High Viscosity)",
      image: {
        src: "public/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal Plus High Viscosity Digital Imaging Portable Particle Counter/Particle Pal Plus High Viscosity Digital Imaging Portable Particle Counter-1.png",
        alt: "Particle Pal Plus High Viscosity: Digital Imaging Portable Particle Counter"
      },
      content: `Harnessing the power of proven digital imaging technology.\n
                Our High Viscosity version has all the features of the standard Particle Pal Plus but with an enhanced stepper motor pump capable of handling higher viscosity oils. Utilising the advanced S120 digital imaging particle counting technology reports ISO 4406 counts as well as 4, 6, 14, 21, 38, 70 & >100 micron sizing and bubble elimination.\n
                Digital imaging, combined with advanced algorithms, sorts particles into fatigue wear, cutting wear and sliding wear categories to give root cause analysis. This powerful technology gives unprecedented, on-the-spot insight into the condition of your oil.  Digital imaging technology's results are not affected by oil additive packages that affect laser particle counts (phantom particles).\n
                The image is 4mm x 3mm and shows particulate that the human eye can't see, this image is representative of what the S120 captures. Images of the fuel are not displayed on the Particle Pal Plus screen.`
    },
    {
      title: "Built-in Display",
      image: {
        src: "public/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal Plus High Viscosity Digital Imaging Portable Particle Counter/Particle Pal Plus High Viscosity Digital Imaging Portable Particle Counter-3.png",
        alt: "Particle Pal Plus High Viscosity: Digital Imaging Portable Particle Counter"
      },
      content: `1.	Clear and easy to read ISO code which changes between green, white and red to indicate the oil cleanliness.
                2.	High Viscosity stepper motor pump: up to 2,400cSt
                3.	Oil cleanliness for each size category details the ISO code, the number of particles per millilitre and the bubbles detected.
                4.	Additional reporting methods such as NAS and SAE included.
                5.	Additional settings allow control of the pump speed for priming and flushing, datalogging, ISO cleanliness alarm limits and changing the time zone.
                6.	Oil cleanliness is trended over time to show how its condition changes.
                7.	Particles are analysed and sorted into fatigue wear, cutting wear, sliding wear and fibre identification to give root cause analysis.
                8.	Open a full-size QR code which can be scanned from your mobile device to open the last 5 tests as a fully tabular and graphical report on particlepal.com.
                  `
    },
    {
      title: "Online reporting tool",
      image: {
        src: "public/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal Plus High Viscosity Digital Imaging Portable Particle Counter/Particle Pal Plus High Viscosity Digital Imaging Portable Particle Counter-4.png",
        alt: `"Particle Pal Plus High Viscosity: Digital Imaging Portable Particle Counter"`
      },
      content: `Particle Pal Plus has the ability to generate a QR code, representing the 5 most recent tests. When scanned on a mobile device this will open a fully tabulated and graphical report based on those readings hosted on particlepal.com. After viewing the report you can choose to create or log into your user account, then save your reports.\n
                Additional test information can be added to saved reports for future retrieval, as well as optionally displaying your own company name and logo before being shared with third parties such as your own customers.`
    },
    {
      title: "Digital Imaging Particulate Counter",
      content: "Capable of broad size determination from 4, 6, 14, 21, 38 & 70 micron counts. Air bubble and water droplet elimination. Shape determination to identify fatigue, sliding or cutting wear as well as fibre identification."
    },
    {
      title: "Internal Sleeper Motor Pump",
      content: "We've developed a fully controllable stepper motor-driven pump to deliver exact flow rates for any oil, from 1 to 2,400 cSt. The pump also allows connection to a live system up to 350bar via an optional high pressure adaptor."
    },
    {
      title: "Battery Life",
      content: "Internal rechargeable lithium batteries provide up to ten hours of use."
    },
    {
      title: "Particulate Analysis",
      content: "The digital imaging particle counter gives advanced size and shape recognition for any sample.    Counting particulate in fuel and virtually any oil up to 320cSt.  Reporting 4, 6, 14, 21, 38 & 70 micron counts as well as categorising any particle greater than 20 microns into Fatigue Wear, Sliding Wear, Cutting Wear and Fibres."
    },
  ],
  technicalSpecs: [
    {
      title: "Technical Information",
      specs: [
        { label: "Fluid Compatibility", value: "Synthetic Oils, Organic Oils, Mineral Oils & Diesel Fuel (320 cSt viscosity limit)" },
        { label: "Display Information", value: "Particulate: ISO 11171, SAE AS4059 & NAS 1638, bubble elimination and particulate wear analysis." },
        { label: "Modes of Operation", value: "High pressure live system sampling (up to 350 bar) - via a high pressure adaptor. Bottle sampling and tank sampling." },
        { label: "Data", value: "All data stored locally with an option to export to CSV or PDF." }
      ]
    }
  ],
  slugPath: ["oil-conditioning", "filtertechnik", "particle-pal", "fs9v4-hv-particle-pal-plus-high-viscosity-digital-imaging-portable-particle-counter"]
};

// Product Data - FS9V4-PPM-DEN - Particle Pal Plus + Water PPM and Density Sensor : Digital Imaging Portable Particle Counter
export const fs9v4PpmDenParticlePalPlusWaterPPMDensitySensorDigitalImagingPortableParticleCounterData: ProductData = {
  id: "fs9v4-ppm-den-particle-pal-plus-water-ppm-density-sensor-digital-imaging-portable-particle-counter",
  name: "FS9V4-PPM-DEN - Particle Pal Plus + Water PPM and Density Sensor : Digital Imaging Portable Particle Counter",
  category: "oil-conditioning",
  subcategory: "filtertechnik",
  brand: "Filtertechnik",
  images: [
    {
      src: "public/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal Plus + Water PPM and Density Sensor Digital Imaging Portable Particle Counter/Particle Pal Plus + Water PPM and Density Sensor Digital Imaging Portable Particle Counter.png",
      alt: "Particle Pal Plus + Water PPM and Density Sensor : Digital Imaging Portable Particle Counter"
    }
  ],
  additionalSections: [
    {
      title: "ON-SITE FUEL ANALYSIS",
      content: "Our all-new Particle Pal Plus utilises breakthrough digital imaging technology which provides greater insight into the size and type of particulate in any fuel system. Air bubble elimination and shape recognition gives root cause particle analysis. Water content and density sensors complete this package."
    },
    {
      title: "FS9V4-PPM-DEN",
      image: {
        src: "public/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal Plus + Water PPM and Density Sensor Digital Imaging Portable Particle Counter/Particle Pal Plus + Water PPM and Density Sensor Digital Imaging Portable Particle Counter-1.png",
        alt: "Particle Pal Plus + Water PPM and Density Sensor : Digital Imaging Portable Particle Counter"
      },
      content: `Harnessing the power of proven digital imaging technology with density and water sensing technology.\n
                Digital Imaging particle counting gives ISO 4406 counts as well as 4, 6, 14, 21, 38 & 70-micron sizing and bubble elimination. This powerful technology, when coupled with the addition of a Water PPM sensor and a Density Sensor gives unprecedented, on-the-spot insight into the condition of your diesel fuel.  Density sensing is used when fuel tampering/replacement is suspected.\n
                The image is representative of particulate that the embedded S120 Digital Imaging particle counter sees.  Images of the fuel are not displayed on the screen.`
    },
    {
      title: "Built-in Display",
      image: {
        src: "/Filtertechnik/Particle Pal/Particle Pal Plus + Water PPM and Density Sensor Digital Imaging Portable Particle Counter/Particle Pal Plus + Water PPM and Density Sensor Digital Imaging Portable Particle Counter-2.png",
        alt: "Particle Pal Plus + Water PPM and Density Sensor : Digital Imaging Portable Particle Counter"
      },
      content: `1.	Clear and easy to read ISO code which changes between green, white and red to indicate the fuel cleanliness.
                2.	Fuel cleanliness for each size category details the ISO code, the number of particles per millilitre and the bubbles detected.
                3.	Additional sensors: Water as PPM and Density give an unprecedented insight into the overall condition of the fuel.
                4.	Additional settings allow control of the pump speed for priming and flushing, data logging, ISO cleanliness alarm limits and changing the time zone.
                5.	Fuel cleanliness is trended over time to show how its condition changes.
                6.	Particles are analysed and sorted into fatigue wear, cutting wear, sliding wear and fibre identification to give root cause analysis.
                7.	Open a full-size QR code which can be scanned from your mobile device to open the last 5 tests as a fully tabular and graphical report on particlepal.com.
                `
    },
    {
      title: "Online reporting tool",
      image: {
        src: "/Filtertechnik/Particle Pal/Particle Pal Plus + Water PPM and Density Sensor Digital Imaging Portable Particle Counter/Particle Pal Plus + Water PPM and Density Sensor Digital Imaging Portable Particle Counter-3.png",
        alt: `"Particle Pal Plus + Water PPM and Density Sensor : Digital Imaging Portable Particle Counter"`
      },
      content: `Particle Pal Plus has the ability to generate a QR code, representing the 5 most recent tests. When scanned on a mobile device this will open a fully tabulated and graphical report based on those readings hosted on particlepal.com. After viewing the report you can choose to create or log into your user account, then save your reports.\n
                Additional test information can be added to saved reports for future retrieval, as well as optionally displaying your own company name and logo before being shared with third parties such as your own customers.`
    },
    {
      title: "Digital Imaging Particulate Counter",
      content: "Capable of broad size determination from 4, 6, 14, 21, 38 & 70 micron counts. Air bubble and water droplet elimination. Shape determination to identify fatigue, sliding or cutting wear as well as fibre identification."
    },
    {
      title: "Internal Sleeper Motor Pump",
      content: "We've developed a fully controllable stepper motor-driven pump to deliver exact flow rates for any oil, from 1 to 2,400 cSt. The pump also allows connection to a live system up to 350bar via an optional high pressure adaptor."
    },
    {
      title: "Battery Life",
      content: "Internal rechargeable lithium batteries provide up to ten hours of use."
    },
    {
      title: "Water Sensor",
      content: "Water in fuel is a contaminant that can contribute to microbial growth and encourage further contamination, from solids to rust. The inbuilt water sensor shows the water content of fuel in PPM."
    },
    {
      title: "Density Sensor",
      content: "Density is reported as  Kg/m³ and is a useful metric to determine if diesel fuel has been tampered with."
    },
    {
      title: "Water Content",
      content: "Displayed as parts per million (PPM). Helps inform whether water removal is actually required."
    },
    {
      title: "Density",
      content: "Displays live density of fluid samples. (kg/m³)"
    },
    {
      title: "Particulate analysis",
      content: "The digital imaging particle counter gives advanced size and shape recognition for any sample. Counting particulate in fuel and virtually any oil up to 320cSt, the device also eliminates air bubbles. Reporting 4, 6, 14, 21, 38 & 70 micron counts as well as categorising any particle greater than 20 microns into Fatigue Wear, Sliding Wear, Cutting Wear and Fibres."
    },
  ],
  technicalSpecs: [
    {
      title: "Technical Information",
      specs: [
        { label: "Fluid Compatibility", value: "Diesel Fuel (320 cSt viscosity limit)" },
        { label: "Display Information", value: "Particulate: ISO 4406, SAE AS4059 & NAS 1638, bubble elimination and particulate wear analysis.\nWater sensing: Water is displayed in parts per million (PPM).\nDensity: Range: 0.6kg/m³ - 1.3kg/m³\nResolution: 0.001kg/m³\nAccuracy: +/- 2%" },
        { label: "Modes of Operation", value: "Bottle sampling and tank sampling." },
        { label: "Data", value: "All data stored locally with an option to export to CSV or PDF." }
      ]
    }
  ],
  slugPath: ["oil-conditioning", "filtertechnik", "particle-pal", "fs9v4-ppm-den-particle-pal-plus-water-ppm-density-sensor-digital-imaging-portable-particle-counter"]
};

// Product Data - FS9V4-RH-HV - Particle Pal Plus High Viscosity + Water RH%: Digital Imaging Portable Particle Counter
export const fs9v4RhHvParticlePalPlusHighViscosityWaterRHDigitalImagingPortableParticleCounterData: ProductData = {
  id: "fs9v4-rh-hv-particle-pal-plus-high-viscosity-water-rh-digital-imaging-portable-particle-counter",
  name: "FS9V4-RH-HV - Particle Pal Plus High Viscosity + Water RH%: Digital Imaging Portable Particle Counter",
  category: "oil-conditioning",
  subcategory: "filtertechnik",
  brand: "Filtertechnik",
  images: [
    {
      src: "public/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal Plus + Water RH Digital Imaging Portable Particle Counter/Particle Pal Plus + Water RH Digital Imaging Portable Particle Counter.png",
      alt: "Particle Pal Plus High Viscosity + Water RH%: Digital Imaging Portable Particle Counter"
    }
  ],
  additionalSections: [
    {
      title: "Portable Particle Counting and Water Sensing up to 2,400cSt",
      content: "Our all new Particle Pal Plus high viscosity with water sensing has the same functionality as our FS9V4-RH but with an advanced stepper motor pump that can handle oils from 1cSt up to 2,400cSt. This version of the Particle Pal Plus has a larger HMI screen and larger robust case."
    },
    {
      title: "FS9V4-PPM-DEN",
      image: {
        src: "public/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal Plus + Water RH Digital Imaging Portable Particle Counter/Particle Pal Plus + Water RH Digital Imaging Portable Particle Counter-1.png",
        alt: "Particle Pal Plus High Viscosity + Water RH%: Digital Imaging Portable Particle Counter"
      },
      content: `Harnessing the power of proven digital imaging with water sensing technology and a high viscosity pump.\n
                The S120 Digital imaging particle counter reports ISO 4406 counts as well as 4, 6, 14, 21, 38 & 70 micron sizing and bubble elimination. Digital imaging, sorts particles into fatigue wear, cutting wear and sliding wear categories to give root cause analysis. This powerful technology, when coupled with an additional sensor for measuring water content as %RH (Relative Humidity - 100% RH = saturation) gives unprecedented, on-the-spot insight into the condition of your oil.`
    },
    {
      title: "Built-in Display",
      image: {
        src: "public/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal Plus + Water RH Digital Imaging Portable Particle Counter/Particle Pal Plus + Water RH Digital Imaging Portable Particle Counter-2.png",
        alt: "Particle Pal Plus High Viscosity + Water RH%: Digital Imaging Portable Particle Counter"
      },
      content: `1.	Clear and easy to read ISO code which changes between green, white and red to indicate the oil cleanliness.\n
                2.	1cSt up to 2,400cst viscosity capability.\n
                3.	Oil cleanliness for each size category details the ISO code, the number of particles per millilitre and the bubbles detected.\n
                4.	An additional Water sensor gives an unprecedented insight into the overall condition of the oil.\n
                5.	Additional settings allow control of the pump speed for priming and flushing, datalogging, ISO cleanliness alarm limits and changing the time zone.\n
                6.	Oil cleanliness is trended over time to show how its condition changes.\n
                7.	Particles are analysed and sorted into fatigue wear, cutting wear, sliding wear and fibre identification to give root cause analysis.\n
                `
    },
    {
      title: "Online reporting tool",
      image: {
        src: "public/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal Plus + Water RH Digital Imaging Portable Particle Counter/Particle Pal Plus + Water RH Digital Imaging Portable Particle Counter-3.png",
        alt: `"Particle Pal Plus High Viscosity + Water RH%: Digital Imaging Portable Particle Counter"`
      },
      content: `Particle Pal Plus has the ability to generate a QR code, representing the 5 most recent tests. When scanned on a mobile device this will open a fully tabulated and graphical report based on those readings hosted on particlepal.com. After viewing the report you can choose to create or log into your user account, then save your reports.\n
                Additional test information can be added to saved reports for future retrieval, as well as optionally displaying your own company name and logo before being shared with third parties such as your own customers.`
    },
    {
      title: "Digital Imaging Particulate Counter",
      content: "Capable of broad size determination from 4, 6, 14, 21, 38 & 70 micron counts. Air bubble and water droplet elimination. Shape determination to identify fatigue, sliding or cutting wear as well as fibre identification. This technology is not affected by phantom particles which is a problem with Laser particle counters (typically oil anti-foaming oil additives cause phantom particles)"
    },
    {
      title: "Water Sensor",
      content: "Water in oil is a contaminant that can contribute to microbial growth and encourage further contamination, from solids to rust. The inbuilt water sensor shows the relative humidity of any oil as % saturation for analysing oils."
    },
    {
      title: "Internal Stepper Motor Pump",
      content: "We've developed a fully controllable stepper motor driven pump to deliver exact flow rates for any oil, from 1 to 2,400 cSt. The pump also allows connection to a live system up to 350bar via a high pressure adaptor."
    },
    {
      title: "Water content",
      content: "Displayed as % saturation (relative humidity). Helps inform whether an oil change is actually required."
    },
    {
      title: "Battery Life",
      content: "Internal rechargeable lithium batteries provide up to ten hours of use."
    },
    {
      title: "Particulate analysis",
      content: "The digital imaging particle counter gives advanced size and shape recognition for any sample. Counting particulate in fuel and virtually any oil up to 320cSt, the device also eliminates air bubbles. Reporting 4, 6, 14, 21, 38 & 70 micron counts as well as categorising any particle greater than 20 microns into Fatigue Wear, Sliding Wear, Cutting Wear and Fibres."
    },
  ],
  technicalSpecs: [
    {
      title: "Technical Information",
      specs: [
        { label: "Fluid Compatibility", value: "Synthetic Oils, Organic Oils, Mineral Oils & Diesel Fuel (2,400 cSt viscosity limit)" },
        { label: "Display Information", value: "Particulate: ISO 4406, SAE AS4059 & NAS 1638, bubble elimination and particulate wear analysis.\nWater sensing: Water is displayed as relative humidity (RH) % saturation." },
        { label: "Modes of Operation", value: "High pressure live system sampling (up to 350 bar) - via a high pressure adaptor.\nBottle sampling and tank sampling." },
        { label: "Data", value: "All data stored locally with an option to export to CSV or PDF." }
      ]
    }
  ],
  slugPath: ["oil-conditioning", "filtertechnik", "particle-pal", "fs9v4-rh-hv-particle-pal-plus-high-viscosity-water-rh-digital-imaging-portable-particle-counter"]
};

// Product Data - FS9V4-RH-V-D-HV - Particle Pal Plus High Viscosity: Particulate, Water RH%, Viscosity and Density
export const fs9v4RhVdHvParticlePalPlusHighViscosityParticulateWaterRHDensityData: ProductData = {
  id: "fs9v4-rh-v-d-hv-particle-pal-plus-high-viscosity-particulate-water-rh-viscosity-density",
  name: "FS9V4-RH-V-D-HV - Particle Pal Plus High Viscosity: Particulate, Water RH%, Viscosity and Density",
  category: "oil-conditioning",
  subcategory: "filtertechnik",
  brand: "Filtertechnik",
  images: [
    {
      src: "public/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal Plus High Viscosity Particulate, Water RH, Viscosity and Density/Particle Pal Plus High Viscosity Particulate, Water RH, Viscosity and Density.png",
      alt: "Particle Pal Plus High Viscosity: Particulate, Water RH%, Viscosity and Density"
    }
  ],
  additionalSections: [
    {
      title: "Portable Particulate, Water, Viscosity and Density sensing for oils up to 2,400cSt",
      content: "This version of our Particle Pal Plus has the largest number of sensors built-in. Particulate, Water expressed as %RH (Relative Humidity) plus Viscosity and Density are all reported on a large touch screen display. Oils up to 2,400cSt can be analysed."
    },
    {
      title: "FS9V4-RH-V-D-HV",
      image: {
        src: "public/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal Plus High Viscosity Particulate, Water RH, Viscosity and Density/Particle Pal Plus High Viscosity Particulate, Water RH, Viscosity and Density-1.png",
        alt: "Particle Pal Plus High Viscosity: Particulate, Water RH%, Viscosity and Density"
      },
      content: `Digital Imaging Particle Counting, Water sensing plus a Viscosity & Density sensor\n
                We've embedded the latest in particle counting technology along with a viscosity and density sensor into our new Particle Pal Plus series. Giving ISO 4406 counts as well as 4, 6, 14, 21, 38 & 70-micron sizing and bubble elimination. Digital imaging counting technology, combined with advanced algorithms, sorts particles into fatigue wear, cutting wear and sliding wear categories to give root cause analysis. The viscosity sensor gives live dynamic readings. This powerful technology when coupled with an additional sensor for measuring water content gives unprecedented, on-the-spot insight into the condition of your oil.`
    },
    {
      title: "Built-in Display",
      image: {
        src: "public/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal Plus High Viscosity Particulate, Water RH, Viscosity and Density/Particle Pal Plus High Viscosity Particulate, Water RH, Viscosity and Density-2.png",
        alt: "Particle Pal Plus High Viscosity: Particulate, Water RH%, Viscosity and Density"
      },
      content: `1.	Clear and easy to read ISO code which changes between green, white and red to indicate the oil cleanliness.\n
                2.	Oil cleanliness for each size category details the ISO code, number of particles per millilitre and the bubbles detected.\n
                3.	Additional sensors give an unprecedented insight into the overall condition of the oil.\n
                4.	Additional settings allow control of the pump speed for priming and flushing, data logging, ISO cleanliness alarm limits and changing the time zone.\n
                5.	Oil cleanliness is trended over time to show how its condition changes.\n
                6.	Particles are analysed and sorted into fatigue wear, cutting wear, sliding wear and fibre identification to give root cause analysis.\n
                7.	Open a full-size QR code which can be scanned from your mobile device to open the last 5 tests as a fully tabular and graphical report on particlepal.com.
                `
    },
    {
      title: "Online reporting tool",
      image: {
        src: "public/products/oil conditioning/Filtertechnik/Particle Pal/Particle Pal Plus High Viscosity Particulate, Water RH, Viscosity and Density/Particle Pal Plus High Viscosity Particulate, Water RH, Viscosity and Density-3.png",
        alt: `"Particle Pal Plus High Viscosity: Particulate, Water RH%, Viscosity and Density"`
      },
      content: `Particle Pal Plus has the ability to generate a QR code, representing the 5 most recent tests. When scanned on a mobile device this will open a fully tabulated and graphical report based on those readings hosted on particlepal.com. After viewing the report you can choose to create or log into your user account, then save your reports.\n
                Additional test information can be added to saved reports for future retrieval, as well as optionally displaying your own company name and logo before being shared with third parties such as your own customers.`
    },
    {
      title: "Digital Imaging Particulate Counter",
      content: "Capable of broad size determination from 4, 6, 14, 21, 38 & 70 micron counts. Air bubble and water droplet elimination. Shape determination to identify fatigue, sliding or cutting wear as well as fibre identification."
    },
    {
      title: "Battery Life",
      content: "Internal rechargeable lithium batteries provide up to ten hours of use."
    },
    {
      title: "Water Sensor",
      content: "Water in oil is a contaminant that can contribute to microbial growth and encourage further contamination, from solids to rust. The inbuilt water sensor shows the relative humidity of any oil as % saturation."
    },
    {
      title: "Water content",
      content: "Displayed as % saturation (relative humidity). Helps inform whether an oil change is actually required."
    },
    {
      title: "Viscosity & Density Sensor",
      content: "The accurate piezo electric viscometer has a measuring range of 25-400mPa.s Knowing the viscosity of your oil can help spot end of life or dilution/ topping up issues."
    },
    {
      title: "Internal Stepper Motor Pump",
      content: "Stepper motor-driven pump to deliver exact flow rates for any oil, from 1 to 2,400 cSt. The pump also allows connection to a live system up to 350bar via an optional high pressure adaptor."
    },
    {
      title: "Water content",
      content: "Displayed as % saturation (relative humidity). Helps inform whether an oil change is actually required."
    },
    {
      title: "Density",
      content: "Displays live density and temperature. (kg/m³)"
    },
    {
      title: "Particulate analysis",
      content: "The digital imaging particle counter gives advanced size and shape recognition for any sample. Counting particulate in fuel and virtually any oil up to 2400cSt, the device also eliminates air bubbles, making it ideal for heavy lube and gear oil applications in cold temperatures. Reporting 4, 6, 14, 21, 38 & 70 micron counts as well as categorising any particle greater than 20 microns into Fatigue Wear, Sliding Wear, Cutting Wear and Fibres."
    },
  ],
  slugPath: ["oil-conditioning", "filtertechnik", "particle-pal", "fs9v4-rh-v-d-hv-particle-pal-plus-high-viscosity-particulate-water-rh-viscosity-density"]
};

// ============================
// EVAMO
// ============================

// Product Data - Evamo - Smart Bubble System
export const evamoSmartBubbleSystemData: ProductData = {
  id: "evamo-smart-bubble-system",
  name: "Evamo - Smart Bubble System",
  category: "oil-conditioning",
  subcategory: "evamo",
  brand: "Evamo",
  images: [
    {
      src: "/products/oil conditioning/Evamo/evamo smart bubble system.png",
      alt: "Evamo - Smart Bubble System"
    }
  ],
  description: [
    "The Invisible Threat – Why Air in Oil Matters",
    "Air in oil is often invisible, but its effects are serious. Oxidation, increased wear, loss of performance and premature oil ageing are direct consequences of air bubbles in hydraulic systems and transmissions. Traditional methods of measurement are often inaccurate or only provide indirect data.",
    "The Smart Bubble System solves one of the biggest challenges in fluid management: the precise detection of air in oil. Using real-time optical measurement and advanced machine vision algorithms, the SBS enables direct and calibration-free measurement of air bubbles in hydraulic fluids and oils - with unsurpassed precision and easy integration, without complex maintenance.",
    "The SBS-ST enables precise laboratory analysis with repeatable, detailed examination of air-in-oil behavior. Ideal for research, product validation and component testing, it offers the highest accuracy and reproducibility.",
    "Our SBS-ME enables real-time, on-site measurements in dynamic industrial environments. It provides instant air-in-oil analysis without system modifications, ensures maximum flexibility and precision and supports condition monitoring and predictive maintenance."
  ],
  features: [
    "Direct, Real-Time Analysis: No estimations. Just real data, when and where you need it.",
    "Powered by Machine Vision: Advanced algorithms for precise, repeatable results. Real-time insights powered by cutting-edge machine vision algorithms.",
    "Effortless Operation: Accurate results without the hassle of constant recalibration. No calibration. No maintenance. Just plug, measure, and optimize."
  ],
  additionalSections: [
    {
      title: "Industries that benefit from the SBS",
      content: "The Smart Bubble System (SBS) offers customized solutions for all industries that rely on precise oil condition monitoring and lubrication optimization."
    }
  ],
  slugPath: ["oil-conditioning", "evamo", "evamo-smart-bubble-system"]
};

// MASTER EXPORT: All Oil Conditioning Products & Categories
export const allOilConditioningProducts: ProductData[] = [
  // ============================
  // TanDelta
  // ============================
  tandeltaCategoryData,
  oqsxG2OilQualitySensorData,
  oqsxG2HAZOilQualitySensorData,
  motMobileOilTestKitData,
  oqsxG2SensorKitData,
  sense2DisplayKitData,
  sense3GatewayKitData,
  gatewayOQTgData,
  oqdeG2DisplayExpressData,
  gatewayHubData,
  manifoldData,

  // ============================
  // Hydrotechnik
  // ============================
  hydrotechnikCategoryData,
  watchlogUSBCategoryData,
  watchlogUSBDualSensorData,
  watchlogUsbWindowsPcTabletPressureTemperatureMeasurementSoftwareData,
  watchlogBluetoothSensorsGaugesAndMobileAppsCategoryData,
  watchlogBluetoothPressureTemperatureSensorsGaugesAndAppForUpTo4SensorsConnectedSimultaneouslyCategoryData,
  wlbPtCompactBluetoothPressureSensorData,
  wlbTtCompactBluetoothTemperatureSensorData,
  wlbDdpgSeriesBluetoothDataloggingPressureGaugesData,
  wlbDpgSeriesBluetoothPressureGaugeData,
  watchlogBluetoothLiveViewAppData,
  ddpgSeriesBluetoothPressureGaugeTestKitData,
  dgpSeriesBluetoothPressureGaugeTestKitData,
  watchlogBluetoothPlusPressureLevelForceSensorsAndAppForUpTo12ConnectedSensorsAdvancedAppCalculationFeaturesData,
  htWlbpWatchlogBluetoothPlusPressureSensorData,
  htWlblWatchlogBluetoothPlusHydrostaticLevelSensorsData,
  htWlblcWatchlogBluetoothPlusCompressionLoadCellsData,
  htWlbllWatchlogBluetoothPlusCompressionLoadLinkData,
  watchlogBluetoothPlusIosAndAndroidAppData,
  watchlogWirelessPressureTemperatureAndFlowSensorsCategoryData,
  watchlogWirelessPressureFlowTemperatureTestKitData,
  watchlogWirelessVisionData,
  watchlogAtexWirelessPressureSensorsData,
  watchlogWirelessPressureSensorsData,
  watchlogWirelessTemperatureSensorsData,
  watchlogWirelessLinearPositionSensorData,
  watchlogWirelessTurbineFlowMetersData,
  watchlogWirelessOvalGearFlowMetersData,
  watchlogWirelessUsbBaseStationsReceiversData,
  wlwArWirelessSignalExtenderData,
  watchlogWirelessSignalGatewayModulesData,
  watchlogWirelessConfigMonitoringLoggingSoftwareData,
  watchlogWirelessAccessoriesData,
  wlwplSeriesCellularLevelSensorData,
  watchlogProRemoteMonitoringCategoryData,
  watchlogProOrbCellularWiFiCloudGatewayForMobileApplicationsData,
  watchlogProQuadCellularWiFiCloudGatewayForFixedSystemsData,
  watchlogProHydraulicSystemMonitoringData,
  watchlogProCustomCloudMonitoringData,
  watchlogCSVVisualizerSoftwareData,

  // ============================
  // Filtertechnik
  // ============================
  filtertechnikCategoryData,
  s120DigitalImagingParticleCounterData,
  particlePalCategoryData,
  fs9v2ParticlePalLaserPortableParticleCounterData,
  fs9v2RhParticlePalWaterSensorLaserPortableParticleCounterData,
  fs9v2RhDenParticlePalWaterDensitySensorLaserPortableParticleCounterData,
  fs9v3ParticlePalProDigitalImagingPortableParticleCounterData,
  fs9v3RhParticlePalProWaterSensorDigitalImagingPortableParticleCounterData,
  fs9v3OluParticlePalProLifeDigitalImagingPortableParticleCounterData,
  fs9v3OluViscoParticlePalProViscosityDigitalImagingPortableParticleCounterData,
  fs9v4RhParticlePalPlusWaterRHDigitalImagingPortableParticleCounterData,
  fs9v4PpmParticlePalPlusWaterPPMDigitalImagingPortableParticleCounterData,
  fs9v4ParticlePalPlusDigitalImagingPortableParticleCounterData,
  fs9v4HvParticlePalPlusHighViscosityDigitalImagingPortableParticleCounterData,
  fs9v4PpmDenParticlePalPlusWaterPPMDensitySensorDigitalImagingPortableParticleCounterData,
  fs9v4RhHvParticlePalPlusHighViscosityWaterRHDigitalImagingPortableParticleCounterData,
  fs9v4RhVdHvParticlePalPlusHighViscosityParticulateWaterRHDensityData,

  // ============================
  // Evamo
  // ============================
  evamoSmartBubbleSystemData
];