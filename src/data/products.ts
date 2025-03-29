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
      "SmartThinQ Compatibility",
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
  },
  {
    id: "17",
    name: "LG Door-in-Door Refrigerator",
    category: "Refrigerators",
    price: 98999,
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Innovative Door-in-Door design provides easy access to frequently used items without letting cold air escape from the main compartment.",
    features: [
      "InstaView Door-in-Door",
      "Linear Cooling Technology",
      "Smart Diagnosis",
      "Multi Air Flow System",
      "Express Freeze"
    ],
    specifications: {
      "Capacity": "635 Liters",
      "Energy Rating": "4 Star",
      "Cooling Technology": "Linear Cooling",
      "Dimensions": "91.2 x 179.5 x 73.5 cm",
      "Warranty": "1 Year Standard, 10 Years on Compressor"
    },
    stock: 12
  },
  {
    id: "18",
    name: "Haier Bottom Freezer Refrigerator",
    category: "Refrigerators",
    price: 56999,
    image: "https://images.unsplash.com/photo-1583152629306-6850595fd976?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    discount: 8,
    description: "Bottom freezer design provides easy access to fresh food at eye level with spacious freezer storage below.",
    features: [
      "Twin Inverter Technology",
      "Antibacterial Liner",
      "Moisture Lock Crisper",
      "LED Lighting",
      "Holiday Mode"
    ],
    specifications: {
      "Capacity": "420 Liters",
      "Energy Rating": "3 Star",
      "Cooling Technology": "Twin Cooling",
      "Dimensions": "70.2 x 175.0 x 68.6 cm",
      "Warranty": "1 Year Product, 5 Years on Compressor"
    },
    stock: 18
  },
  {
    id: "19",
    name: "Godrej Side-by-Side Refrigerator",
    category: "Refrigerators",
    price: 65999,
    image: "https://images.unsplash.com/photo-1580751818298-2bf76e6e2e5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    isNew: true,
    description: "Sleek side-by-side refrigerator with water and ice dispenser for contemporary kitchens with advanced cooling technologies.",
    features: [
      "Frost-Free Technology",
      "Water & Ice Dispenser",
      "Intelligent Cooling System",
      "Wave Design",
      "Multiple Air Vents"
    ],
    specifications: {
      "Capacity": "580 Liters",
      "Energy Rating": "3 Star",
      "Cooling Technology": "Multi-Flow Air Cooling",
      "Dimensions": "89.5 x 175.5 x 72.5 cm",
      "Warranty": "10 Years on Compressor"
    },
    stock: 10
  },
  {
    id: "20",
    name: "Bosch Compact Refrigerator",
    category: "Refrigerators",
    price: 32999,
    image: "https://images.unsplash.com/photo-1619731418183-670c938587f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    discount: 5,
    description: "Space-saving compact refrigerator perfect for small kitchens, offices, or as secondary refrigeration.",
    features: [
      "VitaFresh Technology",
      "SuperCooling Function",
      "LED Interior Lighting",
      "Reversible Door",
      "Automatic Defrost"
    ],
    specifications: {
      "Capacity": "225 Liters",
      "Energy Rating": "4 Star",
      "Cooling Technology": "Dynamic Cooling",
      "Dimensions": "54.0 x 161.0 x 60.0 cm",
      "Warranty": "2 Years Comprehensive"
    },
    stock: 22
  },
  {
    id: "21",
    name: "Samsung EcoBubble Washing Machine",
    category: "Washing Machines",
    price: 42999,
    image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Advanced EcoBubble technology generates bubbles that quickly penetrate fabrics and remove dirt while saving energy.",
    features: [
      "EcoBubble Technology",
      "Digital Inverter Motor",
      "Hygiene Steam Cycle",
      "Quick Wash",
      "Drum Clean+"
    ],
    specifications: {
      "Capacity": "8.5 Kg",
      "Energy Rating": "5 Star",
      "Spin Speed": "1400 RPM",
      "Programs": "16",
      "Warranty": "2 Years Product, 10 Years on Motor"
    },
    stock: 15
  },
  {
    id: "22",
    name: "Whirlpool Top Load Washing Machine",
    category: "Washing Machines",
    price: 28999,
    image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    discount: 12,
    description: "Durable top-loading washing machine with 6th Sense technology that senses and adapts the wash cycle for optimal cleaning.",
    features: [
      "6th Sense Technology",
      "ZPF Technology",
      "Hard Water Wash",
      "In-Built Heater",
      "Express Wash"
    ],
    specifications: {
      "Capacity": "7.5 Kg",
      "Energy Rating": "4 Star",
      "Spin Speed": "740 RPM",
      "Programs": "12",
      "Warranty": "2 Years Product, 5 Years Motor"
    },
    stock: 20
  },
  {
    id: "23",
    name: "Bosch Front Load Washer-Dryer",
    category: "Washing Machines",
    price: 69999,
    image: "https://images.unsplash.com/photo-1623998022290-a74f8cc36563?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    isNew: true,
    description: "Combined washer-dryer unit with advanced German engineering for superior washing and drying in one efficient appliance.",
    features: [
      "ActiveWater Technology",
      "VarioPerfect",
      "AllergyPlus Program",
      "AntiVibration Design",
      "Heat Pump Drying"
    ],
    specifications: {
      "Capacity": "8/5 Kg (Wash/Dry)",
      "Energy Rating": "4 Star",
      "Spin Speed": "1500 RPM",
      "Programs": "15",
      "Warranty": "2 Years Comprehensive"
    },
    stock: 8
  },
  {
    id: "24",
    name: "LG Semi-Automatic Washing Machine",
    category: "Washing Machines",
    price: 18999,
    image: "https://images.unsplash.com/photo-1626806787461-102c1a6f2c0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Economical semi-automatic washing machine with separate washing and drying tubs for efficient laundry management.",
    features: [
      "Rat Away Technology",
      "Collar Scrubber",
      "Rust-Proof Body",
      "Wind Jet Dry",
      "Lint Collector"
    ],
    specifications: {
      "Capacity": "8 Kg",
      "Energy Efficiency": "High",
      "Motors": "2",
      "Programs": "3",
      "Warranty": "2 Years"
    },
    stock: 25
  },
  {
    id: "25",
    name: "Mitsubishi Heavy-Duty Inverter AC",
    category: "Air Conditioners",
    price: 75999,
    image: "https://images.unsplash.com/photo-1585802540745-bb23deedd2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Heavy-duty inverter air conditioner for large spaces with powerful cooling and advanced filtration systems.",
    features: [
      "Power Inverter Technology",
      "i-See Sensor",
      "Plasma Quad Plus Filter",
      "Dual Barrier Coating",
      "Weekly Timer"
    ],
    specifications: {
      "Capacity": "2 Ton",
      "Energy Rating": "5 Star",
      "Cooling Capacity": "6.8 kW",
      "Noise Level": "21 dB(A)",
      "Warranty": "5 Years Comprehensive"
    },
    stock: 7
  },
  {
    id: "26",
    name: "Blue Star Portable Air Conditioner",
    category: "Air Conditioners",
    price: 34999,
    image: "https://images.unsplash.com/photo-1570126848549-4abe05870358?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    discount: 10,
    description: "Versatile portable air conditioner that can be moved between rooms with no installation required and multiple cooling modes.",
    features: [
      "Self-Evaporative System",
      "Dehumidifier Mode",
      "Remote Control",
      "24-Hour Timer",
      "Castor Wheels"
    ],
    specifications: {
      "Capacity": "1 Ton",
      "Energy Rating": "3 Star",
      "Cooling Capacity": "3.5 kW",
      "Noise Level": "52 dB(A)",
      "Warranty": "1 Year"
    },
    stock: 15
  },
  {
    id: "27",
    name: "Hitachi Cassette Air Conditioner",
    category: "Air Conditioners",
    price: 85999,
    image: "https://images.unsplash.com/photo-1626220661505-c0e765f5e112?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    isNew: true,
    description: "Ceiling-mounted cassette air conditioner ideal for commercial spaces with 360-degree airflow for uniform cooling.",
    features: [
      "360° Airflow",
      "Scene-Save Operation",
      "Motion Sensor",
      "Silent Operation",
      "Anti-Bacterial Filter"
    ],
    specifications: {
      "Capacity": "3 Ton",
      "Energy Rating": "4 Star",
      "Cooling Capacity": "9.0 kW",
      "Noise Level": "36 dB(A)",
      "Warranty": "3 Years on Product, 5 Years on Compressor"
    },
    stock: 5
  },
  {
    id: "28",
    name: "Carrier Multi-Split Air Conditioner",
    category: "Air Conditioners",
    price: 110000,
    image: "https://images.unsplash.com/photo-1628787457204-0c1b1c27d2bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Advanced multi-split system allowing connection of multiple indoor units to a single outdoor unit for whole-home cooling.",
    features: [
      "Multi-Zone Cooling",
      "Individual Zone Control",
      "Hybrid Inverter",
      "Follow Me Function",
      "Self-Cleaning"
    ],
    specifications: {
      "Capacity": "4 Ton",
      "Energy Rating": "4 Star",
      "Indoor Units": "Up to 5",
      "Cooling Capacity": "14 kW",
      "Warranty": "2 Years Standard"
    },
    stock: 3
  },
  {
    id: "29",
    name: "LG OLED C-Series TV",
    category: "Televisions",
    price: 149999,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Premium OLED TV with self-lit pixels for perfect black levels, infinite contrast and stunning picture quality with Dolby Vision IQ.",
    features: [
      "OLED evo Panel",
      "α9 Gen5 AI Processor",
      "Dolby Vision IQ & Atmos",
      "NVIDIA G-SYNC & FreeSync",
      "WebOS Smart Platform"
    ],
    specifications: {
      "Screen Size": "65 Inches",
      "Resolution": "4K Ultra HD (3840 x 2160)",
      "Refresh Rate": "120Hz",
      "HDR": "Dolby Vision, HDR10, HLG",
      "Warranty": "1 Year Standard"
    },
    stock: 9
  },
  {
    id: "30",
    name: "Panasonic 4K LED TV",
    category: "Televisions",
    price: 59999,
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    discount: 15,
    description: "Value-oriented 4K LED TV with vibrant colors, sharp image quality and comprehensive smart features at an affordable price point.",
    features: [
      "HCX Processor",
      "Hexa Chroma Drive",
      "Dolby Atmos",
      "True Cinema Experience",
      "My Home Screen 6.0"
    ],
    specifications: {
      "Screen Size": "55 Inches",
      "Resolution": "4K Ultra HD (3840 x 2160)",
      "Refresh Rate": "60Hz",
      "HDR": "HDR10, HLG",
      "Warranty": "1 Year Standard"
    },
    stock: 14
  },
  {
    id: "31",
    name: "TCL Mini-LED TV",
    category: "Televisions",
    price: 99999,
    image: "https://images.unsplash.com/photo-1558888401-7d5c36d5d91c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    isNew: true,
    description: "Advanced Mini-LED TV with thousands of dimming zones for OLED-like contrast with higher brightness and vibrant colors.",
    features: [
      "Quantum Dot Technology",
      "Full Array Local Dimming",
      "AiPQ Engine Pro",
      "Variable Refresh Rate",
      "Google TV OS"
    ],
    specifications: {
      "Screen Size": "75 Inches",
      "Resolution": "8K Ultra HD (7680 x 4320)",
      "Refresh Rate": "120Hz",
      "HDR": "HDR10+, Dolby Vision",
      "Warranty": "2 Years"
    },
    stock: 6
  },
  {
    id: "32",
    name: "OnePlus Smart TV",
    category: "Televisions",
    price: 42999,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Feature-packed smart TV with QLED display, seamless smartphone integration and premium design at a competitive price.",
    features: [
      "Gamma Engine",
      "DCI-P3 93% Color Gamut",
      "Oxygen OS for TV",
      "Dolby Vision & Atmos",
      "OnePlus Connect"
    ],
    specifications: {
      "Screen Size": "50 Inches",
      "Resolution": "4K Ultra HD (3840 x 2160)",
      "Refresh Rate": "60Hz",
      "HDR": "HDR10+, HLG",
      "Warranty": "1 Year Standard"
    },
    stock: 18
  },
  {
    id: "33",
    name: "KitchenAid Stand Mixer",
    category: "Kitchen Appliances",
    price: 35999,
    image: "https://images.unsplash.com/photo-1594732832278-abd644401426?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Iconic stand mixer with powerful motor and planetary mixing action for thorough ingredient incorporation and versatile attachments.",
    features: [
      "10 Speed Settings",
      "5.7L Stainless Steel Bowl",
      "Planetary Mixing Action",
      "Tilt-Head Design",
      "Compatible with 15+ Attachments"
    ],
    specifications: {
      "Power": "300W",
      "Bowl Capacity": "5.7 Liters",
      "Speed Settings": "10",
      "Weight": "11.3 kg",
      "Warranty": "5 Years"
    },
    stock: 12
  },
  {
    id: "34",
    name: "Philips Air Fryer XL",
    category: "Kitchen Appliances",
    price: 13999,
    image: "https://images.unsplash.com/photo-1626151453171-d249c21a50e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    discount: 10,
    description: "Large-capacity air fryer using TurboStar technology for healthier cooking with minimal oil and maximum flavor.",
    features: [
      "TurboStar Technology",
      "Digital Touchscreen",
      "7 Preset Programs",
      "QuickClean Basket",
      "Keep Warm Function"
    ],
    specifications: {
      "Capacity": "1.4 kg / 7.3L",
      "Power": "2225W",
      "Temperature Range": "80°C - 200°C",
      "Timer": "Up to 60 minutes",
      "Warranty": "2 Years"
    },
    stock: 20
  },
  {
    id: "35",
    name: "Instant Pot Duo",
    category: "Kitchen Appliances",
    price: 9999,
    image: "https://images.unsplash.com/photo-1610529056292-910809953808?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    isNew: true,
    description: "Versatile 7-in-1 multi-functional cooker combining pressure cooker, slow cooker, rice cooker, steamer, sauté pan, yogurt maker and warmer.",
    features: [
      "7-in-1 Functionality",
      "14 Smart Programs",
      "Delay Start Timer",
      "Keep Warm Function",
      "Safety Lock System"
    ],
    specifications: {
      "Capacity": "5.7 Liters",
      "Power": "1000W",
      "Programs": "14",
      "Material": "Stainless Steel",
      "Warranty": "1 Year"
    },
    stock: 25
  },
  {
    id: "36",
    name: "Breville Barista Express",
    category: "Kitchen Appliances",
    price: 49999,
    image: "https://images.unsplash.com/photo-1612095240523-9324ef311b98?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Semi-automatic espresso machine with built-in conical burr grinder and precise temperature control for café-quality coffee at home.",
    features: [
      "Integrated Conical Burr Grinder",
      "Digital Temperature Control",
      "Low-Pressure Pre-Infusion",
      "Manual Microfoam Milk Texturing",
      "Dose Control Grinding"
    ],
    specifications: {
      "Power": "1600W",
      "Water Tank": "2L",
      "Bean Hopper": "250g",
      "Settings": "18 Grind Settings",
      "Warranty": "2 Years"
    },
    stock: 8
  },
  {
    id: "37",
    name: "Samsung Galaxy S23 Ultra",
    category: "Smartphones",
    price: 124999,
    image: "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Flagship smartphone with professional-grade camera system, built-in S Pen, and powerful processing for productivity and creativity.",
    features: [
      "200MP Main Camera",
      "S Pen Included",
      "Snapdragon 8 Gen 2",
      "Dynamic AMOLED 2X Display",
      "5000mAh Battery"
    ],
    specifications: {
      "Display": "6.8\" QHD+ Dynamic AMOLED 2X",
      "Processor": "Snapdragon 8 Gen 2",
      "Storage": "256GB/512GB/1TB",
      "Battery": "5000mAh",
      "Warranty": "1 Year"
    },
    stock: 15
  },
  {
    id: "38",
    name: "Google Pixel 7 Pro",
    category: "Smartphones",
    price: 79999,
    image: "https://images.unsplash.com/photo-1666898823562-fc4bf10ec191?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    discount: 12,
    description: "Google's premium smartphone with exceptional computational photography capabilities and pure Android experience.",
    features: [
      "Tensor G2 Chip",
      "50MP Triple Camera System",
      "Magic Eraser",
      "LTPO OLED Display",
      "Face Unlock"
    ],
    specifications: {
      "Display": "6.7\" QHD+ LTPO OLED",
      "Processor": "Google Tensor G2",
      "Storage": "128GB/256GB",
      "Battery": "5000mAh",
      "Warranty": "1 Year"
    },
    stock: 18
  },
  {
    id: "39",
    name: "Xiaomi 13 Pro",
    category: "Smartphones",
    price: 69999,
    image: "https://images.unsplash.com/photo-1598327105854-c8674faddf79?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Premium smartphone featuring Leica-tuned camera system, fast charging capabilities and Snapdragon flagship processor.",
    features: [
      "Leica Optics",
      "120W HyperCharge",
      "Snapdragon 8 Gen 2",
      "LPDDR5X RAM",
      "Dolby Vision Display"
    ],
    specifications: {
      "Display": "6.73\" WQHD+ AMOLED",
      "Processor": "Snapdragon 8 Gen 2",
      "Storage": "256GB/512GB",
      "Battery": "4820mAh",
      "Warranty": "1 Year"
    },
    stock: 12
  },
  {
    id: "40",
    name: "Nothing Phone (2)",
    category: "Smartphones",
    price: 44999,
    image: "https://images.unsplash.com/photo-1613389479021-41a35c5d2020?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    isNew: true,
    description: "Distinctive smartphone with transparent back design, customizable Glyph interface lights, and clean Android experience.",
    features: [
      "Glyph Interface",
      "Snapdragon 8+ Gen 1",
      "AMOLED 120Hz Display",
      "50MP Dual Camera",
      "Nothing OS 2.0"
    ],
    specifications: {
      "Display": "6.7\" Flexible OLED",
      "Processor": "Snapdragon 8+ Gen 1",
      "Storage": "128GB/256GB",
      "Battery": "4700mAh",
      "Warranty": "1 Year"
    },
    stock: 20
  },
  {
    id: "41",
    name: "Bose Soundbar 700",
    category: "Audio Systems",
    price: 79999,
    image: "https://images.unsplash.com/photo-1626100908537-487b1ad22733?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Premium soundbar with spacious sound, voice assistant integration, and elegant design for immersive home theater audio.",
    features: [
      "QuietPort Technology",
      "Voice4Video Technology",
      "Alexa & Google Assistant",
      "ADAPTiQ Audio Calibration",
      "SimpleSync Technology"
    ],
    specifications: {
      "Channels": "3.0",
      "Connectivity": "HDMI eARC, Optical, WiFi, Bluetooth",
      "Dimensions": "97.8 x 5.7 x 10.8 cm",
      "Weight": "4.76 kg",
      "Warranty": "1 Year"
    },
    stock: 10
  },
  {
    id: "42",
    name: "Sonos Five Wireless Speaker",
    category: "Audio Systems",
    price: 54999,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    discount: 8,
    description: "High-fidelity wireless speaker with rich, room-filling sound and multi-room audio capabilities for music enthusiasts.",
    features: [
      "Trueplay Tuning",
      "Touch Controls",
      "AirPlay 2 Compatible",
      "Stereo Pairing Capability",
      "Line-in Connection"
    ],
    specifications: {
      "Driver Units": "3 Tweeters, 3 Mid-woofers",
      "Connectivity": "WiFi, Ethernet, 3.5mm line-in",
      "Dimensions": "20.3 x 36.4 x 15.4 cm",
      "Weight": "6.36 kg",
      "Warranty": "2 Years"
    },
    stock: 14
  },
  {
    id: "43",
    name: "JBL Party Box 310",
    category: "Audio Systems",
    price: 34999,
    image: "https://images.unsplash.com/photo-1610077787341-77783f67740b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    isNew: true,
    description: "Powerful portable party speaker with vivid light show, long battery life and rugged design for indoor and outdoor celebrations.",
    features: [
      "240W Output Power",
      "Dynamic Light Show",
      "IPX4 Splash-proof Rating",
      "18-Hour Battery Life",
      "Karaoke Features"
    ],
    specifications: {
      "Power": "240W RMS",
      "Battery": "Up to 18 hours",
      "Connectivity": "Bluetooth, USB, Aux-in",
      "Dimensions": "32.7 x 68.8 x 36.3 cm",
      "Warranty": "1 Year"
    },
    stock: 18
  },
  {
    id: "44",
    name: "Yamaha Digital Piano",
    category: "Audio Systems",
    price: 64999,
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Premium digital piano with authentic acoustic piano feel, rich sound library and advanced recording capabilities.",
    features: [
      "88-Key GHS Weighted Action",
      "CFX Concert Grand Piano Sound",
      "192-Note Polyphony",
      "Smart Pianist App Compatible",
      "USB Audio Recording"
    ],
    specifications: {
      "Keys": "88 Weighted Keys",
      "Voices": "10 Main + 480 XG Voices",
      "Polyphony": "192 Notes",
      "Dimensions": "132.6 x 43.2 x 86.4 cm",
      "Warranty": "3 Years"
    },
    stock: 7
  },
  {
    id: "45",
    name: "Dyson Pure Hot+Cool",
    category: "Air Purifiers",
    price: 49999,
    image: "https://images.unsplash.com/photo-1585155770447-2f66e2a397b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Multifunctional device that purifies, heats, and cools with HEPA filtration, bladeless design, and smart features.",
    features: [
      "HEPA and Carbon Filtration",
      "Air Multiplier Technology",
      "Heating Function",
      "360° Oscillation",
      "Dyson Link App"
    ],
    specifications: {
      "Room Size Coverage": "Up to 600 sq. ft.",
      "Filtration": "HEPA H13 + Activated Carbon",
      "Fan Speeds": "10",
      "Noise Level": "38-62 dB(A)",
      "Warranty": "2 Years"
    },
    stock: 9
  },
  {
    id: "46",
    name: "Sharp Plasmacluster Air Purifier",
    category: "Air Purifiers",
    price: 19999,
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    discount: 15,
    description: "Effective air purifier with Plasmacluster ion technology that actively removes airborne pollutants and neutralizes viruses.",
    features: [
      "Plasmacluster Ion Technology",
      "True HEPA Filter",
      "Dust and Odor Sensor",
      "Auto Mode",
      "Library Quiet Operation"
    ],
    specifications: {
      "Room Size Coverage": "Up to 400 sq. ft.",
      "CADR": "300 m³/h",
      "Filter Life": "Up to 24 months",
      "Noise Level": "22-48 dB(A)",
      "Warranty": "1 Year"
    },
    stock: 22
  },
  {
    id: "47",
    name: "Blueair Health Protect Air Purifier",
    category: "Air Purifiers",
    price: 34999,
    image: "https://images.unsplash.com/photo-1573334050335-95ec1cbaa723?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    isNew: true,
    description: "Advanced air purifier with GermShield technology that proactively monitors air quality and eliminates germs, even when on standby.",
    features: [
      "HEPASilent Ultra Technology",
      "GermShield Technology",
      "Smart Sensors",
      "Whisper-Quiet Operation",
      "WiFi Connectivity"
    ],
    specifications: {
      "Room Size Coverage": "Up to 775 sq. ft.",
      "CADR": "435 cfm",
      "Filter Life": "6-12 months",
      "Noise Level": "25-45 dB(A)",
      "Warranty": "1 Year"
    },
    stock: 11
  },
  {
    id: "48",
    name: "Coway Airmega Air Purifier",
    category: "Air Purifiers",
    price: 29999,
    image: "https://images.unsplash.com/photo-1593687024462-8146a682626e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Powerful air purifier with dual filtration system, real-time air quality monitoring and elegant design.",
    features: [
      "Dual Filtration System",
      "Smart Mode",
      "Filter Replacement Indicator",
      "Timer Function",
      "Air Quality Indicator"
    ],
    specifications: {
      "Room Size Coverage": "Up to 540 sq. ft.",
      "CADR": "350 m³/h",
      "Filter Life": "12 months",
      "Noise Level": "24-52 dB(A)",
      "Warranty": "3 Years"
    },
    stock: 16
  },
  {
    id: "49",
    name: "Dyson Air Multiplier Table Fan",
    category: "Fans",
    price: 29999,
    image: "https://images.unsplash.com/photo-1601963252576-2b846d529ddc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Bladeless table fan with Air Multiplier technology for smooth, uninterrupted airflow and minimal noise.",
    features: [
      "Air Multiplier Technology",
      "10 Airflow Settings",
      "Sleep Timer",
      "Oscillation Control",
      "Remote Control"
    ],
    specifications: {
      "Airflow": "370 L/s",
      "Power": "40W",
      "Cable Length": "1.8m",
      "Dimensions": "30 x 14 x 45 cm",
      "Warranty": "2 Years"
    },
    stock: 18
  },
  {
    id: "50",
    name: "Orient Aerostorm Ceiling Fan",
    category: "Fans",
    price: 4999,
    image: "https://images.unsplash.com/photo-1585246675529-1e381781e0dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    discount: 8,
    description: "High-air delivery ceiling fan with aerodynamic blades and decorative design for stylish and efficient cooling.",
    features: [
      "Inverter Motor Technology",
      "Aerodynamic Blade Design",
      "Remote Control Operation",
      "LED Light Kit Compatible",
      "Anti-Dust Technology"
    ],
    specifications: {
      "Blade Size": "1320mm (52\")",
      "Speed": "330 RPM",
      "Air Delivery": "245 CMM",
      "Power Consumption": "45W",
      "Warranty": "2 Years"
    },
    stock: 25
  },
  {
    id: "51",
    name: "Atomberg Efficio Tower Fan",
    category: "Fans",
    price: 6999,
    image: "https://images.unsplash.com/photo-1610384166853-01c8c5abec3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    isNew: true,
    description: "Energy-efficient tower fan with brushless DC motor, multiple modes and remote control for convenience.",
    features: [
      "BLDC Motor",
      "26 Speed Settings",
      "Natural & Sleep Mode",
      "12-Hour Timer",
      "Wide Oscillation"
    ],
    specifications: {
      "Airflow": "1500 CMH",
      "Power": "32W",
      "Speed Settings": "26",
      "Dimensions": "23 x 23 x 120 cm",
      "Warranty": "3 Years"
    },
    stock: 20
  },
  {
    id: "52",
    name: "Havells Trendy Pedestal Fan",
    category: "Fans",
    price: 3499,
    image: "https://images.unsplash.com/photo-1583676826570-3936e9c71cf6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Adjustable height pedestal fan with powerful motor, wide oscillation and jerk-free rotation for smooth operation.",
    features: [
      "Copper Motor",
      "Adjustable Height",
      "3 Speed Control",
      "Thermal Overload Protection",
      "Wide Angle Oscillation"
    ],
    specifications: {
      "Blade Size": "400mm (16\")",
      "Speed": "1350 RPM",
      "Air Delivery": "75 CMM",
      "Power Consumption": "55W",
      "Warranty": "2 Years"
    },
    stock: 30
  },
  {
    id: "53",
    name: "Symphony Diet 50i Air Cooler",
    category: "Air Cooler",
    price: 12999,
    image: "https://images.unsplash.com/photo-1636457442349-08f979ef4c46?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Smart air cooler with digital control panel, i-Pure technology for multi-stage air purification, and low power consumption.",
    features: [
      "i-Pure Technology",
      "Dura-Pump Technology",
      "Auto Water Refill",
      "Digital Control Panel",
      "Remote Control"
    ],
    specifications: {
      "Tank Capacity": "50 Liters",
      "Air Throw": "45 feet",
      "Cooling Area": "Up to 700 sq. ft.",
      "Power Consumption": "185W",
      "Warranty": "1 Year"
    },
    stock: 15
  },
  {
    id: "54",
    name: "Crompton Optimus Desert Air Cooler",
    category: "Air Cooler",
    price: 14999,
    image: "https://images.unsplash.com/photo-1594223274512-ad4b5a3b2307?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    discount: 12,
    description: "Large-capacity desert air cooler ideal for dry climates with evaporative cooling technology for efficient cooling.",
    features: [
      "Honeycomb Cooling Pads",
      "Water Level Indicator",
      "4-Way Air Deflection",
      "Auto-Swing",
      "Inverter Compatible"
    ],
    specifications: {
      "Tank Capacity": "75 Liters",
      "Air Throw": "52 feet",
      "Cooling Area": "Up to 850 sq. ft.",
      "Power Consumption": "190W",
      "Warranty": "1 Year"
    },
    stock: 18
  },
  {
    id: "55",
    name: "Kenstar Glam Personal Air Cooler",
    category: "Air Cooler",
    price: 4999,
    image: "https://images.unsplash.com/photo-1568448422582-360d4f4a7af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    isNew: true,
    description: "Compact personal air cooler perfect for small spaces with honeycomb cooling media and 3-speed control.",
    features: [
      "Honeycomb Cooling Media",
      "Ice Chamber",
      "High-Density Cooling Pads",
      "Water Level Indicator",
      "Castor Wheels"
    ],
    specifications: {
      "Tank Capacity": "20 Liters",
      "Air Throw": "25 feet",
      "Cooling Area": "Up to 150 sq. ft.",
      "Power Consumption": "85W",
      "Warranty": "1 Year"
    },
    stock: 24
  },
  {
    id: "56",
    name: "Havells Freddo Room Cooler",
    category: "Air Cooler",
    price: 9999,
    image: "https://images.unsplash.com/photo-1531913223931-b0d3198229ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Room cooler with collapsible louvers, anti-bacterial honeycomb pads and dust filter screen for cleaner, cooler air.",
    features: [
      "Collapsible Louvers",
      "Anti-Bacterial Tank",
      "Honeycomb Pads",
      "Dust Filter Screen",
      "Low Water Alarm"
    ],
    specifications: {
      "Tank Capacity": "40 Liters",
      "Air Throw": "32 feet",
      "Cooling Area": "Up to 350 sq. ft.",
      "Power Consumption": "125W",
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
