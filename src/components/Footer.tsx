import Link from "next/link";

// Footer data for better maintainability
const FOOTER_DATA = {
  company: {
    name: "Mel Systems",
    tagline: "We bring more life to your machines.",
    contacts: {
      headOffice: "Via Enrico Toti, 29, 20900 Monza (MB) Italy",
      operations: "Piazza Giulio Prinetti 27/b, 23807 Merate (LC) Italy",
      phone: "+39 0392185668",
      email: "info@mel-systems.it",
    },
  },
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Applications", href: "/applications" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  products: [
    { label: "Oil Conditioning", href: "/products/oil-conditioning" },
    { label: "Systems", href: "/products/systems" },
  ],
  applications: [
    { label: "Oil Conditioning", href: "/applications#oil-conditioning" },
    { label: "Systems", href: "/applications#systems" },
  ],
  legal: [
    { label: "Terms and Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
} as const;

export default function Footer() {
  return (
    <footer
      className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden"
      role="contentinfo"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
      <div className="relative mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {" "}
          {/* Logo Section */}
          <div className="space-y-6 md:col-span-1">
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {FOOTER_DATA.company.name}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {FOOTER_DATA.company.tagline}
              </p>
            </div>
          </div>
          {/* Quick Links Section */}
          <nav className="space-y-4" aria-labelledby="quick-links-heading">
            <h4
              id="quick-links-heading"
              className="text-base font-semibold text-white uppercase tracking-wider"
            >
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              {FOOTER_DATA.quickLinks.map((link, index) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base text-slate-300 hover:text-white transition-all duration-200 hover:translate-x-1 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* Products Section */}
          <nav className="space-y-4" aria-labelledby="products-heading">
            <h4
              id="products-heading"
              className="text-base font-semibold text-white uppercase tracking-wider"
            >
              PRODUCTS
            </h4>
            <ul className="space-y-3">
              {FOOTER_DATA.products.map((product, index) => (
                <li key={product.href}>
                  <Link
                    href={product.href}
                    className="text-sm sm:text-base text-slate-300 hover:text-white transition-all duration-200 hover:translate-x-1 block"
                  >
                    {product.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* Applications Section */}
          <nav className="space-y-4" aria-labelledby="applications-heading">
            <h4
              id="applications-heading"
              className="text-base font-semibold text-white uppercase tracking-wider"
            >
              APPLICATIONS
            </h4>
            <ul className="space-y-3">
              {FOOTER_DATA.applications.map((application, index) => (
                <li key={application.href}>
                  <Link
                    href={application.href}
                    className="text-sm sm:text-base text-slate-300 hover:text-white transition-all duration-200 hover:translate-x-1 block"
                  >
                    {application.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* Contact Section */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-white uppercase tracking-wider">
              CONTACT
            </h4>
            <address className="space-y-3 text-sm sm:text-base text-slate-300 not-italic leading-relaxed">
              <div className="space-y-2">
                <p className="break-words">
                  {FOOTER_DATA.company.contacts.headOffice}
                </p>
                <p className="break-words">
                  {FOOTER_DATA.company.contacts.operations}
                </p>
              </div>
              <div className="space-y-2">
                <p>
                  <a
                    href={`tel:${FOOTER_DATA.company.contacts.phone}`}
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-200 hover:underline"
                    aria-label={`Call ${FOOTER_DATA.company.contacts.phone}`}
                  >
                    {FOOTER_DATA.company.contacts.phone}
                  </a>
                </p>
                <p>
                  <a
                    href={`mailto:${FOOTER_DATA.company.contacts.email}`}
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-200 hover:underline"
                    aria-label={`Email ${FOOTER_DATA.company.contacts.email}`}
                  >
                    {FOOTER_DATA.company.contacts.email}
                  </a>
                </p>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-slate-700/50">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6">
            <p className="text-xs sm:text-sm text-slate-400">
              © {new Date().getFullYear()} {FOOTER_DATA.company.name}. All
              rights reserved.
            </p>
            <nav
              className="flex flex-col xs:flex-row gap-3 xs:gap-6 text-xs sm:text-sm"
              aria-label="Legal links"
            >
              {FOOTER_DATA.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-400 hover:text-white transition-colors duration-200 hover:underline underline-offset-4"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
