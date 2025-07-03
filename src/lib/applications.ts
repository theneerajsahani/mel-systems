export interface Application {
  id: string;
  title: string;
  subtitle?: string;
  images?: string[];
  requirements?: string[];
  solutions?: string[];
  benefits?: string[];
  commercialBenefit?: string[];
  highlights?: string[];
  additionalInfo?: {
    title?: string;
    image?: string;
    content?: string[];
  }[];
  industry: string[];
}

export const applications: Application[] = [

  // Chiller Compressors
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
    additionalInfo: [
      {
        title: "Service and Support from Tan Delta",
        content: [
          "At one of the UK's largest supermarket chilled storage centres,there are two twin screw compressors operating 24x7, to ensure the temperature is maintained within a controlled range. A catastrophic failure occurred on one of the two compressors and it was decided that a live condition based monitoring system would be an effective solution to mitigate future risk.",
        ],
      }
    ],
    industry: ["Food Processing"],
  },

  // Concrete
  {
    id: "concrete",
    title: "Concrete",
    subtitle: "Industrial Condition Monitoring",
    images: [""],
    requirements: [
      "The continued safe operation of a concrete press operated by a leading UK brick manufacturer is vital to their business. The dangerous environment created by the press means that direct regular access is limited, and requires the machine to be powered down which negatively affects production.",
      "For this reason, a remote monitoring solution was required to facilitate safe condition monitoring of the hyraulic system as well as fault finding without production downtime.",
      "Hydrotechnik UK Test Engineering Ltd were tasked with providing a solution."
    ],
    solutions: ["A cloud-based solution was decided upon. Using this technology, sensor data can be analysed graphically online from any location."],
    additionalInfo: [
      {
        title: "Additional Information",
        content: [
          "Cleanliness: The Ptrick Particle counter was placed in parallel with the return line back to tank, to measure the particle contamination in the oil.",
          "Pressure: Three of our HySense PR140 series pressure sensors were installed into valves, and another was inserted into the test point of our flowmeter.",
          "Flow & Temp: Our HySense QT510 flowmeter, along with our HySense TE300 temperature sensor were placed in-line with the main feed from the pump to the manifold.",
          "Watchlog Pro Cloud Monitoring: As the different valves open for different sections of the pressing and stacking cycles, the pressure can be seen on the cloud platform to rise at different times. The sensors were connected to the Watchlog Pro via a junction box with 5m cables. Powered by mains input, the voltage was reduced and transformed to 240VDC to power the system. A single cable then connected the Watchlog Pro unit to the junction unit."
        ]
      }
    ],
    industry: ["Concrete"]
  },

  // Concrete Delivery Precision
  {
    id: "concrete-delivery-precision",
    title: "Concrete Delivery Precision",
    images: [""],
    requirements: ["Before the Watchlog Pro ORB installation, S Morris Ltd. lacked a reliable system to track water flow and pressure during the mixing process. This led to potential inconsistencies in the concrete mis, risking insurance complications and customer dissatisfaction."],
    solutions: [
      "Hydrotechnik UK Test Engineering Ltd. recommended the Watchlog Pro ORB for S MOrris Ltd.'s concrete mixer, integrating it with:",
      "Pressure Sensor: Monitors hydraulic motor pressure to ensure optimal performance.",
      "Flow Meter: Tracks water consumption during mixing, ensuring the correct slump value is achieved.",
      "Cloud-Based Data: The orb sends pressure and flow data every 5 minutes, providing real-time access and a comprehensive audit trail for compliance and insurance purposes."
    ],
    benefits: [
      "Real Time Monitoring - Instant access to pressure and flow data ensures timely adjustments and imporves decision-making.",
      "Quality Control - Continuous tracking gurantees precise water-to-cement ratios, prevent batch inconsistencies.",
      "Insurance Confidence - Cloud-based data provides a reliable audit trail for inurance claims and regulatory compliance.",
      "Increased Efficiency - Streamlined operations result in faster, more reliable deliveries."
    ],
    additionalInfo: [
      {
        content: [
          "The ORB has transformed our concrete delivery operations. It gives us real-time insights into the mixing process, helping us maintain perfect slump values every time.",
          "This solution has improved both our operational efficiency and our insurance compliance.",
          "We're delighted with the results."
        ]
      }
    ],
    industry: ["Concrete Delivery Precision industry"],
  },

  // Electricity Transformers
  {
    id: "electricity-transformers",
    title: "Electricity Transformers",
    images: [""],
    requirements: ["The customer's primary goal was to improve safety and reduce the risk of catastrophic failure due to undetected oil contamination."],
    solutions: [
      "Oil Quality Sensors (OOQs) filled a critical missing element in the existing monitoring system by providing a constant feed of highly accurate, real time oil quality data back to the central maintenance department.",
      "During the evaluation phase of the roll-out, the sensor deteced a sudden, but marginal, change in oil quality. This enabled maintainence crews to attend the transformer unit and discover that water ingress was occuring. This source was traced and repaired with minimal disruption and no damage to the equipment, potentially saying the operator millions of Euros.",
      "The ability to monitor real time oil condition on transformers of all sizes has provided the final piece of the monitoring jigsaw and is helping the customer to further reduce long term operating costs."
    ],
    benefits: [
      "Ability to detect any unexpected deterioration and plan immediate action. Improving maintenance scheduling which reduced costs. Reduced long term equipment wear."
    ],
    highlights: [
      "Cost effective: Improved maintenance scheduling which reduced costs.",
      "Prevent Catastropihic Failure: Contamination which could have caused serious damage was immediately identified by the sensor allowing allowing instant remedial action.",
      "Optimise Planning: Ability to detect any unexpected deteriotaion and plan immediate action.",
      "Improve Safety: Continuous monitoring to detect any issues improves equipment safely."
    ],
    industry: ["Electricity Transformers industry"],
  },

  // Engine
  {
    id: "engine",
    title: "Engine",
    images: [""],
    requirements: ["The challenge of generating electricity from a Bio Gas Engine powered by methane is that the quality and cleanliness of the gas has a significant effect on the longevity and performance of lubricating oil. Regular oil sampling is a necessity to avoid catastrophic failures, however delays in getting results means that operational efficiencies are missed due to the conservative nature of managing laboratory oil sampling."],
    solutions: ["Tan Delta ran a series of trials comparing the performance of the Tan Delta Oil Quality Sensor (OQSx) with traditional laboratory sampling. The Tan Delta Express Kit was fitted to a set of Jenbacher 320 gas engines and the engines were run for 3 oil change cycles during which time traditional laboratory samples were also taken and the results from both were corelated. The Tan Delta OQSx tracked the laboratory analysis perfectly from clean to end of oil life."],
    benefits: ["Having the ability to see the current oil condition in real-time has enabled the operator to increase the oil change interval and also reduce the number of laboratory samples being taken."],
    highlights: [
      "Lower Operating Costs: Less downtime and less maintenance significantly reduced ongoing operating costs.",
      "Improved Safety: Installing Tan Delta technology ensures equipment is in optimal condition making a safer working environment.",
      "Help the Environment: Equipment efficiency improved on site. They reduced oil consumption, maintenance activity and costs and helped conserve the environment.",
      "Reduced Wastage: Unnecessary oil waste was avoided by only changing oil which needs to be changed."
    ],
    industry: ["Engine industry"],
  },

  // Environment Agency
  {
    id: "environment-agency",
    title: "Environment Agency",
    images: [""],
    requirements: [
      "The Environment Agency approached Hydrotechnik UK Test Engineering to provide a system to monitor the hydraulic pressure of a flood plain gate when opening and closing.",
      " The gate opens once a month for testing and only a few times a year when heavy rainfall means the river level rises to a critical level and to avoid flooding, releasing water onto a flood plain. The remote monitoring system was required to capture the hydraulic cylinder pressures during the opening and closing for maintenance and historical data of the gate movement.",
      " The unit needed to connect to the cloud via a SIM card and take and log the data every 5 seconds."
    ],
    solutions: ["Our Watchlog Pro cloud-based remote monitoring solution was decided upon. Using this technology, multiple sensors can be connected to the system and data can be analysed graphically online from any location."],
    benefits: ["Environment Agency benefit"],
    additionalInfo: [
      {
        title: "Pressure",
        content: ["Two of our HySense PR130 series pressure sensors were installed into the hydraulic system."]
      }
    ],
    industry: ["Environment Agency industry"],
  },

  // Gearbox
  {
    id: "gearbox",
    title: "Gearbox",
    images: [""],
    requirements: ["Contamination and moisture ingress are common problems on many gearboxes, laboratory sampling can be expensive, requires regular samples to be taken and analysed, therefore to reduce this overhead and to ensure the reliable operation of a critical gearbox a 24 x 7 x365 oil monitoring solution would need to be fitted."],
    solutions: ["By simply fitting the Tan Delta Oil Quality Sensor (OQSx) into the existing lubrication circuit (via an OEM port) on the gearbox and then connecting it directly into the Oil Quality Display (OQDe)."],
    benefits: ["The need for regular oil sampling reduced significantly and enabled the operators to view the current condition of the oil in real at any point. "],
    highlights: [
      "Increased Reliability: Detects and reports the early signs of hidden issues enabling remedial action to prevent accelerated wear and unexpected breakdowns.",
      "Reduced Wastage: Unnecessary oil waste was avoided by only changing oil which needs to be changed.",
      "Enhanced Planning: The site can now accurately predict future maintenance and streamline and reduce associated costs.",
      "Prevent Catastrophic Failure: The site is able to track real time changes in their oil quality preventing avoidable failures."
    ],
    industry: ["Gearbox industry"],
  },

  // Genset Engine
  {
    id: "genset-engine",
    title: "Genset Engine",
    images: ["A series of large diesel generators at critical sites were fitted with the Tan Delta Oil Quality Sensor (OQSx) to monitor the quality of the fuel and oil to ensure constant readiness and determine service schedules."],
    requirements: ["Genset Engine requirement"],
    solutions: [
      "Lives could depend on the immediate availability of electricity from standby generators at our customer's sites in the event of a major power outage. Long periods of no use risked oil and fuel becoming sub optimal, dramatically increasing the real risk of failure when they were most needed.",
      "Tan Delta sensors were fitted to constantly monitor the quality of the oil and diesel. Each is configured to provide the customer with an audit trail of condition levels and provide a forward alert at a carefully predetermined quality level such that servicing can be planned whilst also ensuring that the oil and diesel is always of a condition that will support immediate and reliable operation in the event of a power cut."
    ],
    benefits: [" Improved service planning and reduced maintenance costs, coupled with significant failure risk mitigation."],
    highlights: [
      "Cost Effective: Improved service and maintenance planning which has reduced costs.",
      "Ease of Use: The primary benefit has been that the customer can be confident that these critical equipment are always in optimal condition for immediate use.",
      "Efficiency: The action of implementing this monitoring system has also enabled the customer to demonstrate to public body stake holders their readiness in the event of such an emergency power cut."
    ],
    industry: ["Genset Engine industry"],
  },

  // Heavy Lift Cranes
  {
    id: "heavy-lift-cranes",
    title: "Heavy Lift Cranes",
    images: [""],
    requirements: ["Reliable equipment is critical to the efficiency of all ports. In particularly the large cranes used to move cargo between the port and ships."],
    solutions: [
      "Oil quality plays a critical role and Tan Delta was able to assist an operator mitigate risk and reduce operating costs.",
      "Oil Quality Sensors (OQSx) were fitted to the primary hydraulic systems and onboard compressors to provide real time monitoring of oil condition.",
      "An operator panel was installed providing a simple traffic light condition status, whilst live data was streamed back to the maintenance centre.",
      "The data generated by the sensors enabled the operator to extend the intervals between servicing thus reducing direct operating costs, whilst at the same time providing the comfort that in the event of an unexpected issue an alert would be provided and action taken in a planned and controlled manner before any equipment damage had occurred."
    ],
    benefits: ["The installation of the oil sensors delivered a series of benefits which all contributed to the estimated six month investment pay back."],
    highlights: [
      "Cost Effective: Actual oil consumption was reduced by 32.2% as the sensor showed that oil was being replaced when still viable.",
      "Reduced Maintenance Intervals: Service intervals were significantly extended and based upon need.",
      "Reduced Waste: Oil disposal costs were dramatically reduced due to fewer oil changes.",
      "Prevent Catastrophic Failure: Unexpected contamination which could have lead to serious equipment damage was immediately identified."
    ],
    industry: ["Heavy Lift Cranes industry"],
  },

  // Heavy Mining Equipment
  {
    id: "heavy-mining-equipment",
    title: "Heavy Mining Equipment",
    images: [""],
    requirements: ["Maximising the productivity of large mobile plant equipment was a critical performance criteria for a large mining operation."],
    solutions: [
      "Intelligent oil condition monitoring delivered a measurable improvement in equipment active operating time.",
      "Oil Quality Sensors (OQSx) were fitted to the gearboxes, engines and hydraulic systems of a total of 36 large plant machines such as rock crushers, excavators and trucks.",
      "Operator alert display units (Oil Quality Display, OQDe) were fitted in the cabs of each vehicle to provide immediate condition alerts, whilst data was also streamed back to the maintenance depot where it was used to predict optimal service schedules.",
      "The customer benefited from reduced servicing through being able to maximise the true life of their oil, coupled with reduced equipment wear and associated issues."
    ],
    benefits: ["Reduced servicing through being able to maximise the true life of their oil, and extended the running hours of site critical machinery."],
    highlights: [
      "Cost Effective: Oil consumption was reduced by 19.7% as the sensor showed oil was being replaced when still viable.",
      "Reduced Waste: Oil disposal costs were dramatically reduced due to fewer oil changes.",
      "Improved Maintenance Schedules: Equipment failure costs were reduced due to improved maintenance schedules and auditing of correct procedures through analysis of the sensor data.",
      "Prevent Catastrophic Failure: Contamination which could have caused serious damage was immediately identified by the sensor allowing instant remedial action."
    ],
    industry: ["Heavy Mining Equipment industry"],
  },

  // Hydraulic
  {
    id: "hydraulic",
    title: "Hydraulic",
    images: [""],
    requirements: ["Moisture ingress can be a common problem within a hydraulic system, also contamination can be an early indicator of component wear and a precursor to component failure. Ensuring that the oil is kept in the optimum condition will increase equipment liability and reduce equipment wear. Oil can then only be changed when necessary based on its actual condition as opposed to a out dated time-based regime."],
    solutions: ["Installing the Tan Delta Oil Quality Sensor (OQSx) into the low-pressure side and then connecting it to the Oil Quality Display (OQDe) gives you an instant read out of the current hydraulic oil condition and temperature. A single traffic light LED shows the current status for the equipment with individual displays for oil condition, oil temperature and oil rate of change."],
    benefits: ["An operator can immediately see the current state of the oil within the hydraulic system and can immediately undertake any remedial action should the oil condition deteriorate. Laboratory oil sampling frequency can be significantly reduced and only  utilised when the sensor indicates an issue is present."],
    highlights: [
      "Reduced Wastage: Unnecessary oil waste was avoided by only changing oil which needs to be changed.",
      "Increased Reliability: Detects and reports the early signs of hidden issues enabling remedial action to prevent accelerated wear and unexpected breakdowns.",
      "Enhanced Planning: The site can now accurately predict future maintenance and streamline and reduce associated costs.",
      "Prevent Catastrophic Failure: The site is able to track real time changes in their oil quality preventing avoidable failures."
    ],
    industry: ["Hydraulic industry"],
  },

  // Large Marine Engine
  {
    id: "large-marine-engine",
    title: "Large Marine Engine",
    subtitle: "Cargo, Ship, Two-Stroke Engine - Oil Condition Monitoring",
    images: [""],
    requirements: ["Any engine failure on a ship is very costly, and undertaking oil sample analysis on a ship is also challenging."],
    solutions: ["Fitting the Tan Delta Oil Quality Sensor (OQSx) to each engine by inserting a simple manifold into the oil filter feed line and then integrating the sensor into the existing engine monitoring system so that the information can be combined with the current engine health dashboard."],
    benefits: ["The engine room operatives can now see the oil condition in real time so whatever the current load on the engine they have the peace of mind that any issue will be seen before it becomes potentially catastrophic."],
    highlights: [
      "Help the Environment: Engine efficiency improved on ship.  They reduced oil consumption, maintenance activity and costs and helped conserve the environment.",
      "Increased Reliability: Detects and reports the early signs of hidden issues enabling remedial action to prevent accelerated wear and unexpected breakdowns.",
      "Fewer Service Intervals: Less maintenance and servicing means increased equipment availability and reduced costs.",
      "Less Down Time: Ship crews were able to record and trend the oil life in the engine to accurately predict future maintenance."
    ],
    industry: ["Large Marine Engine industry"],
  },

  // Natural gas engine 
  {
    id: "natural-gas-engine",
    title: "Natural Gas Engine",
    images: [""],
    additionalInfo: [
      {
        title: "Natural gas engine operator reports savings of $8,257 per year after installing Tan Delta oil condition monitoring.",
        content: [
          "Natural gas engines operate in a variety of extreme locations, from the cold climates of arctic Canada to the hot, humid districts of the southern United States. Natural gas engines must withstand the levels of oil degradation caused by the gas fuel combustion process, which results in the accumulation of oxides of nitrogen (nitration). This must be monitored regularly if both lubricant and engine life are to be maintained.",
          "Tan Delta were approached in 2016 by a natural gas engine operator based in a Power Station in central Europe with a fixed hours-based service interval of 2,000 hours. The operator wanted to extend drain intervals, and reduce the need for preventative maintenance, subsequently reducing costs and waste. The operator installed a Tan Delta OQDe Express Kit, allowing them to monitor the oil condition in real time, pinpointing and planning optimal maintenance schedules based upon requirement.",
          "The operator has since reported that service intervals extended to an average of 3,216 hours thus delivering a reduction in annual servicing from 4.3 to 2.64 services. With each service costing $2,213, this delivered an immediate and sustainable annual cash saving of $3,657. Over the course of the year, the engine was productive for an addition 23 hours through a combination of reduced servicing and estimated reduced breakdowns. This equates to additional annual revenue of $4,600. The total financial benefits amount to $8,257 per year, or $41,285 over the expected 5 year life of the equipment and the total project pay back was under 4 months.",
          "\“Following a very successful trial we have fitted a further 17 Tan Delta sensors to our equipment throughout the plant since 2017. We consider oil condition monitoring pivotal in hitting our O&M targets for the next 5 years and beyond” – Plant Operations Manager."
        ]
      }
    ],
    industry: ["Natural Gas Engine industry"],
  },

  // Railway Locomotive
  {
    id: "railway-locomotive",
    title: "Railway Locomotive",
    subtitle: "Transport Network - Oil Condition Monitoring",
    images: [""],
    requirements: [" Tan Delta equipment was deployed across a fleet of large diesel electric locomotives to improve reliability, maintenance scheduling and control."],
    solutions: [
      "An Oil Quality Sensor (OQSx) was installed down stream from the main engine oil filter using a simple prefabricated manifold which was fitted in-line and into which the sensor was installed.",
      "Power for the sensor was provided by an available feed from the engine. Data was sent to a locally fitted Oil Quality Display (OQD) to show real time data, as well as being connected to the existing telematics system, such that data was communicated back to the customers central maintenance control and planning department.",
      "Data from the sensor is used to help plan optimal servicing whilst simultaneously providing an alert mechanism to identify potential problems before damage is caused."
    ],
    benefits: ["The customer has benefited from the ability to track actual maintenance activities of locomotive operators through the data provided by the sensor and ensure that an optimal service schedule maintained, thus reducing operating and failure costs."],
    highlights: [
      "Cost Effective: Actual oil consumption was reduced by 21%.",
      "Improved Maintenance Schedules: Equipment failure costs were reduced due to improved maintenance schedules and auditing of correct procedures through analysis of the data.",
      "Reduced Waste: Oil disposal costs were dramatically reduced due to fewer oil changes.",
      "Reduced Maintenance Intervals: Service intervals were extended and their cost reduced due to improved need based scheduling."
    ],
    industry: ["Railway Locomotive industry"],
  },

  // Sheffield Forgemasters
  {
    id: "sheffield-forgemasters",
    title: "Sheffield Forgemaster's",
    subtitle: " Sheffield Forgemasters, a global steel production and engineering company, installs Tan Delta's world leading asset monitoring solution.",
    images: [""],
    additionalInfo: [
      {
        title: "Project Summary",
        content: [
          "Tan Delta's real-time oil condition monitoring system was fitted to the hydraulic oil filtration circuit on one of Forgemasters' business-critical Forging Presses to establish the real-time condition of the hydraulic oil. The results of the trial showed accelerated oil degradation indicating that the current filtration unit was not maintaining the oil in optimal condition.",
          "As a result of the resounding success of the initial trial, Forgemasters in partnernship with Tan Delta, now plan to extend the project into further critical areas, aiming to move towards a real-time condition montioring approach across their entire site thereby realising significant financial benefit through their strategic asset management initiative."
        ]
      }
    ],
    highlights: [
      "Reduced Maintenance Intervals: Maintenance can be carried out at the optimal point, extending service intervals and moving towards predictive maintenance.",
      "Reduced Waste: Oil purchase, disposal and associated costs can be reduced due to fewer oil changes.",
      "Prevent Catastrophic Failure: Unexpected contamination which could lead to serious equipment damage was immediately identified.",
      "Reduced Sampling: Oil sampling and analysis costs are significantly reduced, and the real-time monitoring systems will provide 24/7 confidence in their oil quality."
    ],
    benefits: ["Installing Tan Delta oil condition monitoring, and optimising the hydraulic filtration system for Forgemasters' Forging presses is estimated to save in excess of £50K annually, further reducing annual downtime, and providing confidence that oil quality is always fit for purpose."],
    industry: ["Sheffield Forgemaster's industry"],
  },

  // Wind Turbine Gearbox
  {
    id: "wind-turbine-gearbox",
    title: "Wind Turbine Gearbox",
    subtitle: "Wind turbine operator reduced maintenance costs, & improved reliability and equipment life.",
    images: [""],
    additionalInfo: [
      {
        content: [
          "A large European based operator of wind turbines engaged Tan Delta to integrate full spectrum oil condition monitoring into their existing monitoring and maintenance systems to reduce maintenance costs, extend equipment life and assist with maximizing power generation output.",
          "Over many years of operational experience, the customer had identified the gear-box as the primary source of unscheduled maintenance, sub-optimal power productivity, and long term reliability issues. Extensive trials with Tan Delta confirmed that the accurate real time monitoring of oil condition in the gear box would enable the earliest detection of potential issues such that remedial maintenance could be planned, equipment damage prevented. Analysis of the gear box during the trial confirmed that early detection of issues prevented damage which would cause a reduction in equipment life and power output efficiency.  The sensor data was also used to identify and predict the optimal maintenance scheduling.",
          "A single sensor was installed in an oil sample inspection port on the oil return out of the gear box (between the gear box and oil reservoir) where the sensor would be exposed to a continuous flow of oil. Where a turbine had an existing telematics system, the sensor was connected to the modem with the data relayed back to the customers central operations centre. On older turbines where a telematics system was not present a GPRS modem was installed to relay data back to the operations centre. Each installation was completed within 4 hours during normally scheduled maintenance, enabling the entire estate spread across Europe (land and sea based) to be fully equipped within one year.",
          "Each Tan Delta OQSx sensor continuously monitors the real time condition of the oil. Its unique full spectrum hollistic monitoring capability coupled with extreme accuracy, enables any change to be detected and reported in real time - no matter the cause - wear and or contamination. The operations centre used its existing management software to manage and display the data with automatic alerts generated by any unexpected changes in oil condition and using simple trend prediction to pin point optimal maintenance schedules.",
          "After over a year of operation, the customer believes they have seen a significant improvement in maintenance efficiency and their ability to manage each turbine for maximum power output. They also expect that catastrophic failures will be prevented and the operational life extended. Such has been the success of full spectrum hollistic oil condition monitoring the customer is now planning to implement a full roll out."
        ]
      }
    ],
    benefits: [
      "The customer has reduced daily operating costs, increased power output and extended equipment life.",
      "- The ability to identify and prevent catastrophic gear box failures, estimated to effect ~ 5% of turbines with a per failure cost of Euro350,000",
      "- Estimated annual reduction in per turbine maintenance costs of Euro3,500 due to optimised scheduling.",
      "- 0.5% increase in annual power output over the life of the turbine due to optimal gear box efficiency due to reduced wear."
    ],
    industry: ["Wind Turbine Gearbox industry"],
  },

  // Work Boat Engine Monitoring Kit
  {
    id: "work-boat-engine-monitoring-kit",
    title: "Work Boat Engine Monitoring Kit",
    images: [""],
    additionalInfo: [
      {
        title: "Product Overview",
        content: ["Optimising the lubricating oil within your work boat engine will ensure long term reliable operation and enable you to service your equipment based only when required using its current condition as opposed to a historic time-based schedule. The Tan Delta Work Boat Engine Monitoring kit can be simply and quickly installed to allow you to monitor your engine oil condition whilst ever the engine is operational giving you a critical insight in the engine oils effectiveness."],
      },
      {
        title: "Prduct Features",
        content: [
          "Full Spectrum Holistic Detection: Detects and measures all oil condition changes, no matter the cause – wear or contamination.",
          "• Bluetooth Connectivity: Stored data can be easily downloaded and sent wherever needed.",
          "• Fully Configurable: Any oil type, MOT allows accurate testing of any oil or fuel oil.",
          "• Intuitive Functionality: Simple touch screen menu system makes accessing functionality such as rate of change graphs, and alert configuration simple.",
          "• Robust and Rugged: The rugged IP67 rated sensor and enclosure use high quality industrial connectors making this unit very reliable.",
          "• Independently Tested: Sensor and display have undertaken rigorous independent testing to verify their outstanding performance in a wide variety of applications."
        ],
      }
    ],
    benefits: [
      "Enhanced Planning: Accurately predict future maintenance and streamline and reduce associated costs.",
      "Reduced Wastage: Avoid unnecessary oil waste by only changing oil which needs to be changed.",
      "Lower Operating costs: Avoid unnecessary oil waste by only changing oil which needs to be changed.",
      "Optimise Service Intervals: Optimise service intervals without risking equipment performance and reliability."
    ],
    industry: ["Work Boat Engine Monitoring Kit industry"],
  },
];

export function getApplicationById(id: string) {
  return applications.find((app) => app.id === id);
}
