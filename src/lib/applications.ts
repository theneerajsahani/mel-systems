export interface Application {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'industrial' | 'energy' | 'transportation' | 'marine' | 'construction' | 'agriculture' | 'mining' | 'aerospace';
  gradient: string;
  featured: boolean; // To mark applications for home page carousel
  industries: string[];
  keyBenefits: string[];
  relatedProducts?: string[];
}

export const applications: Application[] = [
  {
    id: 'wind-energy',
    title: 'Wind Energy',
    description: 'Advanced monitoring solutions for wind turbine gearboxes and hydraulic systems to ensure optimal performance and prevent costly downtime.',
    image: '/images/applications/wind-energy.jpg',
    category: 'energy',
    gradient: 'from-green-400 to-blue-500',
    featured: true,
    industries: ['Renewable Energy', 'Power Generation'],
    keyBenefits: [
      'Real-time oil quality monitoring',
      'Predictive maintenance alerts',
      'Extended component life',
      'Reduced maintenance costs'
    ],
    relatedProducts: ['OQSx-G2', 'Particle Pal', 'Watchlog Sensors']
  },
  {
    id: 'marine-vessels',
    title: 'Marine Vessels',
    description: 'Comprehensive fluid monitoring solutions for ship engines, hydraulics, and transmission systems in harsh marine environments.',
    image: '/images/applications/marine.jpg',
    category: 'marine',
    gradient: 'from-blue-400 to-cyan-500',
    featured: true,
    industries: ['Maritime', 'Shipping', 'Offshore'],
    keyBenefits: [
      'Saltwater corrosion detection',
      'Engine oil condition monitoring',
      'Hydraulic system protection',
      'Remote monitoring capabilities'
    ],
    relatedProducts: ['OQSx-G2 HAZ', 'Particle Pal Plus', 'Watchlog Pro']
  },
  {
    id: 'mining-equipment',
    title: 'Mining Equipment',
    description: 'Heavy-duty monitoring systems for excavators, dump trucks, and processing equipment operating in extreme mining conditions.',
    image: '/images/applications/mining.jpg',
    category: 'mining',
    gradient: 'from-orange-400 to-red-500',
    featured: true,
    industries: ['Mining', 'Quarrying', 'Material Handling'],
    keyBenefits: [
      'Dust contamination detection',
      'Heavy load monitoring',
      'Component wear analysis',
      'Increased equipment uptime'
    ],
    relatedProducts: ['Digital Imaging Particle Counter', 'MOT Kit', 'OQDe-G2']
  },
  {
    id: 'construction-machinery',
    title: 'Construction Machinery',
    description: 'Robust monitoring solutions for bulldozers, cranes, and other construction equipment to maximize productivity.',
    image: '/images/applications/construction.jpg',
    category: 'construction',
    gradient: 'from-yellow-400 to-orange-500',
    featured: true,
    industries: ['Construction', 'Infrastructure', 'Heavy Machinery'],
    keyBenefits: [
      'Hydraulic system optimization',
      'Engine protection',
      'Maintenance scheduling',
      'Equipment reliability'
    ],
    relatedProducts: ['Crane Camera', 'Watchlog Sensors', 'OQSx-G2']
  },
  {
    id: 'power-generation',
    title: 'Power Generation',
    description: 'Critical monitoring systems for power plants, generators, and electrical grid infrastructure.',
    image: '/images/applications/power-generation.jpg',
    category: 'energy',
    gradient: 'from-purple-400 to-pink-500',
    featured: true,
    industries: ['Power Plants', 'Electrical Grid', 'Energy Storage'],
    keyBenefits: [
      'Transformer oil monitoring',
      'Generator protection',
      'Grid stability assurance',
      'Emergency response systems'
    ],
    relatedProducts: ['OQSx-G2', 'Gateway Hub', 'SENSE3 Gateway Kit']
  },
  {
    id: 'agriculture-equipment',
    title: 'Agricultural Equipment',
    description: 'Specialized monitoring for tractors, harvesters, and irrigation systems to ensure optimal farming operations.',
    image: '/images/applications/agriculture.jpg',
    category: 'agriculture',
    gradient: 'from-green-500 to-lime-400',
    featured: false,
    industries: ['Agriculture', 'Farming', 'Food Production'],
    keyBenefits: [
      'Seasonal equipment protection',
      'Hydraulic system monitoring',
      'Fuel quality analysis',
      'Precision farming support'
    ],
    relatedProducts: ['Particle Pal', 'Watchlog USB', 'Digital Monitors']
  },
  {
    id: 'aerospace-systems',
    title: 'Aerospace Systems',
    description: 'High-precision monitoring solutions for aircraft hydraulics, fuel systems, and ground support equipment.',
    image: '/images/applications/aerospace.jpg',
    category: 'aerospace',
    gradient: 'from-blue-600 to-indigo-500',
    featured: false,
    industries: ['Aviation', 'Space', 'Defense'],
    keyBenefits: [
      'Flight safety assurance',
      'Fuel contamination detection',
      'Hydraulic system reliability',
      'Maintenance optimization'
    ],
    relatedProducts: ['Particle Pal Plus', 'S120 Digital Counter', 'Watchlog Pro']
  },
  {
    id: 'rail-transportation',
    title: 'Rail Transportation',
    description: 'Comprehensive monitoring for locomotives, rail cars, and railway infrastructure systems.',
    image: '/images/applications/rail.jpg',
    category: 'transportation',
    gradient: 'from-gray-500 to-blue-600',
    featured: false,
    industries: ['Railways', 'Public Transport', 'Freight'],
    keyBenefits: [
      'Engine oil condition monitoring',
      'Brake system analysis',
      'Transmission protection',
      'Schedule reliability'
    ],
    relatedProducts: ['Digital camera', 'Rear view cameras', 'Watchlog Sensors']
  },
  {
    id: 'oil-gas-drilling',
    title: 'Oil & Gas Drilling',
    description: 'Specialized monitoring for drilling rigs, pumps, and extraction equipment in oil and gas operations.',
    image: '/images/applications/oil-gas.jpg',
    category: 'energy',
    gradient: 'from-black to-gray-700',
    featured: false,
    industries: ['Oil & Gas', 'Petrochemical', 'Drilling'],
    keyBenefits: [
      'Drilling fluid monitoring',
      'Equipment protection',
      'Safety compliance',
      'Operational efficiency'
    ],
    relatedProducts: ['OQSx-G2 HAZ', 'MOT Kit', 'Gateway OQTg']
  },
  {
    id: 'manufacturing-plants',
    title: 'Manufacturing Plants',
    description: 'Industrial monitoring solutions for production lines, robotics, and automated manufacturing systems.',
    image: '/images/applications/manufacturing.jpg',
    category: 'industrial',
    gradient: 'from-teal-400 to-blue-500',
    featured: false,
    industries: ['Manufacturing', 'Automation', 'Production'],
    keyBenefits: [
      'Production line optimization',
      'Robotic system monitoring',
      'Quality assurance',
      'Downtime prevention'
    ],
    relatedProducts: ['Digital Monitors', 'Video control units', 'Transmission']
  },
  {
    id: 'forestry-equipment',
    title: 'Forestry Equipment',
    description: 'Rugged monitoring systems for logging equipment, wood processing machinery, and forest management vehicles.',
    image: '/images/applications/forestry.jpg',
    category: 'industrial',
    gradient: 'from-green-600 to-brown-500',
    featured: false,
    industries: ['Forestry', 'Logging', 'Wood Processing'],
    keyBenefits: [
      'Heavy-duty protection',
      'Contamination detection',
      'Equipment longevity',
      'Environmental compliance'
    ],
    relatedProducts: ['Particle Pal', 'Watchlog Bluetooth', 'Digital camera']
  },
  {
    id: 'waste-management',
    title: 'Waste Management',
    description: 'Monitoring solutions for waste collection vehicles, recycling equipment, and treatment facilities.',
    image: '/images/applications/waste-management.jpg',
    category: 'industrial',
    gradient: 'from-green-500 to-yellow-600',
    featured: false,
    industries: ['Waste Management', 'Recycling', 'Environmental'],
    keyBenefits: [
      'Fleet monitoring',
      'Equipment reliability',
      'Environmental protection',
      'Cost optimization'
    ],
    relatedProducts: ['Front camera system', 'Monitors', 'Watchlog Pro']
  },
  {
    id: 'food-processing',
    title: 'Food Processing',
    description: 'Hygienic monitoring systems for food production equipment and processing machinery.',
    image: '/images/applications/food-processing.jpg',
    category: 'industrial',
    gradient: 'from-orange-300 to-red-400',
    featured: false,
    industries: ['Food Processing', 'Beverage', 'Packaging'],
    keyBenefits: [
      'Food safety compliance',
      'Hygiene monitoring',
      'Equipment efficiency',
      'Quality control'
    ],
    relatedProducts: ['Digital Monitors', 'S120 Digital Counter', 'Gateway Hub']
  },
  {
    id: 'pharmaceutical-manufacturing',
    title: 'Pharmaceutical Manufacturing',
    description: 'Precision monitoring for pharmaceutical production equipment and cleanroom environments.',
    image: '/images/applications/pharmaceutical.jpg',
    category: 'industrial',
    gradient: 'from-blue-400 to-purple-500',
    featured: false,
    industries: ['Pharmaceuticals', 'Biotechnology', 'Medical Devices'],
    keyBenefits: [
      'Regulatory compliance',
      'Contamination prevention',
      'Product quality assurance',
      'Process validation'
    ],
    relatedProducts: ['Particle Pal Plus', 'S120 Digital Counter', 'SENSE2 Display']
  },
  {
    id: 'data-centers',
    title: 'Data Centers',
    description: 'Critical monitoring for cooling systems, backup generators, and infrastructure equipment.',
    image: '/images/applications/data-centers.jpg',
    category: 'industrial',
    gradient: 'from-cyan-400 to-blue-600',
    featured: false,
    industries: ['Technology', 'Cloud Computing', 'Telecommunications'],
    keyBenefits: [
      'System reliability',
      'Cooling efficiency',
      'Backup power monitoring',
      'Uptime maximization'
    ],
    relatedProducts: ['Digital Monitors', 'Watchlog Pro', 'Gateway Hub']
  },
  {
    id: 'steel-production',
    title: 'Steel Production',
    description: 'Heavy-duty monitoring for steel mills, rolling equipment, and metalworking machinery.',
    image: '/images/applications/steel-production.jpg',
    category: 'industrial',
    gradient: 'from-gray-600 to-red-600',
    featured: false,
    industries: ['Steel Production', 'Metallurgy', 'Heavy Industry'],
    keyBenefits: [
      'High-temperature monitoring',
      'Equipment protection',
      'Production efficiency',
      'Safety compliance'
    ],
    relatedProducts: ['OQSx-G2', 'Digital Imaging Counter', 'MOT Kit']
  },
  {
    id: 'cement-production',
    title: 'Cement Production',
    description: 'Robust monitoring systems for cement kilns, crushers, and material handling equipment.',
    image: '/images/applications/cement.jpg',
    category: 'industrial',
    gradient: 'from-stone-400 to-gray-600',
    featured: false,
    industries: ['Cement', 'Building Materials', 'Construction Materials'],
    keyBenefits: [
      'Dust environment protection',
      'Kiln monitoring',
      'Equipment longevity',
      'Process optimization'
    ],
    relatedProducts: ['Particle Pal', 'Watchlog Sensors', 'Digital Monitors']
  },
  {
    id: 'chemical-processing',
    title: 'Chemical Processing',
    description: 'Specialized monitoring for chemical plants, reactors, and processing equipment.',
    image: '/images/applications/chemical.jpg',
    category: 'industrial',
    gradient: 'from-purple-500 to-pink-500',
    featured: false,
    industries: ['Chemical Processing', 'Petrochemicals', 'Specialty Chemicals'],
    keyBenefits: [
      'Safety monitoring',
      'Process control',
      'Equipment protection',
      'Regulatory compliance'
    ],
    relatedProducts: ['OQSx-G2 HAZ', 'Gateway OQTg', 'SENSE3 Kit']
  },
  {
    id: 'textile-manufacturing',
    title: 'Textile Manufacturing',
    description: 'Monitoring solutions for textile machinery, dyeing equipment, and production lines.',
    image: '/images/applications/textile.jpg',
    category: 'industrial',
    gradient: 'from-pink-400 to-purple-400',
    featured: false,
    industries: ['Textile', 'Fashion', 'Apparel Manufacturing'],
    keyBenefits: [
      'Production efficiency',
      'Quality control',
      'Equipment reliability',
      'Color consistency'
    ],
    relatedProducts: ['Digital Monitors', 'Watchlog USB', 'Video control units']
  },
  {
    id: 'paper-production',
    title: 'Paper Production',
    description: 'Comprehensive monitoring for paper mills, pulping equipment, and printing machinery.',
    image: '/images/applications/paper.jpg',
    category: 'industrial',
    gradient: 'from-amber-300 to-brown-500',
    featured: false,
    industries: ['Paper & Pulp', 'Printing', 'Packaging'],
    keyBenefits: [
      'Process optimization',
      'Quality assurance',
      'Equipment protection',
      'Environmental monitoring'
    ],
    relatedProducts: ['S120 Digital Counter', 'Watchlog Pro', 'Digital camera']
  },
  {
    id: 'automotive-manufacturing',
    title: 'Automotive Manufacturing',
    description: 'Advanced monitoring for automotive assembly lines, paint systems, and testing equipment.',
    image: '/images/applications/automotive.jpg',
    category: 'industrial',
    gradient: 'from-red-500 to-orange-500',
    featured: false,
    industries: ['Automotive', 'Assembly', 'Quality Testing'],
    keyBenefits: [
      'Assembly line monitoring',
      'Paint quality control',
      'Testing accuracy',
      'Production efficiency'
    ],
    relatedProducts: ['Digital Monitors', 'Crane Camera', 'Video control units']
  },
  {
    id: 'water-treatment',
    title: 'Water Treatment',
    description: 'Monitoring solutions for water treatment plants, pumping stations, and distribution systems.',
    image: '/images/applications/water-treatment.jpg',
    category: 'industrial',
    gradient: 'from-blue-300 to-teal-500',
    featured: false,
    industries: ['Water Treatment', 'Municipal Services', 'Environmental'],
    keyBenefits: [
      'Water quality monitoring',
      'System efficiency',
      'Compliance assurance',
      'Infrastructure protection'
    ],
    relatedProducts: ['Particle Pal Water Sensor', 'Watchlog Flow Sensors', 'Gateway Hub']
  },
  {
    id: 'logistics-warehousing',
    title: 'Logistics & Warehousing',
    description: 'Smart monitoring for forklifts, conveyor systems, and automated storage equipment.',
    image: '/images/applications/logistics.jpg',
    category: 'transportation',
    gradient: 'from-indigo-400 to-purple-500',
    featured: false,
    industries: ['Logistics', 'Warehousing', 'Distribution'],
    keyBenefits: [
      'Fleet management',
      'Equipment efficiency',
      'Safety monitoring',
      'Operational optimization'
    ],
    relatedProducts: ['Fork Camera', 'Digital Monitors', 'Rear view cameras']
  },
  {
    id: 'renewable-energy-storage',
    title: 'Energy Storage Systems',
    description: 'Advanced monitoring for battery systems, energy storage facilities, and grid integration equipment.',
    image: '/images/applications/energy-storage.jpg',
    category: 'energy',
    gradient: 'from-emerald-400 to-teal-500',
    featured: false,
    industries: ['Energy Storage', 'Grid Integration', 'Renewable Energy'],
    keyBenefits: [
      'Battery health monitoring',
      'Grid stability',
      'Energy efficiency',
      'Safety compliance'
    ],
    relatedProducts: ['SENSE3 Gateway Kit', 'Watchlog Pro', 'Gateway Hub']
  },
  {
    id: 'public-transportation',
    title: 'Public Transportation',
    description: 'Comprehensive monitoring for buses, trains, and transit system infrastructure.',
    image: '/images/applications/public-transport.jpg',
    category: 'transportation',
    gradient: 'from-blue-500 to-green-500',
    featured: false,
    industries: ['Public Transit', 'Municipal Transport', 'Urban Mobility'],
    keyBenefits: [
      'Fleet reliability',
      'Passenger safety',
      'Schedule optimization',
      'Maintenance efficiency'
    ],
    relatedProducts: ['Digital camera', 'Front camera system', 'Monitors']
  }
];

// Helper functions
export const getFeaturedApplications = (): Application[] => {
  return applications.filter(app => app.featured);
};

export const getApplicationsByCategory = (category: Application['category']): Application[] => {
  return applications.filter(app => app.category === category);
};

export const getApplicationById = (id: string): Application | undefined => {
  return applications.find(app => app.id === id);
};

export const getAllCategories = (): Application['category'][] => {
  return ['industrial', 'energy', 'transportation', 'marine', 'construction', 'agriculture', 'mining', 'aerospace'];
};

export const getApplicationsByIndustry = (industry: string): Application[] => {
  return applications.filter(app => 
    app.industries.some(ind => ind.toLowerCase().includes(industry.toLowerCase()))
  );
};
