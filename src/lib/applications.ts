export interface Application {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'industrial' | 'energy' | 'transportation' | 'marine' | 'construction' | 'agriculture' | 'mining' | 'infrastructure';
  gradient: string;
  featured: boolean;
  industries: string[];
  keyBenefits: string[];
  relatedProducts?: string[];
}

export const applications: Application[] = [
  {
    id: 'concrete-slab-press',
    title: 'Concrete Slab Press',
    description: 'Advanced hydraulic monitoring for concrete slab pressing operations ensuring consistent quality and optimal performance.',
    image: '/images/applications/concrete-slab-press.jpg',
    category: 'construction',
    gradient: 'from-gray-400 to-gray-600',
    featured: true,
    industries: ['Construction', 'Precast Concrete', 'Manufacturing'],
    keyBenefits: [
      'Hydraulic pressure monitoring',
      'Quality consistency',
      'Reduced downtime',
      'Improved efficiency'
    ],
    relatedProducts: ['Watchlog Pressure Sensors', 'Hydraulic Monitoring']
  },
  {
    id: 'concrete-delivery-precision',
    title: 'Concrete Delivery Precision',
    description: 'Precision monitoring systems for concrete delivery processes with enhanced accuracy and consistency controls.',
    image: '/images/applications/concrete-delivery.jpg',
    category: 'construction',
    gradient: 'from-orange-400 to-red-500',
    featured: false,
    industries: ['Construction', 'Ready Mix Concrete', 'Quality Control'],
    keyBenefits: [
      'Delivery precision monitoring',
      'Quality assurance',
      'Process optimization',
      'Real-time feedback'
    ],
    relatedProducts: ['Pressure Sensors', 'Flow Monitoring']
  },
  {
    id: 'flood-gate-pressure-monitoring',
    title: 'Flood Gate Pressure Monitoring',
    description: 'Critical pressure monitoring systems for flood control gates ensuring reliable operation during emergency situations.',
    image: '/images/applications/flood-gate.jpg',
    category: 'infrastructure',
    gradient: 'from-blue-400 to-blue-600',
    featured: true,
    industries: ['Water Management', 'Infrastructure', 'Emergency Services'],
    keyBenefits: [
      'Emergency response readiness',
      'Hydraulic system reliability',
      'Remote monitoring',
      'Preventive maintenance'
    ],
    relatedProducts: ['Watchlog Wireless Sensors', 'Remote Monitoring']
  },
  {
    id: 'industrial-engine',
    title: 'Industrial Engine',
    description: 'Comprehensive engine monitoring solutions for industrial applications with oil quality and performance tracking.',
    image: '/images/applications/industrial-engine.jpg',
    category: 'industrial',
    gradient: 'from-indigo-400 to-purple-500',
    featured: true,
    industries: ['Manufacturing', 'Industrial', 'Power Generation'],
    keyBenefits: [
      'Engine oil condition monitoring',
      'Performance optimization',
      'Predictive maintenance',
      'Extended engine life'
    ],
    relatedProducts: ['OQSx-G2', 'Particle Pal', 'Oil Quality Sensors']
  },
  {
    id: 'natural-gas-engine',
    title: 'Natural Gas Engine',
    description: 'Specialized monitoring systems for natural gas engines with focus on oil quality and combustion efficiency.',
    image: '/images/applications/natural-gas-engine.jpg',
    category: 'energy',
    gradient: 'from-green-400 to-teal-500',
    featured: false,
    industries: ['Energy', 'Power Generation', 'Gas Processing'],
    keyBenefits: [
      'Combustion efficiency monitoring',
      'Oil degradation tracking',
      'Emission optimization',
      'Fuel efficiency improvement'
    ],
    relatedProducts: ['Gas Engine Monitoring', 'OQSx-G2']
  },
  {
    id: 'chiller-compressors',
    title: 'Chiller Compressors',
    description: 'Advanced monitoring for chiller compressor systems ensuring optimal cooling performance and energy efficiency.',
    image: '/images/applications/chiller-compressors.jpg',
    category: 'industrial',
    gradient: 'from-cyan-400 to-blue-500',
    featured: false,
    industries: ['HVAC', 'Refrigeration', 'Industrial Cooling'],
    keyBenefits: [
      'Refrigerant monitoring',
      'Energy efficiency optimization',
      'Compressor protection',
      'System reliability'
    ],
    relatedProducts: ['Temperature Sensors', 'Pressure Monitoring']
  },
  {
    id: 'electricity-transformers',
    title: 'Electricity Transformers',
    description: 'Critical monitoring systems for electrical transformers with oil quality and thermal management capabilities.',
    image: '/images/applications/transformers.jpg',
    category: 'energy',
    gradient: 'from-yellow-400 to-orange-500',
    featured: true,
    industries: ['Utilities', 'Power Distribution', 'Electrical Grid'],
    keyBenefits: [
      'Transformer oil monitoring',
      'Thermal protection',
      'Grid reliability',
      'Asset protection'
    ],
    relatedProducts: ['OQSx-G2', 'Transformer Monitoring']
  },
  {
    id: 'gearbox',
    title: 'Gearbox',
    description: 'Comprehensive gearbox monitoring solutions for industrial applications with vibration and oil quality analysis.',
    image: '/images/applications/gearbox.jpg',
    category: 'industrial',
    gradient: 'from-purple-400 to-pink-500',
    featured: false,
    industries: ['Manufacturing', 'Industrial', 'Mechanical Systems'],
    keyBenefits: [
      'Gear oil condition monitoring',
      'Vibration analysis',
      'Wear particle detection',
      'Predictive maintenance'
    ],
    relatedProducts: ['Particle Pal', 'Vibration Sensors']
  },
  {
    id: 'engine-power-generation',
    title: 'Engine - Power Generation',
    description: 'Specialized monitoring for power generation engines ensuring reliable electricity production and optimal performance.',
    image: '/images/applications/power-generation-engine.jpg',
    category: 'energy',
    gradient: 'from-red-400 to-pink-500',
    featured: true,
    industries: ['Power Generation', 'Utilities', 'Emergency Power'],
    keyBenefits: [
      'Continuous power reliability',
      'Engine performance optimization',
      'Fuel efficiency monitoring',
      'Emission control'
    ],
    relatedProducts: ['Engine Monitoring Systems', 'OQSx-G2']
  },
  {
    id: 'heavy-lift-cranes',
    title: 'Heavy Lift Cranes',
    description: 'Advanced monitoring systems for heavy lift cranes with hydraulic and mechanical component tracking.',
    image: '/images/applications/heavy-lift-cranes.jpg',
    category: 'construction',
    gradient: 'from-orange-400 to-red-600',
    featured: false,
    industries: ['Construction', 'Heavy Industry', 'Port Operations'],
    keyBenefits: [
      'Hydraulic system monitoring',
      'Load management',
      'Safety assurance',
      'Operational efficiency'
    ],
    relatedProducts: ['Crane Monitoring', 'Hydraulic Sensors']
  },
  {
    id: 'heavy-mining-equipment',
    title: 'Heavy Mining Equipment',
    description: 'Robust monitoring solutions for heavy mining equipment operating in harsh environments with extreme conditions.',
    image: '/images/applications/mining-equipment.jpg',
    category: 'mining',
    gradient: 'from-yellow-600 to-orange-600',
    featured: true,
    industries: ['Mining', 'Excavation', 'Material Handling'],
    keyBenefits: [
      'Equipment protection',
      'Harsh environment monitoring',
      'Downtime reduction',
      'Maintenance optimization'
    ],
    relatedProducts: ['Heavy Duty Sensors', 'Mining Equipment Monitoring']
  },
  {
    id: 'hydraulics',
    title: 'Hydraulics',
    description: 'Comprehensive hydraulic system monitoring with pressure, temperature, and fluid quality analysis.',
    image: '/images/applications/hydraulics.jpg',
    category: 'industrial',
    gradient: 'from-blue-500 to-purple-600',
    featured: false,
    industries: ['Industrial', 'Construction', 'Manufacturing'],
    keyBenefits: [
      'Hydraulic fluid monitoring',
      'Pressure optimization',
      'System efficiency',
      'Component protection'
    ],
    relatedProducts: ['Hydraulic Monitoring', 'Pressure Sensors']
  },
  {
    id: 'engine-shipping-vessel',
    title: 'Engine - Shipping Vessel',
    description: 'Marine engine monitoring systems for shipping vessels with salt water resistance and remote capabilities.',
    image: '/images/applications/shipping-vessel-engine.jpg',
    category: 'marine',
    gradient: 'from-blue-400 to-cyan-500',
    featured: true,
    industries: ['Maritime', 'Shipping', 'Marine Transport'],
    keyBenefits: [
      'Marine environment protection',
      'Engine reliability',
      'Remote monitoring',
      'Fuel efficiency'
    ],
    relatedProducts: ['Marine Monitoring', 'OQSx-G2 HAZ']
  },
  {
    id: 'railway-locomotive',
    title: 'Railway Locomotive',
    description: 'Specialized monitoring systems for railway locomotives with engine and transmission monitoring capabilities.',
    image: '/images/applications/railway-locomotive.jpg',
    category: 'transportation',
    gradient: 'from-green-500 to-blue-600',
    featured: false,
    industries: ['Railway', 'Transportation', 'Logistics'],
    keyBenefits: [
      'Locomotive engine monitoring',
      'Transmission protection',
      'Schedule reliability',
      'Maintenance planning'
    ],
    relatedProducts: ['Railway Monitoring', 'Engine Sensors']
  },
  {
    id: 'sheffield-forgemasters',
    title: 'Sheffield Forgemasters',
    description: 'Industrial forging operation monitoring with heavy machinery and hydraulic system oversight.',
    image: '/images/applications/sheffield-forgemasters.jpg',
    category: 'industrial',
    gradient: 'from-red-500 to-orange-600',
    featured: false,
    industries: ['Heavy Industry', 'Forging', 'Manufacturing'],
    keyBenefits: [
      'Heavy machinery monitoring',
      'Process optimization',
      'Quality assurance',
      'Equipment protection'
    ],
    relatedProducts: ['Industrial Monitoring', 'Heavy Duty Systems']
  },
  {
    id: 'gearbox-wind-turbine',
    title: 'Gearbox - Wind Turbine',
    description: 'Specialized wind turbine gearbox monitoring with vibration analysis and oil quality tracking.',
    image: '/images/applications/wind-turbine-gearbox.jpg',
    category: 'energy',
    gradient: 'from-green-400 to-teal-600',
    featured: true,
    industries: ['Renewable Energy', 'Wind Power', 'Green Technology'],
    keyBenefits: [
      'Wind turbine reliability',
      'Gearbox protection',
      'Energy production optimization',
      'Maintenance planning'
    ],
    relatedProducts: ['Wind Turbine Monitoring', 'Gearbox Sensors']
  },
  {
    id: 'work-boat-engine-monitoring',
    title: 'Work Boat - Engine Monitoring Kit',
    description: 'Complete engine monitoring kit for work boats with marine-grade sensors and remote monitoring capabilities.',
    image: '/images/applications/work-boat-engine.jpg',
    category: 'marine',
    gradient: 'from-blue-500 to-teal-500',
    featured: false,
    industries: ['Marine Services', 'Offshore', 'Port Operations'],
    keyBenefits: [
      'Marine engine protection',
      'Remote diagnostics',
      'Operational efficiency',
      'Maintenance scheduling'
    ],
    relatedProducts: ['Marine Engine Kit', 'Boat Monitoring']
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
  return ['industrial', 'energy', 'transportation', 'marine', 'construction', 'agriculture', 'mining', 'infrastructure'];
};

export const getApplicationsByIndustry = (industry: string): Application[] => {
  return applications.filter(app => 
    app.industries.some(ind => ind.toLowerCase().includes(industry.toLowerCase()))
  );
};
