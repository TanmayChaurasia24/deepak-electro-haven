
import { Product } from "../contexts/CartContext";

export const products: Product[] = [
  {
    id: "1",
    name: "Samsung Smart Refrigerator",
    category: "Refrigerators",
    price: 89999,
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    isNew: true,
    description: "Experience the future of food storage with this smart refrigerator featuring AI-powered temperature control, touchscreen interface, and smart home integration.",
    features: [
      "Family Hub Touchscreen",
      "Bixby Voice Assistant",
      "Wi-Fi and Bluetooth Connectivity",
      "SmartThings Integration",
      "Interior Cameras for Remote Viewing"
    ],
    specifications: {
      "Capacity": "650 Liters",
      "Energy Rating": "5 Star",
      "Cooling Technology": "Twin Cooling Plus",
      "Dimensions": "91.2 x 178.0 x 72.6 cm",
      "Warranty": "10 Years on Compressor"
    },
    stock: 15
  },
  {
    id: "2",
    name: "LG Fully Automatic Washing Machine",
    category: "Washing Machines",
    price: 45999,
    image: "https://images.unsplash.com/photo-1626806787461-102c1a6f2c0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    discount: 10,
    description: "Revolutionize your laundry experience with this fully automatic front-loading washing machine featuring advanced washing technologies and smart diagnostics.",
    features: [
      "AI Direct Drive Technology",
      "Steam Wash",
      "TurboWash 360",
      "Smart ThinQ Compatibility",
      "Allergy Care Program"
    ],
    specifications: {
      "Capacity": "9 Kg",
      "Energy Rating": "5 Star",
      "Spin Speed": "1400 RPM",
      "Programs": "14",
      "Warranty": "2 Years Comprehensive, 10 Years on Motor"
    },
    stock: 12
  },
  {
    id: "3",
    name: "Daikin Inverter Split Air Conditioner",
    category: "Air Conditioners",
    price: 56000,
    image: "https://images.unsplash.com/photo-1631744591853-998c4308bbb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    description: "Stay comfortable year-round with this energy-efficient inverter AC featuring rapid cooling, air purification and whisper-quiet operation.",
    features: [
      "Power Chill Operation",
      "Coanda Airflow",
      "Intelligent Eye Sensor",
      "Flash Streamer Technology",
      "Self-Cleaning Filter"
    ],
    specifications: {
      "Capacity": "1.5 Ton",
      "Energy Rating": "5 Star",
      "Cooling Capacity": "5.28 kW",
      "Noise Level": "19 dB(A)",
      "Warranty": "1 Year Product, 5 Years Compressor"
    },
    stock: 20
  },
  {
    id: "4",
    name: "Bosch Microwave Oven",
    category: "Kitchen Appliances",
    price: 18999,
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
    discount: 15,
    description: "This versatile convection microwave oven combines microwave, convection, and grill functions for all your cooking needs with precise temperature control.",
    features: [
      "AutoCook Programs",
      "MultiStage Cooking",
      "Touch Control Panel",
      "Child Lock Safety",
      "Steam Clean Function"
    ],
    specifications: {
      "Capacity": "32 Liters",
      "Power Levels": "5",
      "Maximum Power": "900W Microwave, 1500W Grill, 2500W Convection",
      "Control Type": "Touch & Dial",
      "Warranty": "2 Years Comprehensive"
    },
    stock: 25
  },
  {
    id: "5",
    name: "Sony 55-inch 4K Smart TV",
    category: "Televisions",
    price: 79999,
    image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
    discount: 8,
    description: "Transform your entertainment experience with this stunning 4K OLED TV featuring BRAVIA XR processing, immersive sound and seamless smart features.",
    features: [
      "BRAVIA XR Cognitive Processor",
      "XR OLED Contrast",
      "Acoustic Surface Audio+",
      "Google TV",
      "HDMI 2.1 with VRR & ALLM"
    ],
    specifications: {
      "Screen Size": "55 Inches",
      "Resolution": "4K Ultra HD (3840 x 2160)",
      "Refresh Rate": "120Hz",
      "HDR": "Dolby Vision, HDR10, HLG",
      "Warranty": "1 Year Standard"
    },
    stock: 10
  },
  {
    id: "6",
    name: "Philips Air Purifier",
    category: "Air Purifiers",
    price: 24999,
    image: "https://images.unsplash.com/photo-1585155770447-2f66e2a397b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
    description: "Breathe cleaner air with this advanced air purifier that removes 99.97% of particles as small as 0.003 microns with real-time air quality feedback.",
    features: [
      "AeraSense Technology",
      "VitaShield Intelligent Purification",
      "NanoProtect HEPA Filter",
      "Auto Ambient Lighting",
      "Sleep Mode with Ultra-Quiet Operation"
    ],
    specifications: {
      "Room Size Coverage": "Up to 645 sq. ft.",
      "CADR": "500 m³/h",
      "Filter Life": "Up to 36 months",
      "Noise Level": "20-56 dB(A)",
      "Warranty": "2 Years"
    },
    stock: 18
  },
  {
    id: "7",
    name: "Crompton Ceiling Fan",
    category: "Fans",
    price: 3499,
    image: "https://images.unsplash.com/photo-1583676826570-3936e9c71cf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
    isNew: true,
    description: "This energy-efficient ceiling fan provides powerful air delivery with elegant design and whisper-quiet operation for any room.",
    features: [
      "Aerodynamic Blade Design",
      "Anti-Dust Technology",
      "Double Ball Bearings",
      "Ribbed Motor Housing",
      "High-Gloss Finish"
    ],
    specifications: {
      "Blade Size": "1200mm (48\")",
      "Speed": "380 RPM",
      "Air Delivery": "230 CMM",
      "Power Consumption": "72W",
      "Warranty": "2 Years"
    },
    stock: 30
  },
  {
    id: "8",
    name: "Apple iPhone 14 Pro",
    category: "Smartphones",
    price: 129900,
    image: "https://images.unsplash.com/photo-1677683628812-2bbdbdc5c10a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    description: "Experience the pinnacle of mobile technology with the iPhone 14 Pro featuring the innovative Dynamic Island, powerful A16 Bionic chip and pro-grade camera system.",
    features: [
      "Dynamic Island",
      "Always-On Display",
      "48MP Main Camera",
      "Action Mode Video",
      "Crash Detection"
    ],
    specifications: {
      "Display": "6.1\" Super Retina XDR",
      "Processor": "A16 Bionic",
      "Storage": "256GB",
      "Battery": "Up to 23 hours video playback",
      "Warranty": "1 Year"
    },
    stock: 8
  },
  {
    id: "9",
    name: "Whirlpool French Door Refrigerator",
    category: "Refrigerators",
    price: 112999,
    image: "https://images.unsplash.com/photo-1628192661434-86c7c81df76e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
    description: "This spacious French door refrigerator features adaptive temperature control, fingerprint-resistant finish and flexible storage options for the modern family.",
    features: [
      "Adaptive Intelligence Technology",
      "Humidity-Controlled Crispers",
      "Temperature-Controlled Pantry",
      "Interior Water Dispenser",
      "LED Lighting"
    ],
    specifications: {
      "Capacity": "725 Liters",
      "Energy Rating": "4 Star",
      "Cooling Technology": "Adaptive Chill",
      "Dimensions": "91.5 x 178.5 x 89.5 cm",
      "Warranty": "1 Year Product, 10 Years on Compressor"
    },
    stock: 6
  },
  {
    id: "10",
    name: "IFB Front Load Washing Machine",
    category: "Washing Machines",
    price: 39900,
    image: "https://images.unsplash.com/photo-1590840960572-daca01654cb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80",
    description: "Enjoy superior washing performance with this front-loading washing machine featuring innovative technologies for thorough cleaning and fabric care.",
    features: [
      "3D Wash Technology",
      "Aqua Energie Device",
      "Cradle Wash for Delicates",
      "Self-Diagnosis System",
      "Tub Clean Program"
    ],
    specifications: {
      "Capacity": "8 Kg",
      "Energy Rating": "5 Star",
      "Spin Speed": "1200 RPM",
      "Programs": "12",
      "Warranty": "4 Years"
    },
    stock: 14
  },
  {
    id: "11",
    name: "Voltas Window Air Conditioner",
    category: "Air Conditioners",
    price: 28999,
    image: "https://images.unsplash.com/photo-1562247219-73614cd5cc5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    discount: 5,
    description: "This window AC delivers powerful cooling with dust filters and energy-saving features, perfect for medium-sized rooms with easy installation.",
    features: [
      "High Ambient Cooling",
      "Multi-Stage Filtration",
      "Sleep Mode",
      "Self-Diagnosis",
      "Fresh Air Ventilation"
    ],
    specifications: {
      "Capacity": "1.5 Ton",
      "Energy Rating": "3 Star",
      "Cooling Capacity": "5.0 kW",
      "Noise Level": "48 dB(A)",
      "Warranty": "1 Year Product, 5 Years Compressor"
    },
    stock: 22
  },
  {
    id: "12",
    name: "Samsung 65-inch QLED TV",
    category: "Televisions",
    price: 129999,
    image: "https://images.unsplash.com/photo-1601944179066-29786cb9d32a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    isNew: true,
    description: "Immerse yourself in stunning QLED picture quality with quantum dots, smart features and premium sound for an unmatched viewing experience.",
    features: [
      "Quantum HDR 1500",
      "Object Tracking Sound",
      "Ultra Viewing Angle",
      "Adaptive Picture",
      "Gaming Hub"
    ],
    specifications: {
      "Screen Size": "65 Inches",
      "Resolution": "4K Ultra HD (3840 x 2160)",
      "Refresh Rate": "120Hz",
      "HDR": "HDR10+, HLG",
      "Warranty": "1 Year Standard"
    },
    stock: 5
  },
  {
    id: "13",
    name: "Prestige Induction Cooktop",
    category: "Kitchen Appliances",
    price: 4299,
    image: "https://images.unsplash.com/photo-1585837575652-267c041d77d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    discount: 12,
    description: "Cook faster and smarter with this energy-efficient induction cooktop featuring multiple preset menus and advanced safety features.",
    features: [
      "Anti-Magnetic Wall",
      "Indian Menu Options",
      "Automatic Voltage Regulator",
      "Timer Function",
      "Crystal Glass Surface"
    ],
    specifications: {
      "Power": "1800W",
      "Temperature Range": "100°C - 280°C",
      "Preset Menus": "8",
      "Timer": "Up to 3 hours",
      "Warranty": "1 Year"
    },
    stock: 35
  },
  {
    id: "14",
    name: "OnePlus 11 5G Smartphone",
    category: "Smartphones",
    price: 56999,
    image: "https://images.unsplash.com/photo-1598327105854-c8674faddf79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80",
    discount: 5,
    description: "Experience flagship performance with the OnePlus 11 featuring Hasselblad camera system, lightning-fast charging and fluid display for everyday excellence.",
    features: [
      "Hasselblad Camera System",
      "Snapdragon 8 Gen 2",
      "100W SUPERVOOC Charging",
      "Dolby Vision & Atmos",
      "OxygenOS"
    ],
    specifications: {
      "Display": "6.7\" Fluid AMOLED",
      "Processor": "Snapdragon 8 Gen 2",
      "Storage": "128GB",
      "Battery": "5000mAh",
      "Warranty": "1 Year"
    },
    stock: 15
  },
  {
    id: "15",
    name: "Sony Home Theater System",
    category: "Audio Systems",
    price: 39999,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    description: "Transform your living room into a cinema with this 5.1 channel home theater system featuring Dolby Atmos, wireless rear speakers and powerful subwoofer.",
    features: [
      "Dolby Atmos & DTS:X",
      "Vertical Surround Engine",
      "Bluetooth Connectivity",
      "4K HDR Pass-through",
      "Voice Enhancement Mode"
    ],
    specifications: {
      "Channels": "5.1",
      "Total Power Output": "1000W",
      "Speaker Type": "Tall Boy Front + Wireless Rear",
      "Subwoofer": "10\" Wireless",
      "Warranty": "1 Year"
    },
    stock: 7
  },
  {
    id: "16",
    name: "Bajaj Tower Air Cooler",
    category: "Air Cooler",
    price: 8999,
    image: "https://images.unsplash.com/photo-1636457442349-08f979ef4c46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
    discount: 10,
    description: "Beat the heat efficiently with this tower air cooler featuring honeycomb cooling pads, powerful air throw and 3-speed control for customized cooling.",
    features: [
      "Honeycomb Cooling Pads",
      "Turbo Fan Technology",
      "Ice Chamber",
      "Motorized Vertical Louvers",
      "Castor Wheels for Mobility"
    ],
    specifications: {
      "Tank Capacity": "35 Liters",
      "Air Throw": "30 feet",
      "Cooling Area": "Up to 600 sq. ft.",
      "Power Consumption": "175W",
      "Warranty": "1 Year"
    },
    stock: 20
  }
];

export const getProductsByCategory = (category: string) => {
  if (category === "All Products") {
    return products;
  }
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (currentProductId: string, category: string, limit = 4) => {
  return products
    .filter(product => product.id !== currentProductId && product.category === category)
    .slice(0, limit);
};

export const categories = [
  "All Products",
  "Refrigerators",
  "Washing Machines",
  "Air Conditioners",
  "Televisions",
  "Kitchen Appliances",
  "Smartphones",
  "Audio Systems",
  "Air Cooler",
  "Fans",
  "Air Purifiers"
];
