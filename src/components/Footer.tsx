export default function Footer() {
    return (
        <footer className="bg-gray-50 w-full">
            <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-8 sm:py-12 md:py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Company Info Section */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-1 space-y-6">
                        <div className="space-y-2">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900">Mel Systems</h3>
                            <p className="text-sm sm:text-base text-gray-600">We bring more life to your machines.</p>
                        </div>
                        <div className="space-y-3">
                            <h4 className="text-base sm:text-lg font-bold text-gray-900">Contact Us</h4>
                            <div className="space-y-2 text-sm sm:text-base text-gray-600">
                                <p className="break-words">Head Office: Via Enrico Toti, 29, 20900 Monza (MB) Italy</p>
                                <p className="break-words">Operations: Piazza Giulio Prinetti 27/b, 23807 Merate (LC) Italy</p>
                                <p>Tel: <a href="tel:+390392185668" className="hover:text-blue-600 transition-colors">+39 0392185668</a></p>
                                <p>Mail: <a href="mailto:info@mel-systems.it" className="hover:text-blue-600 transition-colors">info@mel-systems.it</a></p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links Section */}
                    <div className="space-y-4">
                        <h4 className="text-base font-bold text-gray-900">Quick Links</h4>
                        <ul className="space-y-2">
                            {['Home', 'Products', 'Applications', 'Careers', 'Contact'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-sm sm:text-base text-gray-600 hover:text-blue-600 transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products Section */}
                    <div className="space-y-4">
                        <h4 className="text-base font-bold text-gray-900">Products</h4>
                        <ul className="space-y-2">
                            {['Oil Conditioning', 'Systems'].map((product) => (
                                <li key={product}>
                                    <a href="#" className="text-sm sm:text-base text-gray-600 hover:text-blue-600 transition-colors">
                                        {product}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Applications Section */}
                    <div className="space-y-4">
                        <h4 className="text-base font-bold text-gray-900">Applications</h4>
                        <ul className="space-y-2">
                            {['Oil Conditioning', 'Systems'].map((application) => (
                                <li key={application}>
                                    <a href="#" className="text-sm sm:text-base text-gray-600 hover:text-blue-600 transition-colors">
                                        {application}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-300">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                        <p className="text-xs sm:text-sm text-gray-500">
                            © 2025 Mel Systems. All rights reserved.
                        </p>
                        <div className="flex flex-col xs:flex-row gap-2 xs:gap-4 text-xs sm:text-sm">
                            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                                Terms and Conditions
                            </a>
                            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}