import { TechnicalSpecsSection } from "@/components/TechnicalSpecsTable"

// OQSx-G2 Oil Quality Sensor specifications
export const oqsxG2OilQualitySensorSpecs: TechnicalSpecsSection[] = [
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
]

// You can add more product specifications here
export const particlePalSpecs: TechnicalSpecsSection[] = [
  // Add Particle Pal specifications when needed
]

// Export all product specs for easy access
export const productSpecs = {
  oqsxG2OilQualitySensor: oqsxG2OilQualitySensorSpecs,
  
  // Add more products as you create them
}