export interface Testimonial {
  id: string;
  name: string;
  company: string;
  position: string;
  content: string;
  rating?: number;
  image?: string;
}

// Testimonials data - can be updated later
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Michael Johnson",
    company: "GreenTech Energy Solutions",
    position: "Operations Manager",
    content:
      "MEL Systems transformed our wind turbine maintenance program. Their smart sensors and monitoring solutions have reduced our unplanned downtime by 40% and significantly cut our maintenance costs.",
    rating: 5,
  },
  {
    id: "2",
    name: "Sarah Chen",
    company: "Industrial Marine Corp",
    position: "Fleet Maintenance Director",
    content:
      "The oil conditioning solutions from MEL Systems have extended our engine life dramatically. Their expertise in hydraulic systems has been invaluable for our port operations.",
    rating: 5,
  },
  {
    id: "3",
    name: "Robert Williams",
    company: "PowerGen Industries",
    position: "Chief Engineer",
    content:
      "Working with MEL Systems for over 3 years now. Their deep technical knowledge and responsive support have made them an essential partner for our cogeneration facilities.",
    rating: 5,
  },
  {
    id: "4",
    name: "Amanda Rodriguez",
    company: "AgriTech Solutions",
    position: "Equipment Manager",
    content:
      "MEL Systems' monitoring technology has revolutionized how we maintain our agricultural machinery. The real-time insights help us prevent costly breakdowns during critical seasons.",
    rating: 4,
  },
  {
    id: "5",
    name: "David Thompson",
    company: "Transport Logistics Ltd",
    position: "Safety Director",
    content:
      "The video monitoring solutions from MEL Systems have significantly improved our fleet safety. The crane camera systems and digital monitors provide excellent visibility for our operators.",
    rating: 5,
  },
  {
    id: "6",
    name: "Lisa Park",
    company: "Renewable Energy Corp",
    position: "Maintenance Supervisor",
    content:
      "MEL Systems delivers exactly what they promise. Their ESG solutions have helped us meet sustainability goals while reducing operational costs across our renewable energy portfolio.",
    rating: 5,
  },
  {
    id: "7",
    name: "Mark Davis",
    company: "Manufacturing Plus",
    position: "Plant Manager",
    content:
      "The reliability of MEL Systems' equipment monitoring solutions has been outstanding. We've seen a 35% reduction in unexpected equipment failures since implementation.",
    rating: 5,
  },
  {
    id: "8",
    name: "Jennifer Wilson",
    company: "Global Logistics",
    position: "Operations Director",
    content:
      "MEL Systems' comprehensive approach to industrial monitoring has streamlined our operations. Their customer support is exceptional and always responsive to our needs.",
    rating: 5,
  },
];
