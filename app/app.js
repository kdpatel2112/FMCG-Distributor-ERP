/*
 * 🚀 GODREJ FMCG ERP SYSTEM - APPLICATION LOGIC
 * Sophisticated frontend controller and simulated database engine
 */

// --- 📦 PRELOADED GODREJ PRODUCTS CATALOG ---
const DEFAULT_PRODUCTS = [
  {
    "id": "prod-1",
    "name": "Goodknight Gold Flash Mosquito Vapouriser Machine + 1 Refill",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Advanced automatic mosquito liquid vaporiser machine with flash mode and active refill",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 120,
    "distPrice": 109,
    "wholesalePrice": 119.9,
    "retailPrice": 120,
    "unitType": "Box",
    "weight": "1 Kit",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000001",
    "sku": "GCPL-GK-001",
    "stock": 31,
    "minStock": 6,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40189047_1-good-knight-gold-flash-mosquito-vapouriser-machine-refill.jpg"
  },
  {
    "id": "prod-2",
    "name": "Goodknight Gold Flash Mosquito Liquid Refill",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Gold flash liquid vaporizer refill for high efficacy protection against mosquitoes",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 90,
    "distPrice": 85,
    "wholesalePrice": 90,
    "retailPrice": 90,
    "unitType": "Box",
    "weight": "45 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000002",
    "sku": "GCPL-GK-002",
    "stock": 32,
    "minStock": 6,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40189048_1-good-knight-gold-flash-mosquito-vapouriser-refill.jpg"
  },
  {
    "id": "prod-3",
    "name": "Goodknight Gold Flash Liquid Refill (Pack of 2)",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Double saver pack of gold flash liquid vaporizer refills for continuous safety",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 175,
    "distPrice": 160,
    "wholesalePrice": 175,
    "retailPrice": 175,
    "unitType": "Box",
    "weight": "2 x 45 ml",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000003",
    "sku": "GCPL-GK-003",
    "stock": 33,
    "minStock": 6,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40189049_1-good-knight-gold-flash-mosquito-vapouriser-refill-pack-of-2.jpg"
  },
  {
    "id": "prod-4",
    "name": "Goodknight Gold Flash Liquid Refill (Pack of 3)",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Triple saver family pack of gold flash liquid refills",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 250,
    "distPrice": 230,
    "wholesalePrice": 250,
    "retailPrice": 250,
    "unitType": "Box",
    "weight": "3 x 45 ml",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000004",
    "sku": "GCPL-GK-004",
    "stock": 34,
    "minStock": 6,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40189050_1-good-knight-gold-flash-mosquito-vapouriser-refill-pack-of-3.jpg"
  },
  {
    "id": "prod-5",
    "name": "Goodknight Gold Flash Liquid Refill (Pack of 4)",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Super saver box containing 4 gold flash refills",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 320,
    "distPrice": 295,
    "wholesalePrice": 320,
    "retailPrice": 320,
    "unitType": "Box",
    "weight": "4 x 45 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000005",
    "sku": "GCPL-GK-005",
    "stock": 35,
    "minStock": 7,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40189051_1-good-knight-gold-flash-mosquito-vapouriser-refill-pack-of-4.jpg"
  },
  {
    "id": "prod-6",
    "name": "Goodknight Gold Flash Liquid Refill (Pack of 6)",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Mega bumper box containing 6 gold flash refills for complete season protection",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 470,
    "distPrice": 430,
    "wholesalePrice": 470,
    "retailPrice": 470,
    "unitType": "Box",
    "weight": "6 x 45 ml",
    "boxQty": 12,
    "pieceQty": 1,
    "barcode": "8901157000006",
    "sku": "GCPL-GK-006",
    "stock": 36,
    "minStock": 7,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40189052_1-good-knight-gold-flash-mosquito-vapouriser-refill-pack-of-6.jpg"
  },
  {
    "id": "prod-7",
    "name": "Goodknight Power Activ+ Liquid Vapouriser Machine + 1 Refill",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Dual-mode mosquito repellent machine with power activ+ advanced formula",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 100,
    "distPrice": 89,
    "wholesalePrice": 97.9,
    "retailPrice": 100,
    "unitType": "Box",
    "weight": "1 Kit",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000007",
    "sku": "GCPL-GK-007",
    "stock": 37,
    "minStock": 7,
    "image": "https://www.bigbasket.com/media/uploads/p/l/266511_10-good-knight-power-activ-mosquito-liquid-vapouriser.jpg"
  },
  {
    "id": "prod-8",
    "name": "Goodknight Power Activ+ Liquid Refill",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Standard dual-mode power activ+ refill for complete household protection",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 85,
    "distPrice": 78,
    "wholesalePrice": 85,
    "retailPrice": 85,
    "unitType": "Box",
    "weight": "45 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000008",
    "sku": "GCPL-GK-008",
    "stock": 38,
    "minStock": 7,
    "image": "https://www.bigbasket.com/media/uploads/p/l/266512_10-good-knight-power-activ-mosquito-liquid-vapouriser-refill.jpg"
  },
  {
    "id": "prod-9",
    "name": "Goodknight Power Activ+ Liquid Refill (Pack of 2)",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Twin pack of power activ+ liquid refills with dual active action",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 160,
    "distPrice": 148,
    "wholesalePrice": 160,
    "retailPrice": 160,
    "unitType": "Box",
    "weight": "2 x 45 ml",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000009",
    "sku": "GCPL-GK-009",
    "stock": 39,
    "minStock": 7,
    "image": "https://www.bigbasket.com/media/uploads/p/l/266513_10-good-knight-power-activ-mosquito-liquid-vapouriser-refill-pack-of-2.jpg"
  },
  {
    "id": "prod-10",
    "name": "Goodknight Power Activ+ Liquid Refill (Pack of 3)",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Value triple pack of power activ+ liquid refills",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 230,
    "distPrice": 210,
    "wholesalePrice": 230,
    "retailPrice": 230,
    "unitType": "Box",
    "weight": "3 x 45 ml",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000010",
    "sku": "GCPL-GK-010",
    "stock": 40,
    "minStock": 8,
    "image": "https://www.bigbasket.com/media/uploads/p/l/266514_10-good-knight-power-activ-mosquito-liquid-vapouriser-refill-pack-of-3.jpg"
  },
  {
    "id": "prod-11",
    "name": "Goodknight Power Activ+ Liquid Refill (Pack of 4)",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Value-driven pack of four power activ+ dual refills",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 295,
    "distPrice": 270,
    "wholesalePrice": 295,
    "retailPrice": 295,
    "unitType": "Box",
    "weight": "4 x 45 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000011",
    "sku": "GCPL-GK-011",
    "stock": 41,
    "minStock": 8,
    "image": "https://www.bigbasket.com/media/uploads/p/l/266515_10-good-knight-power-activ-mosquito-liquid-vapouriser-refill-pack-of-4.jpg"
  },
  {
    "id": "prod-12",
    "name": "Goodknight Power Activ+ Liquid Refill (Pack of 6)",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Season bulk saver box containing six power activ+ refills",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 430,
    "distPrice": 390,
    "wholesalePrice": 429,
    "retailPrice": 430,
    "unitType": "Box",
    "weight": "6 x 45 ml",
    "boxQty": 12,
    "pieceQty": 1,
    "barcode": "8901157000012",
    "sku": "GCPL-GK-012",
    "stock": 42,
    "minStock": 8,
    "image": "https://www.bigbasket.com/media/uploads/p/l/266516_10-good-knight-power-activ-mosquito-liquid-vapouriser-refill-pack-of-6.jpg"
  },
  {
    "id": "prod-13",
    "name": "Goodknight Fast Card Mosquito Repellent",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Instant action 3-minute paper mosquito card repellent",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 15,
    "distPrice": 15,
    "wholesalePrice": 15,
    "retailPrice": 15,
    "unitType": "Box",
    "weight": "10 Cards",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000013",
    "sku": "GCPL-GK-013",
    "stock": 43,
    "minStock": 8,
    "image": "https://www.bigbasket.com/media/uploads/p/l/266514_2-good-knight-fast-card.jpg"
  },
  {
    "id": "prod-14",
    "name": "Goodknight Fast Card Mosquito Repellent (Pack of 2)",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Twin pack of instant action 3-minute paper cards",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 30,
    "distPrice": 28,
    "wholesalePrice": 30,
    "retailPrice": 30,
    "unitType": "Box",
    "weight": "20 Cards",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000014",
    "sku": "GCPL-GK-014",
    "stock": 44,
    "minStock": 8,
    "image": "https://www.bigbasket.com/media/uploads/p/l/266515_2-good-knight-fast-card-pack-of-2.jpg"
  },
  {
    "id": "prod-15",
    "name": "Goodknight Fast Card Mosquito Repellent (Pack of 5)",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Multi-pack of five 10-card booklets for long lasting protection",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 75,
    "distPrice": 70,
    "wholesalePrice": 75,
    "retailPrice": 75,
    "unitType": "Box",
    "weight": "50 Cards",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000015",
    "sku": "GCPL-GK-015",
    "stock": 45,
    "minStock": 9,
    "image": "https://www.bigbasket.com/media/uploads/p/l/266516_2-good-knight-fast-card-pack-of-5.jpg"
  },
  {
    "id": "prod-16",
    "name": "Goodknight Maha Jumbo Mosquito Coil",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "12-hour protection low smoke red coil against mosquitoes",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 38,
    "distPrice": 36,
    "wholesalePrice": 38,
    "retailPrice": 38,
    "unitType": "Box",
    "weight": "10 Coils",
    "boxQty": 60,
    "pieceQty": 1,
    "barcode": "8901157000016",
    "sku": "GCPL-GK-016",
    "stock": 46,
    "minStock": 9,
    "image": "https://www.bigbasket.com/media/uploads/p/l/102854_8-good-knight-maha-jumbo-coil.jpg"
  },
  {
    "id": "prod-17",
    "name": "Goodknight Maha Jumbo Mosquito Coil (Pack of 2)",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Double pack of 12-hour low smoke coils for outdoor and indoor use",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 76,
    "distPrice": 70,
    "wholesalePrice": 76,
    "retailPrice": 76,
    "unitType": "Box",
    "weight": "20 Coils",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000017",
    "sku": "GCPL-GK-017",
    "stock": 47,
    "minStock": 9,
    "image": "https://www.bigbasket.com/media/uploads/p/l/102855_8-good-knight-maha-jumbo-coil-pack-of-2.jpg"
  },
  {
    "id": "prod-18",
    "name": "Goodknight Low Smoke Mosquito Coil",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Anti-mosquito spiral coil designed to emit 80% less smoke",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 35,
    "distPrice": 33,
    "wholesalePrice": 35,
    "retailPrice": 35,
    "unitType": "Box",
    "weight": "10 Coils",
    "boxQty": 60,
    "pieceQty": 1,
    "barcode": "8901157000018",
    "sku": "GCPL-GK-018",
    "stock": 48,
    "minStock": 9,
    "image": "https://www.bigbasket.com/media/uploads/p/l/102856_8-good-knight-low-smoke-coil.jpg"
  },
  {
    "id": "prod-19",
    "name": "Goodknight Low Smoke Mosquito Coil (Pack of 5)",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Bumper pack of 50 low smoke mosquito coils for clean air",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 175,
    "distPrice": 160,
    "wholesalePrice": 175,
    "retailPrice": 175,
    "unitType": "Box",
    "weight": "50 Coils",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000019",
    "sku": "GCPL-GK-019",
    "stock": 49,
    "minStock": 9,
    "image": "https://www.bigbasket.com/media/uploads/p/l/102857_8-good-knight-low-smoke-coil-pack-of-5.jpg"
  },
  {
    "id": "prod-20",
    "name": "Goodknight Activ+ Lavender Scented Mosquito Coil",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Mosquito coils infused with refreshing lavender fragrance for dynamic aroma",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 40,
    "distPrice": 38,
    "wholesalePrice": 40,
    "retailPrice": 40,
    "unitType": "Box",
    "weight": "10 Coils",
    "boxQty": 60,
    "pieceQty": 1,
    "barcode": "8901157000020",
    "sku": "GCPL-GK-020",
    "stock": 50,
    "minStock": 10,
    "image": "https://www.bigbasket.com/media/uploads/p/l/102858_8-good-knight-lavender-coil.jpg"
  },
  {
    "id": "prod-21",
    "name": "Goodknight Activ+ Jasmine Scented Mosquito Coil",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Mosquito coils infused with rich jasmine floral scent",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 40,
    "distPrice": 38,
    "wholesalePrice": 40,
    "retailPrice": 40,
    "unitType": "Box",
    "weight": "10 Coils",
    "boxQty": 60,
    "pieceQty": 1,
    "barcode": "8901157000021",
    "sku": "GCPL-GK-021",
    "stock": 51,
    "minStock": 10,
    "image": "https://www.bigbasket.com/media/uploads/p/l/102859_8-good-knight-jasmine-coil.jpg"
  },
  {
    "id": "prod-22",
    "name": "Goodknight Fabric Roll-On Citrus Fragrance",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Personal Repellents",
    "desc": "100% natural personal repellent roll-on with fresh citrus fragrance",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 75,
    "distPrice": 70,
    "wholesalePrice": 75,
    "retailPrice": 75,
    "unitType": "Box",
    "weight": "8 ml",
    "boxQty": 48,
    "pieceQty": 1,
    "barcode": "8901157000022",
    "sku": "GCPL-GK-022",
    "stock": 52,
    "minStock": 10,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118314_1-good-knight-fabric-roll-on-citrus.jpg"
  },
  {
    "id": "prod-23",
    "name": "Goodknight Fabric Roll-On Mild Bloom Fragrance",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Personal Repellents",
    "desc": "Pediatrician certified fabric roll-on with soft floral scent",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 75,
    "distPrice": 70,
    "wholesalePrice": 75,
    "retailPrice": 75,
    "unitType": "Box",
    "weight": "8 ml",
    "boxQty": 48,
    "pieceQty": 1,
    "barcode": "8901157000023",
    "sku": "GCPL-GK-023",
    "stock": 53,
    "minStock": 10,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118315_1-good-knight-fabric-roll-on-mild-bloom.jpg"
  },
  {
    "id": "prod-24",
    "name": "Goodknight Fabric Roll-On Citrus Fragrance (Pack of 2)",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Personal Repellents",
    "desc": "Twin pack of citrus fabric roll-ons for dual outdoor shield",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 150,
    "distPrice": 135,
    "wholesalePrice": 148.5,
    "retailPrice": 150,
    "unitType": "Box",
    "weight": "2 x 8 ml",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000024",
    "sku": "GCPL-GK-024",
    "stock": 54,
    "minStock": 10,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118316_1-good-knight-fabric-roll-on-citrus-pack-of-2.jpg"
  },
  {
    "id": "prod-25",
    "name": "Goodknight Fabric Roll-On Mild Bloom (Pack of 2)",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Personal Repellents",
    "desc": "Twin pack of floral mild bloom fabric roll-ons",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 150,
    "distPrice": 135,
    "wholesalePrice": 148.5,
    "retailPrice": 150,
    "unitType": "Box",
    "weight": "2 x 8 ml",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000025",
    "sku": "GCPL-GK-025",
    "stock": 55,
    "minStock": 11,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118317_1-good-knight-fabric-roll-on-mild-bloom-pack-of-2.jpg"
  },
  {
    "id": "prod-26",
    "name": "Goodknight Fabric Roll-On Citrus Fragrance Large",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Personal Repellents",
    "desc": "Standard large capacity citrus fabric roll-on",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 120,
    "distPrice": 110,
    "wholesalePrice": 120,
    "retailPrice": 120,
    "unitType": "Box",
    "weight": "15 ml",
    "boxQty": 48,
    "pieceQty": 1,
    "barcode": "8901157000026",
    "sku": "GCPL-GK-026",
    "stock": 56,
    "minStock": 11,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118318_1-good-knight-fabric-roll-on-citrus-15ml.jpg"
  },
  {
    "id": "prod-27",
    "name": "Goodknight Fabric Roll-On Mild Bloom Fragrance Large",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Personal Repellents",
    "desc": "Standard large capacity floral fabric roll-on",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 120,
    "distPrice": 110,
    "wholesalePrice": 120,
    "retailPrice": 120,
    "unitType": "Box",
    "weight": "15 ml",
    "boxQty": 48,
    "pieceQty": 1,
    "barcode": "8901157000027",
    "sku": "GCPL-GK-027",
    "stock": 57,
    "minStock": 11,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118319_1-good-knight-fabric-roll-on-mild-bloom-15ml.jpg"
  },
  {
    "id": "prod-28",
    "name": "Goodknight Mosquito Repellent Patches (Pack of 10)",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Personal Repellents",
    "desc": "100% natural mosquito repellent patches designed with cartoon characters for kids",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 40,
    "distPrice": 38,
    "wholesalePrice": 40,
    "retailPrice": 40,
    "unitType": "Box",
    "weight": "10 Patches",
    "boxQty": 48,
    "pieceQty": 1,
    "barcode": "8901157000028",
    "sku": "GCPL-GK-028",
    "stock": 58,
    "minStock": 11,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121112_1-good-knight-patches-pack-of-10.jpg"
  },
  {
    "id": "prod-29",
    "name": "Goodknight Mosquito Repellent Patches (Pack of 24)",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Personal Repellents",
    "desc": "Family pack of natural mosquito patches",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 90,
    "distPrice": 82,
    "wholesalePrice": 90,
    "retailPrice": 90,
    "unitType": "Box",
    "weight": "24 Patches",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000029",
    "sku": "GCPL-GK-029",
    "stock": 59,
    "minStock": 11,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121113_1-good-knight-patches-pack-of-24.jpg"
  },
  {
    "id": "prod-30",
    "name": "Goodknight Mosquito Repellent Patches (Pack of 50)",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Personal Repellents",
    "desc": "Bulk box of mosquito repellent patches",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 180,
    "distPrice": 160,
    "wholesalePrice": 176,
    "retailPrice": 180,
    "unitType": "Box",
    "weight": "50 Patches",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000030",
    "sku": "GCPL-GK-030",
    "stock": 60,
    "minStock": 12,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121114_1-good-knight-patches-pack-of-50.jpg"
  },
  {
    "id": "prod-31",
    "name": "Goodknight Cool Gel Mosquito Repellent",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Personal Repellents",
    "desc": "Non-sticky personal repellent gel with aloe vera extract",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 75,
    "distPrice": 70,
    "wholesalePrice": 75,
    "retailPrice": 75,
    "unitType": "Box",
    "weight": "50 g",
    "boxQty": 48,
    "pieceQty": 1,
    "barcode": "8901157000031",
    "sku": "GCPL-GK-031",
    "stock": 61,
    "minStock": 12,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118312_1-good-knight-cool-gel-aloe-vera.jpg"
  },
  {
    "id": "prod-32",
    "name": "Goodknight Cool Gel Mosquito Repellent Tube",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Personal Repellents",
    "desc": "Large size non-sticky aloe vera personal repellent gel",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 140,
    "distPrice": 125,
    "wholesalePrice": 137.5,
    "retailPrice": 140,
    "unitType": "Box",
    "weight": "100 g",
    "boxQty": 48,
    "pieceQty": 1,
    "barcode": "8901157000032",
    "sku": "GCPL-GK-032",
    "stock": 62,
    "minStock": 12,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118313_1-good-knight-cool-gel-aloe-vera-100g.jpg"
  },
  {
    "id": "prod-33",
    "name": "Goodknight Mosquito Repellent Cream Classic",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Personal Repellents",
    "desc": "Skin-friendly cream base outdoor personal protection",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 65,
    "distPrice": 60,
    "wholesalePrice": 65,
    "retailPrice": 65,
    "unitType": "Box",
    "weight": "50 g",
    "boxQty": 48,
    "pieceQty": 1,
    "barcode": "8901157000033",
    "sku": "GCPL-GK-033",
    "stock": 63,
    "minStock": 12,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118314_1-good-knight-repellent-cream.jpg"
  },
  {
    "id": "prod-34",
    "name": "Goodknight Mosquito Repellent Cream Classic Tube",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Personal Repellents",
    "desc": "Skin-safe repellent cream with pleasant fragrance in large tube",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 120,
    "distPrice": 108,
    "wholesalePrice": 118.8,
    "retailPrice": 120,
    "unitType": "Box",
    "weight": "100 g",
    "boxQty": 48,
    "pieceQty": 1,
    "barcode": "8901157000034",
    "sku": "GCPL-GK-034",
    "stock": 64,
    "minStock": 12,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118315_1-good-knight-repellent-cream-100g.jpg"
  },
  {
    "id": "prod-35",
    "name": "Goodknight Naturals Neem Mosquito Repellent Spray",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "100% plant-based anti-mosquito aerosol room spray with active neem",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 110,
    "distPrice": 99,
    "wholesalePrice": 108.9,
    "retailPrice": 110,
    "unitType": "Box",
    "weight": "150 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000035",
    "sku": "GCPL-GK-035",
    "stock": 65,
    "minStock": 13,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40204137_1-good-knight-naturals-neem-anti-fly-surface-spray.jpg"
  },
  {
    "id": "prod-36",
    "name": "Goodknight Naturals Neem Repellent Spray (Pack of 2)",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Twin saver pack of neem active indoor room sprays",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 220,
    "distPrice": 190,
    "wholesalePrice": 209,
    "retailPrice": 218.5,
    "unitType": "Box",
    "weight": "2 x 150 ml",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000036",
    "sku": "GCPL-GK-036",
    "stock": 66,
    "minStock": 13,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40204138_1-good-knight-naturals-neem-spray-pack-of-2.jpg"
  },
  {
    "id": "prod-37",
    "name": "Goodknight Mosquito Net Double Bed Classic Blue",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Mosquito Nets",
    "desc": "Premium polyester mesh foldable net with zipper for double bed",
    "hsn": "63049221",
    "gst": 18,
    "mrp": 999,
    "distPrice": 799,
    "wholesalePrice": 878.9,
    "retailPrice": 918.85,
    "unitType": "Box",
    "weight": "1 Unit",
    "boxQty": 12,
    "pieceQty": 1,
    "barcode": "8901157000037",
    "sku": "GCPL-GK-037",
    "stock": 67,
    "minStock": 13,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121115_1-good-knight-mosquito-net-double-blue.jpg"
  },
  {
    "id": "prod-38",
    "name": "Goodknight Mosquito Net Double Bed Classic Pink",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Mosquito Nets",
    "desc": "Pink foldable polyester mosquito net for double bed",
    "hsn": "63049221",
    "gst": 18,
    "mrp": 999,
    "distPrice": 799,
    "wholesalePrice": 878.9,
    "retailPrice": 918.85,
    "unitType": "Box",
    "weight": "1 Unit",
    "boxQty": 12,
    "pieceQty": 1,
    "barcode": "8901157000038",
    "sku": "GCPL-GK-038",
    "stock": 68,
    "minStock": 13,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121116_1-good-knight-mosquito-net-double-pink.jpg"
  },
  {
    "id": "prod-39",
    "name": "Goodknight Mosquito Net Single Bed Blue",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Mosquito Nets",
    "desc": "Single bed entry pop-up net for easy setup",
    "hsn": "63049221",
    "gst": 18,
    "mrp": 799,
    "distPrice": 599,
    "wholesalePrice": 658.9,
    "retailPrice": 688.85,
    "unitType": "Box",
    "weight": "1 Unit",
    "boxQty": 12,
    "pieceQty": 1,
    "barcode": "8901157000039",
    "sku": "GCPL-GK-039",
    "stock": 69,
    "minStock": 13,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121117_1-good-knight-mosquito-net-single-blue.jpg"
  },
  {
    "id": "prod-40",
    "name": "Goodknight Mosquito Net Single Bed Pink",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Mosquito Nets",
    "desc": "Single bed entry pop-up net in classic pink",
    "hsn": "63049221",
    "gst": 18,
    "mrp": 799,
    "distPrice": 599,
    "wholesalePrice": 658.9,
    "retailPrice": 688.85,
    "unitType": "Box",
    "weight": "1 Unit",
    "boxQty": 12,
    "pieceQty": 1,
    "barcode": "8901157000040",
    "sku": "GCPL-GK-040",
    "stock": 70,
    "minStock": 14,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121118_1-good-knight-mosquito-net-single-pink.jpg"
  },
  {
    "id": "prod-41",
    "name": "Goodknight Mosquito Net King Size Bed White",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Mosquito Nets",
    "desc": "Extra large white canopy net for king size beds",
    "hsn": "63049221",
    "gst": 18,
    "mrp": 1199,
    "distPrice": 949,
    "wholesalePrice": 1043.9,
    "retailPrice": 1091.35,
    "unitType": "Box",
    "weight": "1 Unit",
    "boxQty": 12,
    "pieceQty": 1,
    "barcode": "8901157000041",
    "sku": "GCPL-GK-041",
    "stock": 71,
    "minStock": 14,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121119_1-good-knight-mosquito-net-king-white.jpg"
  },
  {
    "id": "prod-42",
    "name": "Goodknight Mosquito Net King Size Bed Blue",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Mosquito Nets",
    "desc": "Extra large blue canopy net for king size beds",
    "hsn": "63049221",
    "gst": 18,
    "mrp": 1199,
    "distPrice": 949,
    "wholesalePrice": 1043.9,
    "retailPrice": 1091.35,
    "unitType": "Box",
    "weight": "1 Unit",
    "boxQty": 12,
    "pieceQty": 1,
    "barcode": "8901157000042",
    "sku": "GCPL-GK-042",
    "stock": 72,
    "minStock": 14,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121120_1-good-knight-mosquito-net-king-blue.jpg"
  },
  {
    "id": "prod-43",
    "name": "Goodknight Power Activ+ Scented Lavender Liquid Refill",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Lavender scented dual mode mosquito repellent liquid refill",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 90,
    "distPrice": 82,
    "wholesalePrice": 90,
    "retailPrice": 90,
    "unitType": "Box",
    "weight": "45 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000043",
    "sku": "GCPL-GK-043",
    "stock": 73,
    "minStock": 14,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121121_1-good-knight-power-activ-lavender-refill.jpg"
  },
  {
    "id": "prod-44",
    "name": "Goodknight Power Activ+ Scented Jasmine Liquid Refill",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Jasmine scented dual mode mosquito repellent liquid refill",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 90,
    "distPrice": 82,
    "wholesalePrice": 90,
    "retailPrice": 90,
    "unitType": "Box",
    "weight": "45 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000044",
    "sku": "GCPL-GK-044",
    "stock": 74,
    "minStock": 14,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121122_1-good-knight-power-activ-jasmine-refill.jpg"
  },
  {
    "id": "prod-45",
    "name": "Goodknight Smart Activ Mosquito Vapouriser Machine + 1 Refill",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Smart auto-sensor mosquito machine with dual activ speed control",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 130,
    "distPrice": 115,
    "wholesalePrice": 126.5,
    "retailPrice": 130,
    "unitType": "Box",
    "weight": "1 Kit",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000045",
    "sku": "GCPL-GK-045",
    "stock": 75,
    "minStock": 15,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121123_1-good-knight-smart-activ-machine.jpg"
  },
  {
    "id": "prod-46",
    "name": "Goodknight Smart Activ Mosquito Liquid Refill",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Refill for smart activ sensor mosquito machine",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 95,
    "distPrice": 88,
    "wholesalePrice": 95,
    "retailPrice": 95,
    "unitType": "Box",
    "weight": "45 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000046",
    "sku": "GCPL-GK-046",
    "stock": 76,
    "minStock": 15,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121124_1-good-knight-smart-activ-refill.jpg"
  },
  {
    "id": "prod-47",
    "name": "Goodknight Smart Activ Liquid Refill (Pack of 2)",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Twin saver pack of smart activ liquid refills",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 185,
    "distPrice": 165,
    "wholesalePrice": 181.5,
    "retailPrice": 185,
    "unitType": "Box",
    "weight": "2 x 45 ml",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000047",
    "sku": "GCPL-GK-047",
    "stock": 77,
    "minStock": 15,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121125_1-good-knight-smart-activ-refill-pack-of-2.jpg"
  },
  {
    "id": "prod-48",
    "name": "Goodknight Smart Activ Liquid Refill (Pack of 3)",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Value triple pack of smart activ liquid refills",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 265,
    "distPrice": 240,
    "wholesalePrice": 264,
    "retailPrice": 265,
    "unitType": "Box",
    "weight": "3 x 45 ml",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000048",
    "sku": "GCPL-GK-048",
    "stock": 78,
    "minStock": 15,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121126_1-good-knight-smart-activ-refill-pack-of-3.jpg"
  },
  {
    "id": "prod-49",
    "name": "Goodknight Gold Flash Mosquito Vapouriser Machine Only",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Standard replacement automatic machine for gold flash",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 70,
    "distPrice": 65,
    "wholesalePrice": 70,
    "retailPrice": 70,
    "unitType": "Box",
    "weight": "1 Unit",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000049",
    "sku": "GCPL-GK-049",
    "stock": 79,
    "minStock": 15,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40189053_1-good-knight-gold-flash-machine-only.jpg"
  },
  {
    "id": "prod-50",
    "name": "Goodknight Power Activ+ Machine Only",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Standard replacement dual mode machine for power activ+",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 55,
    "distPrice": 50,
    "wholesalePrice": 55,
    "retailPrice": 55,
    "unitType": "Box",
    "weight": "1 Unit",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000050",
    "sku": "GCPL-GK-050",
    "stock": 80,
    "minStock": 16,
    "image": "https://www.bigbasket.com/media/uploads/p/l/266517_10-good-knight-power-activ-machine-only.jpg"
  },
  {
    "id": "prod-51",
    "name": "Goodknight Jumbo Coil Neem Active",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Neem fortified slow burn jumbo mosquito repellent coil",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 36,
    "distPrice": 34,
    "wholesalePrice": 36,
    "retailPrice": 36,
    "unitType": "Box",
    "weight": "10 Coils",
    "boxQty": 60,
    "pieceQty": 1,
    "barcode": "8901157000051",
    "sku": "GCPL-GK-051",
    "stock": 81,
    "minStock": 16,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121127_1-good-knight-neem-coil.jpg"
  },
  {
    "id": "prod-52",
    "name": "Goodknight Jumbo Coil Neem Active (Pack of 2)",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Neem fortified coils twin pack for durable protection",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 72,
    "distPrice": 66,
    "wholesalePrice": 72,
    "retailPrice": 72,
    "unitType": "Box",
    "weight": "20 Coils",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000052",
    "sku": "GCPL-GK-052",
    "stock": 82,
    "minStock": 16,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121128_1-good-knight-neem-coil-pack-of-2.jpg"
  },
  {
    "id": "prod-53",
    "name": "Goodknight Fabric Roll-On Neem & Aloe",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Personal Repellents",
    "desc": "100% natural roll-on with neem and aloe extracts for soft fabrics",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 80,
    "distPrice": 75,
    "wholesalePrice": 80,
    "retailPrice": 80,
    "unitType": "Box",
    "weight": "8 ml",
    "boxQty": 48,
    "pieceQty": 1,
    "barcode": "8901157000053",
    "sku": "GCPL-GK-053",
    "stock": 83,
    "minStock": 16,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121129_1-good-knight-fabric-roll-on-neem-aloe.jpg"
  },
  {
    "id": "prod-54",
    "name": "Goodknight Fabric Roll-On Neem & Aloe (Pack of 2)",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Personal Repellents",
    "desc": "Twin pack of neem and aloe vera natural roll-ons",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 160,
    "distPrice": 145,
    "wholesalePrice": 159.5,
    "retailPrice": 160,
    "unitType": "Box",
    "weight": "2 x 8 ml",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000054",
    "sku": "GCPL-GK-054",
    "stock": 84,
    "minStock": 16,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121130_1-good-knight-fabric-roll-on-neem-aloe-pack-of-2.jpg"
  },
  {
    "id": "prod-55",
    "name": "Goodknight Fabric Roll-On Neem & Aloe Large",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Personal Repellents",
    "desc": "Standard large capacity neem-aloe natural roll-on",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 130,
    "distPrice": 118,
    "wholesalePrice": 129.8,
    "retailPrice": 130,
    "unitType": "Box",
    "weight": "15 ml",
    "boxQty": 48,
    "pieceQty": 1,
    "barcode": "8901157000055",
    "sku": "GCPL-GK-055",
    "stock": 85,
    "minStock": 17,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121131_1-good-knight-fabric-roll-on-neem-aloe-15ml.jpg"
  },
  {
    "id": "prod-56",
    "name": "Goodknight Gold Flash Lavender Machine + 1 Refill",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Gold flash automatic vaporiser machine with lavender refill",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 125,
    "distPrice": 112,
    "wholesalePrice": 123.2,
    "retailPrice": 125,
    "unitType": "Box",
    "weight": "1 Kit",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000056",
    "sku": "GCPL-GK-056",
    "stock": 86,
    "minStock": 17,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40189054_1-good-knight-gold-flash-lavender-machine-refill.jpg"
  },
  {
    "id": "prod-57",
    "name": "Goodknight Gold Flash Lavender Liquid Refill",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Lavender scented replacement gold flash liquid refill",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 95,
    "distPrice": 89,
    "wholesalePrice": 95,
    "retailPrice": 95,
    "unitType": "Box",
    "weight": "45 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000057",
    "sku": "GCPL-GK-057",
    "stock": 87,
    "minStock": 17,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40189055_1-good-knight-gold-flash-lavender-refill.jpg"
  },
  {
    "id": "prod-58",
    "name": "Goodknight Gold Flash Lavender Refill (Pack of 2)",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Twin pack of lavender scented gold flash liquid refills",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 185,
    "distPrice": 170,
    "wholesalePrice": 185,
    "retailPrice": 185,
    "unitType": "Box",
    "weight": "2 x 45 ml",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000058",
    "sku": "GCPL-GK-058",
    "stock": 88,
    "minStock": 17,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40189056_1-good-knight-gold-flash-lavender-refill-pack-of-2.jpg"
  },
  {
    "id": "prod-59",
    "name": "Goodknight Gold Flash Lavender Refill (Pack of 3)",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Triple pack of lavender scented gold flash liquid refills",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 270,
    "distPrice": 245,
    "wholesalePrice": 269.5,
    "retailPrice": 270,
    "unitType": "Box",
    "weight": "3 x 45 ml",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000059",
    "sku": "GCPL-GK-059",
    "stock": 89,
    "minStock": 17,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40189057_1-good-knight-gold-flash-lavender-refill-pack-of-3.jpg"
  },
  {
    "id": "prod-60",
    "name": "Goodknight Fast Card Mosquito Repellent Box",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Value box containing 10 booklets of 10 fast cards",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 150,
    "distPrice": 135,
    "wholesalePrice": 148.5,
    "retailPrice": 150,
    "unitType": "Box",
    "weight": "100 Cards",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000060",
    "sku": "GCPL-GK-060",
    "stock": 30,
    "minStock": 6,
    "image": "https://www.bigbasket.com/media/uploads/p/l/266518_2-good-knight-fast-card-box-100.jpg"
  },
  {
    "id": "prod-61",
    "name": "Goodknight Coil Stand Metal Base",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Sturdy heat-resistant metal coil stand for outdoor spirals",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 20,
    "distPrice": 18,
    "wholesalePrice": 19.8,
    "retailPrice": 20,
    "unitType": "Box",
    "weight": "1 Unit",
    "boxQty": 60,
    "pieceQty": 1,
    "barcode": "8901157000061",
    "sku": "GCPL-GK-061",
    "stock": 31,
    "minStock": 6,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121132_1-good-knight-coil-stand.jpg"
  },
  {
    "id": "prod-62",
    "name": "Goodknight Cool Gel Spray Personal Repellent",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Personal Repellents",
    "desc": "Convenient spray formulation of skin-safe cool gel",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 160,
    "distPrice": 145,
    "wholesalePrice": 159.5,
    "retailPrice": 160,
    "unitType": "Box",
    "weight": "100 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000062",
    "sku": "GCPL-GK-062",
    "stock": 32,
    "minStock": 6,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121133_1-good-knight-cool-gel-spray.jpg"
  },
  {
    "id": "prod-63",
    "name": "Goodknight Naturals Neem Repellent Coils",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "100% plant-based coils made with pure organic neem leaves",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 42,
    "distPrice": 39,
    "wholesalePrice": 42,
    "retailPrice": 42,
    "unitType": "Box",
    "weight": "10 Coils",
    "boxQty": 60,
    "pieceQty": 1,
    "barcode": "8901157000063",
    "sku": "GCPL-GK-063",
    "stock": 33,
    "minStock": 6,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40204139_1-good-knight-naturals-neem-coils.jpg"
  },
  {
    "id": "prod-64",
    "name": "Goodknight Naturals Neem Repellent Coils (Pack of 5)",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Value box of plant-based pure neem mosquito coils",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 210,
    "distPrice": 195,
    "wholesalePrice": 210,
    "retailPrice": 210,
    "unitType": "Box",
    "weight": "50 Coils",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000064",
    "sku": "GCPL-GK-064",
    "stock": 34,
    "minStock": 6,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40204140_1-good-knight-naturals-neem-coils-pack-of-5.jpg"
  },
  {
    "id": "prod-65",
    "name": "Goodknight Mosquito Net Double Bed Premium White",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Mosquito Nets",
    "desc": "Elegant white foldable mesh net with dual zippers",
    "hsn": "63049221",
    "gst": 18,
    "mrp": 1099,
    "distPrice": 899,
    "wholesalePrice": 988.9,
    "retailPrice": 1033.85,
    "unitType": "Box",
    "weight": "1 Unit",
    "boxQty": 12,
    "pieceQty": 1,
    "barcode": "8901157000065",
    "sku": "GCPL-GK-065",
    "stock": 35,
    "minStock": 7,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121134_1-good-knight-net-double-white.jpg"
  },
  {
    "id": "prod-66",
    "name": "Goodknight Mosquito Net Double Bed Premium Green",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Mosquito Nets",
    "desc": "High quality green foldable net for double beds",
    "hsn": "63049221",
    "gst": 18,
    "mrp": 1099,
    "distPrice": 899,
    "wholesalePrice": 988.9,
    "retailPrice": 1033.85,
    "unitType": "Box",
    "weight": "1 Unit",
    "boxQty": 12,
    "pieceQty": 1,
    "barcode": "8901157000066",
    "sku": "GCPL-GK-066",
    "stock": 36,
    "minStock": 7,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121135_1-good-knight-net-double-green.jpg"
  },
  {
    "id": "prod-67",
    "name": "Goodknight Mosquito Net Single Bed Premium White",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Mosquito Nets",
    "desc": "High quality white foldable net for single beds",
    "hsn": "63049221",
    "gst": 18,
    "mrp": 849,
    "distPrice": 649,
    "wholesalePrice": 713.9,
    "retailPrice": 746.35,
    "unitType": "Box",
    "weight": "1 Unit",
    "boxQty": 12,
    "pieceQty": 1,
    "barcode": "8901157000067",
    "sku": "GCPL-GK-067",
    "stock": 37,
    "minStock": 7,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121136_1-good-knight-net-single-white.jpg"
  },
  {
    "id": "prod-68",
    "name": "Goodknight Mosquito Net Single Bed Premium Green",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Mosquito Nets",
    "desc": "High quality green foldable net for single beds",
    "hsn": "63049221",
    "gst": 18,
    "mrp": 849,
    "distPrice": 649,
    "wholesalePrice": 713.9,
    "retailPrice": 746.35,
    "unitType": "Box",
    "weight": "1 Unit",
    "boxQty": 12,
    "pieceQty": 1,
    "barcode": "8901157000068",
    "sku": "GCPL-GK-068",
    "stock": 38,
    "minStock": 7,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121137_1-good-knight-net-single-green.jpg"
  },
  {
    "id": "prod-69",
    "name": "Goodknight Power Activ+ Liquid Refill (Pack of 5)",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Value collection of 5 power activ+ liquid refills",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 365,
    "distPrice": 335,
    "wholesalePrice": 365,
    "retailPrice": 365,
    "unitType": "Box",
    "weight": "5 x 45 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000069",
    "sku": "GCPL-GK-069",
    "stock": 39,
    "minStock": 7,
    "image": "https://www.bigbasket.com/media/uploads/p/l/266517_10-good-knight-power-activ-mosquito-liquid-vapouriser-refill-pack-of-5.jpg"
  },
  {
    "id": "prod-70",
    "name": "Goodknight Gold Flash Liquid Refill (Pack of 5)",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Value collection of 5 gold flash liquid refills",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 395,
    "distPrice": 365,
    "wholesalePrice": 395,
    "retailPrice": 395,
    "unitType": "Box",
    "weight": "5 x 45 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000070",
    "sku": "GCPL-GK-070",
    "stock": 40,
    "minStock": 8,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40189058_1-good-knight-gold-flash-mosquito-vapouriser-refill-pack-of-5.jpg"
  },
  {
    "id": "prod-71",
    "name": "Goodknight Mosquito Repellent Patches (Pack of 30)",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Personal Repellents",
    "desc": "Natural skin-safe clothes patches in medium pack",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 110,
    "distPrice": 99,
    "wholesalePrice": 108.9,
    "retailPrice": 110,
    "unitType": "Box",
    "weight": "30 Patches",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000071",
    "sku": "GCPL-GK-071",
    "stock": 41,
    "minStock": 8,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121138_1-good-knight-patches-pack-of-30.jpg"
  },
  {
    "id": "prod-72",
    "name": "Goodknight Cool Gel Spray (Pack of 2)",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Personal Repellents",
    "desc": "Double saving pack of personal repellent cool gel spray",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 320,
    "distPrice": 280,
    "wholesalePrice": 308,
    "retailPrice": 320,
    "unitType": "Box",
    "weight": "2 x 100 ml",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000072",
    "sku": "GCPL-GK-072",
    "stock": 42,
    "minStock": 8,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121139_1-good-knight-cool-gel-spray-pack-of-2.jpg"
  },
  {
    "id": "prod-73",
    "name": "Goodknight Fabric Roll-On Citrus (Pack of 3)",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Personal Repellents",
    "desc": "Triple protection value pack of citrus roll-on",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 225,
    "distPrice": 199,
    "wholesalePrice": 218.9,
    "retailPrice": 225,
    "unitType": "Box",
    "weight": "3 x 8 ml",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000073",
    "sku": "GCPL-GK-073",
    "stock": 43,
    "minStock": 8,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118320_1-good-knight-fabric-roll-on-citrus-pack-of-3.jpg"
  },
  {
    "id": "prod-74",
    "name": "Goodknight Fabric Roll-On Mild Bloom (Pack of 3)",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Personal Repellents",
    "desc": "Triple protection value pack of floral roll-on",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 225,
    "distPrice": 199,
    "wholesalePrice": 218.9,
    "retailPrice": 225,
    "unitType": "Box",
    "weight": "3 x 8 ml",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000074",
    "sku": "GCPL-GK-074",
    "stock": 44,
    "minStock": 8,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118321_1-good-knight-fabric-roll-on-mild-bloom-pack-of-3.jpg"
  },
  {
    "id": "prod-75",
    "name": "Goodknight Fabric Roll-On Neem-Aloe (Pack of 3)",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Personal Repellents",
    "desc": "Triple protection value pack of organic roll-on",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 240,
    "distPrice": 215,
    "wholesalePrice": 236.5,
    "retailPrice": 240,
    "unitType": "Box",
    "weight": "3 x 8 ml",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000075",
    "sku": "GCPL-GK-075",
    "stock": 45,
    "minStock": 9,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121140_1-good-knight-fabric-roll-on-neem-aloe-pack-of-3.jpg"
  },
  {
    "id": "prod-76",
    "name": "Goodknight Mosquito Repellent Cream Lavender",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Personal Repellents",
    "desc": "Personal protection cream infused with lavender extracts",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 70,
    "distPrice": 65,
    "wholesalePrice": 70,
    "retailPrice": 70,
    "unitType": "Box",
    "weight": "50 g",
    "boxQty": 48,
    "pieceQty": 1,
    "barcode": "8901157000076",
    "sku": "GCPL-GK-076",
    "stock": 46,
    "minStock": 9,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121141_1-good-knight-cream-lavender.jpg"
  },
  {
    "id": "prod-77",
    "name": "Goodknight Mosquito Repellent Cream Lavender Tube",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Personal Repellents",
    "desc": "Personal protection cream in large tube with lavender",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 130,
    "distPrice": 118,
    "wholesalePrice": 129.8,
    "retailPrice": 130,
    "unitType": "Box",
    "weight": "100 g",
    "boxQty": 48,
    "pieceQty": 1,
    "barcode": "8901157000077",
    "sku": "GCPL-GK-077",
    "stock": 47,
    "minStock": 9,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121142_1-good-knight-cream-lavender-100g.jpg"
  },
  {
    "id": "prod-78",
    "name": "Goodknight Smart Activ Lavender Vapouriser Machine + Refill",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Smart auto-sensor machine with lavender scented refill",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 135,
    "distPrice": 119,
    "wholesalePrice": 130.9,
    "retailPrice": 135,
    "unitType": "Box",
    "weight": "1 Kit",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000078",
    "sku": "GCPL-GK-078",
    "stock": 48,
    "minStock": 9,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121143_1-good-knight-smart-activ-lavender-machine.jpg"
  },
  {
    "id": "prod-79",
    "name": "Goodknight Smart Activ Lavender Liquid Refill",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Lavender scented replacement refill for smart machine",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 100,
    "distPrice": 92,
    "wholesalePrice": 100,
    "retailPrice": 100,
    "unitType": "Box",
    "weight": "45 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000079",
    "sku": "GCPL-GK-079",
    "stock": 49,
    "minStock": 9,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121144_1-good-knight-smart-activ-lavender-refill.jpg"
  },
  {
    "id": "prod-80",
    "name": "Goodknight Smart Activ Lavender Refill (Pack of 2)",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Twin pack of smart lavender active refills",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 195,
    "distPrice": 175,
    "wholesalePrice": 192.5,
    "retailPrice": 195,
    "unitType": "Box",
    "weight": "2 x 45 ml",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000080",
    "sku": "GCPL-GK-080",
    "stock": 50,
    "minStock": 10,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121145_1-good-knight-smart-activ-lavender-refill-pack-of-2.jpg"
  },
  {
    "id": "prod-81",
    "name": "Goodknight Smart Activ Lavender Refill (Pack of 3)",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Triple saver pack of smart lavender active refills",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 285,
    "distPrice": 255,
    "wholesalePrice": 280.5,
    "retailPrice": 285,
    "unitType": "Box",
    "weight": "3 x 45 ml",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000081",
    "sku": "GCPL-GK-081",
    "stock": 51,
    "minStock": 10,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121146_1-good-knight-smart-activ-lavender-refill-pack-of-3.jpg"
  },
  {
    "id": "prod-82",
    "name": "Goodknight Mosquito Repellent Patches (Pack of 12)",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Personal Repellents",
    "desc": "Introductory cartoon-design patch pack for infants",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 50,
    "distPrice": 45,
    "wholesalePrice": 49.5,
    "retailPrice": 50,
    "unitType": "Box",
    "weight": "12 Patches",
    "boxQty": 48,
    "pieceQty": 1,
    "barcode": "8901157000082",
    "sku": "GCPL-GK-082",
    "stock": 52,
    "minStock": 10,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121147_1-good-knight-patches-pack-of-12.jpg"
  },
  {
    "id": "prod-83",
    "name": "Goodknight Naturals Neem Liquid Vapouriser Machine + Refill",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "100% natural active botanical liquid mosquito machine",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 130,
    "distPrice": 115,
    "wholesalePrice": 126.5,
    "retailPrice": 130,
    "unitType": "Box",
    "weight": "1 Kit",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000083",
    "sku": "GCPL-GK-083",
    "stock": 53,
    "minStock": 10,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40204141_1-good-knight-naturals-neem-machine.jpg"
  },
  {
    "id": "prod-84",
    "name": "Goodknight Naturals Neem Liquid Vapouriser Refill",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Natural active organic botanical liquid vaporiser refill",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 95,
    "distPrice": 88,
    "wholesalePrice": 95,
    "retailPrice": 95,
    "unitType": "Box",
    "weight": "45 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000084",
    "sku": "GCPL-GK-084",
    "stock": 54,
    "minStock": 10,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40204142_1-good-knight-naturals-neem-liquid-refill.jpg"
  },
  {
    "id": "prod-85",
    "name": "Goodknight Naturals Neem Liquid Refill (Pack of 2)",
    "brand": "Goodknight",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Twin pack of natural active plant-based liquid refills",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 185,
    "distPrice": 165,
    "wholesalePrice": 181.5,
    "retailPrice": 185,
    "unitType": "Box",
    "weight": "2 x 45 ml",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000085",
    "sku": "GCPL-GK-085",
    "stock": 55,
    "minStock": 11,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40204143_1-good-knight-naturals-neem-liquid-refill-pack-of-2.jpg"
  },
  {
    "id": "prod-86",
    "name": "Kala HIT Flying Insect Killer Spray",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Aerosol spray instantly kills flying mosquitoes and flies",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 75,
    "distPrice": 70,
    "wholesalePrice": 75,
    "retailPrice": 75,
    "unitType": "Box",
    "weight": "150 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000086",
    "sku": "GCPL-HT-086",
    "stock": 56,
    "minStock": 11,
    "image": "https://www.bigbasket.com/media/uploads/p/l/120281_10-hit-flying-insect-killer-kala-hit.jpg"
  },
  {
    "id": "prod-87",
    "name": "Kala HIT Flying Insect Killer Spray Medium",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Standard household black aerosol spray for indoor application",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 150,
    "distPrice": 138,
    "wholesalePrice": 150,
    "retailPrice": 150,
    "unitType": "Box",
    "weight": "320 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000087",
    "sku": "GCPL-HT-087",
    "stock": 57,
    "minStock": 11,
    "image": "https://www.bigbasket.com/media/uploads/p/l/120282_10-hit-flying-insect-killer-kala-hit-320ml.jpg"
  },
  {
    "id": "prod-88",
    "name": "Kala HIT Flying Insect Killer Spray Large",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Value-packed aerosol killer for indoor flying pests",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 195,
    "distPrice": 175,
    "wholesalePrice": 192.5,
    "retailPrice": 195,
    "unitType": "Box",
    "weight": "400 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000088",
    "sku": "GCPL-HT-088",
    "stock": 58,
    "minStock": 11,
    "image": "https://www.bigbasket.com/media/uploads/p/l/120283_10-hit-flying-insect-killer-kala-hit-400ml.jpg"
  },
  {
    "id": "prod-89",
    "name": "Kala HIT Flying Insect Killer Spray Jumbo",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Jumbo size kala hit for comprehensive long term household protection",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 295,
    "distPrice": 260,
    "wholesalePrice": 286,
    "retailPrice": 295,
    "unitType": "Box",
    "weight": "625 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000089",
    "sku": "GCPL-HT-089",
    "stock": 59,
    "minStock": 11,
    "image": "https://www.bigbasket.com/media/uploads/p/l/120284_10-hit-flying-insect-killer-kala-hit-625ml.jpg"
  },
  {
    "id": "prod-90",
    "name": "Kala HIT Flying Insect Killer Spray Lime Fragrance",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Black hit aerosol with refreshing lime mist base",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 155,
    "distPrice": 142,
    "wholesalePrice": 155,
    "retailPrice": 155,
    "unitType": "Box",
    "weight": "320 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000090",
    "sku": "GCPL-HT-090",
    "stock": 60,
    "minStock": 12,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40093845_1-hit-flying-insect-killer-lime.jpg"
  },
  {
    "id": "prod-91",
    "name": "Kala HIT Flying Insect Killer Spray Lime Large",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Large size lime scented mosquito and fly aerosol spray",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 200,
    "distPrice": 180,
    "wholesalePrice": 198,
    "retailPrice": 200,
    "unitType": "Box",
    "weight": "400 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000091",
    "sku": "GCPL-HT-091",
    "stock": 61,
    "minStock": 12,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40093846_1-hit-flying-insect-killer-lime-400ml.jpg"
  },
  {
    "id": "prod-92",
    "name": "Kala HIT Flying Insect Killer Spray Lime Jumbo",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Jumbo size lime scented flying insect aerosol",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 305,
    "distPrice": 270,
    "wholesalePrice": 297,
    "retailPrice": 305,
    "unitType": "Box",
    "weight": "625 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000092",
    "sku": "GCPL-HT-092",
    "stock": 62,
    "minStock": 12,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40093847_1-hit-flying-insect-killer-lime-625ml.jpg"
  },
  {
    "id": "prod-93",
    "name": "Lal HIT Cockroach Killer Spray",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Deep reach nozzle spray instantly kills crawling cockroaches",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 85,
    "distPrice": 78,
    "wholesalePrice": 85,
    "retailPrice": 85,
    "unitType": "Box",
    "weight": "150 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000093",
    "sku": "GCPL-HT-093",
    "stock": 63,
    "minStock": 12,
    "image": "https://www.bigbasket.com/media/uploads/p/l/107800_9-hit-cockroach-killer-spray.jpg"
  },
  {
    "id": "prod-94",
    "name": "Lal HIT Cockroach Killer Spray Medium",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Red aerosol spray with seek-and-kill nozzle extension",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 175,
    "distPrice": 160,
    "wholesalePrice": 175,
    "retailPrice": 175,
    "unitType": "Box",
    "weight": "320 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000094",
    "sku": "GCPL-HT-094",
    "stock": 64,
    "minStock": 12,
    "image": "https://www.bigbasket.com/media/uploads/p/l/107801_9-hit-cockroach-killer-spray-320ml.jpg"
  },
  {
    "id": "prod-95",
    "name": "Lal HIT Cockroach Killer Spray Large",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Standard deep reach cockroach killer aerosol",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 220,
    "distPrice": 198,
    "wholesalePrice": 217.8,
    "retailPrice": 220,
    "unitType": "Box",
    "weight": "400 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000095",
    "sku": "GCPL-HT-095",
    "stock": 65,
    "minStock": 13,
    "image": "https://www.bigbasket.com/media/uploads/p/l/107802_9-hit-cockroach-killer-spray-400ml.jpg"
  },
  {
    "id": "prod-96",
    "name": "Lal HIT Cockroach Killer Spray Jumbo",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Jumbo size लाल हिट spray for total home safety",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 325,
    "distPrice": 290,
    "wholesalePrice": 319,
    "retailPrice": 325,
    "unitType": "Box",
    "weight": "625 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000096",
    "sku": "GCPL-HT-096",
    "stock": 66,
    "minStock": 13,
    "image": "https://www.bigbasket.com/media/uploads/p/l/107803_9-hit-cockroach-killer-spray-625ml.jpg"
  },
  {
    "id": "prod-97",
    "name": "Lal HIT Cockroach Killer Spray Fresh Fragrance",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Crawling insect spray with mild fresh floral fragrance",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 180,
    "distPrice": 165,
    "wholesalePrice": 180,
    "retailPrice": 180,
    "unitType": "Box",
    "weight": "320 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000097",
    "sku": "GCPL-HT-097",
    "stock": 67,
    "minStock": 13,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40093848_1-hit-cockroach-killer-fresh.jpg"
  },
  {
    "id": "prod-98",
    "name": "Lal HIT Cockroach Killer Spray Fresh Large",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Large sized fresh scented cockroach aerosol killer",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 225,
    "distPrice": 205,
    "wholesalePrice": 225,
    "retailPrice": 225,
    "unitType": "Box",
    "weight": "400 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000098",
    "sku": "GCPL-HT-098",
    "stock": 68,
    "minStock": 13,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40093849_1-hit-cockroach-killer-fresh-400ml.jpg"
  },
  {
    "id": "prod-99",
    "name": "Lal HIT Cockroach Killer Spray Fresh Jumbo",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Jumbo fresh fragrance cockroach aerosol",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 330,
    "distPrice": 295,
    "wholesalePrice": 324.5,
    "retailPrice": 330,
    "unitType": "Box",
    "weight": "625 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000099",
    "sku": "GCPL-HT-099",
    "stock": 69,
    "minStock": 13,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40093850_1-hit-cockroach-killer-fresh-625ml.jpg"
  },
  {
    "id": "prod-100",
    "name": "HIT Anti-Roach Gel",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Odourless kitchen safe cockroach gel in easy applicator syringe",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 160,
    "distPrice": 145,
    "wholesalePrice": 159.5,
    "retailPrice": 160,
    "unitType": "Box",
    "weight": "20 g",
    "boxQty": 48,
    "pieceQty": 1,
    "barcode": "8901157000100",
    "sku": "GCPL-HT-100",
    "stock": 70,
    "minStock": 14,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40038221_1-hit-anti-roach-gel.jpg"
  },
  {
    "id": "prod-101",
    "name": "HIT Anti-Roach Gel (Pack of 2)",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Twin pack of odourless anti-roach nesting gel",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 320,
    "distPrice": 280,
    "wholesalePrice": 308,
    "retailPrice": 320,
    "unitType": "Box",
    "weight": "2 x 20 g",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000101",
    "sku": "GCPL-HT-101",
    "stock": 71,
    "minStock": 14,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40038222_1-hit-anti-roach-gel-pack-of-2.jpg"
  },
  {
    "id": "prod-102",
    "name": "HIT Rat Glue Board Medium",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Super strong stickiness rat glue pad for clean trap",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 90,
    "distPrice": 82,
    "wholesalePrice": 90,
    "retailPrice": 90,
    "unitType": "Box",
    "weight": "1 Unit",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000102",
    "sku": "GCPL-HT-102",
    "stock": 72,
    "minStock": 14,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118322_1-hit-rat-glue-board.jpg"
  },
  {
    "id": "prod-103",
    "name": "HIT Rat Glue Board Medium (Pack of 2)",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Twin pack of strong adhesive rat catch pads",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 180,
    "distPrice": 160,
    "wholesalePrice": 176,
    "retailPrice": 180,
    "unitType": "Box",
    "weight": "2 Units",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000103",
    "sku": "GCPL-HT-103",
    "stock": 73,
    "minStock": 14,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118323_1-hit-rat-glue-board-pack-of-2.jpg"
  },
  {
    "id": "prod-104",
    "name": "HIT Rat Glue Board Large",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Large book style foldout adhesive tray for heavy pests",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 130,
    "distPrice": 118,
    "wholesalePrice": 129.8,
    "retailPrice": 130,
    "unitType": "Box",
    "weight": "1 Unit",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000104",
    "sku": "GCPL-HT-104",
    "stock": 74,
    "minStock": 14,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118324_1-hit-rat-glue-board-large.jpg"
  },
  {
    "id": "prod-105",
    "name": "HIT Rat Glue Board Large (Pack of 2)",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Twin pack of large layout book style adhesive traps",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 260,
    "distPrice": 225,
    "wholesalePrice": 247.5,
    "retailPrice": 258.75,
    "unitType": "Box",
    "weight": "2 Units",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000105",
    "sku": "GCPL-HT-105",
    "stock": 75,
    "minStock": 15,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118325_1-hit-rat-glue-board-large-pack-of-2.jpg"
  },
  {
    "id": "prod-106",
    "name": "HIT Anti-Mosquito Racquet Classic",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "High voltage electric net insect racquet with long-life rechargeable battery",
    "hsn": "85437099",
    "gst": 18,
    "mrp": 499,
    "distPrice": 425,
    "wholesalePrice": 467.5,
    "retailPrice": 488.75,
    "unitType": "Box",
    "weight": "1 Unit",
    "boxQty": 10,
    "pieceQty": 1,
    "barcode": "8901157000106",
    "sku": "GCPL-HT-106",
    "stock": 76,
    "minStock": 15,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40191834_1-hit-anti-mosquito-racquet.jpg"
  },
  {
    "id": "prod-107",
    "name": "HIT Anti-Mosquito Racquet Premium with LED Light",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Insect racquet featuring built-in LED flashlight and charging base",
    "hsn": "85437099",
    "gst": 18,
    "mrp": 599,
    "distPrice": 499,
    "wholesalePrice": 548.9,
    "retailPrice": 573.85,
    "unitType": "Box",
    "weight": "1 Unit",
    "boxQty": 10,
    "pieceQty": 1,
    "barcode": "8901157000107",
    "sku": "GCPL-HT-107",
    "stock": 77,
    "minStock": 15,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40191835_1-hit-anti-mosquito-racquet-led.jpg"
  },
  {
    "id": "prod-108",
    "name": "HIT Chalk for Cockroaches & Ants",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Insecticidal draw-on chalk line trap",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 20,
    "distPrice": 18,
    "wholesalePrice": 19.8,
    "retailPrice": 20,
    "unitType": "Box",
    "weight": "1 Unit",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000108",
    "sku": "GCPL-HT-108",
    "stock": 78,
    "minStock": 15,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121148_1-hit-chalk.jpg"
  },
  {
    "id": "prod-109",
    "name": "HIT Chalk for Cockroaches & Ants (Pack of 2)",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Twin pack draw-on insecticide chalks",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 40,
    "distPrice": 35,
    "wholesalePrice": 38.5,
    "retailPrice": 40,
    "unitType": "Box",
    "weight": "2 Units",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000109",
    "sku": "GCPL-HT-109",
    "stock": 79,
    "minStock": 15,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121149_1-hit-chalk-pack-of-2.jpg"
  },
  {
    "id": "prod-110",
    "name": "HIT Food Safe Fly Spray",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Odourless aerosol spray safe to use in dining and kitchen spaces",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 115,
    "distPrice": 105,
    "wholesalePrice": 115,
    "retailPrice": 115,
    "unitType": "Box",
    "weight": "150 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000110",
    "sku": "GCPL-HT-110",
    "stock": 80,
    "minStock": 16,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121150_1-hit-food-safe-fly-spray.jpg"
  },
  {
    "id": "prod-111",
    "name": "HIT Food Safe Fly Spray Medium",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Standard safe formulation fly killer for food spaces",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 220,
    "distPrice": 199,
    "wholesalePrice": 218.9,
    "retailPrice": 220,
    "unitType": "Box",
    "weight": "320 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000111",
    "sku": "GCPL-HT-111",
    "stock": 81,
    "minStock": 16,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121151_1-hit-food-safe-fly-spray-320ml.jpg"
  },
  {
    "id": "prod-112",
    "name": "Lal HIT Crawling Insect Spray Super Nozzle",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Maximum reach nozzle crawling insect killer aerosol",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 360,
    "distPrice": 315,
    "wholesalePrice": 346.5,
    "retailPrice": 360,
    "unitType": "Box",
    "weight": "700 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000112",
    "sku": "GCPL-HT-112",
    "stock": 82,
    "minStock": 16,
    "image": "https://www.bigbasket.com/media/uploads/p/l/107804_9-hit-cockroach-killer-spray-700ml.jpg"
  },
  {
    "id": "prod-113",
    "name": "Kala HIT Flying Insect Spray Super Nozzle",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Maximum capacity flying insect aerosol spray",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 330,
    "distPrice": 295,
    "wholesalePrice": 324.5,
    "retailPrice": 330,
    "unitType": "Box",
    "weight": "700 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000113",
    "sku": "GCPL-HT-113",
    "stock": 83,
    "minStock": 16,
    "image": "https://www.bigbasket.com/media/uploads/p/l/120285_10-hit-flying-insect-killer-700ml.jpg"
  },
  {
    "id": "prod-114",
    "name": "Lal HIT Cockroach Killer Spray Twin Pack",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Twin saving aerosol box of لال हिट crawling spray",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 350,
    "distPrice": 310,
    "wholesalePrice": 341,
    "retailPrice": 350,
    "unitType": "Box",
    "weight": "2 x 320 ml",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000114",
    "sku": "GCPL-HT-114",
    "stock": 84,
    "minStock": 16,
    "image": "https://www.bigbasket.com/media/uploads/p/l/107805_9-hit-cockroach-killer-spray-pack-of-2.jpg"
  },
  {
    "id": "prod-115",
    "name": "Kala HIT Flying Insect Spray Twin Pack",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Twin saving aerosol box of kala hit flying spray",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 300,
    "distPrice": 265,
    "wholesalePrice": 291.5,
    "retailPrice": 300,
    "unitType": "Box",
    "weight": "2 x 320 ml",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000115",
    "sku": "GCPL-HT-115",
    "stock": 85,
    "minStock": 17,
    "image": "https://www.bigbasket.com/media/uploads/p/l/120286_10-hit-flying-insect-killer-pack-of-2.jpg"
  },
  {
    "id": "prod-116",
    "name": "HIT Rat Glue Board Small (Pack of 3)",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Triple pack of small mouse trap adhesive pads",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 150,
    "distPrice": 135,
    "wholesalePrice": 148.5,
    "retailPrice": 150,
    "unitType": "Box",
    "weight": "3 Units",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000116",
    "sku": "GCPL-HT-116",
    "stock": 86,
    "minStock": 17,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118326_1-hit-rat-glue-board-small.jpg"
  },
  {
    "id": "prod-117",
    "name": "HIT Chalk for Cockroaches & Ants (Pack of 5)",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Five pack bulk set of insect chalks",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 100,
    "distPrice": 88,
    "wholesalePrice": 96.8,
    "retailPrice": 100,
    "unitType": "Box",
    "weight": "5 Units",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000117",
    "sku": "GCPL-HT-117",
    "stock": 87,
    "minStock": 17,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121152_1-hit-chalk-pack-of-5.jpg"
  },
  {
    "id": "prod-118",
    "name": "HIT Bed Bug Aerosol Spray",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Targeted spray with strong contact formula for mattress protection",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 250,
    "distPrice": 225,
    "wholesalePrice": 247.5,
    "retailPrice": 250,
    "unitType": "Box",
    "weight": "320 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000118",
    "sku": "GCPL-HT-118",
    "stock": 88,
    "minStock": 17,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121153_1-hit-bed-bug-spray.jpg"
  },
  {
    "id": "prod-119",
    "name": "HIT Bed Bug Aerosol Spray Large",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Standard deep impact insecticide spray for bed bug control",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 310,
    "distPrice": 275,
    "wholesalePrice": 302.5,
    "retailPrice": 310,
    "unitType": "Box",
    "weight": "400 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000119",
    "sku": "GCPL-HT-119",
    "stock": 89,
    "minStock": 17,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121154_1-hit-bed-bug-spray-400ml.jpg"
  },
  {
    "id": "prod-120",
    "name": "HIT Food Safe Fly Spray Twin Pack",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Safe space insecticide spray dual pack",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 230,
    "distPrice": 205,
    "wholesalePrice": 225.5,
    "retailPrice": 230,
    "unitType": "Box",
    "weight": "2 x 150 ml",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000120",
    "sku": "GCPL-HT-120",
    "stock": 30,
    "minStock": 6,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121155_1-hit-food-safe-fly-spray-pack-of-2.jpg"
  },
  {
    "id": "prod-121",
    "name": "HIT Anti-Mosquito Racquet Classic (Pack of 2)",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Dual classic insect bats family saver set",
    "hsn": "85437099",
    "gst": 18,
    "mrp": 998,
    "distPrice": 820,
    "wholesalePrice": 902,
    "retailPrice": 943,
    "unitType": "Box",
    "weight": "2 Units",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000121",
    "sku": "GCPL-HT-121",
    "stock": 31,
    "minStock": 6,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40191836_1-hit-anti-mosquito-racquet-pack-of-2.jpg"
  },
  {
    "id": "prod-122",
    "name": "Lal HIT Cockroach Killer Spray 200ml",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Handy pocket size crawling pest spray",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 110,
    "distPrice": 99,
    "wholesalePrice": 108.9,
    "retailPrice": 110,
    "unitType": "Box",
    "weight": "200 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000122",
    "sku": "GCPL-HT-122",
    "stock": 32,
    "minStock": 6,
    "image": "https://www.bigbasket.com/media/uploads/p/l/107806_9-hit-cockroach-killer-spray-200ml.jpg"
  },
  {
    "id": "prod-123",
    "name": "Kala HIT Flying Insect Killer Spray 200ml",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Handy pocket size flying mosquito spray",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 95,
    "distPrice": 88,
    "wholesalePrice": 95,
    "retailPrice": 95,
    "unitType": "Box",
    "weight": "200 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000123",
    "sku": "GCPL-HT-123",
    "stock": 33,
    "minStock": 6,
    "image": "https://www.bigbasket.com/media/uploads/p/l/120287_10-hit-flying-insect-killer-200ml.jpg"
  },
  {
    "id": "prod-124",
    "name": "HIT Roach Gel Family Box",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Three syringe bundle for total nesting control",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 480,
    "distPrice": 410,
    "wholesalePrice": 451,
    "retailPrice": 471.5,
    "unitType": "Box",
    "weight": "3 x 20 g",
    "boxQty": 48,
    "pieceQty": 1,
    "barcode": "8901157000124",
    "sku": "GCPL-HT-124",
    "stock": 34,
    "minStock": 6,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40038223_1-hit-anti-roach-gel-pack-of-3.jpg"
  },
  {
    "id": "prod-125",
    "name": "HIT Rat Glue Board Extra Large Book",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Heavy-duty folding book trap for professional rodent pest control",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 180,
    "distPrice": 160,
    "wholesalePrice": 176,
    "retailPrice": 180,
    "unitType": "Box",
    "weight": "1 Unit",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000125",
    "sku": "GCPL-HT-125",
    "stock": 35,
    "minStock": 7,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118327_1-hit-rat-glue-board-xl.jpg"
  },
  {
    "id": "prod-126",
    "name": "HIT Crawling Insect Killer Chalk Red Line",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Extra active red line drawing chemical chalk",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 25,
    "distPrice": 22,
    "wholesalePrice": 24.2,
    "retailPrice": 25,
    "unitType": "Box",
    "weight": "1 Unit",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000126",
    "sku": "GCPL-HT-126",
    "stock": 36,
    "minStock": 7,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121156_1-hit-chalk-red-line.jpg"
  },
  {
    "id": "prod-127",
    "name": "HIT Crawling Insect Killer Chalk Red Line (Pack of 2)",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Dual pack red line active drawing chalks",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 50,
    "distPrice": 42,
    "wholesalePrice": 46.2,
    "retailPrice": 48.3,
    "unitType": "Box",
    "weight": "2 Units",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000127",
    "sku": "GCPL-HT-127",
    "stock": 37,
    "minStock": 7,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121157_1-hit-chalk-red-line-pack-of-2.jpg"
  },
  {
    "id": "prod-128",
    "name": "HIT Cockroach Bait Stations (Pack of 4)",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Plastic protective bait discs for clean cockroach control",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 140,
    "distPrice": 125,
    "wholesalePrice": 137.5,
    "retailPrice": 140,
    "unitType": "Box",
    "weight": "4 Baits",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000128",
    "sku": "GCPL-HT-128",
    "stock": 38,
    "minStock": 7,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121158_1-hit-bait-stations.jpg"
  },
  {
    "id": "prod-129",
    "name": "HIT Cockroach Bait Stations (Pack of 8)",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Value box with eight active cockroach bait stations",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 260,
    "distPrice": 230,
    "wholesalePrice": 253,
    "retailPrice": 260,
    "unitType": "Box",
    "weight": "8 Baits",
    "boxQty": 12,
    "pieceQty": 1,
    "barcode": "8901157000129",
    "sku": "GCPL-HT-129",
    "stock": 39,
    "minStock": 7,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121159_1-hit-bait-stations-pack-of-8.jpg"
  },
  {
    "id": "prod-130",
    "name": "HIT Red Spray + Gel Kitchen Combi Pack",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Contains Red HIT Aerosol 320ml and Roach Gel 20g",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 335,
    "distPrice": 295,
    "wholesalePrice": 324.5,
    "retailPrice": 335,
    "unitType": "Box",
    "weight": "1 Pack",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000130",
    "sku": "GCPL-HT-130",
    "stock": 40,
    "minStock": 8,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121160_1-hit-red-gel-combi.jpg"
  },
  {
    "id": "prod-131",
    "name": "Kala HIT Spray + Gold Flash Machine Repellent Combi",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Contains Kala HIT 320ml and Goodknight Gold Flash Machine",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 270,
    "distPrice": 240,
    "wholesalePrice": 264,
    "retailPrice": 270,
    "unitType": "Box",
    "weight": "1 Pack",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000131",
    "sku": "GCPL-HT-131",
    "stock": 41,
    "minStock": 8,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121161_1-hit-black-gk-combi.jpg"
  },
  {
    "id": "prod-132",
    "name": "HIT Crawling Insect Spray No Drip Formula",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Red hit aerosol featuring non-drip quick-drying technology",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 185,
    "distPrice": 169,
    "wholesalePrice": 185,
    "retailPrice": 185,
    "unitType": "Box",
    "weight": "320 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000132",
    "sku": "GCPL-HT-132",
    "stock": 42,
    "minStock": 8,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40093851_1-hit-no-drip.jpg"
  },
  {
    "id": "prod-133",
    "name": "HIT Crawling Insect Spray No Drip Large",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Large red hit aerosol featuring non-drip tech",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 230,
    "distPrice": 208,
    "wholesalePrice": 228.8,
    "retailPrice": 230,
    "unitType": "Box",
    "weight": "400 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000133",
    "sku": "GCPL-HT-133",
    "stock": 43,
    "minStock": 8,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40093852_1-hit-no-drip-400ml.jpg"
  },
  {
    "id": "prod-134",
    "name": "HIT Fly & Mosquito Spray Fragrance Free",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Odourless black hit aerosol spray for sensitive noses",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 160,
    "distPrice": 145,
    "wholesalePrice": 159.5,
    "retailPrice": 160,
    "unitType": "Box",
    "weight": "320 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000134",
    "sku": "GCPL-HT-134",
    "stock": 44,
    "minStock": 8,
    "image": "https://www.bigbasket.com/media/uploads/p/l/120288_10-hit-fragrance-free.jpg"
  },
  {
    "id": "prod-135",
    "name": "HIT Fly & Mosquito Spray Fragrance Free Large",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Odourless black hit aerosol spray in large size",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 210,
    "distPrice": 188,
    "wholesalePrice": 206.8,
    "retailPrice": 210,
    "unitType": "Box",
    "weight": "400 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000135",
    "sku": "GCPL-HT-135",
    "stock": 45,
    "minStock": 9,
    "image": "https://www.bigbasket.com/media/uploads/p/l/120289_10-hit-fragrance-free-400ml.jpg"
  },
  {
    "id": "prod-136",
    "name": "HIT Racquet Replacement Mesh Core",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Standard replacement electric mesh grid for HIT Racquet",
    "hsn": "85437099",
    "gst": 18,
    "mrp": 150,
    "distPrice": 135,
    "wholesalePrice": 148.5,
    "retailPrice": 150,
    "unitType": "Box",
    "weight": "1 Unit",
    "boxQty": 10,
    "pieceQty": 1,
    "barcode": "8901157000136",
    "sku": "GCPL-HT-136",
    "stock": 46,
    "minStock": 9,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40191837_1-hit-racquet-core.jpg"
  },
  {
    "id": "prod-137",
    "name": "HIT Termite Control Spray",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Deep wood penetration active spray with applicator straw",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 280,
    "distPrice": 249,
    "wholesalePrice": 273.9,
    "retailPrice": 280,
    "unitType": "Box",
    "weight": "320 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000137",
    "sku": "GCPL-HT-137",
    "stock": 47,
    "minStock": 9,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121162_1-hit-termite-spray.jpg"
  },
  {
    "id": "prod-138",
    "name": "HIT Termite Control Spray Large",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Deep wood penetration active termite spray in large size",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 350,
    "distPrice": 310,
    "wholesalePrice": 341,
    "retailPrice": 350,
    "unitType": "Box",
    "weight": "400 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000138",
    "sku": "GCPL-HT-138",
    "stock": 48,
    "minStock": 9,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121163_1-hit-termite-spray-400ml.jpg"
  },
  {
    "id": "prod-139",
    "name": "HIT Red Spray 450ml Nozzle",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Intermediate value size cockroach spray",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 240,
    "distPrice": 215,
    "wholesalePrice": 236.5,
    "retailPrice": 240,
    "unitType": "Box",
    "weight": "450 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000139",
    "sku": "GCPL-HT-139",
    "stock": 49,
    "minStock": 9,
    "image": "https://www.bigbasket.com/media/uploads/p/l/107807_9-hit-cockroach-killer-450ml.jpg"
  },
  {
    "id": "prod-140",
    "name": "HIT Black Spray 450ml Nozzle",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Intermediate value size flying bug spray",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 215,
    "distPrice": 195,
    "wholesalePrice": 214.5,
    "retailPrice": 215,
    "unitType": "Box",
    "weight": "450 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000140",
    "sku": "GCPL-HT-140",
    "stock": 50,
    "minStock": 10,
    "image": "https://www.bigbasket.com/media/uploads/p/l/120290_10-hit-flying-killer-450ml.jpg"
  },
  {
    "id": "prod-141",
    "name": "HIT Roach Gel Twin Synergy Pack",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Compact twin syringes for smaller kitchen areas",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 170,
    "distPrice": 155,
    "wholesalePrice": 170,
    "retailPrice": 170,
    "unitType": "Box",
    "weight": "2 x 10 g",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000141",
    "sku": "GCPL-HT-141",
    "stock": 51,
    "minStock": 10,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40038224_1-hit-gel-twin-synergy.jpg"
  },
  {
    "id": "prod-142",
    "name": "HIT Mosquito Racquet (USB Smart Charger Type)",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Premium racquet with modern Type-C USB fast charging port",
    "hsn": "85437099",
    "gst": 18,
    "mrp": 649,
    "distPrice": 549,
    "wholesalePrice": 603.9,
    "retailPrice": 631.35,
    "unitType": "Box",
    "weight": "1 Unit",
    "boxQty": 10,
    "pieceQty": 1,
    "barcode": "8901157000142",
    "sku": "GCPL-HT-142",
    "stock": 52,
    "minStock": 10,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40191838_1-hit-racquet-usb.jpg"
  },
  {
    "id": "prod-143",
    "name": "HIT Crawling Spot Treatment Chalk",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Thick chalk designed for heavy coverage spot lines",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 30,
    "distPrice": 26,
    "wholesalePrice": 28.6,
    "retailPrice": 29.9,
    "unitType": "Box",
    "weight": "1 Unit",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000143",
    "sku": "GCPL-HT-143",
    "stock": 53,
    "minStock": 10,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121164_1-hit-thick-chalk.jpg"
  },
  {
    "id": "prod-144",
    "name": "HIT Rat Glue Trap Board Heavy Tray",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Rigid plastic heavy tray containing extra-thick glue",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 150,
    "distPrice": 132,
    "wholesalePrice": 145.2,
    "retailPrice": 150,
    "unitType": "Box",
    "weight": "1 Unit",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000144",
    "sku": "GCPL-HT-144",
    "stock": 54,
    "minStock": 10,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118328_1-hit-rat-glue-tray.jpg"
  },
  {
    "id": "prod-145",
    "name": "HIT Mosquito Guard Natural Coil Scented",
    "brand": "HIT",
    "category": "Home Care",
    "subcategory": "Household Insecticides",
    "desc": "Organic active standard spiral coils with sweet pine scent",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 45,
    "distPrice": 40,
    "wholesalePrice": 44,
    "retailPrice": 45,
    "unitType": "Box",
    "weight": "10 Coils",
    "boxQty": 60,
    "pieceQty": 1,
    "barcode": "8901157000145",
    "sku": "GCPL-HT-145",
    "stock": 55,
    "minStock": 11,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40204144_1-good-knight-pine-coil.jpg"
  },
  {
    "id": "prod-146",
    "name": "Cinthol Original Soap",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Doctor recommended skin-safe deodorant bath soap",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 43,
    "distPrice": 40,
    "wholesalePrice": 43,
    "retailPrice": 43,
    "unitType": "Box",
    "weight": "100 g",
    "boxQty": 72,
    "pieceQty": 1,
    "barcode": "8901157000146",
    "sku": "GCPL-CN-146",
    "stock": 56,
    "minStock": 11,
    "image": "https://www.bigbasket.com/media/uploads/p/l/120516_12-cinthol-original-bath-soap-protects-from-body-odour.jpg"
  },
  {
    "id": "prod-147",
    "name": "Cinthol Original Soap (Pack of 3)",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Triple box pack of classic Cinthol Original soap",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 125,
    "distPrice": 118,
    "wholesalePrice": 125,
    "retailPrice": 125,
    "unitType": "Box",
    "weight": "3 x 100 g",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000147",
    "sku": "GCPL-CN-147",
    "stock": 57,
    "minStock": 11,
    "image": "https://www.bigbasket.com/media/uploads/p/l/120517_12-cinthol-original-bath-soap-pack-of-3.jpg"
  },
  {
    "id": "prod-148",
    "name": "Cinthol Original Soap (Buy 4 Get 1 Free)",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Family saving bundle of 5 Cinthol Original soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 215,
    "distPrice": 195,
    "wholesalePrice": 214.5,
    "retailPrice": 215,
    "unitType": "Box",
    "weight": "5 x 100 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000148",
    "sku": "GCPL-CN-148",
    "stock": 58,
    "minStock": 11,
    "image": "https://www.bigbasket.com/media/uploads/p/l/120518_12-cinthol-original-bath-soap-buy-4-get-1.jpg"
  },
  {
    "id": "prod-149",
    "name": "Cinthol Original Soap Large",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Large size classic germ protection soap",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 65,
    "distPrice": 60,
    "wholesalePrice": 65,
    "retailPrice": 65,
    "unitType": "Box",
    "weight": "150 g",
    "boxQty": 72,
    "pieceQty": 1,
    "barcode": "8901157000149",
    "sku": "GCPL-CN-149",
    "stock": 59,
    "minStock": 11,
    "image": "https://www.bigbasket.com/media/uploads/p/l/120519_12-cinthol-original-bath-soap-150g.jpg"
  },
  {
    "id": "prod-150",
    "name": "Cinthol Original Soap Large (Pack of 3)",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Triple pack of 150g Cinthol Original soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 190,
    "distPrice": 175,
    "wholesalePrice": 190,
    "retailPrice": 190,
    "unitType": "Box",
    "weight": "3 x 150 g",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000150",
    "sku": "GCPL-CN-150",
    "stock": 60,
    "minStock": 12,
    "image": "https://www.bigbasket.com/media/uploads/p/l/120520_12-cinthol-original-bath-soap-150g-pack-of-3.jpg"
  },
  {
    "id": "prod-151",
    "name": "Cinthol Cool Mint Soap",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Refreshing bath soap with active menthol and icy cooling feel",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 45,
    "distPrice": 41,
    "wholesalePrice": 45,
    "retailPrice": 45,
    "unitType": "Box",
    "weight": "100 g",
    "boxQty": 72,
    "pieceQty": 1,
    "barcode": "8901157000151",
    "sku": "GCPL-CN-151",
    "stock": 61,
    "minStock": 12,
    "image": "https://www.bigbasket.com/media/uploads/p/l/281358_11-cinthol-cool-bath-soap-with-menthol-active-deo-fragrance.jpg"
  },
  {
    "id": "prod-152",
    "name": "Cinthol Cool Mint Soap (Pack of 3)",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Menthol cooling soap triple protection pack",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 130,
    "distPrice": 120,
    "wholesalePrice": 130,
    "retailPrice": 130,
    "unitType": "Box",
    "weight": "3 x 100 g",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000152",
    "sku": "GCPL-CN-152",
    "stock": 62,
    "minStock": 12,
    "image": "https://www.bigbasket.com/media/uploads/p/l/281359_11-cinthol-cool-bath-soap-pack-of-3.jpg"
  },
  {
    "id": "prod-153",
    "name": "Cinthol Cool Mint Soap (Buy 4 Get 1 Free)",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Family pack containing 5 ice cool soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 225,
    "distPrice": 200,
    "wholesalePrice": 220,
    "retailPrice": 225,
    "unitType": "Box",
    "weight": "5 x 100 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000153",
    "sku": "GCPL-CN-153",
    "stock": 63,
    "minStock": 12,
    "image": "https://www.bigbasket.com/media/uploads/p/l/281360_11-cinthol-cool-bath-soap-buy-4-get-1.jpg"
  },
  {
    "id": "prod-154",
    "name": "Cinthol Cool Mint Soap Large",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Large size cooling menthol soap",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 68,
    "distPrice": 62,
    "wholesalePrice": 68,
    "retailPrice": 68,
    "unitType": "Box",
    "weight": "150 g",
    "boxQty": 72,
    "pieceQty": 1,
    "barcode": "8901157000154",
    "sku": "GCPL-CN-154",
    "stock": 64,
    "minStock": 12,
    "image": "https://www.bigbasket.com/media/uploads/p/l/281361_11-cinthol-cool-bath-soap-150g.jpg"
  },
  {
    "id": "prod-155",
    "name": "Cinthol Cool Mint Soap Large (Pack of 3)",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Triple pack of 150g menthol soap",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 200,
    "distPrice": 182,
    "wholesalePrice": 200,
    "retailPrice": 200,
    "unitType": "Box",
    "weight": "3 x 150 g",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000155",
    "sku": "GCPL-CN-155",
    "stock": 65,
    "minStock": 13,
    "image": "https://www.bigbasket.com/media/uploads/p/l/281362_11-cinthol-cool-bath-soap-150g-pack-of-3.jpg"
  },
  {
    "id": "prod-156",
    "name": "Cinthol Lime Refreshing Soap",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Zesty citrus soap with enhanced lime oil fragrance",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 45,
    "distPrice": 41,
    "wholesalePrice": 45,
    "retailPrice": 45,
    "unitType": "Box",
    "weight": "100 g",
    "boxQty": 72,
    "pieceQty": 1,
    "barcode": "8901157000156",
    "sku": "GCPL-CN-156",
    "stock": 66,
    "minStock": 13,
    "image": "https://www.bigbasket.com/media/uploads/p/l/281359_11-cinthol-lime-bath-soap-with-enhanced-lime-fragrance.jpg"
  },
  {
    "id": "prod-157",
    "name": "Cinthol Lime Refreshing Soap (Pack of 3)",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Triple box pack of Cinthol Lime refresh soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 130,
    "distPrice": 120,
    "wholesalePrice": 130,
    "retailPrice": 130,
    "unitType": "Box",
    "weight": "3 x 100 g",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000157",
    "sku": "GCPL-CN-157",
    "stock": 67,
    "minStock": 13,
    "image": "https://www.bigbasket.com/media/uploads/p/l/281360_11-cinthol-lime-bath-soap-pack-of-3.jpg"
  },
  {
    "id": "prod-158",
    "name": "Cinthol Lime Refreshing Soap (Buy 4 Get 1 Free)",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Family saver 5-pack of zesty lime soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 225,
    "distPrice": 200,
    "wholesalePrice": 220,
    "retailPrice": 225,
    "unitType": "Box",
    "weight": "5 x 100 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000158",
    "sku": "GCPL-CN-158",
    "stock": 68,
    "minStock": 13,
    "image": "https://www.bigbasket.com/media/uploads/p/l/281361_11-cinthol-lime-bath-soap-buy-4-get-1.jpg"
  },
  {
    "id": "prod-159",
    "name": "Cinthol Lime Refreshing Soap Large",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Large size fresh citrus lime bath soap",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 68,
    "distPrice": 62,
    "wholesalePrice": 68,
    "retailPrice": 68,
    "unitType": "Box",
    "weight": "150 g",
    "boxQty": 72,
    "pieceQty": 1,
    "barcode": "8901157000159",
    "sku": "GCPL-CN-159",
    "stock": 69,
    "minStock": 13,
    "image": "https://www.bigbasket.com/media/uploads/p/l/281362_11-cinthol-lime-bath-soap-150g.jpg"
  },
  {
    "id": "prod-160",
    "name": "Cinthol Lime Refreshing Soap Large (Pack of 3)",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Triple pack of large lime refreshing soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 200,
    "distPrice": 182,
    "wholesalePrice": 200,
    "retailPrice": 200,
    "unitType": "Box",
    "weight": "3 x 150 g",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000160",
    "sku": "GCPL-CN-160",
    "stock": 70,
    "minStock": 14,
    "image": "https://www.bigbasket.com/media/uploads/p/l/281363_11-cinthol-lime-bath-soap-150g-pack-of-3.jpg"
  },
  {
    "id": "prod-161",
    "name": "Cinthol Deo Active Soap",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Deodorant active soap that prevents sweat-induced odour",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 45,
    "distPrice": 41,
    "wholesalePrice": 45,
    "retailPrice": 45,
    "unitType": "Box",
    "weight": "100 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000161",
    "sku": "GCPL-CN-161",
    "stock": 71,
    "minStock": 14,
    "image": "https://www.bigbasket.com/media/uploads/p/l/281364_11-cinthol-deo-bath-soap.jpg"
  },
  {
    "id": "prod-162",
    "name": "Cinthol Deo Active Soap (Pack of 3)",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Triple box of deodorant protection soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 130,
    "distPrice": 120,
    "wholesalePrice": 130,
    "retailPrice": 130,
    "unitType": "Box",
    "weight": "3 x 100 g",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000162",
    "sku": "GCPL-CN-162",
    "stock": 72,
    "minStock": 14,
    "image": "https://www.bigbasket.com/media/uploads/p/l/281365_11-cinthol-deo-bath-soap-pack-of-3.jpg"
  },
  {
    "id": "prod-163",
    "name": "Cinthol Deo Active Soap (Buy 4 Get 1 Free)",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Family bulk pack of deodorant bath soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 225,
    "distPrice": 200,
    "wholesalePrice": 220,
    "retailPrice": 225,
    "unitType": "Box",
    "weight": "5 x 100 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000163",
    "sku": "GCPL-CN-163",
    "stock": 73,
    "minStock": 14,
    "image": "https://www.bigbasket.com/media/uploads/p/l/281366_11-cinthol-deo-bath-soap-buy-4-get-1.jpg"
  },
  {
    "id": "prod-164",
    "name": "Cinthol Deo Active Soap Large",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Large size long-lasting deodorant soap",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 68,
    "distPrice": 62,
    "wholesalePrice": 68,
    "retailPrice": 68,
    "unitType": "Box",
    "weight": "150 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000164",
    "sku": "GCPL-CN-164",
    "stock": 74,
    "minStock": 14,
    "image": "https://www.bigbasket.com/media/uploads/p/l/281367_11-cinthol-deo-soap-150g.jpg"
  },
  {
    "id": "prod-165",
    "name": "Cinthol Deo Active Soap Large (Pack of 3)",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Triple pack of 150g deodorant active soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 200,
    "distPrice": 182,
    "wholesalePrice": 200,
    "retailPrice": 200,
    "unitType": "Box",
    "weight": "3 x 150 g",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000165",
    "sku": "GCPL-CN-165",
    "stock": 75,
    "minStock": 15,
    "image": "https://www.bigbasket.com/media/uploads/p/l/281368_11-cinthol-deo-soap-150g-pack-of-3.jpg"
  },
  {
    "id": "prod-166",
    "name": "Cinthol Sandal Premium Soap",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Premium soap formulated with cooling sandal wood extracts",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 48,
    "distPrice": 44,
    "wholesalePrice": 48,
    "retailPrice": 48,
    "unitType": "Box",
    "weight": "100 g",
    "boxQty": 72,
    "pieceQty": 1,
    "barcode": "8901157000166",
    "sku": "GCPL-CN-166",
    "stock": 76,
    "minStock": 15,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118328_1-cinthol-sandal-soap.jpg"
  },
  {
    "id": "prod-167",
    "name": "Cinthol Sandal Premium Soap (Pack of 3)",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Sandal wood extract soap triple box pack",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 140,
    "distPrice": 128,
    "wholesalePrice": 140,
    "retailPrice": 140,
    "unitType": "Box",
    "weight": "3 x 100 g",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000167",
    "sku": "GCPL-CN-167",
    "stock": 77,
    "minStock": 15,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118329_1-cinthol-sandal-soap-pack-of-3.jpg"
  },
  {
    "id": "prod-168",
    "name": "Cinthol Sandal Premium Soap (Buy 4 Get 1 Free)",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Family pack of premium sandal wood soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 235,
    "distPrice": 210,
    "wholesalePrice": 231,
    "retailPrice": 235,
    "unitType": "Box",
    "weight": "5 x 100 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000168",
    "sku": "GCPL-CN-168",
    "stock": 78,
    "minStock": 15,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118330_1-cinthol-sandal-soap-buy-4-get-1.jpg"
  },
  {
    "id": "prod-169",
    "name": "Cinthol Sandal Premium Soap Large",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Large size premium formulation sandal soap",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 72,
    "distPrice": 66,
    "wholesalePrice": 72,
    "retailPrice": 72,
    "unitType": "Box",
    "weight": "150 g",
    "boxQty": 72,
    "pieceQty": 1,
    "barcode": "8901157000169",
    "sku": "GCPL-CN-169",
    "stock": 79,
    "minStock": 15,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118331_1-cinthol-sandal-soap-150g.jpg"
  },
  {
    "id": "prod-170",
    "name": "Cinthol Sandal Premium Soap Large (Pack of 3)",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Triple pack of 150g premium sandal soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 210,
    "distPrice": 190,
    "wholesalePrice": 209,
    "retailPrice": 210,
    "unitType": "Box",
    "weight": "3 x 150 g",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000170",
    "sku": "GCPL-CN-170",
    "stock": 80,
    "minStock": 16,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118332_1-cinthol-sandal-soap-150g-pack-of-3.jpg"
  },
  {
    "id": "prod-171",
    "name": "Cinthol Charcoal Deep Cleansing Soap",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Deep cleansing soap with active bamboo charcoal powder",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 46,
    "distPrice": 42,
    "wholesalePrice": 46,
    "retailPrice": 46,
    "unitType": "Box",
    "weight": "100 g",
    "boxQty": 72,
    "pieceQty": 1,
    "barcode": "8901157000171",
    "sku": "GCPL-CN-171",
    "stock": 81,
    "minStock": 16,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40188214_1-cinthol-charcoal-soap.jpg"
  },
  {
    "id": "prod-172",
    "name": "Cinthol Charcoal Deep Cleansing Soap (Pack of 3)",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Charcoal soap triple skin purification pack",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 135,
    "distPrice": 124,
    "wholesalePrice": 135,
    "retailPrice": 135,
    "unitType": "Box",
    "weight": "3 x 100 g",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000172",
    "sku": "GCPL-CN-172",
    "stock": 82,
    "minStock": 16,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40188215_1-cinthol-charcoal-soap-pack-of-3.jpg"
  },
  {
    "id": "prod-173",
    "name": "Cinthol Charcoal Soap (Buy 4 Get 1 Free)",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Family saver bundle of charcoal deep cleansing soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 230,
    "distPrice": 205,
    "wholesalePrice": 225.5,
    "retailPrice": 230,
    "unitType": "Box",
    "weight": "5 x 100 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000173",
    "sku": "GCPL-CN-173",
    "stock": 83,
    "minStock": 16,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40188216_1-cinthol-charcoal-soap-buy-4-get-1.jpg"
  },
  {
    "id": "prod-174",
    "name": "Cinthol Charcoal Deep Cleansing Soap Large",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Large size deep cleanse charcoal bath soap",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 70,
    "distPrice": 64,
    "wholesalePrice": 70,
    "retailPrice": 70,
    "unitType": "Box",
    "weight": "150 g",
    "boxQty": 72,
    "pieceQty": 1,
    "barcode": "8901157000174",
    "sku": "GCPL-CN-174",
    "stock": 84,
    "minStock": 16,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40188217_1-cinthol-charcoal-soap-150g.jpg"
  },
  {
    "id": "prod-175",
    "name": "Cinthol Charcoal Soap Large (Pack of 3)",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Triple pack of large 150g active charcoal soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 205,
    "distPrice": 185,
    "wholesalePrice": 203.5,
    "retailPrice": 205,
    "unitType": "Box",
    "weight": "3 x 150 g",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000175",
    "sku": "GCPL-CN-175",
    "stock": 85,
    "minStock": 17,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40188218_1-cinthol-charcoal-soap-150g-pack-of-3.jpg"
  },
  {
    "id": "prod-176",
    "name": "Cinthol Cool Wave Deodorant Spray",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Deodorants",
    "desc": "Ice cool deodorant spray with sweat protection technology",
    "hsn": "33072000",
    "gst": 18,
    "mrp": 199,
    "distPrice": 150,
    "wholesalePrice": 165,
    "retailPrice": 172.5,
    "unitType": "Box",
    "weight": "150 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000176",
    "sku": "GCPL-CN-176",
    "stock": 86,
    "minStock": 17,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40098224_1-cinthol-cool-wave-deo.jpg"
  },
  {
    "id": "prod-177",
    "name": "Cinthol Spin Deodorant Spray",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Deodorants",
    "desc": "Deo spray featuring sporty notes and long lasting active scent",
    "hsn": "33072000",
    "gst": 18,
    "mrp": 199,
    "distPrice": 150,
    "wholesalePrice": 165,
    "retailPrice": 172.5,
    "unitType": "Box",
    "weight": "150 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000177",
    "sku": "GCPL-CN-177",
    "stock": 87,
    "minStock": 17,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40098225_1-cinthol-spin-deo.jpg"
  },
  {
    "id": "prod-178",
    "name": "Cinthol Rush Deodorant Spray",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Deodorants",
    "desc": "Intense woody fragrance deo spray for men",
    "hsn": "33072000",
    "gst": 18,
    "mrp": 199,
    "distPrice": 150,
    "wholesalePrice": 165,
    "retailPrice": 172.5,
    "unitType": "Box",
    "weight": "150 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000178",
    "sku": "GCPL-CN-178",
    "stock": 88,
    "minStock": 17,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40098226_1-cinthol-rush-deo.jpg"
  },
  {
    "id": "prod-179",
    "name": "Cinthol Energy Deodorant Spray",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Deodorants",
    "desc": "Vibrant citrus notes deodorant for high physical performance",
    "hsn": "33072000",
    "gst": 18,
    "mrp": 199,
    "distPrice": 150,
    "wholesalePrice": 165,
    "retailPrice": 172.5,
    "unitType": "Box",
    "weight": "150 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000179",
    "sku": "GCPL-CN-179",
    "stock": 89,
    "minStock": 17,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40098227_1-cinthol-energy-deo.jpg"
  },
  {
    "id": "prod-180",
    "name": "Cinthol Play Deodorant Spray",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Deodorants",
    "desc": "Playful sweet aromatic deodorant spray for casual use",
    "hsn": "33072000",
    "gst": 18,
    "mrp": 199,
    "distPrice": 150,
    "wholesalePrice": 165,
    "retailPrice": 172.5,
    "unitType": "Box",
    "weight": "150 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000180",
    "sku": "GCPL-CN-180",
    "stock": 30,
    "minStock": 6,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40098228_1-cinthol-play-deo.jpg"
  },
  {
    "id": "prod-181",
    "name": "Cinthol Intense Deodorant Spray",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Deodorants",
    "desc": "Premium masculine concentrated body spray",
    "hsn": "33072000",
    "gst": 18,
    "mrp": 199,
    "distPrice": 150,
    "wholesalePrice": 165,
    "retailPrice": 172.5,
    "unitType": "Box",
    "weight": "150 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000181",
    "sku": "GCPL-CN-181",
    "stock": 31,
    "minStock": 6,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40098229_1-cinthol-intense-deo.jpg"
  },
  {
    "id": "prod-182",
    "name": "Cinthol Cool Wave Deodorant Spray (Pack of 2)",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Deodorants",
    "desc": "Double saving body spray bundle for boys",
    "hsn": "33072000",
    "gst": 18,
    "mrp": 398,
    "distPrice": 285,
    "wholesalePrice": 313.5,
    "retailPrice": 327.75,
    "unitType": "Box",
    "weight": "2 x 150 ml",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000182",
    "sku": "GCPL-CN-182",
    "stock": 32,
    "minStock": 6,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40098230_1-cinthol-cool-wave-deo-pack-of-2.jpg"
  },
  {
    "id": "prod-183",
    "name": "Cinthol Spin Deodorant Spray (Pack of 2)",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Deodorants",
    "desc": "Double sporty fragrance deodorant set",
    "hsn": "33072000",
    "gst": 18,
    "mrp": 398,
    "distPrice": 285,
    "wholesalePrice": 313.5,
    "retailPrice": 327.75,
    "unitType": "Box",
    "weight": "2 x 150 ml",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000183",
    "sku": "GCPL-CN-183",
    "stock": 33,
    "minStock": 6,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40098231_1-cinthol-spin-deo-pack-of-2.jpg"
  },
  {
    "id": "prod-184",
    "name": "Cinthol Cool Mint Talcum Powder",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Talcum Powders",
    "desc": "Refreshing icy cooling talc powder with active menthol",
    "hsn": "33049110",
    "gst": 18,
    "mrp": 85,
    "distPrice": 75,
    "wholesalePrice": 82.5,
    "retailPrice": 85,
    "unitType": "Box",
    "weight": "100 g",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000184",
    "sku": "GCPL-CN-184",
    "stock": 34,
    "minStock": 6,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118333_1-cinthol-cool-talc.jpg"
  },
  {
    "id": "prod-185",
    "name": "Cinthol Cool Mint Talcum Powder Medium",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Talcum Powders",
    "desc": "Refreshing icy menthol talc in intermediate bottle",
    "hsn": "33049110",
    "gst": 18,
    "mrp": 150,
    "distPrice": 135,
    "wholesalePrice": 148.5,
    "retailPrice": 150,
    "unitType": "Box",
    "weight": "200 g",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000185",
    "sku": "GCPL-CN-185",
    "stock": 35,
    "minStock": 7,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118334_1-cinthol-cool-talc-200g.jpg"
  },
  {
    "id": "prod-186",
    "name": "Cinthol Cool Mint Talcum Powder Large",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Talcum Powders",
    "desc": "Family size refreshing cooling menthol talc",
    "hsn": "33049110",
    "gst": 18,
    "mrp": 199,
    "distPrice": 175,
    "wholesalePrice": 192.5,
    "retailPrice": 199,
    "unitType": "Box",
    "weight": "300 g",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000186",
    "sku": "GCPL-CN-186",
    "stock": 36,
    "minStock": 7,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118335_1-cinthol-cool-talc-300g.jpg"
  },
  {
    "id": "prod-187",
    "name": "Cinthol Lime Fresh Talcum Powder",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Talcum Powders",
    "desc": "Zesty citrus lime scented body cooling talc",
    "hsn": "33049110",
    "gst": 18,
    "mrp": 85,
    "distPrice": 75,
    "wholesalePrice": 82.5,
    "retailPrice": 85,
    "unitType": "Box",
    "weight": "100 g",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000187",
    "sku": "GCPL-CN-187",
    "stock": 37,
    "minStock": 7,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118336_1-cinthol-lime-talc.jpg"
  },
  {
    "id": "prod-188",
    "name": "Cinthol Lime Fresh Talcum Powder Medium",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Talcum Powders",
    "desc": "Zesty lime fragrance body talc in medium bottle",
    "hsn": "33049110",
    "gst": 18,
    "mrp": 150,
    "distPrice": 135,
    "wholesalePrice": 148.5,
    "retailPrice": 150,
    "unitType": "Box",
    "weight": "200 g",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000188",
    "sku": "GCPL-CN-188",
    "stock": 38,
    "minStock": 7,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118337_1-cinthol-lime-talc-200g.jpg"
  },
  {
    "id": "prod-189",
    "name": "Cinthol Lime Fresh Talcum Powder Large",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Talcum Powders",
    "desc": "Family size cooling citrus lime talcum powder",
    "hsn": "33049110",
    "gst": 18,
    "mrp": 199,
    "distPrice": 175,
    "wholesalePrice": 192.5,
    "retailPrice": 199,
    "unitType": "Box",
    "weight": "300 g",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000189",
    "sku": "GCPL-CN-189",
    "stock": 39,
    "minStock": 7,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118338_1-cinthol-lime-talc-300g.jpg"
  },
  {
    "id": "prod-190",
    "name": "Cinthol Original Deo Talcum Powder",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Talcum Powders",
    "desc": "Standard therapeutic sweat protecting germ killer talc",
    "hsn": "33072000",
    "gst": 18,
    "mrp": 80,
    "distPrice": 72,
    "wholesalePrice": 79.2,
    "retailPrice": 80,
    "unitType": "Box",
    "weight": "100 g",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000190",
    "sku": "GCPL-CN-190",
    "stock": 40,
    "minStock": 8,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118339_1-cinthol-original-talc.jpg"
  },
  {
    "id": "prod-191",
    "name": "Cinthol Original Deo Talcum Powder Large",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Talcum Powders",
    "desc": "Therapeutic germ protecting sweat control talc in family pack",
    "hsn": "33072000",
    "gst": 18,
    "mrp": 185,
    "distPrice": 165,
    "wholesalePrice": 181.5,
    "retailPrice": 185,
    "unitType": "Box",
    "weight": "300 g",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000191",
    "sku": "GCPL-CN-191",
    "stock": 41,
    "minStock": 8,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118340_1-cinthol-original-talc-300g.jpg"
  },
  {
    "id": "prod-192",
    "name": "Cinthol Cool Mint Shower Gel / Body Wash",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Body Washes",
    "desc": "Menthol cooling liquid body wash with loofah",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 199,
    "distPrice": 175,
    "wholesalePrice": 192.5,
    "retailPrice": 199,
    "unitType": "Box",
    "weight": "250 ml",
    "boxQty": 48,
    "pieceQty": 1,
    "barcode": "8901157000192",
    "sku": "GCPL-CN-192",
    "stock": 42,
    "minStock": 8,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118341_1-cinthol-cool-body-wash.jpg"
  },
  {
    "id": "prod-193",
    "name": "Cinthol Lime Fresh Shower Gel / Body Wash",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Body Washes",
    "desc": "Refreshing citrus active liquid shower gel",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 199,
    "distPrice": 175,
    "wholesalePrice": 192.5,
    "retailPrice": 199,
    "unitType": "Box",
    "weight": "250 ml",
    "boxQty": 48,
    "pieceQty": 1,
    "barcode": "8901157000193",
    "sku": "GCPL-CN-193",
    "stock": 43,
    "minStock": 8,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118342_1-cinthol-lime-body-wash.jpg"
  },
  {
    "id": "prod-194",
    "name": "Cinthol Charcoal Deep Cleansing Body Wash",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Body Washes",
    "desc": "Exfoliating bamboo charcoal liquid body wash",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 220,
    "distPrice": 195,
    "wholesalePrice": 214.5,
    "retailPrice": 220,
    "unitType": "Box",
    "weight": "250 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000194",
    "sku": "GCPL-CN-194",
    "stock": 44,
    "minStock": 8,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40188219_1-cinthol-charcoal-body-wash.jpg"
  },
  {
    "id": "prod-195",
    "name": "Cinthol Original Shaving Cream Tube",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Shaving Creams",
    "desc": "Classic protective lather formulation shaving cream",
    "hsn": "33071010",
    "gst": 18,
    "mrp": 70,
    "distPrice": 65,
    "wholesalePrice": 70,
    "retailPrice": 70,
    "unitType": "Box",
    "weight": "70 g",
    "boxQty": 48,
    "pieceQty": 1,
    "barcode": "8901157000195",
    "sku": "GCPL-CN-195",
    "stock": 45,
    "minStock": 9,
    "image": "https://www.bigbasket.com/media/uploads/p/l/102875_6-cinthol-original-shaving-cream.jpg"
  },
  {
    "id": "prod-196",
    "name": "Cinthol Cool Menthol Shaving Cream",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Shaving Creams",
    "desc": "Mentholated refreshing rich lather shaving cream",
    "hsn": "33071010",
    "gst": 18,
    "mrp": 75,
    "distPrice": 70,
    "wholesalePrice": 75,
    "retailPrice": 75,
    "unitType": "Box",
    "weight": "70 g",
    "boxQty": 48,
    "pieceQty": 1,
    "barcode": "8901157000196",
    "sku": "GCPL-CN-196",
    "stock": 46,
    "minStock": 9,
    "image": "https://www.bigbasket.com/media/uploads/p/l/102876_6-cinthol-cool-shaving-cream.jpg"
  },
  {
    "id": "prod-197",
    "name": "Cinthol Lime Fresh Shaving Cream",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Shaving Creams",
    "desc": "Citrus lime active lather shaving cream in tube",
    "hsn": "33071010",
    "gst": 18,
    "mrp": 75,
    "distPrice": 70,
    "wholesalePrice": 75,
    "retailPrice": 75,
    "unitType": "Box",
    "weight": "70 g",
    "boxQty": 48,
    "pieceQty": 1,
    "barcode": "8901157000197",
    "sku": "GCPL-CN-197",
    "stock": 47,
    "minStock": 9,
    "image": "https://www.bigbasket.com/media/uploads/p/l/102877_6-cinthol-lime-shaving-cream.jpg"
  },
  {
    "id": "prod-198",
    "name": "Cinthol Cool Wave Shaving Foam Can",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Shaving Creams",
    "desc": "Instant rich lubricating shaving foam with cooling menthol",
    "hsn": "33071010",
    "gst": 18,
    "mrp": 199,
    "distPrice": 170,
    "wholesalePrice": 187,
    "retailPrice": 195.5,
    "unitType": "Box",
    "weight": "200 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000198",
    "sku": "GCPL-CN-198",
    "stock": 48,
    "minStock": 9,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121165_1-cinthol-shaving-foam.jpg"
  },
  {
    "id": "prod-199",
    "name": "Cinthol Sensitive Shaving Foam Can",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Shaving Creams",
    "desc": "Aloe vera infused skin-friendly instant shaving foam",
    "hsn": "33071010",
    "gst": 18,
    "mrp": 199,
    "distPrice": 170,
    "wholesalePrice": 187,
    "retailPrice": 195.5,
    "unitType": "Box",
    "weight": "200 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000199",
    "sku": "GCPL-CN-199",
    "stock": 49,
    "minStock": 9,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121166_1-cinthol-shaving-foam-sensitive.jpg"
  },
  {
    "id": "prod-200",
    "name": "Cinthol Original Bath Soap Small",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Travel size classic germ protection soap",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 22,
    "distPrice": 20,
    "wholesalePrice": 22,
    "retailPrice": 22,
    "unitType": "Box",
    "weight": "50 g",
    "boxQty": 72,
    "pieceQty": 1,
    "barcode": "8901157000200",
    "sku": "GCPL-CN-200",
    "stock": 50,
    "minStock": 10,
    "image": "https://www.bigbasket.com/media/uploads/p/l/120521_12-cinthol-original-soap-50g.jpg"
  },
  {
    "id": "prod-201",
    "name": "Cinthol Original Soap (Buy 3 Get 1 Free)",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Value box containing 4 classic original soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 172,
    "distPrice": 158,
    "wholesalePrice": 172,
    "retailPrice": 172,
    "unitType": "Box",
    "weight": "4 x 100 g",
    "boxQty": 72,
    "pieceQty": 1,
    "barcode": "8901157000201",
    "sku": "GCPL-CN-201",
    "stock": 51,
    "minStock": 10,
    "image": "https://www.bigbasket.com/media/uploads/p/l/120522_12-cinthol-original-soap-buy-3-get-1.jpg"
  },
  {
    "id": "prod-202",
    "name": "Cinthol Cool Mint Soap (Buy 3 Get 1 Free)",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Value box containing 4 ice cooling soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 180,
    "distPrice": 165,
    "wholesalePrice": 180,
    "retailPrice": 180,
    "unitType": "Box",
    "weight": "4 x 100 g",
    "boxQty": 72,
    "pieceQty": 1,
    "barcode": "8901157000202",
    "sku": "GCPL-CN-202",
    "stock": 52,
    "minStock": 10,
    "image": "https://www.bigbasket.com/media/uploads/p/l/281363_11-cinthol-cool-soap-buy-3-get-1.jpg"
  },
  {
    "id": "prod-203",
    "name": "Cinthol Lime Refresh Soap (Buy 3 Get 1 Free)",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Value box containing 4 zesty lime soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 180,
    "distPrice": 165,
    "wholesalePrice": 180,
    "retailPrice": 180,
    "unitType": "Box",
    "weight": "4 x 100 g",
    "boxQty": 72,
    "pieceQty": 1,
    "barcode": "8901157000203",
    "sku": "GCPL-CN-203",
    "stock": 53,
    "minStock": 10,
    "image": "https://www.bigbasket.com/media/uploads/p/l/281364_11-cinthol-lime-soap-buy-3-get-1.jpg"
  },
  {
    "id": "prod-204",
    "name": "Cinthol Deo Active Soap (Buy 3 Get 1 Free)",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Value box containing 4 active deodorant soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 180,
    "distPrice": 165,
    "wholesalePrice": 180,
    "retailPrice": 180,
    "unitType": "Box",
    "weight": "4 x 100 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000204",
    "sku": "GCPL-CN-204",
    "stock": 54,
    "minStock": 10,
    "image": "https://www.bigbasket.com/media/uploads/p/l/281369_11-cinthol-deo-soap-buy-3-get-1.jpg"
  },
  {
    "id": "prod-205",
    "name": "Cinthol Sandal Soap (Buy 3 Get 1 Free)",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Value box containing 4 premium sandalwood soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 192,
    "distPrice": 175,
    "wholesalePrice": 192,
    "retailPrice": 192,
    "unitType": "Box",
    "weight": "4 x 100 g",
    "boxQty": 72,
    "pieceQty": 1,
    "barcode": "8901157000205",
    "sku": "GCPL-CN-205",
    "stock": 55,
    "minStock": 11,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118333_1-cinthol-sandal-soap-buy-3-get-1.jpg"
  },
  {
    "id": "prod-206",
    "name": "Cinthol Charcoal Soap (Buy 3 Get 1 Free)",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Value box containing 4 bamboo charcoal soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 184,
    "distPrice": 169,
    "wholesalePrice": 184,
    "retailPrice": 184,
    "unitType": "Box",
    "weight": "4 x 100 g",
    "boxQty": 72,
    "pieceQty": 1,
    "barcode": "8901157000206",
    "sku": "GCPL-CN-206",
    "stock": 56,
    "minStock": 11,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40188220_1-cinthol-charcoal-soap-buy-3-get-1.jpg"
  },
  {
    "id": "prod-207",
    "name": "Cinthol Play Bath Soap",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Sporty athletic formulation skin nourishing soap",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 45,
    "distPrice": 41,
    "wholesalePrice": 45,
    "retailPrice": 45,
    "unitType": "Box",
    "weight": "100 g",
    "boxQty": 72,
    "pieceQty": 1,
    "barcode": "8901157000207",
    "sku": "GCPL-CN-207",
    "stock": 57,
    "minStock": 11,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118334_1-cinthol-play-soap.jpg"
  },
  {
    "id": "prod-208",
    "name": "Cinthol Play Bath Soap (Pack of 3)",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Sporty athletic skin soap triple box pack",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 130,
    "distPrice": 120,
    "wholesalePrice": 130,
    "retailPrice": 130,
    "unitType": "Box",
    "weight": "3 x 100 g",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000208",
    "sku": "GCPL-CN-208",
    "stock": 58,
    "minStock": 11,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118335_1-cinthol-play-soap-pack-of-3.jpg"
  },
  {
    "id": "prod-209",
    "name": "Cinthol Play Bath Soap Large",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Large size sporty athletic body soap",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 68,
    "distPrice": 62,
    "wholesalePrice": 68,
    "retailPrice": 68,
    "unitType": "Box",
    "weight": "150 g",
    "boxQty": 72,
    "pieceQty": 1,
    "barcode": "8901157000209",
    "sku": "GCPL-CN-209",
    "stock": 59,
    "minStock": 11,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118336_1-cinthol-play-soap-150g.jpg"
  },
  {
    "id": "prod-210",
    "name": "Cinthol Intense Extreme Protection Soap",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Premium deep dirt extraction soap with rich woods aroma",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 46,
    "distPrice": 42,
    "wholesalePrice": 46,
    "retailPrice": 46,
    "unitType": "Box",
    "weight": "100 g",
    "boxQty": 72,
    "pieceQty": 1,
    "barcode": "8901157000210",
    "sku": "GCPL-CN-210",
    "stock": 60,
    "minStock": 12,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118337_1-cinthol-intense-soap.jpg"
  },
  {
    "id": "prod-211",
    "name": "Cinthol Intense Protection Soap (Pack of 3)",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Deep impact masculine soap triple pack",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 135,
    "distPrice": 124,
    "wholesalePrice": 135,
    "retailPrice": 135,
    "unitType": "Box",
    "weight": "3 x 100 g",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000211",
    "sku": "GCPL-CN-211",
    "stock": 61,
    "minStock": 12,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118338_1-cinthol-intense-soap-pack-of-3.jpg"
  },
  {
    "id": "prod-212",
    "name": "Cinthol Intense Protection Soap Large",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Large size deep impact masculine soap",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 70,
    "distPrice": 64,
    "wholesalePrice": 70,
    "retailPrice": 70,
    "unitType": "Box",
    "weight": "150 g",
    "boxQty": 72,
    "pieceQty": 1,
    "barcode": "8901157000212",
    "sku": "GCPL-CN-212",
    "stock": 62,
    "minStock": 12,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118339_1-cinthol-intense-soap-150g.jpg"
  },
  {
    "id": "prod-213",
    "name": "Cinthol Cool Wave Deo Spray Large",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Deodorants",
    "desc": "Large size ice cool body spray canister",
    "hsn": "33072000",
    "gst": 18,
    "mrp": 249,
    "distPrice": 185,
    "wholesalePrice": 203.5,
    "retailPrice": 212.75,
    "unitType": "Box",
    "weight": "200 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000213",
    "sku": "GCPL-CN-213",
    "stock": 63,
    "minStock": 12,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40098232_1-cinthol-cool-wave-deo-200ml.jpg"
  },
  {
    "id": "prod-214",
    "name": "Cinthol Spin Deo Spray Large",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Deodorants",
    "desc": "Large size sporty notes body spray canister",
    "hsn": "33072000",
    "gst": 18,
    "mrp": 249,
    "distPrice": 185,
    "wholesalePrice": 203.5,
    "retailPrice": 212.75,
    "unitType": "Box",
    "weight": "200 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000214",
    "sku": "GCPL-CN-214",
    "stock": 64,
    "minStock": 12,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40098233_1-cinthol-spin-deo-200ml.jpg"
  },
  {
    "id": "prod-215",
    "name": "Cinthol Rush Deo Spray Large",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Deodorants",
    "desc": "Large size woody notes body spray canister",
    "hsn": "33072000",
    "gst": 18,
    "mrp": 249,
    "distPrice": 185,
    "wholesalePrice": 203.5,
    "retailPrice": 212.75,
    "unitType": "Box",
    "weight": "200 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000215",
    "sku": "GCPL-CN-215",
    "stock": 65,
    "minStock": 13,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40098234_1-cinthol-rush-deo-200ml.jpg"
  },
  {
    "id": "prod-216",
    "name": "Cinthol Energy Deo Spray Large",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Deodorants",
    "desc": "Large size vibrant citrus body spray canister",
    "hsn": "33072000",
    "gst": 18,
    "mrp": 249,
    "distPrice": 185,
    "wholesalePrice": 203.5,
    "retailPrice": 212.75,
    "unitType": "Box",
    "weight": "200 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000216",
    "sku": "GCPL-CN-216",
    "stock": 66,
    "minStock": 13,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40098235_1-cinthol-energy-deo-200ml.jpg"
  },
  {
    "id": "prod-217",
    "name": "Cinthol Play Deo Spray Large",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Deodorants",
    "desc": "Large size playful sweet body spray canister",
    "hsn": "33072000",
    "gst": 18,
    "mrp": 249,
    "distPrice": 185,
    "wholesalePrice": 203.5,
    "retailPrice": 212.75,
    "unitType": "Box",
    "weight": "200 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000217",
    "sku": "GCPL-CN-217",
    "stock": 67,
    "minStock": 13,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40098236_1-cinthol-play-deo-200ml.jpg"
  },
  {
    "id": "prod-218",
    "name": "Cinthol Intense Deo Spray Large",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Deodorants",
    "desc": "Large size masculine concentrated body spray canister",
    "hsn": "33072000",
    "gst": 18,
    "mrp": 249,
    "distPrice": 185,
    "wholesalePrice": 203.5,
    "retailPrice": 212.75,
    "unitType": "Box",
    "weight": "200 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000218",
    "sku": "GCPL-CN-218",
    "stock": 68,
    "minStock": 13,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40098237_1-cinthol-intense-deo-200ml.jpg"
  },
  {
    "id": "prod-219",
    "name": "Cinthol Sandal Woody Talcum Powder",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Talcum Powders",
    "desc": "Premium sandalwood oil fragrance sweat control talc",
    "hsn": "33049110",
    "gst": 18,
    "mrp": 90,
    "distPrice": 80,
    "wholesalePrice": 88,
    "retailPrice": 90,
    "unitType": "Box",
    "weight": "100 g",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000219",
    "sku": "GCPL-CN-219",
    "stock": 69,
    "minStock": 13,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118341_1-cinthol-sandal-talc.jpg"
  },
  {
    "id": "prod-220",
    "name": "Cinthol Sandal Woody Talcum Powder Large",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Talcum Powders",
    "desc": "Premium sandalwood fragrance talc in family pack",
    "hsn": "33049110",
    "gst": 18,
    "mrp": 210,
    "distPrice": 185,
    "wholesalePrice": 203.5,
    "retailPrice": 210,
    "unitType": "Box",
    "weight": "300 g",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000220",
    "sku": "GCPL-CN-220",
    "stock": 70,
    "minStock": 14,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118342_1-cinthol-sandal-talc-300g.jpg"
  },
  {
    "id": "prod-221",
    "name": "Cinthol Charcoal Deep Cleansing Talcum Powder",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Talcum Powders",
    "desc": "Charcoal active oil absorbing micro talc powder",
    "hsn": "33049110",
    "gst": 18,
    "mrp": 90,
    "distPrice": 80,
    "wholesalePrice": 88,
    "retailPrice": 90,
    "unitType": "Box",
    "weight": "100 g",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000221",
    "sku": "GCPL-CN-221",
    "stock": 71,
    "minStock": 14,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40188221_1-cinthol-charcoal-talc.jpg"
  },
  {
    "id": "prod-222",
    "name": "Cinthol Charcoal Deep Cleansing Talc Large",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Talcum Powders",
    "desc": "Charcoal active oil absorbing talc in family pack",
    "hsn": "33049110",
    "gst": 18,
    "mrp": 210,
    "distPrice": 185,
    "wholesalePrice": 203.5,
    "retailPrice": 210,
    "unitType": "Box",
    "weight": "300 g",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000222",
    "sku": "GCPL-CN-222",
    "stock": 72,
    "minStock": 14,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40188222_1-cinthol-charcoal-talc-300g.jpg"
  },
  {
    "id": "prod-223",
    "name": "Cinthol Cool Mint Shower Gel (Pack of 2)",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Body Washes",
    "desc": "Twin saving liquid bath body wash set with menthol",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 398,
    "distPrice": 335,
    "wholesalePrice": 368.5,
    "retailPrice": 385.25,
    "unitType": "Box",
    "weight": "2 x 250 ml",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000223",
    "sku": "GCPL-CN-223",
    "stock": 73,
    "minStock": 14,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118343_1-cinthol-cool-wash-pack-of-2.jpg"
  },
  {
    "id": "prod-224",
    "name": "Cinthol Lime Fresh Shower Gel (Pack of 2)",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Body Washes",
    "desc": "Twin saving liquid bath body wash set with lime",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 398,
    "distPrice": 335,
    "wholesalePrice": 368.5,
    "retailPrice": 385.25,
    "unitType": "Box",
    "weight": "2 x 250 ml",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000224",
    "sku": "GCPL-CN-224",
    "stock": 74,
    "minStock": 14,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118344_1-cinthol-lime-wash-pack-of-2.jpg"
  },
  {
    "id": "prod-225",
    "name": "Cinthol Charcoal Shower Gel (Pack of 2)",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Body Washes",
    "desc": "Twin saving liquid bath body wash set with charcoal",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 440,
    "distPrice": 370,
    "wholesalePrice": 407,
    "retailPrice": 425.5,
    "unitType": "Box",
    "weight": "2 x 250 ml",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000225",
    "sku": "GCPL-CN-225",
    "stock": 75,
    "minStock": 15,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40188223_1-cinthol-charcoal-wash-pack-of-2.jpg"
  },
  {
    "id": "prod-226",
    "name": "Cinthol Cool Mint Body Wash Pump Bottle",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Body Washes",
    "desc": "Large family pump bottle cooling liquid body wash",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 349,
    "distPrice": 299,
    "wholesalePrice": 328.9,
    "retailPrice": 343.85,
    "unitType": "Box",
    "weight": "500 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000226",
    "sku": "GCPL-CN-226",
    "stock": 76,
    "minStock": 15,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118345_1-cinthol-cool-wash-500ml.jpg"
  },
  {
    "id": "prod-227",
    "name": "Cinthol Lime Fresh Body Wash Pump Bottle",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Body Washes",
    "desc": "Large family pump bottle refreshing lime body wash",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 349,
    "distPrice": 299,
    "wholesalePrice": 328.9,
    "retailPrice": 343.85,
    "unitType": "Box",
    "weight": "500 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000227",
    "sku": "GCPL-CN-227",
    "stock": 77,
    "minStock": 15,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118346_1-cinthol-lime-wash-500ml.jpg"
  },
  {
    "id": "prod-228",
    "name": "Cinthol Charcoal Deep Cleansing Body Wash Pump",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Body Washes",
    "desc": "Large family pump bottle active charcoal body wash",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 380,
    "distPrice": 325,
    "wholesalePrice": 357.5,
    "retailPrice": 373.75,
    "unitType": "Box",
    "weight": "500 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000228",
    "sku": "GCPL-CN-228",
    "stock": 78,
    "minStock": 15,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40188224_1-cinthol-charcoal-wash-500ml.jpg"
  },
  {
    "id": "prod-229",
    "name": "Cinthol Shaving Cream Original (Pack of 2)",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Shaving Creams",
    "desc": "Twin shaving cream classic tube bundle",
    "hsn": "33071010",
    "gst": 18,
    "mrp": 140,
    "distPrice": 125,
    "wholesalePrice": 137.5,
    "retailPrice": 140,
    "unitType": "Box",
    "weight": "2 x 70 g",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000229",
    "sku": "GCPL-CN-229",
    "stock": 79,
    "minStock": 15,
    "image": "https://www.bigbasket.com/media/uploads/p/l/102878_6-cinthol-original-shave-pack-of-2.jpg"
  },
  {
    "id": "prod-230",
    "name": "Cinthol Shaving Cream Cool (Pack of 2)",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Shaving Creams",
    "desc": "Twin shaving cream menthol tube bundle",
    "hsn": "33071010",
    "gst": 18,
    "mrp": 150,
    "distPrice": 135,
    "wholesalePrice": 148.5,
    "retailPrice": 150,
    "unitType": "Box",
    "weight": "2 x 70 g",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000230",
    "sku": "GCPL-CN-230",
    "stock": 80,
    "minStock": 16,
    "image": "https://www.bigbasket.com/media/uploads/p/l/102879_6-cinthol-cool-shave-pack-of-2.jpg"
  },
  {
    "id": "prod-231",
    "name": "Cinthol Shaving Cream Lime (Pack of 2)",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Shaving Creams",
    "desc": "Twin shaving cream lime tube bundle",
    "hsn": "33071010",
    "gst": 18,
    "mrp": 150,
    "distPrice": 135,
    "wholesalePrice": 148.5,
    "retailPrice": 150,
    "unitType": "Box",
    "weight": "2 x 70 g",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000231",
    "sku": "GCPL-CN-231",
    "stock": 81,
    "minStock": 16,
    "image": "https://www.bigbasket.com/media/uploads/p/l/102880_6-cinthol-lime-shave-pack-of-2.jpg"
  },
  {
    "id": "prod-232",
    "name": "Cinthol Cool Wave Shaving Foam (Pack of 2)",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Shaving Creams",
    "desc": "Twin shaving foam aerosol cans cooling menthol",
    "hsn": "33071010",
    "gst": 18,
    "mrp": 398,
    "distPrice": 330,
    "wholesalePrice": 363,
    "retailPrice": 379.5,
    "unitType": "Box",
    "weight": "2 x 200 ml",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000232",
    "sku": "GCPL-CN-232",
    "stock": 82,
    "minStock": 16,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121167_1-cinthol-foam-cool-pack-of-2.jpg"
  },
  {
    "id": "prod-233",
    "name": "Cinthol Sensitive Shaving Foam (Pack of 2)",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Shaving Creams",
    "desc": "Twin shaving foam aerosol cans sensitive aloe",
    "hsn": "33071010",
    "gst": 18,
    "mrp": 398,
    "distPrice": 330,
    "wholesalePrice": 363,
    "retailPrice": 379.5,
    "unitType": "Box",
    "weight": "2 x 200 ml",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000233",
    "sku": "GCPL-CN-233",
    "stock": 83,
    "minStock": 16,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121168_1-cinthol-foam-sensitive-pack-of-2.jpg"
  },
  {
    "id": "prod-234",
    "name": "Cinthol Herb Care Bath Soap",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Anti-bacterial bath soap with cooling herbal leaf extracts",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 45,
    "distPrice": 41,
    "wholesalePrice": 45,
    "retailPrice": 45,
    "unitType": "Box",
    "weight": "100 g",
    "boxQty": 72,
    "pieceQty": 1,
    "barcode": "8901157000234",
    "sku": "GCPL-CN-234",
    "stock": 84,
    "minStock": 16,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121169_1-cinthol-herbal-soap.jpg"
  },
  {
    "id": "prod-235",
    "name": "Cinthol Herb Care Bath Soap (Pack of 3)",
    "brand": "Cinthol",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Herbal cooling extract soap triple pack",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 130,
    "distPrice": 120,
    "wholesalePrice": 130,
    "retailPrice": 130,
    "unitType": "Box",
    "weight": "3 x 100 g",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000235",
    "sku": "GCPL-CN-235",
    "stock": 85,
    "minStock": 17,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121170_1-cinthol-herbal-soap-pack-of-3.jpg"
  },
  {
    "id": "prod-236",
    "name": "Godrej No.1 Sandal & Turmeric Soap",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Natural skin glow bath soap containing real sandal and turmeric extracts",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 38,
    "distPrice": 35,
    "wholesalePrice": 38,
    "retailPrice": 38,
    "unitType": "Box",
    "weight": "100 g",
    "boxQty": 72,
    "pieceQty": 1,
    "barcode": "8901157000236",
    "sku": "GCPL-N1-236",
    "stock": 86,
    "minStock": 17,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241315_8-godrej-no1-sandal-turmeric-soap.jpg"
  },
  {
    "id": "prod-237",
    "name": "Godrej No.1 Sandal & Turmeric Soap (Pack of 3)",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Sandal and turmeric active soap triple saver pack",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 110,
    "distPrice": 102,
    "wholesalePrice": 110,
    "retailPrice": 110,
    "unitType": "Box",
    "weight": "3 x 100 g",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000237",
    "sku": "GCPL-N1-237",
    "stock": 87,
    "minStock": 17,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241316_8-godrej-no1-sandal-turmeric-soap-pack-of-3.jpg"
  },
  {
    "id": "prod-238",
    "name": "Godrej No.1 Sandal & Turmeric Soap (Buy 4 Get 1 Free)",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Value box with 5 standard sandal and turmeric soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 185,
    "distPrice": 170,
    "wholesalePrice": 185,
    "retailPrice": 185,
    "unitType": "Box",
    "weight": "5 x 100 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000238",
    "sku": "GCPL-N1-238",
    "stock": 88,
    "minStock": 17,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241317_8-godrej-no1-sandal-turmeric-soap-buy-4-get-1.jpg"
  },
  {
    "id": "prod-239",
    "name": "Godrej No.1 Sandal & Turmeric Soap Large",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Large size sandal and turmeric skin glowing soap",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 55,
    "distPrice": 50,
    "wholesalePrice": 55,
    "retailPrice": 55,
    "unitType": "Box",
    "weight": "150 g",
    "boxQty": 72,
    "pieceQty": 1,
    "barcode": "8901157000239",
    "sku": "GCPL-N1-239",
    "stock": 89,
    "minStock": 17,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241318_8-godrej-no1-sandal-turmeric-soap-150g.jpg"
  },
  {
    "id": "prod-240",
    "name": "Godrej No.1 Sandal & Turmeric Large (Pack of 3)",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Triple pack of 150g sandal and turmeric soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 160,
    "distPrice": 145,
    "wholesalePrice": 159.5,
    "retailPrice": 160,
    "unitType": "Box",
    "weight": "3 x 150 g",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000240",
    "sku": "GCPL-N1-240",
    "stock": 30,
    "minStock": 6,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241319_8-godrej-no1-sandal-turmeric-soap-150g-pack-of-3.jpg"
  },
  {
    "id": "prod-241",
    "name": "Godrej No.1 Lime & Aloe Vera Soap",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Nourishing skin freshness soap containing lime and aloe",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 38,
    "distPrice": 35,
    "wholesalePrice": 38,
    "retailPrice": 38,
    "unitType": "Box",
    "weight": "100 g",
    "boxQty": 72,
    "pieceQty": 1,
    "barcode": "8901157000241",
    "sku": "GCPL-N1-241",
    "stock": 31,
    "minStock": 6,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241320_8-godrej-no1-lime-aloe-soap.jpg"
  },
  {
    "id": "prod-242",
    "name": "Godrej No.1 Lime & Aloe Vera Soap (Pack of 3)",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Lime and aloe vera active soap triple box",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 110,
    "distPrice": 102,
    "wholesalePrice": 110,
    "retailPrice": 110,
    "unitType": "Box",
    "weight": "3 x 100 g",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000242",
    "sku": "GCPL-N1-242",
    "stock": 32,
    "minStock": 6,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241321_8-godrej-no1-lime-aloe-soap-pack-of-3.jpg"
  },
  {
    "id": "prod-243",
    "name": "Godrej No.1 Lime & Aloe Vera (Buy 4 Get 1 Free)",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Value box with 5 standard lime and aloe soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 185,
    "distPrice": 170,
    "wholesalePrice": 185,
    "retailPrice": 185,
    "unitType": "Box",
    "weight": "5 x 100 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000243",
    "sku": "GCPL-N1-243",
    "stock": 33,
    "minStock": 6,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241322_8-godrej-no1-lime-aloe-soap-buy-4-get-1.jpg"
  },
  {
    "id": "prod-244",
    "name": "Godrej No.1 Lime & Aloe Vera Soap Large",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Large size lime and aloe vera nourishing soap",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 55,
    "distPrice": 50,
    "wholesalePrice": 55,
    "retailPrice": 55,
    "unitType": "Box",
    "weight": "150 g",
    "boxQty": 72,
    "pieceQty": 1,
    "barcode": "8901157000244",
    "sku": "GCPL-N1-244",
    "stock": 34,
    "minStock": 6,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241323_8-godrej-no1-lime-aloe-soap-150g.jpg"
  },
  {
    "id": "prod-245",
    "name": "Godrej No.1 Lime & Aloe Vera Large (Pack of 3)",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Triple pack of 150g lime and aloe vera soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 160,
    "distPrice": 145,
    "wholesalePrice": 159.5,
    "retailPrice": 160,
    "unitType": "Box",
    "weight": "3 x 150 g",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000245",
    "sku": "GCPL-N1-245",
    "stock": 35,
    "minStock": 7,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241324_8-godrej-no1-lime-aloe-soap-150g-pack-of-3.jpg"
  },
  {
    "id": "prod-246",
    "name": "Godrej No.1 Jasmine Soap",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Aromatic skin softening soap infused with jasmine extracts",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 38,
    "distPrice": 35,
    "wholesalePrice": 38,
    "retailPrice": 38,
    "unitType": "Box",
    "weight": "100 g",
    "boxQty": 72,
    "pieceQty": 1,
    "barcode": "8901157000246",
    "sku": "GCPL-N1-246",
    "stock": 36,
    "minStock": 7,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241325_8-godrej-no1-jasmine-soap.jpg"
  },
  {
    "id": "prod-247",
    "name": "Godrej No.1 Jasmine Soap (Pack of 3)",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Jasmine extract sweet aroma soap triple pack",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 110,
    "distPrice": 102,
    "wholesalePrice": 110,
    "retailPrice": 110,
    "unitType": "Box",
    "weight": "3 x 100 g",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000247",
    "sku": "GCPL-N1-247",
    "stock": 37,
    "minStock": 7,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241326_8-godrej-no1-jasmine-soap-pack-of-3.jpg"
  },
  {
    "id": "prod-248",
    "name": "Godrej No.1 Jasmine Soap (Buy 4 Get 1 Free)",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Value box containing 5 sweet jasmine soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 185,
    "distPrice": 170,
    "wholesalePrice": 185,
    "retailPrice": 185,
    "unitType": "Box",
    "weight": "5 x 100 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000248",
    "sku": "GCPL-N1-248",
    "stock": 38,
    "minStock": 7,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241327_8-godrej-no1-jasmine-soap-buy-4-get-1.jpg"
  },
  {
    "id": "prod-249",
    "name": "Godrej No.1 Jasmine Soap Large",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Large size sweet jasmine aromatic bath soap",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 55,
    "distPrice": 50,
    "wholesalePrice": 55,
    "retailPrice": 55,
    "unitType": "Box",
    "weight": "150 g",
    "boxQty": 72,
    "pieceQty": 1,
    "barcode": "8901157000249",
    "sku": "GCPL-N1-249",
    "stock": 39,
    "minStock": 7,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241328_8-godrej-no1-jasmine-soap-150g.jpg"
  },
  {
    "id": "prod-250",
    "name": "Godrej No.1 Jasmine Soap Large (Pack of 3)",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Triple pack of 150g sweet jasmine soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 160,
    "distPrice": 145,
    "wholesalePrice": 159.5,
    "retailPrice": 160,
    "unitType": "Box",
    "weight": "3 x 150 g",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000250",
    "sku": "GCPL-N1-250",
    "stock": 40,
    "minStock": 8,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241329_8-godrej-no1-jasmine-soap-150g-pack-of-3.jpg"
  },
  {
    "id": "prod-251",
    "name": "Godrej No.1 Saffron & Milk Soap",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Nourishing skin fairness soap with saffron and rich cream milk",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 38,
    "distPrice": 35,
    "wholesalePrice": 38,
    "retailPrice": 38,
    "unitType": "Box",
    "weight": "100 g",
    "boxQty": 72,
    "pieceQty": 1,
    "barcode": "8901157000251",
    "sku": "GCPL-N1-251",
    "stock": 41,
    "minStock": 8,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241330_8-godrej-no1-saffron-milk-soap.jpg"
  },
  {
    "id": "prod-252",
    "name": "Godrej No.1 Saffron & Milk Soap (Pack of 3)",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Saffron and cream milk soap triple box",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 110,
    "distPrice": 102,
    "wholesalePrice": 110,
    "retailPrice": 110,
    "unitType": "Box",
    "weight": "3 x 100 g",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000252",
    "sku": "GCPL-N1-252",
    "stock": 42,
    "minStock": 8,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241331_8-godrej-no1-saffron-milk-soap-pack-of-3.jpg"
  },
  {
    "id": "prod-253",
    "name": "Godrej No.1 Saffron & Milk (Buy 4 Get 1 Free)",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Value box containing 5 saffron and milk soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 185,
    "distPrice": 170,
    "wholesalePrice": 185,
    "retailPrice": 185,
    "unitType": "Box",
    "weight": "5 x 100 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000253",
    "sku": "GCPL-N1-253",
    "stock": 43,
    "minStock": 8,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241332_8-godrej-no1-saffron-milk-soap-buy-4-get-1.jpg"
  },
  {
    "id": "prod-254",
    "name": "Godrej No.1 Saffron & Milk Soap Large",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Large size saffron and milk complex soap",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 55,
    "distPrice": 50,
    "wholesalePrice": 55,
    "retailPrice": 55,
    "unitType": "Box",
    "weight": "150 g",
    "boxQty": 72,
    "pieceQty": 1,
    "barcode": "8901157000254",
    "sku": "GCPL-N1-254",
    "stock": 44,
    "minStock": 8,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241333_8-godrej-no1-saffron-milk-soap-150g.jpg"
  },
  {
    "id": "prod-255",
    "name": "Godrej No.1 Saffron & Milk Large (Pack of 3)",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Triple pack of 150g saffron and milk soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 160,
    "distPrice": 145,
    "wholesalePrice": 159.5,
    "retailPrice": 160,
    "unitType": "Box",
    "weight": "3 x 150 g",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000255",
    "sku": "GCPL-N1-255",
    "stock": 45,
    "minStock": 9,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241334_8-godrej-no1-saffron-milk-soap-150g-pack-of-3.jpg"
  },
  {
    "id": "prod-256",
    "name": "Godrej No.1 Rose & Almond Oil Soap",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Moisturising bath soap with rose essence and almond oil",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 38,
    "distPrice": 35,
    "wholesalePrice": 38,
    "retailPrice": 38,
    "unitType": "Box",
    "weight": "100 g",
    "boxQty": 72,
    "pieceQty": 1,
    "barcode": "8901157000256",
    "sku": "GCPL-N1-256",
    "stock": 46,
    "minStock": 9,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241335_8-godrej-no1-rose-almond-soap.jpg"
  },
  {
    "id": "prod-257",
    "name": "Godrej No.1 Rose & Almond Oil Soap (Pack of 3)",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Rose and almond oil active soap triple pack",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 110,
    "distPrice": 102,
    "wholesalePrice": 110,
    "retailPrice": 110,
    "unitType": "Box",
    "weight": "3 x 100 g",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000257",
    "sku": "GCPL-N1-257",
    "stock": 47,
    "minStock": 9,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241336_8-godrej-no1-rose-almond-soap-pack-of-3.jpg"
  },
  {
    "id": "prod-258",
    "name": "Godrej No.1 Rose & Almond Oil (Buy 4 Get 1 Free)",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Value box containing 5 rose and almond soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 185,
    "distPrice": 170,
    "wholesalePrice": 185,
    "retailPrice": 185,
    "unitType": "Box",
    "weight": "5 x 100 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000258",
    "sku": "GCPL-N1-258",
    "stock": 48,
    "minStock": 9,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241337_8-godrej-no1-rose-almond-soap-buy-4-get-1.jpg"
  },
  {
    "id": "prod-259",
    "name": "Godrej No.1 Rose & Almond Oil Soap Large",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Large size rose extract and almond oil soap",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 55,
    "distPrice": 50,
    "wholesalePrice": 55,
    "retailPrice": 55,
    "unitType": "Box",
    "weight": "150 g",
    "boxQty": 72,
    "pieceQty": 1,
    "barcode": "8901157000259",
    "sku": "GCPL-N1-259",
    "stock": 49,
    "minStock": 9,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241338_8-godrej-no1-rose-almond-soap-150g.jpg"
  },
  {
    "id": "prod-260",
    "name": "Godrej No.1 Rose & Almond Large (Pack of 3)",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Triple pack of 150g rose and almond soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 160,
    "distPrice": 145,
    "wholesalePrice": 159.5,
    "retailPrice": 160,
    "unitType": "Box",
    "weight": "3 x 150 g",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000260",
    "sku": "GCPL-N1-260",
    "stock": 50,
    "minStock": 10,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241339_8-godrej-no1-rose-almond-soap-150g-pack-of-3.jpg"
  },
  {
    "id": "prod-261",
    "name": "Godrej No.1 Lavender Soap",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Relaxing bath soap infused with sweet alpine lavender extract",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 38,
    "distPrice": 35,
    "wholesalePrice": 38,
    "retailPrice": 38,
    "unitType": "Box",
    "weight": "100 g",
    "boxQty": 72,
    "pieceQty": 1,
    "barcode": "8901157000261",
    "sku": "GCPL-N1-261",
    "stock": 51,
    "minStock": 10,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241340_8-godrej-no1-lavender-soap.jpg"
  },
  {
    "id": "prod-262",
    "name": "Godrej No.1 Lavender Soap (Pack of 3)",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Relaxing lavender extract soap triple pack",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 110,
    "distPrice": 102,
    "wholesalePrice": 110,
    "retailPrice": 110,
    "unitType": "Box",
    "weight": "3 x 100 g",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000262",
    "sku": "GCPL-N1-262",
    "stock": 52,
    "minStock": 10,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241341_8-godrej-no1-lavender-soap-pack-of-3.jpg"
  },
  {
    "id": "prod-263",
    "name": "Godrej No.1 Lavender Soap (Buy 4 Get 1 Free)",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Value box containing 5 fresh lavender soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 185,
    "distPrice": 170,
    "wholesalePrice": 185,
    "retailPrice": 185,
    "unitType": "Box",
    "weight": "5 x 100 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000263",
    "sku": "GCPL-N1-263",
    "stock": 53,
    "minStock": 10,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241342_8-godrej-no1-lavender-soap-buy-4-get-1.jpg"
  },
  {
    "id": "prod-264",
    "name": "Godrej No.1 Lavender Soap Large",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Large size fresh alpine lavender bath soap",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 55,
    "distPrice": 50,
    "wholesalePrice": 55,
    "retailPrice": 55,
    "unitType": "Box",
    "weight": "150 g",
    "boxQty": 72,
    "pieceQty": 1,
    "barcode": "8901157000264",
    "sku": "GCPL-N1-264",
    "stock": 54,
    "minStock": 10,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241343_8-godrej-no1-lavender-soap-150g.jpg"
  },
  {
    "id": "prod-265",
    "name": "Godrej No.1 Lavender Soap Large (Pack of 3)",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Triple pack of 150g fresh lavender soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 160,
    "distPrice": 145,
    "wholesalePrice": 159.5,
    "retailPrice": 160,
    "unitType": "Box",
    "weight": "3 x 150 g",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000265",
    "sku": "GCPL-N1-265",
    "stock": 55,
    "minStock": 11,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241344_8-godrej-no1-lavender-soap-150g-pack-of-3.jpg"
  },
  {
    "id": "prod-266",
    "name": "Godrej No.1 Aloe Vera & Honey Soap",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Nourishing soap containing organic aloe vera gel and pure honey",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 38,
    "distPrice": 35,
    "wholesalePrice": 38,
    "retailPrice": 38,
    "unitType": "Box",
    "weight": "100 g",
    "boxQty": 72,
    "pieceQty": 1,
    "barcode": "8901157000266",
    "sku": "GCPL-N1-266",
    "stock": 56,
    "minStock": 11,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241345_8-godrej-no1-aloe-honey-soap.jpg"
  },
  {
    "id": "prod-267",
    "name": "Godrej No.1 Aloe Vera & Honey Soap (Pack of 3)",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Aloe vera and pure honey soap triple pack",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 110,
    "distPrice": 102,
    "wholesalePrice": 110,
    "retailPrice": 110,
    "unitType": "Box",
    "weight": "3 x 100 g",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000267",
    "sku": "GCPL-N1-267",
    "stock": 57,
    "minStock": 11,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241346_8-godrej-no1-aloe-honey-soap-pack-of-3.jpg"
  },
  {
    "id": "prod-268",
    "name": "Godrej No.1 Aloe Vera & Honey (Buy 4 Get 1 Free)",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Value box containing 5 aloe and honey soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 185,
    "distPrice": 170,
    "wholesalePrice": 185,
    "retailPrice": 185,
    "unitType": "Box",
    "weight": "5 x 100 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000268",
    "sku": "GCPL-N1-268",
    "stock": 58,
    "minStock": 11,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241347_8-godrej-no1-aloe-honey-soap-buy-4-get-1.jpg"
  },
  {
    "id": "prod-269",
    "name": "Godrej No.1 Aloe Vera & Honey Soap Large",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Large size moisturizing aloe and honey soap",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 55,
    "distPrice": 50,
    "wholesalePrice": 55,
    "retailPrice": 55,
    "unitType": "Box",
    "weight": "150 g",
    "boxQty": 72,
    "pieceQty": 1,
    "barcode": "8901157000269",
    "sku": "GCPL-N1-269",
    "stock": 59,
    "minStock": 11,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241348_8-godrej-no1-aloe-honey-soap-150g.jpg"
  },
  {
    "id": "prod-270",
    "name": "Godrej No.1 Aloe Vera & Honey Large (Pack of 3)",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Triple pack of 150g aloe and honey soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 160,
    "distPrice": 145,
    "wholesalePrice": 159.5,
    "retailPrice": 160,
    "unitType": "Box",
    "weight": "3 x 150 g",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000270",
    "sku": "GCPL-N1-270",
    "stock": 60,
    "minStock": 12,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241349_8-godrej-no1-aloe-honey-soap-150g-pack-of-3.jpg"
  },
  {
    "id": "prod-271",
    "name": "Godrej No.1 Neem Soap",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Deep purifying antibacterial neem oil soap",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 38,
    "distPrice": 35,
    "wholesalePrice": 38,
    "retailPrice": 38,
    "unitType": "Box",
    "weight": "100 g",
    "boxQty": 72,
    "pieceQty": 1,
    "barcode": "8901157000271",
    "sku": "GCPL-N1-271",
    "stock": 61,
    "minStock": 12,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241350_8-godrej-no1-neem-soap.jpg"
  },
  {
    "id": "prod-272",
    "name": "Godrej No.1 Neem Soap (Pack of 3)",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Deep purifying organic neem soap triple pack",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 110,
    "distPrice": 102,
    "wholesalePrice": 110,
    "retailPrice": 110,
    "unitType": "Box",
    "weight": "3 x 100 g",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000272",
    "sku": "GCPL-N1-272",
    "stock": 62,
    "minStock": 12,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241351_8-godrej-no1-neem-soap-pack-of-3.jpg"
  },
  {
    "id": "prod-273",
    "name": "Godrej No.1 Neem Soap (Buy 4 Get 1 Free)",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Value box containing 5 antibacterial neem soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 185,
    "distPrice": 170,
    "wholesalePrice": 185,
    "retailPrice": 185,
    "unitType": "Box",
    "weight": "5 x 100 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000273",
    "sku": "GCPL-N1-273",
    "stock": 63,
    "minStock": 12,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241352_8-godrej-no1-neem-soap-buy-4-get-1.jpg"
  },
  {
    "id": "prod-274",
    "name": "Godrej No.1 Neem Soap Large",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Large size deep purifying antibacterial neem soap",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 55,
    "distPrice": 50,
    "wholesalePrice": 55,
    "retailPrice": 55,
    "unitType": "Box",
    "weight": "150 g",
    "boxQty": 72,
    "pieceQty": 1,
    "barcode": "8901157000274",
    "sku": "GCPL-N1-274",
    "stock": 64,
    "minStock": 12,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241353_8-godrej-no1-neem-soap-150g.jpg"
  },
  {
    "id": "prod-275",
    "name": "Godrej No.1 Neem Soap Large (Pack of 3)",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Triple pack of 150g antibacterial neem soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 160,
    "distPrice": 145,
    "wholesalePrice": 159.5,
    "retailPrice": 160,
    "unitType": "Box",
    "weight": "3 x 150 g",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000275",
    "sku": "GCPL-N1-275",
    "stock": 65,
    "minStock": 13,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241354_8-godrej-no1-neem-soap-150g-pack-of-3.jpg"
  },
  {
    "id": "prod-276",
    "name": "Godrej No.1 Shikakai & Amla Soap",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Traditional skin conditioning soap with shikakai and amla",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 38,
    "distPrice": 35,
    "wholesalePrice": 38,
    "retailPrice": 38,
    "unitType": "Box",
    "weight": "100 g",
    "boxQty": 72,
    "pieceQty": 1,
    "barcode": "8901157000276",
    "sku": "GCPL-N1-276",
    "stock": 66,
    "minStock": 13,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241355_8-godrej-no1-shikakai-soap.jpg"
  },
  {
    "id": "prod-277",
    "name": "Godrej No.1 Shikakai & Amla Soap (Pack of 3)",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Traditional skin amla and shikakai soap triple pack",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 110,
    "distPrice": 102,
    "wholesalePrice": 110,
    "retailPrice": 110,
    "unitType": "Box",
    "weight": "3 x 100 g",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000277",
    "sku": "GCPL-N1-277",
    "stock": 67,
    "minStock": 13,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241356_8-godrej-no1-shikakai-soap-pack-of-3.jpg"
  },
  {
    "id": "prod-278",
    "name": "Godrej No.1 Shikakai & Amla (Buy 4 Get 1 Free)",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Value box containing 5 shikakai and amla soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 185,
    "distPrice": 170,
    "wholesalePrice": 185,
    "retailPrice": 185,
    "unitType": "Box",
    "weight": "5 x 100 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000278",
    "sku": "GCPL-N1-278",
    "stock": 68,
    "minStock": 13,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241357_8-godrej-no1-shikakai-soap-buy-4-get-1.jpg"
  },
  {
    "id": "prod-279",
    "name": "Godrej No.1 Sandal & Turmeric Small Soap",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Travel sized sandal and turmeric skin glow soap",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 25,
    "distPrice": 23,
    "wholesalePrice": 25,
    "retailPrice": 25,
    "unitType": "Box",
    "weight": "70 g",
    "boxQty": 72,
    "pieceQty": 1,
    "barcode": "8901157000279",
    "sku": "GCPL-N1-279",
    "stock": 69,
    "minStock": 13,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241358_8-godrej-no1-sandal-70g.jpg"
  },
  {
    "id": "prod-280",
    "name": "Godrej No.1 Sandal & Turmeric Small (Pack of 4)",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Four pack travel size sandal turmeric soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 100,
    "distPrice": 90,
    "wholesalePrice": 99,
    "retailPrice": 100,
    "unitType": "Box",
    "weight": "4 x 70 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000280",
    "sku": "GCPL-N1-280",
    "stock": 70,
    "minStock": 14,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241359_8-godrej-no1-sandal-70g-pack-of-4.jpg"
  },
  {
    "id": "prod-281",
    "name": "Godrej No.1 Lime & Aloe Vera Small Soap",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Travel sized lime aloe nourishing skin soap",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 25,
    "distPrice": 23,
    "wholesalePrice": 25,
    "retailPrice": 25,
    "unitType": "Box",
    "weight": "70 g",
    "boxQty": 72,
    "pieceQty": 1,
    "barcode": "8901157000281",
    "sku": "GCPL-N1-281",
    "stock": 71,
    "minStock": 14,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241360_8-godrej-no1-lime-70g.jpg"
  },
  {
    "id": "prod-282",
    "name": "Godrej No.1 Lime & Aloe Vera Small (Pack of 4)",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Four pack travel size lime aloe soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 100,
    "distPrice": 90,
    "wholesalePrice": 99,
    "retailPrice": 100,
    "unitType": "Box",
    "weight": "4 x 70 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000282",
    "sku": "GCPL-N1-282",
    "stock": 72,
    "minStock": 14,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241361_8-godrej-no1-lime-70g-pack-of-4.jpg"
  },
  {
    "id": "prod-283",
    "name": "Godrej No.1 Jasmine Small Soap",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Travel sized jasmine aromatic soap",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 25,
    "distPrice": 23,
    "wholesalePrice": 25,
    "retailPrice": 25,
    "unitType": "Box",
    "weight": "70 g",
    "boxQty": 72,
    "pieceQty": 1,
    "barcode": "8901157000283",
    "sku": "GCPL-N1-283",
    "stock": 73,
    "minStock": 14,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241362_8-godrej-no1-jasmine-70g.jpg"
  },
  {
    "id": "prod-284",
    "name": "Godrej No.1 Jasmine Small (Pack of 4)",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Four pack travel size jasmine soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 100,
    "distPrice": 90,
    "wholesalePrice": 99,
    "retailPrice": 100,
    "unitType": "Box",
    "weight": "4 x 70 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000284",
    "sku": "GCPL-N1-284",
    "stock": 74,
    "minStock": 14,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241363_8-godrej-no1-jasmine-70g-pack-of-4.jpg"
  },
  {
    "id": "prod-285",
    "name": "Godrej No.1 Sandal & Turmeric Soap (Buy 3 Get 1 Free)",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Value bundle of 4 sandal and turmeric soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 152,
    "distPrice": 139,
    "wholesalePrice": 152,
    "retailPrice": 152,
    "unitType": "Box",
    "weight": "4 x 100 g",
    "boxQty": 72,
    "pieceQty": 1,
    "barcode": "8901157000285",
    "sku": "GCPL-N1-285",
    "stock": 75,
    "minStock": 15,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241364_8-godrej-no1-sandal-buy-3-get-1.jpg"
  },
  {
    "id": "prod-286",
    "name": "Godrej No.1 Lime & Aloe Vera (Buy 3 Get 1 Free)",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Value bundle of 4 lime and aloe vera soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 152,
    "distPrice": 139,
    "wholesalePrice": 152,
    "retailPrice": 152,
    "unitType": "Box",
    "weight": "4 x 100 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000286",
    "sku": "GCPL-N1-286",
    "stock": 76,
    "minStock": 15,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241365_8-godrej-no1-lime-buy-3-get-1.jpg"
  },
  {
    "id": "prod-287",
    "name": "Godrej No.1 Jasmine Soap (Buy 3 Get 1 Free)",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Value bundle of 4 sweet jasmine aromatic soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 152,
    "distPrice": 139,
    "wholesalePrice": 152,
    "retailPrice": 152,
    "unitType": "Box",
    "weight": "4 x 100 g",
    "boxQty": 72,
    "pieceQty": 1,
    "barcode": "8901157000287",
    "sku": "GCPL-N1-287",
    "stock": 77,
    "minStock": 15,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241366_8-godrej-no1-jasmine-buy-3-get-1.jpg"
  },
  {
    "id": "prod-288",
    "name": "Godrej No.1 Saffron & Milk Soap (Buy 3 Get 1 Free)",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Value bundle of 4 saffron and milk soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 152,
    "distPrice": 139,
    "wholesalePrice": 152,
    "retailPrice": 152,
    "unitType": "Box",
    "weight": "4 x 100 g",
    "boxQty": 72,
    "pieceQty": 1,
    "barcode": "8901157000288",
    "sku": "GCPL-N1-288",
    "stock": 78,
    "minStock": 15,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241367_8-godrej-no1-saffron-buy-3-get-1.jpg"
  },
  {
    "id": "prod-289",
    "name": "Godrej No.1 Rose & Almond Oil (Buy 3 Get 1 Free)",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Value bundle of 4 rose and almond oil soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 152,
    "distPrice": 139,
    "wholesalePrice": 152,
    "retailPrice": 152,
    "unitType": "Box",
    "weight": "4 x 100 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000289",
    "sku": "GCPL-N1-289",
    "stock": 79,
    "minStock": 15,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241368_8-godrej-no1-rose-buy-3-get-1.jpg"
  },
  {
    "id": "prod-290",
    "name": "Godrej No.1 Lavender Soap (Buy 3 Get 1 Free)",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Value bundle of 4 fresh lavender aromatic soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 152,
    "distPrice": 139,
    "wholesalePrice": 152,
    "retailPrice": 152,
    "unitType": "Box",
    "weight": "4 x 100 g",
    "boxQty": 72,
    "pieceQty": 1,
    "barcode": "8901157000290",
    "sku": "GCPL-N1-290",
    "stock": 80,
    "minStock": 16,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241369_8-godrej-no1-lavender-buy-3-get-1.jpg"
  },
  {
    "id": "prod-291",
    "name": "Godrej No.1 Aloe Vera & Honey (Buy 3 Get 1 Free)",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Value bundle of 4 aloe vera and honey soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 152,
    "distPrice": 139,
    "wholesalePrice": 152,
    "retailPrice": 152,
    "unitType": "Box",
    "weight": "4 x 100 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000291",
    "sku": "GCPL-N1-291",
    "stock": 81,
    "minStock": 16,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241370_8-godrej-no1-aloe-buy-3-get-1.jpg"
  },
  {
    "id": "prod-292",
    "name": "Godrej No.1 Neem Soap (Buy 3 Get 1 Free)",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Value bundle of 4 antibacterial neem soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 152,
    "distPrice": 139,
    "wholesalePrice": 152,
    "retailPrice": 152,
    "unitType": "Box",
    "weight": "4 x 100 g",
    "boxQty": 72,
    "pieceQty": 1,
    "barcode": "8901157000292",
    "sku": "GCPL-N1-292",
    "stock": 82,
    "minStock": 16,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241371_8-godrej-no1-neem-buy-3-get-1.jpg"
  },
  {
    "id": "prod-293",
    "name": "Godrej No.1 Sandal & Turmeric Giant Pack",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Contains 4 large 125g sandal and turmeric soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 185,
    "distPrice": 165,
    "wholesalePrice": 181.5,
    "retailPrice": 185,
    "unitType": "Box",
    "weight": "500 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000293",
    "sku": "GCPL-N1-293",
    "stock": 83,
    "minStock": 16,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241372_8-godrej-no1-sandal-giant-500g.jpg"
  },
  {
    "id": "prod-294",
    "name": "Godrej No.1 Lime & Aloe Vera Giant Pack",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Contains 4 large 125g lime and aloe vera soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 185,
    "distPrice": 165,
    "wholesalePrice": 181.5,
    "retailPrice": 185,
    "unitType": "Box",
    "weight": "500 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000294",
    "sku": "GCPL-N1-294",
    "stock": 84,
    "minStock": 16,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241373_8-godrej-no1-lime-giant-500g.jpg"
  },
  {
    "id": "prod-295",
    "name": "Godrej No.1 Jasmine Soap Giant Pack",
    "brand": "Godrej No. 1",
    "category": "Personal Care",
    "subcategory": "Bath Soaps",
    "desc": "Contains 4 large 125g sweet jasmine soaps",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 185,
    "distPrice": 165,
    "wholesalePrice": 181.5,
    "retailPrice": 185,
    "unitType": "Box",
    "weight": "500 g",
    "boxQty": 72,
    "pieceQty": 1,
    "barcode": "8901157000295",
    "sku": "GCPL-N1-295",
    "stock": 85,
    "minStock": 17,
    "image": "https://www.bigbasket.com/media/uploads/p/l/241374_8-godrej-no1-jasmine-giant-500g.jpg"
  },
  {
    "id": "prod-296",
    "name": "Godrej Expert Rich Creme Hair Colour Natural Black",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "No-ammonia rich sachet hair colour with aloe vera and milk protein",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 35,
    "distPrice": 32,
    "wholesalePrice": 35,
    "retailPrice": 35,
    "unitType": "Box",
    "weight": "20 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000296",
    "sku": "GCPL-EX-296",
    "stock": 86,
    "minStock": 17,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40049282_6-godrej-expert-rich-creme-hair-colour-natural-black.jpg"
  },
  {
    "id": "prod-297",
    "name": "Godrej Expert Rich Creme Hair Colour Dark Brown",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "Dark brown formulation rich creme sachet hair color",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 35,
    "distPrice": 32,
    "wholesalePrice": 35,
    "retailPrice": 35,
    "unitType": "Box",
    "weight": "20 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000297",
    "sku": "GCPL-EX-297",
    "stock": 87,
    "minStock": 17,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40049283_6-godrej-expert-rich-creme-hair-colour-dark-brown.jpg"
  },
  {
    "id": "prod-298",
    "name": "Godrej Expert Rich Creme Hair Colour Natural Brown",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "Natural brown formulation rich creme sachet hair color",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 35,
    "distPrice": 32,
    "wholesalePrice": 35,
    "retailPrice": 35,
    "unitType": "Box",
    "weight": "20 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000298",
    "sku": "GCPL-EX-298",
    "stock": 88,
    "minStock": 17,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40049284_6-godrej-expert-rich-creme-hair-colour-natural-brown.jpg"
  },
  {
    "id": "prod-299",
    "name": "Godrej Expert Rich Creme Hair Colour Burgundy",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "Burgundy shade rich sachet creme color with aloe vera",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 35,
    "distPrice": 32,
    "wholesalePrice": 35,
    "retailPrice": 35,
    "unitType": "Box",
    "weight": "20 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000299",
    "sku": "GCPL-EX-299",
    "stock": 89,
    "minStock": 17,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40049285_6-godrej-expert-rich-creme-hair-colour-burgundy.jpg"
  },
  {
    "id": "prod-300",
    "name": "Godrej Expert Rich Creme Hair Colour Copper Brown",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "Copper brown rich sachet creme color with aloe vera",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 35,
    "distPrice": 32,
    "wholesalePrice": 35,
    "retailPrice": 35,
    "unitType": "Box",
    "weight": "20 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000300",
    "sku": "GCPL-EX-300",
    "stock": 30,
    "minStock": 6,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40049286_6-godrej-expert-rich-creme-hair-colour-copper-brown.jpg"
  },
  {
    "id": "prod-301",
    "name": "Godrej Expert Rich Creme Natural Black (Pack of 3)",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "Triple sachet pack of natural black cream hair color",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 105,
    "distPrice": 95,
    "wholesalePrice": 104.5,
    "retailPrice": 105,
    "unitType": "Box",
    "weight": "3 x 20 ml",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000301",
    "sku": "GCPL-EX-301",
    "stock": 31,
    "minStock": 6,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40049287_6-godrej-expert-rich-creme-natural-black-pack-of-3.jpg"
  },
  {
    "id": "prod-302",
    "name": "Godrej Expert Rich Creme Dark Brown (Pack of 3)",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "Triple sachet pack of dark brown cream hair color",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 105,
    "distPrice": 95,
    "wholesalePrice": 104.5,
    "retailPrice": 105,
    "unitType": "Box",
    "weight": "3 x 20 ml",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000302",
    "sku": "GCPL-EX-302",
    "stock": 32,
    "minStock": 6,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40049288_6-godrej-expert-rich-creme-dark-brown-pack-of-3.jpg"
  },
  {
    "id": "prod-303",
    "name": "Godrej Expert Rich Creme Natural Black (Pack of 5)",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "Five sachet saver pack of natural black cream hair color",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 175,
    "distPrice": 155,
    "wholesalePrice": 170.5,
    "retailPrice": 175,
    "unitType": "Box",
    "weight": "5 x 20 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000303",
    "sku": "GCPL-EX-303",
    "stock": 33,
    "minStock": 6,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40049289_6-godrej-expert-rich-creme-natural-black-pack-of-5.jpg"
  },
  {
    "id": "prod-304",
    "name": "Godrej Expert Rich Creme Dark Brown (Pack of 5)",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "Five sachet saver pack of dark brown cream hair color",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 175,
    "distPrice": 155,
    "wholesalePrice": 170.5,
    "retailPrice": 175,
    "unitType": "Box",
    "weight": "5 x 20 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000304",
    "sku": "GCPL-EX-304",
    "stock": 34,
    "minStock": 6,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40049290_6-godrej-expert-rich-creme-dark-brown-pack-of-5.jpg"
  },
  {
    "id": "prod-305",
    "name": "Godrej Expert Rich Creme Natural Black Kit",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "Complete home kit box containing cream sachet",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 120,
    "distPrice": 105,
    "wholesalePrice": 115.5,
    "retailPrice": 120,
    "unitType": "Box",
    "weight": "1 Unit",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000305",
    "sku": "GCPL-EX-305",
    "stock": 35,
    "minStock": 7,
    "image": "developer"
  },
  {
    "id": "prod-306",
    "name": "Godrej Expert Rich Creme Dark Brown Kit",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "Complete home kit box containing dark brown cream components",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 120,
    "distPrice": 105,
    "wholesalePrice": 115.5,
    "retailPrice": 120,
    "unitType": "Box",
    "weight": "1 Unit",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000306",
    "sku": "GCPL-EX-306",
    "stock": 36,
    "minStock": 7,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40049292_6-godrej-expert-rich-creme-dark-brown-kit.jpg"
  },
  {
    "id": "prod-307",
    "name": "Godrej Expert Rich Creme Natural Brown Kit",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "Complete home kit box containing natural brown cream components",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 120,
    "distPrice": 105,
    "wholesalePrice": 115.5,
    "retailPrice": 120,
    "unitType": "Box",
    "weight": "1 Unit",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000307",
    "sku": "GCPL-EX-307",
    "stock": 37,
    "minStock": 7,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40049293_6-godrej-expert-rich-creme-natural-brown-kit.jpg"
  },
  {
    "id": "prod-308",
    "name": "Godrej Expert Rich Creme Burgundy Kit",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "Complete home kit box containing burgundy cream components",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 120,
    "distPrice": 105,
    "wholesalePrice": 115.5,
    "retailPrice": 120,
    "unitType": "Box",
    "weight": "1 Unit",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000308",
    "sku": "GCPL-EX-308",
    "stock": 38,
    "minStock": 7,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40049294_6-godrej-expert-rich-creme-burgundy-kit.jpg"
  },
  {
    "id": "prod-309",
    "name": "Godrej Expert Easy 5-Min Shampoo Hair Colour Black",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "No-ammonia express hair dye shampoo with active amla and shikakai",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 30,
    "distPrice": 28,
    "wholesalePrice": 30,
    "retailPrice": 30,
    "unitType": "Box",
    "weight": "25 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000309",
    "sku": "GCPL-EX-309",
    "stock": 39,
    "minStock": 7,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40192845_1-godrej-expert-easy-shampoo-hair-colour-black.jpg"
  },
  {
    "id": "prod-310",
    "name": "Godrej Expert Easy 5-Min Shampoo Colour Dark Brown",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "Express hair dye shampoo in rich dark brown shade",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 30,
    "distPrice": 28,
    "wholesalePrice": 30,
    "retailPrice": 30,
    "unitType": "Box",
    "weight": "25 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000310",
    "sku": "GCPL-EX-310",
    "stock": 40,
    "minStock": 8,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40192846_1-godrej-expert-easy-shampoo-hair-colour-dark-brown.jpg"
  },
  {
    "id": "prod-311",
    "name": "Godrej Expert Easy 5-Min Shampoo Colour Natural Brown",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "Express hair dye shampoo in soft natural brown shade",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 30,
    "distPrice": 28,
    "wholesalePrice": 30,
    "retailPrice": 30,
    "unitType": "Box",
    "weight": "25 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000311",
    "sku": "GCPL-EX-311",
    "stock": 41,
    "minStock": 8,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40192847_1-godrej-expert-easy-shampoo-hair-colour-natural-brown.jpg"
  },
  {
    "id": "prod-312",
    "name": "Godrej Expert Easy 5-Min Shampoo Black (Pack of 3)",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "Triple pouch saver pack of express black shampoo color",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 90,
    "distPrice": 80,
    "wholesalePrice": 88,
    "retailPrice": 90,
    "unitType": "Box",
    "weight": "3 x 25 ml",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000312",
    "sku": "GCPL-EX-312",
    "stock": 42,
    "minStock": 8,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40192848_1-godrej-expert-easy-shampoo-black-pack-of-3.jpg"
  },
  {
    "id": "prod-313",
    "name": "Godrej Expert Easy 5-Min Shampoo Dark Brown (Pack of 3)",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "Triple pouch saver pack of dark brown shampoo color",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 90,
    "distPrice": 80,
    "wholesalePrice": 88,
    "retailPrice": 90,
    "unitType": "Box",
    "weight": "3 x 25 ml",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000313",
    "sku": "GCPL-EX-313",
    "stock": 43,
    "minStock": 8,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40192849_1-godrej-expert-easy-shampoo-dark-brown-pack-of-3.jpg"
  },
  {
    "id": "prod-314",
    "name": "Godrej Expert Easy 5-Min Shampoo Black (Pack of 5)",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "Five pack box of express black shampoo color",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 150,
    "distPrice": 132,
    "wholesalePrice": 145.2,
    "retailPrice": 150,
    "unitType": "Box",
    "weight": "5 x 25 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000314",
    "sku": "GCPL-EX-314",
    "stock": 44,
    "minStock": 8,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40192850_1-godrej-expert-easy-shampoo-black-pack-of-5.jpg"
  },
  {
    "id": "prod-315",
    "name": "Godrej Expert Powder Hair Dye Original Black",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "Traditional organic powder hair dye sachet",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 15,
    "distPrice": 15,
    "wholesalePrice": 15,
    "retailPrice": 15,
    "unitType": "Box",
    "weight": "3 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000315",
    "sku": "GCPL-EX-315",
    "stock": 45,
    "minStock": 9,
    "image": "https://www.bigbasket.com/media/uploads/p/l/102830_5-godrej-expert-powder-hair-dye.jpg"
  },
  {
    "id": "prod-316",
    "name": "Godrej Expert Powder Hair Dye Original Black (Pack of 10)",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "Ten sachet strip of traditional powder hair dye",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 150,
    "distPrice": 140,
    "wholesalePrice": 150,
    "retailPrice": 150,
    "unitType": "Box",
    "weight": "10 x 3 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000316",
    "sku": "GCPL-EX-316",
    "stock": 46,
    "minStock": 9,
    "image": "https://www.bigbasket.com/media/uploads/p/l/102831_5-godrej-expert-powder-hair-dye-pack-of-10.jpg"
  },
  {
    "id": "prod-317",
    "name": "Godrej Expert Powder Hair Dye Super Double Active",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "Powder dye with advanced super double active conditioner",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 18,
    "distPrice": 18,
    "wholesalePrice": 18,
    "retailPrice": 18,
    "unitType": "Box",
    "weight": "3 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000317",
    "sku": "GCPL-EX-317",
    "stock": 47,
    "minStock": 9,
    "image": "https://www.bigbasket.com/media/uploads/p/l/102832_5-godrej-expert-powder-hair-dye-super.jpg"
  },
  {
    "id": "prod-318",
    "name": "Godrej Expert Powder Hair Dye Super (Pack of 10)",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "Ten sachet strip of super double active powder dye",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 180,
    "distPrice": 165,
    "wholesalePrice": 180,
    "retailPrice": 180,
    "unitType": "Box",
    "weight": "10 x 3 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000318",
    "sku": "GCPL-EX-318",
    "stock": 48,
    "minStock": 9,
    "image": "https://www.bigbasket.com/media/uploads/p/l/102833_5-godrej-expert-powder-hair-dye-super-pack-of-10.jpg"
  },
  {
    "id": "prod-319",
    "name": "Godrej Liquid Hair Dye Kesh Kala",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "Classic dark oil liquid dye for slow deep black toning",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 75,
    "distPrice": 68,
    "wholesalePrice": 74.8,
    "retailPrice": 75,
    "unitType": "Box",
    "weight": "100 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000319",
    "sku": "GCPL-EX-319",
    "stock": 49,
    "minStock": 9,
    "image": "https://www.bigbasket.com/media/uploads/p/l/102834_5-godrej-liquid-hair-dye.jpg"
  },
  {
    "id": "prod-320",
    "name": "Godrej Liquid Hair Dye Kesh Kala Large",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "Classic dark oil liquid dye in large glass bottle",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 130,
    "distPrice": 118,
    "wholesalePrice": 129.8,
    "retailPrice": 130,
    "unitType": "Box",
    "weight": "200 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000320",
    "sku": "GCPL-EX-320",
    "stock": 50,
    "minStock": 10,
    "image": "https://www.bigbasket.com/media/uploads/p/l/102835_5-godrej-liquid-hair-dye-200ml.jpg"
  },
  {
    "id": "prod-321",
    "name": "Godrej Nupur 100% Pure Henna Mehendi Powder",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Henna Powders",
    "desc": "100% pure organic Rajasthani henna leaves powder",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 10,
    "distPrice": 10,
    "wholesalePrice": 10,
    "retailPrice": 10,
    "unitType": "Box",
    "weight": "15 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000321",
    "sku": "GCPL-EX-321",
    "stock": 51,
    "minStock": 10,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118347_1-godrej-nupur-henna.jpg"
  },
  {
    "id": "prod-322",
    "name": "Godrej Nupur 100% Pure Henna Powder Medium",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Henna Powders",
    "desc": "Pure organic Rajasthani henna in medium pouch",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 65,
    "distPrice": 60,
    "wholesalePrice": 65,
    "retailPrice": 65,
    "unitType": "Box",
    "weight": "120 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000322",
    "sku": "GCPL-EX-322",
    "stock": 52,
    "minStock": 10,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118348_1-godrej-nupur-henna-120g.jpg"
  },
  {
    "id": "prod-323",
    "name": "Godrej Nupur 100% Pure Henna Powder Large",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Henna Powders",
    "desc": "Pure organic Rajasthani henna in family pouch",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 180,
    "distPrice": 160,
    "wholesalePrice": 176,
    "retailPrice": 180,
    "unitType": "Box",
    "weight": "400 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000323",
    "sku": "GCPL-EX-323",
    "stock": 53,
    "minStock": 10,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118349_1-godrej-nupur-henna-400g.jpg"
  },
  {
    "id": "prod-324",
    "name": "Godrej Nupur Henna 9 Herbs Blend",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Henna Powders",
    "desc": "Pure henna fortified with 9 active ayurvedic herbs for hair therapy",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 25,
    "distPrice": 23,
    "wholesalePrice": 25,
    "retailPrice": 25,
    "unitType": "Box",
    "weight": "30 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000324",
    "sku": "GCPL-EX-324",
    "stock": 54,
    "minStock": 10,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118350_1-godrej-nupur-9-herbs.jpg"
  },
  {
    "id": "prod-325",
    "name": "Godrej Nupur Henna 9 Herbs Blend Medium",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Henna Powders",
    "desc": "Ayurvedic 9 herbs henna blend in medium pouch",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 95,
    "distPrice": 85,
    "wholesalePrice": 93.5,
    "retailPrice": 95,
    "unitType": "Box",
    "weight": "150 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000325",
    "sku": "GCPL-EX-325",
    "stock": 55,
    "minStock": 11,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118351_1-godrej-nupur-9-herbs-150g.jpg"
  },
  {
    "id": "prod-326",
    "name": "Godrej Nupur Henna 9 Herbs Blend Large",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Henna Powders",
    "desc": "Ayurvedic 9 herbs henna blend in family pouch",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 270,
    "distPrice": 240,
    "wholesalePrice": 264,
    "retailPrice": 270,
    "unitType": "Box",
    "weight": "500 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000326",
    "sku": "GCPL-EX-326",
    "stock": 56,
    "minStock": 11,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118352_1-godrej-nupur-9-herbs-500g.jpg"
  },
  {
    "id": "prod-327",
    "name": "Godrej Nupur Henna 9 Herbs Blend Jumbo",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Henna Powders",
    "desc": "Ayurvedic 9 herbs henna blend in bulk pack",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 499,
    "distPrice": 440,
    "wholesalePrice": 484,
    "retailPrice": 499,
    "unitType": "Box",
    "weight": "1 kg",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000327",
    "sku": "GCPL-EX-327",
    "stock": 57,
    "minStock": 11,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118353_1-godrej-nupur-9-herbs-1kg.jpg"
  },
  {
    "id": "prod-328",
    "name": "Godrej Nupur Coconut Hair Oil with Jasmine",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Oils",
    "desc": "Lightweight moisturizing hair oil with organic jasmine extracts",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 65,
    "distPrice": 60,
    "wholesalePrice": 65,
    "retailPrice": 65,
    "unitType": "Box",
    "weight": "100 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000328",
    "sku": "GCPL-EX-328",
    "stock": 58,
    "minStock": 11,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118354_1-godrej-nupur-jasmine-oil.jpg"
  },
  {
    "id": "prod-329",
    "name": "Godrej Nupur Coconut Hair Oil with Jasmine Large",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Oils",
    "desc": "Lightweight Jasmine hair oil in large bottle",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 115,
    "distPrice": 105,
    "wholesalePrice": 115,
    "retailPrice": 115,
    "unitType": "Box",
    "weight": "200 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000329",
    "sku": "GCPL-EX-329",
    "stock": 59,
    "minStock": 11,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118355_1-godrej-nupur-jasmine-oil-200ml.jpg"
  },
  {
    "id": "prod-330",
    "name": "Godrej Nupur Coconut Hair Oil Pure",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Oils",
    "desc": "100% pure premium double filtered coconut oil",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 55,
    "distPrice": 50,
    "wholesalePrice": 55,
    "retailPrice": 55,
    "unitType": "Box",
    "weight": "100 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000330",
    "sku": "GCPL-EX-330",
    "stock": 60,
    "minStock": 12,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118356_1-godrej-nupur-coconut-oil.jpg"
  },
  {
    "id": "prod-331",
    "name": "Godrej Nupur Coconut Hair Oil Pure Large",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Oils",
    "desc": "100% pure coconut oil in large blue bottle",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 100,
    "distPrice": 90,
    "wholesalePrice": 99,
    "retailPrice": 100,
    "unitType": "Box",
    "weight": "200 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000331",
    "sku": "GCPL-EX-331",
    "stock": 61,
    "minStock": 12,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118357_1-godrej-nupur-coconut-oil-200ml.jpg"
  },
  {
    "id": "prod-332",
    "name": "Godrej Expert Rich Creme Multi Pack Black (Pack of 10)",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "Bumper pack containing 10 natural black creme sachets",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 350,
    "distPrice": 310,
    "wholesalePrice": 341,
    "retailPrice": 350,
    "unitType": "Box",
    "weight": "10 x 20 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000332",
    "sku": "GCPL-EX-332",
    "stock": 62,
    "minStock": 12,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40049295_6-godrej-expert-rich-creme-black-pack-of-10.jpg"
  },
  {
    "id": "prod-333",
    "name": "Godrej Expert Rich Creme Multi Pack Dark Brown (Pack of 10)",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "Bumper pack containing 10 dark brown creme sachets",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 350,
    "distPrice": 310,
    "wholesalePrice": 341,
    "retailPrice": 350,
    "unitType": "Box",
    "weight": "10 x 20 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000333",
    "sku": "GCPL-EX-333",
    "stock": 63,
    "minStock": 12,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40049296_6-godrej-expert-rich-creme-dark-brown-pack-of-10.jpg"
  },
  {
    "id": "prod-334",
    "name": "Godrej Expert Rich Creme Hair Colour Twin Pack Burgundy",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "Twin pack of burgundy cream hair dye sachets",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 70,
    "distPrice": 64,
    "wholesalePrice": 70,
    "retailPrice": 70,
    "unitType": "Box",
    "weight": "2 x 20 ml",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000334",
    "sku": "GCPL-EX-334",
    "stock": 64,
    "minStock": 12,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40049297_6-godrej-expert-rich-creme-burgundy-twin.jpg"
  },
  {
    "id": "prod-335",
    "name": "Godrej Expert Rich Creme Hair Colour Twin Pack Natural Brown",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "Twin pack of natural brown cream hair dye sachets",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 70,
    "distPrice": 64,
    "wholesalePrice": 70,
    "retailPrice": 70,
    "unitType": "Box",
    "weight": "2 x 20 ml",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000335",
    "sku": "GCPL-EX-335",
    "stock": 65,
    "minStock": 13,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40049298_6-godrej-expert-rich-creme-natural-brown-twin.jpg"
  },
  {
    "id": "prod-336",
    "name": "Godrej Expert Developer Lotion Bottle",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "Standard professional developer lotion bottle",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 45,
    "distPrice": 40,
    "wholesalePrice": 44,
    "retailPrice": 45,
    "unitType": "Box",
    "weight": "50 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000336",
    "sku": "GCPL-EX-336",
    "stock": 66,
    "minStock": 13,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40049299_6-godrej-expert-developer-lotion.jpg"
  },
  {
    "id": "prod-337",
    "name": "Godrej Expert Developer Lotion Bottle Large",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "Standard professional developer lotion in large size",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 80,
    "distPrice": 72,
    "wholesalePrice": 79.2,
    "retailPrice": 80,
    "unitType": "Box",
    "weight": "100 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000337",
    "sku": "GCPL-EX-337",
    "stock": 67,
    "minStock": 13,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40049300_6-godrej-expert-developer-lotion-100ml.jpg"
  },
  {
    "id": "prod-338",
    "name": "Godrej Expert Rich Creme Colourant Tube",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "Professional replacement colourant cream tube",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 65,
    "distPrice": 58,
    "wholesalePrice": 63.8,
    "retailPrice": 65,
    "unitType": "Box",
    "weight": "50 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000338",
    "sku": "GCPL-EX-338",
    "stock": 68,
    "minStock": 13,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40049301_6-godrej-expert-colourant-tube.jpg"
  },
  {
    "id": "prod-339",
    "name": "Godrej Expert Easy 5-Min Shampoo Colour Burgundy",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "Express hair dye shampoo in rich burgundy shade",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 32,
    "distPrice": 29,
    "wholesalePrice": 31.9,
    "retailPrice": 32,
    "unitType": "Box",
    "weight": "25 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000339",
    "sku": "GCPL-EX-339",
    "stock": 69,
    "minStock": 13,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40192851_1-godrej-expert-easy-shampoo-burgundy.jpg"
  },
  {
    "id": "prod-340",
    "name": "Godrej Expert Easy 5-Min Shampoo Burgundy (Pack of 3)",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "Triple pouch saver pack of burgundy shampoo color",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 96,
    "distPrice": 85,
    "wholesalePrice": 93.5,
    "retailPrice": 96,
    "unitType": "Box",
    "weight": "3 x 25 ml",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000340",
    "sku": "GCPL-EX-340",
    "stock": 70,
    "minStock": 14,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40192852_1-godrej-expert-easy-shampoo-burgundy-pack-of-3.jpg"
  },
  {
    "id": "prod-341",
    "name": "Godrej Expert Liquid Dye Kesh Kala Family Pack",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "Triple glass bottle value bundle pack",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 225,
    "distPrice": 195,
    "wholesalePrice": 214.5,
    "retailPrice": 224.25,
    "unitType": "Box",
    "weight": "3 x 100 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000341",
    "sku": "GCPL-EX-341",
    "stock": 71,
    "minStock": 14,
    "image": "https://www.bigbasket.com/media/uploads/p/l/102836_5-godrej-liquid-dye-family.jpg"
  },
  {
    "id": "prod-342",
    "name": "Godrej Nupur 100% Pure Henna Powder Jumbo",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Henna Powders",
    "desc": "Pure Rajasthani henna in bulk 1kg pack",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 380,
    "distPrice": 340,
    "wholesalePrice": 374,
    "retailPrice": 380,
    "unitType": "Box",
    "weight": "1 kg",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000342",
    "sku": "GCPL-EX-342",
    "stock": 72,
    "minStock": 14,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118354_1-godrej-nupur-henna-1kg.jpg"
  },
  {
    "id": "prod-343",
    "name": "Godrej Expert Easy Shampoo Hair Colour Twin Pack Black",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "Twin pack of express black shampoo color",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 60,
    "distPrice": 54,
    "wholesalePrice": 59.4,
    "retailPrice": 60,
    "unitType": "Box",
    "weight": "2 x 25 ml",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000343",
    "sku": "GCPL-EX-343",
    "stock": 73,
    "minStock": 14,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40192853_1-godrej-expert-easy-shampoo-black-twin.jpg"
  },
  {
    "id": "prod-344",
    "name": "Godrej Expert Easy Shampoo Hair Colour Twin Pack Dark Brown",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "Twin pack of express dark brown shampoo color",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 60,
    "distPrice": 54,
    "wholesalePrice": 59.4,
    "retailPrice": 60,
    "unitType": "Box",
    "weight": "2 x 25 ml",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000344",
    "sku": "GCPL-EX-344",
    "stock": 74,
    "minStock": 14,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40192854_1-godrej-expert-easy-shampoo-dark-brown-twin.jpg"
  },
  {
    "id": "prod-345",
    "name": "Godrej Nupur Coconut Hair Oil Jasmine Jumbo",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Oils",
    "desc": "Lightweight Jasmine hair oil in family bottle",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 240,
    "distPrice": 215,
    "wholesalePrice": 236.5,
    "retailPrice": 240,
    "unitType": "Box",
    "weight": "500 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000345",
    "sku": "GCPL-EX-345",
    "stock": 75,
    "minStock": 15,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118358_1-godrej-nupur-jasmine-oil-500ml.jpg"
  },
  {
    "id": "prod-346",
    "name": "Godrej Nupur Coconut Hair Oil Pure Jumbo",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Oils",
    "desc": "100% pure coconut oil in family blue bottle",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 210,
    "distPrice": 190,
    "wholesalePrice": 209,
    "retailPrice": 210,
    "unitType": "Box",
    "weight": "500 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000346",
    "sku": "GCPL-EX-346",
    "stock": 76,
    "minStock": 15,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118359_1-godrej-nupur-coconut-oil-500ml.jpg"
  },
  {
    "id": "prod-347",
    "name": "Godrej Expert Rich Creme Copper Brown (Pack of 3)",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "Triple sachet pack of copper brown cream hair color",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 105,
    "distPrice": 95,
    "wholesalePrice": 104.5,
    "retailPrice": 105,
    "unitType": "Box",
    "weight": "3 x 20 ml",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000347",
    "sku": "GCPL-EX-347",
    "stock": 77,
    "minStock": 15,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40049302_6-godrej-expert-rich-creme-copper-brown-pack-of-3.jpg"
  },
  {
    "id": "prod-348",
    "name": "Godrej Expert Rich Creme Burgundy (Pack of 3)",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "Triple sachet pack of burgundy cream hair color",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 105,
    "distPrice": 95,
    "wholesalePrice": 104.5,
    "retailPrice": 105,
    "unitType": "Box",
    "weight": "3 x 20 ml",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000348",
    "sku": "GCPL-EX-348",
    "stock": 78,
    "minStock": 15,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40049303_6-godrej-expert-rich-creme-burgundy-pack-of-3.jpg"
  },
  {
    "id": "prod-349",
    "name": "Godrej Expert Rich Creme Natural Brown (Pack of 3)",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "Triple sachet pack of natural brown cream hair color",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 105,
    "distPrice": 95,
    "wholesalePrice": 104.5,
    "retailPrice": 105,
    "unitType": "Box",
    "weight": "3 x 20 ml",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000349",
    "sku": "GCPL-EX-349",
    "stock": 79,
    "minStock": 15,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40049304_6-godrej-expert-rich-creme-natural-brown-pack-of-3.jpg"
  },
  {
    "id": "prod-350",
    "name": "Godrej Expert Rich Creme Burgundy (Pack of 5)",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "Five sachet saver pack of burgundy cream hair color",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 175,
    "distPrice": 155,
    "wholesalePrice": 170.5,
    "retailPrice": 175,
    "unitType": "Box",
    "weight": "5 x 20 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000350",
    "sku": "GCPL-EX-350",
    "stock": 80,
    "minStock": 16,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40049305_6-godrej-expert-rich-creme-burgundy-pack-of-5.jpg"
  },
  {
    "id": "prod-351",
    "name": "Godrej Expert Rich Creme Natural Brown (Pack of 5)",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "Five sachet saver pack of natural brown cream hair color",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 175,
    "distPrice": 155,
    "wholesalePrice": 170.5,
    "retailPrice": 175,
    "unitType": "Box",
    "weight": "5 x 20 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000351",
    "sku": "GCPL-EX-351",
    "stock": 81,
    "minStock": 16,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40049306_6-godrej-expert-rich-creme-natural-brown-pack-of-5.jpg"
  },
  {
    "id": "prod-352",
    "name": "Godrej Expert Rich Creme Copper Brown (Pack of 5)",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "Five sachet saver pack of copper brown cream hair color",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 175,
    "distPrice": 155,
    "wholesalePrice": 170.5,
    "retailPrice": 175,
    "unitType": "Box",
    "weight": "5 x 20 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000352",
    "sku": "GCPL-EX-352",
    "stock": 82,
    "minStock": 16,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40049307_6-godrej-expert-rich-creme-copper-brown-pack-of-5.jpg"
  },
  {
    "id": "prod-353",
    "name": "Godrej Expert Easy 5-Min Shampoo Colour Natural Black Kit",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "Shampoo dye kit containing sachet",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 110,
    "distPrice": 98,
    "wholesalePrice": 107.8,
    "retailPrice": 110,
    "unitType": "Box",
    "weight": "1 Unit",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000353",
    "sku": "GCPL-EX-353",
    "stock": 83,
    "minStock": 16,
    "image": "gloves"
  },
  {
    "id": "prod-354",
    "name": "Godrej Expert Easy 5-Min Shampoo Colour Dark Brown Kit",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "Shampoo dye kit with dark brown components",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 110,
    "distPrice": 98,
    "wholesalePrice": 107.8,
    "retailPrice": 110,
    "unitType": "Box",
    "weight": "1 Unit",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000354",
    "sku": "GCPL-EX-354",
    "stock": 84,
    "minStock": 16,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40192856_1-godrej-expert-easy-shampoo-dark-brown-kit.jpg"
  },
  {
    "id": "prod-355",
    "name": "Godrej Nupur Henna 9 Herbs Blend Sachet Pack",
    "brand": "Godrej Expert",
    "category": "Hair Care",
    "subcategory": "Henna Powders",
    "desc": "Strip containing 10 small herbal henna sachets",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 250,
    "distPrice": 225,
    "wholesalePrice": 247.5,
    "retailPrice": 250,
    "unitType": "Box",
    "weight": "10 x 30 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000355",
    "sku": "GCPL-EX-355",
    "stock": 85,
    "minStock": 17,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118360_1-godrej-nupur-9-herbs-strip.jpg"
  },
  {
    "id": "prod-356",
    "name": "Godrej aer spray Cool Surf Blue Air Freshener",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Premium room freshener aerosol with marine surf fragrance",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 160,
    "distPrice": 140,
    "wholesalePrice": 154,
    "retailPrice": 160,
    "unitType": "Box",
    "weight": "220 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000356",
    "sku": "GCPL-AR-356",
    "stock": 86,
    "minStock": 17,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40108502_5-godrej-aer-spray-cool-surf-blue.jpg"
  },
  {
    "id": "prod-357",
    "name": "Godrej aer spray Petal Crush Pink Air Freshener",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Aerosol spray with sweet rose and petal scent",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 160,
    "distPrice": 140,
    "wholesalePrice": 154,
    "retailPrice": 160,
    "unitType": "Box",
    "weight": "220 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000357",
    "sku": "GCPL-AR-357",
    "stock": 87,
    "minStock": 17,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40108503_5-godrej-aer-spray-petal-crush-pink.jpg"
  },
  {
    "id": "prod-358",
    "name": "Godrej aer spray Fresh Lush Green Air Freshener",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Aerosol spray with natural woodland meadow notes",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 160,
    "distPrice": 140,
    "wholesalePrice": 154,
    "retailPrice": 160,
    "unitType": "Box",
    "weight": "220 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000358",
    "sku": "GCPL-AR-358",
    "stock": 88,
    "minStock": 17,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40108504_5-godrej-aer-spray-fresh-lush-green.jpg"
  },
  {
    "id": "prod-359",
    "name": "Godrej aer spray Violet Valley Bloom Air Freshener",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Aerosol spray with deep lavender valley floral scent",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 160,
    "distPrice": 140,
    "wholesalePrice": 154,
    "retailPrice": 160,
    "unitType": "Box",
    "weight": "220 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000359",
    "sku": "GCPL-AR-359",
    "stock": 89,
    "minStock": 17,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40108505_5-godrej-aer-spray-violet-valley-bloom.jpg"
  },
  {
    "id": "prod-360",
    "name": "Godrej aer spray Musk After Smoke Air Freshener",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Aerosol spray featuring warm musk anti-smoke active scent",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 160,
    "distPrice": 140,
    "wholesalePrice": 154,
    "retailPrice": 160,
    "unitType": "Box",
    "weight": "220 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000360",
    "sku": "GCPL-AR-360",
    "stock": 30,
    "minStock": 6,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40108506_5-godrej-aer-spray-musk-after-smoke.jpg"
  },
  {
    "id": "prod-361",
    "name": "Godrej aer spray Sunny Citrus Blast Air Freshener",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Aerosol spray with sharp fresh lemon and orange peel",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 160,
    "distPrice": 140,
    "wholesalePrice": 154,
    "retailPrice": 160,
    "unitType": "Box",
    "weight": "220 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000361",
    "sku": "GCPL-AR-361",
    "stock": 31,
    "minStock": 6,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40108507_5-godrej-aer-spray-sunny-citrus-blast.jpg"
  },
  {
    "id": "prod-362",
    "name": "Godrej aer pocket Morning Misty Meadows Bathroom Freshener",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Slim bathroom gel pocket with meadow freshness",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 55,
    "distPrice": 50,
    "wholesalePrice": 55,
    "retailPrice": 55,
    "unitType": "Box",
    "weight": "10 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000362",
    "sku": "GCPL-AR-362",
    "stock": 32,
    "minStock": 6,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40108502_5-godrej-aer-pocket-bathroom-air-freshener-morning-misty-meadows.jpg"
  },
  {
    "id": "prod-363",
    "name": "Godrej aer pocket Berry Rush Bathroom Freshener",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Slim bathroom gel pocket with sweet raspberry scent",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 55,
    "distPrice": 50,
    "wholesalePrice": 55,
    "retailPrice": 55,
    "unitType": "Box",
    "weight": "10 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000363",
    "sku": "GCPL-AR-363",
    "stock": 33,
    "minStock": 6,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40108503_5-godrej-aer-pocket-bathroom-air-freshener-berry-rush.jpg"
  },
  {
    "id": "prod-364",
    "name": "Godrej aer pocket Fresh Lush Green Bathroom Freshener",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Slim bathroom gel pocket with deep garden green scent",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 55,
    "distPrice": 50,
    "wholesalePrice": 55,
    "retailPrice": 55,
    "unitType": "Box",
    "weight": "10 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000364",
    "sku": "GCPL-AR-364",
    "stock": 34,
    "minStock": 6,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40108504_5-godrej-aer-pocket-bathroom-air-freshener-fresh-lush-green.jpg"
  },
  {
    "id": "prod-365",
    "name": "Godrej aer pocket Violet Valley Bloom Bathroom Freshener",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Slim bathroom gel pocket with sweet lavender scent",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 55,
    "distPrice": 50,
    "wholesalePrice": 55,
    "retailPrice": 55,
    "unitType": "Box",
    "weight": "10 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000365",
    "sku": "GCPL-AR-365",
    "stock": 35,
    "minStock": 7,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40108505_5-godrej-aer-pocket-bathroom-air-freshener-violet-valley-bloom.jpg"
  },
  {
    "id": "prod-366",
    "name": "Godrej aer pocket Tangy Citrus Bathroom Freshener",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Slim bathroom gel pocket with energetic lemon zest",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 55,
    "distPrice": 50,
    "wholesalePrice": 55,
    "retailPrice": 55,
    "unitType": "Box",
    "weight": "10 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000366",
    "sku": "GCPL-AR-366",
    "stock": 36,
    "minStock": 7,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40108506_5-godrej-aer-pocket-bathroom-air-freshener-tangy-citrus.jpg"
  },
  {
    "id": "prod-367",
    "name": "Godrej aer pocket Bathroom Freshener (Pack of 3)",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Assorted scent triple gel bathroom pockets",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 165,
    "distPrice": 145,
    "wholesalePrice": 159.5,
    "retailPrice": 165,
    "unitType": "Box",
    "weight": "3 x 10 g",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000367",
    "sku": "GCPL-AR-367",
    "stock": 37,
    "minStock": 7,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40108507_5-godrej-aer-pocket-bathroom-air-freshener-pack-of-3.jpg"
  },
  {
    "id": "prod-368",
    "name": "Godrej aer pocket Bathroom Freshener (Pack of 5)",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Five pack bulk bathroom gel pocket assortment",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 275,
    "distPrice": 230,
    "wholesalePrice": 253,
    "retailPrice": 264.5,
    "unitType": "Box",
    "weight": "5 x 10 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000368",
    "sku": "GCPL-AR-368",
    "stock": 38,
    "minStock": 7,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40108508_5-godrej-aer-pocket-bathroom-air-freshener-pack-of-5.jpg"
  },
  {
    "id": "prod-369",
    "name": "Godrej aer click Cool Surf Blue Car Freshener Kit",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Click-mount car AC vent device + 1 gel refill",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 349,
    "distPrice": 299,
    "wholesalePrice": 328.9,
    "retailPrice": 343.85,
    "unitType": "Box",
    "weight": "10 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000369",
    "sku": "GCPL-AR-369",
    "stock": 39,
    "minStock": 7,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40023445_3-godrej-aer-click-gel-car-air-freshener-refill-musk-after-smoke.jpg"
  },
  {
    "id": "prod-370",
    "name": "Godrej aer click Musk After Smoke Car Kit",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Click-mount car AC vent device with musk refill",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 349,
    "distPrice": 299,
    "wholesalePrice": 328.9,
    "retailPrice": 343.85,
    "unitType": "Box",
    "weight": "10 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000370",
    "sku": "GCPL-AR-370",
    "stock": 40,
    "minStock": 8,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40023446_3-godrej-aer-click-musk-kit.jpg"
  },
  {
    "id": "prod-371",
    "name": "Godrej aer click Bright Tangy Delight Car Kit",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Click-mount car AC vent device with tangy citrus refill",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 349,
    "distPrice": 299,
    "wholesalePrice": 328.9,
    "retailPrice": 343.85,
    "unitType": "Box",
    "weight": "10 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000371",
    "sku": "GCPL-AR-371",
    "stock": 41,
    "minStock": 8,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40023447_3-godrej-aer-click-citrus-kit.jpg"
  },
  {
    "id": "prod-372",
    "name": "Godrej aer click Fresh Lush Green Car Kit",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Click-mount car AC vent device with fresh green refill",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 349,
    "distPrice": 299,
    "wholesalePrice": 328.9,
    "retailPrice": 343.85,
    "unitType": "Box",
    "weight": "10 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000372",
    "sku": "GCPL-AR-372",
    "stock": 42,
    "minStock": 8,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40023448_3-godrej-aer-click-green-kit.jpg"
  },
  {
    "id": "prod-373",
    "name": "Godrej aer click Cool Surf Blue Refill",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Replacement gel refill for click car vent",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 199,
    "distPrice": 175,
    "wholesalePrice": 192.5,
    "retailPrice": 199,
    "unitType": "Box",
    "weight": "10 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000373",
    "sku": "GCPL-AR-373",
    "stock": 43,
    "minStock": 8,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40023449_3-godrej-aer-click-refill-blue.jpg"
  },
  {
    "id": "prod-374",
    "name": "Godrej aer click Musk After Smoke Refill",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Replacement musk gel refill for click car vent",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 199,
    "distPrice": 175,
    "wholesalePrice": 192.5,
    "retailPrice": 199,
    "unitType": "Box",
    "weight": "10 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000374",
    "sku": "GCPL-AR-374",
    "stock": 44,
    "minStock": 8,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40023450_3-godrej-aer-click-refill-musk.jpg"
  },
  {
    "id": "prod-375",
    "name": "Godrej aer click Bright Tangy Delight Refill",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Replacement tangy gel refill for click car vent",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 199,
    "distPrice": 175,
    "wholesalePrice": 192.5,
    "retailPrice": 199,
    "unitType": "Box",
    "weight": "10 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000375",
    "sku": "GCPL-AR-375",
    "stock": 45,
    "minStock": 9,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40023451_3-godrej-aer-click-refill-citrus.jpg"
  },
  {
    "id": "prod-376",
    "name": "Godrej aer click Fresh Lush Green Refill",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Replacement green gel refill for click car vent",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 199,
    "distPrice": 175,
    "wholesalePrice": 192.5,
    "retailPrice": 199,
    "unitType": "Box",
    "weight": "10 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000376",
    "sku": "GCPL-AR-376",
    "stock": 46,
    "minStock": 9,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40023452_3-godrej-aer-click-refill-green.jpg"
  },
  {
    "id": "prod-377",
    "name": "Godrej aer twist Rich Irish Cocktail Car Gel",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Twist open dashboard gel container with premium Irish scent",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 379,
    "distPrice": 329,
    "wholesalePrice": 361.9,
    "retailPrice": 378.35,
    "unitType": "Box",
    "weight": "45 g",
    "boxQty": 48,
    "pieceQty": 1,
    "barcode": "8901157000377",
    "sku": "GCPL-AR-377",
    "stock": 47,
    "minStock": 9,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40108509_5-godrej-aer-twist-car-gel-rich-irish-cocktail.jpg"
  },
  {
    "id": "prod-378",
    "name": "Godrej aer twist Sunny Citrus Blast Car Gel",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Twist open dashboard gel container with lemon splash",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 379,
    "distPrice": 329,
    "wholesalePrice": 361.9,
    "retailPrice": 378.35,
    "unitType": "Box",
    "weight": "45 g",
    "boxQty": 48,
    "pieceQty": 1,
    "barcode": "8901157000378",
    "sku": "GCPL-AR-378",
    "stock": 48,
    "minStock": 9,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40108510_5-godrej-aer-twist-car-gel-sunny-citrus-blast.jpg"
  },
  {
    "id": "prod-379",
    "name": "Godrej aer twist Cool Surf Blue Car Gel",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Twist open dashboard gel container with sea breeze scent",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 379,
    "distPrice": 329,
    "wholesalePrice": 361.9,
    "retailPrice": 378.35,
    "unitType": "Box",
    "weight": "45 g",
    "boxQty": 48,
    "pieceQty": 1,
    "barcode": "8901157000379",
    "sku": "GCPL-AR-379",
    "stock": 49,
    "minStock": 9,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40108511_5-godrej-aer-twist-car-gel-cool-surf-blue.jpg"
  },
  {
    "id": "prod-380",
    "name": "Godrej aer twist Musk After Smoke Car Gel",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Twist open dashboard gel container with woody musk scent",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 379,
    "distPrice": 329,
    "wholesalePrice": 361.9,
    "retailPrice": 378.35,
    "unitType": "Box",
    "weight": "45 g",
    "boxQty": 48,
    "pieceQty": 1,
    "barcode": "8901157000380",
    "sku": "GCPL-AR-380",
    "stock": 50,
    "minStock": 10,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40108512_5-godrej-aer-twist-car-gel-musk-after-smoke.jpg"
  },
  {
    "id": "prod-381",
    "name": "Godrej aer twist Petal Crush Pink Car Gel",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Twist open dashboard gel container with rose petal scent",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 379,
    "distPrice": 329,
    "wholesalePrice": 361.9,
    "retailPrice": 378.35,
    "unitType": "Box",
    "weight": "45 g",
    "boxQty": 48,
    "pieceQty": 1,
    "barcode": "8901157000381",
    "sku": "GCPL-AR-381",
    "stock": 51,
    "minStock": 10,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40108513_5-godrej-aer-twist-car-gel-petal-crush-pink.jpg"
  },
  {
    "id": "prod-382",
    "name": "Godrej aer matic Automatic Machine + Cool Surf Blue Refill",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Battery operated automatic room sprayer with marine refill",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 550,
    "distPrice": 475,
    "wholesalePrice": 522.5,
    "retailPrice": 546.25,
    "unitType": "Box",
    "weight": "1 Kit",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000382",
    "sku": "GCPL-AR-382",
    "stock": 52,
    "minStock": 10,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121171_1-godrej-aer-matic-machine.jpg"
  },
  {
    "id": "prod-383",
    "name": "Godrej aer matic Automatic Machine + Violet Bloom Refill",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Battery operated automatic room sprayer with lavender refill",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 550,
    "distPrice": 475,
    "wholesalePrice": 522.5,
    "retailPrice": 546.25,
    "unitType": "Box",
    "weight": "1 Kit",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000383",
    "sku": "GCPL-AR-383",
    "stock": 53,
    "minStock": 10,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121172_1-godrej-aer-matic-machine-violet.jpg"
  },
  {
    "id": "prod-384",
    "name": "Godrej aer matic Cool Surf Blue Refill",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Aerosol replacement canister for matic machine",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 275,
    "distPrice": 240,
    "wholesalePrice": 264,
    "retailPrice": 275,
    "unitType": "Box",
    "weight": "225 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000384",
    "sku": "GCPL-AR-384",
    "stock": 54,
    "minStock": 10,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121173_1-godrej-aer-matic-refill-blue.jpg"
  },
  {
    "id": "prod-385",
    "name": "Godrej aer matic Violet Valley Bloom Refill",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Lavender replacement canister for matic machine",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 275,
    "distPrice": 240,
    "wholesalePrice": 264,
    "retailPrice": 275,
    "unitType": "Box",
    "weight": "225 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000385",
    "sku": "GCPL-AR-385",
    "stock": 55,
    "minStock": 11,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121174_1-godrej-aer-matic-refill-violet.jpg"
  },
  {
    "id": "prod-386",
    "name": "Godrej aer matic Petal Crush Pink Refill",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Rose replacement canister for matic machine",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 275,
    "distPrice": 240,
    "wholesalePrice": 264,
    "retailPrice": 275,
    "unitType": "Box",
    "weight": "225 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000386",
    "sku": "GCPL-AR-386",
    "stock": 56,
    "minStock": 11,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121175_1-godrej-aer-matic-refill-pink.jpg"
  },
  {
    "id": "prod-387",
    "name": "Godrej aer spray Cool Surf Blue (Pack of 2)",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Double aerosol room freshener saving bundle",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 320,
    "distPrice": 265,
    "wholesalePrice": 291.5,
    "retailPrice": 304.75,
    "unitType": "Box",
    "weight": "2 x 220 ml",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000387",
    "sku": "GCPL-AR-387",
    "stock": 57,
    "minStock": 11,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40108514_5-godrej-aer-spray-blue-twin.jpg"
  },
  {
    "id": "prod-388",
    "name": "Godrej aer spray Petal Crush (Pack of 2)",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Double aerosol rose fragrance saving bundle",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 320,
    "distPrice": 265,
    "wholesalePrice": 291.5,
    "retailPrice": 304.75,
    "unitType": "Box",
    "weight": "2 x 220 ml",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000388",
    "sku": "GCPL-AR-388",
    "stock": 58,
    "minStock": 11,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40108515_5-godrej-aer-spray-pink-twin.jpg"
  },
  {
    "id": "prod-389",
    "name": "Godrej aer spray Violet Valley Bloom (Pack of 2)",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Double aerosol lavender saving bundle",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 320,
    "distPrice": 265,
    "wholesalePrice": 291.5,
    "retailPrice": 304.75,
    "unitType": "Box",
    "weight": "2 x 220 ml",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000389",
    "sku": "GCPL-AR-389",
    "stock": 59,
    "minStock": 11,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40108516_5-godrej-aer-spray-violet-twin.jpg"
  },
  {
    "id": "prod-390",
    "name": "Godrej aer click Refill Cool Surf Blue (Pack of 2)",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Twin saving car gel click refills",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 398,
    "distPrice": 335,
    "wholesalePrice": 368.5,
    "retailPrice": 385.25,
    "unitType": "Box",
    "weight": "2 x 10 g",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000390",
    "sku": "GCPL-AR-390",
    "stock": 60,
    "minStock": 12,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40023453_3-godrej-aer-click-refill-blue-twin.jpg"
  },
  {
    "id": "prod-391",
    "name": "Godrej aer click Refill Musk After Smoke (Pack of 2)",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Twin saving car musk gel click refills",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 398,
    "distPrice": 335,
    "wholesalePrice": 368.5,
    "retailPrice": 385.25,
    "unitType": "Box",
    "weight": "2 x 10 g",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000391",
    "sku": "GCPL-AR-391",
    "stock": 61,
    "minStock": 12,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40023454_3-godrej-aer-click-refill-musk-twin.jpg"
  },
  {
    "id": "prod-392",
    "name": "Godrej aer twist Car Gel Cool Surf (Pack of 2)",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Double saving car dashboard twist gel set",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 758,
    "distPrice": 630,
    "wholesalePrice": 693,
    "retailPrice": 724.5,
    "unitType": "Box",
    "weight": "2 x 45 g",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000392",
    "sku": "GCPL-AR-392",
    "stock": 62,
    "minStock": 12,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40108514_5-godrej-aer-twist-blue-twin.jpg"
  },
  {
    "id": "prod-393",
    "name": "Godrej aer twist Car Gel Musk (Pack of 2)",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Double saving car dashboard twist musk gel set",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 758,
    "distPrice": 630,
    "wholesalePrice": 693,
    "retailPrice": 724.5,
    "unitType": "Box",
    "weight": "2 x 45 g",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000393",
    "sku": "GCPL-AR-393",
    "stock": 63,
    "minStock": 12,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40108515_5-godrej-aer-twist-musk-twin.jpg"
  },
  {
    "id": "prod-394",
    "name": "Godrej aer matic Refill Cool Surf Blue (Pack of 2)",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Twin matic machine automatic aerosol canisters",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 550,
    "distPrice": 455,
    "wholesalePrice": 500.5,
    "retailPrice": 523.25,
    "unitType": "Box",
    "weight": "2 x 225 ml",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000394",
    "sku": "GCPL-AR-394",
    "stock": 64,
    "minStock": 12,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121176_1-godrej-aer-matic-refill-blue-twin.jpg"
  },
  {
    "id": "prod-395",
    "name": "Godrej aer matic Refill Violet Valley (Pack of 2)",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Twin matic machine automatic lavender canisters",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 550,
    "distPrice": 455,
    "wholesalePrice": 500.5,
    "retailPrice": 523.25,
    "unitType": "Box",
    "weight": "2 x 225 ml",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000395",
    "sku": "GCPL-AR-395",
    "stock": 65,
    "minStock": 13,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121177_1-godrej-aer-matic-refill-violet-twin.jpg"
  },
  {
    "id": "prod-396",
    "name": "Godrej aer pocket Bathroom Freshener Assorted Pack of 10",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Massive value assortment of 10 bathroom pocket gels",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 550,
    "distPrice": 450,
    "wholesalePrice": 495,
    "retailPrice": 517.5,
    "unitType": "Box",
    "weight": "10 x 10 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000396",
    "sku": "GCPL-AR-396",
    "stock": 66,
    "minStock": 13,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40108509_5-godrej-aer-pocket-pack-of-10.jpg"
  },
  {
    "id": "prod-397",
    "name": "Godrej aer spray Musk After Smoke (Pack of 2)",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Double anti-smoke aerosol body freshener saving bundle",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 320,
    "distPrice": 265,
    "wholesalePrice": 291.5,
    "retailPrice": 304.75,
    "unitType": "Box",
    "weight": "2 x 220 ml",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000397",
    "sku": "GCPL-AR-397",
    "stock": 67,
    "minStock": 13,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40108517_5-godrej-aer-spray-musk-twin.jpg"
  },
  {
    "id": "prod-398",
    "name": "Godrej aer spray Sunny Citrus (Pack of 2)",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Double fresh lemon aerosol saving bundle",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 320,
    "distPrice": 265,
    "wholesalePrice": 291.5,
    "retailPrice": 304.75,
    "unitType": "Box",
    "weight": "2 x 220 ml",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000398",
    "sku": "GCPL-AR-398",
    "stock": 68,
    "minStock": 13,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40108518_5-godrej-aer-spray-citrus-twin.jpg"
  },
  {
    "id": "prod-399",
    "name": "Godrej aer spray Fresh Lush Green (Pack of 2)",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Double fresh woodland aerosol saving bundle",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 320,
    "distPrice": 265,
    "wholesalePrice": 291.5,
    "retailPrice": 304.75,
    "unitType": "Box",
    "weight": "2 x 220 ml",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000399",
    "sku": "GCPL-AR-399",
    "stock": 69,
    "minStock": 13,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40108519_5-godrej-aer-spray-green-twin.jpg"
  },
  {
    "id": "prod-400",
    "name": "Godrej aer click Refill Bright Tangy (Pack of 2)",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Twin saving car citrus gel click refills",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 398,
    "distPrice": 335,
    "wholesalePrice": 368.5,
    "retailPrice": 385.25,
    "unitType": "Box",
    "weight": "2 x 10 g",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000400",
    "sku": "GCPL-AR-400",
    "stock": 70,
    "minStock": 14,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40023455_3-godrej-aer-click-citrus-twin.jpg"
  },
  {
    "id": "prod-401",
    "name": "Godrej aer click Refill Fresh Lush Green (Pack of 2)",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Twin saving car green gel click refills",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 398,
    "distPrice": 335,
    "wholesalePrice": 368.5,
    "retailPrice": 385.25,
    "unitType": "Box",
    "weight": "2 x 10 g",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000401",
    "sku": "GCPL-AR-401",
    "stock": 71,
    "minStock": 14,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40023456_3-godrej-aer-click-green-twin.jpg"
  },
  {
    "id": "prod-402",
    "name": "Godrej aer twist Car Gel Sunny Citrus (Pack of 2)",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Double saving car dashboard lemon gel set",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 758,
    "distPrice": 630,
    "wholesalePrice": 693,
    "retailPrice": 724.5,
    "unitType": "Box",
    "weight": "2 x 45 g",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000402",
    "sku": "GCPL-AR-402",
    "stock": 72,
    "minStock": 14,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40108516_5-godrej-aer-twist-citrus-twin.jpg"
  },
  {
    "id": "prod-403",
    "name": "Godrej aer twist Car Gel Petal Crush (Pack of 2)",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Double saving car dashboard rose gel set",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 758,
    "distPrice": 630,
    "wholesalePrice": 693,
    "retailPrice": 724.5,
    "unitType": "Box",
    "weight": "2 x 45 g",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000403",
    "sku": "GCPL-AR-403",
    "stock": 73,
    "minStock": 14,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40108517_5-godrej-aer-twist-pink-twin.jpg"
  },
  {
    "id": "prod-404",
    "name": "Godrej aer twist Car Gel Irish Cocktail (Pack of 2)",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Double saving car dashboard Irish cocktail gel set",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 758,
    "distPrice": 630,
    "wholesalePrice": 693,
    "retailPrice": 724.5,
    "unitType": "Box",
    "weight": "2 x 45 g",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000404",
    "sku": "GCPL-AR-404",
    "stock": 74,
    "minStock": 14,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40108518_5-godrej-aer-twist-irish-twin.jpg"
  },
  {
    "id": "prod-405",
    "name": "Godrej aer matic Refill Petal Crush Pink (Pack of 2)",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Twin matic machine automatic rose canisters",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 550,
    "distPrice": 455,
    "wholesalePrice": 500.5,
    "retailPrice": 523.25,
    "unitType": "Box",
    "weight": "2 x 225 ml",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000405",
    "sku": "GCPL-AR-405",
    "stock": 75,
    "minStock": 15,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121178_1-godrej-aer-matic-refill-pink-twin.jpg"
  },
  {
    "id": "prod-406",
    "name": "Godrej aer matic Machine Only",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Battery-operated smart automatic room sprayer machine only",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 350,
    "distPrice": 299,
    "wholesalePrice": 328.9,
    "retailPrice": 343.85,
    "unitType": "Box",
    "weight": "1 Unit",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000406",
    "sku": "GCPL-AR-406",
    "stock": 76,
    "minStock": 15,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121179_1-godrej-aer-matic-machine-only.jpg"
  },
  {
    "id": "prod-407",
    "name": "Godrej aer smart pocket App-Enabled Device White",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Bluetooth enabled automatic bathroom sprayer with App",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 799,
    "distPrice": 699,
    "wholesalePrice": 768.9,
    "retailPrice": 799,
    "unitType": "Box",
    "weight": "1 Kit",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000407",
    "sku": "GCPL-AR-407",
    "stock": 77,
    "minStock": 15,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121180_1-godrej-aer-smart-device.jpg"
  },
  {
    "id": "prod-408",
    "name": "Godrej aer smart pocket App-Enabled Refill Blue",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Bluetooth smart pocket replacement gel canister",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 250,
    "distPrice": 215,
    "wholesalePrice": 236.5,
    "retailPrice": 247.25,
    "unitType": "Box",
    "weight": "15 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000408",
    "sku": "GCPL-AR-408",
    "stock": 78,
    "minStock": 15,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121181_1-godrej-aer-smart-refill-blue.jpg"
  },
  {
    "id": "prod-409",
    "name": "Godrej aer smart pocket App-Enabled Refill Pink",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Bluetooth smart pocket replacement rose gel canister",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 250,
    "distPrice": 215,
    "wholesalePrice": 236.5,
    "retailPrice": 247.25,
    "unitType": "Box",
    "weight": "15 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000409",
    "sku": "GCPL-AR-409",
    "stock": 79,
    "minStock": 15,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121182_1-godrej-aer-smart-refill-pink.jpg"
  },
  {
    "id": "prod-410",
    "name": "Godrej aer hanging card Car Air Freshener Musk",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Hanging fragrance paper leaf card for cars",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 99,
    "distPrice": 89,
    "wholesalePrice": 97.9,
    "retailPrice": 99,
    "unitType": "Box",
    "weight": "1 Unit",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000410",
    "sku": "GCPL-AR-410",
    "stock": 80,
    "minStock": 16,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121183_1-godrej-aer-hanging-musk.jpg"
  },
  {
    "id": "prod-411",
    "name": "Godrej aer hanging card Car Air Freshener Blue",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Hanging fragrance paper leaf card with marine wave scent",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 99,
    "distPrice": 89,
    "wholesalePrice": 97.9,
    "retailPrice": 99,
    "unitType": "Box",
    "weight": "1 Unit",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000411",
    "sku": "GCPL-AR-411",
    "stock": 81,
    "minStock": 16,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121184_1-godrej-aer-hanging-blue.jpg"
  },
  {
    "id": "prod-412",
    "name": "Godrej aer hanging card Car Air Freshener Pink",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Hanging fragrance paper leaf card with soft rose petal scent",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 99,
    "distPrice": 89,
    "wholesalePrice": 97.9,
    "retailPrice": 99,
    "unitType": "Box",
    "weight": "1 Unit",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000412",
    "sku": "GCPL-AR-412",
    "stock": 82,
    "minStock": 16,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121185_1-godrej-aer-hanging-pink.jpg"
  },
  {
    "id": "prod-413",
    "name": "Godrej aer hanging card Car Air Freshener Green",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Hanging fragrance paper leaf card with fresh grass scent",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 99,
    "distPrice": 89,
    "wholesalePrice": 97.9,
    "retailPrice": 99,
    "unitType": "Box",
    "weight": "1 Unit",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000413",
    "sku": "GCPL-AR-413",
    "stock": 83,
    "minStock": 16,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121186_1-godrej-aer-hanging-green.jpg"
  },
  {
    "id": "prod-414",
    "name": "Godrej aer matic Premium Jasmine Bloom Refill",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Premium Jasmine scent automatic spray refill canister",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 295,
    "distPrice": 260,
    "wholesalePrice": 286,
    "retailPrice": 295,
    "unitType": "Box",
    "weight": "225 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000414",
    "sku": "GCPL-AR-414",
    "stock": 84,
    "minStock": 16,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121187_1-godrej-aer-matic-refill-jasmine.jpg"
  },
  {
    "id": "prod-415",
    "name": "Godrej aer matic Premium Sandalwood Refill",
    "brand": "Godrej aer",
    "category": "Home Care",
    "subcategory": "Air Fresheners",
    "desc": "Premium cooling sandalwood automatic spray refill canister",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 295,
    "distPrice": 260,
    "wholesalePrice": 286,
    "retailPrice": 295,
    "unitType": "Box",
    "weight": "225 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000415",
    "sku": "GCPL-AR-415",
    "stock": 85,
    "minStock": 17,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40121188_1-godrej-aer-matic-refill-sandal.jpg"
  },
  {
    "id": "prod-416",
    "name": "Godrej Protekt Mr. Magic Powder-To-Liquid Handwash Starter Kit",
    "brand": "Godrej Protekt",
    "category": "Personal Care",
    "subcategory": "Handwashes",
    "desc": "Unique formula contains 1 reusable bottle and 1 powder sachet",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 85,
    "distPrice": 75,
    "wholesalePrice": 82.5,
    "retailPrice": 85,
    "unitType": "Box",
    "weight": "1 Pack",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000416",
    "sku": "GCPL-PR-416",
    "stock": 86,
    "minStock": 17,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40178345_1-godrej-protekt-mr-magic-powder-to-liquid-handwash-starter-pack.jpg"
  },
  {
    "id": "prod-417",
    "name": "Godrej Protekt Mr. Magic Powder-To-Liquid Refill Sachet",
    "brand": "Godrej Protekt",
    "category": "Personal Care",
    "subcategory": "Handwashes",
    "desc": "Replacement powder sachet makes 200ml active liquid handwash",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 15,
    "distPrice": 15,
    "wholesalePrice": 15,
    "retailPrice": 15,
    "unitType": "Box",
    "weight": "9 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000417",
    "sku": "GCPL-PR-417",
    "stock": 87,
    "minStock": 17,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40178346_1-godrej-protekt-mr-magic-powder-to-liquid-handwash-refill.jpg"
  },
  {
    "id": "prod-418",
    "name": "Godrej Protekt Mr. Magic Powder-To-Liquid Refill (Pack of 3)",
    "brand": "Godrej Protekt",
    "category": "Personal Care",
    "subcategory": "Handwashes",
    "desc": "Triple pouch replacement powder sachet set",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 45,
    "distPrice": 41,
    "wholesalePrice": 45,
    "retailPrice": 45,
    "unitType": "Box",
    "weight": "3 x 9 g",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000418",
    "sku": "GCPL-PR-418",
    "stock": 88,
    "minStock": 17,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40178347_1-godrej-protekt-mr-magic-handwash-refill-pack-of-3.jpg"
  },
  {
    "id": "prod-419",
    "name": "Godrej Protekt Mr. Magic Powder-To-Liquid Refill (Pack of 5)",
    "brand": "Godrej Protekt",
    "category": "Personal Care",
    "subcategory": "Handwashes",
    "desc": "Five pouch value replacement powder sachet set",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 75,
    "distPrice": 65,
    "wholesalePrice": 71.5,
    "retailPrice": 74.75,
    "unitType": "Box",
    "weight": "5 x 9 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000419",
    "sku": "GCPL-PR-419",
    "stock": 89,
    "minStock": 17,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40178348_1-godrej-protekt-mr-magic-handwash-refill-pack-of-5.jpg"
  },
  {
    "id": "prod-420",
    "name": "Godrej Protekt Mr. Magic Powder-To-Liquid Refill (Pack of 10)",
    "brand": "Godrej Protekt",
    "category": "Personal Care",
    "subcategory": "Handwashes",
    "desc": "Bulk sachet strip containing 10 powder refills",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 150,
    "distPrice": 125,
    "wholesalePrice": 137.5,
    "retailPrice": 143.75,
    "unitType": "Box",
    "weight": "10 x 9 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000420",
    "sku": "GCPL-PR-420",
    "stock": 30,
    "minStock": 6,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40178349_1-godrej-protekt-mr-magic-handwash-refill-pack-of-10.jpg"
  },
  {
    "id": "prod-421",
    "name": "Godrej Protekt Masterchef Liquid Handwash Bottle",
    "brand": "Godrej Protekt",
    "category": "Personal Care",
    "subcategory": "Handwashes",
    "desc": "Anti-grease handwash with natural citrus essential oils for kitchens",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 99,
    "distPrice": 89,
    "wholesalePrice": 97.9,
    "retailPrice": 99,
    "unitType": "Box",
    "weight": "300 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000421",
    "sku": "GCPL-PR-421",
    "stock": 31,
    "minStock": 6,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40018314_1-godrej-protekt-masterchef-handwash.jpg"
  },
  {
    "id": "prod-422",
    "name": "Godrej Protekt Masterchef Liquid Handwash Refill Pouch",
    "brand": "Godrej Protekt",
    "category": "Personal Care",
    "subcategory": "Handwashes",
    "desc": "Small capacity citrus kitchen handwash refill",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 45,
    "distPrice": 40,
    "wholesalePrice": 44,
    "retailPrice": 45,
    "unitType": "Box",
    "weight": "150 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000422",
    "sku": "GCPL-PR-422",
    "stock": 32,
    "minStock": 6,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40018315_1-godrej-protekt-masterchef-refill.jpg"
  },
  {
    "id": "prod-423",
    "name": "Godrej Protekt Masterchef Liquid Handwash Refill Large",
    "brand": "Godrej Protekt",
    "category": "Personal Care",
    "subcategory": "Handwashes",
    "desc": "Value capacity citrus kitchen handwash refill",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 199,
    "distPrice": 165,
    "wholesalePrice": 181.5,
    "retailPrice": 189.75,
    "unitType": "Box",
    "weight": "750 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000423",
    "sku": "GCPL-PR-423",
    "stock": 33,
    "minStock": 6,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40018316_1-godrej-protekt-masterchef-refill-750ml.jpg"
  },
  {
    "id": "prod-424",
    "name": "Godrej Protekt Masterchef Liquid Handwash Can",
    "brand": "Godrej Protekt",
    "category": "Personal Care",
    "subcategory": "Handwashes",
    "desc": "Super family capacity citrus kitchen handwash can",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 349,
    "distPrice": 299,
    "wholesalePrice": 328.9,
    "retailPrice": 343.85,
    "unitType": "Box",
    "weight": "1500 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000424",
    "sku": "GCPL-PR-424",
    "stock": 34,
    "minStock": 6,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40018317_1-godrej-protekt-masterchef-can-1500ml.jpg"
  },
  {
    "id": "prod-425",
    "name": "Godrej Protekt Masterblaster Liquid Handwash Bottle",
    "brand": "Godrej Protekt",
    "category": "Personal Care",
    "subcategory": "Handwashes",
    "desc": "Antibacterial handwash with tea tree oil oil extract",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 95,
    "distPrice": 85,
    "wholesalePrice": 93.5,
    "retailPrice": 95,
    "unitType": "Box",
    "weight": "300 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000425",
    "sku": "GCPL-PR-425",
    "stock": 35,
    "minStock": 7,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40018318_1-godrej-protekt-masterblaster-handwash.jpg"
  },
  {
    "id": "prod-426",
    "name": "Godrej Protekt Masterblaster Liquid Handwash Refill Pouch",
    "brand": "Godrej Protekt",
    "category": "Personal Care",
    "subcategory": "Handwashes",
    "desc": "Small capacity tea tree antibacterial handwash refill",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 42,
    "distPrice": 38,
    "wholesalePrice": 41.8,
    "retailPrice": 42,
    "unitType": "Box",
    "weight": "150 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000426",
    "sku": "GCPL-PR-426",
    "stock": 36,
    "minStock": 7,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40018319_1-godrej-protekt-masterblaster-refill.jpg"
  },
  {
    "id": "prod-427",
    "name": "Godrej Protekt Masterblaster Liquid Handwash Refill Large",
    "brand": "Godrej Protekt",
    "category": "Personal Care",
    "subcategory": "Handwashes",
    "desc": "Value capacity tea tree antibacterial handwash refill",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 185,
    "distPrice": 155,
    "wholesalePrice": 170.5,
    "retailPrice": 178.25,
    "unitType": "Box",
    "weight": "750 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000427",
    "sku": "GCPL-PR-427",
    "stock": 37,
    "minStock": 7,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40018320_1-godrej-protekt-masterblaster-refill-750ml.jpg"
  },
  {
    "id": "prod-428",
    "name": "Godrej Protekt Masterblaster Liquid Handwash Can",
    "brand": "Godrej Protekt",
    "category": "Personal Care",
    "subcategory": "Handwashes",
    "desc": "Super family capacity tea tree handwash storage can",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 329,
    "distPrice": 285,
    "wholesalePrice": 313.5,
    "retailPrice": 327.75,
    "unitType": "Box",
    "weight": "1500 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000428",
    "sku": "GCPL-PR-428",
    "stock": 38,
    "minStock": 7,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40018321_1-godrej-protekt-masterblaster-can-1500ml.jpg"
  },
  {
    "id": "prod-429",
    "name": "Godrej Protekt Alchemist Premium Liquid Handwash Bottle",
    "brand": "Godrej Protekt",
    "category": "Personal Care",
    "subcategory": "Handwashes",
    "desc": "Luxurious foam soap with cooling botanical mint leaves extracts",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 120,
    "distPrice": 105,
    "wholesalePrice": 115.5,
    "retailPrice": 120,
    "unitType": "Box",
    "weight": "300 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000429",
    "sku": "GCPL-PR-429",
    "stock": 39,
    "minStock": 7,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118361_1-godrej-protekt-alchemist-handwash.jpg"
  },
  {
    "id": "prod-430",
    "name": "Godrej Protekt Alchemist Liquid Handwash Refill Large",
    "brand": "Godrej Protekt",
    "category": "Personal Care",
    "subcategory": "Handwashes",
    "desc": "Luxurious foam soap refill in value size",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 240,
    "distPrice": 199,
    "wholesalePrice": 218.9,
    "retailPrice": 228.85,
    "unitType": "Box",
    "weight": "750 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000430",
    "sku": "GCPL-PR-430",
    "stock": 40,
    "minStock": 8,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118362_1-godrej-protekt-alchemist-refill-750ml.jpg"
  },
  {
    "id": "prod-431",
    "name": "Godrej Protekt Instant Hand Sanitizer Gel",
    "brand": "Godrej Protekt",
    "category": "Personal Care",
    "subcategory": "Sanitizers",
    "desc": "Travel pocket alcohol-based hand sanitizer gel bottle",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 25,
    "distPrice": 25,
    "wholesalePrice": 25,
    "retailPrice": 25,
    "unitType": "Box",
    "weight": "50 ml",
    "boxQty": 48,
    "pieceQty": 1,
    "barcode": "8901157000431",
    "sku": "GCPL-PR-431",
    "stock": 41,
    "minStock": 8,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40018322_1-godrej-protekt-sanitizer-50ml.jpg"
  },
  {
    "id": "prod-432",
    "name": "Godrej Protekt Instant Hand Sanitizer Gel Medium",
    "brand": "Godrej Protekt",
    "category": "Personal Care",
    "subcategory": "Sanitizers",
    "desc": "Alcohol-based hand sanitizer gel in mid-size bottle",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 50,
    "distPrice": 45,
    "wholesalePrice": 49.5,
    "retailPrice": 50,
    "unitType": "Box",
    "weight": "100 ml",
    "boxQty": 48,
    "pieceQty": 1,
    "barcode": "8901157000432",
    "sku": "GCPL-PR-432",
    "stock": 42,
    "minStock": 8,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40018323_1-godrej-protekt-sanitizer-100ml.jpg"
  },
  {
    "id": "prod-433",
    "name": "Godrej Protekt Instant Hand Sanitizer Gel Pump Bottle",
    "brand": "Godrej Protekt",
    "category": "Personal Care",
    "subcategory": "Sanitizers",
    "desc": "Large home-safe sanitizer gel dispenser with easy pump",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 250,
    "distPrice": 225,
    "wholesalePrice": 247.5,
    "retailPrice": 250,
    "unitType": "Box",
    "weight": "500 ml",
    "boxQty": 48,
    "pieceQty": 1,
    "barcode": "8901157000433",
    "sku": "GCPL-PR-433",
    "stock": 43,
    "minStock": 8,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40018324_1-godrej-protekt-sanitizer-500ml.jpg"
  },
  {
    "id": "prod-434",
    "name": "Godrej Protekt Instant Hand Sanitizer Gel Can",
    "brand": "Godrej Protekt",
    "category": "Personal Care",
    "subcategory": "Sanitizers",
    "desc": "Bulk 5 litre sanitizer liquid refill can for office and clinics",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 2500,
    "distPrice": 1999,
    "wholesalePrice": 2198.9,
    "retailPrice": 2298.85,
    "unitType": "Box",
    "weight": "5 L",
    "boxQty": 48,
    "pieceQty": 1,
    "barcode": "8901157000434",
    "sku": "GCPL-PR-434",
    "stock": 44,
    "minStock": 8,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40018325_1-godrej-protekt-sanitizer-5L.jpg"
  },
  {
    "id": "prod-435",
    "name": "Godrej Protekt On-The-Go Disinfectant Spray",
    "brand": "Godrej Protekt",
    "category": "Home Care",
    "subcategory": "Disinfectant Sprays",
    "desc": "Anti-germ surface sanitizer aerosol spray for keys and doors",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 120,
    "distPrice": 105,
    "wholesalePrice": 115.5,
    "retailPrice": 120,
    "unitType": "Box",
    "weight": "150 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000435",
    "sku": "GCPL-PR-435",
    "stock": 45,
    "minStock": 9,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40181112_1-godrej-protekt-disinfectant-spray.jpg"
  },
  {
    "id": "prod-436",
    "name": "Godrej Protekt Air & Surface Disinfectant Spray Large",
    "brand": "Godrej Protekt",
    "category": "Home Care",
    "subcategory": "Disinfectant Sprays",
    "desc": "Sanitizing aerosol mist for home surfaces and fabrics",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 199,
    "distPrice": 170,
    "wholesalePrice": 187,
    "retailPrice": 195.5,
    "unitType": "Box",
    "weight": "240 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000436",
    "sku": "GCPL-PR-436",
    "stock": 46,
    "minStock": 9,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40181113_1-godrej-protekt-disinfectant-spray-240ml.jpg"
  },
  {
    "id": "prod-437",
    "name": "Godrej Protekt Antibacterial Skin Wipes (Pack of 10)",
    "brand": "Godrej Protekt",
    "category": "Personal Care",
    "subcategory": "Sanitizing Wipes",
    "desc": "pH balanced active sanitizer wipes for skin and hands",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 30,
    "distPrice": 28,
    "wholesalePrice": 30,
    "retailPrice": 30,
    "unitType": "Box",
    "weight": "10 Wipes",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000437",
    "sku": "GCPL-PR-437",
    "stock": 47,
    "minStock": 9,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40181114_1-godrej-protekt-skin-wipes.jpg"
  },
  {
    "id": "prod-438",
    "name": "Godrej Protekt Antibacterial Skin Wipes (Pack of 30)",
    "brand": "Godrej Protekt",
    "category": "Personal Care",
    "subcategory": "Sanitizing Wipes",
    "desc": "pH balanced sanitizer skin wipes in medium pouch",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 90,
    "distPrice": 80,
    "wholesalePrice": 88,
    "retailPrice": 90,
    "unitType": "Box",
    "weight": "30 Wipes",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000438",
    "sku": "GCPL-PR-438",
    "stock": 48,
    "minStock": 9,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40181115_1-godrej-protekt-skin-wipes-pack-of-30.jpg"
  },
  {
    "id": "prod-439",
    "name": "Godrej Protekt Antibacterial Skin Wipes (Pack of 80)",
    "brand": "Godrej Protekt",
    "category": "Personal Care",
    "subcategory": "Sanitizing Wipes",
    "desc": "pH balanced sanitizer skin wipes in value family pack with lid",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 220,
    "distPrice": 185,
    "wholesalePrice": 203.5,
    "retailPrice": 212.75,
    "unitType": "Box",
    "weight": "80 Wipes",
    "boxQty": 12,
    "pieceQty": 1,
    "barcode": "8901157000439",
    "sku": "GCPL-PR-439",
    "stock": 49,
    "minStock": 9,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40181116_1-godrej-protekt-skin-wipes-pack-of-80.jpg"
  },
  {
    "id": "prod-440",
    "name": "Godrej Protekt Masterblaster Handwash Pouch (Pack of 3)",
    "brand": "Godrej Protekt",
    "category": "Personal Care",
    "subcategory": "Handwashes",
    "desc": "Triple pack tea tree oil handwash refills",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 126,
    "distPrice": 110,
    "wholesalePrice": 121,
    "retailPrice": 126,
    "unitType": "Box",
    "weight": "3 x 150 ml",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000440",
    "sku": "GCPL-PR-440",
    "stock": 50,
    "minStock": 10,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40018326_1-godrej-protekt-masterblaster-refill-pack-of-3.jpg"
  },
  {
    "id": "prod-441",
    "name": "Godrej Protekt Masterchef Handwash Pouch (Pack of 3)",
    "brand": "Godrej Protekt",
    "category": "Personal Care",
    "subcategory": "Handwashes",
    "desc": "Triple pack citrus active grease-cut handwash refills",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 135,
    "distPrice": 115,
    "wholesalePrice": 126.5,
    "retailPrice": 132.25,
    "unitType": "Box",
    "weight": "3 x 150 ml",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000441",
    "sku": "GCPL-PR-441",
    "stock": 51,
    "minStock": 10,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40018327_1-godrej-protekt-masterchef-refill-pack-of-3.jpg"
  },
  {
    "id": "prod-442",
    "name": "Godrej Protekt Instant Sanitizer Spray",
    "brand": "Godrej Protekt",
    "category": "Personal Care",
    "subcategory": "Sanitizers",
    "desc": "Aerosol mist type sanitizer for continuous touch points",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 99,
    "distPrice": 89,
    "wholesalePrice": 97.9,
    "retailPrice": 99,
    "unitType": "Box",
    "weight": "100 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000442",
    "sku": "GCPL-PR-442",
    "stock": 52,
    "minStock": 10,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40018328_1-godrej-protekt-sanitizer-spray.jpg"
  },
  {
    "id": "prod-443",
    "name": "Godrej Protekt Instant Sanitizer Spray (Pack of 2)",
    "brand": "Godrej Protekt",
    "category": "Personal Care",
    "subcategory": "Sanitizers",
    "desc": "Twin saver spray mist sanitizers bundle",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 198,
    "distPrice": 170,
    "wholesalePrice": 187,
    "retailPrice": 195.5,
    "unitType": "Box",
    "weight": "2 x 100 ml",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000443",
    "sku": "GCPL-PR-443",
    "stock": 53,
    "minStock": 10,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40018329_1-godrej-protekt-sanitizer-spray-pack-of-2.jpg"
  },
  {
    "id": "prod-444",
    "name": "Godrej Protekt Disinfectant Spray Aerosol (Pack of 2)",
    "brand": "Godrej Protekt",
    "category": "Home Care",
    "subcategory": "Disinfectant Sprays",
    "desc": "Double saving surface sanitizer aerosol pack",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 240,
    "distPrice": 200,
    "wholesalePrice": 220,
    "retailPrice": 230,
    "unitType": "Box",
    "weight": "2 x 150 ml",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000444",
    "sku": "GCPL-PR-444",
    "stock": 54,
    "minStock": 10,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40181117_1-godrej-protekt-disinfectant-spray-pack-of-2.jpg"
  },
  {
    "id": "prod-445",
    "name": "Godrej Protekt Alchemist Premium Handwash (Pack of 2)",
    "brand": "Godrej Protekt",
    "category": "Personal Care",
    "subcategory": "Handwashes",
    "desc": "Twin foam bottle premium mint handwashes",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 240,
    "distPrice": 199,
    "wholesalePrice": 218.9,
    "retailPrice": 228.85,
    "unitType": "Box",
    "weight": "2 x 300 ml",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000445",
    "sku": "GCPL-PR-445",
    "stock": 55,
    "minStock": 11,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118363_1-godrej-protekt-alchemist-pack-of-2.jpg"
  },
  {
    "id": "prod-446",
    "name": "Godrej Protekt Mr. Magic Powder-To-Liquid Handwash Starter (Pack of 2)",
    "brand": "Godrej Protekt",
    "category": "Personal Care",
    "subcategory": "Handwashes",
    "desc": "Double starter kit for multiple bathroom spaces",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 170,
    "distPrice": 145,
    "wholesalePrice": 159.5,
    "retailPrice": 166.75,
    "unitType": "Box",
    "weight": "2 Packs",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000446",
    "sku": "GCPL-PR-446",
    "stock": 56,
    "minStock": 11,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40178350_1-godrej-protekt-mr-magic-starter-pack-of-2.jpg"
  },
  {
    "id": "prod-447",
    "name": "Godrej Protekt Sanitizing Wipes (Pack of 10) (Pack of 3)",
    "brand": "Godrej Protekt",
    "category": "Personal Care",
    "subcategory": "Sanitizing Wipes",
    "desc": "Triple pouch pocket-size skin wipes bundle",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 90,
    "distPrice": 80,
    "wholesalePrice": 88,
    "retailPrice": 90,
    "unitType": "Box",
    "weight": "3 x 10 Wipes",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000447",
    "sku": "GCPL-PR-447",
    "stock": 57,
    "minStock": 11,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40181118_1-godrej-protekt-skin-wipes-pack-of-10-trio.jpg"
  },
  {
    "id": "prod-448",
    "name": "Godrej Protekt Masterblaster Handwash Bottle (Pack of 2)",
    "brand": "Godrej Protekt",
    "category": "Personal Care",
    "subcategory": "Handwashes",
    "desc": "Twin soap dispenser tea tree handwash pack",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 190,
    "distPrice": 165,
    "wholesalePrice": 181.5,
    "retailPrice": 189.75,
    "unitType": "Box",
    "weight": "2 x 300 ml",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000448",
    "sku": "GCPL-PR-448",
    "stock": 58,
    "minStock": 11,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40018330_1-godrej-protekt-masterblaster-bottle-pack-of-2.jpg"
  },
  {
    "id": "prod-449",
    "name": "Godrej Protekt Masterchef Handwash Bottle (Pack of 2)",
    "brand": "Godrej Protekt",
    "category": "Personal Care",
    "subcategory": "Handwashes",
    "desc": "Twin soap dispenser kitchen citrus handwash pack",
    "hsn": "34011110",
    "gst": 18,
    "mrp": 198,
    "distPrice": 170,
    "wholesalePrice": 187,
    "retailPrice": 195.5,
    "unitType": "Box",
    "weight": "2 x 300 ml",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000449",
    "sku": "GCPL-PR-449",
    "stock": 59,
    "minStock": 11,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40018331_1-godrej-protekt-masterchef-bottle-pack-of-2.jpg"
  },
  {
    "id": "prod-450",
    "name": "Godrej Protekt Instant Sanitizer Gel 50ml (Pack of 5)",
    "brand": "Godrej Protekt",
    "category": "Personal Care",
    "subcategory": "Sanitizers",
    "desc": "Family safety pack of 5 pocket gel sanitizers",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 125,
    "distPrice": 115,
    "wholesalePrice": 125,
    "retailPrice": 125,
    "unitType": "Box",
    "weight": "5 x 50 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000450",
    "sku": "GCPL-PR-450",
    "stock": 60,
    "minStock": 12,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40018332_1-godrej-protekt-sanitizer-50ml-pack-of-5.jpg"
  },
  {
    "id": "prod-451",
    "name": "Godrej Protekt Instant Sanitizer Gel 100ml (Pack of 3)",
    "brand": "Godrej Protekt",
    "category": "Personal Care",
    "subcategory": "Sanitizers",
    "desc": "Mid-size gel sanitizers triple pocket set",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 150,
    "distPrice": 132,
    "wholesalePrice": 145.2,
    "retailPrice": 150,
    "unitType": "Box",
    "weight": "3 x 100 ml",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000451",
    "sku": "GCPL-PR-451",
    "stock": 61,
    "minStock": 12,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40018333_1-godrej-protekt-sanitizer-100ml-pack-of-3.jpg"
  },
  {
    "id": "prod-452",
    "name": "Godrej Protekt Air & Surface Spray 240ml (Pack of 2)",
    "brand": "Godrej Protekt",
    "category": "Home Care",
    "subcategory": "Disinfectant Sprays",
    "desc": "Double saving large surface disinfectant spray",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 398,
    "distPrice": 335,
    "wholesalePrice": 368.5,
    "retailPrice": 385.25,
    "unitType": "Box",
    "weight": "2 x 240 ml",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000452",
    "sku": "GCPL-PR-452",
    "stock": 62,
    "minStock": 12,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40181119_1-godrej-protekt-disinfectant-spray-240ml-twin.jpg"
  },
  {
    "id": "prod-453",
    "name": "Godrej Protekt Fruit & Veggie Wash Bottle",
    "brand": "Godrej Protekt",
    "category": "Home Care",
    "subcategory": "Disinfectant Sprays",
    "desc": "100% natural ingredient wash for safe toxic skin removal",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 149,
    "distPrice": 130,
    "wholesalePrice": 143,
    "retailPrice": 149,
    "unitType": "Box",
    "weight": "500 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000453",
    "sku": "GCPL-PR-453",
    "stock": 63,
    "minStock": 12,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40181120_1-godrej-protekt-fruit-veggie-wash.jpg"
  },
  {
    "id": "prod-454",
    "name": "Godrej Protekt Fruit & Veggie Wash (Pack of 2)",
    "brand": "Godrej Protekt",
    "category": "Home Care",
    "subcategory": "Disinfectant Sprays",
    "desc": "Twin bottle natural fruit cleaning fluid set",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 298,
    "distPrice": 250,
    "wholesalePrice": 275,
    "retailPrice": 287.5,
    "unitType": "Box",
    "weight": "2 x 500 ml",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000454",
    "sku": "GCPL-PR-454",
    "stock": 64,
    "minStock": 12,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40181121_1-godrej-protekt-fruit-veggie-wash-twin.jpg"
  },
  {
    "id": "prod-455",
    "name": "Godrej Protekt Mr. Magic Powder-To-Liquid Refill (Pack of 20)",
    "brand": "Godrej Protekt",
    "category": "Personal Care",
    "subcategory": "Handwashes",
    "desc": "Ultimate bulk sachet box containing 20 powder refills",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 300,
    "distPrice": 240,
    "wholesalePrice": 264,
    "retailPrice": 276,
    "unitType": "Box",
    "weight": "20 x 9 g",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000455",
    "sku": "GCPL-PR-455",
    "stock": 65,
    "minStock": 13,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40178351_1-godrej-protekt-mr-magic-handwash-refill-pack-of-20.jpg"
  },
  {
    "id": "prod-456",
    "name": "Godrej Ezee Liquid Detergent Winterwear Bottle",
    "brand": "Godrej Ezee",
    "category": "Home Care",
    "subcategory": "Liquid Detergents",
    "desc": "Woolmark certified fabric soft cleaning fluid for winterwear with conditioner",
    "hsn": "34022010",
    "gst": 18,
    "mrp": 105,
    "distPrice": 98,
    "wholesalePrice": 105,
    "retailPrice": 105,
    "unitType": "Box",
    "weight": "500 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000456",
    "sku": "GCPL-EZ-456",
    "stock": 66,
    "minStock": 13,
    "image": "https://www.bigbasket.com/media/uploads/p/l/259098_9-godrej-ezee-liquid-detergent-for-winterwear-500g.jpg"
  },
  {
    "id": "prod-457",
    "name": "Godrej Ezee Liquid Detergent Winterwear Bottle Large",
    "brand": "Godrej Ezee",
    "category": "Home Care",
    "subcategory": "Liquid Detergents",
    "desc": "Woolmark certified large active cleaning fluid",
    "hsn": "34022010",
    "gst": 18,
    "mrp": 190,
    "distPrice": 175,
    "wholesalePrice": 190,
    "retailPrice": 190,
    "unitType": "Box",
    "weight": "1 kg",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000457",
    "sku": "GCPL-EZ-457",
    "stock": 67,
    "minStock": 13,
    "image": "https://www.bigbasket.com/media/uploads/p/l/259099_9-godrej-ezee-liquid-detergent-for-winterwear.jpg"
  },
  {
    "id": "prod-458",
    "name": "Godrej Ezee Liquid Detergent Winterwear Bottle Jumbo",
    "brand": "Godrej Ezee",
    "category": "Home Care",
    "subcategory": "Liquid Detergents",
    "desc": "Woolmark certified extra-large active cleaning fluid",
    "hsn": "34022010",
    "gst": 18,
    "mrp": 360,
    "distPrice": 325,
    "wholesalePrice": 357.5,
    "retailPrice": 360,
    "unitType": "Box",
    "weight": "2 kg",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000458",
    "sku": "GCPL-EZ-458",
    "stock": 68,
    "minStock": 13,
    "image": "https://www.bigbasket.com/media/uploads/p/l/259100_9-godrej-ezee-liquid-detergent-for-winterwear-2kg.jpg"
  },
  {
    "id": "prod-459",
    "name": "Godrej Ezee Liquid Detergent Winterwear Can",
    "brand": "Godrej Ezee",
    "category": "Home Care",
    "subcategory": "Liquid Detergents",
    "desc": "Bulk storage winterwear active cleaning fluid can",
    "hsn": "34022010",
    "gst": 18,
    "mrp": 850,
    "distPrice": 749,
    "wholesalePrice": 823.9,
    "retailPrice": 850,
    "unitType": "Box",
    "weight": "5 kg",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000459",
    "sku": "GCPL-EZ-459",
    "stock": 69,
    "minStock": 13,
    "image": "https://www.bigbasket.com/media/uploads/p/l/259101_9-godrej-ezee-liquid-detergent-for-winterwear-5kg.jpg"
  },
  {
    "id": "prod-460",
    "name": "Godrej Ezee Liquid Detergent Refill Pouch",
    "brand": "Godrej Ezee",
    "category": "Home Care",
    "subcategory": "Liquid Detergents",
    "desc": "Winterwear active liquid detergent pouch refill",
    "hsn": "34022010",
    "gst": 18,
    "mrp": 95,
    "distPrice": 88,
    "wholesalePrice": 95,
    "retailPrice": 95,
    "unitType": "Box",
    "weight": "500 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000460",
    "sku": "GCPL-EZ-460",
    "stock": 70,
    "minStock": 14,
    "image": "https://www.bigbasket.com/media/uploads/p/l/259102_9-godrej-ezee-refill-500g.jpg"
  },
  {
    "id": "prod-461",
    "name": "Godrej Ezee Liquid Detergent Refill Pouch Large",
    "brand": "Godrej Ezee",
    "category": "Home Care",
    "subcategory": "Liquid Detergents",
    "desc": "Winterwear active liquid detergent large pouch refill",
    "hsn": "34022010",
    "gst": 18,
    "mrp": 175,
    "distPrice": 160,
    "wholesalePrice": 175,
    "retailPrice": 175,
    "unitType": "Box",
    "weight": "1 kg",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000461",
    "sku": "GCPL-EZ-461",
    "stock": 71,
    "minStock": 14,
    "image": "https://www.bigbasket.com/media/uploads/p/l/259103_9-godrej-ezee-refill-1kg.jpg"
  },
  {
    "id": "prod-462",
    "name": "Godrej Ezee Liquid Detergent Sachet",
    "brand": "Godrej Ezee",
    "category": "Home Care",
    "subcategory": "Liquid Detergents",
    "desc": "Single wash winterwear active sachet pouch",
    "hsn": "34022010",
    "gst": 18,
    "mrp": 10,
    "distPrice": 10,
    "wholesalePrice": 10,
    "retailPrice": 10,
    "unitType": "Box",
    "weight": "50 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000462",
    "sku": "GCPL-EZ-462",
    "stock": 72,
    "minStock": 14,
    "image": "https://www.bigbasket.com/media/uploads/p/l/259104_9-godrej-ezee-sachet-50g.jpg"
  },
  {
    "id": "prod-463",
    "name": "Godrej Ezee Liquid Detergent Sachet (Pack of 10)",
    "brand": "Godrej Ezee",
    "category": "Home Care",
    "subcategory": "Liquid Detergents",
    "desc": "Ten strip single wash winterwear active sachets",
    "hsn": "34022010",
    "gst": 18,
    "mrp": 100,
    "distPrice": 90,
    "wholesalePrice": 99,
    "retailPrice": 100,
    "unitType": "Box",
    "weight": "10 x 50 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000463",
    "sku": "GCPL-EZ-463",
    "stock": 73,
    "minStock": 14,
    "image": "https://www.bigbasket.com/media/uploads/p/l/259105_9-godrej-ezee-sachet-pack-of-10.jpg"
  },
  {
    "id": "prod-464",
    "name": "Godrej Ezee Silk & Chiffon Liquid Detergent",
    "brand": "Godrej Ezee",
    "category": "Home Care",
    "subcategory": "Liquid Detergents",
    "desc": "Delicate fabric pH-balanced premium cleaning detergent",
    "hsn": "34022010",
    "gst": 18,
    "mrp": 120,
    "distPrice": 110,
    "wholesalePrice": 120,
    "retailPrice": 120,
    "unitType": "Box",
    "weight": "500 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000464",
    "sku": "GCPL-EZ-464",
    "stock": 74,
    "minStock": 14,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40181212_1-godrej-ezee-silk-detergent.jpg"
  },
  {
    "id": "prod-465",
    "name": "Godrej Ezee Silk & Chiffon Liquid Detergent Large",
    "brand": "Godrej Ezee",
    "category": "Home Care",
    "subcategory": "Liquid Detergents",
    "desc": "Delicate fabric pH-balanced premium detergent bottle",
    "hsn": "34022010",
    "gst": 18,
    "mrp": 220,
    "distPrice": 199,
    "wholesalePrice": 218.9,
    "retailPrice": 220,
    "unitType": "Box",
    "weight": "1 kg",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000465",
    "sku": "GCPL-EZ-465",
    "stock": 75,
    "minStock": 15,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40181213_1-godrej-ezee-silk-detergent-1kg.jpg"
  },
  {
    "id": "prod-466",
    "name": "Godrej Ezee Matic Liquid Detergent Front Load",
    "brand": "Godrej Ezee",
    "category": "Home Care",
    "subcategory": "Liquid Detergents",
    "desc": "Low suds high performance automatic machine liquid",
    "hsn": "34022010",
    "gst": 18,
    "mrp": 210,
    "distPrice": 190,
    "wholesalePrice": 209,
    "retailPrice": 210,
    "unitType": "Box",
    "weight": "1 kg",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000466",
    "sku": "GCPL-EZ-466",
    "stock": 76,
    "minStock": 15,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40181214_1-godrej-ezee-matic-front-load.jpg"
  },
  {
    "id": "prod-467",
    "name": "Godrej Ezee Matic Liquid Detergent Top Load",
    "brand": "Godrej Ezee",
    "category": "Home Care",
    "subcategory": "Liquid Detergents",
    "desc": "High suds deep clean automatic machine liquid",
    "hsn": "34022010",
    "gst": 18,
    "mrp": 199,
    "distPrice": 180,
    "wholesalePrice": 198,
    "retailPrice": 199,
    "unitType": "Box",
    "weight": "1 kg",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000467",
    "sku": "GCPL-EZ-467",
    "stock": 77,
    "minStock": 15,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40181215_1-godrej-ezee-matic-top-load.jpg"
  },
  {
    "id": "prod-468",
    "name": "Godrej Genteel Liquid Detergent Bottle",
    "brand": "Genteel",
    "category": "Home Care",
    "subcategory": "Liquid Detergents",
    "desc": "Premium multicloth liquid wash with built-in fabric conditioner",
    "hsn": "34022010",
    "gst": 18,
    "mrp": 170,
    "distPrice": 155,
    "wholesalePrice": 170,
    "retailPrice": 170,
    "unitType": "Box",
    "weight": "1 kg",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000468",
    "sku": "GCPL-EZ-468",
    "stock": 78,
    "minStock": 15,
    "image": "https://www.bigbasket.com/media/uploads/p/l/259106_9-godrej-genteel-liquid-detergent.jpg"
  },
  {
    "id": "prod-469",
    "name": "Godrej Genteel Liquid Detergent Bottle Jumbo",
    "brand": "Genteel",
    "category": "Home Care",
    "subcategory": "Liquid Detergents",
    "desc": "Premium multicloth liquid wash with built-in conditioner in large pack",
    "hsn": "34022010",
    "gst": 18,
    "mrp": 320,
    "distPrice": 290,
    "wholesalePrice": 319,
    "retailPrice": 320,
    "unitType": "Box",
    "weight": "2 kg",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000469",
    "sku": "GCPL-EZ-469",
    "stock": 79,
    "minStock": 15,
    "image": "https://www.bigbasket.com/media/uploads/p/l/259107_9-godrej-genteel-liquid-detergent-2kg.jpg"
  },
  {
    "id": "prod-470",
    "name": "Godrej Genteel Liquid Detergent Refill Pouch",
    "brand": "Genteel",
    "category": "Home Care",
    "subcategory": "Liquid Detergents",
    "desc": "Premium multicloth liquid wash pouch refill",
    "hsn": "34022010",
    "gst": 18,
    "mrp": 155,
    "distPrice": 140,
    "wholesalePrice": 154,
    "retailPrice": 155,
    "unitType": "Box",
    "weight": "1 kg",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000470",
    "sku": "GCPL-EZ-470",
    "stock": 80,
    "minStock": 16,
    "image": "https://www.bigbasket.com/media/uploads/p/l/259108_9-godrej-genteel-refill-1kg.jpg"
  },
  {
    "id": "prod-471",
    "name": "Godrej Ezee Winterwear Bottle (Pack of 2)",
    "brand": "Godrej Ezee",
    "category": "Home Care",
    "subcategory": "Liquid Detergents",
    "desc": "Twin standard wool protection liquid wash bottle",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 380,
    "distPrice": 340,
    "wholesalePrice": 374,
    "retailPrice": 380,
    "unitType": "Box",
    "weight": "2 x 1 kg",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000471",
    "sku": "GCPL-EZ-471",
    "stock": 81,
    "minStock": 16,
    "image": "https://www.bigbasket.com/media/uploads/p/l/259106_9-godrej-ezee-winter-twin.jpg"
  },
  {
    "id": "prod-472",
    "name": "Godrej Genteel Liquid Detergent (Pack of 2)",
    "brand": "Genteel",
    "category": "Home Care",
    "subcategory": "Liquid Detergents",
    "desc": "Twin standard premium multicloth liquid wash set",
    "hsn": "34022010",
    "gst": 18,
    "mrp": 340,
    "distPrice": 299,
    "wholesalePrice": 328.9,
    "retailPrice": 340,
    "unitType": "Box",
    "weight": "2 x 1 kg",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000472",
    "sku": "GCPL-EZ-472",
    "stock": 82,
    "minStock": 16,
    "image": "https://www.bigbasket.com/media/uploads/p/l/259109_9-godrej-genteel-twin.jpg"
  },
  {
    "id": "prod-473",
    "name": "Godrej Ezee Winterwear Refill Pouch (Pack of 2)",
    "brand": "Godrej Ezee",
    "category": "Home Care",
    "subcategory": "Liquid Detergents",
    "desc": "Twin saver pouch set for winterwear wash",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 350,
    "distPrice": 310,
    "wholesalePrice": 341,
    "retailPrice": 350,
    "unitType": "Box",
    "weight": "2 x 1 kg",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000473",
    "sku": "GCPL-EZ-473",
    "stock": 83,
    "minStock": 16,
    "image": "https://www.bigbasket.com/media/uploads/p/l/259107_9-godrej-ezee-refill-twin.jpg"
  },
  {
    "id": "prod-474",
    "name": "Godrej Genteel Refill Pouch (Pack of 2)",
    "brand": "Genteel",
    "category": "Home Care",
    "subcategory": "Liquid Detergents",
    "desc": "Twin saver pouch set for multicloth wash",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 310,
    "distPrice": 270,
    "wholesalePrice": 297,
    "retailPrice": 310,
    "unitType": "Box",
    "weight": "2 x 1 kg",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000474",
    "sku": "GCPL-EZ-474",
    "stock": 84,
    "minStock": 16,
    "image": "https://www.bigbasket.com/media/uploads/p/l/259110_9-godrej-genteel-refill-twin.jpg"
  },
  {
    "id": "prod-475",
    "name": "Godrej Ezee Silk Care Liquid Detergent Pouch",
    "brand": "Godrej Ezee",
    "category": "Home Care",
    "subcategory": "Liquid Detergents",
    "desc": "Delicate silk wash liquid pouch refill",
    "hsn": "34022010",
    "gst": 18,
    "mrp": 110,
    "distPrice": 99,
    "wholesalePrice": 108.9,
    "retailPrice": 110,
    "unitType": "Box",
    "weight": "500 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000475",
    "sku": "GCPL-EZ-475",
    "stock": 85,
    "minStock": 17,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40181216_1-godrej-ezee-silk-refill.jpg"
  },
  {
    "id": "prod-476",
    "name": "Godrej Ezee Silk Care Liquid Detergent (Pack of 2)",
    "brand": "Godrej Ezee",
    "category": "Home Care",
    "subcategory": "Liquid Detergents",
    "desc": "Twin delicate fabric silk wash bottle bundle",
    "hsn": "34022010",
    "gst": 18,
    "mrp": 240,
    "distPrice": 210,
    "wholesalePrice": 231,
    "retailPrice": 240,
    "unitType": "Box",
    "weight": "2 x 500 g",
    "boxQty": 36,
    "pieceQty": 1,
    "barcode": "8901157000476",
    "sku": "GCPL-EZ-476",
    "stock": 86,
    "minStock": 17,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40181217_1-godrej-ezee-silk-twin-500g.jpg"
  },
  {
    "id": "prod-477",
    "name": "Godrej Ezee Matic Front Load Refill Pouch",
    "brand": "Godrej Ezee",
    "category": "Home Care",
    "subcategory": "Liquid Detergents",
    "desc": "Low suds front load detergent pouch refill",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 195,
    "distPrice": 175,
    "wholesalePrice": 192.5,
    "retailPrice": 195,
    "unitType": "Box",
    "weight": "1 kg",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000477",
    "sku": "GCPL-EZ-477",
    "stock": 87,
    "minStock": 17,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40181218_1-godrej-ezee-matic-front-refill.jpg"
  },
  {
    "id": "prod-478",
    "name": "Godrej Ezee Matic Top Load Refill Pouch",
    "brand": "Godrej Ezee",
    "category": "Home Care",
    "subcategory": "Liquid Detergents",
    "desc": "High suds top load detergent pouch refill",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 185,
    "distPrice": 165,
    "wholesalePrice": 181.5,
    "retailPrice": 185,
    "unitType": "Box",
    "weight": "1 kg",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000478",
    "sku": "GCPL-EZ-478",
    "stock": 88,
    "minStock": 17,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40181219_1-godrej-ezee-matic-top-refill.jpg"
  },
  {
    "id": "prod-479",
    "name": "Godrej Ezee Winterwear Bottle (Pack of 3)",
    "brand": "Godrej Ezee",
    "category": "Home Care",
    "subcategory": "Liquid Detergents",
    "desc": "Triple value wool wash liquid bottle bundle",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 570,
    "distPrice": 499,
    "wholesalePrice": 548.9,
    "retailPrice": 570,
    "unitType": "Box",
    "weight": "3 x 1 kg",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000479",
    "sku": "GCPL-EZ-479",
    "stock": 89,
    "minStock": 17,
    "image": "https://www.bigbasket.com/media/uploads/p/l/259108_9-godrej-ezee-winter-triple.jpg"
  },
  {
    "id": "prod-480",
    "name": "Godrej Genteel Liquid Detergent Bottle (Pack of 3)",
    "brand": "Genteel",
    "category": "Home Care",
    "subcategory": "Liquid Detergents",
    "desc": "Triple value premium multicloth liquid wash bundle",
    "hsn": "34022010",
    "gst": 18,
    "mrp": 510,
    "distPrice": 435,
    "wholesalePrice": 478.5,
    "retailPrice": 500.25,
    "unitType": "Box",
    "weight": "3 x 1 kg",
    "boxQty": 32,
    "pieceQty": 1,
    "barcode": "8901157000480",
    "sku": "GCPL-EZ-480",
    "stock": 30,
    "minStock": 6,
    "image": "https://www.bigbasket.com/media/uploads/p/l/259111_9-godrej-genteel-triple.jpg"
  },
  {
    "id": "prod-481",
    "name": "BBlunt Intense Moisture Shampoo for Dry Hair",
    "brand": "BBlunt",
    "category": "Hair Care",
    "subcategory": "Shampoos",
    "desc": "Premium hydrating shampoo with jojoba and vitamin E for dry hair",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 399,
    "distPrice": 340,
    "wholesalePrice": 374,
    "retailPrice": 391,
    "unitType": "Box",
    "weight": "300 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000481",
    "sku": "GCPL-BB-481",
    "stock": 31,
    "minStock": 6,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118364_1-bblunt-intense-moisture-shampoo.jpg"
  },
  {
    "id": "prod-482",
    "name": "BBlunt Intense Moisture Conditioner",
    "brand": "BBlunt",
    "category": "Hair Care",
    "subcategory": "Conditioners",
    "desc": "Premium nourishing conditioner with active moisture lock",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 399,
    "distPrice": 340,
    "wholesalePrice": 374,
    "retailPrice": 391,
    "unitType": "Box",
    "weight": "250 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000482",
    "sku": "GCPL-BB-482",
    "stock": 32,
    "minStock": 6,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118365_1-bblunt-intense-moisture-conditioner.jpg"
  },
  {
    "id": "prod-483",
    "name": "BBlunt Repair Remedy Shampoo for Damaged Hair",
    "brand": "BBlunt",
    "category": "Hair Care",
    "subcategory": "Shampoos",
    "desc": "Keratin and argan oil infused hair structure repair shampoo",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 399,
    "distPrice": 340,
    "wholesalePrice": 374,
    "retailPrice": 391,
    "unitType": "Box",
    "weight": "300 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000483",
    "sku": "GCPL-BB-483",
    "stock": 33,
    "minStock": 6,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118366_1-bblunt-repair-remedy-shampoo.jpg"
  },
  {
    "id": "prod-484",
    "name": "BBlunt Repair Remedy Conditioner",
    "brand": "BBlunt",
    "category": "Hair Care",
    "subcategory": "Conditioners",
    "desc": "Keratin infused cuticle repair moisturizing conditioner",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 399,
    "distPrice": 340,
    "wholesalePrice": 374,
    "retailPrice": 391,
    "unitType": "Box",
    "weight": "250 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000484",
    "sku": "GCPL-BB-484",
    "stock": 34,
    "minStock": 6,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118367_1-bblunt-repair-remedy-conditioner.jpg"
  },
  {
    "id": "prod-485",
    "name": "BBlunt Curly Ever After Shampoo for Curly Hair",
    "brand": "BBlunt",
    "category": "Hair Care",
    "subcategory": "Shampoos",
    "desc": "Sulfate-free curl definition shampoo with coconut water",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 449,
    "distPrice": 380,
    "wholesalePrice": 418,
    "retailPrice": 437,
    "unitType": "Box",
    "weight": "300 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000485",
    "sku": "GCPL-BB-485",
    "stock": 35,
    "minStock": 7,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118368_1-bblunt-curly-shampoo.jpg"
  },
  {
    "id": "prod-486",
    "name": "BBlunt Curly Ever After Conditioner",
    "brand": "BBlunt",
    "category": "Hair Care",
    "subcategory": "Conditioners",
    "desc": "Sulfate-free curl hydrating conditioner with organic shea butter",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 449,
    "distPrice": 380,
    "wholesalePrice": 418,
    "retailPrice": 437,
    "unitType": "Box",
    "weight": "250 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000486",
    "sku": "GCPL-BB-486",
    "stock": 36,
    "minStock": 7,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118369_1-bblunt-curly-conditioner.jpg"
  },
  {
    "id": "prod-487",
    "name": "BBlunt Full Throttle Volume Shampoo",
    "brand": "BBlunt",
    "category": "Hair Care",
    "subcategory": "Shampoos",
    "desc": "Volumizing shampoo containing hydrolyzed wheat proteins",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 399,
    "distPrice": 340,
    "wholesalePrice": 374,
    "retailPrice": 391,
    "unitType": "Box",
    "weight": "300 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000487",
    "sku": "GCPL-BB-487",
    "stock": 37,
    "minStock": 7,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118370_1-bblunt-volume-shampoo.jpg"
  },
  {
    "id": "prod-488",
    "name": "BBlunt Born Again Shampoo for Hair Fall",
    "brand": "BBlunt",
    "category": "Hair Care",
    "subcategory": "Shampoos",
    "desc": "Anti-hairfall hair revitalizer shampoo with caffeine extracts",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 399,
    "distPrice": 340,
    "wholesalePrice": 374,
    "retailPrice": 391,
    "unitType": "Box",
    "weight": "300 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000488",
    "sku": "GCPL-BB-488",
    "stock": 38,
    "minStock": 7,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118371_1-bblunt-born-again-shampoo.jpg"
  },
  {
    "id": "prod-489",
    "name": "BBlunt Born Again Conditioner",
    "brand": "BBlunt",
    "category": "Hair Care",
    "subcategory": "Conditioners",
    "desc": "Anti-hairfall follicle strengthening conditioner with caffeine",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 399,
    "distPrice": 340,
    "wholesalePrice": 374,
    "retailPrice": 391,
    "unitType": "Box",
    "weight": "250 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000489",
    "sku": "GCPL-BB-489",
    "stock": 39,
    "minStock": 7,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118372_1-bblunt-born-again-conditioner.jpg"
  },
  {
    "id": "prod-490",
    "name": "BBlunt Salon Secret High Shine Hair Colour Black",
    "brand": "BBlunt",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "Luxury cream hair color featuring shine tonic silk complex",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 225,
    "distPrice": 190,
    "wholesalePrice": 209,
    "retailPrice": 218.5,
    "unitType": "Box",
    "weight": "1 Unit",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000490",
    "sku": "GCPL-BB-490",
    "stock": 40,
    "minStock": 8,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118373_1-bblunt-salon-secret-black.jpg"
  },
  {
    "id": "prod-491",
    "name": "BBlunt Salon Secret Hair Colour Coffee Natural Brown",
    "brand": "BBlunt",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "Luxury cream hair color in coffee natural brown shade",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 225,
    "distPrice": 190,
    "wholesalePrice": 209,
    "retailPrice": 218.5,
    "unitType": "Box",
    "weight": "1 Unit",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000491",
    "sku": "GCPL-BB-491",
    "stock": 41,
    "minStock": 8,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118374_1-bblunt-salon-secret-coffee.jpg"
  },
  {
    "id": "prod-492",
    "name": "BBlunt Salon Secret Hair Colour Chocolate Dark Brown",
    "brand": "BBlunt",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "Luxury cream hair color in chocolate dark brown shade",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 225,
    "distPrice": 190,
    "wholesalePrice": 209,
    "retailPrice": 218.5,
    "unitType": "Box",
    "weight": "1 Unit",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000492",
    "sku": "GCPL-BB-492",
    "stock": 42,
    "minStock": 8,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118375_1-bblunt-salon-secret-chocolate.jpg"
  },
  {
    "id": "prod-493",
    "name": "BBlunt Salon Secret Hair Colour Wine Burgundy",
    "brand": "BBlunt",
    "category": "Hair Care",
    "subcategory": "Hair Colours",
    "desc": "Luxury cream hair color in deep wine burgundy shade",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 225,
    "distPrice": 190,
    "wholesalePrice": 209,
    "retailPrice": 218.5,
    "unitType": "Box",
    "weight": "1 Unit",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000493",
    "sku": "GCPL-BB-493",
    "stock": 43,
    "minStock": 8,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118376_1-bblunt-salon-secret-burgundy.jpg"
  },
  {
    "id": "prod-494",
    "name": "BBlunt Dry Shampoo Back To Life Classic",
    "brand": "BBlunt",
    "category": "Hair Care",
    "subcategory": "Styling Products",
    "desc": "Instant waterless hair refreshing spray with micro starch",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 499,
    "distPrice": 420,
    "wholesalePrice": 462,
    "retailPrice": 483,
    "unitType": "Box",
    "weight": "150 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000494",
    "sku": "GCPL-BB-494",
    "stock": 44,
    "minStock": 8,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118377_1-bblunt-dry-shampoo.jpg"
  },
  {
    "id": "prod-495",
    "name": "BBlunt Dry Shampoo Back To Life Classic Travel Mini",
    "brand": "BBlunt",
    "category": "Hair Care",
    "subcategory": "Styling Products",
    "desc": "Instant waterless hair refreshing spray in travel bottle",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 249,
    "distPrice": 210,
    "wholesalePrice": 231,
    "retailPrice": 241.5,
    "unitType": "Box",
    "weight": "50 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000495",
    "sku": "GCPL-BB-495",
    "stock": 45,
    "minStock": 9,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118378_1-bblunt-dry-shampoo-travel.jpg"
  },
  {
    "id": "prod-496",
    "name": "BBlunt Hair Mist for Heat Protection",
    "brand": "BBlunt",
    "category": "Hair Care",
    "subcategory": "Styling Products",
    "desc": "Active shielding spray designed for blow drying and heat stylers",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 350,
    "distPrice": 299,
    "wholesalePrice": 328.9,
    "retailPrice": 343.85,
    "unitType": "Box",
    "weight": "150 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000496",
    "sku": "GCPL-BB-496",
    "stock": 46,
    "minStock": 9,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118379_1-bblunt-heat-mist.jpg"
  },
  {
    "id": "prod-497",
    "name": "BBlunt Styling Gel High Hold",
    "brand": "BBlunt",
    "category": "Hair Care",
    "subcategory": "Styling Products",
    "desc": "Glossy finish extreme holding hair gel",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 299,
    "distPrice": 250,
    "wholesalePrice": 275,
    "retailPrice": 287.5,
    "unitType": "Box",
    "weight": "150 ml",
    "boxQty": 48,
    "pieceQty": 1,
    "barcode": "8901157000497",
    "sku": "GCPL-BB-497",
    "stock": 47,
    "minStock": 9,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118380_1-bblunt-hair-gel.jpg"
  },
  {
    "id": "prod-498",
    "name": "BBlunt Styling Wax Matte Finish",
    "brand": "BBlunt",
    "category": "Hair Care",
    "subcategory": "Styling Products",
    "desc": "Natural look strong holding clay wax",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 299,
    "distPrice": 250,
    "wholesalePrice": 275,
    "retailPrice": 287.5,
    "unitType": "Box",
    "weight": "50 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000498",
    "sku": "GCPL-BB-498",
    "stock": 48,
    "minStock": 9,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118381_1-bblunt-hair-wax.jpg"
  },
  {
    "id": "prod-499",
    "name": "BBlunt Intense Moisture Hair Mask",
    "brand": "BBlunt",
    "category": "Hair Care",
    "subcategory": "Styling Products",
    "desc": "Deep spa hydration hair treatment mask",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 499,
    "distPrice": 420,
    "wholesalePrice": 462,
    "retailPrice": 483,
    "unitType": "Box",
    "weight": "200 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000499",
    "sku": "GCPL-BB-499",
    "stock": 49,
    "minStock": 9,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118382_1-bblunt-moisture-mask.jpg"
  },
  {
    "id": "prod-500",
    "name": "BBlunt Repair Remedy Hair Mask",
    "brand": "BBlunt",
    "category": "Hair Care",
    "subcategory": "Styling Products",
    "desc": "Deep damage structural repair keratin mask",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 499,
    "distPrice": 420,
    "wholesalePrice": 462,
    "retailPrice": 483,
    "unitType": "Box",
    "weight": "200 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000500",
    "sku": "GCPL-BB-500",
    "stock": 50,
    "minStock": 10,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118383_1-bblunt-repair-mask.jpg"
  },
  {
    "id": "prod-501",
    "name": "BBlunt Curly Ever After Hair Mask",
    "brand": "BBlunt",
    "category": "Hair Care",
    "subcategory": "Styling Products",
    "desc": "Deep curl definition hydration mask",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 549,
    "distPrice": 460,
    "wholesalePrice": 506,
    "retailPrice": 529,
    "unitType": "Box",
    "weight": "200 g",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000501",
    "sku": "GCPL-BB-501",
    "stock": 51,
    "minStock": 10,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118384_1-bblunt-curly-mask.jpg"
  },
  {
    "id": "prod-502",
    "name": "BBlunt Intense Moisture Shampoo Travel Mini",
    "brand": "BBlunt",
    "category": "Hair Care",
    "subcategory": "Shampoos",
    "desc": "Travel mini hydrating shampoo bottle",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 150,
    "distPrice": 135,
    "wholesalePrice": 148.5,
    "retailPrice": 150,
    "unitType": "Box",
    "weight": "100 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000502",
    "sku": "GCPL-BB-502",
    "stock": 52,
    "minStock": 10,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118385_1-bblunt-moisture-shampoo-100ml.jpg"
  },
  {
    "id": "prod-503",
    "name": "BBlunt Intense Moisture Conditioner Travel Mini",
    "brand": "BBlunt",
    "category": "Hair Care",
    "subcategory": "Conditioners",
    "desc": "Travel mini moisture conditioner bottle",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 150,
    "distPrice": 135,
    "wholesalePrice": 148.5,
    "retailPrice": 150,
    "unitType": "Box",
    "weight": "100 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000503",
    "sku": "GCPL-BB-503",
    "stock": 53,
    "minStock": 10,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118386_1-bblunt-moisture-conditioner-100ml.jpg"
  },
  {
    "id": "prod-504",
    "name": "BBlunt Repair Remedy Shampoo Travel Mini",
    "brand": "BBlunt",
    "category": "Hair Care",
    "subcategory": "Shampoos",
    "desc": "Travel mini keratin repair shampoo bottle",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 150,
    "distPrice": 135,
    "wholesalePrice": 148.5,
    "retailPrice": 150,
    "unitType": "Box",
    "weight": "100 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000504",
    "sku": "GCPL-BB-504",
    "stock": 54,
    "minStock": 10,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118387_1-bblunt-repair-shampoo-100ml.jpg"
  },
  {
    "id": "prod-505",
    "name": "BBlunt Curly Ever After Shampoo Travel Mini",
    "brand": "BBlunt",
    "category": "Hair Care",
    "subcategory": "Shampoos",
    "desc": "Travel mini sulfate-free curl shampoo bottle",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 175,
    "distPrice": 155,
    "wholesalePrice": 170.5,
    "retailPrice": 175,
    "unitType": "Box",
    "weight": "100 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000505",
    "sku": "GCPL-BB-505",
    "stock": 55,
    "minStock": 11,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118388_1-bblunt-curly-shampoo-100ml.jpg"
  },
  {
    "id": "prod-506",
    "name": "BBlunt Intense Moisture Shampoo Large",
    "brand": "BBlunt",
    "category": "Hair Care",
    "subcategory": "Shampoos",
    "desc": "Large salon pump bottle hydrating shampoo",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 499,
    "distPrice": 425,
    "wholesalePrice": 467.5,
    "retailPrice": 488.75,
    "unitType": "Box",
    "weight": "400 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000506",
    "sku": "GCPL-BB-506",
    "stock": 56,
    "minStock": 11,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118389_1-bblunt-moisture-shampoo-400ml.jpg"
  },
  {
    "id": "prod-507",
    "name": "BBlunt Repair Remedy Shampoo Large",
    "brand": "BBlunt",
    "category": "Hair Care",
    "subcategory": "Shampoos",
    "desc": "Large salon pump bottle keratin repair shampoo",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 499,
    "distPrice": 425,
    "wholesalePrice": 467.5,
    "retailPrice": 488.75,
    "unitType": "Box",
    "weight": "400 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000507",
    "sku": "GCPL-BB-507",
    "stock": 57,
    "minStock": 11,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118390_1-bblunt-repair-shampoo-400ml.jpg"
  },
  {
    "id": "prod-508",
    "name": "BBlunt Curly Ever After Shampoo Large",
    "brand": "BBlunt",
    "category": "Hair Care",
    "subcategory": "Shampoos",
    "desc": "Large salon pump bottle sulfate-free curl shampoo",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 549,
    "distPrice": 475,
    "wholesalePrice": 522.5,
    "retailPrice": 546.25,
    "unitType": "Box",
    "weight": "400 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000508",
    "sku": "GCPL-BB-508",
    "stock": 58,
    "minStock": 11,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118391_1-bblunt-curly-shampoo-400ml.jpg"
  },
  {
    "id": "prod-509",
    "name": "BBlunt Born Again Shampoo Large",
    "brand": "BBlunt",
    "category": "Hair Care",
    "subcategory": "Shampoos",
    "desc": "Large salon pump bottle anti-hairfall shampoo",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 499,
    "distPrice": 425,
    "wholesalePrice": 467.5,
    "retailPrice": 488.75,
    "unitType": "Box",
    "weight": "400 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000509",
    "sku": "GCPL-BB-509",
    "stock": 59,
    "minStock": 11,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118392_1-bblunt-born-shampoo-400ml.jpg"
  },
  {
    "id": "prod-510",
    "name": "BBlunt Hair Serum Intense Hydration",
    "brand": "BBlunt",
    "category": "Hair Care",
    "subcategory": "Styling Products",
    "desc": "Polishing hydration hair serum with macadamia oil",
    "hsn": "38089191",
    "gst": 18,
    "mrp": 350,
    "distPrice": 299,
    "wholesalePrice": 328.9,
    "retailPrice": 343.85,
    "unitType": "Box",
    "weight": "75 ml",
    "boxQty": 24,
    "pieceQty": 1,
    "barcode": "8901157000510",
    "sku": "GCPL-BB-510",
    "stock": 60,
    "minStock": 12,
    "image": "https://www.bigbasket.com/media/uploads/p/l/40118393_1-bblunt-hair-serum.jpg"
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

// --- 💳 PAYMENT GATEWAY & SOUNDBOX VOICE CONFIG ---
let paymentSettings = {
  upiAddress: "godrejDistributor@upi",
  razorpayKey: "rzp_test_8s20K2vW2m5a5P"
};

// Load settings from localStorage on startup
function initPaymentSettings() {
  const saved = localStorage.getItem("godrej_erp_payment_settings");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed.upiAddress) paymentSettings.upiAddress = parsed.upiAddress;
      if (parsed.razorpayKey) paymentSettings.razorpayKey = parsed.razorpayKey;
    } catch (e) {
      console.error("Error parsing payment settings", e);
    }
  }
  
  // Set UI inputs
  const upiEl = document.getElementById("setting-upi-address");
  const rzpEl = document.getElementById("setting-rzp-key");
  if (upiEl) upiEl.value = paymentSettings.upiAddress;
  if (rzpEl) rzpEl.value = paymentSettings.razorpayKey;
}

// Call on startup automatically
setTimeout(initPaymentSettings, 500);

function togglePaymentSettingsPanel() {
  const panel = document.getElementById("payment-settings-panel");
  if (!panel) return;
  if (panel.style.display === "none") {
    panel.style.display = "block";
    // Ensure inputs match latest config
    const upiEl = document.getElementById("setting-upi-address");
    const rzpEl = document.getElementById("setting-rzp-key");
    if (upiEl) upiEl.value = paymentSettings.upiAddress;
    if (rzpEl) rzpEl.value = paymentSettings.razorpayKey;
  } else {
    panel.style.display = "none";
  }
}

function savePaymentSettings() {
  const upiVal = document.getElementById("setting-upi-address").value.trim();
  const rzpVal = document.getElementById("setting-rzp-key").value.trim();
  
  if (!upiVal || !rzpVal) {
    showToast("Merchant address and Razorpay API key are required", "error");
    return;
  }
  
  paymentSettings.upiAddress = upiVal;
  paymentSettings.razorpayKey = rzpVal;
  
  localStorage.setItem("godrej_erp_payment_settings", JSON.stringify(paymentSettings));
  showToast("Real-Life Payment settings saved and compiled!", "success");
  togglePaymentSettingsPanel();
}

function announcePaymentSuccess(amount) {
  if (!window.speechSynthesis) {
    console.warn("Speech Synthesis is not supported in this browser");
    return;
  }
  
  // Stop any current speaking
  window.speechSynthesis.cancel();
  
  // Fetch available voices
  const voices = window.speechSynthesis.getVoices();
  const activeLang = document.getElementById("lang-switcher")?.value || "en";
  
  if (activeLang === "hi") {
    const hindiText = `गोदरेज पे पर ${amount} रुपये सफलतापूर्वक प्राप्त हुए!`;
    const hindiUtterance = new SpeechSynthesisUtterance(hindiText);
    const hindiVoice = voices.find(v => v.lang.includes("hi-IN"));
    if (hindiVoice) {
      hindiUtterance.voice = hindiVoice;
    }
    hindiUtterance.rate = 0.95;
    window.speechSynthesis.speak(hindiUtterance);
  } else {
    const text = `Received Rupees ${amount} successfully on Godrej Pay!`;
    const utterance = new SpeechSynthesisUtterance(text);
    const englishVoice = voices.find(v => v.lang.includes("en-IN") || v.lang.includes("en-US") || v.lang.includes("en-GB"));
    if (englishVoice) {
      utterance.voice = englishVoice;
    }
    utterance.rate = 0.95;
    window.speechSynthesis.speak(utterance);
  }
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

  const upiId = paymentSettings.upiAddress;
  const upiUri = `upi://pay?pa=${upiId}&pn=Godrej%20Consumer%20Products&am=${amtVal.toFixed(2)}&cu=INR&tn=ERP-Wallet-Topup`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&color=0d9488&data=${encodeURIComponent(upiUri)}`;

  document.getElementById("razorpay-panel-content").innerHTML = `
    <h4 style="font-size:0.9rem; margin-bottom:8px; color:var(--accent-teal); font-family:var(--font-heading); display:flex; align-items:center; justify-content:center; gap:6px;"><i data-lucide="qr-code"></i> Real Scannable BHIM UPI QR Code</h4>
    <p style="font-size:0.75rem; margin-bottom:12px;">Scan the QR below with BHIM, GPay, PhonePe, or Paytm to initiate a sandbox payment of <strong>₹${amtVal.toLocaleString('en-IN', {minimumFractionDigits:2})}</strong>.</p>
    
    <div style="background: white; padding: 12px; border-radius: 12px; width: fit-content; margin: 0 auto 16px auto; box-shadow: 0 4px 20px rgba(13,148,136,0.3); border: 2px solid var(--accent-teal);">
      <img src="${qrCodeUrl}" alt="Dynamic UPI QR Code" style="width:160px; height:160px; display:block;" />
    </div>

    <div style="font-size: 0.7rem; color: var(--text-muted); margin-bottom: 12px; word-break: break-all; max-width: 280px; margin-left: auto; margin-right: auto;">
      UPI Address: <code>${upiId}</code>
    </div>

    <button class="btn btn-teal btn-sm" style="width:100%; max-width:240px; margin: 0 auto; display:block;" onclick="completeUPISandboxPayment('${shopId}', ${amtVal})">Simulate Sandbox Success Callback</button>
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

  // Retrieve user & shop info
  const shop = appState.shops.find(s => s.id === shopId) || appState.shops[0];
  const user = appState.currentUser || { name: "Distributor Partner", mobile: "9876543210" };

  // If Razorpay SDK is loaded, use it!
  if (typeof Razorpay !== "undefined") {
    showToast("Initializing secure Razorpay gateway checkout...", "info");
    
    const options = {
      key: paymentSettings.razorpayKey,
      amount: Math.round(amtVal * 100), // in paise
      currency: "INR",
      name: "Godrej Consumer Products Corp.",
      description: `ERP Wallet Topup / Repayment for ${shop.name}`,
      image: "https://razorpay.com/favicon.png",
      handler: function (response) {
        showToast("Gateway callback received: Payment Authorized!", "success");
        // Complete the payment inside the ERP system
        completeUPISandboxPayment(shopId, amtVal);
      },
      prefill: {
        name: shop.owner || user.name,
        contact: shop.mobile || user.mobile || "9876543210"
      },
      theme: {
        color: "#0d9488"
      },
      modal: {
        ondismiss: function () {
          showToast("Checkout transaction dismissed by partner.", "warning");
        }
      }
    };
    
    try {
      const rzp = new Razorpay(options);
      rzp.open();
      
      // Update visual sandbox panel to show active session
      document.getElementById("razorpay-panel-content").innerHTML = `
        <h4 style="font-size:0.9rem; margin-bottom:8px; color:var(--primary); font-family:var(--font-heading);"><i data-lucide="shield-check"></i> Razorpay Payment Processing</h4>
        <p style="font-size:0.75rem; margin-bottom:12px;">Active secure session in checkout overlay window.<br>Amount: <strong>₹${amtVal.toFixed(2)}</strong></p>
        <div style="display:flex; justify-content:center; align-items:center; margin:16px 0;">
          <div class="loader-spinner" style="border-top-color:var(--primary); width:24px; height:24px;"></div>
        </div>
        <button class="btn btn-secondary btn-sm" onclick="triggerUPIRazorpayCheckout()">Re-open Checkout Window</button>
      `;
      lucide.createIcons();
    } catch (err) {
      console.error("Razorpay instance initialization failed:", err);
      showToast("Razorpay initialization error. Falling back to Sandbox screen.", "error");
      renderLocalRazorpaySandbox(shopId, amtVal);
    }
  } else {
    // Fallback if script is blocked or offline
    showToast("Razorpay SDK offline. Initiating ERP Sandbox Simulator.", "info");
    renderLocalRazorpaySandbox(shopId, amtVal);
  }
}

// Separate helper for local simulator
function renderLocalRazorpaySandbox(shopId, amtVal) {
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

  // Speak voice soundbox transaction announcement
  announcePaymentSuccess(amount);

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
