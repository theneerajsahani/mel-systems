import { TechnicalSpecsSection } from "@/components/TechnicalSpecsTable"

// Enhanced Product Data Structure
export interface ProductImage {
  src: string;
  alt: string;
}

export interface ProductFeature {
  title: string;
  description: string;
}

export interface ProductData {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  brand: string;
  images: ProductImage[];
  description: string[];
  features?: ProductFeature[];
  additionalSections?: {
    title: string;
    content: string;
    image?: ProductImage;
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
  breadcrumbItems: Array<{
    label: string;
    href?: string;
  }>;
}


// ============================
// TANDELTA PRODUCTS
// ============================

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
      alt: "OQSX-G2 Sensor Kit"
    },
    {
      src: "/products/oil conditioning/Tandelta/OQSx-G2 Oil Quality Sensor/OQSx-G2 Oil Quality Sensor-2.jpg",
      alt: "OQSX-G2 Sensor Kit Detail"
    }
  ],
  description: [
    "Real time oil condition analysis sensor with integrated intelligent equipment maintenance optimisation analytics for all industrial and commercial applications.",
    "OQSx-G2 delivers the ultimate high-quality real-time oil condition analysis. This enables multiple tangible operating benefits that include reduced maintenance costs, improved reliability, reduced oil wastage, and extended equipment life.",
    "Our unique FSH™ core technology analyses oil condition holistically, detecting, measuring and tracking all and any contamination or wear with 0.01% sensitivity (100ppm) - other sensor systems typically look at specific parameters and ignore others. This unmatched real-time complete oil analysis capability is achieved through continuous analysis of the electro-chemical properties of the oil at a molecular level.",
    "OQSx-G2 analysis data provides unrivalled high-confidence insight into real-time equipment health and maintenance status. Reliable forecasting and planning of maintenance based upon actual equipment need and thus extended optimised maintenance intervals and reduced cost becomes possible; with the assurance and safety of continuous over-watch that detects any unexpected anomalies and or contamination.",
    "OQSx-G2 works with any oil type and is easily fitted to any equipment operating in any environment or application."
  ],
  additionalSections: [
    {
      title: "Oil Interpreting Guide",
      content: "",
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
  breadcrumbItems: [
    { label: "Products", href: "/products" },
    { label: "Oil Conditioning", href: "/products/oil-conditioning" },
    { label: "Tandelta", href: "/products/oil-conditioning/tandelta" },
    { label: "OQSx-G2 Oil Quality Sensor" }
  ]
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
      content: "",
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
  breadcrumbItems: [
    { label: "Products", href: "/products" },
    { label: "Oil Conditioning", href: "/products/oil-conditioning" },
    { label: "Tandelta", href: "/products/oil-conditioning/tandelta" },
    { label: "OQSx-G2 HAZ Oil Quality Sensor" }
  ]
};

// Product Data - MOT - Mobile Oil Test Kit
export const motMobileOilTestKitData: ProductData = {
  id: "mot-mobile-oil-test-kit",
  name: "MOT - Mobile Oil Test Kit",
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
    {
      title: "INSTANT OIL CONDITION ANALYSIS",
      description: "Anywhere, anytime, any oil."
    },
    {
      title: "CONFIGURABLE TO ANY OIL TYPE",
      description: "Mineral and synthetic."
    },
    {
      title: "TRACK AND TREND",
      description: "Easily keep track of samples from different assets."
    },
    {
      title: "SIMPLE & RELIABLE",
      description: "Portable and easy to use in any field or workshop environment."
    },
    {
      title: "DETECT ISSUES",
      description: "Instantly detect unexpected equipment and oil issues."
    },
    {
      title: "MINIMISE CARBON FOOTPRINT",
      description: "Achieve ESG targets by safely maximising oil life."
    }
  ],
  additionalSections: [
    {
      title: "Oil Interpreting Guide",
      content: "",
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
  breadcrumbItems: [
    { label: "Products", href: "/products" },
    { label: "Oil Conditioning", href: "/products/oil-conditioning" },
    { label: "Tandelta", href: "/products/oil-conditioning/tandelta" },
    { label: "MOT - Mobile Oil Test Kit" }
  ]
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
  features: [
    {
      title: "REAL TIME OIL CONDITION ANALYSIS",
      description: "continuously analyses and tracks oil condition in real time providing a simple to understand Tan Delta Number (TDN) scale."
    },
    {
      title: "PREDICT MAINTENANCE",
      description: "use the rate of change to easily and accurately predict oil end of life and safely extend intervals between maintenance according to equipment needs."
    },
    {
      title: "EVENT ALERTS",
      description: "immediate detection and alert in the event of contamination and or unseen equipment issues which may lead to breakdowns or damage."
    },
    {
      title: "SIMPLE & RELIABLE",
      description: "easy to install and use with any equipment operating in any environment. Operates continuously with no maintenance required."
    },
    {
      title: "REDUCED MAINTENANCE COSTS",
      description: "trend analysis of oil condition change enables maintenance to be planned ahead of time at the optimal point, safely extending maintenance intervals. Typically reduces maintenance costs by between 30% and 50%."
    },
    {
      title: "IMPROVED RELIABILITY",
      description: "unseen issues cause subtle changes to oil condition that OQSx-G2 detects and alerts. Enables faults to be detected and fixed before failure, reducing costly break downs and extending equipment life."
    },
    {
      title: "ESG TARGETS",
      description: "reduced oil consumption, spare part consumption, optimisation of equipment operating efficiency and extended productive equipment life all make a material and verifiable contribution to ESG targets."
    }
  ],
  additionalSections: [
    {
      title: "Oil Interpreting Guide",
      content: "",
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
  breadcrumbItems: [
    { label: "Products", href: "/products" },
    { label: "Oil Conditioning", href: "/products/oil-conditioning" },
    { label: "Tandelta", href: "/products/oil-conditioning/tandelta" },
    { label: "OQSX-G2 Sensor kit" }
  ]
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
  breadcrumbItems: [
    { label: "Products", href: "/products" },
    { label: "Oil Conditioning", href: "/products/oil-conditioning" },
    { label: "Tandelta", href: "/products/oil-conditioning/tandelta" },
    { label: "SENSE2 Display Kit" }
  ]
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
      alt: "TODO: Add alt text"
    }
  ],
  description: [
    "SENSE-3 is a scalable data monitoring & analysis solution giving you access to both live and historic data using any online M2M/IoT monitoring system, such as Tan Delta Online. Consisting of an IoT Gateway, mounted with Tan Delta’s modular Gateway Hub system to form 1 single small footprint unit, the SENSE-3 Gateway Kit allows up to 3x OQSx-G2 sensors to be connected out of the box, with option to upgrade the system to 16x sensors by connecting multiple Gateway Hubs (sold separately) to the SENSE-3 unit, therefore catering for large multi-asset systems where timing of maintenance intervals is crucial.",
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
        { label: "Operating GSM On", value: "-30°C (-40°F) to +60°C (+176°F)" },
        { label: "Li-Ion Battery", value: "-20°C to +50°C (+14°F to +122°F) (recommended 0°C to +40°C, +32°F to)" },
      ]
    },
    {
      title: "STANDARDS & CERTIFICATION",
      specs: [
        { label: "Conformity", value: "CE Marked\nFCC Authorisation encapsulated\nIC Certification\nR & TTE\nRoHS Compliant" },
      ]
    }
  ],
  breadcrumbItems: [
    { label: "Products", href: "/products" },
    { label: "Oil Conditioning", href: "/products/oil-conditioning" },
    { label: "Tandelta", href: "/products/oil-conditioning/tandelta" },
    { label: "SENSE3 Gateway Kit" }
  ]
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
      content: "",
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
  breadcrumbItems: [
    { label: "Products", href: "/products" },
    { label: "Oil Conditioning", href: "/products/oil-conditioning" },
    { label: "Tandelta", href: "/products/oil-conditioning/tandelta" },
    { label: "Gateway (OQTg)" }
  ]
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
      alt: "TODO: Add alt text"
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
      content: "",
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
  breadcrumbItems: [
    { label: "Products", href: "/products" },
    { label: "Oil Conditioning", href: "/products/oil-conditioning" },
    { label: "Tandelta", href: "/products/oil-conditioning/tandelta" },
    { label: "OQDe-G2 Display Express" }
  ]
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
      alt: "TODO: Add alt text"
    }
  ],
  description: [
    "The Gateway Hub is a sophisticated accessory for the Gateway, allowing multiple Oil Quality Sensors to be connected and powered via a single power connection, and integrated into the Gateway IoT, which in turn enables data from your Oil Quality Sensors to be accessed on any IoT monitoring system such as Tan Delta Online.",
    "Every equipment operator knows that machine monitoring enables effective management and thus increased reliability, efficiencies and profits. Oil Condition Monitoring with Tan Delta takes this to a new level through much greater insight into the real condition of your equipment, and delivers significantly enhanced financial and operating benefits."
  ],
  additionalSections: [
    {
      title: "Oil Interpreting Guide",
      content: "",
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
  breadcrumbItems: [
    { label: "Products", href: "/products" },
    { label: "Oil Conditioning", href: "/products/oil-conditioning" },
    { label: "Tandelta", href: "/products/oil-conditioning/tandelta" },
    { label: "Gateway Hub" }
  ]
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
      alt: "TODO: Add alt text"
    }
  ],
  description: [
    "In most cases an existing inspection port provides the ideal location for installing the OQSx-G2. If this is unavailable, Tan Delta can provide custom Manifolds tailored to your application’s requirements.",
    "Tan Delta manifolds are designed specifically for OQSx-G2 oil condition analysis sensors to enable reliable and easy installation where inspection ports or other suitable installation points are not available. Our manifolds are manufactured from solid aluminum and designed to optimise oil flow across the sensor head without impeding normal flow."
  ],
  additionalSections: [
    {
      title: "Oil Interpreting Guide",
      content: "",
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
  breadcrumbItems: [
    { label: "Products", href: "/products" },
    { label: "Oil Conditioning", href: "/products/oil-conditioning" },
    { label: "Tandelta", href: "/products/oil-conditioning/tandelta" },
    { label: "Manifold" }
  ]
};

// ============================
// TANDELTA CABLES
// ============================
// Note: Cables are displayed on a single page at /products/oil-conditioning/tandelta/cables
// Individual cable products do not have separate pages

// Cable data is managed in the cables page component, not as individual ProductData entries

// ============================
// HYDROTECHNIK PRODUCTS
// ============================

// Product Data - Watchlog USB Category Page
export const watchlogUSBCategoryData: ProductData = {
  id: "watchlog-usb",
  name: "Watchlog USB",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
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
    "The Watchlog USB range represents a comprehensive USB-based pressure and temperature measurement solution designed for demanding industrial applications. This innovative system combines high-speed data acquisition with user-friendly software to deliver precise monitoring and analysis capabilities.",
    "Each Watchlog USB sensor connects directly to Windows PCs or tablets via USB, eliminating the need for complex data acquisition systems. The included software provides real-time visualization, recording, and analysis of pressure and temperature data from up to 8 sensors simultaneously.",
    "Whether you're monitoring hydraulic systems, testing components, or analyzing pressure fluctuations in industrial processes, the Watchlog USB system delivers the accuracy and reliability you need for critical measurements."
  ],
  features: [
    {
      title: "HIGH-SPEED SCANNING",
      description: "Controllable scanning rate from 500 readings per second (2mS) down to 1 second intervals for precise data capture"
    },
    {
      title: "DUAL OUTPUT SENSORS",
      description: "Simultaneous pressure and temperature measurement in a single, compact sensor unit"
    },
    {
      title: "MULTI-SENSOR CONNECTIVITY",
      description: "Connect up to 8 sensors simultaneously using standard USB hubs for comprehensive system monitoring"
    },
    {
      title: "COMPREHENSIVE SOFTWARE",
      description: "Professional Windows software included free with real-time display, recording, and analysis capabilities"
    },
    {
      title: "MULTIPLE PRESSURE RANGES",
      description: "Standard ranges from 25 bar to 700 bar available from stock, with custom ranges on request"
    },
    {
      title: "AUTOMATIC DETECTION",
      description: "Plug-and-play operation with automatic sensor detection and configuration"
    },
    {
      title: "FLEXIBLE RECORDING",
      description: "Manual triggers, timed recording, and scheduled data logging options"
    },
    {
      title: "ADVANCED ANALYSIS",
      description: "Real-time graph zooming, annotation, and event capture capabilities"
    },
    {
      title: "EXPORT CAPABILITIES",
      description: "Export data in PDF and CSV formats for further analysis and reporting"
    },
    {
      title: "INDUSTRIAL APPLICATIONS",
      description: "Suitable for hydraulics, pump testing, food & beverage, pulp & paper, and mobile equipment"
    }
  ],
  additionalSections: [
    {
      title: "Available Products",
      content: "CUSTOM_COMPONENT:WatchlogUSBProducts"
    }
  ],
  breadcrumbItems: [
    { label: "Products", href: "/products" },
    { label: "Oil Conditioning", href: "/products/oil-conditioning" },
    { label: "Hydrotechnik", href: "/products/oil-conditioning/hydrotechnik" },
    { label: "Watchlog USB" }
  ]
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
    {
      title: "HIGH-SPEED SCANNING",
      description: "Controllable scanning rate from 500 readings per second (2mS), 10mS, 50mS, 100mS, 1s."
    },
    {
      title: "DUAL OUTPUT",
      description: "Dual pressure and temperature output in one device."
    },
    {
      title: "MULTIPLE PRESSURE RANGES",
      description: "25 bar, 160 bar, 400 bar & 700 bar sensors available from stock."
    },
    {
      title: "FREE SOFTWARE INCLUDED",
      description: "Watchlog USB software included free of charge with each sensor."
    },
    {
      title: "MULTI-SENSOR CONNECTIVITY",
      description: "Connect, view & record up to 8 sensors at one time using standard USB hubs."
    }
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
  breadcrumbItems: [
    { label: "Products", href: "/products" },
    { label: "Oil Conditioning", href: "/products/oil-conditioning" },
    { label: "Hydrotechnik", href: "/products/oil-conditioning/hydrotechnik" },
    { label: "Watchlog USB", href: "/products/oil-conditioning/hydrotechnik/watchlog-usb" },
    { label: "Watchlog USB Dual Pressure and Temperature Sensor" }
  ]
};

// Product Data - Watchlog USB Windows PC/Tablet Software
export const watchlogUSBSoftwareData: ProductData = {
  id: "watchlog-usb-windows-pc-tablet-software",
  name: "Watchlog USB Windows® PC/tablet pressure & temperature measurement software",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  brand: "Hydrotechnik",
  images: [
    {
      src: "/products/oil conditioning/Hydrotechnik/Watchlog-USB/Watchlog USB Windows® PCtablet pressure & temperature measurement software/Watchlog USB Windows PCandtablet pressure and temperature measurement software.png",
      alt: "Watchlog USB Windows PC/tablet Software"
    }
  ],
  description: [
    "Included with each sensor is our Windows® PC/tablet software for simple, quick and cost-effective pressure & temperature measurement of up to 8 Watchlog USB sensors at the same time.",
    "Users can view the measurements in numerical, graph or both simultaneously. Test data can be viewed, zoomed, and annotated during or after recording and data can be exported for easy test file management."
  ],
  features: [
    {
      title: "DUAL OUTPUT",
      description: "Dual pressure and temperature output from each sensor"
    },
    {
      title: "HIGH-SPEED RECORDING",
      description: "View and record up to 500 times per second per sensor"
    },
    {
      title: "MULTIPLE PRESSURE RANGES",
      description: "25 bar, 160 bar, 400 bar & 700 bar sensors available from stock"
    },
    {
      title: "MULTI-SENSOR CONNECTIVITY",
      description: "Connect, view & record up to 8 sensors at one time, using standard USB hubs"
    },
    {
      title: "AUTOMATIC DETECTION",
      description: "Watchlog USB software automatically detects any connected sensors"
    },
    {
      title: "CONFIGURABLE ALARMS",
      description: "Min. / max. values and settable alarm limits"
    },
    {
      title: "FLEXIBLE RECORDING",
      description: "Manual target triggers, timed or scheduled recording options"
    },
    {
      title: "EVENT CAPTURE",
      description: "Capture events before and after a trigger point"
    },
    {
      title: "ADVANCED ANALYSIS",
      description: "Graph zooming and annotation even during recording"
    },
    {
      title: "EXPORT OPTIONS",
      description: "PDF and CSV test export options"
    },
    {
      title: "INDUSTRIAL APPLICATIONS",
      description: "SECTORS: Industrial, food & beverage, pulp & paper, mobile hydraulics, and pump & component testing"
    }
  ],
  breadcrumbItems: [
    { label: "Products", href: "/products" },
    { label: "Oil Conditioning", href: "/products/oil-conditioning" },
    { label: "Hydrotechnik", href: "/products/oil-conditioning/hydrotechnik" },
    { label: "Watchlog USB", href: "/products/oil-conditioning/hydrotechnik/watchlog-usb" },
    { label: "Watchlog USB Windows PC/tablet Software" }
  ]
};


// Product Data - Watchlog Bluetooth Sensors, Gauges and Mobile Apps Category
export const watchlogBluetoothCategoryData: ProductData = {
  id: "watchlog-bluetooth-sensors-gauges-and-mobile-apps",
  name: "Watchlog Bluetooth Sensors, Gauges and Mobile Apps",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  brand: "Hydrotechnik",
  images: [
    {
      src: "/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/1st category/Bluetooth Pressure Sensor.jpg",
      alt: "Watchlog Bluetooth Pressure Sensor"
    },
    {
      src: "/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/2nd category/Digital Gauge.jpg",
      alt: "Watchlog Bluetooth Digital Gauge"
    }
  ],
  description: [
    "The Watchlog Bluetooth sensor range represents the latest evolution in wireless pressure, temperature, and force measurement technology. This comprehensive system combines cutting-edge Bluetooth connectivity with professional-grade sensors and intuitive mobile applications for seamless monitoring and data collection.",
    "Available in two distinct tiers - Standard Bluetooth for up to 4 sensors and Bluetooth-Plus for up to 12 sensors with advanced calculation features - this range caters to applications from basic monitoring to complex multi-point measurement systems. Each sensor communicates wirelessly with iOS and Android devices, eliminating cables and enabling flexible installation.",
    "Whether you're conducting pressure tests, monitoring hydraulic systems, or analyzing force distribution, the Watchlog Bluetooth range delivers the wireless freedom and professional capabilities needed for modern measurement applications."
  ],
  features: [
    {
      title: "WIRELESS CONNECTIVITY",
      description: "Bluetooth 5.0 technology for reliable wireless communication up to 10 meters range"
    },
    {
      title: "DUAL SENSOR TIERS",
      description: "Standard (4 sensors) and Plus (12 sensors) options to match your application requirements"
    },
    {
      title: "MOBILE APP INTEGRATION",
      description: "Dedicated iOS and Android apps for real-time monitoring, data logging, and analysis"
    },
    {
      title: "MULTI-PARAMETER MEASUREMENT",
      description: "Pressure, temperature, level, and force sensors available in the same ecosystem"
    },
    {
      title: "PROFESSIONAL DATA LOGGING",
      description: "Automatic data recording with customizable sampling rates and trigger conditions"
    },
    {
      title: "ADVANCED CALCULATIONS",
      description: "Bluetooth-Plus app includes professional calculation features for complex analysis"
    },
    {
      title: "BATTERY POWERED",
      description: "Long-life battery operation eliminates the need for external power supplies"
    },
    {
      title: "DIGITAL DISPLAY OPTIONS",
      description: "Available with integrated digital displays for local readings"
    },
    {
      title: "TEST KIT CONFIGURATIONS",
      description: "Complete test kits available with Minimess® connections and carrying cases"
    },
    {
      title: "INDUSTRIAL APPLICATIONS",
      description: "Suitable for hydraulics, mobile equipment, manufacturing, and field testing"
    }
  ],
  additionalSections: [
    {
      title: "Available Products",
      content: "CUSTOM_COMPONENT:WatchlogBluetoothProducts"
    }
  ],
  breadcrumbItems: [
    { label: "Products", href: "/products" },
    { label: "Oil Conditioning", href: "/products/oil-conditioning" },
    { label: "Hydrotechnik", href: "/products/oil-conditioning/hydrotechnik" },
    { label: "Watchlog Bluetooth Sensors, Gauges and Mobile Apps" }
  ]
};

// ============================
// WATCHLOG BLUETOOTH 4-SENSORS CATEGORY
// ============================

// Product Data - Watchlog Bluetooth 4-Sensors Category Page
export const watchlogBluetooth4SensorsCategoryData: ProductData = {
  id: "watchlog-bluetooth-4-sensors",
  name: "Watchlog Bluetooth Pressure & Temperature Sensors, Gauges and App for up to 4 sensors connected simultaneously",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  brand: "Hydrotechnik",
  images: [
    {
      src: "/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/1st category/WLB-PT Compact Bluetooth Pressure Sensor/WLB-PT Compact Bluetooth Pressure Sensor.png",
      alt: "WLB-PT Compact Bluetooth Pressure Sensor"
    }
  ],
  description: [
    "The Watchlog Bluetooth range provides wireless pressure and temperature measurement solutions for applications requiring up to 4 connected sensors simultaneously. This system combines compact sensor designs with intuitive mobile applications for comprehensive monitoring capabilities.",
    "Featuring both compact sensors and digital gauges with integrated Bluetooth connectivity, this range offers flexible measurement solutions for hydraulic systems, mobile equipment, and industrial applications where cable-free operation is essential.",
    "The dedicated iOS and Android applications provide real-time data visualization, logging, and analysis capabilities, making it easy to monitor multiple parameters from a single mobile device."
  ],
  features: [
    {
      title: "UP TO 4 SENSORS",
      description: "Connect and monitor up to 4 sensors simultaneously through a single mobile application"
    },
    {
      title: "COMPACT SENSORS",
      description: "Ultra-compact pressure and temperature sensors for space-constrained applications"
    },
    {
      title: "DIGITAL GAUGES",
      description: "Advanced digital pressure gauges with integrated Bluetooth and data logging capabilities"
    },
    {
      title: "MOBILE APPLICATION",
      description: "Dedicated iOS and Android app for real-time monitoring and data logging"
    },
    {
      title: "WIRELESS FREEDOM",
      description: "Bluetooth connectivity eliminates cable requirements for flexible installation"
    },
    {
      title: "REAL-TIME MONITORING",
      description: "Live data visualization with configurable display options"
    },
    {
      title: "DATA LOGGING",
      description: "Comprehensive recording capabilities with export functionality"
    },
    {
      title: "INDUSTRIAL DURABILITY",
      description: "Robust construction suitable for demanding industrial environments"
    }
  ],
  breadcrumbItems: [
    { label: "Products", href: "/products" },
    { label: "Oil Conditioning", href: "/products/oil-conditioning" },
    { label: "Hydrotechnik", href: "/products/oil-conditioning/hydrotechnik" },
    { label: "Watchlog Bluetooth Sensors, Gauges and Mobile Apps", href: "/products/oil-conditioning/hydrotechnik/watchlog-bluetooth-sensors" },
    { label: "4 Sensors Connected Simultaneously" }
  ]
};

// ============================
// WATCHLOG BLUETOOTH 12-SENSORS CATEGORY
// ============================

// Product Data - Watchlog Bluetooth-Plus 12-Sensors Category Page
export const watchlogBluetoothPlus12SensorsCategoryData: ProductData = {
  id: "watchlog-bluetooth-plus-12-sensors",
  name: "Watchlog Bluetooth-Plus Pressure, Level & Force Sensors and App for up to 12 connected sensors & advanced app calculation features",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  brand: "Hydrotechnik",
  images: [
    {
      src: "/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/2nd category/Watchlog Bluetooth-Plus Pressure, Level & Force Sensors and App for up to 12 connected sensors & advanced app calculation features.png",
      alt: "Watchlog Bluetooth-Plus Sensors and App"
    }
  ],
  description: [
    "The Watchlog Bluetooth-Plus range represents the advanced tier of wireless measurement solutions, supporting up to 12 connected sensors with sophisticated calculation capabilities. This comprehensive system extends beyond basic pressure and temperature measurement to include level and force monitoring.",
    "Designed for complex multi-parameter applications, the Bluetooth-Plus range features advanced sensor technologies including hydrostatic level sensors, compression load cells, and load links, all seamlessly integrated with enhanced mobile applications.",
    "The advanced iOS and Android applications provide not only real-time monitoring and data logging but also sophisticated calculation features, enabling complex analysis and reporting directly from mobile devices."
  ],
  features: [
    {
      title: "UP TO 12 SENSORS",
      description: "Extended capacity supporting up to 12 sensors simultaneously for complex monitoring applications"
    },
    {
      title: "MULTI-PARAMETER MEASUREMENT",
      description: "Pressure, level, force, and temperature measurement capabilities in one integrated system"
    },
    {
      title: "ADVANCED CALCULATIONS",
      description: "Sophisticated calculation features built into the mobile applications"
    },
    {
      title: "SPECIALIZED SENSORS",
      description: "Hydrostatic level sensors, compression load cells, and load links for specialized applications"
    },
    {
      title: "ENHANCED MOBILE APP",
      description: "Advanced iOS and Android applications with extended features and calculation capabilities"
    },
    {
      title: "BLUETOOTH-PLUS TECHNOLOGY",
      description: "Enhanced Bluetooth connectivity for improved range and reliability"
    },
    {
      title: "COMPLEX ANALYSIS",
      description: "Advanced data analysis and reporting capabilities directly from mobile devices"
    },
    {
      title: "INDUSTRIAL GRADE",
      description: "Robust construction designed for the most demanding industrial applications"
    }
  ],
  breadcrumbItems: [
    { label: "Products", href: "/products" },
    { label: "Oil Conditioning", href: "/products/oil-conditioning" },
    { label: "Hydrotechnik", href: "/products/oil-conditioning/hydrotechnik" },
    { label: "Watchlog Bluetooth Sensors, Gauges and Mobile Apps", href: "/products/oil-conditioning/hydrotechnik/watchlog-bluetooth-sensors" },
    { label: "12 Sensors Connected with Advanced Features" }
  ]
};

// ============================
// INDIVIDUAL BLUETOOTH SENSOR PRODUCTS
// ============================

// WLB-PT Compact Bluetooth Pressure Sensor
export const wlbPTCompactBluetoothPressureSensorData: ProductData = {
  id: "wlb-pt-compact-bluetooth-pressure-sensor",
  name: "WLB-PT Compact Bluetooth Pressure Sensor",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  brand: "Hydrotechnik",
  images: [
    {
      src: "/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/1st category/WLB-PT Compact Bluetooth Pressure Sensor/WLB-PT Compact Bluetooth Pressure Sensor.png",
      alt: "WLB-PT Compact Bluetooth Pressure Sensor"
    }
  ],
  description: [
    "The WLB-PT is an ultra-compact Bluetooth pressure sensor designed for space-constrained applications where wireless monitoring is essential. This innovative sensor combines high-accuracy pressure measurement with integrated temperature compensation and Bluetooth connectivity.",
    "Featuring a robust stainless steel construction and compact design, the WLB-PT is ideal for mobile equipment, hydraulic systems, and industrial applications where traditional wired sensors are impractical or undesirable.",
    "The sensor seamlessly integrates with the Watchlog Bluetooth mobile application, providing real-time pressure monitoring, data logging, and analysis capabilities directly from iOS and Android devices."
  ],
  features: [
    {
      title: "ULTRA-COMPACT DESIGN",
      description: "Minimal footprint for installation in space-constrained applications"
    },
    {
      title: "BLUETOOTH CONNECTIVITY",
      description: "Wireless communication eliminates cable constraints and installation complexity"
    },
    {
      title: "HIGH ACCURACY",
      description: "Precision pressure measurement with integrated temperature compensation"
    },
    {
      title: "ROBUST CONSTRUCTION",
      description: "Stainless steel housing designed for demanding industrial environments"
    },
    {
      title: "MOBILE APP INTEGRATION",
      description: "Seamless integration with Watchlog Bluetooth iOS and Android applications"
    },
    {
      title: "REAL-TIME MONITORING",
      description: "Live pressure data visualization and monitoring capabilities"
    },
    {
      title: "DATA LOGGING",
      description: "Comprehensive recording and export functionality through mobile applications"
    },
    {
      title: "EASY INSTALLATION",
      description: "Simple mounting and configuration with plug-and-play operation"
    }
  ],
  breadcrumbItems: [
    { label: "Products", href: "/products" },
    { label: "Oil Conditioning", href: "/products/oil-conditioning" },
    { label: "Hydrotechnik", href: "/products/oil-conditioning/hydrotechnik" },
    { label: "Watchlog Bluetooth Sensors, Gauges and Mobile Apps", href: "/products/oil-conditioning/hydrotechnik/watchlog-bluetooth-sensors" },
    { label: "4 Sensors Connected Simultaneously", href: "/products/oil-conditioning/hydrotechnik/watchlog-bluetooth-sensors/4-sensors" },
    { label: "WLB-PT Compact Bluetooth Pressure Sensor" }
  ]
};

// WLB-TT Compact Bluetooth Temperature Sensor
export const wlbTTCompactBluetoothTemperatureSensorData: ProductData = {
  id: "wlb-tt-compact-bluetooth-temperature-sensor",
  name: "WLB-TT Compact Bluetooth Temperature Sensor",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  brand: "Hydrotechnik",
  images: [
    {
      src: "/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/1st category/WLB-TT Compact Bluetooth Temperature Sensor/WLB-TT Compact Bluetooth Temperature Sensor.png",
      alt: "WLB-TT Compact Bluetooth Temperature Sensor"
    }
  ],
  description: [
    "The WLB-TT is a compact Bluetooth temperature sensor engineered for wireless temperature monitoring in industrial and mobile applications. This sensor provides high-accuracy temperature measurement with integrated Bluetooth connectivity for cable-free operation.",
    "Designed with a robust construction and compact form factor, the WLB-TT is perfect for monitoring temperatures in hydraulic systems, mobile equipment, and industrial processes where traditional wired sensors pose installation challenges.",
    "The sensor integrates seamlessly with the Watchlog Bluetooth mobile application, enabling real-time temperature monitoring, trend analysis, and data logging from mobile devices."
  ],
  features: [
    {
      title: "COMPACT TEMPERATURE SENSOR",
      description: "Space-efficient design for installation in confined spaces"
    },
    {
      title: "BLUETOOTH WIRELESS",
      description: "Eliminates cable requirements for flexible installation and monitoring"
    },
    {
      title: "HIGH ACCURACY",
      description: "Precision temperature measurement for critical applications"
    },
    {
      title: "INDUSTRIAL DURABILITY",
      description: "Robust construction suitable for harsh operating environments"
    },
    {
      title: "MOBILE COMPATIBILITY",
      description: "Full integration with Watchlog Bluetooth iOS and Android applications"
    },
    {
      title: "REAL-TIME DATA",
      description: "Live temperature monitoring and visualization capabilities"
    },
    {
      title: "TREND ANALYSIS",
      description: "Historical data logging and trend analysis through mobile applications"
    },
    {
      title: "EASY SETUP",
      description: "Simple installation and configuration process"
    }
  ],
  breadcrumbItems: [
    { label: "Products", href: "/products" },
    { label: "Oil Conditioning", href: "/products/oil-conditioning" },
    { label: "Hydrotechnik", href: "/products/oil-conditioning/hydrotechnik" },
    { label: "Watchlog Bluetooth Sensors, Gauges and Mobile Apps", href: "/products/oil-conditioning/hydrotechnik/watchlog-bluetooth-sensors" },
    { label: "4 Sensors Connected Simultaneously", href: "/products/oil-conditioning/hydrotechnik/watchlog-bluetooth-sensors/4-sensors" },
    { label: "WLB-TT Compact Bluetooth Temperature Sensor" }
  ]
};

// Watchlog Bluetooth Mobile App
export const watchlogBluetoothMobileAppData: ProductData = {
  id: "watchlog-bluetooth-mobile-app",
  name: "Watchlog Bluetooth Live View & Datalogging App for iOS and Android",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  brand: "Hydrotechnik",
  images: [
    {
      src: "/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/1st category/Watchlog Bluetooth Live View & Datalogging App for iOS and Android/Watchlog Bluetooth Live View & Datalogging App for iOS and Android.png",
      alt: "Watchlog Bluetooth Mobile App Interface"
    }
  ],
  description: [
    "The Watchlog Bluetooth Live View & Datalogging App transforms your iOS or Android device into a powerful measurement and analysis tool for Watchlog Bluetooth sensors. This comprehensive application provides real-time monitoring, data logging, and analysis capabilities for up to 4 connected sensors simultaneously.",
    "Featuring an intuitive user interface with customizable displays, the app enables users to monitor pressure and temperature measurements in real-time while simultaneously recording data for later analysis. The application supports various data export formats and provides comprehensive visualization tools.",
    "Designed for both field technicians and engineers, the app combines ease of use with professional-grade functionality, making it an essential tool for hydraulic system analysis, mobile equipment monitoring, and industrial measurement applications."
  ],
  features: [
    {
      title: "MULTI-PLATFORM SUPPORT",
      description: "Available for both iOS and Android devices with full feature parity"
    },
    {
      title: "UP TO 4 SENSORS",
      description: "Simultaneously connect and monitor up to 4 Watchlog Bluetooth sensors"
    },
    {
      title: "REAL-TIME DISPLAY",
      description: "Live data visualization with customizable charts, graphs, and numerical displays"
    },
    {
      title: "DATA LOGGING",
      description: "Comprehensive recording capabilities with configurable sampling rates"
    },
    {
      title: "EXPORT FUNCTIONALITY",
      description: "Multiple data export formats for integration with analysis tools"
    },
    {
      title: "CUSTOMIZABLE INTERFACE",
      description: "Flexible display options to suit different monitoring requirements"
    },
    {
      title: "ALARM FUNCTIONS",
      description: "Configurable alarms and alerts for critical parameter monitoring"
    },
    {
      title: "OFFLINE CAPABILITY",
      description: "Continue data logging even when disconnected from network connectivity"
    },
    {
      title: "PROFESSIONAL TOOLS",
      description: "Advanced analysis and reporting features for professional applications"
    },
    {
      title: "USER-FRIENDLY DESIGN",
      description: "Intuitive interface suitable for both field technicians and engineers"
    }
  ],
  breadcrumbItems: [
    { label: "Products", href: "/products" },
    { label: "Oil Conditioning", href: "/products/oil-conditioning" },
    { label: "Hydrotechnik", href: "/products/oil-conditioning/hydrotechnik" },
    { label: "Watchlog Bluetooth Sensors, Gauges and Mobile Apps", href: "/products/oil-conditioning/hydrotechnik/watchlog-bluetooth-sensors" },
    { label: "4 Sensors Connected Simultaneously", href: "/products/oil-conditioning/hydrotechnik/watchlog-bluetooth-sensors/4-sensors" },
    { label: "Watchlog Bluetooth Mobile App" }
  ]
};

// HT-WLBP Watchlog Bluetooth-Plus Pressure Sensor
export const htWLBPBluetoothPlusPressureSensorData: ProductData = {
  id: "ht-wlbp-bluetooth-plus-pressure-sensor",
  name: "HT-WLBP Watchlog Bluetooth-Plus Pressure Sensor",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  brand: "Hydrotechnik",
  images: [
    {
      src: "/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/2nd category/HT-WLBP Watchlog Bluetooth-Plus Pressure Sensor/HT-WLBP Watchlog Bluetooth-Plus Pressure Sensor.png",
      alt: "HT-WLBP Watchlog Bluetooth-Plus Pressure Sensor"
    }
  ],
  description: [
    "The HT-WLBP Watchlog Bluetooth-Plus Pressure Sensor represents the advanced tier of wireless pressure measurement technology, designed for applications requiring up to 12 connected sensors with enhanced calculation capabilities. This sophisticated sensor combines high-accuracy pressure measurement with Bluetooth-Plus connectivity.",
    "Engineered for complex industrial applications, the HT-WLBP features enhanced wireless range, improved reliability, and integration with advanced mobile applications that provide sophisticated analysis and calculation features beyond basic monitoring.",
    "The sensor seamlessly integrates with the Watchlog Bluetooth-Plus mobile application ecosystem, enabling comprehensive multi-sensor monitoring, advanced data analysis, and professional-grade reporting capabilities."
  ],
  features: [
    {
      title: "BLUETOOTH-PLUS TECHNOLOGY",
      description: "Enhanced wireless connectivity with improved range and reliability"
    },
    {
      title: "12-SENSOR CAPABILITY",
      description: "Part of a system supporting up to 12 connected sensors simultaneously"
    },
    {
      title: "HIGH-ACCURACY MEASUREMENT",
      description: "Precision pressure measurement suitable for critical applications"
    },
    {
      title: "ADVANCED INTEGRATION",
      description: "Seamless integration with sophisticated mobile applications"
    },
    {
      title: "ENHANCED RELIABILITY",
      description: "Improved wireless communication for demanding industrial environments"
    },
    {
      title: "CALCULATION FEATURES",
      description: "Supports advanced calculation capabilities through mobile applications"
    },
    {
      title: "PROFESSIONAL GRADE",
      description: "Designed for complex industrial and engineering applications"
    },
    {
      title: "ROBUST CONSTRUCTION",
      description: "Industrial-grade housing suitable for harsh operating conditions"
    }
  ],
  breadcrumbItems: [
    { label: "Products", href: "/products" },
    { label: "Oil Conditioning", href: "/products/oil-conditioning" },
    { label: "Hydrotechnik", href: "/products/oil-conditioning/hydrotechnik" },
    { label: "Watchlog Bluetooth Sensors, Gauges and Mobile Apps", href: "/products/oil-conditioning/hydrotechnik/watchlog-bluetooth-sensors" },
    { label: "12 Sensors Connected with Advanced Features", href: "/products/oil-conditioning/hydrotechnik/watchlog-bluetooth-sensors/12-sensors" },
    { label: "HT-WLBP Bluetooth-Plus Pressure Sensor" }
  ]
};

// Watchlog Bluetooth-Plus Mobile App
export const watchlogBluetoothPlusMobileAppData: ProductData = {
  id: "watchlog-bluetooth-plus-mobile-app",
  name: "Watchlog Bluetooth-Plus iOS and Android App",
  category: "oil-conditioning",
  subcategory: "hydrotechnik",
  brand: "Hydrotechnik",
  images: [
    {
      src: "/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/2nd category/Watchlog Bluetooth-Plus iOS and Android App/Watchlog Bluetooth-Plus iOS and Android App.png",
      alt: "Watchlog Bluetooth-Plus Mobile App Interface"
    }
  ],
  description: [
    "The Watchlog Bluetooth-Plus iOS and Android App represents the pinnacle of mobile measurement technology, providing sophisticated monitoring and analysis capabilities for up to 12 connected Bluetooth-Plus sensors simultaneously. This advanced application extends far beyond basic data visualization to include comprehensive calculation features and professional-grade analysis tools.",
    "Designed for complex industrial applications, the app supports multiple sensor types including pressure, level, force, and temperature sensors, all within a unified interface. Advanced calculation features enable real-time analysis of complex measurement scenarios directly from mobile devices.",
    "The application combines professional functionality with intuitive operation, making it suitable for both field technicians and engineers who require sophisticated measurement and analysis capabilities in a mobile platform."
  ],
  features: [
    {
      title: "12-SENSOR CAPACITY",
      description: "Simultaneously connect and monitor up to 12 Bluetooth-Plus sensors"
    },
    {
      title: "ADVANCED CALCULATIONS",
      description: "Sophisticated calculation features for complex analysis and reporting"
    },
    {
      title: "MULTI-PARAMETER SUPPORT",
      description: "Supports pressure, level, force, and temperature measurements in one application"
    },
    {
      title: "PROFESSIONAL ANALYSIS",
      description: "Advanced data analysis tools suitable for engineering applications"
    },
    {
      title: "ENHANCED CONNECTIVITY",
      description: "Bluetooth-Plus technology for improved range and reliability"
    },
    {
      title: "REAL-TIME PROCESSING",
      description: "Live calculation and analysis of measurement data"
    },
    {
      title: "COMPREHENSIVE REPORTING",
      description: "Professional-grade reporting capabilities with multiple export formats"
    },
    {
      title: "CUSTOMIZABLE INTERFACE",
      description: "Flexible display options to accommodate complex monitoring scenarios"
    },
    {
      title: "CROSS-PLATFORM",
      description: "Full feature parity across iOS and Android platforms"
    },
    {
      title: "INDUSTRIAL GRADE",
      description: "Designed for demanding industrial and professional applications"
    }
  ],
  breadcrumbItems: [
    { label: "Products", href: "/products" },
    { label: "Oil Conditioning", href: "/products/oil-conditioning" },
    { label: "Hydrotechnik", href: "/products/oil-conditioning/hydrotechnik" },
    { label: "Watchlog Bluetooth Sensors, Gauges and Mobile Apps", href: "/products/oil-conditioning/hydrotechnik/watchlog-bluetooth-sensors" },
    { label: "12 Sensors Connected with Advanced Features", href: "/products/oil-conditioning/hydrotechnik/watchlog-bluetooth-sensors/12-sensors" },
    { label: "Watchlog Bluetooth-Plus Mobile App" }
  ]
};