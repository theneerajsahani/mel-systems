import { TechnicalSpecsSection } from "@/components/TechnicalSpecsTable"

export interface ProductImage {
    src: string;
    alt: string;
}

export interface ProductData {
    id: string;
    name: string;
    category: string;
    subcategory?: string;
    subsubcategory?: string;
    subsubsubcategory?: string;
    brand: string;
    images?: ProductImage[];
    video?: string;
    description?: string[];
    productCharacteristics?: string[];
    kitContents?: string[];
    additionalSections?: {
        title?: string;
        content?: string;
        image?: ProductImage;
        videoEmbedUrl?: string;
    }[];
    technicalSpecs?: TechnicalSpecsSection[];
    orderCodes?: {
        baseCode: string;
        description: string;
        options: {
            label: string;
            choices: {
                range: string;
                code: string;
            }[];
        }[];
        note?: string;
    };
    slugPath: string[];
    categoryProductIds?: string[];
}

// ============================
// MOTEC
// ============================

// Category page - Motec
export const motecCategoryData: ProductData = {
    id: "motec",
    name: "Motec",
    category: "systems",
    subcategory: "motec",
    brand: "Motec",
    slugPath: ["systems", "motec"],
    categoryProductIds: [
        "rear-view-cameras",
        "front-camera-system",
        "digital-cameras",
        "camera-systems",
        "monitors",
        "digital-monitors",
        "fork-cameras",
        "video-control-units",
        "crane-cameras",
        "transmissions"
    ]
};

// ============================
// - Rear View Cameras
//     - MC3000B - Heavy-Duty Camera
//     - MC3000B-VA - Heavy-duty stainless steel-camera
//     - MC3000C-IR & WL - Night vision-compatible heavy-duty infrared camera with built-in light
//     - MC4000A - Heavy-duty camera
//     - MC4000A-IR & WL - Night-vision-compatible heavy-duty infrared camera with built-in light
//     - MC6000D - Sturdy universal camera
//     - MC7000C Series - Heavy Duty Camera
//     - MC7180N - Wide angle camera
//     - MC7000B-MH1
//     - MC7000B-MH2
// ============================

// Category page - Rear View Camera's
export const rearViewCamerasCategoryData: ProductData = {
    id: "rear-view-cameras",
    name: "Rear View Cameras",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "rear-view-cameras",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Rear view cameras/MC3000B/MC3000B.png", alt: "MC3000B Heavy-Duty Camera" }
    ],
    categoryProductIds: [
        "mc3000b-heavy-duty-camera",
        "mc3000b-va-heavy-duty-stainless-steel-camera",
        "mc3000c-ir-wl-night-vision-compatible-heavy-duty-infrared-camera-with-built-in-light",
        "mc4000a-heavy-duty-camera",
        "mc4000a-ir-wl-night-vision-compatible-heavy-duty-infrared-camera-with-built-in-light",
        "mc6000d-sturdy-universal-camera",
        "mc7000c-series-heavy-duty-camera",
        "mc7180n-wide-angle-camera",
        "mc7000b-mh1-heavy-duty-camera",
        "mc7000b-mh2-heavy-duty-camera"
    ],
    slugPath: ["systems", "motec", "rear-view-cameras"]
};

// Product Data - MC3000B - Heavy-Duty Camera
export const mc3000bHeavyDutyCameraData: ProductData = {
    id: "mc3000b-heavy-duty-camera",
    name: "MC3000B - Heavy-Duty Camera",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "rear-view-cameras",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Rear view cameras/MC3000B/MC3000B.png", alt: "MC3000B Heavy-Duty Camera" },
        { src: "/products/systems/Motec/Rear view cameras/MC3000B/MC3000B-1.png", alt: "MC3000B Heavy-Duty Camera Front" },
        { src: "/products/systems/Motec/Rear view cameras/MC3000B/MC3000B-2.png", alt: "MC3000B Heavy-Duty Camera Side" },
    ],
    description: [
        "The MC3000B with its rugged die-cast aluminium housing reliably solves visibility problems under extreme weather and environmental conditions. With numerous available viewing angles and plug-in connections, it offers a wide range of applications on commercial vehicles and mobile machinery.",
        "The MC3000B's mechanical and electric layout is ideally suited for rough conditions in heavy-duty applications, and the device is pressure washer-proof in accordance with IP69K to guarantee a log service life and reliability. The energy-efficient automotive CMOS sensor delivers excellent image quality even in difficult lighting conditions."
    ],
    productCharacteristics: [
        "Suitable for heavy-duty applications",
        "Immersion and jet cleaning-proof (IP68 and IP69K)",
        "Operating and storage temperature -60°C...+85°C",
        "2.5 W screen heater",
        "Automotive CMOS sensor",
        "Multiple horizontal view angles (20°, 40°, 70°, 90°, 100°, 115°)",
        "On-board network integration capability, 9 V...32 V DC"
    ],
    slugPath: ["systems", "motec", "rear-view-cameras", "mc3000b-heavy-duty-camera"]
};

// Product Data - MC3000B-VA - Heavy-duty stainless steel-camera
export const mc3000bVaHeavyDutyStainlessSteelCameraData: ProductData = {
    id: "mc3000b-va-heavy-duty-stainless-steel-camera",
    name: "MC3000B-VA - Heavy-duty Stainless Steel Camera",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "rear-view-cameras",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Rear view cameras/MC3000B-VA/MC3000B-VA.png", alt: "MC3000B-VA Heavy-duty Stainless Steel Camera" }
    ],
    description: [
        "The MC3000B-VA camera is a heavy duty camera made of VA steel, and therefore unique in the Motec camera series. Its rust-proof stainless steel alloy housing is ideally suited for applications in extreme weather and environmental conditions, as well as for special requirements in terms of hygiene. The housing is pressure washer-proof and IP69K-tested; the camera can withstand impacts up to 50 g and oscillations up to 30 g. The energy-efficient automotive CMOS sensor delivers an excellent image Quality in operating temperatures between -40°C and +85°C. The integrated, automatically controlled 2.5 Watt screen heater ensures perfect visibility at temperatures below 5°C."
    ],
    productCharacteristics: [
        "Suitable for heavy duty applications",
        "Robust, rust-proof stainless steel housing",
        "Immersion and jet cleaning-proof (IP68 and IP69K)",
        "Operating and storage temperature -40°C…+85°C",
        "2.5 W screen heater",
        "Automotive CMOS sensor",
        "90°or 100° horizontal view angle (other view angles on request)",
        "On-board network integration capability",
        "9 V…32 V DC"
    ],
    slugPath: ["systems", "motec", "rear-view-cameras", "mc3000b-va-heavy-duty-stainless-steel-camera"]
};

// Product Data - MC3000C-IR & WL - Night vision-compatible heavy-duty infrared camera with built-in light
export const mc3000cIrWlNightVisionCompatibleHeavyDutyInfraredCameraWithBuiltInLightData: ProductData = {
    id: "mc3000c-ir-wl-night-vision-compatible-heavy-duty-infrared-camera-with-built-in-light",
    name: "MC3000C-IR & WL - Night Vision-Compatible Heavy-Duty Infrared Camera with Built-in Light",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "rear-view-cameras",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Rear view cameras/MC3000C-IR & WL/MC3000C-IR & WL.png", alt: "MC3000C-IR & WL Camera" },
        { src: "/products/systems/Motec/Rear view cameras/MC3000C-IR & WL/MC3000C-IR & WL-1.png", alt: "MC3000C-IR & WL Camera Front" },
        { src: "/products/systems/Motec/Rear view cameras/MC3000C-IR & WL/MC3000C-IR & WL-2.png", alt: "MC3000C-IR & WL Camera Side" }
    ],
    description: [
        "The MC3000C-IR & WL is a night-vision heavy-duty camera with built-in infrared LEDS or white light. The camera automatically switches to LED mode as darkness sets in and delivers sharp black and white images. During the day, it gives crystal-clear images in colour. LED cameras are used everywhere where additional headlights are not to be or cannot be installed."
    ],
    productCharacteristics: [
        "Infrared lighting with a wavelength of 850 nm",
        "White light with a 120° beam angle",
        "Special screen heating for clear view, melts ice up to 3 mm thick",
        "SD resolution, analog video output",
        "Programmable overlays",
        "Robust, heavy-duty design",
        "Made in Germany"
    ],
    slugPath: ["systems", "motec", "rear-view-cameras", "mc3000c-ir-wl-night-vision-compatible-heavy-duty-infrared-camera-with-built-in-light"]
};

// Product Data - MC4000A - Heavy-duty camera
export const mc4000aHeavyDutyCameraData: ProductData = {
    id: "mc4000a-heavy-duty-camera",
    name: "MC4000A - Heavy-Duty Camera",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "rear-view-cameras",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Rear view cameras/MC4000A/MC4000A.png", alt: "MC4000A Heavy-Duty Camera" },
        { src: "/products/systems/Motec/Rear view cameras/MC4000A/MC4000A-1.png", alt: "MC4000A Heavy-Duty Camera Front" },
        { src: "/products/systems/Motec/Rear view cameras/MC4000A/MC4000A-2.png", alt: "MC4000A Heavy-Duty Camera Side" },
    ],
    description: [
        "The MC4000A is a heavy-duty camera with excellent electromagnetic compatibility (EMC). Its development was based on the strict requirements for industry and defence. The mechanical and electrical design resists high levels of strain with respect to shock, vibration, dust and moisture."
    ],
    productCharacteristics: [
        "SD resolution",
        "Video output format - analog 1Vss",
        "Scratch-proof front screen (MIL - STD - 810G",
        "Method 510 G Procedure II, blowing sand test)",
        "Programmable overlays",
        "Future-proof due to software updates"
    ],
    slugPath: ["systems", "motec", "rear-view-cameras", "mc4000a-heavy-duty-camera"]
};

// Product Data - MC4000A-IR & WL - Night-vision-compatible heavy-duty infrared camera with built-in light
export const mc4000aIrWlNightVisionCompatibleHeavyDutyInfraredCameraWithBuiltInLightData: ProductData = {
    id: "mc4000a-ir-wl-night-vision-compatible-heavy-duty-infrared-camera-with-built-in-light",
    name: "MC4000A-IR & WL - Night Vision-Compatible Heavy-Duty Infrared Camera with Built-in Light",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "rear-view-cameras",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Rear view cameras/MC4000A-IR & WL/MC4000A-IR & WL.png", alt: "MC4000A-IR & WL Camera" },
        { src: "/products/systems/Motec/Rear view cameras/MC4000A-IR & WL/MC4000A-IR & WL-1.png", alt: "MC4000A-IR & WL Camera Front" },
        { src: "/products/systems/Motec/Rear view cameras/MC4000A-IR & WL/MC4000A-IR & WL-2.png", alt: "MC4000A-IR & WL Camera Side" },
    ],
    description: [
        "The MC4000A-IR & WL is a robust, night vision-compatible heavy-duty infrared camera with high electromagnetic compatibility (EMC). Its development was based on the strict requirements for industry and defence. The mechanical and electrical design resists high levels of strain with respect to shock, vibration, dust and moisture."
    ],
    productCharacteristics: [
        "Infrared lighting with a wavelength of 940 nm",
        "White light with a 120° beam angle",
        "Special screen heating for clear view, melts ice up to 3 mm thick",
        "SD resolution",
        "Video output format analog 1Vss",
        "Scratch-proof front screen (MIL - STD - 810G Method 510 G Procedure II, blowing sand test)",
        "Programmable overlays",
        "Future-proof due to software updates",
        "Made in Germany"
    ],
    slugPath: ["systems", "motec", "rear-view-cameras", "mc4000a-ir-wl-night-vision-compatible-heavy-duty-infrared-camera-with-built-in-light"]
};

// Product Data - MC6000D - Sturdy universal camera
export const mc6000dSturdyUniversalCameraData: ProductData = {
    id: "mc6000d-sturdy-universal-camera",
    name: "MC6000D - Sturdy Universal Camera",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "rear-view-cameras",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Rear view cameras/MC6000D/MC6000D.png", alt: "MC6000D Sturdy Universal Camera" },
        { src: "/products/systems/Motec/Rear view cameras/MC6000D/MC6000D-1.png", alt: "MC6000D Sturdy Universal Camera Front" },
        { src: "/products/systems/Motec/Rear view cameras/MC6000D/MC6000D-2.png", alt: "MC6000D Sturdy Universal Camera Side" },
    ],
    description: [
        "TThe MC6000D camera was developed specifically for heavy duty applications. The robust design and special surface treatment makes it the perfect choice for use in extreme weather conditions. This camera is impervious to shock impacts up to 50 g and vibrations up to 30 g. The energy-efficient automotive CMOS sensor delivers an excellent image quality in operating temperatures between -40°C and +85°C. An integrated, automatically controlled 2.5 Watt screen heater ensures perfect visibility at temperatures below +5°C."
    ],
    productCharacteristics: [
        "Suitable for heavy duty applications",
        "Immersion and jet cleaning-proof (IP68 and IP69K)",
        "Operating and storage temperature -40°C…+85°C",
        "Thermally tempered, distortion-free glass",
        "2.5 W screen heater",
        "Automotive CMOS sensor",
        "90° or 70° horizontal view angle",
        "On-board network integration capability, 9 V…32 V DC",
        "Made in Germany"
    ],
    slugPath: ["systems", "motec", "rear-view-cameras", "mc6000d-sturdy-universal-camera"]
};

// Product Data - MC7000C Series - Heavy Duty Camera
export const mc7000cSeriesHeavyDutyCameraData: ProductData = {
    id: "mc7000c-series-heavy-duty-camera",
    name: "MC7000C Series - Heavy Duty Camera",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "rear-view-cameras",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Rear view cameras/MC7000C Series/MC7000C Series.png", alt: "MC7000C Series Heavy Duty Camera" },
        { src: "/products/systems/Motec/Rear view cameras/MC7000C Series/MC7000C Series-1.png", alt: "MC7000C Series Heavy Duty Camera Front" },
        { src: "/products/systems/Motec/Rear view cameras/MC7000C Series/MC7000C Series-2.png", alt: "MC7000C Series Heavy Duty Camera Side" },
    ],
    description: [
        "Whether as wayside monitoring, mirror substitute or surveillance of working areas – the compact design makes the MC7000C camera series the perfect choice for a wide range of applications."
    ],
    productCharacteristics: [
        "State-of-the-art image electronics (CMOS image sensor)",
        "High shock and vibration resistance",
        "High sensitivity to light",
        "Sharp and high-contrast images",
        "Highest protection class IP69K",
    ],
    slugPath: ["systems", "motec", "rear-view-cameras", "mc7000c-series-heavy-duty-camera"]
};

// Product Data - MC7180N - Wide angle camera
export const mc7180nWideAngleCameraData: ProductData = {
    id: "mc7180n-wide-angle-camera",
    name: "MC7180N - Wide Angle Camera",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "rear-view-cameras",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Rear view cameras/MC7180N/MC7180N.png", alt: "MC7180N Wide Angle Camera" }
    ],
    description: [
        "The MC7180N wide angle camera is the perfect choice for heavy duty 270°/360° surround vision systems. The 180° view angle and compact design allow an easy adaptation of the device to various vehicle types and visibility issues. The pressure washer proof MC7180N can also be used as a standalone device for heavy duty applications. It easily withstands shock impacts up to 50 g and oscillations up to 5 g. The energy-efficient automotive CMOS sensor delivers an excellent Image quality in operating temperatures between -40°C and +85°C."
    ],
    productCharacteristics: [
        "Pressure washer-proof (IP69K)",
        "Operating and storage temperature -40°C…+85°C",
        "CMOS 1/3 inch image sensor with sensor resolution horizontal 800 x 672 (RGB) x vertical 492 pixels",
        "180° horizontal view angle"
    ],
    slugPath: ["systems", "motec", "rear-view-cameras", "mc7180n-wide-angle-camera"]
};

// Product Data - MC7000B-MH1
export const mc7000bMh1HeavyDutyCameraData: ProductData = {
    id: "mc7000b-mh1-heavy-duty-camera",
    name: "MC7000B-MH1",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "rear-view-cameras",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Rear view cameras/MC7000B-MH1/MC7000B-MH1.png", alt: "MC7000B-MH1 Camera" },
        { src: "/products/systems/Motec/Rear view cameras/MC7000B-MH1/MC7000B-MH1-1.png", alt: "MC7000B-MH1 Camera Front" },
        { src: "/products/systems/Motec/Rear view cameras/MC7000B-MH1/MC7000B-MH1-2.png", alt: "MC7000B-MH1 Camera Side" }
    ],
    description: [
        "The MC7000B is a mobile heavy-duty camera that can be used as a rear view camera, work process or environment monitoring. Due to its small design, it is suitable for mounting on mobile machinery with limited space. The separate adjustment of the lens allows it to be mounted horizontally or overhead."
    ],
    productCharacteristics: [
        "State-of-the-art image electronics (CMOS image sensor)",
        "High shock and vibration resistance",
        "High sensitivity to light",
        "Sharp and high-contrast images",
        "Highest protection class IP69K"
    ],
    slugPath: ["systems", "motec", "rear-view-cameras", "mc7000b-mh1-heavy-duty-camera"]
};

// Product Data - MC7000B-MH2
export const mc7000bMh2HeavyDutyCameraData: ProductData = {
    id: "mc7000b-mh2-heavy-duty-camera",
    name: "MC7000B-MH2",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "rear-view-cameras",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Rear view cameras/MC7000B-MH2/MC7000B-MH2.png", alt: "MC7000B-MH2 Camera" }
    ],
    description: [
        "The MC7000B is a mobile heavy-duty camera that can be used as a rear view camera, work process or environment monitoring. Due to its small design, it is suitable for mounting on mobile machinery with limited space.",
        "The separate adjustment of the lens allows it to be mounted horizontally or overhead."
    ],
    productCharacteristics: [
        "Compact heavy duty rear view camera",
        "Modern image electronics",
        "Active PAL resolution H1.280 x V960",
        "High shock and vibration resistance",
        "High sensitivity to light",
        "Sharp and high-contrast images",
        "Highest protection class IP69K"
    ],
    slugPath: ["systems", "motec", "rear-view-cameras", "mc7000b-mh2-heavy-duty-camera"]
};

// ============================
// - Front Camera System
//     - MC3050B-4-VKMS - Heavy-duty camera for front implements
// ============================

// Category page - Front Camera System
export const frontCameraSystemCategoryData: ProductData = {
    id: "front-camera-system",
    name: "Front Camera System",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "front-camera-system",
    brand: "Motec",
    images: [
        {
            src: "/products/systems/Motec/Front camera system/MC3050B-4-VKMS/MC3050B-4-VKMS.png",
            alt: "MC3050B-4-VKMS Heavy-duty camera for front implements"
        },
    ],
    categoryProductIds: [
        "mc3050b-4-vkms-heavy-duty-camera-for-front-implements"
    ],
    slugPath: ["systems", "motec", "front-camera-system"]
};

// Product Data - MC3050B-4-VKMS - Heavy-duty camera for front implements
export const mc3050b4VkmsHeavyDutyCameraForFrontImplementsData: ProductData = {
    id: "mc3050b-4-vkms-heavy-duty-camera-for-front-implements",
    name: "MC3050B-4-VKMS - Heavy-duty camera for front implements",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "front-camera-system",
    brand: "Motec",
    images: [
        {
            src: "/products/systems/Motec/Front camera system/MC3050B-4-VKMS/MC3050B-4-VKMS.png",
            alt: "MC3050B-4-VKMS Heavy-duty camera for front implements"
        },
        {
            src: "/products/systems/Motec/Front camera system/MC3050B-4-VKMS/MC3050B-4-VKMS-1.png",
            alt: "MC3050B-4-VKMS Heavy-duty camera for front implements"
        },
        {
            src: "/products/systems/Motec/Front camera system/MC3050B-4-VKMS/MC3050B-4-VKMS-2.png",
            alt: "MC3050B-4-VKMS Heavy-duty camera for front implements"
        },
    ],
    description: [
        "The camera MC3050B-4-VKMS is a heavy-duty camera, specially developed for front implements. Unlike the proven camera series MC3000B, its front pane has a double-sided optical interference coating. This sophisticated coating prevents optical reflections which could occur on the glass surface by sunlight or artificial light. In addition to this, the camera is equipped with a high end, low stray light lens. Therefore, reflections can be reduced to a minimum. Even at low sun or glaring headlights, the camera still provides realistic images. Thus, the camera MC3050B-4-VKMS is an essential part of the camera monitor system for front implements."
    ],
    productCharacteristics: [
        "Front pane with double-sided optical interference coating",
        "Low stray light lens",
        "Automotive CMOS sensor",
        "50° horizontal view angle",
        "2.5 W screen heater",
        "Immersion and jet cleaning-proof (IP68 and IP69K)",
        "Operating and storage temperature -60°C...+85°C",
        "On-board network integration capability, 9 V...32 V DC"
    ],
    slugPath: ["systems", "motec", "front-camera-system", "mc3050b-4-vkms-heavy-duty-camera-for-front-implements"]
};

// ============================
// - Digital Camera's
//     - MCDB7000A - Heavy Duty Broadr-Reach Camera
//     - MCDE3000 - OEM Ethernet Camera
//     - MCDL7000A - Heavy-Duty LVDS Camera
//     - MCDE7000A - Heavy-Duty Ethernet Camera
//     - MCDE5200 - Digital Motor Zoom Camera
// ============================

// Category page - Digital Camera's
export const digitalCamerasCategoryData: ProductData = {
    id: "digital-cameras",
    name: "Digital Camera's",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "digital-cameras",
    brand: "Motec",
    images: [
        {
            src: "/products/systems/Motec/Digital camera/MCDB7000A/MCDB7000A.png",
            alt: "MCDB7000A Heavy Duty Broadr-Reach Camera"
        },
    ],
    categoryProductIds: [
        "mcdb7000a-heavy-duty-broadr-reach-camera",
        "mcde3000-oem-ethernet-camera",
        "mcdl7000a-heavy-duty-lvds-camera",
        "mcde7000a-heavy-duty-ethernet-camera",
        "mcde5200-digital-motor-zoom-camera"
    ],
    slugPath: ["systems", "motec", "digital-cameras"]
};

// Product Data - MCDB7000A - Heavy Duty Broadr-Reach Camera
export const mcdb7000aHeavyDutyBroadrReachCameraData: ProductData = {
    id: "mcdb7000a-heavy-duty-broadr-reach-camera",
    name: "MCDB7000A - Heavy Duty Broadr-Reach Camera",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "digital-cameras",
    brand: "Motec",
    images: [
        {
            src: "/products/systems/Motec/Digital camera/MCDB7000A/MCDB7000A.png",
            alt: "MCDB7000A Heavy Duty Broadr-Reach Camera"
        },
        {
            src: "/products/systems/Motec/Digital camera/MCDB7000A/MCDB7000A-1.png",
            alt: "MCDB7000A Heavy Duty Broadr-Reach Camera"
        },
        {
            src: "/products/systems/Motec/Digital camera/MCDB7000A/MCDB7000A-2.png",
            alt: "MCDB7000A Heavy Duty Broadr-Reach Camera"
        },
        {
            src: "/products/systems/Motec/Digital camera/MCDB7000A/MCDB7000A-3.png",
            alt: "MCDB7000A Heavy Duty Broadr-Reach Camera"
        }
    ],
    description: [
        "The MCDB7000A is a BroadR-Reach camera suitable for mobile use. It can be utilised in networks compliant with IEEE 802.3 (LAN). Fitted with a high optical dynamic range (HDR) it is used in a variety of applications. For example, it can be integrated into existing video monitoring systems or used for video streaming across large distances."
    ],
    productCharacteristics: [
        "Fully digital image/video transmission (30 fps)",
        "Full HD resolution (1920 x 1080)",
        "HDR sensor (high dynamic range)",
        "Video output motion JPEG/H.264",
        "Configurable video resolution, compression rate, frame rate, mirroring, picture parameters, cropping, network parameters etc",
        "High sharpness due to Active Lens Alignment",
        "Software updates make the unit future proof"
    ],
    slugPath: ["systems", "motec", "digital-cameras", "mcdb7000a-heavy-duty-broadr-reach-camera"]
};

// Product Data - MCDE3000 - OEM Ethernet Camera
export const mcde3000OemEthernetCameraData: ProductData = {
    id: "mcde3000-oem-ethernet-camera",
    name: "MCDE3000 - OEM Ethernet Camera",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "digital-cameras",
    brand: "Motec",
    images: [
        {
            src: "/products/systems/Motec/Digital camera/MCDE3000/MCDE3000.png",
            alt: "MCDE3000 OEM Ethernet Camera"
        },
        {
            src: "/products/systems/Motec/Digital camera/MCDE3000/MCDE3000-1.png",
            alt: "MCDE3000 OEM Ethernet Camera"
        },
        {
            src: "/products/systems/Motec/Digital camera/MCDE3000/MCDE3000-2.png",
            alt: "MCDE3000 OEM Ethernet Camera"
        },
        {
            src: "/products/systems/Motec/Digital camera/MCDE3000/MCDE3000-3.png",
            alt: "MCDE3000 OEM Ethernet Camera"
        },
        {
            src: "/products/systems/Motec/Digital camera/MCDE3000/MCDE3000-4.png",
            alt: "MCDE3000 OEM Ethernet Camera"
        },
    ],
    description: [
        "The MCDE3000 is an Ethernet camera suitable for mobile use. It can be utilised in networks compliant with IEEE 802.3 (LAN). Fitted with intelligent Image processing and dynamic overlays, it functions as a smart sensor in a variety of applications. For example, it can be integrated into existing video monitoring systems or used for video Streaming across large distances. The MCDE3000 meets the AEF requirements for future digital camera interfaces."
    ],
    productCharacteristics: [
        "Integrated, FPGA based video processing unit for customised functions as:",
        "- Image processing",
        "- Feature tracking, active overlays possible",
        "- Inspection and measurement of objects",
        "- Reading of coded information (QR, OCR)",
        "- Binary image processing",
        "- Augmented reality",
        "Fully digital image/video transmission (30 fps)",
        "Video output Motion JPEG",
        "Configurable video resolution, compression rate and frame rate",
        "Voltage supply via PoE"
    ],
    slugPath: ["systems", "motec", "digital-cameras", "mcde3000-oem-ethernet-camera"]
};

// Product Data - MCDL7000A - Heavy-Duty LVDS Camera
export const mcdl7000aHeavyDutyLvdsCameraData: ProductData = {
    id: "mcdl7000a-heavy-duty-lvds-camera",
    name: "MCDL7000A - Heavy-Duty LVDS Camera",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "digital-cameras",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Digital camera/MCDL7000A/MCDL7000A.png", alt: "MCDL7000A Heavy-Duty LVDS Camera" },
        { src: "/products/systems/Motec/Digital camera/MCDL7000A/MCDL7000A-1.png", alt: "MCDL7000A Heavy-Duty LVDS Camera" },
        { src: "/products/systems/Motec/Digital camera/MCDL7000A/MCDL7000A-2.png", alt: "MCDL7000A Heavy-Duty LVDS Camera" },
    ],
    description: [
        "The MCDL7000A is a compact 2.3 megapixel camera suitable for mobile use. The LVDS interface transmits uncompressed raw data for image processing without quality loss at a speed of up to 3 gigabits per second. LVDS cameras are used in applications that require highspeed serial transmission, such as video streaming, 360° top view systems, stereo cameras or AI applications."
    ],
    productCharacteristics: [
        "Uncompressed transmission of raw image data at 30 fps",
        "Gigabit data streaming / RAW data streaming",
        "Suitable for integration into digital systems or AI applications (only with Video Control Unit)",
        "Lossless data transmission",
        "2.3 megapixel camera (1920 x 1200)",
        "Very high dynamic range of 120 dB",
        "Interface GMSL2 with Power over Coax",
        "Fully automatic Active Alignment process for best possible focusing and alignment of the optics"
    ],
    slugPath: ["systems", "motec", "digital-cameras", "mcdl7000a-heavy-duty-lvds-camera"]
};

// Product Data - MCDE7000A - Heavy-Duty Ethernet Camera
export const mcde7000aHeavyDutyEthernetCameraData: ProductData = {
    id: "mcde7000a-heavy-duty-ethernet-camera",
    name: "MCDE7000A - Heavy-Duty Ethernet Camera",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "digital-cameras",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Digital camera/MCDE7000A/MCDE7000A.png", alt: "MCDE7000A Heavy-Duty Ethernet Camera" },
        { src: "/products/systems/Motec/Digital camera/MCDE7000A/MCDE7000A-1.png", alt: "MCDE7000A Heavy-Duty Ethernet Camera" },
        { src: "/products/systems/Motec/Digital camera/MCDE7000A/MCDE7000A-2.png", alt: "MCDE7000A Heavy-Duty Ethernet Camera" }
    ],
    description: [
        "The MCDE7000A digital camera is a very compact 100 Mbit/s Ethernet camera suitable for mobile use in IEEE 802.3 (LAN) networks. Equipped with a wide range of image angles, configurable resolution up to Full HD and wide dynamic range (HDR), it is used in a variety of applications, such as integration into existing video surveillance systems or video streaming over long distances."
    ],
    productCharacteristics: [
        "Fully digital image/video transmission (30 fps)",
        "Configurable resolution up to Full HD (1920 x 1080)",
        "HDR sensor (high dynamic range)",
        "Video output motion JPEG/H.264",
        "Configurable video resolution, compression rate, frame rate, mirroring, picture parameters, cropping, network parameters etc.",
        "Power supply via passive PoE",
        "High sharpness due to active Lens Alignment",
        "Software updates make the unit future proof"
    ],
    slugPath: ["systems", "motec", "digital-cameras", "mcde7000a-heavy-duty-ethernet-camera"]
};

// Product Data - MCDE5200 - Digital Motor Zoom Camera
export const mcde5200DigitalMotorZoomCameraData: ProductData = {
    id: "mcde5200-digital-motor-zoom-camera",
    name: "MCDE5200 - Digital Motor Zoom Camera",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "digital-cameras",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Digital camera/MCDE5200/MCDE5200.jpg", alt: "MCDE5200 Digital Motor Zoom Camera" },
        { src: "/products/systems/Motec/Digital camera/MCDE5200/MCDE5200-1.jpg", alt: "MCDE5200 Digital Motor Zoom Camera Side" },
        { src: "/products/systems/Motec/Digital camera/MCDE5200/MCDE5200-2.jpg", alt: "MCDE5200 Digital Motor Zoom Camera Rear" }
    ],
    description: [
        "The MCDE5200 is a digital motor zoom camera specifically designed for cranes for hook and load monitoring. Advanced video module technology delivers sharp, high-contrast images and allows 36x optical zoom and 16x digital zoom. Equipped with an Ethernet interface, the MCDE5200 is suitable for use in IEEE 802.3 (LAN) networks. The Ethernet interface guarantees fast, simple and efficient control."
    ],
    productCharacteristics: [
        "Configurable up to Full HD resolution (1920 x 1080)",
        "HDR sensor (high dynamic range)",
        "Digital image/video transmission (up to 60 fps)",
        "36x optical zoom and 16x digital zoom",
        "Screen heater",
        "Video output: H.264 | MJPEG"
    ],
    slugPath: ["systems", "motec", "digital-cameras", "mcde5200-digital-motor-zoom-camera"]
};

// ============================
// - Monitors
//     - MD3071A - 7" Monitor
//     - MD3073 - Waterproof heavy-duty monitor
//     - MD3100 - 10.2" Monitor
//     - 17 Zoll LCD Monitor
//     - MD4074-Quad-IP30 & IP67
// ============================

// Category page - Monitors
export const monitorsCategoryData: ProductData = {
    id: "monitors",
    name: "Monitors",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "monitors",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Monitors/MD3071A/MD3071A.png", alt: "MD3071A 7 inch Monitor" },
    ],
    categoryProductIds: [
        "md3071a-7-monitor",
        "md3073-waterproof-heavy-duty-monitor",
        "md3100-10-2-monitor",
        "17-zoll-lcd-monitor",
        "md4074-quad-ip30-ip67-heavy-duty-monitor"
    ],
    slugPath: ["systems", "motec", "monitors"]
};

// Product Data - MD3071A - 7" Monitor
export const md3071a7MonitorData: ProductData = {
    id: "md3071a-7-monitor",
    name: "MD3071A - 7\" Monitor",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "monitors",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Monitors/MD3071A/MD3071A.png", alt: "MD3071A 7 inch Monitor" },
        { src: "/products/systems/Motec/Monitors/MD3071A/MD3071A-1.png", alt: "MD3071A 7 inch Monitor" },
        { src: "/products/systems/Motec/Monitors/MD3071A/MD3071A-2.png", alt: "MD3071A 7 inch Monitor" },
        { src: "/products/systems/Motec/Monitors/MD3071A/MD3071A-3.png", alt: "MD3071A 7 inch Monitor" },
        { src: "/products/systems/Motec/Monitors/MD3071A/MD3071A-4.png", alt: "MD3071A 7 inch Monitor" }
    ],
    description: [
        "The 7\" MD3071A is the premium monitor in Motec's product line and can be used in all industry sectors. Developed and manufactured in Germany, it provides an extensive amount of intelligent functions for various heavy-duty applications. The images of the display are crystal clear, even under the most severe environmental conditions. The option to upgrade the software keeps the MD3071A at the state-of-the-art technology level and makes the monitor future-proof."
    ],
    productCharacteristics: [
        "Slim and compact design",
        "PAL/NTSC video system",
        "Future-proof due to continuous software updates",
        "Supply voltage of 9 V...60 V DC",
        "Connection of up to 2 cameras and one additional external video controller (for up to 4 more cameras)",
        "Automatic dimmer function",
        "Illuminated keyboard",
        "Deep, serial light protection hood (impact protection conformity)",
        "Made in Germany"
    ],
    slugPath: ["systems", "motec", "monitors", "md3071a-7-monitor"]
};

// Product Data - MD3073 - Waterproof heavy-duty monitor
export const md3073WaterproofHeavyDutyMonitorData: ProductData = {
    id: "md3073-waterproof-heavy-duty-monitor",
    name: "MD3073 - Waterproof Heavy-Duty Monitor",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "monitors",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Monitors/MD3073/MD3073.png", alt: "MD3073 Waterproof Heavy-Duty Monitor" },
        { src: "/products/systems/Motec/Monitors/MD3073/MD3073-1.png", alt: "MD3073 Waterproof Heavy-Duty Monitor" },
        { src: "/products/systems/Motec/Monitors/MD3073/MD3073-2.png", alt: "MD3073 Waterproof Heavy-Duty Monitor" },
        { src: "/products/systems/Motec/Monitors/MD3073/MD3073-3.png", alt: "MD3073 Waterproof Heavy-Duty Monitor" },
        { src: "/products/systems/Motec/Monitors/MD3073/MD3073-4.png", alt: "MD3073 Waterproof Heavy-Duty Monitor" },
    ],
    description: [
        "The MD3073 water and dust-proof monitor has been specially designed for mobile machines where water and dust are major considerations. It is mainly used in forklift and logistics, and here primarily in cold store operations. Its strengths include coping with fluctuations between hot and cold temperatures. The display still delivers crystal clear images even under these difficult environmental conditions. The robust monitor can also be used for construction, agricultural and foundry applications. Software updates keep the MD3073 at the cutting edge of technology and ensure it is futureproof."
    ],
    productCharacteristics: [
        "Robust water and dust-proof monitor",
        "Display scratch-resistant and anti-reflective",
        "7'' monitor (17.8 cm screen diagonal)",
        "Flat and compact design",
        "PAL/NTSC video system",
        "Future-proof due to software updates",
        "Supply voltage of 9 V...60 V DC",
        "Connection of up to two cameras and one additional external video controller (for up to four more cameras)",
        "Automatic dimmer function",
        "Back-lit keyboard",
        "Deep, serial light protection hood (impact protection conformity)"
    ],
    slugPath: ["systems", "motec", "monitors", "md3073-waterproof-heavy-duty-monitor"]
};

// Product Data - MD3100 - 10.2" Monitor
export const md3100102MonitorData: ProductData = {
    id: "md3100-10-2-monitor",
    name: "MD3100 - 10.2\" Monitor",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "monitors",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Monitors/MD3100/MD3100.png", alt: "MD3100 10.2 inch Monitor" },
        { src: "/products/systems/Motec/Monitors/MD3100/MD3100-1.png", alt: "MD3100 10.2 inch Monitor" },
        { src: "/products/systems/Motec/Monitors/MD3100/MD3100-2.png", alt: "MD3100 10.2 inch Monitor" },
        { src: "/products/systems/Motec/Monitors/MD3100/MD3100-3.png", alt: "MD3100 10.2 inch Monitor" },
        { src: "/products/systems/Motec/Monitors/MD3100/MD3100-4.png", alt: "MD3100 10.2 inch Monitor" },
    ],
    description: [
        "The MD3100 is a 10.2\" LCD monitor for industrial application with powder-coated metal housing. The front of the monitor complies with the regulations of the dust and spray water protection class."
    ],
    productCharacteristics: [
        "Screen diagonal 25.9 cm / 10.2\"",
        "Sturdy metal housing",
        "Sturdy metal housing",
        "Power supply via MVCU"
    ],
    slugPath: ["systems", "motec", "monitors", "md3100-10-2-monitor"]
};

// Product Data - 17 Zoll LCD Monitor
export const lcd17zollLCDMonitorData: ProductData = {
    id: "17-zoll-lcd-monitor",
    name: "17 Zoll LCD Monitor",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "monitors",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Monitors/17 Zoll LCD Monitor/17ZollLCDMonitor.png", alt: "17 Zoll LCD Monitor" },
        { src: "/products/systems/Motec/Monitors/17 Zoll LCD Monitor/17ZollLCDMonitor-1.png", alt: "17 Zoll LCD Monitor" },
        { src: "/products/systems/Motec/Monitors/17 Zoll LCD Monitor/17ZollLCDMonitor-2.png", alt: "17 Zoll LCD Monitor" },
    ],
    description: [
        "The 17\" LCD monitor is a monitor for industrial applications and stationary use with powder-coated metal housing. The large screen size ensures the display of complex image combinations. The higher resolution provides sharp camera images that are true to the detail."
    ],
    productCharacteristics: [
        "For industrial and stationary applications",
        "Sturdy, resistant housing",
        "Housing degree of protection IP54 (front)"
    ],
    slugPath: ["systems", "motec", "monitors", "17-zoll-lcd-monitor"]
};

// Product Data - MD4074-Quad-IP30 & IP67
export const md4074QuadIp30Ip67HeavyDutyMonitorData: ProductData = {
    id: "md4074-quad-ip30-ip67-heavy-duty-monitor",
    name: "MD4074-Quad-IP30 & IP67",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "monitors",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Monitors/MD4074-Quad-IP30 & IP67/MD4074-Quad-IP.png", alt: "MD4074-Quad-IP30 & IP67 Monitor" },
        { src: "/products/systems/Motec/Monitors/MD4074-Quad-IP30 & IP67/MD4074-Quad-IP-1.png", alt: "MD4074-Quad-IP30 & IP67 Monitor" },
        { src: "/products/systems/Motec/Monitors/MD4074-Quad-IP30 & IP67/MD4074-Quad-IP-2.png", alt: "MD4074-Quad-IP30 & IP67 Monitor" },
        { src: "/products/systems/Motec/Monitors/MD4074-Quad-IP30 & IP67/MD4074-Quad-IP-3.png", alt: "MD4074-Quad-IP30 & IP67 Monitor" },
    ],
    description: [
        "The MD4074-Quad-IP30 & IP67 is a rugged heavy-duty monitor. Various image modes can be displayed on the screen and up to 4 camera images can be displayed simultaneously, including interval-controlled image switching."
    ],
    productCharacteristics: [
        "7'' monitor (17.8 cm screen diagonal)",
        "PAL/NTSC video system",
        "Direct connection of up to 4 cameras",
        "Quad screen - up to 4 images simultaneously",
        "Interval-controlled image switching possible",
        "Auxiliary lines",
        "Integrated loudspeaker"
    ],
    slugPath: ["systems", "motec", "monitors", "md4074-quad-ip30-ip67-heavy-duty-monitor"]
};

// ============================
// - Digital Monitors
//     - MDDE1072 7'' Heavy-Duty Digital Ethernet Monitor 
//     - MDDE1102 10'' Heavy-Duty Digital Ethernet Monitor
//     - MDDE1122 12'' Heavy-Duty Digital Ethernet Monitor
// ============================

// Category page - Digital Monitors
export const digitalMonitorsCategoryData: ProductData = {
    id: "digital-monitors",
    name: "Digital Monitors",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "digital-monitors",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Digital Monitors/MDDE1072/MDDE1072.png", alt: "MDDE1072 7 inch Digital Ethernet Monitor" },
    ],
    categoryProductIds: [
        "mdde1072-7-heavy-duty-digital-ethernet-monitor",
        "mdde1102-10-heavy-duty-digital-ethernet-monitor",
        "mdde1122-12-heavy-duty-digital-ethernet-monitor"
    ],
    slugPath: ["systems", "motec", "digital-monitors"]
};

// Product Data - MDDE1072 7'' Heavy-Duty Digital Ethernet Monitor
export const mdde10727HeavyDutyDigitalEthernetMonitorData: ProductData = {
    id: "mdde1072-7-heavy-duty-digital-ethernet-monitor",
    name: "MDDE1072 7\" Heavy-Duty Digital Ethernet Monitor",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "digital-monitors",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Digital Monitors/MDDE1072/MDDE1072.png", alt: "MDDE1072 7 inch Digital Ethernet Monitor" },
        { src: "/products/systems/Motec/Digital Monitors/MDDE1072/MDDE1072-1.png", alt: "MDDE1072 7 inch Digital Ethernet Monitor Side" },
        { src: "/products/systems/Motec/Digital Monitors/MDDE1072/MDDE1072-2.png", alt: "MDDE1072 7 inch Digital Ethernet Monitor Rear" },
        { src: "/products/systems/Motec/Digital Monitors/MDDE1072/MDDE1072-3.png", alt: "MDDE1072 7 inch Digital Ethernet Monitor Display" },
    ],
    description: [
        "The MDDE1072 is a digital monitor that is used in IEEE 802.3 (LAN) networks on mobile machines as well as in industrial environments. Due to its robust electrical and mechanical design, the MDDE1072 is specially designed for use in harsh environments with high mechanical loads or environmental influences. The well thought-out and simple handling of the user interface guarantees a fast and individual configuration of the numerous functions."
    ],
    productCharacteristics: [
        "7'' monitor (17.77 cm screen diagonal)",
        "Resolution 800 x 480 pixels",
        "TFT-LCD module (Thin Film Transistor Liquid Crystal display) with a cover made of hardened soda-lime glass",
        "Picture loss and still image detection",
        "Automatic backlighting",
        "Supply voltage from 9 V...36 V DC",
        "Future proof through software updates"
    ],
    slugPath: ["systems", "motec", "digital-monitors", "mdde1072-7-heavy-duty-digital-ethernet-monitor"]
};

// Product Data - MDDE1102 10'' Heavy-Duty Digital Ethernet Monitor
export const mdde110210HeavyDutyDigitalEthernetMonitorData: ProductData = {
    id: "mdde1102-10-heavy-duty-digital-ethernet-monitor",
    name: "MDDE1102 10\" Heavy-Duty Digital Ethernet Monitor",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "digital-monitors",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Digital Monitors/MDDE1102/MDDE1102.png", alt: "MDDE1102 10 inch Digital Ethernet Monitor" },
        { src: "/products/systems/Motec/Digital Monitors/MDDE1102/MDDE1102-1.png", alt: "MDDE1102 10 inch Digital Ethernet Monitor Side" },
        { src: "/products/systems/Motec/Digital Monitors/MDDE1102/MDDE1102-2.png", alt: "MDDE1102 10 inch Digital Ethernet Monitor Rear" },
        { src: "/products/systems/Motec/Digital Monitors/MDDE1102/MDDE1102-3.png", alt: "MDDE1102 10 inch Digital Ethernet Monitor Display" },
    ],
    description: [
        "The MDDE1102 is a digital monitor used in IEEE 802.3 (LAN) networks on mobile machines as well as in industrial environments. Due to its robust electrical and mechanical design, the MDDE1102 is specially designed for use in harsh environments with high mechanical loads or environmental influences. The sophisticated and simple handling of the user interface guarantees a fast and individual configuration of the numerous functions."
    ],
    productCharacteristics: [
        "10'' monitor (25.58 cm screen diagonal)",
        "Resolution 1280 x 800 pixels",
        "TFT-LCD module (Thin Film Transistor Liquid Crystal Display) with a cover glass made of hardened soda-lime glass",
        "Connection of up to 2 cameras without switch and up to x cameras with switch",
        "Live image analysis by live ticker and bluescreen",
        "Automatic backlight",
        "Supply voltage from 9 V...36 V DC"
    ],
    slugPath: ["systems", "motec", "digital-monitors", "mdde1102-10-heavy-duty-digital-ethernet-monitor"]
};

// Product Data - MDDE1122 12'' Heavy-Duty Digital Ethernet Monitor
export const mdde112212HeavyDutyDigitalEthernetMonitorData: ProductData = {
    id: "mdde1122-12-heavy-duty-digital-ethernet-monitor",
    name: "MDDE1122 12\" Heavy-Duty Digital Ethernet Monitor",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "digital-monitors",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Digital Monitors/MDDE1122/MDDE1122.png", alt: "MDDE1122 12 inch Digital Ethernet Monitor" },
        { src: "/products/systems/Motec/Digital Monitors/MDDE1122/MDDE1122-1.png", alt: "MDDE1122 12 inch Digital Ethernet Monitor Side" },
        { src: "/products/systems/Motec/Digital Monitors/MDDE1122/MDDE1122-2.png", alt: "MDDE1122 12 inch Digital Ethernet Monitor Rear" },
        { src: "/products/systems/Motec/Digital Monitors/MDDE1122/MDDE1122-3.png", alt: "MDDE1122 12 inch Digital Ethernet Monitor Display" },
    ],
    description: [
        "The MDDE1122 is a digital monitor that is used in IEEE 802.3 (LAN) networks on mobile machines as well as in industrial environments. Due to its robust electrical and mechanical design, the MDDE1122 is specially designed for use in harsh environments with high mechanical loads or environmental influences. The well thought-out and simple handling of the user interface guarantees a fast and individual configuration of the numerous functions."
    ],
    productCharacteristics: [
        "12'' monitor (30.79 cm screen diagonal)",
        "Resolution 1280 x 800 pixels",
        "TFT-LCD module (Thin Film Transistor Liquid Crystal display) with a cover made of hardened soda-lime glass",
        "Connection of up to 2 cameras without switch and up to x cameras with switch",
        "Picture loss and still image detection",
        "Automatic backlighting",
        "Supply voltage from 9 V...36 V DC",
    ],
    slugPath: ["systems", "motec", "digital-monitors", "mdde1122-12-heavy-duty-digital-ethernet-monitor"]
};

// ============================
// - Fork Camera's
//     - MC9000 - Sturdy fork camera 
//     - MC9150B - Heavy-duty pinhole camera 
//     - MC9250 - Sturdy fork camera
//     - MC925C - Fork-arm Mounted Camera
// ============================

// Category page - Fork Camera's
export const forkCamerasCategoryData: ProductData = {
    id: "fork-cameras",
    name: "Fork Camera's",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "fork-cameras",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Fork Camera/MC9000/MC9000.png", alt: "MC9000 Sturdy Fork Camera" },
    ],
    categoryProductIds: [
        "mc9000-sturdy-fork-camera",
        "mc9150b-heavy-duty-pinhole-camera",
        "mc9250-sturdy-fork-camera",
        "mc925c-fork-arm-mounted-camera"
    ],
    slugPath: ["systems", "motec", "fork-cameras"]
};

// Product Data - MC9000 - Sturdy fork camera
export const mc9000SturdyForkCameraData: ProductData = {
    id: "mc9000-sturdy-fork-camera",
    name: "MC9000 - Sturdy Fork Camera",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "fork-cameras",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Fork Camera/MC9000/MC9000.png", alt: "MC9000 Sturdy Fork Camera" }
    ],
    description: [
        "The MC9000 fork camera is designed especially for forklift trucks and is mounted on the inside of the fork. This places the camera at the eye level of the pallet. Based on its pinhole size opening in the housing, the lens is protected from damage that may be caused by lattice boxes or pallets."
    ],
    productCharacteristics: [
        "Stainless steel casing",
        "Extremely resistant to impact",
        "Mounting on the inside of the fork"
    ],
    slugPath: ["systems", "motec", "fork-cameras", "mc9000-sturdy-fork-camera"]
};

// Product Data - MC9150B - Heavy-duty pinhole camera
export const mc9150bHeavyDutyPinholeCameraData: ProductData = {
    id: "mc9150b-heavy-duty-pinhole-camera",
    name: "MC9150B - Heavy-duty Pinhole Camera",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "fork-cameras",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Fork Camera/MC9150B/MC9150B.png", alt: "MC9150B Heavy-duty Pinhole Camera" },
        { src: "/products/systems/Motec/Fork Camera/MC9150B/MC9150B-1.png", alt: "MC9150B Heavy-duty Pinhole Camera Side" }
    ],
    description: [
        "The MC9150B camera is designed especially for forklift trucks and is mounted to the back of the fork. The 50° viewing angle makes it possible to observe both forks. Based on its pinhole size opening in the housing, the lens is protected from damage that may be caused by lattice boxes or pallets. The camera has a very high shock- and permanently shock-resistant up to 100 g."
    ],
    productCharacteristics: [
        "Robust stainless steel housing",
        "Front screen made of scratch resistant sapphire screen",
        "State-of-the-art image electronics (CMOS image sensor)",
        "High shock resistance",
        "High sensitivity to light",
        "Pinhole lens (3 mm)",
        "Highest protection class IP69K"
    ],
    slugPath: ["systems", "motec", "fork-cameras", "mc9150b-heavy-duty-pinhole-camera"]
};

// Product Data - MC9250 - Sturdy fork camera
export const mc9250SturdyForkCameraData: ProductData = {
    id: "mc9250-sturdy-fork-camera",
    name: "MC9250 - Sturdy Fork Camera",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "fork-cameras",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Fork Camera/MC9250/MC9250.png", alt: "MC9250 Sturdy Fork Camera" }
    ],
    description: [
        "The MC9250 is mounted inside the fork tip, meaning it is always at the same level as the pallet. The pinhole lens and the associated pin-prick sized opening in the casing reduced the risk of load carrier damaging the lens."
    ],
    productCharacteristics: [
        "Robust stainless steel housing",
        "State-of-the-art image electronics (CMOS image sensor)",
        "High shock resistance",
        "Safe and quick pallet handling",
        "Highest protection class IP69K",
        "Pinhole lens (3 mm)",
        "High sensitivity to light",
        "Built-in heater for use inside refrigerated warehouse"
    ],
    slugPath: ["systems", "motec", "fork-cameras", "mc9250-sturdy-fork-camera"]
};

// Product Data - MC925C - Fork-arm Mounted Camera
export const mc925cForkArmMountedCameraData: ProductData = {
    id: "mc925c-fork-arm-mounted-camera",
    name: "MC925C - Fork-arm Mounted Camera",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "fork-cameras",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Fork Camera/MC925C/MC925C.png", alt: "MC925C Fork-arm Mounted Camera" },
        { src: "/products/systems/Motec/Fork Camera/MC925C/MC925C-1.png", alt: "MC925C Fork-arm Mounted Camera Side" },
        { src: "/products/systems/Motec/Fork Camera/MC925C/MC925C-2.png", alt: "MC925C Fork-arm Mounted Camera Rear" }
    ],
    description: [
        "The fork-arm mounted camera MC925C meets the requirements of the EC regulations 89/336/EWG and 92/031/EWG (CE-EMV).",
        "There are two simple ways of optimizing the camera image in order to facilitate camera system operation. A support line connecting both fork ends should be directly applied to the display. The driver thus easily gets a good impression of the position and the height of the fork in relation to the shelf, helping him to manoeuvre both safer and faster. When working under low-light conditions such as dark halls, a simple but eye-catching hatch should be applied to the fork, e.g. using white colour."
    ],
    slugPath: ["systems", "motec", "fork-cameras", "mc925c-fork-arm-mounted-camera"]
};

// ============================
// - Video Control Units
//     - MVCD2000 - Digital video control unit 
//     - MVCU1300
//     - MVCU1400
//     - MVCU1500
//     - MVCU1600
//     - MB1205 - for two cameras
//     - MB1405-Quad - with split function 
//     - MBE5200 - for cranes 
//     - MV13 - Video unit 
//     - MV5201-1
// ============================

// Category page - Video Control Units
export const videoControlUnitsCategoryData: ProductData = {
    id: "video-control-units",
    name: "Video Control Units",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "video-control-units",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Video control units/MVCD2000/MVCD2000.png", alt: "MVCD2000 Digital Video Control Unit" },
    ],
    categoryProductIds: [
        "mvcd2000-digital-video-control-unit",
        "mvcu1300",
        "mvcu1400",
        "mvcu1500",
        "mvcu1600",
        "mb1205-for-two-cameras",
        "mb1405-quad-with-split-function",
        "mbe5200-for-cranes",
        "mv13-video-unit",
        "mv5201-1"
    ],
    slugPath: ["systems", "motec", "video-control-units"]
};

// Product Data - MVCD2000 - Digital video control unit 
export const mvcd2000DigitalVideoControlUnitData: ProductData = {
    id: "mvcd2000-digital-video-control-unit",
    name: "MVCD2000 - Digital Video Control Unit",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "video-control-units",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Video control units/MVCD2000/MVCD2000.png", alt: "MVCD2000 Digital Video Control Unit" }
    ],
    description: [
        "The MVCD2000 is a digital state-of-the-art video control unit for highly complex camera monitor applications.",
        "Developed, manufactured and programmed in Germany, future-proofed by software updates and equipped with numerous intelligent functions, the MVCD2000 offers a wide range of heavy-duty applications in various industries and fields."
    ],
    productCharacteristics: [
        "State-of-the-art Electronics Control Unit specialized for highly complex applications.",
        "Up to 4 Cameras can be used simultaneously utilizing either Motec Ethernet or Motec LVDS Cameras.",
        "Specialized for Video Assistant Applications using Neural Networks and AI for object detection in real time.",
        "Xilinx Zynq Ultra scale+ MPSOC with Quad Core Arm Cortex A53 up to 1.5GHz and a Dual-core Arm Cortex-RSF up to 600MHz allows us to make immediate decisions during critical moments."
    ],
    slugPath: ["systems", "motec", "video-control-units", "mvcd2000-digital-video-control-unit"]
};

// Product Data - MVCU1300
export const mvcu1300tData: ProductData = {
    id: "mvcu1300",
    name: "MVCU1300",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "video-control-units",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Video control units/MVCU1300/MVCU1300.png", alt: "MVCU1300 Video Control Unit" }
    ],
    description: [
        "The MVCU1300 is an intelligent, CAN-controlled heavy-duty video control unit. It combines video and sensor data (max. 12 sensors, e.g. ultrasound to measure distance) and can display this information on up to 2 monitors."
    ],
    productCharacteristics: [
        "Connection of up to 12 analogue or digital single-wire sensors",
        "Connection of up to 10 sensors to CAN bus (basically, all CAN-capable sensors are possible)",
        "Connection of one LASER (I/O) per control lead",
        "Control via CAN bus (MSB 2.0) and/or 4 control leads"
    ],
    slugPath: ["systems", "motec", "video-control-units", "mvcu1300"]
};

// Product Data - MVCU1400
export const mvcu1400Data: ProductData = {
    id: "mvcu1400",
    name: "MVCU1400",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "video-control-units",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Video control units/MVCU1400/MVCU1400.png", alt: "MVCU1400 Video Control Unit" }
    ],
    description: [
        "The MVCU1400 is an intelligent, CAN-controlled heavy-duty multi camera video control unit. It can process up to 4 camera images and display these images on up to 2 monitors in a variety of modes."
    ],
    productCharacteristics: [
        "Connection of up to 4 compact cameras or 3 compact cameras and one motor zoom camera",
        "Control via CAN bus (MSB 2.0), one Monitor toggle wire and/or 4 control wires and one additional control wire which provides the Option to evaluate the PWM signal (individual configuration of the 4 control wires and the Monitor toggle wires)",
        "Main monitor output as Single, Split, Triple, PiP (randomly configurable), Quad and OSD in 4 colours",
        "Safety function if permissible operating temperature is exceeded (power supply for all connected components is shut down)"
    ],
    slugPath: ["systems", "motec", "video-control-units", "mvcu1400"]
};

// Product Data - MVCU1500
export const mvcu1500Data: ProductData = {
    id: "mvcu1500",
    name: "MVCU1500",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "video-control-units",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Video control units/MVCU1500/MVCU1500.png", alt: "MVCU1500 Video Control Unit" }
    ],
    description: [
        "The MVCU1500 is an intelligent, CAN-controlled heavy-duty multi camera video control unit. It can process up to 8 camera images and display these images on up to 2 monitors in a variety of modes."
    ],
    productCharacteristics: [
        "Connection of up to 6 compact cameras and 2 motor zoom cameras",
        "Control via CAN bus (MSB 2.0), 2 Monitor toggle wires and/or 8 control wires (individual configuration of control wires and the Monitor toggle wires)",
        "Monitor output as Single, Split, Triple, PiP (randomly configurable), Quad and OSD in 4 colours"
    ],
    slugPath: ["systems", "motec", "video-control-units", "mvcu1500"]
};

// Product Data - MVCU1600
export const mvcu1600Data: ProductData = {
    id: "mvcu1600",
    name: "MVCU1600",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "video-control-units",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Video control units/MVCU1600/MVCU1600.png", alt: "MVCU1600 Video Control Unit" }
    ],
    description: [
        "The MVCU1600 is an intelligent, CAN-controlled heavy-duty multi camera video control unit that can process up to 8 camera images and display them on up to 5 monitors in various modes and with individual overlays."
    ],
    productCharacteristics: [
        "Connection of up to 8 heavy-duty cameras",
        "Display on up to 5 monitors",
        "Monitor output with flexible display options",
        "Alternatively, bit maps (symbols, logos, images, etc.) can be displayed"
    ],
    slugPath: ["systems", "motec", "video-control-units", "mvcu1600"]
};

// Product Data - MB1205 - for two cameras
export const mb1205ForTwoCamerasData: ProductData = {
    id: "mb1205-for-two-cameras",
    name: "MB1205 - for Two Cameras",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "video-control-units",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Video control units/MB1205/MB1205.png", alt: "MB1205 Video Control Unit for Two Cameras" }
    ],
    description: [
        "The MB1205 is a video control unit for 2 cameras mounted on tractor vehicles. The functions of the MB1205, e.g. automatic switching of camera images for articulated trucks, cycle signals to activate the camera change-over, adjustable image mirroring for each camera, and third-party installations, are the outstanding features of the video control unit."
    ],
    productCharacteristics: [
        "Simple control for up to 2 cameras",
        "12 or 24V DC power supply",
        "Mirror function for each camera",
        "Automatic trailer detection for semi-trailer trucks"
    ],
    slugPath: ["systems", "motec", "video-control-units", "mb1205-for-two-cameras"]
};

// Product Data - MB1405-Quad - with split function
export const mb1405QuadData: ProductData = {
    id: "mb1405-quad-with-split-function",
    name: "MB1405-Quad - with Split Function",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "video-control-units",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Video control units/MB1405-Quad/MB1405-Quad.png", alt: "MB1405-Quad Video Controller with Split Function" }
    ],
    description: [
        "The video control unit MB1405-Quad allows the display of up to 4 camera images simultaneously in what is referred to as quad split mode. The supplied remote control is used to switch between the different camera images."
    ],
    productCharacteristics: [
        "Simple control for up to 4 cameras",
        "Split function – up to 4 images at once",
        "Camera selected via control cables or control unit",
        "Power supply for cameras and monitor"
    ],
    slugPath: ["systems", "motec", "video-control-units", "mb1405-quad-with-split-function"]
};

// Product Data - MBE5200 - for cranes 
export const mbe5200ForCranesData: ProductData = {
    id: "mbe5200-for-cranes",
    name: "MBE5200 - for Cranes",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "video-control-units",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Video control units/MBE5200/MBE5200.png", alt: "MBE5200 Operator Control Module for Cranes" }
    ],
    description: [
        "The MBE5200 operator control unit makes it easy to manipulate all functions of the MC5200 motor zoom camera with a single device. Furthermore, the control module offers the opportunity to expand the system for the connection of an additional camera with a prime lens."
    ],
    productCharacteristics: [
        "Digital control of camera and wireless system",
        "Compact camera via second input",
        "Functions can be controlled via external signals",
        "Option of connecting a second monitor"
    ],
    slugPath: ["systems", "motec", "video-control-units", "mbe5200-for-cranes"]
};

// Product Data - MV13 - Video unit 
export const mv13VideoUnitData: ProductData = {
    id: "mv13-video-unit",
    name: "MV13 - Video Unit",
    category: "systems",
    subcategory: "motec",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Video control units/MV13/MV13.png", alt: "MV13 Video Unit" }
    ],
    description: [
        "The Video unit MV13 processes an analogue video signal and distributes it to up to 3 outputs. The MV13 provides the voltage for an analogue camera, thereby no further voltage supply is required."
    ],
    productCharacteristics: [
        "Coated aluminium housing",
        "Protection class IP67",
        "Electronics, 9 V…32 V DC"
    ],
    slugPath: ["systems", "motec", "video-control-units", "mv13-video-unit"]
};

// Product Data - MV5201-1
export const mv5201_1Data: ProductData = {
    id: "mv5201-1",
    name: "MV5201-1",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "video-control-units",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Video control units/MV5201-1/MV5201-1.png", alt: "MV5201-1 Video Control Unit" }
    ],
    description: [
        "The video distributor MV5201-1 links and boosts the video signals of up to 4 analogue motor zoom cameras and transmits these signals to the control unit MBE5202-2-LWE."
    ],
    additionalSections: [
        {
            title: "Signal switch-over",
            content: "Switching and selecting the respective cameras in connection with the MV5201-1 occurs only with the MBE5202-2-LWE. The detailed control options can be found in the MBE5202-2-LWE operating instructions."
        },
        {
            title: "Supply Voltage",
            content: "The video distributor MV5201-1 provides the voltage supply for up to 4 analogue motor zoom cameras. Other voltage supply devices are not required. If used as a transmitter/receiver model, the transmitter requires a separate voltage supply of +24 V DC."
        }
    ],
    slugPath: ["systems", "motec", "video-control-units", "mv5201-1"]
};

// ============================
// - Crane Camera's
//     - MWS - Motec Workview System
//     - MC5201 - Motor Zoom Camera
//     - MCDE5200 - Digital Motor Zoom Camera
// ============================

// Category page - Crane Camera's
export const craneCamerasCategoryData: ProductData = {
    id: "crane-cameras",
    name: "Crane Camera's",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "crane-cameras",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Crane Camera/MWS/MWS.jpg", alt: "MWS Motec Workview System" },
    ],
    categoryProductIds: [
        "mws-motec-workview-system",
        "mc5201-motor-zoom-camera",
        "mcde5200-digital-motor-zoom-camera"
    ],
    slugPath: ["systems", "motec", "crane-cameras"]
};

// Product Data - MWS - Motec Workview System
export const mwsMotecWorkviewSystemData: ProductData = {
    id: "mws-motec-workview-system",
    name: "MWS - Motec Workview System",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "crane-cameras",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Crane Camera/MWS/MWS.jpg", alt: "MWS Motec Workview System" },
        { src: "/products/systems/Motec/Crane Camera/MWS/MWS-1.jpg", alt: "MWS Motec Workview System Side" },
        { src: "/products/systems/Motec/Crane Camera/MWS/MWS-2.jpg", alt: "MWS Motec Workview System Rear" }
    ],
    description: [
        "The Motec Workview System is a compact, wireless camera monitor system suitable for any type of crane and crane application. The digital radio system MAB2000-Set-2 is the basic module. The modular system design allows the addition of further components such as monitors, cameras, pendulum units and VCR. This allows the system to be individually adapted to special requirements."
    ],
    productCharacteristics: [
        "Applicable for all crane types",
        "Modular concept",
        "Operating time up to 28 hours on one battery",
        "Interference resistant digital wireless system with low latency (180ms)",
        "Up to 10 systems can be used simultaneously",
    ],
    slugPath: ["systems", "motec", "crane-cameras", "mws-motec-workview-system"]
};

// Product Data - MC5201 - Motor Zoom Camera
export const mc5201MotorZoomCameraData: ProductData = {
    id: "mc5201-motor-zoom-camera",
    name: "MC5201 - Motor Zoom Camera",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "crane-cameras",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Crane Camera/MC5201/MC5201.jpg", alt: "MC5201 Motor Zoom Camera" },
        { src: "/products/systems/Motec/Crane Camera/MC5201/MC5201-1.jpg", alt: "MC5201 Motor Zoom Camera Side" },
        { src: "/products/systems/Motec/Crane Camera/MC5201/MC5201-2.jpg", alt: "MC5201 Motor Zoom Camera Rear" }
    ],
    description: [
        "The MC5201 is a heavy-duty motor zoom camera to monitor crane hooks, winches and loads. State-of-the-art video module technology provides sharp and high-contrast images allowing for an 18-times optical zoom and a 26-times digital zoom. The Motec System-Bus (MSB) controls the camera. The MC5200 it is also available as EX2 version."
    ],
    productCharacteristics: [
        "Sturdy aluminium casing",
        "Sharp image with full contrast",
        "Up to 26x optical zoom:",
        "Horizontal view angle from 1.6° to 47.5° degrees",
    ],
    slugPath: ["systems", "motec", "crane-cameras", "mc5201-motor-zoom-camera"]
};

// ============================
// - Transmissions
//     - MVRD1100 - Digital Radio System
//     - MAB2000 - Mobile heavy-duty battery box
//     - MVR5200 - Wireless system for cranes 
//     - MTP-VS and MTP-VE - Video signal amplifer
//     - MKW-Kabel
//     - MK5-cabel
//     - MK25.15-MA2-cable
//     - Mk67-cable
//     - MK84-cable
//     - MK228-cabel
//     - MK232-cabel
//     - MK295-cabel
//     - MK296-cabel
// ============================

// Category page - Transmissions
export const transmissionsCategoryData: ProductData = {
    id: "transmissions",
    name: "Transmissions",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "transmissions",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Transmissions/MVRD1100/MVRD1100.jpg", alt: "MVRD1100 Digital Radio System" }
    ],
    categoryProductIds: [
        "mvrd1100-digital-radio-system",
        "mab2000-mobile-heavy-duty-battery-box",
        "mvr5200-wireless-system-for-cranes",
        "mtp-vs-ve-video-signal-amplifier",
        "mkw-kabel",
        "mk5-cabel",
        "mk25-15-ma2-cable",
        "mk67-cable",
        "mk84-cable",
        "mk228-cabel",
        "mk232-cabel",
        "mk295-cabel",
        "mk296-cabel"
    ],
    slugPath: ["systems", "motec", "transmissions"]
};

// Product data - MVRD1100 - Digital Radio System
export const mvrd1100DigitalRadioSystemData: ProductData = {
    id: "mvrd1100-digital-radio-system",
    name: "MVRD1100 - Digital Radio System",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "transmissions",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Transmissions/MVRD1100/MVRD1100.jpg", alt: "MVRD1100 Digital Radio System" },
        { src: "/products/systems/Motec/Transmissions/MVRD1100/MVRD1100-1.jpg", alt: "MVRD1100 Digital Radio System" },
        { src: "/products/systems/Motec/Transmissions/MVRD1100/MVRD1100-2.jpg", alt: "MVRD1100 Digital Radio System" },
        { src: "/products/systems/Motec/Transmissions/MVRD1100/MVRD1100-3.jpg", alt: "MVRD1100 Digital Radio System" },
        { src: "/products/systems/Motec/Transmissions/MVRD1100/MVRD1100-4.jpg", alt: "MVRD1100 Digital Radio System" },
    ],
    description: [
        "The MVRD1100 digital communication unit is a robust transmitter/receiver system for wireless image transmission. The compact units transmit the digital signals from a camera quickly and without delay to the monitor over long distances. Up to 10 device pairs operated in parallel offer high vehicle adaptation and visibility flexibility."
    ],
    slugPath: ["systems", "motec", "transmissions", "mvrd1100-digital-radio-system"]
};

// Product data - MAB2000 - Mobile heavy-duty battery box
export const mab2000MobileHeavyDutyBatteryBoxData: ProductData = {
    id: "mab2000-mobile-heavy-duty-battery-box",
    name: "MAB2000 - Mobile Heavy-Duty Battery Box",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "transmissions",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Transmissions/MAB2000/MAB2000.jpg", alt: "MAB2000 Mobile Heavy-Duty Battery Box" },
        { src: "/products/systems/Motec/Transmissions/MAB2000/MAB2000-1.jpg", alt: "MAB2000 Mobile Heavy-Duty Battery Box" },
        { src: "/products/systems/Motec/Transmissions/MAB2000/MAB2000-2.jpg", alt: "MAB2000 Mobile Heavy-Duty Battery Box" },
        { src: "/products/systems/Motec/Transmissions/MAB2000/MAB2000-3.jpg", alt: "MAB2000 Mobile Heavy-Duty Battery Box" },
        { src: "/products/systems/Motec/Transmissions/MAB2000/MAB2000-4.jpg", alt: "MAB2000 Mobile Heavy-Duty Battery Box" },
    ],
    description: [
        "The MAB2000 is a flexible, robust and utility vehicle-compatible battery box for the digital Motec radio system MVRD1000. It also can be used as a mobile external power supply for all Motec camera systems."
    ],
    slugPath: ["systems", "motec", "transmissions", "mab2000-mobile-heavy-duty-battery-box"]
};

// Product data - MVR5200 - Wireless system for cranes 
export const mvr5200WirelessSystemForCranesData: ProductData = {
    id: "mvr5200-wireless-system-for-cranes",
    name: "MVR5200 - Wireless System for Cranes",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "transmissions",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Transmissions/MVR5200/MVR5200.jpg", alt: "MVR5200 Wireless System for Cranes" },
        { src: "/products/systems/Motec/Transmissions/MVR5200/MVR5200-1.jpg", alt: "MVR5200 Wireless System for Cranes" },
        { src: "/products/systems/Motec/Transmissions/MVR5200/MVR5200-2.jpg", alt: "MVR5200 Wireless System for Cranes" },
    ],
    description: [
        "The digital crane radio system MVR5200 makes it possible to transmit a camera image of the motor zoom camera type MC5200 without any interference. In addition to the image transmission to the video receiver, the signals required for camera control are also sent to the camera via integrated data radio transmission."
    ],
    slugPath: ["systems", "motec", "transmissions", "mvr5200-wireless-system-for-cranes"]
};

// Product data - MTP-VS and MTP-VE - Video signal amplifer
export const mtpVsVeVideoSignalAmplifierData: ProductData = {
    id: "mtp-vs-ve-video-signal-amplifier",
    name: "MTP-VS and MTP-VE - Video Signal Amplifier",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "transmissions",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Transmissions/MTP-VE/MTP-VE.jpg", alt: "MTP-VE Video Signal Amplifier" }
    ],
    productCharacteristics: [
        "Video signal amplifier transmitter and receiver",
        "Video analog/digital signal converter for twisted-pair wiring",
        "Design suitable for mobile use",
        "Video signal is adjusted according to transmission length"
    ],
    slugPath: ["systems", "motec", "transmissions", "mtp-vs-ve-video-signal-amplifier"]
};

// Product data - MKW-Kabel
export const mkwKabelData: ProductData = {
    id: "mkw-kabel",
    name: "MKW-Kabel",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "transmissions",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Transmission/MKW-Kabel/MKW-Kabel.png", alt: "MTP-VE Video Signal Amplifier" }
    ],
    productCharacteristics: [
        "High quality, sturdy system cable",
        "Available in various lengths and formats",
        "Waterproof connector",
        "With safety sleeve to prevent mechanical damage"
    ],
    slugPath: ["systems", "motec", "transmissions", "mkw-kabel"]
};

// Product data - MK5-cabel
export const mk5CabelData: ProductData = {
    id: "mk5-cabel",
    name: "MK5-cabel",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "transmissions",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Transmission/MK5-cabel/MK5-cabel.png", alt: "MTP-VE Video Signal Amplifier" }
    ],
    description: [
        "MK5-cabel is a high-quality cable for Motec video systems, providing secure and stable connections."
    ],
    productCharacteristics: [
        "Multiple-use connection cable",
        "Multiple-use connection cable",
        "Sturdy, waterproof metal connectors",
        "Available in various lengths and formats"
    ],
    slugPath: ["systems", "motec", "transmissions", "mk5-cabel"]
};

// Product data - MK25.15-MA2-cable
export const mk2515ma2CableData: ProductData = {
    id: "mk25-15-ma2-cable",
    name: "MK25.15-MA2-cable",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "transmissions",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Transmission/MK25.15-MA2-cable/MK25.15-MA2-cable.png", alt: "MK25.15-MA2-cable" }
    ],
    description: [
        "MK25.15-MA2-cable is designed for specialized Motec system connections, offering robust performance and reliability."
    ],
    productCharacteristics: [
        "Video signal amplifier transmitter and receiver",
        "Video analog/digital signal converter for twisted-pair wiring",
        "Design suitable for mobile use",
        "Video signal is adjusted according to transmission length"
    ],
    slugPath: ["systems", "motec", "transmissions", "mk25-15-ma2-cable"]
};

// Product data - Mk67-cable
export const mk67CableData: ProductData = {
    id: "mk67-cable",
    name: "Mk67-cable",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "transmissions",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Transmission/MK67-cabel/MK67-cabel.png", alt: "MK67-cable" }
    ],
    productCharacteristics: [
        "Coaxial cable",
        "Connection to video control units",
        "BNC plug connector (camera)"
    ],
    slugPath: ["systems", "motec", "transmissions", "mk67-cable"]
};

// Product data - MK84-cable
export const mk84CableData: ProductData = {
    id: "mk84-cable",
    name: "MK84-cable",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "transmissions",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Transmission/MK84-cable/MK84-cable.png", alt: "MK84-cable" }
    ],
    productCharacteristics: [
        "Cable with trailer socket",
        "Fixed partition (FDJ/13 pin)",
        "With integrated safety cap"
    ],
    slugPath: ["systems", "motec", "transmissions", "mk84-cable"]
};

// Product data - MK228-cabel
export const mk228CableData: ProductData = {
    id: "mk228-cabel",
    name: "MK228-cabel",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "transmissions",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Transmission/MK228-cabel/MK228-cabel.png", alt: "MK228-cabel" }
    ],
    productCharacteristics: [
        "Sturdy mast cable for laying with guide rollers",
        "Compatible with Motec MPS guide rollers",
        "In various lengths"
    ],
    slugPath: ["systems", "motec", "transmissions", "mk228-cabel"]
};

// Product data - MK232-cabel
export const mk232CableData: ProductData = {
    id: "mk232-cabel",
    name: "MK232-cabel",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "transmissions",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Transmission/MK232-cabel/MK232-cabel.png", alt: "MK232-cabel" }
    ],
    productCharacteristics: [
        "Trailer cable with sturdy connector (KSJ/13 pin)",
        "With safety sleeve",
        "Available in various lengths and formats"
    ],
    slugPath: ["systems", "motec", "transmissions", "mk232-cabel"]
};

// Product data - MK295-cabel
export const mk295CableData: ProductData = {
    id: "mk295-cabel",
    name: "MK295-cabel",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "transmissions",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Transmission/MK295-cabel/MK295-cabel.png", alt: "MK295-cabel" }
    ],
    productCharacteristics: [
        "Sturdy cable with trailer socket",
        "For frequent disconnecting",
        "With integrated protective cap"
    ],
    slugPath: ["systems", "motec", "transmissions", "mk295-cabel"]
};

// Product data - MK296-cabel
export const mk296CableData: ProductData = {
    id: "mk296-cabel",
    name: "MK296-cabel",
    category: "systems",
    subcategory: "motec",
    subsubcategory: "transmissions",
    brand: "Motec",
    images: [
        { src: "/products/systems/Motec/Transmission/MK296-cabel/MK296-cabel.png", alt: "MK296-cabel" }
    ],
    productCharacteristics: [
        "Trailer / Harrow cable",
        "Sturdy connector (13 pin)",
        "For frequent connecting and disconnecting",
        "Can be operated with gloves"
    ],
    slugPath: ["systems", "motec", "transmissions", "mk296-cabel"]
};

// ============================
// PRODUCT MAPPING
// ============================

export const systemsProductMapping: Record<string, ProductData> = {
    // Rear View Cameras
    "/products/systems/motec/rear-view-cameras/mc3000b-heavy-duty-camera": mc3000bHeavyDutyCameraData,
    "/products/systems/motec/rear-view-cameras/mc3000b-va-heavy-duty-stainless-steel-camera": mc3000bVaHeavyDutyStainlessSteelCameraData,
    "/products/systems/motec/rear-view-cameras/mc3000c-ir-wl-night-vision-compatible-heavy-duty-infrared-camera-with-built-in-light": mc3000cIrWlNightVisionCompatibleHeavyDutyInfraredCameraWithBuiltInLightData,
    "/products/systems/motec/rear-view-cameras/mc4000a-heavy-duty-camera": mc4000aHeavyDutyCameraData,
    "/products/systems/motec/rear-view-cameras/mc4000a-ir-wl-night-vision-compatible-heavy-duty-infrared-camera-with-built-in-light": mc4000aIrWlNightVisionCompatibleHeavyDutyInfraredCameraWithBuiltInLightData,
    "/products/systems/motec/rear-view-cameras/mc6000d-sturdy-universal-camera": mc6000dSturdyUniversalCameraData,
    "/products/systems/motec/rear-view-cameras/mc7000c-series-heavy-duty-camera": mc7000cSeriesHeavyDutyCameraData,
    "/products/systems/motec/rear-view-cameras/mc7180n-wide-angle-camera": mc7180nWideAngleCameraData,
    "/products/systems/motec/rear-view-cameras/mc7000b-mh1-heavy-duty-camera": mc7000bMh1HeavyDutyCameraData,
    "/products/systems/motec/rear-view-cameras/mc7000b-mh2-heavy-duty-camera": mc7000bMh2HeavyDutyCameraData,

    // Front Camera System
    "/products/systems/motec/front-camera-system/mc3050b-4-vkms-heavy-duty-camera-for-front-implements": mc3050b4VkmsHeavyDutyCameraForFrontImplementsData,

    // Digital Cameras
    "/products/systems/motec/digital-cameras/mcdb7000a-heavy-duty-broadr-reach-camera": mcdb7000aHeavyDutyBroadrReachCameraData,
    "/products/systems/motec/digital-cameras/mcde3000-oem-ethernet-camera": mcde3000OemEthernetCameraData,
    "/products/systems/motec/digital-cameras/mcdl7000a-heavy-duty-lvds-camera": mcdl7000aHeavyDutyLvdsCameraData,
    "/products/systems/motec/digital-cameras/mcde7000a-heavy-duty-ethernet-camera": mcde7000aHeavyDutyEthernetCameraData,
    "/products/systems/motec/digital-cameras/mcde5200-digital-motor-zoom-camera": mcde5200DigitalMotorZoomCameraData,

    // Monitors
    "/products/systems/motec/monitors/md3071a-7-monitor": md3071a7MonitorData,
    "/products/systems/motec/monitors/md3073-waterproof-heavy-duty-monitor": md3073WaterproofHeavyDutyMonitorData,
    "/products/systems/motec/monitors/md3100-102-monitor": md3100102MonitorData,
    "/products/systems/motec/monitors/17-zoll-lcd-monitor": lcd17zollLCDMonitorData,
    "/products/systems/motec/monitors/md4074-quad-ip30-ip67-heavy-duty-monitor": md4074QuadIp30Ip67HeavyDutyMonitorData,

    // Digital Monitors
    "/products/systems/motec/digital-monitors/mdde1072-7-heavy-duty-digital-ethernet-monitor": mdde10727HeavyDutyDigitalEthernetMonitorData,
    "/products/systems/motec/digital-monitors/mdde1102-10-heavy-duty-digital-ethernet-monitor": mdde110210HeavyDutyDigitalEthernetMonitorData,
    "/products/systems/motec/digital-monitors/mdde1122-12-heavy-duty-digital-ethernet-monitor": mdde112212HeavyDutyDigitalEthernetMonitorData,

    // Fork Cameras
    "/products/systems/motec/fork-cameras/mc9000-sturdy-fork-camera": mc9000SturdyForkCameraData,
    "/products/systems/motec/fork-cameras/mc9150b-heavy-duty-pinhole-camera": mc9150bHeavyDutyPinholeCameraData,
    "/products/systems/motec/fork-cameras/mc9250-sturdy-fork-camera": mc9250SturdyForkCameraData,
    "/products/systems/motec/fork-cameras/mc925c-fork-arm-mounted-camera": mc925cForkArmMountedCameraData,

    // Video Control Units
    "/products/systems/motec/video-control-units/mvcd2000-digital-video-control-unit": mvcd2000DigitalVideoControlUnitData,
    "/products/systems/motec/video-control-units/mvcu1300": mvcu1300tData,
    "/products/systems/motec/video-control-units/mvcu1400": mvcu1400Data,
    "/products/systems/motec/video-control-units/mvcu1500": mvcu1500Data,
    "/products/systems/motec/video-control-units/mvcu1600": mvcu1600Data,
    "/products/systems/motec/video-control-units/mb1205-for-two-cameras": mb1205ForTwoCamerasData,
    "/products/systems/motec/video-control-units/mb1405-quad": mb1405QuadData,
    "/products/systems/motec/video-control-units/mbe5200-for-cranes": mbe5200ForCranesData,
    "/products/systems/motec/video-control-units/mv13-video-unit": mv13VideoUnitData,
    "/products/systems/motec/video-control-units/mv5201-1": mv5201_1Data,

    // Crane Cameras
    "/products/systems/motec/crane-cameras/mws-motec-workview-system": mwsMotecWorkviewSystemData,
    "/products/systems/motec/crane-cameras/mc5201-motor-zoom-camera": mc5201MotorZoomCameraData,
    "/products/systems/motec/crane-cameras/mcde5200-digital-motor-zoom-camera": mcde5200DigitalMotorZoomCameraData,

    // Transmissions
    "/products/systems/motec/transmissions/mvrd1100-digital-radio-system": mvrd1100DigitalRadioSystemData,
    "/products/systems/motec/transmissions/mab2000-mobile-heavy-duty-battery-box": mab2000MobileHeavyDutyBatteryBoxData,
    "/products/systems/motec/transmissions/mvr5200-wireless-system-for-cranes": mvr5200WirelessSystemForCranesData,
    "/products/systems/motec/transmissions/mtp-vs-ve-video-signal-amplifier": mtpVsVeVideoSignalAmplifierData,
    "/products/systems/motec/transmissions/mkw-kabel": mkwKabelData,
    "/products/systems/motec/transmissions/mk5-cabel": mk5CabelData,
    "/products/systems/motec/transmissions/mk25-15-ma2-cable": mk2515ma2CableData,
    "/products/systems/motec/transmissions/mk67-cable": mk67CableData,
    "/products/systems/motec/transmissions/mk84-cable": mk84CableData,
    "/products/systems/motec/transmissions/mk228-cabel": mk228CableData,
    "/products/systems/motec/transmissions/mk232-cabel": mk232CableData,
    "/products/systems/motec/transmissions/mk295-cabel": mk295CableData,
    "/products/systems/motec/transmissions/mk296-cabel": mk296CableData,
};