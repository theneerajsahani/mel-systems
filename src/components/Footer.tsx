export default function Footer() {
    return (
        <div className="flex flex-col bg-gray-50 gap-[20px] md:gap-[40px] items-start px-[20px] md:px-[64px] py-[50px] md:py-[100px] w-full max-w-screen-2xl h-auto">
            <div className="flex flex-col md:flex-row items-start w-full h-auto gap-[40px] md:gap-0">
                <div className="flex flex-col gap-[20px] md:gap-[40px] items-start w-full">
                    <div className="flex flex-col w-full gap-[8px] items-start">
                        <p className="text-[18px] md:text-[20px] font-bold">Mel Systems</p>
                        <p className="text-[14px] md:text-[16px]">We bring more life to your machines.</p>
                    </div>
                    <div className="flex flex-col w-full h-auto gap-[8px] items-start">
                        <p className="text-[18px] md:text-[20px] font-bold">Contact Us</p>
                        <p className="text-[14px] md:text-[16px]">Head Office: Via Enrico Toti, 29, 20900 Monza (MB) Italy</p>
                        <p className="text-[14px] md:text-[16px]">Operations: Piazza Giulio Prinetti 27/b, 23807 Merate (LC) Italy</p>
                        <p className="text-[14px] md:text-[16px]">Tel: +39 0392185668</p>
                        <p className="text-[14px] md:text-[16px]">Mail: info@mel-systems.it</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row w-full gap-[32px] md:gap-[16px] items-start">
                    <div className="flex flex-col items-start gap-[16px] w-full">
                        <p className="text-[16px] font-bold">Quick Links</p>
                        <p className="text-[14px] md:text-[16px]">Home</p>
                        <p className="text-[14px] md:text-[16px]">Products</p>
                        <p className="text-[14px] md:text-[16px]">Applications</p>
                        <p className="text-[14px] md:text-[16px]">Careers</p>
                        <p className="text-[14px] md:text-[16px]">Contact</p>
                    </div>
                    <div className="flex flex-col items-start gap-[16px] w-full">
                        <p className="text-[16px] font-bold">Products</p>
                        <p className="text-[14px] md:text-[16px]">Oil Conditioning</p>
                        <p className="text-[14px] md:text-[16px]">Systems</p>
                    </div>
                    <div className="flex flex-col items-start gap-[16px] w-full">
                        <p className="text-[16px] font-bold">Applications</p>
                        <p className="text-[14px] md:text-[16px]">Oil Conditioning</p>
                        <p className="text-[14px] md:text-[16px]">Systems</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full h-auto gap-[16px] items-start">
                <hr className="w-full h-[1px] bg-gray-500" />
                <div className="flex flex-col md:flex-row w-full h-auto gap-[16px] md:gap-0 md:justify-between">
                    <p className="text-[12px]">© 2025 Mel Systems. All rights reserved.</p>
                    <div className="flex flex-row gap-[16px] text-[12px] items-center">
                        <p>Terms and Conditions</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}