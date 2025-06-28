'use client';
import Image from 'next/image';

const products = [
    {
        name: 'HT-WLBP Watchlog Bluetooth-Plus Pressure Sensor',
        image: '/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/2nd category/Bluetooth-Plus Pressure Sensor.jpg',
    },
    {
        name: 'HT-WLBL Watchlog Bluetooth-Plus Hydrostatic Level Sensors',
        image: '/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/2nd category/Bluetooth-Plus Level Sensor.jpg',
    },
    {
        name: 'HT-WLBLC Watchlog Bluetooth-Plus Compression Load Cells',
        image: '/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/2nd category/Bluetooth-Plus Load Cell.jpg',
    },
    {
        name: 'HT-WLBLL Watchlog Bluetooth-Plus Compression Load Link',
        image: '/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/2nd category/Bluetooth-Plus Load Link.jpg',
    }
];

export default function WatchlogBluetoothPlusProducts() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                    Watchlog Bluetooth-Plus Pressure, Level & Force Sensors and App for up to 12 connected sensors & advanced app calculation features
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                    Watchlog Bluetooth-Plus is a short range wireless measurement solution, designed to work with iOS and Android devices, as well as third-party devices.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                    The Watchlog Bluetooth-Plus app has advanced dashboards to display status and log data, enhanced auto-discovery and management of available devices, such as weighing and flow balancing; to represent data.
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <p className="text-sm text-gray-600 mb-2">
                        With its multi-streaming distance of up to 10 metres, all powered from just 2 batteries for up to 10 metres and stored history points, from 1hr through to 10,000.
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                        Data can be shared using multiple methods including text message and email, directly from the app.
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                        Compatible with our standard Watchlog Bluetooth App, the Watchlog Bluetooth-Plus app has the following features:
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                        <li>• View up to 12 sensor readings at a time</li>
                        <li>• Use Bluetooth plus pressure sensor for many devices up to 10 metres distance</li>
                        <li>• View up to 12 sensor readings at a time</li>
                        <li>• Use Bluetooth plus pressure sensor for many devices up to 10 metres distance</li>
                        <li>• Up to 50 metres data transmission distance</li>
                        <li>• Supports 4 different pressure sensors with pressure ranges available from 0...25 bar up to 0...700 bar/kPa</li>
                        <li>• HT-WLB-Plus pressure sensors work with pressure ranges available from 0...25 bar up to +/-700 mV/kPa</li>
                        <li>• HT-WLB-Plus Bluetooth-Plus compression load cells available from 0...5 to 0...200 kN</li>
                        <li>• Software - Automatic, Industrial, load, smartphone, scale & liquid, mobile hydraulics, machine tools, and light industry</li>
                    </ul>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Ranges:</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <div key={index} className="text-center">
                            <div className="bg-white border border-gray-200 rounded-lg p-4 mb-3 h-40 flex items-center justify-center">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={120}
                                    height={120}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                            <p className="text-sm text-gray-900 font-medium leading-tight">
                                {product.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* App Section */}
            <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Watchlog Bluetooth-Plus iOS and Android App
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                    Create custom projects and displays to show data in a format which suits you. Displays can be created using a combination of graphics and numeric widgets.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                    Devices can be discovered and connected to smartphones or tablets. The app includes scanning rates from 500ms up to 10 minutes and stored history points, from 1hr through to 10,000.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                    Logged data can be shared using multiple methods including text message and email, directly from the app.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                    Compatible with our standard Watchlog Bluetooth App, the Watchlog Bluetooth-Plus app has the following features:
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                        <li>• Free iOS and Android mobile apps for viewing and logging data</li>
                        <li>• Project sharing</li>
                        <li>• Create calculation channels programmatically within the app. For example, using 2 flow difference between 2 pressure sensor readings to calculate differential pressure. The calculation can then be displayed with graphs.</li>
                        <li>• Real-time data from current dashboards to represent specific values such as tank indicators, or widgets</li>
                        <li>• Unit of measure support to control dashboards to represent selected values such as tank indicators, or widgets</li>
                    </ul>
                </div>
                
                <div className="text-center">
                    <Image
                        src="/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/2nd category/Bluetooth-Plus App Interface.jpg"
                        alt="Watchlog Bluetooth-Plus App Interface"
                        width={300}
                        height={200}
                        className="inline-block rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
}
