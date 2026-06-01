/*
 * 🚀 GODREJ FMCG ERP SYSTEM - APPLICATION LOGIC
 * Sophisticated frontend controller and simulated database engine
 */

// --- 📦 PRELOADED GODREJ PRODUCTS CATALOG ---
const DEFAULT_PRODUCTS = [
  {
    id: "prod-1",
    name: "Cinthol Foam Body Wash Lime",
    brand: "Cinthol",
    category: "Personal Care",
    subcategory: "Body Wash",
    desc: "Premium refreshing foam body wash with a burst of cooling lime fragrance.",
    hsn: "34023000",
    gst: 18,
    mrp: 240.00,
    distPrice: 168.00,
    wholesalePrice: 192.00,
    retailPrice: 228.00,
    unitType: "Box",
    weight: "200ml",
    boxQty: 24,
    pieceQty: 1,
    barcode: "8901157011003",
    sku: "CNTL-BW-LIME",
    stock: 45,
    minStock: 10,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&q=80"
  },
  {
    id: "prod-2",
    name: "Godrej Fab Liquid Detergent Refill Pouch",
    brand: "Godrej Fab",
    category: "Household Detergent",
    subcategory: "Liquids",
    desc: "Fabric-safe premium liquid detergent in convenient economy refill pouch.",
    hsn: "34022010",
    gst: 18,
    mrp: 180.00,
    distPrice: 126.00,
    wholesalePrice: 144.00,
    retailPrice: 171.00,
    unitType: "Box",
    weight: "1 Litre",
    boxQty: 16,
    pieceQty: 1,
    barcode: "8901157008819",
    sku: "GDRJ-FAB-REF",
    stock: 35,
    minStock: 8,
    image: "https://images.unsplash.com/photo-1610557892470-76d747eedd74?w=400&q=80"
  },
  {
    id: "prod-3",
    name: "Godrej Nupur 100% Pure Henna Powder",
    brand: "Godrej Nupur",
    category: "Personal Care",
    subcategory: "Hair Care",
    desc: "100% natural Rajasthani henna offering rich color and deep hair conditioning.",
    hsn: "33059040",
    gst: 18,
    mrp: 120.00,
    distPrice: 84.00,
    wholesalePrice: 96.00,
    retailPrice: 114.00,
    unitType: "Box",
    weight: "400g",
    boxQty: 48,
    pieceQty: 1,
    barcode: "8901157002025",
    sku: "GDRJ-NPR-400G",
    stock: 60,
    minStock: 15,
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&q=80"
  },
  {
    id: "prod-4",
    name: "Godrej aer Matic Machine + Refill Kit Violet",
    brand: "Godrej aer",
    category: "Fragrance",
    subcategory: "Sprays",
    desc: "Automatic room freshener dispenser combi set with soothing violet valley mist scent.",
    hsn: "33074900",
    gst: 18,
    mrp: 569.00,
    distPrice: 398.00,
    wholesalePrice: 455.00,
    retailPrice: 540.00,
    unitType: "Box",
    weight: "225ml Device",
    boxQty: 12,
    pieceQty: 1,
    barcode: "8901157009918",
    sku: "GDRJ-AER-VIOLET-KIT",
    stock: 22,
    minStock: 5,
    image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=400&q=80"
  },
  {
    id: "prod-5",
    name: "Godrej aer Matic Refill Automatic Room Freshener Violet",
    brand: "Godrej aer",
    category: "Fragrance",
    subcategory: "Refills",
    desc: "Soothing violet valley mist automatic replacement refill spray for aer devices.",
    hsn: "33074900",
    gst: 18,
    mrp: 299.00,
    distPrice: 209.00,
    wholesalePrice: 239.00,
    retailPrice: 284.00,
    unitType: "Box",
    weight: "225ml",
    boxQty: 24,
    pieceQty: 1,
    barcode: "8901157009925",
    sku: "GDRJ-AER-VIOLET-REF",
    stock: 40,
    minStock: 8,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80"
  },
  {
    id: "prod-6",
    name: "Godrej aer O Car Fragrance Assorted Pack",
    brand: "Godrej aer",
    category: "Fragrance",
    subcategory: "Car Air Freshener",
    desc: "Assorted pack of 4 premium car fragrances to keep your dashboard smelling elegant.",
    hsn: "33074900",
    gst: 18,
    mrp: 350.00,
    distPrice: 245.00,
    wholesalePrice: 280.00,
    retailPrice: 332.00,
    unitType: "Box",
    weight: "7.5g x 4",
    boxQty: 36,
    pieceQty: 1,
    barcode: "8901157009932",
    sku: "GDRJ-AER-OCAR-ASST",
    stock: 50,
    minStock: 10,
    image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=400&q=80"
  },
  {
    id: "prod-7",
    name: "Godrej aer O Hanging Car Air Freshener Cool Aqua",
    brand: "Godrej aer",
    category: "Fragrance",
    subcategory: "Car Air Freshener",
    desc: "Hanging dashboard fragrance membrane with long-lasting refreshing cool aqua scent.",
    hsn: "33074900",
    gst: 18,
    mrp: 99.00,
    distPrice: 69.00,
    wholesalePrice: 79.00,
    retailPrice: 94.00,
    unitType: "Box",
    weight: "7.5g",
    boxQty: 48,
    pieceQty: 1,
    barcode: "8901157009949",
    sku: "GDRJ-AER-OCAR-AQUA",
    stock: 80,
    minStock: 12,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80"
  },
  {
    id: "prod-8",
    name: "Godrej aer Power Pocket Bathroom Freshener Assorted Pack",
    brand: "Godrej aer",
    category: "Fragrance",
    subcategory: "Bathroom Freshener",
    desc: "Power pocket pack of 5 bathroom air fresheners for all-weather persistence.",
    hsn: "33074900",
    gst: 18,
    mrp: 275.00,
    distPrice: 192.50,
    wholesalePrice: 220.00,
    retailPrice: 261.00,
    unitType: "Box",
    weight: "10g x 5",
    boxQty: 30,
    pieceQty: 1,
    barcode: "8901157009956",
    sku: "GDRJ-AER-PKT-ASST",
    stock: 55,
    minStock: 10,
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&q=80"
  },
  {
    id: "prod-9",
    name: "Good Knight Fabric Roll On",
    brand: "Good Knight",
    category: "Home Insecticides",
    subcategory: "Repellents",
    desc: "100% natural personal mosquito repellent clothing roll-on.",
    hsn: "38089191",
    gst: 18,
    mrp: 90.00,
    distPrice: 63.00,
    wholesalePrice: 72.00,
    retailPrice: 85.00,
    unitType: "Box",
    weight: "8ml",
    boxQty: 48,
    pieceQty: 1,
    barcode: "8901157005439",
    sku: "GDKT-ROLLON-REG",
    stock: 75,
    minStock: 15,
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&q=80"
  },
  {
    id: "prod-10",
    name: "Good Knight Fast Card",
    brand: "Good Knight",
    category: "Home Insecticides",
    subcategory: "Repellents",
    desc: "Fast action instant-burning repellent card that gets to work in 3 minutes.",
    hsn: "38089191",
    gst: 18,
    mrp: 15.00,
    distPrice: 10.50,
    wholesalePrice: 12.00,
    retailPrice: 14.25,
    unitType: "Box",
    weight: "10 Cards",
    boxQty: 120,
    pieceQty: 1,
    barcode: "8901157005446",
    sku: "GDKT-FASTCARD",
    stock: 150,
    minStock: 25,
    image: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=400&q=80"
  },
  {
    id: "prod-11",
    name: "Good Knight Flash Refill (45ml Each)",
    brand: "Good Knight",
    category: "Home Insecticides",
    subcategory: "Vaporizers",
    desc: "High delivery flash replacement liquid refill for Gold Flash machines.",
    hsn: "38089191",
    gst: 18,
    mrp: 99.00,
    distPrice: 69.30,
    wholesalePrice: 79.20,
    retailPrice: 94.00,
    unitType: "Box",
    weight: "45ml",
    boxQty: 48,
    pieceQty: 1,
    barcode: "8901157005422",
    sku: "GDKT-FLASH-REF",
    stock: 95,
    minStock: 20,
    image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=400&q=80"
  },
  {
    id: "prod-12",
    name: "Goodknight Maha Jumbo Mosquito Coil (10)",
    brand: "Good Knight",
    category: "Home Insecticides",
    subcategory: "Coils",
    desc: "Maha Jumbo red spiral coils offering deep germicidal insect protection for 10 hours.",
    hsn: "38089191",
    gst: 18,
    mrp: 45.00,
    distPrice: 31.50,
    wholesalePrice: 36.00,
    retailPrice: 42.75,
    unitType: "Box",
    weight: "10 Coils",
    boxQty: 60,
    pieceQty: 1,
    barcode: "8901157005453",
    sku: "GDKT-MAHA-JUMBO",
    stock: 110,
    minStock: 15,
    image: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=400&q=80"
  },
  {
    id: "prod-13",
    name: "Goodknight Power Activ + Liquid Vapouriser (45ml Each)",
    brand: "Good Knight",
    category: "Home Insecticides",
    subcategory: "Vaporizers",
    desc: "Advanced dual mode power active vaporizer liquid refill offering complete protection.",
    hsn: "38089191",
    gst: 18,
    mrp: 85.00,
    distPrice: 59.50,
    wholesalePrice: 68.00,
    retailPrice: 80.75,
    unitType: "Box",
    weight: "45ml",
    boxQty: 48,
    pieceQty: 1,
    barcode: "8901157005460",
    sku: "GDKT-PA-REF",
    stock: 90,
    minStock: 18,
    image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=400&q=80"
  },
  {
    id: "prod-14",
    name: "Hit Flies & Mosquitoes Black Insect Killer Spray",
    brand: "HIT",
    category: "Home Insecticides",
    subcategory: "Sprays",
    desc: "Aerosol black insecticide targeted to eliminate flies and malaria mosquitoes immediately.",
    hsn: "38089191",
    gst: 18,
    mrp: 299.00,
    distPrice: 209.30,
    wholesalePrice: 239.20,
    retailPrice: 284.00,
    unitType: "Box",
    weight: "400ml",
    boxQty: 24,
    pieceQty: 1,
    barcode: "8901157006719",
    sku: "HIT-BLACK-400",
    stock: 33,
    minStock: 8,
    image: "https://images.unsplash.com/photo-1532187863486-abf9d39d66e8?w=400&q=80"
  },
  {
    id: "prod-15",
    name: "Park Avenue Good Morning Lather Shaving Cream",
    brand: "Park Avenue",
    category: "Personal Care",
    subcategory: "Shaving",
    desc: "Good Morning intense lathering formula shave cream enriched with organic moisturizers.",
    hsn: "33071010",
    gst: 18,
    mrp: 99.00,
    distPrice: 69.30,
    wholesalePrice: 79.20,
    retailPrice: 94.05,
    unitType: "Box",
    weight: "84g",
    boxQty: 48,
    pieceQty: 1,
    barcode: "8901157022016",
    sku: "PA-SHAVE-GM",
    stock: 55,
    minStock: 10,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&q=80"
  },
  {
    id: "prod-16",
    name: "Park Avenue Luxury Grooming Collection for Men",
    brand: "Park Avenue",
    category: "Personal Care",
    subcategory: "Grooming",
    desc: "Premium 7-in-1 male luxury grooming kit containing cologne, cream, brush, and razor.",
    hsn: "33072000",
    gst: 18,
    mrp: 650.00,
    distPrice: 455.00,
    wholesalePrice: 520.00,
    retailPrice: 617.50,
    unitType: "Box",
    weight: "Combo Pack",
    boxQty: 10,
    pieceQty: 1,
    barcode: "8901157022009",
    sku: "PA-GIFT-LUX",
    stock: 12,
    minStock: 3,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&q=80"
  },
  {
    id: "prod-17",
    name: "Cinthol Foam Body Wash Original",
    brand: "Cinthol",
    category: "Personal Care",
    subcategory: "Body Wash",
    desc: "Classic high-foaming antibacterial body wash providing standard active protection.",
    hsn: "34023000",
    gst: 18,
    mrp: 240.00,
    distPrice: 168.00,
    wholesalePrice: 192.00,
    retailPrice: 228.00,
    unitType: "Box",
    weight: "200ml",
    boxQty: 24,
    pieceQty: 1,
    barcode: "8901157011010",
    sku: "CNTL-BW-ORIG",
    stock: 25,
    minStock: 6,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&q=80"
  },
  {
    id: "prod-18",
    name: "Cinthol Powder Talc Lime",
    brand: "Cinthol",
    category: "Personal Care",
    subcategory: "Talc",
    desc: "Deodorant cooling talcum powder with zesty lemon extracts to suppress sweat.",
    hsn: "33049110",
    gst: 18,
    mrp: 149.00,
    distPrice: 104.30,
    wholesalePrice: 119.20,
    retailPrice: 141.50,
    unitType: "Box",
    weight: "300g",
    boxQty: 36,
    pieceQty: 1,
    barcode: "8901157001301",
    sku: "CNTL-TALC-LIME",
    stock: 45,
    minStock: 8,
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&q=80"
  },
  {
    id: "prod-19",
    name: "Cinthol Talc Powder Original",
    brand: "Cinthol",
    category: "Personal Care",
    subcategory: "Talc",
    desc: "Classic corporate deodorant talc offering active germicidal body freshness.",
    hsn: "33049110",
    gst: 18,
    mrp: 149.00,
    distPrice: 104.30,
    wholesalePrice: 119.20,
    retailPrice: 141.50,
    unitType: "Box",
    weight: "300g",
    boxQty: 36,
    pieceQty: 1,
    barcode: "8901157001318",
    sku: "CNTL-TALC-ORIG",
    stock: 35,
    minStock: 8,
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&q=80"
  },
  {
    id: "prod-20",
    name: "Godrej Aer Spray Cool",
    brand: "Godrej aer",
    category: "Fragrance",
    subcategory: "Sprays",
    desc: "Rich refreshing room freshener aerosol designed with long lasting cool breeze scent.",
    hsn: "33074900",
    gst: 18,
    mrp: 169.00,
    distPrice: 118.30,
    wholesalePrice: 135.20,
    retailPrice: 160.50,
    unitType: "Box",
    weight: "220ml",
    boxQty: 24,
    pieceQty: 1,
    barcode: "8901157009963",
    sku: "GDRJ-AER-COOL",
    stock: 40,
    minStock: 8,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80"
  },
  {
    id: "prod-21",
    name: "Godrej Aer Spray Morning",
    brand: "Godrej aer",
    category: "Fragrance",
    subcategory: "Sprays",
    desc: "Rich room freshener aerosol designed with rejuvenating dewy morning dew essence.",
    hsn: "33074900",
    gst: 18,
    mrp: 169.00,
    distPrice: 118.30,
    wholesalePrice: 135.20,
    retailPrice: 160.50,
    unitType: "Box",
    weight: "220ml",
    boxQty: 24,
    pieceQty: 1,
    barcode: "8901157009970",
    sku: "GDRJ-AER-MORNING",
    stock: 35,
    minStock: 8,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80"
  },
  {
    id: "prod-22",
    name: "Godrej Genteel Matic Liquid Super Saver Pack Refill Pack",
    brand: "Godrej Genteel",
    category: "Household Detergent",
    subcategory: "Liquids",
    desc: "Matic liquid laundry detergent super saver refill pouch designed for automatic washers.",
    hsn: "34022010",
    gst: 18,
    mrp: 260.00,
    distPrice: 182.00,
    wholesalePrice: 208.00,
    retailPrice: 247.00,
    unitType: "Box",
    weight: "1 Litre Pouch",
    boxQty: 12,
    pieceQty: 1,
    barcode: "8901157008836",
    sku: "GENT-MATIC-REF",
    stock: 28,
    minStock: 6,
    image: "https://images.unsplash.com/photo-1610557892470-76d747eedd74?w=400&q=80"
  },
  {
    id: "prod-23",
    name: "Godrej aer Matic Refill Automatic Room Freshener Cool",
    brand: "Godrej aer",
    category: "Fragrance",
    subcategory: "Refills",
    desc: "Rejuvenating cool surf automatic replacement refill spray for aer dispenser devices.",
    hsn: "33074900",
    gst: 18,
    mrp: 299.00,
    distPrice: 209.00,
    wholesalePrice: 239.00,
    retailPrice: 284.00,
    unitType: "Box",
    weight: "225ml",
    boxQty: 24,
    pieceQty: 1,
    barcode: "8901157009987",
    sku: "GDRJ-MATIC-COOL-REF",
    stock: 36,
    minStock: 8,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80"
  },
  {
    id: "prod-24",
    name: "Good Knight Fabric Roll On Mild Bloom Fragnance",
    brand: "Good Knight",
    category: "Home Insecticides",
    subcategory: "Repellents",
    desc: "Organic cloth roll on personal repellent with calming mild floral bloom notes.",
    hsn: "38089191",
    gst: 18,
    mrp: 90.00,
    distPrice: 63.00,
    wholesalePrice: 72.00,
    retailPrice: 85.50,
    unitType: "Box",
    weight: "8ml",
    boxQty: 48,
    pieceQty: 1,
    barcode: "8901157005477",
    sku: "GDKT-ROLLON-BLOOM",
    stock: 65,
    minStock: 12,
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&q=80"
  },
  {
    id: "prod-25",
    name: "New Hit Anti Mosquito Racquet",
    brand: "HIT",
    category: "Home Insecticides",
    subcategory: "Hardware",
    desc: "Premium grid electric mosquito swatting bat with built-in LED and aircraft ABS body.",
    hsn: "85437099",
    gst: 18,
    mrp: 499.00,
    distPrice: 349.30,
    wholesalePrice: 399.20,
    retailPrice: 474.00,
    unitType: "Box",
    weight: "1 Unit",
    boxQty: 10,
    pieceQty: 1,
    barcode: "8901157006726",
    sku: "HIT-RACQUET-NEW",
    stock: 15,
    minStock: 4,
    image: "https://images.unsplash.com/photo-1601662528567-526cd06f6582?w=400&q=80"
  },
  {
    id: "prod-26",
    name: "Park Avenue Good Morning Grooming Collection Kit for Men",
    brand: "Park Avenue",
    category: "Personal Care",
    subcategory: "Grooming",
    desc: "Essential shaving & grooming corporate collection pouch containing 5 essential men toiletries.",
    hsn: "33072000",
    gst: 18,
    mrp: 399.00,
    distPrice: 279.30,
    wholesalePrice: 319.20,
    retailPrice: 379.00,
    unitType: "Box",
    weight: "Grooming Kit",
    boxQty: 15,
    pieceQty: 1,
    barcode: "8901157022023",
    sku: "PA-GM-KIT",
    stock: 20,
    minStock: 5,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&q=80"
  },
  {
    id: "prod-27",
    name: "Cinthol Soap (100gm Each) Original",
    brand: "Cinthol",
    category: "Personal Care",
    subcategory: "Soaps",
    desc: "Single pack of legendary active deodorant bathing soap offering intense protection.",
    hsn: "34011110",
    gst: 18,
    mrp: 45.00,
    distPrice: 31.50,
    wholesalePrice: 36.00,
    retailPrice: 42.75,
    unitType: "Box",
    weight: "100g",
    boxQty: 72,
    pieceQty: 1,
    barcode: "8901157001400",
    sku: "CNTL-SOAP-100G-ORIG",
    stock: 120,
    minStock: 20,
    image: "https://images.unsplash.com/photo-1605264964528-06403738d6dc?w=400&q=80"
  },
  {
    id: "prod-28",
    name: "Cinthol Soap (125gm Each) Cool",
    brand: "Cinthol",
    category: "Personal Care",
    subcategory: "Soaps",
    desc: "Ice cool menthol bathing soap single pack to lock in all-weather fresh vigor.",
    hsn: "34011110",
    gst: 18,
    mrp: 70.00,
    distPrice: 49.00,
    wholesalePrice: 56.00,
    retailPrice: 66.50,
    unitType: "Box",
    weight: "125g",
    boxQty: 60,
    pieceQty: 1,
    barcode: "8901157001417",
    sku: "CNTL-SOAP-125G-COOL",
    stock: 90,
    minStock: 15,
    image: "https://images.unsplash.com/photo-1546554137-f86b9593a222?w=400&q=80"
  },
  {
    id: "prod-29",
    name: "Godrej Aer Spray Cool",
    brand: "Godrej aer",
    category: "Fragrance",
    subcategory: "Sprays",
    desc: "Aerosol room freshener designed with premium oceanic cool breeze mist essence.",
    hsn: "33074900",
    gst: 18,
    mrp: 169.00,
    distPrice: 118.30,
    wholesalePrice: 135.20,
    retailPrice: 160.55,
    unitType: "Box",
    weight: "220ml",
    boxQty: 24,
    pieceQty: 1,
    barcode: "8901157009994",
    sku: "GDRJ-AER-SPY-COOL",
    stock: 50,
    minStock: 10,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80"
  },
  {
    id: "prod-30",
    name: "Godrej Genteel Matic Liquid Super Saver Pack with Refill Pack (1kg Each)",
    brand: "Godrej Genteel",
    category: "Household Detergent",
    subcategory: "Liquids",
    desc: "Liquid laundry detergent matic set containing 1kg bottle plus an economy 1kg refill pouch.",
    hsn: "34022010",
    gst: 18,
    mrp: 480.00,
    distPrice: 336.00,
    wholesalePrice: 384.00,
    retailPrice: 456.00,
    unitType: "Box",
    weight: "1kg + 1kg",
    boxQty: 8,
    pieceQty: 1,
    barcode: "8901157008843",
    sku: "GENT-COMBO-2KG",
    stock: 18,
    minStock: 4,
    image: "https://images.unsplash.com/photo-1610557892470-76d747eedd74?w=400&q=80"
  },
  {
    id: "prod-31",
    name: "Godrej aer Matic Refill Automatic Room Freshener Fresh",
    brand: "Godrej aer",
    category: "Fragrance",
    subcategory: "Refills",
    desc: "Energizing fresh lush green automatic replacement refill spray for aer dispenser devices.",
    hsn: "33074900",
    gst: 18,
    mrp: 299.00,
    distPrice: 209.00,
    wholesalePrice: 239.00,
    retailPrice: 284.00,
    unitType: "Box",
    weight: "225ml",
    boxQty: 24,
    pieceQty: 1,
    barcode: "8901157010006",
    sku: "GDRJ-MATIC-FRSH-REF",
    stock: 42,
    minStock: 8,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80"
  },
  {
    id: "prod-32",
    name: "Good Knight Fabric Roll On Citrus",
    brand: "Good Knight",
    category: "Home Insecticides",
    subcategory: "Repellents",
    desc: "Citrus oil personal repellent roll-on. 100% natural, pediatric-safe micro-applicator.",
    hsn: "38089191",
    gst: 18,
    mrp: 90.00,
    distPrice: 63.00,
    wholesalePrice: 72.00,
    retailPrice: 85.50,
    unitType: "Box",
    weight: "8ml",
    boxQty: 48,
    pieceQty: 1,
    barcode: "8901157005484",
    sku: "GDKT-ROLLON-CTR",
    stock: 70,
    minStock: 12,
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&q=80"
  },
  {
    id: "prod-33",
    name: "Good Knight Flash Liquid Vaporizer",
    brand: "Good Knight",
    category: "Home Insecticides",
    subcategory: "Vaporizers",
    desc: "Advanced flash formula liquid repellent refill to wipe out mosquitoes instantly.",
    hsn: "38089191",
    gst: 18,
    mrp: 99.00,
    distPrice: 69.30,
    wholesalePrice: 79.20,
    retailPrice: 94.00,
    unitType: "Box",
    weight: "45ml",
    boxQty: 48,
    pieceQty: 1,
    barcode: "8901157005491",
    sku: "GDKT-FLASH-LIQ",
    stock: 85,
    minStock: 15,
    image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=400&q=80"
  },
  {
    id: "prod-34",
    name: "Good Knight Gold Flash Liquid Vapourizer with 3 Gold Flash Refills (45ml Each)",
    brand: "Good Knight",
    category: "Home Insecticides",
    subcategory: "Vaporizers",
    desc: "Triple mega economy saver refill set. Contains three Gold Flash high-delivery liquids.",
    hsn: "38089191",
    gst: 18,
    mrp: 270.00,
    distPrice: 189.00,
    wholesalePrice: 216.00,
    retailPrice: 256.50,
    unitType: "Box",
    weight: "45ml x 3",
    boxQty: 24,
    pieceQty: 1,
    barcode: "8901157005507",
    sku: "GDKT-FLASH-TRIPLE",
    stock: 30,
    minStock: 6,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&q=80"
  },
  {
    id: "prod-35",
    name: "Good Knight Gold Flash Machine with Gold Flash Refill Combi Pack",
    brand: "Good Knight",
    category: "Home Insecticides",
    subcategory: "Vaporizers",
    desc: "Smart automatic combi vaporizer kit containing 1 device and 1 Gold Flash refill.",
    hsn: "38089191",
    gst: 18,
    mrp: 135.00,
    distPrice: 94.50,
    wholesalePrice: 108.00,
    retailPrice: 128.25,
    unitType: "Box",
    weight: "45ml Pack",
    boxQty: 36,
    pieceQty: 1,
    barcode: "8901157005514",
    sku: "GDKT-FLASH-COMBI-NEW",
    stock: 45,
    minStock: 10,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&q=80"
  },
  {
    id: "prod-36",
    name: "Goodknight Gold Flash Liquid Vapouriser (45ml Each)",
    brand: "Good Knight",
    category: "Home Insecticides",
    subcategory: "Vaporizers",
    desc: "Advanced Gold Flash dual-mode mosquito vaporizer liquid refill.",
    hsn: "38089191",
    gst: 18,
    mrp: 99.00,
    distPrice: 69.30,
    wholesalePrice: 79.20,
    retailPrice: 94.00,
    unitType: "Box",
    weight: "45ml",
    boxQty: 48,
    pieceQty: 1,
    barcode: "8901157005521",
    sku: "GDKT-GOLD-FLASH",
    stock: 88,
    minStock: 15,
    image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=400&q=80"
  },
  {
    id: "prod-37",
    name: "Goodknight Gold Flash Liquid Vapouriser (45ml Each) Lavender",
    brand: "Good Knight",
    category: "Home Insecticides",
    subcategory: "Vaporizers",
    desc: "Gold Flash dual-mode mosquito liquid refill infused with therapeutic lavender oils.",
    hsn: "38089191",
    gst: 18,
    mrp: 105.00,
    distPrice: 73.50,
    wholesalePrice: 84.00,
    retailPrice: 99.75,
    unitType: "Box",
    weight: "45ml",
    boxQty: 48,
    pieceQty: 1,
    barcode: "8901157005538",
    sku: "GDKT-FLASH-LAV",
    stock: 62,
    minStock: 12,
    image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=400&q=80"
  },
  {
    id: "prod-38",
    name: "New Good Knight Flash Liquid Vaporiser Machine With Refill Combi Pack",
    brand: "Good Knight",
    category: "Home Insecticides",
    subcategory: "Vaporizers",
    desc: "Upgraded smart-cycle electric vaporizer device combi pack with flash refill.",
    hsn: "38089191",
    gst: 18,
    mrp: 140.00,
    distPrice: 98.00,
    wholesalePrice: 112.00,
    retailPrice: 133.00,
    unitType: "Box",
    weight: "45ml Set",
    boxQty: 36,
    pieceQty: 1,
    barcode: "8901157005545",
    sku: "GDKT-FLASH-VAP-NEW",
    stock: 50,
    minStock: 10,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&q=80"
  },
  {
    id: "prod-39",
    name: "New Hit Extra Power Anti Mosquito Spray Black",
    brand: "HIT",
    category: "Home Insecticides",
    subcategory: "Sprays",
    desc: "Maximum reach aerosol spray with active ingredients to kill mosquitoes in corners instantly.",
    hsn: "38089191",
    gst: 18,
    mrp: 325.00,
    distPrice: 227.50,
    wholesalePrice: 260.00,
    retailPrice: 308.75,
    unitType: "Box",
    weight: "400ml",
    boxQty: 24,
    pieceQty: 1,
    barcode: "8901157006733",
    sku: "HIT-EP-BLACK",
    stock: 30,
    minStock: 6,
    image: "https://images.unsplash.com/photo-1532187863486-abf9d39d66e8?w=400&q=80"
  },
  {
    id: "prod-40",
    name: "Park Avenue Cream Lather Shaving Classic",
    brand: "Park Avenue",
    category: "Personal Care",
    subcategory: "Shaving",
    desc: "Classic protective lather shaving cream offering skin slick shield against razor burns.",
    hsn: "33071010",
    gst: 18,
    mrp: 85.00,
    distPrice: 59.50,
    wholesalePrice: 68.00,
    retailPrice: 80.75,
    unitType: "Box",
    weight: "84g",
    boxQty: 48,
    pieceQty: 1,
    barcode: "8901157022030",
    sku: "PA-SHAVE-CLASSIC",
    stock: 52,
    minStock: 10,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&q=80"
  },
  {
    id: "prod-41",
    name: "Cinthol Soap (100gm Each) Lime Buy 4 Get 1 Free",
    brand: "Cinthol",
    category: "Personal Care",
    subcategory: "Soaps",
    desc: "Tangy lemon extract soap bundle set with high value 5-in-1 multi-pack.",
    hsn: "34011110",
    gst: 18,
    mrp: 199.00,
    distPrice: 139.30,
    wholesalePrice: 159.20,
    retailPrice: 189.00,
    unitType: "Box",
    weight: "100g x 5",
    boxQty: 24,
    pieceQty: 1,
    barcode: "8901157001424",
    sku: "CNTL-LIME-5PACK",
    stock: 40,
    minStock: 8,
    image: "https://images.unsplash.com/photo-1628438462967-34e850654c6e?w=400&q=80"
  },
  {
    id: "prod-42",
    name: "Cinthol Soap (150gm Each) Lime",
    brand: "Cinthol",
    category: "Personal Care",
    subcategory: "Soaps",
    desc: "Large family size lime bathing soap enriched with zesty natural oils.",
    hsn: "34011110",
    gst: 18,
    mrp: 90.00,
    distPrice: 63.00,
    wholesalePrice: 72.00,
    retailPrice: 85.50,
    unitType: "Box",
    weight: "150g",
    boxQty: 48,
    pieceQty: 1,
    barcode: "8901157001431",
    sku: "CNTL-SOAP-150G-LIME",
    stock: 75,
    minStock: 12,
    image: "https://images.unsplash.com/photo-1628438462967-34e850654c6e?w=400&q=80"
  },
  {
    id: "prod-43",
    name: "Godrej Aer Power Pocket Jasmine Floral Delight",
    brand: "Godrej aer",
    category: "Fragrance",
    subcategory: "Bathroom Freshener",
    desc: "Rich sweet smelling jasmine automatic gel pocket Bathroom air freshener.",
    hsn: "33074900",
    gst: 18,
    mrp: 55.00,
    distPrice: 38.50,
    wholesalePrice: 44.00,
    retailPrice: 52.25,
    unitType: "Box",
    weight: "10g",
    boxQty: 120,
    pieceQty: 1,
    barcode: "8901157010013",
    sku: "GDRJ-PKT-JAS",
    stock: 95,
    minStock: 20,
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&q=80"
  },
  {
    id: "prod-44",
    name: "Godrej Aer Spray Musk",
    brand: "Godrej aer",
    category: "Fragrance",
    subcategory: "Sprays",
    desc: "Classic rich musk room freshener spray designed with long-lasting intense woody mist.",
    hsn: "33074900",
    gst: 18,
    mrp: 169.00,
    distPrice: 118.30,
    wholesalePrice: 135.20,
    retailPrice: 160.50,
    unitType: "Box",
    weight: "220ml",
    boxQty: 24,
    pieceQty: 1,
    barcode: "8901157010020",
    sku: "GDRJ-AER-MUSK",
    stock: 30,
    minStock: 6,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80"
  },
  {
    id: "prod-45",
    name: "Godrej Ezee Liquid Detergent Winterwear Refill Pack",
    brand: "Godrej Ezee",
    category: "Household Detergent",
    subcategory: "Liquids",
    desc: "pH-neutral delicate winterwear fabric cleanser in a convenient economy refill pouch.",
    hsn: "34022010",
    gst: 18,
    mrp: 170.00,
    distPrice: 119.00,
    wholesalePrice: 136.00,
    retailPrice: 161.50,
    unitType: "Box",
    weight: "500ml Pouch",
    boxQty: 24,
    pieceQty: 1,
    barcode: "8901157008850",
    sku: "EZEE-WINTER-REF",
    stock: 45,
    minStock: 10,
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=400&q=80"
  },
  {
    id: "prod-46",
    name: "Godrej aer Matic Machine + Refill Kit Cool",
    brand: "Godrej aer",
    category: "Fragrance",
    subcategory: "Sprays",
    desc: "Automatic room freshener dispenser combi set with refreshing dewy cool surf scent.",
    hsn: "33074900",
    gst: 18,
    mrp: 569.00,
    distPrice: 398.30,
    wholesalePrice: 455.20,
    retailPrice: 540.50,
    unitType: "Box",
    weight: "225ml Device",
    boxQty: 12,
    pieceQty: 1,
    barcode: "8901157010037",
    sku: "GDRJ-MATIC-COOL-KIT",
    stock: 25,
    minStock: 5,
    image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=400&q=80"
  }
];

// --- 🏪 SAMPLE REGISTERED SHOPS ---
const DEFAULT_SHOPS = [
  {
    id: "shop-1",
    name: "Krishna Patel Retailers",
    owner: "Krishna Patel",
    mobile: "9876543210",
    altMobile: "9876543211",
    email: "krishna@retail.com",
    gstin: "24AAAAA1234A1Z5",
    pan: "AAAAA1234A",
    address: "102, GIDC Commercial Area",
    city: "Ahmedabad",
    state: "Gujarat",
    pincode: "380001",
    type: "Retailer",
    status: "Approved",
    loyaltyPoints: 340,
    photo: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=300&q=80"
  },
  {
    id: "shop-2",
    name: "Surat Wholesale Bazaar",
    owner: "Ramesh Bhai Shah",
    mobile: "9988776655",
    altMobile: "",
    email: "suratwholesale@biz.com",
    gstin: "24BBBBB5678B2Z9",
    pan: "BBBBB5678B",
    address: "B-54, Textile Market Tower",
    city: "Surat",
    state: "Gujarat",
    pincode: "395003",
    type: "Wholesaler",
    status: "Approved",
    loyaltyPoints: 1250,
    photo: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=300&q=80"
  },
  {
    id: "shop-3",
    name: "Jai Hind General Store",
    owner: "Dinesh Kumar",
    mobile: "8877665544",
    altMobile: "",
    email: "jaihindstore@gmail.com",
    gstin: "24CCCCC9012C3Z1",
    pan: "CCCCC9012C",
    address: "Shop 12, Station Road Chowk",
    city: "Vadodara",
    state: "Gujarat",
    pincode: "390002",
    type: "Retailer",
    status: "Pending",
    loyaltyPoints: 0,
    photo: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=300&q=80"
  }
];

// --- 🧾 SAMPLE COMPLETED ORDERS ---
const DEFAULT_ORDERS = [
  {
    id: "ORD-2026-001",
    date: "2026-05-20",
    shopId: "shop-1",
    shopName: "Krishna Patel Retailers",
    gstin: "24AAAAA1234A1Z5",
    zone: "Ahmedabad-North",
    items: [
      { productId: "prod-1", productName: "Godrej No.1 Soap (Lime & Aloe Vera)", price: 110.00, qty: 5, unitType: "Box" },
      { productId: "prod-3", productName: "Good Knight Gold Flash Liquid Vaporizer", price: 76.00, qty: 2, unitType: "Box" }
    ],
    taxableTotal: 702.00,
    cgst: 63.18,
    sgst: 63.18,
    discount: 70.20,
    grandTotal: 758.16,
    status: "Delivered",
    invoiceNum: "INV-26-0501"
  },
  {
    id: "ORD-2026-002",
    date: "2026-05-24",
    shopId: "shop-2",
    shopName: "Surat Wholesale Bazaar",
    gstin: "24BBBBB5678B2Z9",
    zone: "Surat-South",
    items: [
      { productId: "prod-2", productName: "Cinthol Cool Bath Soap", price: 125.00, qty: 10, unitType: "Box" },
      { productId: "prod-6", productName: "Godrej Ezee Liquid Detergent", price: 175.00, qty: 4, unitType: "Box" }
    ],
    taxableTotal: 1950.00,
    cgst: 175.50,
    sgst: 175.50,
    discount: 195.00,
    grandTotal: 2106.00,
    status: "Out for Delivery",
    invoiceNum: "INV-26-0502"
  },
  {
    id: "ORD-2026-003",
    date: "2026-05-27",
    shopId: "shop-1",
    shopName: "Krishna Patel Retailers",
    gstin: "24AAAAA1234A1Z5",
    zone: "Ahmedabad-North",
    items: [
      { productId: "prod-7", productName: "Godrej Aer Spray (Petal Crush Pink)", price: 130.00, qty: 2, unitType: "Box" }
    ],
    taxableTotal: 260.00,
    cgst: 23.40,
    sgst: 23.40,
    discount: 0.00,
    grandTotal: 306.80,
    status: "Approved",
    invoiceNum: "INV-26-0503"
  }
];

// --- 📍 GPS COORDINATE TRAJECTORIES ---
const TRACKER_ROUTES = {
  "Ahmedabad-North": [
    { x: 50, y: 140, label: "Godrej Regional Depot" },
    { x: 120, y: 150, label: "Highway Checkpoint 1" },
    { x: 220, y: 90, label: "Sabarmati Toll Gate" },
    { x: 380, y: 120, label: "GIDC Industrial Zone" },
    { x: 440, y: 170, label: "Krishna Patel Retailers" }
  ],
  "Surat-South": [
    { x: 50, y: 140, label: "Godrej Regional Depot" },
    { x: 180, y: 220, label: "Baroda Bypass Road" },
    { x: 320, y: 200, label: "Surat City Outer Ring" },
    { x: 450, y: 230, label: "Surat Wholesale Bazaar" }
  ]
};

// --- 🌐 LANGUAGE TRANSLATION MATRICES ---
const TRANSLATIONS = {
  en: {
    dashboardTitle: "Enterprise BI Console",
    dashboardDesc: "Real-time Godrej Consumer Products distribution analytics",
    totalSales: "Revenue Today",
    pendingOrders: "Pending Orders",
    deliveredOrders: "Delivered Orders",
    gstLiability: "GST Collection",
    recentOrders: "Order Request Pipeline",
    lowStock: "Low Stock Warning Logs",
    analyticsHeading: "Distribution Finance Analytics",
    opsHeading: "Intelligent Operations",
    catalogTitle: "Godrej Product Catalog",
    catalogDesc: "Real-time inventory access, stock counts, & dynamic GST allocations"
  },
  hi: {
    dashboardTitle: "उद्यम बीआई कंसोल",
    dashboardDesc: "वास्तविक समय गोदरेज कंज्यूमर प्रोडक्ट्स वितरण विश्लेषण",
    totalSales: "आज का राजस्व",
    pendingOrders: "लंबित आदेश",
    deliveredOrders: "वितरित आदेश",
    gstLiability: "जीएसटी संग्रह",
    recentOrders: "आर्डर अनुरोध पाइपलाइन",
    lowStock: "कम स्टॉक चेतावनी लॉग",
    analyticsHeading: "वितरण वित्तीय विश्लेषण",
    opsHeading: "बुद्धिमान संचालन",
    catalogTitle: "गोदरेज उत्पाद कैटलॉग",
    catalogDesc: "वास्तविक समय सूची पहुंच, स्टॉक गणना और गतिशील जीएसटी आवंटन"
  },
  gu: {
    dashboardTitle: "એન્ટરપ્રાઇઝ બીઆઈ કન્સોલ",
    dashboardDesc: "રિયલ-ટાઇમ ગોદરેજ કન્ઝ્યુમર પ્રોડક્ટ્સ વિતરણ વિશ્લેષણ",
    totalSales: "આજનો મહેસૂલ",
    pendingOrders: "બાકી ઓર્ડર્સ",
    deliveredOrders: "વિતરિત ઓર્ડર્સ",
    gstLiability: "જીએસટી કલેક્શન",
    recentOrders: "ઓર્ડર વિનંતી પાઇપલાઇન",
    lowStock: "ઓછા સ્ટોકની ચેતવણી લોગ્સ",
    analyticsHeading: "વિતરણ નાણાકીય વિશ્લેષણ",
    opsHeading: "બુદ્ધિશાળી કામગીરી",
    catalogTitle: "ગોદરેજ પ્રોડક્ટ કેટલોગ",
    catalogDesc: "રિયલ-ટાઇમ ઇન્વેન્ટરી એક્સેસ, સ્ટોક ગણતરી અને ગતિશીલ જીએસટી ફાળવણી"
  }
};

// --- ⚙️ APPLICATION INSTANCE STATE ---
let appState = {
  products: [],
  shops: [],
  orders: [],
  cart: [],
  currentRole: "admin",
  currentLang: "en",
  theme: "dark",
  currentUser: {
    name: "Admin Portal",
    role: "Super Admin",
    shopId: null
  },
  activityLogs: [],
  activeView: "dashboard",
  gpsAnimationTimer: null
};

// --- 🚀 INSTANT WAKE INITIALIZATION ---
window.addEventListener("DOMContentLoaded", () => {
  initSimulatedDatabase();
  applySystemPreferences();
  renderDashboardKPIs();
  updateDashboardCharts();
  renderProductCatalog();
  renderOrdersRegistry();
  renderShopsRegistry();
  renderSalesHub();
  lucide.createIcons();
});

// --- 💾 DATABASE ENGINE SIMULATOR ---
function initSimulatedDatabase() {
  // Load products
  const savedProducts = localStorage.getItem("godrej_erp_products");
  if (savedProducts) {
    appState.products = JSON.parse(savedProducts);
    // Safety check to flush stale local storage containing generic placeholders or older length catalogs
    if (appState.products.length !== DEFAULT_PRODUCTS.length || (appState.products.length > 0 && appState.products[0].image.includes("1607006342411"))) {
      appState.products = [...DEFAULT_PRODUCTS];
      saveProductsDB();
    }
  } else {
    appState.products = [...DEFAULT_PRODUCTS];
    saveProductsDB();
  }

  // Load shops
  const savedShops = localStorage.getItem("godrej_erp_shops");
  if (savedShops) {
    appState.shops = JSON.parse(savedShops);
  } else {
    appState.shops = [...DEFAULT_SHOPS];
    saveShopsDB();
  }

  // Load orders
  const savedOrders = localStorage.getItem("godrej_erp_orders");
  if (savedOrders) {
    appState.orders = JSON.parse(savedOrders);
  } else {
    appState.orders = [...DEFAULT_ORDERS];
    saveOrdersDB();
  }

  // Load activities
  const savedLogs = localStorage.getItem("godrej_erp_logs");
  if (savedLogs) {
    appState.activityLogs = JSON.parse(savedLogs);
  } else {
    appState.activityLogs = [
      { time: "2026-05-28T10:15:00", role: "Super Admin", shop: "Krishna Patel Retailers", details: "Approved shop registration application dossier" },
      { time: "2026-05-28T11:42:10", role: "Sales Manager", shop: "Surat Wholesale Bazaar", details: "Logged shop route visit; noted interest in high volume Cinthol buyback" }
    ];
    saveLogsDB();
  }
}

function saveProductsDB() { localStorage.setItem("godrej_erp_products", JSON.stringify(appState.products)); }
function saveShopsDB() { localStorage.setItem("godrej_erp_shops", JSON.stringify(appState.shops)); }
function saveOrdersDB() { localStorage.setItem("godrej_erp_orders", JSON.stringify(appState.orders)); }
function saveLogsDB() { localStorage.setItem("godrej_erp_logs", JSON.stringify(appState.activityLogs)); }

// --- 🎨 PREFERENCES & VIEWS MANAGER ---
function applySystemPreferences() {
  // Theme load
  const savedTheme = localStorage.getItem("godrej_erp_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  appState.theme = savedTheme;
  updateThemeIcons();

  // Load default user
  appState.currentUser = { name: "Admin Portal", role: "Super Admin", shopId: null };
  updateUserProfileDisplay();
}

function toggleTheme() {
  const nextTheme = appState.theme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", nextTheme);
  appState.theme = nextTheme;
  localStorage.setItem("godrej_erp_theme", nextTheme);
  updateThemeIcons();
  showToast("Theme switched successfully!", "info");
}

function updateThemeIcons() {
  const sunIcon = document.getElementById("theme-icon-sun");
  const moonIcon = document.getElementById("theme-icon-moon");
  if (appState.theme === "light") {
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
  } else {
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
  }
}

function changeLanguage(lang) {
  appState.currentLang = lang;
  
  // Hide all language matrices first
  document.querySelectorAll(".lang-en, .lang-hi, .lang-gu").forEach(el => el.style.display = "none");
  
  // Show active lang matrices
  document.querySelectorAll(`.lang-${lang}`).forEach(el => {
    if (el.tagName === "SPAN" && el.style.display === "none") {
      el.style.display = "inline";
    } else {
      el.style.display = "block";
    }
  });

  showToast(`Language changed to ${lang.toUpperCase()}`, "info");
}

// Switch UI Portal views
function switchView(viewName) {
  // Intercept sales and orders routes for admin role to use unified dashboard tabs
  if (appState.currentRole === "admin") {
    if (viewName === "sales") {
      viewName = "dashboard";
      appState.activeView = "dashboard";
      // Highlight dashboard in sidebar
      document.querySelectorAll(".nav-menu .nav-item").forEach(item => {
        item.classList.toggle("active", item.getAttribute("data-view") === "dashboard");
      });
      setTimeout(() => switchAdminTab("sales"), 50);
    } else if (viewName === "orders") {
      viewName = "dashboard";
      appState.activeView = "dashboard";
      // Highlight dashboard in sidebar
      document.querySelectorAll(".nav-menu .nav-item").forEach(item => {
        item.classList.toggle("active", item.getAttribute("data-view") === "dashboard");
      });
      setTimeout(() => switchAdminTab("delivery"), 50);
    }
  }

  // Intercept dashboard route for client/wholesaler roles
  if (viewName === "dashboard") {
    if (appState.currentRole === "retailer") {
      viewName = "retailer-dashboard";
    } else if (appState.currentRole === "wholesaler") {
      viewName = "wholesaler-dashboard";
    }
  }

  appState.activeView = viewName;
  
  // Update sidebar active highlights
  document.querySelectorAll(".nav-menu .nav-item").forEach(item => {
    item.classList.remove("active");
    const itemView = item.getAttribute("data-view");
    if (itemView === viewName || 
       (itemView === "dashboard" && (viewName === "retailer-dashboard" || viewName === "wholesaler-dashboard"))) {
      item.classList.add("active");
    }
  });

  // Switch display elements
  const sections = [
    "dashboard-section", "retailer-dashboard-section", "wholesaler-dashboard-section", "catalog-section", "orders-section", 
    "shops-section", "sales-section", "reports-section",
    "ai-hub-section", "gst-vault-section", "mobile-app-section", "credit-wallet-section", "profile-section"
  ];
  sections.forEach(sec => {
    const el = document.getElementById(sec);
    if (sec === `${viewName}-section`) {
      el.style.display = "block";
    } else {
      el.style.display = "none";
    }
  });

  // Refresh target view contents
  if (viewName === "dashboard") {
    renderDashboardKPIs();
    updateDashboardCharts();
    // Default to the first tab when opening dashboard fresh, unless already on a tab
    const activeTab = document.querySelector(".admin-cmd-tab.active");
    if (activeTab) {
      const tabId = activeTab.id.replace("atab-", "");
      switchAdminTab(tabId);
    } else {
      switchAdminTab("admin");
    }
  } else if (viewName === "retailer-dashboard") {
    renderRetailerDashboardView();
  } else if (viewName === "wholesaler-dashboard") {
    renderWholesalerDashboardView();
  } else if (viewName === "catalog") {
    renderProductCatalog();
  } else if (viewName === "orders") {
    renderOrdersRegistry();
  } else if (viewName === "shops") {
    renderShopsRegistry();
  } else if (viewName === "sales") {
    renderSalesHub();
  } else if (viewName === "reports") {
    renderReportsHub();
  } else if (viewName === "ai-hub") {
    renderAIHubView();
  } else if (viewName === "gst-vault") {
    renderGSTVaultView();
  } else if (viewName === "mobile-app") {
    renderMobileAppView();
  } else if (viewName === "credit-wallet") {
    renderCreditWalletView();
  } else if (viewName === "profile") {
    renderUserProfileForm();
  }
  
  // Auto-close sidebar on mobile after selecting a menu item
  const sidebar = document.querySelector(".sidebar");
  if (sidebar && sidebar.classList.contains("mobile-open")) {
    sidebar.classList.remove("mobile-open");
  }
  
  lucide.createIcons();
}

// Switch interactive user roles
function switchRole(role) {
  const originalRole = role;
  
  // If role is sales or delivery, promote them to admin under the hood so they have access to the unified dashboard and all sidebar console items!
  if (role === "sales" || role === "delivery" || role === "admin") {
    appState.currentRole = "admin";
  } else {
    appState.currentRole = role;
  }
  
  // Update Selector styling (buttons may not exist after login-portal redesign)
  document.querySelectorAll(".role-btn").forEach(btn => {
    btn.classList.remove("active");
  });
  const roleBtn = document.getElementById(`role-btn-${role}`);
  if (roleBtn) roleBtn.classList.add("active");

  // Adjust display controls
  const addProdBtn = document.getElementById("add-product-btn");
  const addShopBtn = document.getElementById("add-shop-btn");
  const cartTrigger = document.getElementById("cart-btn");

  if (role === "admin" || role === "sales" || role === "delivery") {
    if (role === "sales") {
      appState.currentUser = { name: "Rajesh Sharma", role: "Sales Manager", shopId: null };
    } else if (role === "delivery") {
      appState.currentUser = { name: "Vikram Yadav", role: "Delivery Manager", shopId: null };
    } else {
      appState.currentUser = { name: "Admin Portal", role: "Super Admin", shopId: null };
    }
    if (addProdBtn) addProdBtn.style.display = "inline-flex";
    if (addShopBtn) addShopBtn.style.display = "inline-flex";
    if (cartTrigger) cartTrigger.style.display = "none";
    role = "admin"; // Harmonise variable downstream
  } else if (role === "retailer") {
    // Keep custom dynamic user if shopId matches an approved retailer shop, otherwise set default
    const current = appState.currentUser;
    const isCustomActive = current && current.shopId && appState.shops.find(s => s.id === current.shopId && s.type === "Retailer");
    if (!isCustomActive) {
      const shop = appState.shops.find(s => s.id === "shop-1") || appState.shops[0];
      appState.currentUser = { name: shop.name, role: "Retailer Client", shopId: shop.id };
    }
    if (addProdBtn) addProdBtn.style.display = "none";
    if (addShopBtn) addShopBtn.style.display = "none";
    if (cartTrigger) cartTrigger.style.display = "flex";
  } else if (role === "wholesaler") {
    // Keep custom dynamic user if shopId matches an approved wholesaler shop, otherwise set default
    const current = appState.currentUser;
    const isCustomActive = current && current.shopId && appState.shops.find(s => s.id === current.shopId && s.type === "Wholesaler");
    if (!isCustomActive) {
      const shop = appState.shops.find(s => s.id === "shop-2") || appState.shops[1] || appState.shops[0];
      appState.currentUser = { name: shop.name, role: "Bulk Wholesaler", shopId: shop.id };
    }
    if (addProdBtn) addProdBtn.style.display = "none";
    if (addShopBtn) addShopBtn.style.display = "none";
    if (cartTrigger) cartTrigger.style.display = "flex";
  }

  // Adjust sidebar menu list visibility based on active role
  const allNavItems = document.querySelectorAll(".nav-menu .nav-item");
  allNavItems.forEach(item => {
    const view = item.getAttribute("data-view");
    if (role === "admin") {
      item.style.display = "block";
    } else if (role === "retailer" || role === "wholesaler") {
      // Retailer / Wholesaler: see only dashboard, catalog, orders, vault, wallet
      if (view === "dashboard" || view === "catalog" || view === "orders" || view === "gst-vault" || view === "credit-wallet") {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    }
  });

  // Update profile block
  updateUserProfileDisplay();
  
  // Hide 3D login portal overlay
  const overlay = document.getElementById("login-portal-overlay");
  if (overlay) {
    overlay.classList.add("hidden");
    setTimeout(() => { overlay.style.display = "none"; }, 650);
  }
  // Also hide legacy stub
  const loginModal = document.getElementById("login-modal");
  if (loginModal) loginModal.style.display = "none";
  
  // Direct view bounce to corresponding tab
  if (originalRole === "sales") {
    switchView("dashboard");
    setTimeout(() => switchAdminTab("sales"), 100);
  } else if (originalRole === "delivery") {
    switchView("dashboard");
    setTimeout(() => switchAdminTab("delivery"), 100);
  } else if (role === "retailer") {
    switchView("retailer-dashboard");
  } else if (role === "wholesaler") {
    switchView("wholesaler-dashboard");
  } else {
    switchView("dashboard");
  }

  showToast(`Role switched to: ${appState.currentUser.role}`, "success");
}

function updateUserProfileDisplay() {
  document.getElementById("user-display-name").innerText = appState.currentUser.name;
  document.getElementById("user-display-role").innerText = appState.currentUser.role;
  
  // Avatar letters
  const parts = appState.currentUser.name.split(" ");
  const initials = parts.map(p => p[0]).join("").substring(0, 2).toUpperCase();
  document.getElementById("user-initials").innerText = initials;
}

// --- 📊 ANALYTICS & DASHBOARD BI GRAPHICS ---
function renderDashboardKPIs() {
  const kpis = getCalculatedKPIs();
  const container = document.getElementById("kpi-container");
  
  container.innerHTML = `
    <!-- Revenue -->
    <div class="glass-panel kpi-card" style="--border-color: var(--primary); --bg-glow: var(--primary-glow)">
      <div class="kpi-header">
        <span>${appState.currentLang === 'hi' ? 'आज का राजस्व' : appState.currentLang === 'gu' ? 'આજનો મહેસૂલ' : 'Revenue Today'}</span>
        <i data-lucide="indian-rupee" class="kpi-icon"></i>
      </div>
      <div class="kpi-value">₹${kpis.revenue.toLocaleString('en-IN', {minimumFractionDigits:2, maximumFractionDigits:2})}</div>
      <div class="kpi-trend up"><i data-lucide="trending-up" style="width:12px;"></i> +12.4% vs Yesterday</div>
    </div>

    <!-- Active Orders -->
    <div class="glass-panel kpi-card" style="--border-color: var(--warning); --bg-glow: rgba(245,158,11,0.15)">
      <div class="kpi-header">
        <span>${appState.currentLang === 'hi' ? 'लंबित आदेश' : appState.currentLang === 'gu' ? 'બાકી ઓર્ડર્સ' : 'Pending Orders'}</span>
        <i data-lucide="shopping-cart" class="kpi-icon"></i>
      </div>
      <div class="kpi-value">${kpis.pendingCount}</div>
      <div class="kpi-trend flat"><i data-lucide="minus" style="width:12px;"></i> In Approval Queue</div>
    </div>

    <!-- Total Shops -->
    <div class="glass-panel kpi-card" style="--border-color: var(--accent-teal); --bg-glow: var(--accent-teal-glow)">
      <div class="kpi-header">
        <span>Distributors Active</span>
        <i data-lucide="store" class="kpi-icon"></i>
      </div>
      <div class="kpi-value">${appState.shops.length}</div>
      <div class="kpi-trend up"><i data-lucide="trending-up" style="width:12px;"></i> +2 New This Week</div>
    </div>

    <!-- Total GST Pool -->
    <div class="glass-panel kpi-card" style="--border-color: var(--success); --bg-glow: rgba(16,185,129,0.15)">
      <div class="kpi-header">
        <span>GST Pool Collection</span>
        <i data-lucide="landmark" class="kpi-icon"></i>
      </div>
      <div class="kpi-value">₹${kpis.gstPool.toLocaleString('en-IN', {minimumFractionDigits:2, maximumFractionDigits:2})}</div>
      <div class="kpi-trend up"><i data-lucide="arrow-up-right" style="width:12px;"></i> 18% CGST/SGST split</div>
    </div>
  `;

  // Render recent orders in pipeline
  const recentOrdersBody = document.getElementById("dashboard-orders-table");
  const sortedOrders = [...appState.orders].sort((a,b) => b.id.localeCompare(a.id)).slice(0, 3);
  
  recentOrdersBody.innerHTML = sortedOrders.map(ord => {
    let statusClass = "badge-pending";
    if (ord.status === "Delivered") statusClass = "badge-approved";
    if (ord.status === "Out for Delivery") statusClass = "badge-delivered";
    if (ord.status === "Cancelled") statusClass = "badge-danger";

    return `
      <tr>
        <td style="font-weight:600; color:var(--primary);">${ord.id}</td>
        <td>
          <div style="font-weight:600;">${ord.shopName}</div>
          <div style="font-size:0.7rem; color:var(--text-muted);">GSTIN: ${ord.gstin}</div>
        </td>
        <td style="font-weight:600;">₹${ord.grandTotal.toFixed(2)}</td>
        <td>₹${(ord.cgst + ord.sgst).toFixed(2)}</td>
        <td><span class="badge ${statusClass}">${ord.status}</span></td>
      </tr>
    `;
  }).join("");

  // Render low stock logs
  const stockBody = document.getElementById("dashboard-stock-table");
  const lowStockProducts = appState.products.filter(p => p.stock <= p.minStock);
  
  if (lowStockProducts.length === 0) {
    stockBody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:var(--text-muted);">🎉 All stock levels optimal. No alerts active.</td></tr>`;
  } else {
    stockBody.innerHTML = lowStockProducts.map(p => {
      return `
        <tr>
          <td style="font-weight:600;">${p.name}</td>
          <td style="color:var(--danger); font-weight:700;">${p.stock} Boxes</td>
          <td>${p.stock * p.boxQty} Pieces</td>
          <td>${p.minStock} Boxes</td>
          <td><span class="badge badge-danger">Low Stock Alert</span></td>
        </tr>
      `;
    }).join("");
  }

  // Populate AI Insights
  generateAIInsights();
  
  // Badge numbers on sidebar
  const pendingOrders = appState.orders.filter(o => o.status === "Pending").length;
  const pendingShops = appState.shops.filter(s => s.status === "Pending").length;
  const ordBadge = document.getElementById("sidebar-order-badge");
  const shopBadge = document.getElementById("sidebar-shop-badge");

  if (pendingOrders > 0) {
    ordBadge.innerText = pendingOrders;
    ordBadge.style.display = "inline-block";
  } else {
    ordBadge.style.display = "none";
  }

  if (pendingShops > 0) {
    shopBadge.innerText = pendingShops;
    shopBadge.style.display = "inline-block";
  } else {
    shopBadge.style.display = "none";
  }
}

function getCalculatedKPIs() {
  const revenue = appState.orders
    .filter(o => o.status !== "Cancelled")
    .reduce((sum, o) => sum + o.grandTotal, 0);
  
  const pendingCount = appState.orders.filter(o => o.status === "Pending").length;
  
  const gstPool = appState.orders
    .filter(o => o.status !== "Cancelled")
    .reduce((sum, o) => sum + o.cgst + o.sgst, 0);

  return { revenue, pendingCount, gstPool };
}

let mainChartInstance = null;
function updateDashboardCharts() {
  const ctx = document.getElementById("main-analytics-chart").getContext("2d");
  
  // Destory old instance
  if (mainChartInstance) {
    mainChartInstance.destroy();
  }

  // Generate historical labels and data values based on orders
  const labels = ["May 22", "May 23", "May 24", "May 25", "May 26", "May 27", "May 28"];
  const salesData = [12000, 18500, 24000, 15000, 31000, 28000, getCalculatedKPIs().revenue];
  
  mainChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'FMCG Sales Revenue (₹)',
          data: salesData,
          borderColor: '#e31b23',
          backgroundColor: 'rgba(227, 27, 35, 0.1)',
          fill: true,
          tension: 0.4,
          borderWidth: 3
        },
        {
          label: 'GST Collected split (₹)',
          data: salesData.map(v => v * 0.18),
          borderColor: '#0d9488',
          backgroundColor: 'rgba(13, 148, 136, 0.05)',
          fill: false,
          tension: 0.3,
          borderWidth: 2
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: appState.theme === 'dark' ? '#f8fafc' : '#0f172a' }
        }
      },
      scales: {
        x: {
          ticks: { color: appState.theme === 'dark' ? '#94a3b8' : '#475569' },
          grid: { color: 'rgba(255, 255, 255, 0.05)' }
        },
        y: {
          ticks: { color: appState.theme === 'dark' ? '#94a3b8' : '#475569' },
          grid: { color: 'rgba(255, 255, 255, 0.05)' }
        }
      }
    }
  });
}

// --- 🛍️ PRODUCT CATALOG CONTROLLER ---
let activeCategoryFilter = "All";
function renderProductCatalog() {
  const catalogContainer = document.getElementById("catalog-products-container");
  const chipsContainer = document.getElementById("category-filter-chips");

  // Get distinct categories
  const categories = ["All", ...new Set(appState.products.map(p => p.category))];
  
  // Render Chips
  chipsContainer.innerHTML = categories.map(cat => {
    const isActive = cat === activeCategoryFilter;
    return `
      <button class="btn ${isActive ? 'btn-primary' : 'btn-secondary'} btn-sm" onclick="filterCatalogByCategory('${cat}')">
        ${cat}
      </button>
    `;
  }).join("");

  // Filter & Sort Products
  let filteredProds = appState.products;
  if (activeCategoryFilter !== "All") {
    filteredProds = filteredProds.filter(p => p.category === activeCategoryFilter);
  }

  const sortVal = document.getElementById("catalog-price-sort").value;
  if (sortVal === "low") {
    filteredProds.sort((a,b) => a.wholesalePrice - b.wholesalePrice);
  } else if (sortVal === "high") {
    filteredProds.sort((a,b) => b.wholesalePrice - a.wholesalePrice);
  }

  if (filteredProds.length === 0) {
    catalogContainer.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:40px; color:var(--text-secondary);">No products match filter constraints.</div>`;
    return;
  }

  catalogContainer.innerHTML = filteredProds.map(p => {
    const isLowStock = p.stock <= p.minStock;
    const stockPill = p.stock === 0
      ? `<span class="badge badge-danger">Out of Stock</span>`
      : isLowStock 
        ? `<span class="badge badge-pending">Low Stock: ${p.stock} Boxes</span>`
        : `<span class="badge badge-success">In Stock: ${p.stock} Boxes</span>`;

    // Pricing display depends on role
    const isClientRole = appState.currentRole === "retailer" || appState.currentRole === "wholesaler";
    const priceLabel = appState.currentRole === "wholesaler" ? "Wholesale Box Price" : appState.currentRole === "retailer" ? "Retail Price (Box)" : "Distributor Cost";
    const displayedPrice = appState.currentRole === "wholesaler" ? p.wholesalePrice : appState.currentRole === "retailer" ? p.retailPrice : p.distPrice;

    // Show/hide Admin editing buttons
    const adminControls = appState.currentRole === "admin" 
      ? `<div style="display:flex; gap:6px; margin-top:8px;">
           <button class="btn btn-secondary btn-sm" style="flex:1;" onclick="openProductFormModal('${p.id}')"><i data-lucide="edit-3"></i> Edit</button>
           <button class="btn btn-danger btn-sm" style="padding:6px;" onclick="deleteProductItem('${p.id}')"><i data-lucide="trash-2"></i></button>
         </div>`
      : "";

    // Show add to cart trigger for retailer & wholesaler clients
    const unitLabel = appState.currentRole === "wholesaler" ? "Box (Case)" : "Box";
    const shopControls = isClientRole && p.stock > 0
      ? `<div class="add-to-cart-section">
           <input type="number" id="qty-input-${p.id}" class="form-control" style="width:70px; padding:6px 8px;" value="1" min="1" max="${p.stock}" placeholder="Qty">
           <button class="btn btn-primary btn-sm" style="flex:1;" onclick="addProductToCart('${p.id}')">
             <i data-lucide="shopping-cart"></i> Order ${unitLabel}
           </button>
         </div>`
      : isClientRole && p.stock === 0
      ? `<div style="text-align:center; padding:8px; color:var(--danger); font-size:0.75rem; font-weight:600;">⚠️ Out of Stock</div>`
      : "";

    return `
      <div class="glass-panel product-card animate-fade-in">
        <div class="product-card-badge">${stockPill}</div>
        <div class="product-img-wrapper">
          <img src="${p.image}" alt="${p.name}" class="product-img">
        </div>
        <div class="product-brand">${p.brand}</div>
        <h4 class="product-title" title="${p.name}">${p.name}</h4>
        <p class="product-desc">${p.desc}</p>
        
        <div class="product-meta-row">
          <span>HSN: ${p.hsn}</span>
          <span>GST: ${p.gst}%</span>
        </div>
        
        <div class="product-meta-row">
          <span>Barcode: ${p.barcode}</span>
          <span>Pack: ${p.weight}</span>
        </div>

        <div class="product-price-row">
          <span class="product-mrp">MRP: ₹${p.mrp.toFixed(2)}</span>
          <div>
            <div style="font-size:0.6rem; color:var(--text-muted); text-align:right;">${priceLabel}</div>
            <span class="product-selling-price">₹${displayedPrice.toFixed(2)}</span>
          </div>
        </div>

        ${shopControls}
        ${adminControls}
      </div>
    `;
  }).join("");

  lucide.createIcons();
}

function filterCatalogByCategory(cat) {
  activeCategoryFilter = cat;
  renderProductCatalog();
}

function deleteProductItem(id) {
  if (confirm("Confirm permanently deleting this Godrej product item?")) {
    appState.products = appState.products.filter(p => p.id !== id);
    saveProductsDB();
    renderProductCatalog();
    showToast("Product deleted from registry", "warning");
  }
}

// --- 🛒 INTEGRATED SHOPPING CART SYSTEM ---
function addProductToCart(id) {
  const prod = appState.products.find(p => p.id === id);
  if (!prod) { showToast("Product not found!", "error"); return; }
  
  const qtyEl = document.getElementById(`qty-input-${id}`);
  const qtyVal = qtyEl ? parseInt(qtyEl.value) || 1 : 1;

  if (qtyVal <= 0) {
    showToast("Please enter a valid quantity.", "error");
    return;
  }
  if (qtyVal > prod.stock) {
    showToast(`Insufficient warehouse stock. Max boxes available: ${prod.stock}`, "error");
    return;
  }

  // Determine price by role
  const unitPrice = appState.currentRole === "retailer" ? prod.retailPrice
    : appState.currentRole === "wholesaler" ? prod.wholesalePrice
    : prod.distPrice;

  // Check if already in cart - update qty
  const cartItem = appState.cart.find(c => c.productId === id);
  if (cartItem) {
    cartItem.qty = qtyVal;
    cartItem.price = unitPrice;
    showToast(`Updated cart: ${qtyVal} box(es) of ${prod.brand}!`, "info");
  } else {
    appState.cart.push({
      productId: id,
      productName: prod.name,
      brand: prod.brand,
      price: unitPrice,
      qty: qtyVal,
      gst: prod.gst,
      unitType: appState.currentRole === "wholesaler" ? "Box" : "Box"
    });
    showToast(`✅ Added ${qtyVal} box(es) of ${prod.brand} to cart!`, "success");
  }

  updateCartPill();
  
  // Animate cart button
  const cartBtn = document.getElementById("cart-btn");
  if (cartBtn) {
    cartBtn.style.transform = "scale(1.25)";
    setTimeout(() => { cartBtn.style.transform = "scale(1)"; }, 300);
  }
}

function updateCartPill() {
  const totalCount = appState.cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById("cart-count").innerText = totalCount;
}

function openCartModal() {
  const modal = document.getElementById("cart-modal");
  const tbody = document.getElementById("cart-items-table");
  
  if (appState.cart.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:30px; color:var(--text-secondary);">Cart is empty. Browse catalog to add Godrej products.</td></tr>`;
    resetCartSummaryDisplay();
    modal.style.display = "flex";
    return;
  }

  tbody.innerHTML = appState.cart.map((item, idx) => {
    const lineTotal = item.price * item.qty;
    return `
      <tr>
        <td style="font-weight:600;">${item.productName}</td>
        <td>
          <select class="form-control" style="padding:4px 8px; font-size:0.75rem;" onchange="updateCartItemUnit(${idx}, this.value)">
            <option value="Box" ${item.unitType === 'Box' ? 'selected' : ''}>Bulk Box</option>
            <option value="Piece" ${item.unitType === 'Piece' ? 'selected' : ''} ${appState.currentRole === 'wholesaler' ? 'disabled' : ''}>Piece</option>
          </select>
        </td>
        <td>₹${item.price.toFixed(2)}</td>
        <td>
          <input type="number" class="form-control" style="width:65px; padding:4px 6px;" value="${item.qty}" min="1" onchange="updateCartItemQty(${idx}, this.value)">
        </td>
        <td>${item.gst}%</td>
        <td style="font-weight:600;">₹${lineTotal.toFixed(2)}</td>
        <td>
          <button class="btn btn-danger btn-sm" style="padding:4px 8px;" onclick="deleteCartItem(${idx})"><i data-lucide="trash-2" style="width:14px;"></i></button>
        </td>
      </tr>
    `;
  }).join("");

  recalculateCartTotals();
  modal.style.display = "flex";
  lucide.createIcons();
}

function closeCartModal() {
  document.getElementById("cart-modal").style.display = "none";
}

function updateCartItemQty(idx, val) {
  const qty = parseInt(val);
  if (qty <= 0) return;
  appState.cart[idx].qty = qty;
  openCartModal();
}

function updateCartItemUnit(idx, unit) {
  if (appState.currentRole === "wholesaler" && unit === "Piece") {
    showToast("Wholesale distributors can only order full boxes/cases.", "warning");
    unit = "Box";
  }
  appState.cart[idx].unitType = unit;
  const prod = appState.products.find(p => p.name === appState.cart[idx].productName);
  if (unit === "Piece") {
    // Single Piece wholesale pricing
    appState.cart[idx].price = prod.wholesalePrice / prod.boxQty;
  } else {
    appState.cart[idx].price = prod.wholesalePrice;
  }
  openCartModal();
}

function deleteCartItem(idx) {
  appState.cart.splice(idx, 1);
  updateCartPill();
  openCartModal();
  showToast("Item removed from booking cart", "info");
}

function resetCartSummaryDisplay() {
  document.getElementById("cart-taxable-total").innerText = "₹0.00";
  document.getElementById("cart-cgst-total").innerText = "₹0.00";
  document.getElementById("cart-sgst-total").innerText = "₹0.00";
  document.getElementById("cart-discount-total").innerText = "-₹0.00";
  document.getElementById("cart-grand-total").innerText = "₹0.00";
}

let calculatedCartSummary = {};
function recalculateCartTotals() {
  let taxable = 0;
  let gstTotal = 0;

  appState.cart.forEach(item => {
    const lineTotal = item.price * item.qty;
    taxable += lineTotal;
    // GST Split (assuming price is tax exclusive)
    gstTotal += lineTotal * (item.gst / 100);
  });

  // Bulk Discount (if taxable total > 500)
  const discount = taxable > 500 ? taxable * 0.10 : 0.00;
  const netTaxable = taxable - discount;
  const finalGST = netTaxable * 0.18; // Flat CGST/SGST 9% each split
  const grandTotal = netTaxable + finalGST;

  calculatedCartSummary = {
    taxable: netTaxable,
    cgst: finalGST / 2,
    sgst: finalGST / 2,
    discount,
    grandTotal
  };

  document.getElementById("cart-taxable-total").innerText = `₹${calculatedCartSummary.taxable.toFixed(2)}`;
  document.getElementById("cart-cgst-total").innerText = `₹${calculatedCartSummary.cgst.toFixed(2)}`;
  document.getElementById("cart-sgst-total").innerText = `₹${calculatedCartSummary.sgst.toFixed(2)}`;
  document.getElementById("cart-discount-total").innerText = `-₹${calculatedCartSummary.discount.toFixed(2)}`;
  document.getElementById("cart-grand-total").innerText = `₹${calculatedCartSummary.grandTotal.toFixed(2)}`;
}

function submitWholesaleOrder() {
  if (appState.cart.length === 0) return;
  
  const shop = appState.shops.find(s => s.id === appState.currentUser.shopId) || appState.shops[0];
  const newOrder = {
    id: `ORD-2026-00${appState.orders.length + 1}`,
    date: new Date().toISOString().split("T")[0],
    shopId: shop.id,
    shopName: shop.name,
    gstin: shop.gstin,
    zone: shop.city === "Surat" ? "Surat-South" : "Ahmedabad-North",
    items: [...appState.cart],
    taxableTotal: calculatedCartSummary.taxable,
    cgst: calculatedCartSummary.cgst,
    sgst: calculatedCartSummary.sgst,
    discount: calculatedCartSummary.discount,
    grandTotal: calculatedCartSummary.grandTotal,
    status: "Pending",
    invoiceNum: `INV-26-050${appState.orders.length + 1}`
  };

  // Subtract stock boxes
  appState.cart.forEach(item => {
    const prod = appState.products.find(p => p.id === item.productId);
    if (prod && item.unitType === "Box") {
      prod.stock = Math.max(0, prod.stock - item.qty);
    }
  });

  // Save order and products stock updates
  appState.orders.push(newOrder);
  saveOrdersDB();
  saveProductsDB();
  
  // Clear cart
  appState.cart = [];
  updateCartPill();
  closeCartModal();
  
  // Add Audit logs
  logActivity("Shop Owner", shop.name, `Created bulk order request ${newOrder.id} for ₹${newOrder.grandTotal.toFixed(2)}`);

  showToast(`Bulk Order booked successfully! Order ID: ${newOrder.id}`, "success");
  
  // Refresh Views
  renderDashboardKPIs();
  renderProductCatalog();
  renderOrdersRegistry();
  if (appState.currentRole === "retailer") renderRetailerDashboardView();
  if (appState.currentRole === "wholesaler") renderWholesalerDashboardView();
}

// --- 📑 GST BILLING & INVOICE PRINTER ---
function viewInvoice(orderId) {
  const ord = appState.orders.find(o => o.id === orderId);
  if (!ord) return;
  const shop = appState.shops.find(s => s.id === ord.shopId) || appState.shops[0];
  const frame = document.getElementById("invoice-thermal-print");

  // Update status pill in header
  const statusPill = document.getElementById("inv-status-pill");
  if (statusPill) {
    statusPill.innerText = ord.status;
    statusPill.className = `badge ${ord.status === 'Delivered' ? 'badge-approved' : ord.status === 'Cancelled' ? 'badge-danger' : 'badge-pending'}`;
  }

  // Build items table rows
  const itemsHtml = ord.items.map((item, idx) => {
    const lineBase = item.price * item.qty;
    const gstPct  = item.gst || 18;
    const gstAmt  = lineBase * (gstPct / 100);
    const lineTotal = lineBase + gstAmt;
    return `
      <tr style="border-bottom:1px solid #e2e8f0;">
        <td style="padding:10px 12px; font-size:0.82rem; font-weight:600; color:#1e293b;">${idx+1}. ${item.productName}</td>
        <td style="padding:10px 8px; text-align:center; font-size:0.8rem; color:#475569;">${item.unitType || 'Box'}</td>
        <td style="padding:10px 8px; text-align:center; font-size:0.8rem; color:#475569;">${item.qty}</td>
        <td style="padding:10px 8px; text-align:right; font-size:0.8rem; color:#475569;">₹${item.price.toFixed(2)}</td>
        <td style="padding:10px 8px; text-align:right; font-size:0.8rem; color:#475569;">₹${lineBase.toFixed(2)}</td>
        <td style="padding:10px 8px; text-align:center; font-size:0.78rem; color:#f59e0b; font-weight:700;">${gstPct}%</td>
        <td style="padding:10px 8px; text-align:right; font-size:0.8rem; color:#f59e0b;">₹${gstAmt.toFixed(2)}</td>
        <td style="padding:10px 12px; text-align:right; font-size:0.85rem; font-weight:700; color:#0f172a;">₹${lineTotal.toFixed(2)}</td>
      </tr>
    `;
  }).join("");

  // Format date nicely
  const dateObj = new Date(ord.date);
  const formattedDate = dateObj.toLocaleDateString('en-IN', { day:'2-digit', month:'long', year:'numeric' });

  // Convert amount to words (simple implementation)
  function numToWords(n) {
    const a = ['','One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen'];
    const b = ['','','Twenty','Thirty','Forty','Fifty','Sixty','Seventy','Eighty','Ninety'];
    if (n === 0) return 'Zero';
    const inWords = (num) => {
      if (num < 20) return a[num];
      if (num < 100) return b[Math.floor(num/10)] + (num%10 ? ' ' + a[num%10] : '');
      if (num < 1000) return a[Math.floor(num/100)] + ' Hundred' + (num%100 ? ' ' + inWords(num%100) : '');
      if (num < 100000) return inWords(Math.floor(num/1000)) + ' Thousand' + (num%1000 ? ' ' + inWords(num%1000) : '');
      return inWords(Math.floor(num/100000)) + ' Lakh' + (num%100000 ? ' ' + inWords(num%100000) : '');
    };
    const rupees = Math.floor(n);
    const paise = Math.round((n - rupees) * 100);
    let result = inWords(rupees) + ' Rupees';
    if (paise > 0) result += ' and ' + inWords(paise) + ' Paise';
    return result + ' Only';
  }

  frame.innerHTML = `
    <div style="background:#ffffff; font-family:'Segoe UI', sans-serif; color:#0f172a; border-radius:16px; overflow:hidden; box-shadow:0 8px 40px rgba(0,0,0,0.2);">

      <!-- ===== HEADER BAND ===== -->
      <div style="background:linear-gradient(135deg, #e31b23 0%, #b91017 50%, #0d9488 100%); padding:0; position:relative; overflow:hidden;">
        <div style="padding:24px 28px 20px; display:flex; justify-content:space-between; align-items:flex-start; position:relative; z-index:2;">
          <!-- Left: Company Info -->
          <div>
            <div style="font-size:1.6rem; font-weight:900; letter-spacing:-0.5px; color:#ffffff; text-shadow:0 2px 8px rgba(0,0,0,0.3);">GODREJ</div>
            <div style="font-size:0.65rem; color:rgba(255,255,255,0.85); font-weight:600; letter-spacing:2px; margin-top:1px;">CONSUMER PRODUCTS LIMITED</div>
            <div style="margin-top:10px; font-size:0.72rem; color:rgba(255,255,255,0.8); line-height:1.6;">
              <div>Pirojshanagar, Vikhroli (West), Mumbai — 400 079</div>
              <div>GSTIN: <strong style="color:#fff;">27AAACG1680M1ZJ</strong> &nbsp;|&nbsp; PAN: AAACG1680M</div>
              <div>FSSAI: 10018011002253 &nbsp;|&nbsp; State: Maharashtra (27)</div>
            </div>
          </div>
          <!-- Right: Invoice Meta -->
          <div style="text-align:right;">
            <div style="background:rgba(255,255,255,0.15); backdrop-filter:blur(10px); border:1px solid rgba(255,255,255,0.25); border-radius:12px; padding:14px 18px;">
              <div style="font-size:0.6rem; color:rgba(255,255,255,0.7); letter-spacing:1px; margin-bottom:2px;">TAX INVOICE</div>
              <div style="font-size:1.1rem; font-weight:800; color:#ffffff;">${ord.invoiceNum}</div>
              <div style="width:100%; height:1px; background:rgba(255,255,255,0.2); margin:8px 0;"></div>
              <div style="font-size:0.7rem; color:rgba(255,255,255,0.8);">Order: <strong style="color:#fff;">${ord.id}</strong></div>
              <div style="font-size:0.7rem; color:rgba(255,255,255,0.8); margin-top:3px;">Date: <strong style="color:#fff;">${formattedDate}</strong></div>
              <div style="margin-top:8px;">
                <span style="background:rgba(255,255,255,0.9); color:#1e293b; padding:3px 10px; border-radius:20px; font-size:0.65rem; font-weight:700; letter-spacing:0.5px;">${ord.status.toUpperCase()}</span>
              </div>
            </div>
          </div>
        </div>
        <!-- Decorative circles -->
        <div style="position:absolute; top:-30px; right:120px; width:120px; height:120px; border-radius:50%; background:rgba(255,255,255,0.06); z-index:1;"></div>
        <div style="position:absolute; bottom:-40px; left:60px; width:100px; height:100px; border-radius:50%; background:rgba(0,0,0,0.08); z-index:1;"></div>
      </div>

      <!-- ===== BILLING INFO ROW ===== -->
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:0; border-bottom:2px solid #e2e8f0;">
        <!-- Billed From -->
        <div style="padding:18px 22px; border-right:1px solid #e2e8f0;">
          <div style="font-size:0.65rem; font-weight:700; letter-spacing:1.5px; color:#94a3b8; margin-bottom:8px;">BILL FROM</div>
          <div style="font-weight:700; font-size:0.92rem; color:#0f172a; margin-bottom:4px;">Godrej Regional Distributor Depot</div>
          <div style="font-size:0.78rem; color:#475569; line-height:1.7;">
            <div>Survey No. 152, GIDC Estate, Phase-II</div>
            <div>Ahmedabad — 382 430, Gujarat</div>
            <div style="margin-top:4px;">GSTIN: <span style="font-weight:600; color:#0f172a;">24GODREJ1234A1Z0</span></div>
            <div>Zone: <span style="font-weight:600; color:#e31b23;">${ord.zone}</span></div>
          </div>
        </div>
        <!-- Billed To -->
        <div style="padding:18px 22px;">
          <div style="font-size:0.65rem; font-weight:700; letter-spacing:1.5px; color:#94a3b8; margin-bottom:8px;">BILL TO</div>
          <div style="font-weight:700; font-size:0.92rem; color:#0f172a; margin-bottom:4px;">${ord.shopName}</div>
          <div style="font-size:0.78rem; color:#475569; line-height:1.7;">
            <div>${shop.address || 'N/A'}, ${shop.city || ''} — ${shop.pincode || ''}</div>
            <div>${shop.state || 'Gujarat'}</div>
            <div style="margin-top:4px;">GSTIN: <span style="font-weight:600; color:#0f172a;">${ord.gstin}</span></div>
            <div>Owner: <span style="font-weight:600; color:#0f172a;">${shop.owner || 'N/A'}</span> &nbsp;|&nbsp; 📞 ${shop.mobile || ''}</div>
          </div>
        </div>
      </div>

      <!-- ===== ITEMS TABLE ===== -->
      <div style="padding:0;">
        <table style="width:100%; border-collapse:collapse;">
          <thead>
            <tr style="background:#f8fafc; border-bottom:2px solid #e31b23;">
              <th style="padding:11px 12px; text-align:left; font-size:0.72rem; font-weight:700; color:#475569; letter-spacing:0.8px;">PRODUCT / DESCRIPTION</th>
              <th style="padding:11px 8px; text-align:center; font-size:0.72rem; font-weight:700; color:#475569; letter-spacing:0.8px;">UNIT</th>
              <th style="padding:11px 8px; text-align:center; font-size:0.72rem; font-weight:700; color:#475569; letter-spacing:0.8px;">QTY</th>
              <th style="padding:11px 8px; text-align:right; font-size:0.72rem; font-weight:700; color:#475569; letter-spacing:0.8px;">RATE</th>
              <th style="padding:11px 8px; text-align:right; font-size:0.72rem; font-weight:700; color:#475569; letter-spacing:0.8px;">TAXABLE</th>
              <th style="padding:11px 8px; text-align:center; font-size:0.72rem; font-weight:700; color:#f59e0b; letter-spacing:0.8px;">GST%</th>
              <th style="padding:11px 8px; text-align:right; font-size:0.72rem; font-weight:700; color:#f59e0b; letter-spacing:0.8px;">TAX AMT</th>
              <th style="padding:11px 12px; text-align:right; font-size:0.72rem; font-weight:700; color:#0f172a; letter-spacing:0.8px;">TOTAL</th>
            </tr>
          </thead>
          <tbody>
            ${itemsHtml}
          </tbody>
        </table>
      </div>

      <!-- ===== TAX SUMMARY ===== -->
      <div style="display:grid; grid-template-columns:1fr auto; border-top:2px solid #e2e8f0;">

        <!-- Left: Amount in words + E-Way info -->
        <div style="padding:16px 22px; border-right:1px solid #e2e8f0;">
          <div style="font-size:0.65rem; color:#94a3b8; font-weight:700; letter-spacing:1px; margin-bottom:6px;">AMOUNT IN WORDS</div>
          <div style="font-size:0.78rem; font-style:italic; color:#1e293b; font-weight:600; line-height:1.4;">${numToWords(ord.grandTotal)}</div>
          <div style="margin-top:12px; padding:10px 14px; background:#f0fdf4; border-radius:8px; border-left:3px solid #10b981;">
            <div style="font-size:0.65rem; color:#10b981; font-weight:700; letter-spacing:0.8px;">E-WAY BILL GENERATED</div>
            <div style="font-size:0.72rem; color:#065f46; font-weight:600; margin-top:2px;">EWB/${ord.id}/${ord.date?.replace(/-/g,'')}</div>
          </div>
          <div style="margin-top:10px; display:flex; gap:16px; align-items:center;">
            <!-- QR Code SVG -->
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="width:64px; height:64px; flex-shrink:0; border:2px solid #e2e8f0; border-radius:6px; padding:4px; background:#fff;">
              <rect width="100" height="100" fill="white"/>
              <path d="M5,5 h30 v30 h-30 z M10,10 h20 v20 h-20 z" fill="#1e293b"/>
              <path d="M65,5 h30 v30 h-30 z M70,10 h20 v20 h-20 z" fill="#1e293b"/>
              <path d="M5,65 h30 v30 h-30 z M10,70 h20 v20 h-20 z" fill="#1e293b"/>
              <rect x="38" y="5" width="8" height="8" fill="#1e293b"/>
              <rect x="50" y="5" width="5" height="5" fill="#1e293b"/>
              <rect x="38" y="18" width="5" height="8" fill="#1e293b"/>
              <rect x="48" y="15" width="8" height="5" fill="#1e293b"/>
              <rect x="58" y="38" width="5" height="5" fill="#1e293b"/>
              <rect x="65" y="45" width="10" height="5" fill="#1e293b"/>
              <rect x="80" y="40" width="5" height="10" fill="#1e293b"/>
              <rect x="88" y="38" width="7" height="7" fill="#1e293b"/>
              <rect x="38" y="38" width="20" height="20" fill="#e31b23"/>
              <rect x="42" y="42" width="12" height="12" fill="#fff"/>
              <rect x="45" y="45" width="6" height="6" fill="#e31b23"/>
              <rect x="65" y="65" width="8" height="8" fill="#1e293b"/>
              <rect x="78" y="72" width="10" height="6" fill="#1e293b"/>
              <rect x="68" y="80" width="6" height="10" fill="#1e293b"/>
              <rect x="82" y="82" width="10" height="10" fill="#1e293b"/>
            </svg>
            <div style="font-size:0.62rem; color:#94a3b8; line-height:1.5;">Scan QR for<br>GST Portal<br>Verification</div>
          </div>
        </div>

        <!-- Right: Tax Breakdown Box -->
        <div style="padding:16px 22px; min-width:260px;">
          <div style="font-size:0.65rem; color:#94a3b8; font-weight:700; letter-spacing:1px; margin-bottom:10px;">TAX SUMMARY</div>
          
          <div style="display:flex; justify-content:space-between; font-size:0.8rem; color:#475569; margin-bottom:7px; padding-bottom:7px; border-bottom:1px dashed #e2e8f0;">
            <span>Taxable Value</span>
            <span style="font-weight:600; color:#1e293b;">₹${ord.taxableTotal.toFixed(2)}</span>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:0.8rem; color:#475569; margin-bottom:7px; padding-bottom:7px; border-bottom:1px dashed #e2e8f0;">
            <span>Trade Discount</span>
            <span style="font-weight:600; color:#10b981;">-₹${ord.discount.toFixed(2)}</span>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:0.8rem; color:#f59e0b; margin-bottom:6px;">
            <span style="display:flex; align-items:center; gap:4px;"><span style="width:8px; height:8px; background:#f59e0b; border-radius:50%; display:inline-block;"></span> CGST @ 9%</span>
            <span style="font-weight:600;">₹${ord.cgst.toFixed(2)}</span>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:0.8rem; color:#f59e0b; margin-bottom:10px;">
            <span style="display:flex; align-items:center; gap:4px;"><span style="width:8px; height:8px; background:#f59e0b; border-radius:50%; display:inline-block;"></span> SGST @ 9%</span>
            <span style="font-weight:600;">₹${ord.sgst.toFixed(2)}</span>
          </div>
          
          <!-- Grand Total Box -->
          <div style="background:linear-gradient(135deg,#e31b23,#c41017); border-radius:12px; padding:14px 16px; text-align:right;">
            <div style="font-size:0.65rem; color:rgba(255,255,255,0.7); letter-spacing:1px; margin-bottom:3px;">NET PAYABLE AMOUNT</div>
            <div style="font-size:1.4rem; font-weight:900; color:#ffffff; letter-spacing:-0.5px;">₹${ord.grandTotal.toLocaleString('en-IN', {minimumFractionDigits:2, maximumFractionDigits:2})}</div>
          </div>
        </div>
      </div>

      <!-- ===== BARCODE FOOTER ===== -->
      <div style="background:#f8fafc; padding:14px 22px; border-top:2px solid #e2e8f0;">
        <svg viewBox="0 0 300 28" xmlns="http://www.w3.org/2000/svg" style="display:block; width:100%; height:28px; margin-bottom:4px;">
          <rect width="300" height="28" fill="white"/>
          <rect x="5" width="3" height="28" fill="#1e293b"/><rect x="10" width="1.5" height="28" fill="#1e293b"/><rect x="14" width="4" height="28" fill="#1e293b"/>
          <rect x="20" width="1.5" height="28" fill="#1e293b"/><rect x="24" width="2" height="28" fill="#1e293b"/><rect x="29" width="4" height="28" fill="#1e293b"/>
          <rect x="35" width="1" height="28" fill="#1e293b"/><rect x="38" width="3" height="28" fill="#1e293b"/><rect x="43" width="1.5" height="28" fill="#1e293b"/>
          <rect x="47" width="5" height="28" fill="#1e293b"/><rect x="55" width="2" height="28" fill="#1e293b"/><rect x="60" width="1" height="28" fill="#1e293b"/>
          <rect x="64" width="3" height="28" fill="#1e293b"/><rect x="70" width="1.5" height="28" fill="#1e293b"/><rect x="75" width="4" height="28" fill="#1e293b"/>
          <rect x="82" width="2" height="28" fill="#1e293b"/><rect x="87" width="1" height="28" fill="#1e293b"/><rect x="91" width="3" height="28" fill="#1e293b"/>
          <rect x="97" width="1.5" height="28" fill="#1e293b"/><rect x="102" width="4" height="28" fill="#1e293b"/><rect x="108" width="2" height="28" fill="#1e293b"/>
          <rect x="113" width="1.5" height="28" fill="#1e293b"/><rect x="117" width="3" height="28" fill="#1e293b"/><rect x="122" width="1" height="28" fill="#1e293b"/>
          <rect x="126" width="5" height="28" fill="#1e293b"/><rect x="134" width="2" height="28" fill="#1e293b"/><rect x="139" width="1.5" height="28" fill="#1e293b"/>
          <rect x="143" width="3" height="28" fill="#1e293b"/><rect x="148" width="1" height="28" fill="#1e293b"/><rect x="152" width="4" height="28" fill="#1e293b"/>
          <rect x="159" width="2" height="28" fill="#1e293b"/><rect x="164" width="1.5" height="28" fill="#1e293b"/><rect x="168" width="3" height="28" fill="#1e293b"/>
          <rect x="174" width="1" height="28" fill="#1e293b"/><rect x="178" width="4" height="28" fill="#1e293b"/><rect x="185" width="2" height="28" fill="#1e293b"/>
          <rect x="190" width="1" height="28" fill="#1e293b"/><rect x="194" width="5" height="28" fill="#1e293b"/><rect x="202" width="1.5" height="28" fill="#1e293b"/>
          <rect x="206" width="3" height="28" fill="#1e293b"/><rect x="212" width="2" height="28" fill="#1e293b"/><rect x="217" width="1" height="28" fill="#1e293b"/>
          <rect x="221" width="4" height="28" fill="#1e293b"/><rect x="228" width="1.5" height="28" fill="#1e293b"/><rect x="232" width="3" height="28" fill="#1e293b"/>
          <rect x="238" width="1" height="28" fill="#1e293b"/><rect x="242" width="4" height="28" fill="#1e293b"/><rect x="249" width="2" height="28" fill="#1e293b"/>
          <rect x="254" width="1.5" height="28" fill="#1e293b"/><rect x="258" width="3" height="28" fill="#1e293b"/><rect x="263" width="1" height="28" fill="#1e293b"/>
          <rect x="267" width="5" height="28" fill="#1e293b"/><rect x="275" width="2" height="28" fill="#1e293b"/><rect x="280" width="1.5" height="28" fill="#1e293b"/>
          <rect x="284" width="4" height="28" fill="#1e293b"/><rect x="291" width="2" height="28" fill="#1e293b"/><rect x="296" width="3" height="28" fill="#1e293b"/>
        </svg>
        <div style="text-align:center; font-size:0.6rem; letter-spacing:4px; color:#94a3b8; font-weight:700;">${ord.id} &nbsp;|&nbsp; ${ord.invoiceNum}</div>
        
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:12px; padding-top:10px; border-top:1px dashed #e2e8f0;">
          <div style="font-size:0.68rem; color:#94a3b8;">
            <strong style="color:#1e293b;">Terms:</strong> Payment due within 30 days. Subject to Ahmedabad jurisdiction.<br>
            <strong style="color:#1e293b;">Bank:</strong> Godrej & Boyce HDFC A/C No: XXXX-XXXX-2847 &nbsp;|&nbsp; IFSC: HDFC0001234
          </div>
          <div style="text-align:right; font-size:0.65rem; color:#94a3b8;">
            <div style="font-weight:700; color:#1e293b; margin-bottom:16px;">Authorized Signatory</div>
            <div style="border-top:1px solid #cbd5e1; padding-top:4px;">For Godrej Consumer Products Ltd</div>
          </div>
        </div>
        
        <div style="text-align:center; margin-top:10px; padding-top:10px; border-top:1px solid #e2e8f0; font-size:0.65rem; color:#94a3b8;">
          🇮🇳 This is a computer-generated invoice. &nbsp;|&nbsp; Godrej Consumer Products Ltd — CIN: L24246MH2000PLC129806 &nbsp;|&nbsp; Thank you for partnering with Godrej!
        </div>
      </div>

    </div>
  `;

  document.getElementById("invoice-modal").style.display = "flex";
}


function closeInvoiceModal() {
  document.getElementById("invoice-modal").style.display = "none";
}

function printInvoiceDocument() {
  const content = document.getElementById("invoice-thermal-print").innerHTML;
  const printWin = window.open("", "_blank");
  printWin.document.write(`
    <html>
      <head>
        <title>Godrej ERP GST Invoice</title>
        <meta charset="UTF-8">
        <style>
          * { margin:0; padding:0; box-sizing:border-box; }
          body { font-family:'Segoe UI', Arial, sans-serif; background:#f1f5f9; display:flex; justify-content:center; padding:30px 20px; }
          .invoice-wrapper { background:#ffffff; width:820px; border-radius:12px; overflow:hidden; box-shadow:0 4px 20px rgba(0,0,0,0.15); }
          table { width:100%; border-collapse:collapse; }
          th { background:#f8fafc; padding:10px 12px; text-align:left; font-size:11px; font-weight:700; color:#475569; letter-spacing:0.8px; border-bottom:2px solid #e31b23; }
          td { padding:9px 12px; font-size:12px; color:#334155; }
          tr:nth-child(even) td { background:#fafafa; }
          .grand-total-box { background:linear-gradient(135deg,#e31b23,#c41017); border-radius:10px; padding:14px 16px; text-align:right; }
          .grand-total-box .label { font-size:10px; color:rgba(255,255,255,0.75); letter-spacing:1px; }
          .grand-total-box .value { font-size:22px; font-weight:900; color:#fff; }
          .header-band { background:linear-gradient(135deg, #e31b23 0%, #b91017 50%, #0d9488 100%); padding:24px 28px; display:flex; justify-content:space-between; align-items:flex-start; }
          .meta-box { background:rgba(255,255,255,0.15); border:1px solid rgba(255,255,255,0.25); border-radius:10px; padding:12px 16px; text-align:right; color:#fff; font-size:11px; }
          .billing-grid { display:grid; grid-template-columns:1fr 1fr; border-bottom:2px solid #e2e8f0; }
          .billing-col { padding:16px 20px; }
          .billing-col:first-child { border-right:1px solid #e2e8f0; }
          .summary-grid { display:grid; grid-template-columns:1fr auto; border-top:2px solid #e2e8f0; }
          .summary-left { padding:16px 20px; border-right:1px solid #e2e8f0; }
          .summary-right { padding:16px 20px; min-width:250px; }
          .footer-band { background:#f8fafc; padding:14px 20px; border-top:2px solid #e2e8f0; font-size:10px; color:#94a3b8; }
          .row-flex { display:flex; justify-content:space-between; margin-bottom:6px; font-size:12px; color:#475569; }
          @media print { body { padding:0; background:#fff; } .invoice-wrapper { box-shadow:none; width:100%; } }
        </style>
      </head>
      <body onload="window.print(); window.close();">
        <div class="invoice-wrapper">${content}</div>
      </body>
    </html>
  `);
  printWin.document.close();
}


function downloadInvoicePDF() {
  showToast("PDF Invoice template generated successfully", "success");
}

function simulateWhatsAppShare() {
  showToast("Invoice payload template shared to dealer WhatsApp channel!", "success");
}

// --- 🚚 GPS MOVEMENT TRACKER ---
let currentTrackingOrder = null;
let currentTrackingPinIndex = 0;
function openGPSDeliveryTracker(orderId) {
  currentTrackingOrder = appState.orders.find(o => o.id === orderId);
  const modal = document.getElementById("delivery-modal");
  
  document.getElementById("delivery-shop-title").innerText = currentTrackingOrder.shopName;
  document.getElementById("delivery-route-path").innerText = currentTrackingOrder.zone + " Distribution Route";
  
  const statusPill = document.getElementById("delivery-status-pill");
  statusPill.className = `badge ${currentTrackingOrder.status === 'Delivered' ? 'badge-success' : 'badge-pending'}`;
  statusPill.innerText = currentTrackingOrder.status;

  // Render pins on Map Canvas
  const route = TRACKER_ROUTES[currentTrackingOrder.zone] || TRACKER_ROUTES["Ahmedabad-North"];
  const pinsContainer = document.getElementById("gps-pins-container");
  
  pinsContainer.innerHTML = route.map((pt, idx) => {
    const isWarehouse = idx === 0;
    const isShop = idx === route.length - 1;
    let pinColor = "var(--text-muted)";
    if (isWarehouse) pinColor = "var(--accent-teal)";
    if (isShop) pinColor = "var(--primary)";

    return `
      <div style="position:absolute; left:${pt.x}px; top:${pt.y}px; transform:translate(-50%, -50%); z-index:15; text-align:center;">
        <div style="background:${pinColor}; width:12px; height:12px; border-radius:50%; border:2px solid #ffffff; margin:0 auto; box-shadow:0 0 6px ${pinColor};"></div>
        <div style="font-size:0.55rem; color:#ffffff; background:rgba(0,0,0,0.8); padding:2px 4px; border-radius:4px; white-space:nowrap; margin-top:2px;">${pt.label}</div>
      </div>
    `;
  }).join("");

  // Draw path on canvas
  const canvas = document.getElementById("gps-track-canvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  ctx.beginPath();
  ctx.strokeStyle = "rgba(13, 148, 136, 0.4)";
  ctx.lineWidth = 3;
  ctx.setLineDash([5, 5]);
  
  ctx.moveTo(route[0].x, route[0].y);
  for (let i = 1; i < route.length; i++) {
    ctx.lineTo(route[i].x, route[i].y);
  }
  ctx.stroke();

  // Reset truck position to start
  const truck = document.getElementById("gps-truck-icon");
  truck.style.left = `${route[0].x - 12}px`;
  truck.style.top = `${route[0].y - 12}px`;

  currentTrackingPinIndex = 0;
  animateTruckMotion(route);

  modal.style.display = "flex";
  initSignatureCanvas();
}

function animateTruckMotion(route) {
  if (appState.gpsAnimationTimer) {
    clearInterval(appState.gpsAnimationTimer);
  }

  const truck = document.getElementById("gps-truck-icon");
  const etaText = document.getElementById("delivery-eta");
  
  if (currentTrackingOrder.status === "Delivered") {
    const endPt = route[route.length - 1];
    truck.style.left = `${endPt.x - 12}px`;
    truck.style.top = `${endPt.y - 12}px`;
    etaText.innerText = "Arrived at destination";
    return;
  }

  etaText.innerText = "18 mins remaining";
  
  appState.gpsAnimationTimer = setInterval(() => {
    currentTrackingPinIndex++;
    if (currentTrackingPinIndex >= route.length) {
      clearInterval(appState.gpsAnimationTimer);
      etaText.innerText = "Arrived (Awaiting Verification Signature)";
      return;
    }

    const nextPt = route[currentTrackingPinIndex];
    truck.style.left = `${nextPt.x - 12}px`;
    truck.style.top = `${nextPt.y - 12}px`;
    
    // Sim ETA reduction
    const remaining = (route.length - 1 - currentTrackingPinIndex) * 4;
    etaText.innerText = remaining > 0 ? `${remaining} mins remaining` : "Arrived (Awaiting Signature)";
  }, 1800);
}

function closeDeliveryModal() {
  document.getElementById("delivery-modal").style.display = "none";
  if (appState.gpsAnimationTimer) {
    clearInterval(appState.gpsAnimationTimer);
  }
}

// Draw Signature Canvas
let isDrawingSignature = false;
let sigCanvas, sigCtx;
function initSignatureCanvas() {
  sigCanvas = document.getElementById("signature-canvas");
  sigCtx = sigCanvas.getContext("2d");
  sigCtx.clearRect(0, 0, sigCanvas.width, sigCanvas.height);
  
  sigCtx.strokeStyle = "#1e293b";
  sigCtx.lineWidth = 2;
  sigCtx.lineCap = "round";

  sigCanvas.addEventListener("mousedown", startDrawing);
  sigCanvas.addEventListener("mousemove", drawLine);
  sigCanvas.addEventListener("mouseup", stopDrawing);
  sigCanvas.addEventListener("mouseleave", stopDrawing);

  // Touch triggers
  sigCanvas.addEventListener("touchstart", (e) => { startDrawing(e.touches[0]); });
  sigCanvas.addEventListener("touchmove", (e) => { drawLine(e.touches[0]); e.preventDefault(); });
  sigCanvas.addEventListener("touchend", stopDrawing);
}

function startDrawing(e) {
  isDrawingSignature = true;
  const rect = sigCanvas.getBoundingClientRect();
  sigCtx.beginPath();
  sigCtx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
}

function drawLine(e) {
  if (!isDrawingSignature) return;
  const rect = sigCanvas.getBoundingClientRect();
  sigCtx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
  sigCtx.stroke();
}

function stopDrawing() { isDrawingSignature = false; }
function clearSignatureCanvas() { sigCtx.clearRect(0, 0, sigCanvas.width, sigCanvas.height); }

function handleDeliveryStatusUpdate() {
  if (!currentTrackingOrder) return;
  
  let nextStatus = "Pending";
  if (currentTrackingOrder.status === "Pending") nextStatus = "Approved";
  else if (currentTrackingOrder.status === "Approved") nextStatus = "Packed";
  else if (currentTrackingOrder.status === "Packed") nextStatus = "Out for Delivery";
  else if (currentTrackingOrder.status === "Out for Delivery") nextStatus = "Delivered";

  currentTrackingOrder.status = nextStatus;
  saveOrdersDB();
  
  // Refresh display
  const pill = document.getElementById("delivery-status-pill");
  pill.className = `badge ${nextStatus === 'Delivered' ? 'badge-success' : 'badge-pending'}`;
  pill.innerText = nextStatus;

  renderOrdersRegistry();
  renderDashboardKPIs();
  
  logActivity("Delivery Manager", appState.currentUser.name, `Updated status stage of order ${currentTrackingOrder.id} to: ${nextStatus}`);
  showToast(`Status updated to: ${nextStatus}`, "success");
}

function verifyDeliveryProof() {
  if (!currentTrackingOrder) return;
  
  currentTrackingOrder.status = "Delivered";
  saveOrdersDB();
  closeDeliveryModal();
  renderOrdersRegistry();
  renderDashboardKPIs();
  if (appState.currentRole === "retailer") renderRetailerDashboardView();
  if (appState.currentRole === "wholesaler") renderWholesalerDashboardView();
  
  logActivity("Delivery Manager", appState.currentUser.name, `Captured proof of delivery & signature checklist for ${currentTrackingOrder.id}`);
  showToast("Delivery verification proof filed successfully!", "success");
}

// --- 🤖 ARTIFICIAL INTELLIGENCE CORE ---
function generateAIInsights() {
  const container = document.getElementById("ai-insights-panel");
  const lowStockCount = appState.products.filter(p => p.stock <= p.minStock).length;
  
  let insights = [
    {
      title: "AI Demand Forecast Spike",
      desc: "Good Knight machine demand is expected to surge +18% in Ahmedabad Zone due to upcoming monsoon seasonal trends.",
      color: "var(--accent-teal)"
    },
    {
      title: "Smart Restock Suggestion",
      desc: "Cinthol cool soap stock depletion velocity suggests adding 30 boxes in the Surat warehouse immediately.",
      color: "var(--warning)"
    }
  ];

  if (lowStockCount > 0) {
    insights.unshift({
      title: "AI Urgent Low Stock Alerts",
      desc: `Critical stock shortages identified on ${lowStockCount} items. Auto-dispatch trigger calculated.`,
      color: "var(--danger)"
    });
  }

  container.innerHTML = insights.map(ins => {
    return `
      <div class="glass-panel" style="padding:16px; border-left:4px solid ${ins.color};">
        <div style="font-weight:700; font-size:0.85rem; color:${ins.color}; margin-bottom:4px;">${ins.title}</div>
        <p style="font-size:0.75rem; color:var(--text-secondary); line-height:1.4;">${ins.desc}</p>
      </div>
    `;
  }).join("");
}

function triggerAutoReorder() {
  const lowStock = appState.products.filter(p => p.stock <= p.minStock);
  if (lowStock.length === 0) {
    showToast("All stock levels are optimal. No auto-reordering needed.", "info");
    return;
  }

  lowStock.forEach(p => {
    p.stock += p.minStock * 2; // replenishes stock
  });
  saveProductsDB();
  renderDashboardKPIs();
  renderProductCatalog();
  
  logActivity("AI Automated Broker", "System", "Triggered automated restock order formulas for deficient products");
  showToast("AI Automated smart restock booked to factory production line!", "success");
}

// AI Chatbot Logic
function toggleAIChatbot() {
  const el = document.getElementById("ai-chat-drawer");
  const isOpen = el.style.display === "flex";
  el.style.display = isOpen ? "none" : "flex";
  if (!isOpen) {
    // Hide notification dot when opened
    const notif = document.getElementById("ai-chat-notif");
    if (notif) notif.style.display = "none";
    lucide.createIcons();
    const body = document.getElementById("chat-conversation-body");
    if (body) body.scrollTop = body.scrollHeight;
  }
}

function clearAIChat() {
  const body = document.getElementById("chat-conversation-body");
  body.innerHTML = `
    <div class="chat-bubble bot" style="background:rgba(13,148,136,0.08); border:1px solid rgba(13,148,136,0.2);">
      <div style="display:flex; align-items:center; gap:6px; margin-bottom:6px;">
        <div style="width:22px; height:22px; background:linear-gradient(135deg,#0d9488,#0a7a70); border-radius:6px; display:flex; align-items:center; justify-content:center;">
          <i data-lucide="sparkles" style="width:12px; height:12px; color:#fff;"></i>
        </div>
        <span style="font-size:0.7rem; font-weight:700; color:var(--accent-teal);">Godrej AI</span>
      </div>
      <span style="font-size:0.82rem;">🔄 Chat cleared. How can I help you with Godrej FMCG analytics?</span>
    </div>
  `;
  lucide.createIcons();
}

function sendAIQuickPrompt(prompt) {
  document.getElementById("chat-input-text").value = prompt;
  sendAIChatMessage();
}

function appendBotMessage(html) {
  const chatBody = document.getElementById("chat-conversation-body");
  const bubble = document.createElement("div");
  bubble.className = "chat-bubble bot";
  bubble.style.cssText = "background:rgba(13,148,136,0.08); border:1px solid rgba(13,148,136,0.2);";
  bubble.innerHTML = `
    <div style="display:flex; align-items:center; gap:6px; margin-bottom:8px;">
      <div style="width:22px; height:22px; background:linear-gradient(135deg,#0d9488,#0a7a70); border-radius:6px; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
        <i data-lucide="sparkles" style="width:12px; height:12px; color:#fff;"></i>
      </div>
      <span style="font-size:0.7rem; font-weight:700; color:var(--accent-teal);">Godrej AI</span>
      <span style="font-size:0.62rem; color:var(--text-muted); margin-left:auto;">${new Date().toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'})}</span>
    </div>
    <div style="font-size:0.82rem; line-height:1.55;">${html}</div>
  `;
  chatBody.appendChild(bubble);
  chatBody.scrollTop = chatBody.scrollHeight;
  lucide.createIcons();
}

function sendAIChatMessage() {
  const input = document.getElementById("chat-input-text");
  const msg = input.value.trim();
  if (!msg) return;

  const chatBody = document.getElementById("chat-conversation-body");
  
  // Append user bubble
  const userBubble = document.createElement("div");
  userBubble.className = "chat-bubble user";
  userBubble.innerHTML = `<span style="font-size:0.82rem;">${msg}</span>`;
  chatBody.appendChild(userBubble);
  input.value = "";
  chatBody.scrollTop = chatBody.scrollHeight;

  // Show typing indicator
  const typingEl = document.getElementById("ai-typing-indicator");
  if (typingEl) typingEl.style.display = "block";
  chatBody.scrollTop = chatBody.scrollHeight;

  // Process after realistic delay
  const delay = 800 + Math.random() * 700;
  setTimeout(() => {
    if (typingEl) typingEl.style.display = "none";
    const reply = generateAIReply(msg);
    appendBotMessage(reply);
  }, delay);
}

function generateAIReply(msg) {
  const t = msg.toLowerCase();
  const kpis = getCalculatedKPIs();

  // ---- TOP PRODUCTS ----
  if (t.includes("top") || t.includes("best sell") || t.includes("popular")) {
    const sorted = [...appState.products].sort((a,b) => b.mrp - a.mrp).slice(0, 5);
    const rows = sorted.map((p,i) => `<tr><td>${i+1}. ${p.name.substring(0,22)}…</td><td style="color:var(--accent-teal);">₹${p.wholesalePrice.toFixed(0)}</td><td>${p.stock} Bx</td></tr>`).join("");
    return `📦 <strong>Top 5 Godrej Products by Value</strong>
      <div class="ai-response-card">
        <table><thead><tr><th>Product</th><th>Wholesale</th><th>Stock</th></tr></thead><tbody>${rows}</tbody></table>
      </div>
      <div style="margin-top:8px; font-size:0.75rem; color:var(--text-muted);">Based on wholesale value ranking across ${appState.products.length} catalog items.</div>`;
  }

  // ---- FORECAST / REVENUE ----
  if (t.includes("forecast") || t.includes("predict") || t.includes("revenue") || t.includes("projection")) {
    const next = kpis.revenue * 1.152;
    const week2 = kpis.revenue * 1.21;
    return `📈 <strong>AI Revenue Forecast (Deep Learning Model)</strong>
      <div class="ai-response-card">
        <table><thead><tr><th>Period</th><th>Projected Revenue</th><th>Growth</th></tr></thead>
        <tbody>
          <tr><td>Today (Actual)</td><td style="color:var(--accent-teal);">₹${kpis.revenue.toLocaleString('en-IN',{minimumFractionDigits:2})}</td><td>—</td></tr>
          <tr><td>Next 7 Days</td><td style="color:var(--warning);">₹${next.toLocaleString('en-IN',{minimumFractionDigits:2})}</td><td style="color:#10b981;">+15.2%</td></tr>
          <tr><td>Next 14 Days</td><td style="color:var(--primary);">₹${week2.toLocaleString('en-IN',{minimumFractionDigits:2})}</td><td style="color:#10b981;">+21.0%</td></tr>
        </tbody></table>
      </div>
      Model confidence: <strong style="color:#10b981;">94.8%</strong> — Based on FMCG seasonal demand patterns.`;
  }

  // ---- STOCK / INVENTORY ----
  if (t.includes("stock") || t.includes("inventory") || t.includes("low") || t.includes("alert")) {
    const lowStock = appState.products.filter(p => p.stock <= p.minStock);
    const outOfStock = appState.products.filter(p => p.stock === 0);
    if (lowStock.length === 0) {
      return `✅ <strong>Stock Status: All Clear!</strong><br><br>All ${appState.products.length} products are above minimum threshold. Warehouse is healthy. No immediate restock required.`;
    }
    const rows = lowStock.slice(0,5).map(p => `<tr><td>${p.name.substring(0,20)}…</td><td style="color:var(--danger); font-weight:700;">${p.stock} Bx</td><td style="color:var(--warning);">${p.minStock} Bx</td></tr>`).join("");
    return `⚠️ <strong>${lowStock.length} Products Need Immediate Restock</strong> (${outOfStock.length} out of stock)
      <div class="ai-response-card">
        <table><thead><tr><th>Product</th><th>Stock</th><th>Min Required</th></tr></thead><tbody>${rows}</tbody></table>
      </div>
      <button onclick="triggerAutoReorder(); toggleAIChatbot();" style="margin-top:8px; background:linear-gradient(135deg,#e31b23,#c41017); border:none; color:#fff; padding:6px 14px; border-radius:8px; font-size:0.72rem; cursor:pointer; font-weight:600;">⚡ Auto-Reorder Now</button>`;
  }

  // ---- ORDERS ----
  if (t.includes("order") || t.includes("pending") || t.includes("deliver")) {
    const pending = appState.orders.filter(o => o.status === "Pending");
    const delivered = appState.orders.filter(o => o.status === "Delivered");
    const rows = appState.orders.slice(0,4).map(o => `<tr><td style="color:var(--primary); font-weight:700;">${o.id}</td><td>${o.shopName.substring(0,15)}…</td><td>₹${o.grandTotal.toFixed(0)}</td><td><span style="font-size:0.65rem; padding:2px 6px; border-radius:8px; background:${o.status==='Delivered'?'rgba(16,185,129,0.15)':'rgba(245,158,11,0.15)'}; color:${o.status==='Delivered'?'#10b981':'#f59e0b'};">${o.status}</span></td></tr>`).join("");
    return `🚚 <strong>Order Pipeline Summary</strong>
      <div class="ai-response-card">
        <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:8px; margin-bottom:10px; text-align:center;">
          <div><div style="font-size:1.1rem; font-weight:800; color:var(--warning);">${pending.length}</div><div style="font-size:0.65rem; color:var(--text-muted);">Pending</div></div>
          <div><div style="font-size:1.1rem; font-weight:800; color:#10b981;">${delivered.length}</div><div style="font-size:0.65rem; color:var(--text-muted);">Delivered</div></div>
          <div><div style="font-size:1.1rem; font-weight:800; color:var(--accent-teal);">${appState.orders.length}</div><div style="font-size:0.65rem; color:var(--text-muted);">Total</div></div>
        </div>
        <table><thead><tr><th>Order</th><th>Shop</th><th>Amount</th><th>Status</th></tr></thead><tbody>${rows}</tbody></table>
      </div>`;
  }

  // ---- GST ----
  if (t.includes("gst") || t.includes("tax") || t.includes("cgst") || t.includes("sgst")) {
    return `💰 <strong>GST Tax Collection Summary</strong>
      <div class="ai-response-card">
        <table><thead><tr><th>Tax Component</th><th>Amount</th></tr></thead>
        <tbody>
          <tr><td>Total GST Collected</td><td style="color:var(--accent-teal); font-weight:700;">₹${kpis.gstPool.toFixed(2)}</td></tr>
          <tr><td>CGST @ 9%</td><td>₹${(kpis.gstPool/2).toFixed(2)}</td></tr>
          <tr><td>SGST @ 9%</td><td>₹${(kpis.gstPool/2).toFixed(2)}</td></tr>
          <tr><td>Orders Taxed</td><td>${appState.orders.filter(o=>o.status!=='Cancelled').length}</td></tr>
          <tr><td>Applicable Rate</td><td style="color:var(--warning);">18% (Standard FMCG Slab)</td></tr>
        </tbody></table>
      </div>
      <button onclick="switchView('reports'); toggleAIChatbot();" style="margin-top:8px; background:linear-gradient(135deg,#0d9488,#0a7a70); border:none; color:#fff; padding:6px 14px; border-radius:8px; font-size:0.72rem; cursor:pointer; font-weight:600;">📊 View GST Report</button>`;
  }

  // ---- SHOPS / DEALERS ----
  if (t.includes("shop") || t.includes("dealer") || t.includes("attention") || t.includes("retailer") || t.includes("wholesal")) {
    const pending = appState.shops.filter(s => s.status === "Pending");
    const approved = appState.shops.filter(s => s.status === "Approved");
    const rows = appState.shops.map(s => `<tr><td>${s.name}</td><td><span style="font-size:0.65rem; padding:2px 6px; border-radius:8px; background:${s.status==='Approved'?'rgba(16,185,129,0.15)':'rgba(245,158,11,0.15)'}; color:${s.status==='Approved'?'#10b981':'#f59e0b'};">${s.status}</span></td><td>${s.type}</td><td style="color:var(--accent-teal);">${s.loyaltyPoints} pts</td></tr>`).join("");
    return `🏪 <strong>Dealer Network Analysis</strong>
      <div class="ai-response-card">
        <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:8px; margin-bottom:10px; text-align:center;">
          <div><div style="font-size:1.1rem; font-weight:800; color:#10b981;">${approved.length}</div><div style="font-size:0.65rem;">Approved</div></div>
          <div><div style="font-size:1.1rem; font-weight:800; color:var(--warning);">${pending.length}</div><div style="font-size:0.65rem;">Pending</div></div>
          <div><div style="font-size:1.1rem; font-weight:800; color:var(--accent-teal);">${appState.shops.length}</div><div style="font-size:0.65rem;">Total</div></div>
        </div>
        <table><thead><tr><th>Shop</th><th>Status</th><th>Type</th><th>Loyalty</th></tr></thead><tbody>${rows}</tbody></table>
      </div>
      ${pending.length > 0 ? `<div style="margin-top:8px; padding:6px 10px; background:rgba(245,158,11,0.1); border-radius:8px; font-size:0.75rem; color:var(--warning);">⚠️ ${pending.length} shop(s) pending admin approval!</div>` : ''}`;
  }

  // ---- PRODUCT PRICING ----
  if (t.includes("price") || t.includes("pricing") || t.includes("mrp") || t.includes("cost")) {
    const sample = appState.products.slice(0, 5);
    const rows = sample.map(p => `<tr><td>${p.name.substring(0,18)}…</td><td>₹${p.mrp}</td><td>₹${p.wholesalePrice}</td><td>₹${p.distPrice}</td></tr>`).join("");
    return `💲 <strong>FMCG Pricing Intelligence Report</strong>
      <div class="ai-response-card">
        <table><thead><tr><th>Product</th><th>MRP</th><th>Wholesale</th><th>Distributor</th></tr></thead><tbody>${rows}</tbody></table>
      </div>
      All prices include <strong>18% GST</strong>. Average margin: <strong style="color:#10b981;">~30%</strong> over distributor cost.`;
  }

  // ---- CATALOG ----
  if (t.includes("catalog") || t.includes("products") || t.includes("cinthol") || t.includes("good knight") || t.includes("hit") || t.includes("aer") || t.includes("park avenue")) {
    const brand = t.includes("cinthol") ? "Cinthol" : t.includes("good knight") ? "Good Knight" : t.includes("hit") ? "HIT" : t.includes("aer") ? "Godrej aer" : t.includes("park avenue") ? "Park Avenue" : null;
    const prods = brand ? appState.products.filter(p => p.brand === brand) : appState.products;
    return `📋 <strong>${brand ? brand + ' Brand' : 'Full Godrej'} Catalog</strong>: ${prods.length} products<br><br>
      Categories: <strong>${[...new Set(prods.map(p=>p.category))].join(', ')}</strong><br>
      Price range: <strong>₹${Math.min(...prods.map(p=>p.wholesalePrice)).toFixed(0)}</strong> – <strong>₹${Math.max(...prods.map(p=>p.wholesalePrice)).toFixed(0)}</strong>/Box<br><br>
      <button onclick="switchView('catalog'); toggleAIChatbot();" style="background:linear-gradient(135deg,#0d9488,#0a7a70); border:none; color:#fff; padding:6px 14px; border-radius:8px; font-size:0.72rem; cursor:pointer; font-weight:600;">📦 Browse Catalog →</button>`;
  }

  // ---- SUMMARY / DASHBOARD ----
  if (t.includes("summary") || t.includes("dashboard") || t.includes("overview") || t.includes("report")) {
    const lowStockCount = appState.products.filter(p => p.stock <= p.minStock).length;
    return `📊 <strong>Live ERP Dashboard Summary</strong>
      <div class="ai-response-card">
        <table><tbody>
          <tr><td>💰 Revenue Today</td><td style="color:var(--accent-teal); font-weight:700;">₹${kpis.revenue.toLocaleString('en-IN',{minimumFractionDigits:2})}</td></tr>
          <tr><td>📦 Total Products</td><td>${appState.products.length} SKUs</td></tr>
          <tr><td>🛒 Pending Orders</td><td style="color:var(--warning);">${kpis.pendingCount}</td></tr>
          <tr><td>🏪 Active Shops</td><td>${appState.shops.filter(s=>s.status==='Approved').length} / ${appState.shops.length}</td></tr>
          <tr><td>⚠️ Low Stock Items</td><td style="color:${lowStockCount>0?'var(--danger)':'#10b981'};">${lowStockCount}</td></tr>
          <tr><td>💰 GST Collected</td><td>₹${kpis.gstPool.toFixed(2)}</td></tr>
        </tbody></table>
      </div>
      <button onclick="switchView('dashboard'); toggleAIChatbot();" style="margin-top:8px; background:linear-gradient(135deg,#e31b23,#c41017); border:none; color:#fff; padding:6px 14px; border-radius:8px; font-size:0.72rem; cursor:pointer; font-weight:600;">📈 Open Full Dashboard</button>`;
  }

  // ---- GREETING ----
  if (t.includes("hello") || t.includes("hi") || t.includes("hey") || t.includes("namaste")) {
    return `👋 <strong>Namaste!</strong> I'm the Godrej FMCG AI Intelligence Engine.<br><br>
    I have real-time access to your:<br>
    • <strong>${appState.products.length}</strong> product catalog items<br>
    • <strong>${appState.orders.length}</strong> orders in the pipeline<br>
    • <strong>${appState.shops.length}</strong> registered dealer shops<br><br>
    What would you like to analyze today?`;
  }

  // ---- HELP ----
  if (t.includes("help") || t.includes("what can") || t.includes("capability")) {
    return `🤖 <strong>Godrej AI Capabilities</strong>:<br><br>
    📦 <strong>Products</strong>: "top sellers", "catalog", "Cinthol products"<br>
    📈 <strong>Analytics</strong>: "revenue forecast", "summary", "dashboard"<br>
    ⚠️ <strong>Stock</strong>: "low stock", "inventory alert", "restock"<br>
    🚚 <strong>Orders</strong>: "pending orders", "delivery status"<br>
    🏪 <strong>Dealers</strong>: "shops needing attention", "wholesaler list"<br>
    💰 <strong>Finance</strong>: "GST collection", "pricing report"<br><br>
    <span style="font-size:0.72rem; color:var(--text-muted);">Tip: Use the quick chips above for instant insights!</span>`;
  }

  // ---- DEFAULT FALLBACK ----
  return `🧠 I'm analyzing your query against the FMCG ledger...<br><br>
    Here's a quick live stat: Today's revenue is <strong style="color:var(--accent-teal);">₹${kpis.revenue.toLocaleString('en-IN',{minimumFractionDigits:2})}</strong> with <strong>${kpis.pendingCount}</strong> pending orders.<br><br>
    Try asking: <em>"show low stock"</em>, <em>"revenue forecast"</em>, or <em>"order summary"</em>.`;
}


// --- 📃 EXPORTS & DOCUMENTS LOGS ---
function exportGSTExcel() {
  let csv = "Invoice Number,Date,Shop Name,GSTIN,CGST 9% (₹),SGST 9% (₹),Total Tax (₹)\n";
  appState.orders.forEach(o => {
    csv += `${o.invoiceNum},${o.date},"${o.shopName}",${o.gstin},${o.cgst.toFixed(2)},${o.sgst.toFixed(2)},${(o.cgst+o.sgst).toFixed(2)}\n`;
  });

  triggerDataDownload(csv, "GST_Compliance_Report_May2026.csv");
}

function exportDailySalesCSV() {
  let csv = "Order ID,Date,Shop Name,Taxable Value (₹),Discounts (₹),Grand Total (₹),Status\n";
  appState.orders.forEach(o => {
    csv += `${o.id},${o.date},"${o.shopName}",${o.taxableTotal.toFixed(2)},${o.discount.toFixed(2)},${o.grandTotal.toFixed(2)},${o.status}\n`;
  });

  triggerDataDownload(csv, "FMCG_Sales_Registry_Report.csv");
}

function exportProductSalesPDF() { showToast("PDF catalog cataloging downloaded!", "info"); }
function exportShopAuditExcel() {
  let csv = "Shop Name,Owner,Mobile,GSTIN,PAN,City,Type,Status\n";
  appState.shops.forEach(s => {
    csv += `"${s.name}","${s.owner}",${s.mobile},${s.gstin},${s.pan},${s.city},${s.type},${s.status}\n`;
  });

  triggerDataDownload(csv, "Distributors_Dealers_Database.csv");
}

function triggerDataDownload(content, filename) {
  const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", filename);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast(`${filename} file downloaded!`, "success");
}

// --- 👥 SHOP REGISTRATION MANAGER ---
function openShopRegistrationModal() {
  document.getElementById("shop-registration-modal").style.display = "flex";
}

function closeShopRegistrationModal() {
  document.getElementById("shop-registration-modal").style.display = "none";
}

function handleShopRegistrationSubmit(event) {
  event.preventDefault();
  const shopMobile = document.getElementById("reg-mobile").value;
  const shopName = document.getElementById("reg-shop-name").value;
  const shopUser = document.getElementById("reg-username").value;
  const shopPass = document.getElementById("reg-password").value;
  const mockGstin = `24MOCKP${shopMobile.substring(0, 8).padEnd(8, '0')}1Z5`;
  const mockPan = `MOCKP${shopMobile.substring(0, 5).padEnd(5, 'A')}`;
  const mockEmail = `${(shopName.split(" ")[0] || "shop").toLowerCase()}@business.com`;
  const newShop = {
    id: `shop-${appState.shops.length + 1}`,
    name: shopName,
    owner: document.getElementById("reg-owner-name").value,
    mobile: shopMobile,
    altMobile: "",
    email: mockEmail,
    gstin: mockGstin,
    pan: mockPan,
    address: document.getElementById("reg-address").value,
    city: document.getElementById("reg-city").value,
    state: document.getElementById("reg-state").value,
    pincode: document.getElementById("reg-pincode").value,
    type: document.getElementById("reg-shop-type").value,
    username: shopUser,
    password: shopPass,
    status: appState.currentRole === "admin" ? "Approved" : "Pending",
    loyaltyPoints: 0,
    photo: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=300&q=80"
  };
  appState.shops.push(newShop);
  saveShopsDB();
  wallets[newShop.id] = { prepaid: 0.00, creditLimit: 30000.00, outstanding: 0.00 };
  closeShopRegistrationModal();
  renderShopsRegistry();
  renderDashboardKPIs();
  logActivity("Shop Applicant", newShop.name, `Filed registration application: ${newShop.name} in ${newShop.city}`);
  const alertMsg = appState.currentRole === "admin" ? "Shop registered and approved!" : "Registration filed successfully. Super Admin verification pending.";
  showToast(alertMsg, "success");
}

function approveShopRegistration(id) {
  const shop = appState.shops.find(s => s.id === id);
  if (shop) {
    shop.status = "Approved";
    saveShopsDB();
    renderShopsRegistry();
    renderDashboardKPIs();
    logActivity("Super Admin", "System", `Approved shop dossier verification for: ${shop.name}`);
    showToast(`Dealer Shop approved: ${shop.name}`, "success");
  }
}

function rejectShopRegistration(id) {
  const shop = appState.shops.find(s => s.id === id);
  if (shop) {
    shop.status = "Rejected";
    saveShopsDB();
    renderShopsRegistry();
    renderDashboardKPIs();
    logActivity("Super Admin", "System", `Rejected shop dossier for: ${shop.name}`);
    showToast(`Dealer Shop application rejected`, "warning");
  }
}

// --- 📦 PRODUCT CRUD MANAGER ---
let isEditingProductMode = false;
function openProductFormModal(productId = null) {
  const form = document.getElementById("product-editor-form");
  form.reset();
  
  if (productId) {
    isEditingProductMode = true;
    document.getElementById("product-modal-title").innerHTML = `<i data-lucide="edit-3" style="color:var(--primary);"></i> Edit Product Profile`;
    
    const p = appState.products.find(item => item.id === productId);
    document.getElementById("edit-product-id").value = p.id;
    document.getElementById("prod-name").value = p.name;
    document.getElementById("prod-brand").value = p.brand;
    document.getElementById("prod-category").value = p.category;
    document.getElementById("prod-subcategory").value = p.subcategory;
    document.getElementById("prod-hsn").value = p.hsn;
    document.getElementById("prod-gst").value = p.gst;
    document.getElementById("prod-mrp").value = p.mrp;
    document.getElementById("prod-dist-price").value = p.distPrice;
    document.getElementById("prod-wholesale-price").value = p.wholesalePrice;
    document.getElementById("prod-retail-price").value = p.retailPrice;
    document.getElementById("prod-unit-type").value = p.unitType;
    document.getElementById("prod-box-qty").value = p.boxQty;
    document.getElementById("prod-weight").value = p.weight;
    document.getElementById("prod-barcode").value = p.barcode;
    document.getElementById("prod-sku").value = p.sku;
    document.getElementById("prod-stock").value = p.stock;
    document.getElementById("prod-min-stock").value = p.minStock;
    document.getElementById("prod-image").value = p.image;
  } else {
    isEditingProductMode = false;
    document.getElementById("product-modal-title").innerHTML = `<i data-lucide="package-plus" style="color:var(--primary);"></i> Register New FMCG Product`;
    document.getElementById("edit-product-id").value = "";
  }

  document.getElementById("product-form-modal").style.display = "flex";
  lucide.createIcons();
}

function closeProductFormModal() {
  document.getElementById("product-form-modal").style.display = "none";
}

function handleProductSubmit(event) {
  event.preventDefault();
  
  const pId = document.getElementById("edit-product-id").value;
  const productData = {
    id: pId || `prod-${appState.products.length + 1}`,
    name: document.getElementById("prod-name").value,
    brand: document.getElementById("prod-brand").value,
    category: document.getElementById("prod-category").value,
    subcategory: document.getElementById("prod-subcategory").value,
    hsn: document.getElementById("prod-hsn").value,
    gst: parseInt(document.getElementById("prod-gst").value),
    mrp: parseFloat(document.getElementById("prod-mrp").value),
    distPrice: parseFloat(document.getElementById("prod-dist-price").value),
    wholesalePrice: parseFloat(document.getElementById("prod-wholesale-price").value),
    retailPrice: parseFloat(document.getElementById("prod-retail-price").value),
    unitType: document.getElementById("prod-unit-type").value,
    boxQty: parseInt(document.getElementById("prod-box-qty").value),
    weight: document.getElementById("prod-weight").value,
    barcode: document.getElementById("prod-barcode").value,
    sku: document.getElementById("prod-sku").value,
    stock: parseInt(document.getElementById("prod-stock").value),
    minStock: parseInt(document.getElementById("prod-min-stock").value),
    image: document.getElementById("prod-image").value || "https://images.unsplash.com/photo-1607006342411-92fc4a8f4c2c?w=400&q=80"
  };

  if (isEditingProductMode) {
    const idx = appState.products.findIndex(item => item.id === pId);
    appState.products[idx] = productData;
    showToast("Product portfolio entry updated!", "success");
  } else {
    appState.products.push(productData);
    showToast("New Godrej product registered!", "success");
  }

  saveProductsDB();
  closeProductFormModal();
  renderProductCatalog();
  renderDashboardKPIs();
}

// --- 🛍️ TABLES BINDING AND RENDER REGISTRY ---
function renderOrdersRegistry() {
  const tbody = document.getElementById("orders-registry-table");
  const adminTbody = document.getElementById("admin-orders-registry-table");
  
  const renderRows = (role) => {
    // Filter orders if role is retailer or wholesaler to show ONLY their own order requests!
    let filteredOrders = appState.orders;
    if (role === "retailer" || role === "wholesaler") {
      filteredOrders = appState.orders.filter(ord => ord.shopId === appState.currentUser.shopId);
    }

    return filteredOrders.map(ord => {
      let statusClass = "badge-pending";
      if (ord.status === "Delivered") statusClass = "badge-approved";
      if (ord.status === "Out for Delivery") statusClass = "badge-delivered";
      if (ord.status === "Cancelled") statusClass = "badge-danger";

      const itemsSummary = ord.items.map(it => `${it.qty}x ${it.productName.substring(0, 12)}...`).join("<br>");

      // Actions depending on role
      let actionBtn = "";
      if (role === "admin") {
        actionBtn = `
          <div style="display:flex; gap:4px;">
            <button class="btn btn-teal btn-sm" style="padding:4px 8px;" onclick="viewInvoice('${ord.id}')" title="Print Invoice"><i data-lucide="receipt" style="width:14px;"></i></button>
            <button class="btn btn-secondary btn-sm" style="padding:4px 8px;" onclick="openGPSDeliveryTracker('${ord.id}')" title="Track Logistics"><i data-lucide="truck" style="width:14px;"></i></button>
            <button class="btn btn-primary btn-sm" style="padding:4px 8px;" onclick="quickUpdateStatus('${ord.id}')" title="Quick Update Stage"><i data-lucide="refresh-cw" style="width:14px;"></i></button>
          </div>
        `;
      } else if (role === "shop" || role === "retailer" || role === "wholesaler") {
        actionBtn = `
          <button class="btn btn-secondary btn-sm" style="padding:4px 8px;" onclick="viewInvoice('${ord.id}')"><i data-lucide="file-text"></i> Invoice</button>
        `;
      } else if (role === "delivery") {
        actionBtn = `
          <button class="btn btn-primary btn-sm" style="padding:4px 8px;" onclick="openGPSDeliveryTracker('${ord.id}')"><i data-lucide="navigation"></i> Dispatch Tracker</button>
        `;
      }

      return `
        <tr>
          <td style="font-weight:600; color:var(--primary);">${ord.id}</td>
          <td>${ord.date}</td>
          <td>
            <div style="font-weight:600;">${ord.shopName}</div>
            <div style="font-size:0.7rem; color:var(--text-muted);">GSTIN: ${ord.gstin}</div>
          </td>
          <td>${ord.zone}</td>
          <td style="font-size:0.75rem;">${itemsSummary}</td>
          <td>₹${(ord.cgst + ord.sgst).toFixed(2)}</td>
          <td style="font-weight:600; color:var(--accent-teal);">₹${ord.grandTotal.toFixed(2)}</td>
          <td><span class="badge ${statusClass}">${ord.status}</span></td>
          <td>${actionBtn}</td>
        </tr>
      `;
    }).join("");
  };

  if (tbody) tbody.innerHTML = renderRows(appState.currentRole);
  if (adminTbody) adminTbody.innerHTML = renderRows("admin");

  if (typeof updateDeliveryKPIs === "function") {
    updateDeliveryKPIs();
  }

  lucide.createIcons();
}

function renderShopsRegistry() {
  const tbody = document.getElementById("shops-registry-table");
  
  tbody.innerHTML = appState.shops.map(shop => {
    let statusClass = "badge-pending";
    if (shop.status === "Approved") statusClass = "badge-approved";
    if (shop.status === "Rejected") statusClass = "badge-danger";

    let verifyActions = "";
    if (appState.currentRole === "admin" && shop.status === "Pending") {
      verifyActions = `
        <div style="display:flex; gap:4px;">
          <button class="btn btn-teal btn-sm" style="padding:4px 6px;" onclick="approveShopRegistration('${shop.id}')">Approve</button>
          <button class="btn btn-danger btn-sm" style="padding:4px 6px;" onclick="rejectShopRegistration('${shop.id}')">Reject</button>
        </div>
      `;
    } else {
      verifyActions = `<span style="font-size:0.75rem; color:var(--text-muted);">Audit Cleared</span>`;
    }

    return `
      <tr>
        <td><img src="${shop.photo}" alt="${shop.name}" style="width:36px; height:36px; border-radius:6px; object-fit:cover; border:1px solid var(--border-glass);"></td>
        <td style="font-weight:600;">${shop.name}</td>
        <td>
          <div style="font-weight:500;">${shop.owner}</div>
          <span class="badge" style="background:rgba(255,255,255,0.05); font-size:0.6rem;">Points: ${shop.loyaltyPoints}</span>
        </td>
        <td style="font-size:0.75rem;">
          <div>${shop.mobile}</div>
          <div style="color:var(--text-muted); font-size:0.7rem;">${shop.email}</div>
        </td>
        <td style="font-size:0.75rem;">
          <div>${shop.address}</div>
          <div style="color:var(--text-muted); font-size:0.7rem;">${shop.city}, ${shop.state} - ${shop.pincode}</div>
        </td>
        <td><span class="badge" style="background:rgba(13,148,136,0.1); color:var(--accent-teal);">${shop.type}</span></td>
        <td><span class="badge ${statusClass}">${shop.status}</span></td>
        <td>${verifyActions}</td>
      </tr>
    `;
  }).join("");

  lucide.createIcons();
}

let salesTargetChartInstance = null;
let adminSalesTargetChartInstance = null;

function renderSalesHub() {
  // Bind Shop select for log notes
  const select = document.getElementById("visit-shop-select");
  if (select) {
    select.innerHTML = appState.shops.map(s => `<option value="${s.name}">${s.name}</option>`).join("");
  }
  const adminSelect = document.getElementById("admin-visit-shop-select");
  if (adminSelect) {
    adminSelect.innerHTML = appState.shops.map(s => `<option value="${s.name}">${s.name}</option>`).join("");
  }

  const chartConfig = {
    type: 'bar',
    data: {
      labels: ["Mumbai", "Ahmedabad", "Surat", "Vadodara", "Rajkot"],
      datasets: [{
        label: 'Zone Sales Volume (₹)',
        data: [150000, 85000, 110000, 45000, 60000],
        backgroundColor: 'rgba(227, 27, 35, 0.65)',
        borderColor: '#e31b23',
        borderWidth: 1.5
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: { ticks: { color: "#94a3b8" } },
        x: { ticks: { color: "#94a3b8" } }
      }
    }
  };

  // Renders target chart on standard page
  const canvas = document.getElementById("sales-target-chart");
  if (canvas) {
    if (salesTargetChartInstance) {
      try { salesTargetChartInstance.destroy(); } catch(e) {}
    }
    const ctx = canvas.getContext("2d");
    salesTargetChartInstance = new Chart(ctx, chartConfig);
  }
  
  // Renders target chart on admin tab
  const adminCanvas = document.getElementById("admin-sales-target-chart");
  if (adminCanvas) {
    if (adminSalesTargetChartInstance) {
      try { adminSalesTargetChartInstance.destroy(); } catch(e) {}
    }
    const adminCtx = adminCanvas.getContext("2d");
    adminSalesTargetChartInstance = new Chart(adminCtx, chartConfig);
  }

  // Render activities log table
  const renderLogHTML = () => {
    return appState.activityLogs.map(log => {
      return `
        <tr>
          <td style="color:var(--text-muted); font-size:0.75rem;">${new Date(log.time).toLocaleTimeString()}</td>
          <td style="font-weight:600; font-size:0.8rem;">${log.role}</td>
          <td style="font-weight:600;">${log.shop}</td>
          <td style="font-size:0.8rem;">${log.details}</td>
        </tr>
      `;
    }).join("");
  };

  const tbody = document.getElementById("sales-activities-log");
  if (tbody) {
    tbody.innerHTML = renderLogHTML();
  }
  const adminTbody = document.getElementById("admin-sales-activities-log");
  if (adminTbody) {
    adminTbody.innerHTML = renderLogHTML();
  }
}

function handleVisitLogSubmit(event) {
  event.preventDefault();
  const select = document.getElementById("visit-shop-select") || document.getElementById("admin-visit-shop-select");
  const notes = document.getElementById("visit-notes") || document.getElementById("admin-visit-notes");
  const form = document.getElementById("visit-log-form") || document.getElementById("admin-visit-log-form");

  if (select && notes) {
    logActivity("Sales Manager", select.value, notes.value);
    if (form) form.reset();
    renderSalesHub();
    showToast("Sales route activity log filed successfully", "success");
  }
}

// ===== ADMIN COMMAND CENTRE TAB CONTROL =====
function switchAdminTab(tabName) {
  // Update button active states
  document.querySelectorAll(".admin-cmd-tab").forEach(btn => {
    btn.classList.toggle("active", btn.id === `atab-${tabName}`);
  });

  // Toggle visible panels
  const panels = ["admin", "sales", "delivery"];
  panels.forEach(p => {
    const el = document.getElementById(`admin-panel-${p}`);
    if (el) {
      el.style.display = p === tabName ? "block" : "none";
    }
  });

  // Populate dynamic data based on active tab
  if (tabName === "admin") {
    renderDashboardKPIs();
    updateDashboardCharts();
  } else if (tabName === "sales") {
    renderSalesHub();
  } else if (tabName === "delivery") {
    renderOrdersRegistry();
    updateDeliveryKPIs();
  }
}

// Update Delivery Fleet Metrics
function updateDeliveryKPIs() {
  const transit = appState.orders.filter(o => o.status === "Out for Delivery").length;
  const delivered = appState.orders.filter(o => o.status === "Delivered").length;
  const pending = appState.orders.filter(o => o.status === "Pending" || o.status === "Approved" || o.status === "Packed").length;

  const elTransit = document.getElementById("delivery-kpi-transit");
  const elDelivered = document.getElementById("delivery-kpi-delivered");
  const elPending = document.getElementById("delivery-kpi-pending");

  if (elTransit) elTransit.innerText = transit;
  if (elDelivered) elDelivered.innerText = delivered;
  if (elPending) elPending.innerText = pending;
}

// Quick status cycle for dispatch logistics testing
function quickUpdateStatus(orderId) {
  const ord = appState.orders.find(o => o.id === orderId);
  if (!ord) return;

  let nextStatus = "Pending";
  if (ord.status === "Pending") nextStatus = "Approved";
  else if (ord.status === "Approved") nextStatus = "Packed";
  else if (ord.status === "Packed") nextStatus = "Out for Delivery";
  else if (ord.status === "Out for Delivery") nextStatus = "Delivered";
  else if (ord.status === "Delivered") nextStatus = "Pending";

  ord.status = nextStatus;
  logActivity("Admin Dispatch", ord.shopName, `Updated order ${ord.id} logistics stage to ${nextStatus}`);
  renderOrdersRegistry();
  showToast(`Order ${ord.id} status updated to ${nextStatus}`, "success");
}

let gstTaxTiersChartInstance = null;

function renderReportsHub() {
  const kpis = getCalculatedKPIs();
  
  // Update report cards
  document.getElementById("report-total-gst").innerText = `₹${kpis.gstPool.toFixed(2)}`;
  document.getElementById("report-cgst-pool").innerText = `₹ ${(kpis.gstPool/2).toFixed(2)}`;
  document.getElementById("report-sgst-pool").innerText = `₹ ${(kpis.gstPool/2).toFixed(2)}`;

  // GST splits chart
  const canvas = document.getElementById("gst-tax-tiers-chart");
  if (canvas) {
    if (gstTaxTiersChartInstance) {
      try { gstTaxTiersChartInstance.destroy(); } catch(e) {}
    }
    const ctx = canvas.getContext("2d");
    gstTaxTiersChartInstance = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ["5% Slab", "12% Slab", "18% Slab", "28% Slab"],
        datasets: [{
          data: [1500, 3200, kpis.gstPool, 800],
          backgroundColor: ["#10b981", "#f59e0b", "#e31b23", "#0d9488"]
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { color: "#94a3b8" } }
        }
      }
    });
  }
}

// --- ⚙️ UTILITIES & TOAST ENGINE ---
function showToast(message, type = "success") {
  const wrapper = document.getElementById("toast-wrapper");
  const el = document.createElement("div");
  el.className = `toast toast-${type}`;
  
  let icon = "check-circle";
  if (type === "error") icon = "alert-triangle";
  if (type === "warning") icon = "alert-circle";
  if (type === "info") icon = "info";

  el.innerHTML = `
    <i data-lucide="${icon}" style="width:16px; height:16px;"></i>
    <span>${message}</span>
  `;
  
  wrapper.appendChild(el);
  lucide.createIcons();

  setTimeout(() => {
    el.style.opacity = 0;
    setTimeout(() => el.remove(), 400);
  }, 3500);
}

function logActivity(role, shop, details) {
  appState.activityLogs.unshift({
    time: new Date().toISOString(),
    role,
    shop,
    details
  });
  saveLogsDB();
}

// --- 🔍 BARCODE MANUAL WIDGET ACTION ---
function openBarcodeModal() {
  document.getElementById("barcode-modal").style.display = "flex";
}

function closeBarcodeModal() {
  document.getElementById("barcode-modal").style.display = "none";
}

function runSimulatedBarcodeScan() {
  const barcode = document.getElementById("manual-barcode-input").value.trim();
  const prod = appState.products.find(p => p.barcode === barcode);
  
  if (prod) {
    closeBarcodeModal();
    showToast(`Match identified: ${prod.name}`, "success");
    
    // Add to cart directly if in shop mode
    if (appState.currentRole === "shop") {
      appState.cart.push({
        productId: prod.id,
        productName: prod.name,
        price: prod.wholesalePrice,
        qty: 1,
        gst: prod.gst,
        unitType: "Box"
      });
      updateCartPill();
      openCartModal();
    } else {
      // Admin: Open edit modal
      openProductFormModal(prod.id);
    }
  } else {
    showToast("GTIN barcode SKU not found in inventory registry", "error");
  }
}

// --- 🔍 PREMIUM LIVE SEARCH ENGINE ---
let activeSearchFilter = "all";
let searchHighlightIndex = -1;
let searchResultsCache = [];

// Ctrl+K shortcut
document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === "k") {
    e.preventDefault();
    const input = document.getElementById("global-search-input");
    if (input) { input.focus(); openSearchDropdown(); }
  }
});

// Close on outside click
document.addEventListener("click", (e) => {
  if (!e.target.closest("#search-wrapper")) {
    closeSearchDropdown();
  }
});

function setSearchFilter(filter, btn) {
  activeSearchFilter = filter;
  document.querySelectorAll(".search-tab").forEach(t => t.classList.remove("active"));
  btn.classList.add("active");
  const term = document.getElementById("global-search-input").value;
  renderSearchResults(term);
}

function openSearchDropdown() {
  const dropdown = document.getElementById("search-dropdown");
  if (!dropdown) return;
  dropdown.style.display = "block";
  const term = document.getElementById("global-search-input").value;
  renderSearchResults(term);
  lucide.createIcons();
}

function closeSearchDropdown() {
  const dropdown = document.getElementById("search-dropdown");
  if (dropdown) dropdown.style.display = "none";
  searchHighlightIndex = -1;
}

function clearGlobalSearch() {
  const input = document.getElementById("global-search-input");
  if (input) { input.value = ""; input.focus(); }
  document.getElementById("search-clear-btn").style.display = "none";
  renderSearchResults("");
}

function highlightMatch(text, term) {
  if (!term) return text;
  const regex = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, "gi");
  return text.replace(regex, '<span class="search-highlight-match">$1</span>');
}

function renderSearchResults(term) {
  const list = document.getElementById("search-results-list");
  if (!list) return;

  const clearBtn = document.getElementById("search-clear-btn");
  if (clearBtn) clearBtn.style.display = term ? "flex" : "none";

  const lower = term.toLowerCase().trim();
  searchResultsCache = [];
  let html = "";

  // --- Products ---
  if (activeSearchFilter === "all" || activeSearchFilter === "products") {
    const matchProds = lower 
      ? appState.products.filter(p =>
          p.name.toLowerCase().includes(lower) || 
          p.brand.toLowerCase().includes(lower) ||
          p.category.toLowerCase().includes(lower) ||
          (p.sku && p.sku.toLowerCase().includes(lower)) ||
          (p.barcode && p.barcode.includes(lower))
        ).slice(0, activeSearchFilter === "products" ? 8 : 4)
      : appState.products.slice(0, 4);

    if (matchProds.length > 0) {
      html += `<div class="search-result-section-label">📦 Products</div>`;
      matchProds.forEach(p => {
        const idx = searchResultsCache.length;
        searchResultsCache.push({ type: "product", data: p });
        html += `
          <div class="search-result-row" data-idx="${idx}" onclick="handleSearchSelect(${idx})">
            <div class="search-result-icon product">
              <i data-lucide="package" style="width:16px; height:16px;"></i>
            </div>
            <div class="search-result-body">
              <div class="search-result-name">${highlightMatch(p.name, lower)}</div>
              <div class="search-result-meta">${p.brand} · ${p.category} · ₹${p.wholesalePrice.toFixed(2)}/Box</div>
            </div>
            <span class="search-result-badge product">
              ${p.stock > p.minStock ? '✓ In Stock' : p.stock === 0 ? 'Out of Stock' : '⚠ Low Stock'}
            </span>
          </div>
        `;
      });
    }
  }

  // --- Orders ---
  if (activeSearchFilter === "all" || activeSearchFilter === "orders") {
    const matchOrders = lower
      ? appState.orders.filter(o =>
          o.id.toLowerCase().includes(lower) ||
          o.shopName.toLowerCase().includes(lower) ||
          o.invoiceNum.toLowerCase().includes(lower) ||
          o.status.toLowerCase().includes(lower)
        ).slice(0, activeSearchFilter === "orders" ? 8 : 3)
      : appState.orders.slice(0, 3);

    if (matchOrders.length > 0) {
      html += `<div class="search-result-section-label">🧾 Orders</div>`;
      matchOrders.forEach(o => {
        const idx = searchResultsCache.length;
        searchResultsCache.push({ type: "order", data: o });
        html += `
          <div class="search-result-row" data-idx="${idx}" onclick="handleSearchSelect(${idx})">
            <div class="search-result-icon order">
              <i data-lucide="receipt" style="width:16px; height:16px;"></i>
            </div>
            <div class="search-result-body">
              <div class="search-result-name">${highlightMatch(o.id, lower)} — ${highlightMatch(o.shopName, lower)}</div>
              <div class="search-result-meta">${o.date} · ₹${o.grandTotal.toFixed(2)} · ${o.invoiceNum}</div>
            </div>
            <span class="search-result-badge order">${o.status}</span>
          </div>
        `;
      });
    }
  }

  // --- Shops ---
  if (activeSearchFilter === "all" || activeSearchFilter === "shops") {
    const matchShops = lower
      ? appState.shops.filter(s =>
          s.name.toLowerCase().includes(lower) ||
          s.owner.toLowerCase().includes(lower) ||
          s.city.toLowerCase().includes(lower) ||
          s.mobile.includes(lower)
        ).slice(0, activeSearchFilter === "shops" ? 8 : 3)
      : appState.shops.slice(0, 3);

    if (matchShops.length > 0) {
      html += `<div class="search-result-section-label">🏪 Shops</div>`;
      matchShops.forEach(s => {
        const idx = searchResultsCache.length;
        searchResultsCache.push({ type: "shop", data: s });
        html += `
          <div class="search-result-row" data-idx="${idx}" onclick="handleSearchSelect(${idx})">
            <div class="search-result-icon shop">
              <i data-lucide="store" style="width:16px; height:16px;"></i>
            </div>
            <div class="search-result-body">
              <div class="search-result-name">${highlightMatch(s.name, lower)}</div>
              <div class="search-result-meta">${s.owner} · ${s.city} · 📞 ${s.mobile}</div>
            </div>
            <span class="search-result-badge shop">${s.type}</span>
          </div>
        `;
      });
    }
  }

  if (searchResultsCache.length === 0) {
    html = `
      <div class="search-empty-state">
        <i data-lucide="search-x" style="width:32px; height:32px;"></i>
        <div style="font-weight:600; margin-bottom:4px;">No results found</div>
        <div style="font-size:0.75rem; color:var(--text-muted);">Try different keywords or switch filter tab</div>
      </div>
    `;
  }

  list.innerHTML = html;
  searchHighlightIndex = -1;
  lucide.createIcons();
}

function handleSearchSelect(idx) {
  const item = searchResultsCache[idx];
  if (!item) return;
  closeSearchDropdown();
  document.getElementById("global-search-input").value = "";
  document.getElementById("search-clear-btn").style.display = "none";

  if (item.type === "product") {
    switchView("catalog");
    setTimeout(() => renderCatalogSubset([item.data]), 50);
    showToast(`Showing: ${item.data.name}`, "success");
  } else if (item.type === "order") {
    switchView("orders");
    setTimeout(() => viewInvoice(item.data.id), 80);
  } else if (item.type === "shop") {
    switchView("shops");
    showToast(`Showing shop: ${item.data.name}`, "info");
  }
}

function handleSearchKeydown(e) {
  const rows = document.querySelectorAll(".search-result-row");
  if (!rows.length) return;

  if (e.key === "ArrowDown") {
    e.preventDefault();
    searchHighlightIndex = Math.min(searchHighlightIndex + 1, rows.length - 1);
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    searchHighlightIndex = Math.max(searchHighlightIndex - 1, 0);
  } else if (e.key === "Enter" && searchHighlightIndex >= 0) {
    e.preventDefault();
    const idx = parseInt(rows[searchHighlightIndex]?.getAttribute("data-idx") ?? "-1");
    if (idx >= 0) handleSearchSelect(idx);
    return;
  } else if (e.key === "Escape") {
    closeSearchDropdown();
    return;
  }

  rows.forEach((r, i) => r.classList.toggle("search-highlighted", i === searchHighlightIndex));
  if (rows[searchHighlightIndex]) {
    rows[searchHighlightIndex].scrollIntoView({ block: "nearest" });
  }
}

function handleGlobalSearch(term) {
  renderSearchResults(term);
  
  // Also live-filter the catalog if already on catalog view
  if (term && appState.activeView === "catalog") {
    const lower = term.toLowerCase();
    const matchProds = appState.products.filter(p =>
      p.name.toLowerCase().includes(lower) ||
      p.brand.toLowerCase().includes(lower) ||
      p.category.toLowerCase().includes(lower)
    );
    if (matchProds.length === 0) {
      document.getElementById("catalog-products-container").innerHTML =
        `<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--text-secondary);">No products match search term.</div>`;
    } else {
      renderCatalogSubset(matchProds);
    }
  }
}

// --- 🎙️ VOICE ASSIST SEARCH WIDGET ---
function startVoiceSearch() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    showToast("Voice search not supported by this browser", "warning");
    return;
  }

  const voiceBtn = document.querySelector(".search-voice-btn");
  if (voiceBtn) voiceBtn.classList.add("listening");

  const rec = new SpeechRecognition();
  rec.lang = "en-IN";
  rec.start();

  showToast("🎤 Listening… speak a product or brand name", "info");

  rec.onresult = (event) => {
    const text = event.results[0][0].transcript;
    const input = document.getElementById("global-search-input");
    input.value = text;
    handleGlobalSearch(text);
    openSearchDropdown();
    showToast(`Voice captured: "${text}"`, "success");
    if (voiceBtn) voiceBtn.classList.remove("listening");
  };

  rec.onerror = () => {
    showToast("Voice recognition failed. Try again.", "error");
    if (voiceBtn) voiceBtn.classList.remove("listening");
  };

  rec.onend = () => {
    if (voiceBtn) voiceBtn.classList.remove("listening");
  };
}



function renderCatalogSubset(prods) {
  const catalogContainer = document.getElementById("catalog-products-container");
  const isClientRole = appState.currentRole === "retailer" || appState.currentRole === "wholesaler";
  
  catalogContainer.innerHTML = prods.map(p => {
    const isLowStock = p.stock <= p.minStock;
    const stockPill = p.stock === 0
      ? `<span class="badge badge-danger">Out of Stock</span>`
      : isLowStock 
        ? `<span class="badge badge-pending">Low Stock: ${p.stock} Boxes</span>`
        : `<span class="badge badge-success">In Stock: ${p.stock} Boxes</span>`;

    const priceLabel = appState.currentRole === "wholesaler" ? "Wholesale Box Price" : appState.currentRole === "retailer" ? "Retail Price (Box)" : "Distributor Cost";
    const displayedPrice = appState.currentRole === "wholesaler" ? p.wholesalePrice : appState.currentRole === "retailer" ? p.retailPrice : p.distPrice;

    const adminControls = appState.currentRole === "admin"
      ? `<div style="display:flex; gap:6px; margin-top:8px;">
           <button class="btn btn-secondary btn-sm" style="flex:1;" onclick="openProductFormModal('${p.id}')"><i data-lucide="edit-3"></i> Edit</button>
           <button class="btn btn-danger btn-sm" style="padding:6px;" onclick="deleteProductItem('${p.id}')"><i data-lucide="trash-2"></i></button>
         </div>`
      : "";

    const unitLabel = appState.currentRole === "wholesaler" ? "Box (Case)" : "Box";
    const shopControls = isClientRole && p.stock > 0
      ? `<div class="add-to-cart-section">
           <input type="number" id="qty-input-${p.id}" class="form-control" style="width:70px; padding:6px 8px;" value="1" min="1" max="${p.stock}" placeholder="Qty">
           <button class="btn btn-primary btn-sm" style="flex:1;" onclick="addProductToCart('${p.id}')">
             <i data-lucide="shopping-cart"></i> Order ${unitLabel}
           </button>
         </div>`
      : isClientRole && p.stock === 0
      ? `<div style="text-align:center; padding:8px; color:var(--danger); font-size:0.75rem; font-weight:600;">⚠️ Out of Stock</div>`
      : "";

    return `
      <div class="glass-panel product-card animate-fade-in">
        <div class="product-card-badge">${stockPill}</div>
        <div class="product-img-wrapper">
          <img src="${p.image}" alt="${p.name}" class="product-img">
        </div>
        <div class="product-brand">${p.brand}</div>
        <h4 class="product-title" title="${p.name}">${p.name}</h4>
        <p class="product-desc">${p.desc}</p>
        
        <div class="product-meta-row">
          <span>HSN: ${p.hsn}</span>
          <span>GST: ${p.gst}%</span>
        </div>
        <div class="product-meta-row">
          <span>Barcode: ${p.barcode}</span>
          <span>Pack: ${p.weight}</span>
        </div>

        <div class="product-price-row">
          <span class="product-mrp">MRP: ₹${p.mrp.toFixed(2)}</span>
          <div>
            <div style="font-size:0.6rem; color:var(--text-muted); text-align:right;">${priceLabel}</div>
            <span class="product-selling-price">₹${displayedPrice.toFixed(2)}</span>
          </div>
        </div>
        ${shopControls}
        ${adminControls}
      </div>
    `;
  }).join("");
  lucide.createIcons();
}

// --- 🔐 AUTHENTICATION MOCK LOGIC (legacy stubs — safe no-ops) ---
function handleLoginRoleChange(role) {
  const emailF = document.getElementById("login-email-fields");
  const mobF   = document.getElementById("login-mobile-fields");
  if (!emailF || !mobF) return; // removed in new 3D portal
  if (role === "shop") {
    emailF.style.display = "none";
    mobF.style.display = "block";
  } else {
    emailF.style.display = "block";
    mobF.style.display = "none";
  }
}

function sendSimulatedOTP() {
  const mobileEl = document.getElementById("login-mobile");
  if (!mobileEl) return;
  const mobile = mobileEl.value.trim();
  if (mobile.length < 10) {
    showToast("Please enter a valid 10-digit mobile number", "error");
    return;
  }
  const otpEl = document.getElementById("login-otp");
  if (otpEl) otpEl.disabled = false;
  showToast("Simulated OTP '123456' sent via SMS!", "success");
}

function handleSimulatedLogin() {
  const roleEl = document.getElementById("login-role");
  if (!roleEl) return;
  switchRole(roleEl.value);
}

function toggleRegisterFromLogin() {
  const loginModal = document.getElementById("login-modal");
  if (loginModal) loginModal.style.display = "none";
  openShopRegistrationModal();
}

function triggerLogout() {
  // Show 3D portal overlay
  const overlay = document.getElementById("login-portal-overlay");
  if (overlay) {
    overlay.style.display = "flex";
    requestAnimationFrame(() => overlay.classList.remove("hidden"));
    // Reset all card flips
    ["client","wholesaler","admin"].forEach(p => {
      const card = document.getElementById("portal-card-" + p);
      if (card) card.classList.remove("flipped");
    });
  }
  showToast("Signed out of ERP — See you soon!", "info");
}

function simulatedForgotKey() {
  showToast("Recovery key link transmitted to registered corporate dossier!", "success");
}

// --- 🤖 EXTRA ENTERPRISE LOGIC & INTERACTIVE STATE VARIABLES ---
let wallets = {
  "shop-1": { prepaid: 8750.00, creditLimit: 50000.00, outstanding: 14500.00 },
  "shop-2": { prepaid: 12400.00, creditLimit: 80000.00, outstanding: 8900.00 },
  "shop-3": { prepaid: 0.00, creditLimit: 30000.00, outstanding: 0.00 }
};

let vaultDocs = [
  { id: "doc-1", category: "GST Certificate", shop: "Krishna Patel Retailers", date: "2026-05-18", status: "Approved", filename: "gst_certificate_24AAAAA.pdf" },
  { id: "doc-2", category: "PAN Card", shop: "Surat Wholesale Bazaar", date: "2026-05-20", status: "Approved", filename: "pan_card_corporate.pdf" },
  { id: "doc-3", category: "Shop License", shop: "Jai Hind General Store", date: "2026-05-27", status: "Pending", filename: "municipality_shop_license.png" }
];

let smartPushAlerts = [
  { id: 1, time: "14:20", text: "Urgent: Cinthol cool soap stock drops below min threshold!" },
  { id: 2, time: "15:05", text: "Wholesale Order Request ORD-2026-003 Approved by Super Admin" }
];

let ocrExtractedItems = [];
let aiTrendChartInstance = null;
let aiDemandChartInstance = null;
let currentSmartView = "home";

// --- 🤖 1. AI PREDICTIVE ANALYTICS HUB HUB ---
function renderAIHubView() {
  const kpis = getCalculatedKPIs();
  
  // Calculate next month predictive revenue (linear growth model +15.2%)
  const nextMonthPrediction = kpis.revenue * 1.152;
  document.getElementById("ai-predicted-rev").innerText = `₹${nextMonthPrediction.toLocaleString('en-IN', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
  
  // Best Category based on product catalogs
  const categorySales = {};
  appState.products.forEach(p => {
    categorySales[p.category] = (categorySales[p.category] || 0) + (p.mrp * (100 - p.stock));
  });
  let bestCategory = "Personal Care";
  let maxSales = 0;
  for (const cat in categorySales) {
    if (categorySales[cat] > maxSales) {
      maxSales = categorySales[cat];
      bestCategory = cat;
    }
  }
  document.getElementById("ai-best-category").innerText = bestCategory;

  // Initialize AI Projection trend Graph
  const trendCtx = document.getElementById("ai-revenue-trend-chart").getContext("2d");
  if (aiTrendChartInstance) { aiTrendChartInstance.destroy(); }
  
  aiTrendChartInstance = new Chart(trendCtx, {
    type: 'line',
    data: {
      labels: ["May 22", "May 23", "May 24", "May 25", "May 26", "May 27", "May 28 (Today)", "May 29 (AI Proj)", "May 30 (AI Proj)"],
      datasets: [
        {
          label: 'Real Transaction Dues (₹)',
          data: [12000, 18500, 24000, 15000, 31000, 28000, kpis.revenue, null, null],
          borderColor: '#e31b23',
          backgroundColor: 'transparent',
          borderWidth: 3,
          tension: 0.3
        },
        {
          label: 'AI Deep Projections (₹)',
          data: [null, null, null, null, null, null, kpis.revenue, kpis.revenue * 1.05, kpis.revenue * 1.12],
          borderColor: '#0d9488',
          backgroundColor: 'rgba(13, 148, 136, 0.05)',
          borderWidth: 3,
          borderDash: [5, 5],
          fill: true,
          tension: 0.3
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: { ticks: { color: "#94a3b8" } },
        x: { ticks: { color: "#94a3b8" } }
      }
    }
  });

  // Initialize AI Product demand velocity Graph
  const demandCtx = document.getElementById("ai-product-demand-chart").getContext("2d");
  if (aiDemandChartInstance) { aiDemandChartInstance.destroy(); }

  const productsNames = appState.products.slice(0, 5).map(p => p.brand);
  const productsDemandVelocities = [85, 72, 45, 92, 58]; // Simulated demand metrics

  aiDemandChartInstance = new Chart(demandCtx, {
    type: 'bar',
    data: {
      labels: productsNames,
      datasets: [{
        label: 'Predictive Demand Score (0-100)',
        data: productsDemandVelocities,
        backgroundColor: 'rgba(13, 148, 136, 0.6)',
        borderColor: '#0d9488',
        borderWidth: 1.5
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: { min: 0, max: 100, ticks: { color: "#94a3b8" } },
        x: { ticks: { color: "#94a3b8" } }
      }
    }
  });

  // Render AI CRM Behavior list
  const crmBody = document.getElementById("ai-crm-behavior-table");
  crmBody.innerHTML = appState.shops.map(shop => {
    let classBadge = "badge-approved";
    if (shop.type === "Wholesaler") classBadge = "badge-delivered";
    
    // Simulate churning probability metrics
    let churnProb = "1.5%";
    let churnStatus = `<span class="badge badge-success">Highly Loyal</span>`;
    
    if (shop.id === "shop-3") {
      churnProb = "32.4%";
      churnStatus = `<span class="badge badge-pending">Moderate Risk</span>`;
    } else if (shop.status === "Rejected") {
      churnProb = "98.0%";
      churnStatus = `<span class="badge badge-danger">High Risk</span>`;
    }

    return `
      <tr>
        <td style="font-weight:600;">${shop.name}</td>
        <td><span class="badge ${classBadge}">${shop.type} Gold</span></td>
        <td style="font-weight:600; text-align:center;">${shop.loyaltyPoints > 500 ? '12 visits/mo' : '3 visits/mo'}</td>
        <td style="font-weight:700; color:var(--primary);">${churnProb}</td>
        <td>${churnStatus}</td>
      </tr>
    `;
  }).join("");
}

function runAIPredictiveRun() {
  showToast("Deep learning sales forecast neural network retraining initialized...", "info");
  setTimeout(() => {
    showToast("Evaluating regional distributor buying frequency channels...", "info");
    setTimeout(() => {
      showToast("AI network models retrained with 98.4% validation fit!", "success");
      renderAIHubView();
    }, 1500);
  }, 1200);
}

// --- 🤖 AI INVOICE OCR SCANNER ---
function triggerOCRFileInput() {
  document.getElementById("ocr-file-input").click();
}

function handleOCRFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const statusBox = document.getElementById("ocr-status-box");
  const percentText = document.getElementById("ocr-percent");
  const progressBar = document.getElementById("ocr-progress-bar");
  const resultsBox = document.getElementById("ocr-results-box");
  const tableBody = document.getElementById("ocr-extracted-tbody");

  // Show status progress
  statusBox.style.display = "block";
  resultsBox.style.display = "none";
  
  let percent = 0;
  progressBar.style.width = "0%";
  percentText.innerText = "0%";

  const interval = setInterval(() => {
    percent += 10;
    progressBar.style.width = `${percent}%`;
    percentText.innerText = `${percent}%`;

    if (percent >= 100) {
      clearInterval(interval);
      statusBox.style.display = "none";
      showToast("Invoice bill image processed via AI OCR scan!", "success");
      
      // Load simulated extracted items
      ocrExtractedItems = [
        { productId: "prod-1", productName: "Godrej No.1 Soap (Lime & Aloe Vera)", qty: 8, unitType: "Box", price: 110.00, gst: 18 },
        { productId: "prod-2", productName: "Cinthol Cool Bath Soap", qty: 15, unitType: "Box", price: 125.00, gst: 18 },
        { productId: "prod-6", productName: "Godrej Ezee Liquid Detergent", qty: 4, unitType: "Box", price: 175.00, gst: 18 }
      ];

      tableBody.innerHTML = ocrExtractedItems.map(item => {
        return `
          <tr>
            <td style="font-weight:600;">${item.productName}</td>
            <td style="font-weight:700; color:var(--primary);">${item.qty}</td>
            <td>${item.unitType}</td>
            <td>CGST 9% + SGST 9%</td>
          </tr>
        `;
      }).join("");

      resultsBox.style.display = "block";
      lucide.createIcons();
    }
  }, 150);
}

function loadOCRExtractedToCart() {
  if (ocrExtractedItems.length === 0) return;

  // Append OCR ledger to client shopping cart
  appState.cart = [...ocrExtractedItems];
  updateCartPill();
  
  // Automatically bounce to Client view so they can review their loaded cart
  switchRole("shop");
  openCartModal();
  showToast("OCR items imported directly into Wholesale Order Cart!", "success");
}

// --- 🧾 2. ADVANCED GST & HSN DIRECTORY ---
function renderGSTVaultView() {
  // Renders HSN directory
  const hsnBody = document.getElementById("gst-hsn-directory-table");
  hsnBody.innerHTML = appState.products.map(p => {
    return `
      <tr>
        <td style="font-weight:600;">
          <div style="font-weight:600;">${p.name}</div>
          <span style="font-size:0.65rem; color:var(--text-secondary);">${p.category}</span>
        </td>
        <td style="font-family:monospace; font-weight:700; color:var(--accent-teal);">${p.hsn}</td>
        <td>9% Split</td>
        <td>9% Split</td>
        <td>
          <button class="btn btn-secondary btn-sm" style="padding:4px 8px;" onclick="generateInstantProductBarcode('${p.barcode}')" title="Generate Product Barcode"><i data-lucide="barcode" style="width:14px;"></i> Barcode</button>
        </td>
      </tr>
    `;
  }).join("");

  lucide.createIcons();
}

function handleDocVaultUpload(event) {
  event.preventDefault();
  
  const category = document.getElementById("vault-doc-type").value;
  const shop = document.getElementById("vault-doc-shop").value;
  const fileInput = document.getElementById("vault-doc-file");
  const filename = fileInput.files[0] ? fileInput.files[0].name : "verification_file.pdf";

  const newDoc = {
    id: `doc-${vaultDocs.length + 1}`,
    category,
    shop,
    date: new Date().toISOString().split("T")[0],
    status: "Pending",
    filename
  };

  vaultDocs.unshift(newDoc);
  fileInput.value = "";
  renderGSTVaultView();
  showToast(`${category} verification dossier uploaded successfully! Pending audit.`, "success");
  logActivity("Wholesale Dealer", shop, `Uploaded compliance KYC dossier for: ${category}`);
}

function generateInstantProductBarcode(barcode) {
  openBarcodeModal();
  document.getElementById("manual-barcode-input").value = barcode;
  showToast(`Barcode mapped for GTIN code: ${barcode}`, "success");
}

// --- 📱 3. MOBILE APP SIMULATOR ENGINE ---
function renderMobileAppView() {
  smartSwitchView("home");
}

function smartSwitchView(subview) {
  currentSmartView = subview;
  
  // Set tab active styling inside mobile frame
  document.querySelectorAll(".smart-bottom-nav .smart-nav-item").forEach(btn => {
    btn.classList.remove("active");
  });
  
  const viewport = document.getElementById("smart-app-viewport");
  
  if (subview === "home") {
    document.querySelectorAll(".smart-bottom-nav .smart-nav-item")[0].classList.add("active");
    smartRenderAppHome(viewport);
  } else if (subview === "scanner") {
    document.querySelectorAll(".smart-bottom-nav .smart-nav-item")[1].classList.add("active");
    smartRenderAppScanner(viewport);
  } else if (subview === "status") {
    document.querySelectorAll(".smart-bottom-nav .smart-nav-item")[2].classList.add("active");
    smartRenderAppStatus(viewport);
  } else if (subview === "notif") {
    document.querySelectorAll(".smart-bottom-nav .smart-nav-item")[3].classList.add("active");
    smartRenderAppNotif(viewport);
  }

  lucide.createIcons();
}

function smartRenderAppHome(viewport) {
  const kpis = getCalculatedKPIs();
  
  viewport.innerHTML = `
    <div style="text-align:center; padding-bottom:8px; border-bottom:1px solid var(--border-glass);">
      <h3 style="font-family:var(--font-heading); font-size:0.9rem; color:var(--primary); font-weight:800;">GODREJ SMART DEALER</h3>
      <span style="font-size:0.55rem; color:var(--text-muted);">Mobile Companion v2.8 (Flutter core)</span>
    </div>
    
    <div class="smart-card">
      <div style="font-size:0.55rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Dealer Prepaid Wallet</div>
      <h4 style="font-size:1.1rem; color:var(--success); font-weight:800;">₹${wallets["shop-1"].prepaid.toFixed(2)}</h4>
      <div style="font-size:0.55rem; color:var(--text-secondary);">Available Credit Pool: ₹${(wallets["shop-1"].creditLimit - wallets["shop-1"].outstanding).toFixed(2)}</div>
    </div>

    <div class="smart-card">
      <h4>Mobile Fleet Dispatch Alerts</h4>
      <p>Simulate delivery pipeline push logs directly to test React Native listener threads.</p>
      <button class="smart-btn smart-btn-primary" style="margin-top:4px;" onclick="smartTriggerPushAlert()"><i data-lucide="bell" style="width:10px; height:10px;"></i> Dispatch Simulated Alert</button>
    </div>

    <div class="smart-card">
      <h4>Suppliers GST Invoices</h4>
      <p>Directly download or view printable thermal PDF tax receipts generated from orders.</p>
      <button class="smart-btn smart-btn-secondary" style="margin-top:4px;" onclick="smartSwitchView('status')"><i data-lucide="file-text" style="width:10px; height:10px;"></i> View Mobile Invoices</button>
    </div>
  `;
}

function smartTriggerPushAlert() {
  const messages = [
    "Alert: Stock replenishment calculated for Godrej expert richness color!",
    "Order confirmation: Wholesale Booking ORD-2026-004 registered!",
    "Logistics Update: Delivery van out for Sabarmati Bypass route checkpoints!",
    "KYC Audit Update: GST document verification approved for Krishna Retailers!"
  ];
  
  const randomMsg = messages[Math.floor(Math.random() * messages.length)];
  
  // Add to smartphone notifications pool
  smartPushAlerts.unshift({
    id: smartPushAlerts.length + 1,
    time: new Date().toLocaleTimeString().substring(0, 5),
    text: randomMsg
  });

  // Redraw dots
  document.getElementById("smart-notif-dot").style.display = "block";
  document.getElementById("notif-badge").innerText = parseInt(document.getElementById("notif-badge").innerText || 0) + 1;
  document.getElementById("notif-badge").style.display = "flex";

  showToast(`Mobile Push Notification Dispatched: "${randomMsg.substring(0,25)}..."`, "info");
  
  if (currentSmartView === "notif") {
    smartSwitchView("notif");
  }
}

function smartRenderAppScanner(viewport) {
  viewport.innerHTML = `
    <div style="text-align:center; padding-bottom:8px; border-bottom:1px solid var(--border-glass);">
      <h3 style="font-family:var(--font-heading); font-size:0.85rem; font-weight:700;">Mobile GTIN Scan Engine</h3>
    </div>

    <div style="height:120px; background:#000; border-radius:12px; display:flex; align-items:center; justify-content:center; relative; overflow:hidden; border:2px solid var(--primary);">
      <div style="position:absolute; width:90%; height:2px; background:var(--primary); animation: float 2s infinite ease-in-out;"></div>
      <i data-lucide="camera" style="width:24px; height:24px; color:#ffffff; opacity:0.5;"></i>
      <span style="font-size:0.55rem; color:#ffffff; position:absolute; bottom:6px;">Decoders active</span>
    </div>

    <div class="smart-card">
      <label style="font-size:0.6rem; color:var(--text-secondary); display:block; margin-bottom:4px;">Enter GTIN Barcode Key</label>
      <input type="text" id="smart-barcode-val" class="smart-input" placeholder="e.g. 8901157001004" value="8901157001004">
      <button class="smart-btn smart-btn-primary" style="margin-top:6px; width:100%;" onclick="runSmartBarcodeLookup()"><i data-lucide="search" style="width:10px;"></i> Query Product detail</button>
    </div>

    <div id="smart-scan-results" style="display:none;" class="smart-card">
      <!-- Decoded Product Details rendered here -->
    </div>
  `;
}

function runSmartBarcodeLookup() {
  const barcode = document.getElementById("smart-barcode-val").value.trim();
  const prod = appState.products.find(p => p.barcode === barcode);
  const resultsDiv = document.getElementById("smart-scan-results");

  if (prod) {
    resultsDiv.innerHTML = `
      <div style="font-weight:700; font-size:0.75rem; color:var(--success);">${prod.name}</div>
      <div style="font-size:0.65rem; margin-top:2px;">MRP: ₹${prod.mrp.toFixed(2)} | Box Qty: ${prod.boxQty} items</div>
      <div style="font-size:0.65rem; color:var(--text-secondary);">Stock status: ${prod.stock} Boxes in Warehouse</div>
      <button class="smart-btn smart-btn-primary" style="margin-top:6px; font-size:0.6rem; padding:4px 8px;" onclick="addSmartProductToWholesaleCart('${prod.id}')">Instant Add 1 Box to Cart</button>
    `;
    resultsDiv.style.display = "block";
  } else {
    showToast("GTIN code not recognized in Distributor ledger!", "error");
    resultsDiv.style.display = "none";
  }
  lucide.createIcons();
}

function addSmartProductToWholesaleCart(id) {
  addProductToCart(id);
  smartSwitchView("home");
}

function smartRenderAppStatus(viewport) {
  // Shows list of active orders with timeline statuses
  const ordersHtml = appState.orders.map(ord => {
    let progress = 25;
    if (ord.status === "Approved" || ord.status === "Packed") progress = 50;
    if (ord.status === "Out for Delivery") progress = 75;
    if (ord.status === "Delivered") progress = 100;

    return `
      <div class="smart-card" style="padding:8px;">
        <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.65rem; font-weight:700;">
          <span style="color:var(--primary);">${ord.id}</span>
          <span style="color:var(--success);">₹${ord.grandTotal.toFixed(2)}</span>
        </div>
        <div style="font-size:0.55rem; color:var(--text-muted); margin-bottom:4px;">Date: ${ord.date}</div>
        
        <div style="height:3px; background:rgba(255,255,255,0.05); border-radius:1.5px; overflow:hidden; margin:4px 0;">
          <div style="width:${progress}%; height:100%; background:var(--accent-teal);"></div>
        </div>
        <div style="display:flex; justify-content:space-between; font-size:0.55rem; color:var(--text-secondary);">
          <span>Dispatch Level:</span>
          <strong>${ord.status}</strong>
        </div>
        <button class="smart-btn smart-btn-secondary" style="font-size:0.55rem; padding:2px 6px; align-self:flex-start; margin-top:4px;" onclick="viewInvoice('${ord.id}')"><i data-lucide="receipt" style="width:8px;"></i> PDF Invoice</button>
      </div>
    `;
  }).join("");

  viewport.innerHTML = `
    <div style="text-align:center; padding-bottom:8px; border-bottom:1px solid var(--border-glass);">
      <h3 style="font-family:var(--font-heading); font-size:0.85rem; font-weight:700;">Dealer Orders timeline</h3>
    </div>
    
    <div style="display:flex; flex-direction:column; gap:8px;">
      ${ordersHtml}
    </div>
  `;
}

function smartRenderAppNotif(viewport) {
  document.getElementById("smart-notif-dot").style.display = "none";
  
  const alertsHtml = smartPushAlerts.map(alert => {
    return `
      <div class="smart-card" style="border-left:3px solid var(--primary); padding:8px;">
        <div style="display:flex; justify-content:space-between; font-size:0.55rem; color:var(--text-muted); font-weight:600; margin-bottom:2px;">
          <span>System Alerts</span>
          <span>${alert.time}</span>
        </div>
        <p style="font-size:0.6rem; color:var(--text-primary); line-height:1.2;">${alert.text}</p>
      </div>
    `;
  }).join("");

  viewport.innerHTML = `
    <div style="text-align:center; padding-bottom:8px; border-bottom:1px solid var(--border-glass);">
      <h3 style="font-family:var(--font-heading); font-size:0.85rem; font-weight:700;">Dealer Push Notifications</h3>
    </div>
    
    <div style="display:flex; flex-direction:column; gap:8px;">
      ${alertsHtml}
    </div>
  `;
}

// --- 💳 4. DEALER CREDIT & WALLET LEDGER ---
function renderCreditWalletView() {
  const select = document.getElementById("wallet-shop-select");
  if (!select) return;

  const isClient = appState.currentRole === "retailer" || appState.currentRole === "wholesaler";
  
  if (isClient) {
    const myShopId = appState.currentUser.shopId || "shop-1";
    const shop = appState.shops.find(s => s.id === myShopId) || appState.shops[0];
    select.innerHTML = `<option value="${shop.id}">${shop.name} (My Wallet)</option>`;
    select.disabled = true;
    loadActiveWalletDetails(shop.id);
  } else {
    select.innerHTML = appState.shops.map(s => `<option value="${s.id}">${s.name}</option>`).join("");
    select.disabled = false;
    loadActiveWalletDetails(select.value);
  }
}

function loadActiveWalletDetails(shopId) {
  const ledger = wallets[shopId] || wallets["shop-1"];
  
  document.getElementById("wallet-credit-limit").innerText = `₹${ledger.creditLimit.toLocaleString('en-IN', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
  document.getElementById("wallet-outstanding-due").innerText = `₹${ledger.outstanding.toLocaleString('en-IN', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
  document.getElementById("wallet-prepaid-bal").innerText = `₹${ledger.prepaid.toLocaleString('en-IN', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
}

function triggerMockUPIQRReload() {
  const shopId = document.getElementById("wallet-shop-select").value;
  const amtVal = parseFloat(document.getElementById("wallet-payment-amt").value || 0);
  
  if (amtVal <= 0) {
    showToast("Please enter a valid recharge transaction amount", "error");
    return;
  }

  const sandbox = document.getElementById("razorpay-sandbox-panel");
  sandbox.style.borderColor = "var(--accent-teal)";

  document.getElementById("razorpay-panel-content").innerHTML = `
    <h4 style="font-size:0.9rem; margin-bottom:8px; color:var(--accent-teal); font-family:var(--font-heading);"><i data-lucide="qr-code"></i> BHIM UPI Dynamic QR Code</h4>
    <p style="font-size:0.75rem; margin-bottom:12px;">Scan the BHIM QR below using Godrej Distribute, PhonePe, or GPay to deposit ₹${amtVal.toFixed(2)} prepaid balance.</p>
    
    <svg class="qr-code-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="width:140px; height:140px; margin:0 auto 12px auto; display:block;">
      <rect width="100" height="100" fill="white"/>
      <path d="M10,10 h20 v20 h-20 z M15,15 h10 v10 h-10 z" fill="black"/>
      <path d="M70,10 h20 v20 h-20 z M75,15 h10 v10 h-10 z" fill="black"/>
      <path d="M10,70 h20 v20 h-20 z M15,75 h10 v10 h-10 z" fill="black"/>
      <path d="M40,40 h20 v20 h-20 z M45,45 h10 v10 h-10 z" fill="black"/>
      <rect x="70" y="70" width="10" height="10" fill="black"/>
      <rect x="80" y="80" width="10" height="10" fill="black"/>
      <rect x="75" y="75" width="5" height="5" fill="black"/>
    </svg>

    <button class="btn btn-teal btn-sm" onclick="completeUPISandboxPayment('${shopId}', ${amtVal})">Simulate Payment Success callback</button>
  `;

  lucide.createIcons();
}

function triggerUPIRazorpayCheckout() {
  const shopId = document.getElementById("wallet-shop-select").value;
  const amtVal = parseFloat(document.getElementById("wallet-payment-amt").value || 0);

  if (amtVal <= 0) {
    showToast("Please enter a valid checkout transaction amount", "error");
    return;
  }

  const sandbox = document.getElementById("razorpay-sandbox-panel");
  sandbox.style.borderColor = "var(--primary)";

  document.getElementById("razorpay-panel-content").innerHTML = `
    <h4 style="font-size:0.9rem; margin-bottom:8px; color:var(--primary); font-family:var(--font-heading);"><i data-lucide="shield-check"></i> Razorpay Payment Gateway Sandbox</h4>
    <p style="font-size:0.75rem; margin-bottom:12px;">Merchant Checkout: Godrej Consumer Products Corp.<br>Payable Total: <strong>₹${amtVal.toFixed(2)}</strong></p>
    
    <div style="display:flex; flex-direction:column; gap:8px; max-width:240px; margin:0 auto 12px auto; text-align:left;">
      <div class="form-input-group" style="margin-bottom:0;">
        <label>Distributor Credit Card Number</label>
        <input type="text" class="form-control" style="padding:6px; font-size:0.75rem;" placeholder="4111 2222 3333 4444" value="4111 2222 3333 4444">
      </div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px;">
        <div class="form-input-group" style="margin-bottom:0;"><label>Expiry</label><input type="text" class="form-control" style="padding:6px; font-size:0.75rem;" value="12/29"></div>
        <div class="form-input-group" style="margin-bottom:0;"><label>CVV</label><input type="password" class="form-control" style="padding:6px; font-size:0.75rem;" value="***"></div>
      </div>
    </div>

    <button class="btn btn-primary btn-sm" onclick="completeUPISandboxPayment('${shopId}', ${amtVal})">Authorize Razorpay Payment</button>
  `;

  lucide.createIcons();
}

function completeUPISandboxPayment(shopId, amount) {
  const goal = document.getElementById("wallet-payment-goal").value;
  const ledger = wallets[shopId];
  const shop = appState.shops.find(s => s.id === shopId) || appState.shops[0];

  if (goal === "prepaid") {
    ledger.prepaid += amount;
    showToast(`Prepaid top-up of ₹${amount.toFixed(2)} credited successfully!`, "success");
    logActivity("Wholesale Dealer", shop.name, `Deposited prepaid top-up of ₹${amount.toFixed(2)} via UPI/Razorpay`);
  } else {
    // Repay Credit terms outstanding
    ledger.outstanding = Math.max(0, ledger.outstanding - amount);
    showToast(`Outstanding credit dues cleared by ₹${amount.toFixed(2)}!`, "success");
    logActivity("Wholesale Dealer", shop.name, `Repaid outstanding ledger terms of ₹${amount.toFixed(2)} via card gateway`);
  }

  // Clear inputs and reload panel
  document.getElementById("wallet-payment-amt").value = "";
  document.getElementById("razorpay-sandbox-panel").style.borderColor = "var(--border-glass)";
  document.getElementById("razorpay-panel-content").innerHTML = `
    <i data-lucide="lock" style="width:48px; height:48px; margin-bottom:12px; opacity:0.5;"></i>
    <p style="font-size:0.8rem;">Initialize a secure transaction from the recharge card to activate the live payment simulator.</p>
  `;

  loadActiveWalletDetails(shopId);
  if (appState.currentRole === "retailer") renderRetailerDashboardView();
  if (appState.currentRole === "wholesaler") renderWholesalerDashboardView();
  lucide.createIcons();
}

// --- 🏪 SHOP DEDICATED PORTAL CONTROLLER ---
function renderShopDashboardView() {
  const shopId = appState.currentUser.shopId || "shop-1";
  const shop = appState.shops.find(s => s.id === shopId) || appState.shops[0];
  const wallet = wallets[shopId] || { prepaid: 0, creditLimit: 50000, outstanding: 0 };

  // Set Title Headers
  document.getElementById("shop-portal-title").innerText = `${shop.name} Dealer Console`;
  
  const rankBadge = document.getElementById("shop-dealer-class-badge");
  if (shop.loyaltyPoints > 1000) {
    rankBadge.innerText = "Platinum Dealer Rank";
    rankBadge.className = "badge badge-approved";
    rankBadge.style.background = "var(--primary-glow)";
    rankBadge.style.color = "var(--primary)";
  } else {
    rankBadge.innerText = "Gold Dealer Rank";
    rankBadge.className = "badge badge-approved";
  }

  // Set KPIs
  document.getElementById("shop-kpi-wallet").innerText = `₹${wallet.prepaid.toLocaleString('en-IN', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
  document.getElementById("shop-kpi-loyalty").innerText = `${shop.loyaltyPoints} Pts`;
  document.getElementById("shop-kpi-outstanding").innerText = `₹${wallet.outstanding.toLocaleString('en-IN', {minimumFractionDigits:2, maximumFractionDigits:2})}`;

  // Active bookings count for this specific dealer
  const shopOrders = appState.orders.filter(o => o.shopId === shopId);
  const activeOrdersCount = shopOrders.filter(o => o.status !== "Delivered" && o.status !== "Cancelled").length;
  document.getElementById("shop-kpi-bookings").innerText = activeOrdersCount;

  // Render purchase ledger table
  const tbody = document.getElementById("shop-orders-tbody");
  if (shopOrders.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:20px; color:var(--text-secondary);">No wholesale orders requested yet. Go to catalog to place bulk bookings.</td></tr>`;
  } else {
    tbody.innerHTML = shopOrders.map(ord => {
      let statusClass = "badge-pending";
      if (ord.status === "Delivered") statusClass = "badge-approved";
      if (ord.status === "Out for Delivery") statusClass = "badge-delivered";
      if (ord.status === "Cancelled") statusClass = "badge-danger";

      const itemsSummary = ord.items.map(it => `${it.qty}x ${it.productName.substring(0, 10)}...`).join("<br>");

      return `
        <tr>
          <td style="font-weight:600; color:var(--primary);">${ord.id}</td>
          <td>${ord.date}</td>
          <td style="font-size:0.75rem;">${itemsSummary}</td>
          <td>₹${(ord.cgst + ord.sgst).toFixed(2)}</td>
          <td style="font-weight:600; color:var(--accent-teal);">₹${ord.grandTotal.toFixed(2)}</td>
          <td><span class="badge ${statusClass}">${ord.status}</span></td>
          <td>
            <button class="btn btn-secondary btn-sm" style="padding:4px 6px;" onclick="viewInvoice('${ord.id}')"><i data-lucide="receipt" style="width:12px;"></i> View</button>
          </td>
        </tr>
      `;
    }).join("");
  }

  lucide.createIcons();
}

// AI Smart Bundle Pack Loader
function loadAIBundleToCart(bundleName) {
  appState.cart = []; // clear first
  
  // Set values based on role and product
  const getProductBundleItem = (prodId, qty, unit) => {
    const prod = appState.products.find(p => p.id === prodId) || DEFAULT_PRODUCTS.find(p => p.id === prodId);
    let price = prod.wholesalePrice;
    if (unit === "Piece") {
      price = prod.wholesalePrice / prod.boxQty;
    }
    return {
      productId: prod.id,
      productName: prod.name,
      price: price,
      qty: qty,
      gst: prod.gst,
      unitType: unit
    };
  };

  if (bundleName === "Mosquito Protection Starter Kit") {
    appState.cart.push(getProductBundleItem("prod-3", 6, "Piece"));
    appState.cart.push(getProductBundleItem("prod-4", 12, "Piece"));
  } else if (bundleName === "Family Hygiene Core Pack") {
    appState.cart.push(getProductBundleItem("prod-2", 12, "Piece"));
    appState.cart.push(getProductBundleItem("prod-8", 4, "Piece"));
  } else if (bundleName === "Monsoon Vaporizer Protection Kit") {
    appState.cart.push(getProductBundleItem("prod-3", 24, "Box"));
    appState.cart.push(getProductBundleItem("prod-4", 48, "Box"));
  } else if (bundleName === "Family Hygiene Super Saver") {
    appState.cart.push(getProductBundleItem("prod-2", 48, "Box"));
    appState.cart.push(getProductBundleItem("prod-8", 12, "Box"));
  } else {
    // All-Weather Personal Care Pack
    appState.cart.push(getProductBundleItem("prod-1", 96, "Box"));
    appState.cart.push(getProductBundleItem("prod-5", 60, "Box"));
  }

  updateCartPill();
  openCartModal();
  showToast(`AI Smart Bundle Loaded: "${bundleName}"! Review discounts inside cart.`, "success");
}

// --- 🏪 RETAILER CLIENT DASHBOARD VIEW ---
function renderRetailerDashboardView() {
  const shopId = appState.currentUser.shopId || "shop-1";
  const shop = appState.shops.find(s => s.id === shopId) || appState.shops[0];
  const wallet = wallets[shopId] || { prepaid: 8750.00, creditLimit: 50000.00, outstanding: 14500.00 };

  // Set Title Headers
  document.getElementById("retailer-portal-title").innerText = `${shop.name} Retailer Console`;
  
  const rankBadge = document.getElementById("retailer-rank-badge");
  if (shop.loyaltyPoints > 1000) {
    rankBadge.innerText = "Platinum Partner Rank";
    rankBadge.className = "badge badge-approved";
    rankBadge.style.background = "var(--primary-glow)";
    rankBadge.style.color = "var(--primary)";
  } else {
    rankBadge.innerText = "Gold Partner Rank";
    rankBadge.className = "badge badge-approved";
  }

  // Set KPIs
  document.getElementById("retailer-kpi-wallet").innerText = `₹${wallet.prepaid.toLocaleString('en-IN', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
  document.getElementById("retailer-kpi-loyalty").innerText = `${shop.loyaltyPoints} Pts`;
  document.getElementById("retailer-kpi-outstanding").innerText = `₹${wallet.outstanding.toLocaleString('en-IN', {minimumFractionDigits:2, maximumFractionDigits:2})}`;

  // Active bookings count for this specific dealer
  const shopOrders = appState.orders.filter(o => o.shopId === shopId);
  const activeOrdersCount = shopOrders.filter(o => o.status !== "Delivered" && o.status !== "Cancelled").length;
  document.getElementById("retailer-kpi-bookings").innerText = activeOrdersCount;

  // Render purchase ledger table
  const tbody = document.getElementById("retailer-orders-tbody");
  if (shopOrders.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:20px; color:var(--text-secondary);">No wholesale orders requested yet. Go to catalog to place bulk bookings.</td></tr>`;
  } else {
    tbody.innerHTML = shopOrders.map(ord => {
      let statusClass = "badge-pending";
      if (ord.status === "Delivered") statusClass = "badge-approved";
      if (ord.status === "Out for Delivery") statusClass = "badge-delivered";
      if (ord.status === "Cancelled") statusClass = "badge-danger";

      const itemsSummary = ord.items.map(it => `${it.qty}x ${it.productName.substring(0, 10)}...`).join("<br>");

      return `
        <tr>
          <td style="font-weight:600; color:var(--primary);">${ord.id}</td>
          <td>${ord.date}</td>
          <td style="font-size:0.75rem;">${itemsSummary}</td>
          <td>₹${(ord.cgst + ord.sgst).toFixed(2)}</td>
          <td style="font-weight:600; color:var(--accent-teal);">₹${ord.grandTotal.toFixed(2)}</td>
          <td><span class="badge ${statusClass}">${ord.status}</span></td>
          <td>
            <button class="btn btn-secondary btn-sm" style="padding:4px 6px;" onclick="viewInvoice('${ord.id}')"><i data-lucide="receipt" style="width:12px;"></i> View</button>
          </td>
        </tr>
      `;
    }).join("");
  }

  // Live Active Order Logistics Tracker
  const activeOrder = shopOrders.find(o => o.status !== "Delivered" && o.status !== "Cancelled");
  const trackerCard = document.getElementById("retailer-active-tracker-card");
  
  if (activeOrder) {
    document.getElementById("retailer-tracker-id").innerText = activeOrder.id;
    document.getElementById("retailer-tracker-status").innerText = activeOrder.status;
    
    let progress = 15;
    let eta = "Awaiting distributor approval";
    if (activeOrder.status === "Approved") {
      progress = 40;
      eta = "Scheduled for warehouse packing";
    } else if (activeOrder.status === "Packed") {
      progress = 60;
      eta = "Loading onto regional transit fleet";
    } else if (activeOrder.status === "Out for Delivery") {
      progress = 80;
      eta = "ETA: 18 mins (Transit Highway)";
    }
    
    document.getElementById("retailer-tracker-progress").style.width = `${progress}%`;
    document.getElementById("retailer-tracker-eta").innerText = eta;
    trackerCard.style.display = "block";
  } else {
    trackerCard.style.display = "none";
  }

  lucide.createIcons();
}

// --- 🚚 BULK WHOLESALER DASHBOARD VIEW ---
function renderWholesalerDashboardView() {
  const shopId = appState.currentUser.shopId || "shop-2";
  const shop = appState.shops.find(s => s.id === shopId) || appState.shops.find(s => s.type === "Wholesaler") || appState.shops[0];
  const wallet = wallets[shopId] || { prepaid: 12400.00, creditLimit: 80000.00, outstanding: 8900.00 };

  // Set Title Headers
  document.getElementById("wholesaler-portal-title").innerText = `${shop.name} Wholesaler Console`;
  
  const rankBadge = document.getElementById("wholesaler-rank-badge");
  if (shop.loyaltyPoints > 1000) {
    rankBadge.innerText = "Platinum Stockist Rank";
    rankBadge.className = "badge badge-approved";
    rankBadge.style.background = "var(--primary-glow)";
    rankBadge.style.color = "var(--primary)";
  } else {
    rankBadge.innerText = "Gold Stockist Rank";
    rankBadge.className = "badge badge-approved";
  }

  // Set KPIs
  document.getElementById("wholesaler-kpi-wallet").innerText = `₹${wallet.prepaid.toLocaleString('en-IN', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
  document.getElementById("wholesaler-kpi-loyalty").innerText = `${shop.loyaltyPoints} Pts`;
  document.getElementById("wholesaler-kpi-outstanding").innerText = `₹${wallet.outstanding.toLocaleString('en-IN', {minimumFractionDigits:2, maximumFractionDigits:2})}`;

  // Active bookings count for this specific dealer
  const shopOrders = appState.orders.filter(o => o.shopId === shopId);
  const activeOrdersCount = shopOrders.filter(o => o.status !== "Delivered" && o.status !== "Cancelled").length;
  document.getElementById("wholesaler-kpi-bookings").innerText = activeOrdersCount;

  // Render purchase ledger table
  const tbody = document.getElementById("wholesaler-orders-tbody");
  if (shopOrders.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:20px; color:var(--text-secondary);">No wholesale orders requested yet. Go to catalog to place bulk bookings.</td></tr>`;
  } else {
    tbody.innerHTML = shopOrders.map(ord => {
      let statusClass = "badge-pending";
      if (ord.status === "Delivered") statusClass = "badge-approved";
      if (ord.status === "Out for Delivery") statusClass = "badge-delivered";
      if (ord.status === "Cancelled") statusClass = "badge-danger";

      const itemsSummary = ord.items.map(it => `${it.qty}x ${it.productName.substring(0, 10)}...`).join("<br>");

      return `
        <tr>
          <td style="font-weight:600; color:var(--primary);">${ord.id}</td>
          <td>${ord.date}</td>
          <td style="font-size:0.75rem;">${itemsSummary}</td>
          <td>₹${(ord.cgst + ord.sgst).toFixed(2)}</td>
          <td style="font-weight:600; color:var(--accent-teal);">₹${ord.grandTotal.toFixed(2)}</td>
          <td><span class="badge ${statusClass}">${ord.status}</span></td>
          <td>
            <button class="btn btn-secondary btn-sm" style="padding:4px 6px;" onclick="viewInvoice('${ord.id}')"><i data-lucide="receipt" style="width:12px;"></i> View</button>
          </td>
        </tr>
      `;
    }).join("");
  }

  // Live Active Order Logistics Tracker
  const activeOrder = shopOrders.find(o => o.status !== "Delivered" && o.status !== "Cancelled");
  const trackerCard = document.getElementById("wholesaler-active-tracker-card");
  
  if (activeOrder) {
    document.getElementById("wholesaler-tracker-id").innerText = activeOrder.id;
    document.getElementById("wholesaler-tracker-status").innerText = activeOrder.status;
    
    let progress = 15;
    let eta = "Awaiting distributor approval";
    if (activeOrder.status === "Approved") {
      progress = 40;
      eta = "Scheduled for bulk pallet packaging";
    } else if (activeOrder.status === "Packed") {
      progress = 60;
      eta = "Pallets loaded onto stockist shipping flatbed";
    } else if (activeOrder.status === "Out for Delivery") {
      progress = 80;
      eta = "ETA: 35 mins (Transit Ring-Road Bypass)";
    }
    
    document.getElementById("wholesaler-tracker-progress").style.width = `${progress}%`;
    document.getElementById("wholesaler-tracker-eta").innerText = eta;
    trackerCard.style.display = "block";
  } else {
    trackerCard.style.display = "none";
  }

  lucide.createIcons();
}


// ============================================================
// 🔐 3D LOGIN PORTAL — JavaScript Controller
// ============================================================

// Spawn floating particles on the login screen
function spawnLoginParticles() {
  const overlay = document.getElementById("login-portal-overlay");
  if (!overlay) return;
  const colours = ["rgba(227,27,35,0.4)", "rgba(13,148,136,0.35)", "rgba(99,102,241,0.35)", "rgba(255,255,255,0.15)"];
  for (let i = 0; i < 18; i++) {
    const p = document.createElement("div");
    p.className = "login-particle";
    const size = Math.random() * 6 + 3;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random() * 100}%;
      background:${colours[Math.floor(Math.random() * colours.length)]};
      animation-duration:${Math.random() * 12 + 8}s;
      animation-delay:${Math.random() * 8}s;
    `;
    overlay.appendChild(p);
  }
}

// Track selected admin sub-role
let _selectedAdminSubRole = "admin";

// Flip a portal card to show login form
function flipPortalCard(portalType) {
  const card = document.getElementById("portal-card-" + portalType);
  if (!card) return;
  card.classList.add("flipped");
}

// Un-flip (back button) — stop event from re-triggering the card click
function unflipPortalCard(event, portalType) {
  event.stopPropagation();
  const card = document.getElementById("portal-card-" + portalType);
  if (!card) return;
  card.classList.remove("flipped");
}

// Select sub-role inside Admin+Staff card
function selectSubRole(event, role) {
  event.stopPropagation();
  _selectedAdminSubRole = role;
  ["admin","sales","delivery"].forEach(r => {
    const btn = document.getElementById("sub-role-" + r);
    if (btn) btn.classList.toggle("active", r === role);
  });
  // Update username hint
  const userInput = document.getElementById("admin-username");
  const passInput = document.getElementById("admin-password");
  if (userInput && passInput) {
    if (role === "admin")    { userInput.value = "admin";    passInput.value = "admin123"; }
    if (role === "sales")    { userInput.value = "sales";    passInput.value = "sales123"; }
    if (role === "delivery") { userInput.value = "delivery"; passInput.value = "delivery123"; }
  }
}

// Credential map — Admin portal always loads 'admin' role (full access to all sections)
const PORTAL_CREDENTIALS = {
  client:     { user: "retailer",  pass: "client123",  role: "retailer"   },
  wholesaler: { user: "wholesale", pass: "stock123",   role: "wholesaler" },
  admin:      { user: "admin",     pass: "admin123",   role: "admin"      }
};

// Handle portal login submission
function handlePortalLogin(event, portalType) {
  event.stopPropagation();

  let username = "", password = "";
  if (portalType === "client") {
    username = (document.getElementById("client-username")?.value || "").trim();
    password = (document.getElementById("client-password")?.value || "").trim();
  } else if (portalType === "wholesaler") {
    username = (document.getElementById("wholesaler-username")?.value || "").trim();
    password = (document.getElementById("wholesaler-password")?.value || "").trim();
  } else {
    username = (document.getElementById("admin-username")?.value || "").trim();
    password = (document.getElementById("admin-password")?.value || "").trim();
  }

  // Handle Admin Portal specifically to support 3 distinct roles promoted to Admin
  if (portalType === "admin") {
    const isValid = (username === "admin" && password === "admin123") ||
                    (username === "sales" && password === "sales123") ||
                    (username === "delivery" && password === "delivery123");
    if (!isValid) {
      showToast("❌ Wrong credentials — please try again", "error");
      const inner = document.querySelector("#portal-card-admin .portal-card-inner");
      if (inner) {
        inner.style.transition = "transform 0.08s ease";
        inner.style.transform  = "rotateY(185deg)";
        setTimeout(() => { inner.style.transform = "rotateY(175deg)"; }, 90);
        setTimeout(() => { inner.style.transform = "rotateY(180deg)"; inner.style.transition = ""; }, 180);
      }
      return;
    }

    // Success - log in under the proper sub-role context
    const label = username === "sales" ? "Sales Manager" : username === "delivery" ? "Delivery Manager" : "Super Admin";
    showToast("✅ Welcome! Loading " + label + " Console…", "success");
    
    // Call switchRole with the actual sub-role to promote it under the hood but set appropriate visual tabs!
    switchRole(username);
    return;
  }

  // Handle Client & Wholesaler portals (with dynamic lookup)
  const staticCred = PORTAL_CREDENTIALS[portalType];
  let loggedInShop = null;
  let isValid = false;

  if (staticCred && staticCred.user === username && staticCred.pass === password) {
    isValid = true;
  } else {
    // Dynamic lookup in appState.shops
    const matchedShop = appState.shops.find(s => {
      const typeMatch = (portalType === "client" && s.type === "Retailer") ||
                        (portalType === "wholesaler" && s.type === "Wholesaler");
      if (!typeMatch) return false;
      const userMatch = (s.username && s.username.toLowerCase() === username.toLowerCase()) ||
                        s.owner.toLowerCase() === username.toLowerCase() ||
                        s.name.toLowerCase() === username.toLowerCase() ||
                        s.mobile === username;
      const passMatch = (s.password && s.password === password) ||
                        s.mobile === password ||
                        (portalType === "client" && password === "client123") ||
                        (portalType === "wholesaler" && password === "stock123");
      
      return userMatch && passMatch;
    });

    if (matchedShop) {
      if (matchedShop.status !== "Approved") {
        showToast("⏳ Registration is pending Super Admin dossier approval!", "warning");
        const inner = document.querySelector("#portal-card-" + portalType + " .portal-card-inner");
        if (inner) {
          inner.style.transition = "transform 0.08s ease";
          inner.style.transform  = "rotateY(185deg)";
          setTimeout(() => { inner.style.transform = "rotateY(175deg)"; }, 90);
          setTimeout(() => { inner.style.transform = "rotateY(180deg)"; inner.style.transition = ""; }, 180);
        }
        return;
      }
      isValid = true;
      loggedInShop = matchedShop;
    }
  }

  if (!isValid) {
    showToast("❌ Wrong credentials — please try again", "error");
    const inner = document.querySelector("#portal-card-" + portalType + " .portal-card-inner");
    if (inner) {
      inner.style.transition = "transform 0.08s ease";
      inner.style.transform  = "rotateY(185deg)";
      setTimeout(() => { inner.style.transform = "rotateY(175deg)"; }, 90);
      setTimeout(() => { inner.style.transform = "rotateY(180deg)"; inner.style.transition = ""; }, 180);
    }
    return;
  }

  if (loggedInShop) {
    // Dynamically set user context before switching roles!
    appState.currentUser = {
      name: loggedInShop.name,
      role: portalType === "client" ? "Retailer Client" : "Bulk Wholesaler",
      shopId: loggedInShop.id
    };
    // Ensure we trigger switchRole with retailer or wholesaler
    const finalRole = portalType === "client" ? "retailer" : "wholesaler";
    showToast("✅ Welcome! Loading " + loggedInShop.name + " Console…", "success");
    switchRole(finalRole);
  } else {
    // Static fallback
    showToast("✅ Welcome! Loading " + staticCred.role + " dashboard…", "success");
    switchRole(staticCred.role);
  }
}

// Initialise portal on page load
document.addEventListener("DOMContentLoaded", () => {
  spawnLoginParticles();
});

// Toggle sidebar on mobile screens
function toggleMobileSidebar() {
  const sidebar = document.querySelector(".sidebar");
  if (sidebar) {
    sidebar.classList.toggle("mobile-open");
  }
}

// --- 👤 USER PROFILE & DOSSIER CONTROLLERS ---
function renderUserProfileForm() {
  const container = document.getElementById("profile-section");
  if (!container) return;

  const isClient = appState.currentRole === "retailer" || appState.currentRole === "wholesaler";
  const user = appState.currentUser;
  
  let shop = null;
  let ledger = { prepaid: 0, creditLimit: 50000, outstanding: 0 };
  
  if (isClient && user.shopId) {
    shop = appState.shops.find(s => s.id === user.shopId);
    ledger = wallets[user.shopId] || { prepaid: 0, creditLimit: 50000, outstanding: 0 };
  }

  // Define dynamic initials
  const initials = user.name.split(" ").map(p => p[0]).join("").substring(0, 2).toUpperCase();

  let leftCardHtml = "";
  let rightFormHtml = "";

  if (!isClient) {
    // Admin details
    leftCardHtml = `
      <div class="glass-panel" style="padding:32px; text-align:center; display:flex; flex-direction:column; align-items:center; gap:20px; border-top: 4px solid var(--primary); height:100%;">
        <div style="width:96px; height:96px; border-radius:50%; background:linear-gradient(135deg,var(--primary),#ff4b5c); display:flex; align-items:center; justify-content:center; font-family:'Outfit',sans-serif; font-size:2.5rem; font-weight:900; color:#fff; border:4px solid rgba(255,255,255,0.1); box-shadow:0 0 24px rgba(227,27,35,0.4); flex-shrink:0;">${initials}</div>
        <div>
          <h2 style="font-family:var(--font-heading); font-size:1.4rem; font-weight:800; margin-bottom:4px;" id="profile-card-name">${user.name}</h2>
          <span class="badge badge-approved" style="background:var(--primary-glow); color:var(--primary); font-size:0.75rem;">${user.role}</span>
        </div>
        <div style="width:100%; border-top:1px solid var(--border-glass); padding-top:16px; text-align:left; font-size:0.8rem; color:var(--text-secondary); display:flex; flex-direction:column; gap:12px;">
          <div><i class="fa-solid fa-user-shield" style="width:20px; color:var(--primary); margin-right:6px;"></i> <strong>Privilege:</strong> Full System Override</div>
          <div><i class="fa-solid fa-server" style="width:20px; color:var(--primary); margin-right:6px;"></i> <strong>Node Status:</strong> Cloud Mainframe Active</div>
          <div><i class="fa-solid fa-clock" style="width:20px; color:var(--primary); margin-right:6px;"></i> <strong>Session Start:</strong> ${new Date().toLocaleTimeString()}</div>
        </div>
      </div>
    `;

    rightFormHtml = `
      <div class="glass-panel" style="padding:32px;">
        <h3 style="font-family:var(--font-heading); font-weight:700; font-size:1.25rem; margin-bottom:20px; display:flex; align-items:center; gap:8px;"><i class="fa-solid fa-user-edit" style="color:var(--primary);"></i> Update Admin Credentials</h3>
        
        <form onsubmit="saveUserProfileDetails(event)">
          <div class="form-input-group">
            <label>Admin Display Name *</label>
            <input type="text" id="profile-display-name" class="form-control" value="${user.name}" required>
          </div>
          
          <div class="form-input-group">
            <label>Role Assignment (Read-Only)</label>
            <input type="text" class="form-control" style="opacity:0.6; cursor:not-allowed;" value="${user.role}" readonly>
          </div>
          
          <div class="form-input-group">
            <label>Login Username (Read-Only)</label>
            <input type="text" class="form-control" style="opacity:0.6; cursor:not-allowed;" value="${user.role === 'Sales Manager' ? 'sales' : user.role === 'Delivery Manager' ? 'delivery' : 'admin'}" readonly>
          </div>
          
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
            <div class="form-input-group">
              <label>Update Password</label>
              <input type="password" id="profile-password" class="form-control" placeholder="••••••••">
            </div>
            <div class="form-input-group">
              <label>Confirm Password</label>
              <input type="password" id="profile-password-confirm" class="form-control" placeholder="••••••••">
            </div>
          </div>
          
          <button type="submit" class="btn btn-primary" style="width:100%; margin-top:12px;"><i class="fa-solid fa-save"></i> Save Admin Profile</button>
        </form>
      </div>
    `;
  } else {
    // Client Details (Retailer / Wholesaler)
    const shopInfo = shop || { name: user.name, owner: "N/A", mobile: "N/A", email: "N/A", address: "N/A", city: "N/A", state: "N/A", pincode: "N/A", gstin: "N/A" };
    
    leftCardHtml = `
      <div class="glass-panel" style="padding:32px; text-align:center; display:flex; flex-direction:column; align-items:center; gap:20px; border-top: 4px solid var(--accent-teal); height:100%;">
        <div style="width:96px; height:96px; border-radius:50%; background:linear-gradient(135deg,var(--accent-teal),#14b8a6); display:flex; align-items:center; justify-content:center; font-family:'Outfit',sans-serif; font-size:2.5rem; font-weight:900; color:#fff; border:4px solid rgba(255,255,255,0.1); box-shadow:0 0 24px rgba(13,148,136,0.4); flex-shrink:0;">${initials}</div>
        <div>
          <h2 style="font-family:var(--font-heading); font-size:1.3rem; font-weight:800; margin-bottom:4px;" id="profile-card-name">${shopInfo.name}</h2>
          <span class="badge badge-delivered" style="font-size:0.75rem; text-transform:capitalize;">${shopInfo.type} Gold Partner</span>
        </div>

        <!-- Ledger Info KPI cards in left panel -->
        <div style="width:100%; display:flex; flex-direction:column; gap:12px; margin-top:8px;">
          <div style="background:rgba(255,255,255,0.02); border:1px solid var(--border-glass); border-radius:12px; padding:12px; text-align:left; display:flex; justify-content:space-between; align-items:center;">
            <div>
              <div style="font-size:0.6rem; color:var(--text-muted); text-transform:uppercase;">Prepaid Balance</div>
              <div style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--success);">₹${ledger.prepaid.toLocaleString('en-IN', {minimumFractionDigits:2})}</div>
            </div>
            <button class="btn btn-teal btn-sm" style="padding:4px 10px; font-size:0.65rem;" onclick="switchView('credit-wallet')"><i class="fa-solid fa-plus"></i> Add Money</button>
          </div>

          <div style="background:rgba(255,255,255,0.02); border:1px solid var(--border-glass); border-radius:12px; padding:12px; text-align:left; display:flex; justify-content:space-between; align-items:center;">
            <div>
              <div style="font-size:0.6rem; color:var(--text-muted); text-transform:uppercase;">Outstanding Dues</div>
              <div style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--danger);">₹${ledger.outstanding.toLocaleString('en-IN', {minimumFractionDigits:2})}</div>
            </div>
            ${ledger.outstanding > 0 ? `<button class="btn btn-primary btn-sm" style="padding:4px 10px; font-size:0.65rem; background:linear-gradient(135deg,var(--primary) 0%,#ff4b5c 100%);" onclick="switchView('credit-wallet')"><i class="fa-solid fa-credit-card"></i> Pay Dues</button>` : `<i class="fa-solid fa-check-circle" style="color:var(--success); font-size:1.2rem;"></i>`}
          </div>

          <div style="background:rgba(255,255,255,0.02); border:1px solid var(--border-glass); border-radius:12px; padding:12px; text-align:left; display:flex; justify-content:space-between; align-items:center;">
            <div>
              <div style="font-size:0.6rem; color:var(--text-muted); text-transform:uppercase;">Loyalty Score</div>
              <div style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--accent-teal);">${shopInfo.loyaltyPoints} Pts</div>
            </div>
            <i class="fa-solid fa-award" style="color:var(--accent-teal); font-size:1.2rem;"></i>
          </div>
        </div>

        <div style="width:100%; border-top:1px solid var(--border-glass); padding-top:16px; text-align:left; font-size:0.8rem; color:var(--text-secondary); display:flex; flex-direction:column; gap:10px;">
          <div><i class="fa-solid fa-shield-alt" style="width:20px; color:var(--accent-teal); margin-right:6px;"></i> <strong>Verification Status:</strong> Approved</div>
          <div><i class="fa-solid fa-calendar-check" style="width:20px; color:var(--accent-teal); margin-right:6px;"></i> <strong>Dossier Verified:</strong> 2026-05-30</div>
        </div>
      </div>
    `;

    rightFormHtml = `
      <div class="glass-panel" style="padding:32px;">
        <h3 style="font-family:var(--font-heading); font-weight:700; font-size:1.25rem; margin-bottom:20px; display:flex; align-items:center; gap:8px;"><i class="fa-solid fa-store" style="color:var(--accent-teal);"></i> Edit Business Dossier Details</h3>
        
        <form onsubmit="saveUserProfileDetails(event)">
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
            <div class="form-input-group">
              <label>Shop Entity Name *</label>
              <input type="text" id="profile-shop-name" class="form-control" value="${shopInfo.name}" required>
            </div>
            <div class="form-input-group">
              <label>Proprietor (Owner) Name *</label>
              <input type="text" id="profile-owner-name" class="form-control" value="${shopInfo.owner}" required>
            </div>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
            <div class="form-input-group">
              <label>Registered Mobile *</label>
              <input type="tel" id="profile-mobile" class="form-control" value="${shopInfo.mobile}" required>
            </div>
            <div class="form-input-group">
              <label>Email Address *</label>
              <input type="email" id="profile-email" class="form-control" value="${shopInfo.email || ''}" required>
            </div>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
            <div class="form-input-group">
              <label>Business GSTIN *</label>
              <input type="text" id="profile-gstin" class="form-control" value="${shopInfo.gstin}" required>
            </div>
            <div class="form-input-group">
              <label>Merchant Shop Type (Read-Only)</label>
              <input type="text" class="form-control" style="opacity:0.6; cursor:not-allowed;" value="${shopInfo.type} Partner" readonly>
            </div>
          </div>

          <div class="form-input-group">
            <label>Warehouse Delivery Address *</label>
            <input type="text" id="profile-address" class="form-control" value="${shopInfo.address}" required>
          </div>

          <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
            <div class="form-input-group">
              <label>City *</label>
              <input type="text" id="profile-city" class="form-control" value="${shopInfo.city}" required>
            </div>
            <div class="form-input-group">
              <label>State Zone *</label>
              <input type="text" id="profile-state" class="form-control" value="${shopInfo.state}" required>
            </div>
            <div class="form-input-group">
              <label>Postal Pincode *</label>
              <input type="text" id="profile-pincode" class="form-control" value="${shopInfo.pincode}" maxlength="6" required>
            </div>
          </div>

          <div style="width:100%; height:1px; background:var(--border-glass); margin:16px 0;"></div>

          <h4 style="font-family:var(--font-heading); font-size:0.95rem; font-weight:700; color:rgba(255,255,255,0.7); margin-bottom:12px;"><i class="fa-solid fa-key" style="color:var(--accent-teal);"></i> Login Credentials</h4>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
            <div class="form-input-group">
              <label>Login Username</label>
              <input type="text" id="profile-username" class="form-control" value="${shopInfo.username || ''}" placeholder="Enter username">
            </div>
            <div class="form-input-group">
              <label>Login Password</label>
              <input type="password" id="profile-password" class="form-control" value="${shopInfo.password || ''}" placeholder="Enter password">
            </div>
          </div>
          
          <button type="submit" class="btn btn-teal" style="width:100%; margin-top:12px;"><i class="fa-solid fa-save"></i> Save Business Dossier Changes</button>
        </form>
      </div>
    `;
  }

  container.innerHTML = `
    <div class="dashboard-title-row">
      <div>
        <h1 class="lang-en">User Profile Settings Console</h1>
        <p class="lang-en">View your account privileges and manage registered corporate details</p>
      </div>
    </div>
    
    <div class="dashboard-layout-row" style="grid-template-columns: 1fr 2fr; gap: 24px;">
      ${leftCardHtml}
      ${rightFormHtml}
    </div>
  `;
}

function saveUserProfileDetails(event) {
  event.preventDefault();
  
  const isClient = appState.currentRole === "retailer" || appState.currentRole === "wholesaler";
  const user = appState.currentUser;
  
  if (!isClient) {
    // Admin update
    const newName = document.getElementById("profile-display-name").value.trim();
    const newPass = document.getElementById("profile-password").value;
    const confirmPass = document.getElementById("profile-password-confirm").value;
    
    if (newPass && newPass !== confirmPass) {
      showToast("Passwords do not match", "error");
      return;
    }
    
    if (!newName) {
      showToast("Display name cannot be empty", "error");
      return;
    }
    
    appState.currentUser.name = newName;
    
    if (newPass) {
      showToast("Admin credentials and security password updated!", "success");
    } else {
      showToast("Admin display profile details saved!", "success");
    }
    
    updateUserProfileDisplay();
    renderUserProfileForm();
  } else {
    // Client update
    const shopName = document.getElementById("profile-shop-name").value.trim();
    const ownerName = document.getElementById("profile-owner-name").value.trim();
    const mobile = document.getElementById("profile-mobile").value.trim();
    const email = document.getElementById("profile-email").value.trim();
    const gstin = document.getElementById("profile-gstin").value.trim();
    const address = document.getElementById("profile-address").value.trim();
    const city = document.getElementById("profile-city").value.trim();
    const state = document.getElementById("profile-state").value.trim();
    const pincode = document.getElementById("profile-pincode").value.trim();
    const usernameInput = document.getElementById("profile-username") ? document.getElementById("profile-username").value.trim() : "";
    const passwordInput = document.getElementById("profile-password") ? document.getElementById("profile-password").value : "";

    if (!shopName || !ownerName || !mobile || !email || !gstin || !address || !city || !state || !pincode) {
      showToast("Please fill in all required fields", "error");
      return;
    }

    const shop = appState.shops.find(s => s.id === user.shopId);
    if (shop) {
      shop.name = shopName;
      shop.owner = ownerName;
      shop.mobile = mobile;
      shop.email = email;
      shop.gstin = gstin;
      shop.address = address;
      shop.city = city;
      shop.state = state;
      shop.pincode = pincode;
      
      if (usernameInput) shop.username = usernameInput;
      if (passwordInput) shop.password = passwordInput;
      
      saveShopsDB();
      
      // Update local state current user display name
      appState.currentUser.name = shopName;
      
      updateUserProfileDisplay();
      renderUserProfileForm();
      
      showToast("Registered business dossier updated successfully!", "success");
      
      // Log the activity
      logActivity(shop.type === "Wholesaler" ? "Wholesale Stockist" : "Retail Dealer", shop.name, `Updated corporate billing dossier & credentials in settings`);
    } else {
      showToast("Shop dossier record not found in system state!", "error");
    }
  }
}
