export interface Application {
  id: string;
  title: string;
  subtitle?: string;
  images?: string[];
  requirements: string[];
  solutions: string[];
  benefits?: string[];
  commercialBenefit?: string[];
  highlights?: string[];
  additionalInfo?: {
    title: string;
    image?: string;
    content: string[];
  };
  industry: string[];
}

export const applications: Application[] = [
  {
    id: "chiller-compressors",
    title: "Chiller Compressors",
    subtitle: "Food Processing Continuous - Oil Condition Monitoring",
    images: ["applications/chiller compressors/1.png"],
    requirements: [
      " At one of the UK's largest supermarket chilled storage centres,there are two twin screw compressors operating 24x7, to ensure the temperature is maintained within a controlled range. A catastrophic failure occurred on one of the two compressors and it was decided that a live condition based monitoring system would be an effective solution to mitigate future risk.",
    ],
    solutions: [
      "Tan Delta worked closely with the engineering team on-site to examine all of the potential methods for monitoring these assemblies. It was quickly concluded that regular oil sampling would give a good indication of the condition of the critical compressors, however it would not be practical or cost effective",
    ],
    benefits: [
      "Tan Delta suggested the installation of their patented Oil Quality Sensor (OQSx) which would continuously monitor the overall oil condition and oil temperature. The sensor was wired back into the \"MachineGuard\" data logging and communication system, enabling the client to set warning and alarm levels within the system.",
    ],
    commercialBenefit: [
      " The OQSx warning levels have pre-empted and helped prevent a second potential catastrophic failure. The site has seen financial savings of £74K per annum since adopting sensor technologies.",
    ],
    highlights: [
      "24/7 Monitoring: Continuos monitoring condition of critical chiller motors and compressors, without the need of oil samples.",
      "Integrated Technology: Oil Quuality Sensor (OQSx) fitted into the compressors to continuosly monitor the overall oil condition.",
      "Custom Setup: The OQSx was calibrated to match the specalist synthetic oils with an ammonia depletion advice.",
      "Cost Effective: Cost of maintenance significantly reduced and unplanned downtime eradicated.",
    ],
    additionalInfo: {
      title: "Service and Support from Tan Delta",
      content: [
        "At one of the UK's largest supermarket chilled storage centres,there are two twin screw compressors operating 24x7, to ensure the temperature is maintained within a controlled range. A catastrophic failure occurred on one of the two compressors and it was decided that a live condition based monitoring system would be an effective solution to mitigate future risk.",
      ],
    },
    industry: ["Food Processing"],
  },
  {
    id: "concrete",
    title: "Concrete",
    subtitle: "Industrial Condition Monitoring",
    images: ["/images/concrete.jpg"],
    requirements: [
      "The continued safe operation of a concrete press operated by a leading UK brick manufacturer is vital to their business. The dangerous environment created by the press means that direct regular access is limited, and requires the machine to be powered down which negatively affects production.",
      "For this reason, a remote monitoring solution was required to facilitate safe condition monitoring of the hyraulic system as well as fault finding without production downtime.",
      "Hydrotechnik UK Test Engineering Ltd were tasked with providing a solution."
    ],
    solutions: ["A cloud-based solution was decided upon. Using this technology, sensor data can be analysed graphically online from any location."],
    additionalInfo: {
      title: "Additional Information",
      content: [
        "Cleanliness: The Ptrick Particle counter was placed in parallel with the return line back to tank, to measure the particle contamination in the oil.",
        "Pressure: Three of our HySense PR140 series pressure sensors were installed into valves, and another was inserted into the test point of our flowmeter.",
        "Flow & Temp: Our HySense QT510 flowmeter, along with our HySense TE300 temperature sensor were placed in-line with the main feed from the pump to the manifold.",
        "Watchlog Pro Cloud Monitoring: As the different valves open for different sections of the pressing and stacking cycles, the pressure can be seen on the cloud platform to rise at different times. The sensors were connected to the Watchlog Pro via a junction box with 5m cables. Powered by mains input, the voltage was reduced and transformed to 240VDC to power the system. A single cable then connected the Watchlog Pro unit to the junction unit."
      ]
    },
    industry: ["Concrete"]
  },
  {
    id: "concrete-delivery-precision",
    title: "Concrete Delivery Precision",
    images: ["/images/concrete-delivery-precision.jpg"],
    requirements: ["Concrete Delivery Precision requirement"],
    solutions: ["Concrete Delivery Precision solution"],
    benefits: ["Concrete Delivery Precision benefit"],
    additionalInfo: {
      title: "Concrete Delivery Precision additional info",
      content: ["Concrete Delivery Precision additional info"],
    },
    industry: ["Concrete Delivery Precision industry"],
  },
  {
    id: "electricity-transformers",
    title: "Electricity Transformers",
    images: ["/images/electricity-transformers.jpg"],
    requirements: ["Electricity Transformers requirement"],
    solutions: ["Electricity Transformers solution"],
    benefits: ["Electricity Transformers benefit"],
    additionalInfo: {
      title: "Electricity Transformers additional info",
      content: ["Electricity Transformers additional info"],
    },
    industry: ["Electricity Transformers industry"],
  },
  {
    id: "engine-monitoring",
    title: "Engine Monitoring",
    images: ["/images/engine-monitoring.jpg"],
    requirements: ["Engine Monitoring requirement"],
    solutions: ["Engine Monitoring solution"],
    benefits: ["Engine Monitoring benefit"],
    additionalInfo: {
      title: "Engine Monitoring additional info",
      content: ["Engine Monitoring additional info"],
    },
    industry: ["Engine Monitoring industry"],
  },
  {
    id: "environment-agency",
    title: "Environment Agency",
    images: ["/images/environment-agency.jpg"],
    requirements: ["Environment Agency requirement"],
    solutions: ["Environment Agency solution"],
    benefits: ["Environment Agency benefit"],
    additionalInfo: {
      title: "Environment Agency additional info",
      content: ["Environment Agency additional info"],
    },
    industry: ["Environment Agency industry"],
  },
  {
    id: "gearbox",
    title: "Gearbox",
    images: ["/images/gearbox.jpg"],
    requirements: ["Gearbox requirement"],
    solutions: ["Gearbox solution"],
    benefits: ["Gearbox benefit"],
    additionalInfo: {
      title: "Gearbox additional info",
      content: ["Gearbox additional info"],
    },
    industry: ["Gearbox industry"],
  },
  {
    id: "genset-engine",
    title: "Genset Engine",
    images: ["/images/genset-engine.jpg"],
    requirements: ["Genset Engine requirement"],
    solutions: ["Genset Engine solution"],
    benefits: ["Genset Engine benefit"],
    additionalInfo: {
      title: "Genset Engine additional info",
      content: ["Genset Engine additional info"],
    },
    industry: ["Genset Engine industry"],
  },
  {
    id: "heavy-lift-cranes",
    title: "Heavy Lift Cranes",
    images: ["/images/heavy-lift-cranes.jpg"],
    requirements: ["Heavy Lift Cranes requirement"],
    solutions: ["Heavy Lift Cranes solution"],
    benefits: ["Heavy Lift Cranes benefit"],
    additionalInfo: {
      title: "Heavy Lift Cranes additional info",
      content: ["Heavy Lift Cranes additional info"],
    },
    industry: ["Heavy Lift Cranes industry"],
  },
  {
    id: "heavy-mining-equipment",
    title: "Heavy Mining Equipment",
    images: ["/images/heavy-mining-equipment.jpg"],
    requirements: ["Heavy Mining Equipment requirement"],
    solutions: ["Heavy Mining Equipment solution"],
    benefits: ["Heavy Mining Equipment benefit"],
    additionalInfo: {
      title: "Heavy Mining Equipment additional info",
      content: ["Heavy Mining Equipment additional info"],
    },
    industry: ["Heavy Mining Equipment industry"],
  },
  {
    id: "hydraulic",
    title: "Hydraulic",
    images: ["/images/hydraulic.jpg"],
    requirements: ["Hydraulic requirement"],
    solutions: ["Hydraulic solution"],
    benefits: ["Hydraulic benefit"],
    additionalInfo: {
      title: "Hydraulic additional info",
      content: ["Hydraulic additional info"],
    },
    industry: ["Hydraulic industry"],
  },
  {
    id: "large-marine-engine",
    title: "Large Marine Engine",
    images: ["/images/large-marine-engine.jpg"],
    requirements: ["Large Marine Engine requirement"],
    solutions: ["Large Marine Engine solution"],
    benefits: ["Large Marine Engine benefit"],
    additionalInfo: {
      title: "Large Marine Engine additional info",
      content: ["Large Marine Engine additional info"],
    },
    industry: ["Large Marine Engine industry"],
  },
  {
    id: "natural-gas-engine",
    title: "Natural Gas Engine",
    images: ["/images/natural-gas-engine.jpg"],
    requirements: ["Natural Gas Engine requirement"],
    solutions: ["Natural Gas Engine solution"],
    benefits: ["Natural Gas Engine benefit"],
    additionalInfo: {
      title: "Natural Gas Engine additional info",
      content: ["Natural Gas Engine additional info"],
    },
    industry: ["Natural Gas Engine industry"],
  },
  {
    id: "railway-locomotive",
    title: "Railway Locomotive",
    images: ["/images/railway-locomotive.jpg"],
    requirements: ["Railway Locomotive requirement"],
    solutions: ["Railway Locomotive solution"],
    benefits: ["Railway Locomotive benefit"],
    additionalInfo: {
      title: "Railway Locomotive additional info",
      content: ["Railway Locomotive additional info"],
    },
    industry: ["Railway Locomotive industry"],
  },
  {
    id: "sheffield-forgemasters",
    title: "Sheffield Forgemaster's",
    images: ["/images/sheffield-forgemasters.jpg"],
    requirements: ["Sheffield Forgemaster's requirement"],
    solutions: ["Sheffield Forgemaster's solution"],
    benefits: ["Sheffield Forgemaster's benefit"],
    additionalInfo: {
      title: "Sheffield Forgemaster's additional info",
      content: ["Sheffield Forgemaster's additional info"],
    },
    industry: ["Sheffield Forgemaster's industry"],
  },
  {
    id: "wind-turbine-gearbox",
    title: "Wind Turbine Gearbox",
    images: ["/images/wind-turbine-gearbox.jpg"],
    requirements: ["Wind Turbine Gearbox requirement"],
    solutions: ["Wind Turbine Gearbox solution"],
    benefits: ["Wind Turbine Gearbox benefit"],
    additionalInfo: {
      title: "Wind Turbine Gearbox additional info",
      content: ["Wind Turbine Gearbox additional info"],
    },
    industry: ["Wind Turbine Gearbox industry"],
  },
  {
    id: "work-boat-engine-monitoring-kit",
    title: "Work Boat Engine Monitoring Kit",
    images: ["/images/work-boat-engine-monitoring-kit.jpg"],
    requirements: ["Work Boat Engine Monitoring Kit requirement"],
    solutions: ["Work Boat Engine Monitoring Kit solution"],
    benefits: ["Work Boat Engine Monitoring Kit benefit"],
    additionalInfo: {
      title: "Work Boat Engine Monitoring Kit additional info",
      content: ["Work Boat Engine Monitoring Kit additional info"],
    },
    industry: ["Work Boat Engine Monitoring Kit industry"],
  },
];

export function getApplicationById(id: string) {
  return applications.find((app) => app.id === id);
}
