import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Clock,
  DollarSign,
  Users,
  Briefcase,
  GraduationCap,
} from "lucide-react";

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  experience: string;
  salary?: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  posted: string;
}

const jobPositions: JobPosition[] = [
  {
    id: "senior-software-engineer",
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "Remote / On-site",
    type: "Full-time",
    experience: "5+ years",
    salary: "$80,000 - $120,000",
    description:
      "Lead the development of innovative monitoring solutions and IoT systems for industrial applications.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "5+ years of software development experience",
      "Proficiency in JavaScript/TypeScript, React, Node.js",
      "Experience with IoT systems and industrial protocols",
      "Knowledge of databases (SQL/NoSQL)",
      "Strong problem-solving and communication skills",
    ],
    responsibilities: [
      "Design and implement scalable software solutions",
      "Lead technical architecture decisions",
      "Mentor junior developers",
      "Collaborate with product and design teams",
      "Ensure code quality and best practices",
      "Participate in code reviews and technical discussions",
    ],
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "Flexible work arrangements",
      "Professional development budget",
      "401(k) matching",
      "Paid time off and holidays",
    ],
    posted: "2024-12-15",
  },
  {
    id: "industrial-engineer",
    title: "Industrial Systems Engineer",
    department: "Engineering",
    location: "Melbourne, Australia",
    type: "Full-time",
    experience: "3-7 years",
    salary: "Competitive",
    description:
      "Design and optimize monitoring systems for industrial equipment and machinery.",
    requirements: [
      "Bachelor's degree in Industrial or Mechanical Engineering",
      "3+ years experience in industrial systems",
      "Knowledge of oil analysis and condition monitoring",
      "Experience with sensors and data acquisition systems",
      "Understanding of maintenance strategies",
      "Strong analytical and problem-solving skills",
    ],
    responsibilities: [
      "Design monitoring solutions for industrial applications",
      "Analyze system performance and optimization opportunities",
      "Work with clients to understand their monitoring needs",
      "Develop technical documentation and specifications",
      "Support field installations and commissioning",
      "Provide technical support to sales team",
    ],
    benefits: [
      "Competitive salary package",
      "Health and wellness benefits",
      "Professional development opportunities",
      "Company vehicle or travel allowance",
      "Flexible working arrangements",
      "Annual performance bonuses",
    ],
    posted: "2024-12-10",
  },
  {
    id: "sales-manager",
    title: "Regional Sales Manager",
    department: "Sales",
    location: "Sydney, Australia",
    type: "Full-time",
    experience: "5+ years",
    salary: "$70,000 - $100,000 + Commission",
    description:
      "Drive sales growth in the industrial monitoring and oil analysis market.",
    requirements: [
      "Bachelor's degree in Business, Engineering, or related field",
      "5+ years of B2B sales experience",
      "Experience in industrial or technical sales preferred",
      "Strong relationship building skills",
      "Excellent communication and presentation skills",
      "Ability to travel within assigned territory",
    ],
    responsibilities: [
      "Develop and execute sales strategies for assigned region",
      "Build and maintain relationships with key customers",
      "Identify new business opportunities",
      "Provide technical sales support and product demonstrations",
      "Collaborate with engineering team on customer solutions",
      "Achieve sales targets and KPIs",
    ],
    benefits: [
      "Base salary plus commission structure",
      "Company car and expense account",
      "Health insurance and superannuation",
      "Sales incentive programs",
      "Professional development training",
      "Flexible work arrangements",
    ],
    posted: "2024-12-08",
  },
  {
    id: "technical-support-specialist",
    title: "Technical Support Specialist",
    department: "Support",
    location: "Remote",
    type: "Full-time",
    experience: "2-5 years",
    description:
      "Provide technical support and training for our monitoring systems and equipment.",
    requirements: [
      "Technical diploma or degree preferred",
      "2+ years in technical support or field service",
      "Understanding of industrial equipment and sensors",
      "Strong troubleshooting and diagnostic skills",
      "Excellent customer service skills",
      "Ability to work independently and manage multiple cases",
    ],
    responsibilities: [
      "Provide technical support via phone, email, and remote access",
      "Troubleshoot system issues and guide customers through solutions",
      "Create and maintain technical documentation",
      "Conduct product training sessions for customers",
      "Escalate complex issues to engineering team",
      "Track and report support metrics",
    ],
    benefits: [
      "Competitive salary",
      "Remote work flexibility",
      "Health and dental benefits",
      "Training and certification opportunities",
      "Equipment and home office setup",
      "Career advancement paths",
    ],
    posted: "2024-12-05",
  },
  {
    id: "marketing-coordinator",
    title: "Marketing Coordinator",
    department: "Marketing",
    location: "Melbourne, Australia",
    type: "Full-time",
    experience: "2-4 years",
    description:
      "Support marketing initiatives and help grow our brand presence in industrial markets.",
    requirements: [
      "Bachelor's degree in Marketing, Communications, or related field",
      "2+ years of marketing experience",
      "Experience with digital marketing and social media",
      "Strong writing and content creation skills",
      "Knowledge of marketing automation tools",
      "Creative thinking and attention to detail",
    ],
    responsibilities: [
      "Develop and execute marketing campaigns",
      "Create content for website, social media, and marketing materials",
      "Manage trade show participation and events",
      "Support lead generation and nurturing activities",
      "Analyze marketing performance and ROI",
      "Coordinate with sales team on marketing qualified leads",
    ],
    benefits: [
      "Competitive salary",
      "Health and wellness benefits",
      "Professional development budget",
      "Flexible work arrangements",
      "Creative and collaborative work environment",
      "Opportunity to work with cutting-edge technology",
    ],
    posted: "2024-12-03",
  },
  {
    id: "software-engineer-intern",
    title: "Software Engineering Intern",
    department: "Engineering",
    location: "Melbourne, Australia",
    type: "Internship",
    experience: "Student/Graduate",
    description:
      "Join our engineering team to gain hands-on experience developing monitoring software and IoT solutions.",
    requirements: [
      "Currently pursuing or recently completed degree in Computer Science, Software Engineering, or related field",
      "Basic programming knowledge (JavaScript, Python, or similar)",
      "Interest in IoT and industrial systems",
      "Strong problem-solving skills",
      "Eagerness to learn and adapt",
      "Good communication and teamwork skills",
    ],
    responsibilities: [
      "Assist with software development projects",
      "Write and test code under supervision",
      "Participate in team meetings and code reviews",
      "Learn about industrial monitoring systems",
      "Document development processes and procedures",
      "Support quality assurance testing",
    ],
    benefits: [
      "Competitive internship stipend",
      "Mentorship from senior engineers",
      "Real-world project experience",
      "Potential for full-time employment",
      "Flexible schedule around studies",
      "Professional development opportunities",
    ],
    posted: "2024-11-28",
  },
];

const departments = ["All", "Engineering", "Sales", "Support", "Marketing"];
const locations = ["All", "Remote", "Melbourne", "Sydney", "Remote / On-site"];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-screen-xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Join Our Team
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
            Build the future of industrial monitoring with innovative technology
            and passionate people
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
            >
              View Open Positions
            </Button>
            <Button
              size="lg"
              variant="outline"
            >
              Learn About Our Culture
            </Button>
          </div>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work With Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join a team that's passionate about innovation, quality, and
              making a real impact in industrial monitoring.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Collaborative Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Work with talented professionals who support each other and
                  share knowledge freely.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Continuous Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Access to training, conferences, and professional development
                  opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Work-Life Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Flexible work arrangements and generous time off to maintain a
                  healthy balance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Job Positions Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-gray-600">
              Find your next opportunity and help us shape the future of
              industrial monitoring.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 flex flex-wrap gap-4 justify-center">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-700 mr-2">
                Department:
              </span>
              {departments.map((dept) => (
                <Badge
                  key={dept}
                  variant="outline"
                  className="cursor-pointer hover:bg-blue-50"
                >
                  {dept}
                </Badge>
              ))}
            </div>
          </div>

          {/* Job Cards */}
          <div className="space-y-6">
            {jobPositions.map((job) => (
              <Card
                key={job.id}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-blue-900">
                        {job.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-3 mt-2">
                        <Badge variant="secondary">{job.department}</Badge>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {job.experience}
                        </div>
                        {job.salary && (
                          <div className="flex items-center text-sm text-gray-600">
                            <DollarSign className="w-4 h-4 mr-1" />
                            {job.salary}
                          </div>
                        )}
                      </div>
                    </div>
                    <Button className="bg-black hover:bg-neutral-900 whitespace-nowrap">
                      Apply Now
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{job.description}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Key Requirements:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {job.requirements.slice(0, 4).map((req, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-1 h-1 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {req}
                          </li>
                        ))}
                        {job.requirements.length > 4 && (
                          <li className="text-blue-600 text-sm">
                            +{job.requirements.length - 4} more requirements
                          </li>
                        )}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Key Responsibilities:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {job.responsibilities.slice(0, 4).map((resp, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-1 h-1 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {resp}
                          </li>
                        ))}
                        {job.responsibilities.length > 4 && (
                          <li className="text-blue-600 text-sm">
                            +{job.responsibilities.length - 4} more
                            responsibilities
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t">
                    <p className="text-xs text-gray-500">
                      Posted: {new Date(job.posted).toLocaleDateString()}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Employee Benefits
            </h2>
            <p className="text-lg text-gray-600">
              We believe in taking care of our team with comprehensive benefits
              and perks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="font-semibold mb-2">Health & Wellness</h3>
              <p className="text-sm text-gray-600">
                Comprehensive health, dental, and vision coverage
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-semibold mb-2">Financial Security</h3>
              <p className="text-sm text-gray-600">
                Competitive salary, superannuation, and performance bonuses
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="font-semibold mb-2">Work Flexibility</h3>
              <p className="text-sm text-gray-600">
                Remote work options and flexible scheduling
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="font-semibold mb-2">Growth & Development</h3>
              <p className="text-sm text-gray-600">
                Training budget and career advancement opportunities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-100">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't see the perfect role? We're always looking for talented
            individuals who share our passion for innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-black hover:bg-neutral-900">
              Send Us Your Resume
            </Button>
            <Button size="lg" variant="outline">
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
