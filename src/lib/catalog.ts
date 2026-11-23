export type ProductCategory =
  | 'Nuts & Seeds'
  | 'Dried Fruits'
  | 'Nougat & Sweets'
  | 'Coffee & Cocoa';

export type PackWeightGrams = 100 | 250 | 500 | 1000;

export interface Product {
  id: string;
  slug: string;
  name: string;
  germanName: string;
  category: ProductCategory;
  origin: string;
  roastProfile: string;
  batchTempC: number;
  roastMinutes: number;
  pricePerKg: number;
  tag?: string;
  shortDescription: string;
  description: string;
  tastingNotes: string[];
  ingredients: string;
  image: string;
  imageAlt: string;
  nutritionPer100g: {
    energyKcal: number;
    proteinG: number;
    healthyFatsG: number;
    fiberG: number;
  };
}

export interface JournalArticle {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  publishedAt: string;
  readMinutes: number;
  coverImage: string;
  coverAlt: string;
  excerpt: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
}

export interface InstagramDispatch {
  id: string;
  handle: string;
  caption: string;
  location: string;
  dateLabel: string;
  image: string;
  imageAlt: string;
  productSlug: string;
}

export const CATEGORIES: readonly ('All' | ProductCategory)[] = [
  'All',
  'Nuts & Seeds',
  'Dried Fruits',
  'Nougat & Sweets',
  'Coffee & Cocoa',
] as const;

export const PRODUCTS: Product[] = [
  {
    id: 'sn-almonds-01',
    slug: 'sea-salted-mediterranean-almonds',
    name: 'Sea-Salted Mediterranean Almonds',
    germanName: 'Gesalzene Mandeln',
    category: 'Nuts & Seeds',
    origin: 'Valencia, Spain',
    roastProfile: 'Dry Hearth Roast',
    batchTempC: 158,
    roastMinutes: 19,
    pricePerKg: 17.0,
    tag: 'Roastery Favorite',
    shortDescription:
      'Plump Spanish almonds slow-roasted dry in small batches and finished with flaky Mediterranean sea salt.',
    description:
      'Selected for high natural oil sweetness and uniform kernel size, our Mediterranean almonds are dry-roasted in cast-iron drums without seed oils. While still warm from the hearth, they are tumbled lightly with coarse sea salt crystals so every crunch carries clean roasted almond depth.',
    tastingNotes: ['Toasted marzipan', 'Crisp sea salt', 'Clean nutty finish'],
    ingredients: 'Almonds (98.5%), Mediterranean sea salt (1.5%).',
    image: '/images/product_salted_almonds_1795363214458.jpg',
    imageAlt: 'Bowl of golden roasted Mediterranean almonds topped with flaky sea salt on travertine stone',
    nutritionPer100g: {
      energyKcal: 598,
      proteinG: 21.4,
      healthyFatsG: 52.1,
      fiberG: 11.8,
    },
  },
  {
    id: 'sn-pistachio-02',
    slug: 'antep-hearth-pistachios',
    name: 'Antep Hearth-Roasted Pistachios',
    germanName: 'Geröstete Pistazien',
    category: 'Nuts & Seeds',
    origin: 'Gaziantep Highlands',
    roastProfile: 'High-Crunch Shell Roast',
    batchTempC: 164,
    roastMinutes: 16,
    pricePerKg: 25.0,
    tag: 'Signature Batch',
    shortDescription:
      'Naturally split emerald kernels toasted gently in their shells for vibrant color and rich, savory aroma.',
    description:
      'Harvested at peak ripeness and sun-cured before reaching our Kiel roastery, these Antep pistachios split naturally along the seam. Slow conductive heat locks in their deep emerald hue and concentrated buttery sweetness without scorching the shell.',
    tastingNotes: ['Emerald pistachio', 'Light brine', 'Buttery kernel'],
    ingredients: 'Pistachios in shell (98%), sea salt (2%).',
    image: '/images/product_roasted_pistachios_1795363214680.jpg',
    imageAlt: 'Naturally split emerald green roasted pistachios piled neatly on travertine stone',
    nutritionPer100g: {
      energyKcal: 572,
      proteinG: 20.6,
      healthyFatsG: 45.8,
      fiberG: 10.3,
    },
  },
  {
    id: 'sn-figs-03',
    slug: 'sun-cured-smyrna-figs',
    name: 'Sun-Cured Smyrna Dried Figs',
    germanName: 'Getrocknete Feigen',
    category: 'Dried Fruits',
    origin: 'Aegean Valley',
    roastProfile: 'Sun-Cured Unsulfured',
    batchTempC: 42,
    roastMinutes: 480,
    pricePerKg: 18.0,
    tag: 'New Harvest',
    shortDescription:
      'Supple, caramel-rich mountain figs dried whole on woven reeds with zero added sugar or sulfites.',
    description:
      'Picked once they begin drying naturally on the branch, our Smyrna figs are finished slowly under open Aegean sun. Each fruit holds a jammy amber center with delicate seed crunch—ideal alongside sharp cheeses, espresso, or afternoon nut platters.',
    tastingNotes: ['Wildflower honey', 'Caramelized fig jam', 'Warm spice'],
    ingredients: '100% sun-dried Smyrna figs. No preservatives or added sugars.',
    image: '/images/product_sun_dried_figs_1795363214201.jpg',
    imageAlt: 'Whole and halved golden sun-dried Smyrna figs showing amber ruby seed interior',
    nutritionPer100g: {
      energyKcal: 268,
      proteinG: 3.4,
      healthyFatsG: 0.9,
      fiberG: 9.8,
    },
  },
  {
    id: 'sn-nougat-04',
    slug: 'honey-pistachio-nougat',
    name: 'Hand-Cut Honey Pistachio Nougat',
    germanName: 'Honig Pistazien Nugat',
    category: 'Nougat & Sweets',
    origin: 'Kiel Roastery Kitchen',
    roastProfile: 'Copper Kettle Whipped',
    batchTempC: 118,
    roastMinutes: 45,
    pricePerKg: 28.0,
    tag: 'Small Batch',
    shortDescription:
      'Aerated blossom-honey nougat generously packed with freshly roasted Antep pistachios and blanched almonds.',
    description:
      'Crafted in small copper kettles using whipped egg whites, blossom honey, and nearly 50% whole roasted nuts by weight. Tender yet cleanly structured, every slab is hand-scored and wrapped to preserve its delicate floral snap.',
    tastingNotes: ['Blossom honey', 'Roasted pistachio', 'Toasted almond'],
    ingredients:
      'Roasted pistachios (30%), roasted almonds (20%), blossom honey, cane sugar, egg white, wafer paper.',
    image: '/images/product_artisanal_nougat_1795363214587.jpg',
    imageAlt: 'Stacked hand-cut white honey nougat bars studded with green pistachios and almonds',
    nutritionPer100g: {
      energyKcal: 462,
      proteinG: 11.2,
      healthyFatsG: 23.4,
      fiberG: 3.9,
    },
  },
  {
    id: 'sn-coffee-05',
    slug: 'cardamom-roast-arabic-coffee',
    name: 'Cardamom Roast Arabic Coffee',
    germanName: 'Kardamom Röstkaffee',
    category: 'Coffee & Cocoa',
    origin: 'Cerrado & Guatemala Blend',
    roastProfile: 'Medium-Dark Velvet',
    batchTempC: 204,
    roastMinutes: 14,
    pricePerKg: 24.0,
    shortDescription:
      'Freshly roasted 100% Arabica beans blended with crushed green cardamom pods for fragrant cezve or espresso brewing.',
    description:
      'Roasted weekly right beside our nut drums, this balanced Arabica blend pairs chocolatey body with aromatic green cardamom. Available as whole beans or finely milled for traditional brass-pot preparation alongside salted nuts and nougat.',
    tastingNotes: ['Green cardamom', 'Dark cocoa', 'Roasted hazelnut'],
    ingredients: 'Roasted Arabica coffee beans (94%), freshly ground green cardamom (6%).',
    image: '/images/product_cardamom_coffee_1795363214134.jpg',
    imageAlt: 'Dark roasted coffee beans spilling from a brass scoop beside whole green cardamom pods',
    nutritionPer100g: {
      energyKcal: 12,
      proteinG: 1.1,
      healthyFatsG: 0.4,
      fiberG: 0.8,
    },
  },
  {
    id: 'sn-medley-06',
    slug: 'saber-signature-roastery-medley',
    name: 'Saber Signature Roastery Medley',
    germanName: 'Saber Hausmischung',
    category: 'Nuts & Seeds',
    origin: 'House Curated Selection',
    roastProfile: 'Multi-Stage Hearth Roast',
    batchTempC: 160,
    roastMinutes: 22,
    pricePerKg: 22.0,
    tag: 'Best Seller',
    shortDescription:
      'Our flagship tasting blend uniting salted almonds, Antep pistachios, crisp cashews, and honey-kissed walnuts.',
    description:
      'Because every nut demands a distinct roasting curve, we roast each variety separately before uniting them in our Kiel tasting room. The result is an effortless entertaining platter balancing crisp salinity, buttery cashew richness, and subtle caramelized walnut warmth.',
    tastingNotes: ['Flaky sea salt', 'Buttery cashew', 'Caramelized walnut'],
    ingredients:
      'Pistachios (28%), almonds (27%), cashews (25%), honey-glazed walnuts (20%), sea salt.',
    image: '/images/hero_saber_roastery_1795363214450.jpg',
    imageAlt: 'Freshly roasted pistachios, salted almonds, cashews, and glazed walnuts arranged on slate',
    nutritionPer100g: {
      energyKcal: 604,
      proteinG: 19.2,
      healthyFatsG: 51.6,
      fiberG: 8.4,
    },
  },
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    slug: 'why-we-roast-dry-without-seed-oils',
    title: 'Why We Roast Dry: Temperature Curves Over Seed Oils',
    subtitle: 'How cast-iron thermal mass preserves crispness and natural nut sweetness for weeks.',
    category: 'Roasting Craft',
    publishedAt: 'November 2026',
    readMinutes: 4,
    coverImage: '/images/hero_saber_roastery_1795363214450.jpg',
    coverAlt: 'Hearth-roasted nut varieties lined on natural dark slate beside a copper scoop',
    excerpt:
      'Industrial nut processors flash-fry kernels in refined vegetable oils. Inside our roastery, slow dry convection lets each nut cook in its own natural lipids.',
    sections: [
      {
        heading: 'The Problem with Oil-Fried Nuts',
        paragraphs: [
          'Most supermarket snack nuts are submerged in hot refined sunflower or rapeseed oil for speed and weight gain. That extra coating masks subtle terroir, dulls crunch within days, and leaves an oily film on the palate.',
          'At Saber Nuts, every batch enters a pre-heated dry drum. Almonds, pistachios, and cashews each hold unique moisture and fat percentages, so we tailor drum temperature between 155°C and 166°C rather than rushing a single high-heat cycle.',
        ],
      },
      {
        heading: 'Cooling Tray Discipline',
        paragraphs: [
          'Roasting does not stop when the flame turns off. Kernels retain intense core heat that will over-darken the center if left piled in bins. Immediately after discharge, we spread every 12kg batch across perforated steel cooling trays with ambient airflow.',
          'Sea salt crystals are dusted during the final two minutes of cooling, bonding lightly to warm natural surface oils without clumping.',
        ],
      },
    ],
  },
  {
    slug: 'pairing-roasted-nuts-with-cardamom-coffee',
    title: 'Evening Rituals: Pairing Cardamom Coffee with Salted Almonds & Figs',
    subtitle: 'Balancing salinity, bitter-sweet roast notes, and sun-cured fruit for unhurried gatherings.',
    category: 'Tasting Guide',
    publishedAt: 'November 2026',
    readMinutes: 5,
    coverImage: '/images/product_cardamom_coffee_1795363214134.jpg',
    coverAlt: 'Freshly roasted coffee beans and whole green cardamom pods on stone',
    excerpt:
      'Across Levantine and Mediterranean hospitality traditions, a small tray of roasted nuts and dried figs turns a simple coffee break into an occasion.',
    sections: [
      {
        heading: 'Contrast Is the Secret of a Balanced Tray',
        paragraphs: [
          'Great tasting boards rely on tension between four notes: crisp salt, natural fruit sugar, floral aromatics, and clean bitterness. When serving hot cardamom coffee, pair a savory crunch like our Sea-Salted Mediterranean Almonds directly beside whole Smyrna Dried Figs.',
          'The flaky sea salt sharpens perception of the coffee’s cocoa body, while the fig’s honeyed pulp softens lingering espresso bitterness.',
        ],
      },
      {
        heading: 'Serving Temperature & Freshness',
        paragraphs: [
          'Keep roasted nuts sealed in cool, dark glass jars away from kitchen steam. Before guests arrive, portion only what the table needs into shallow stoneware bowls—letting aromas bloom at room temperature for ten minutes.',
        ],
      },
    ],
  },
  {
    slug: 'from-antep-orchards-to-kiel-roastery',
    title: 'Single-Origin Sourcing: Inside Our Antep & Valencia Harvest Standards',
    subtitle: 'What shell split ratios, moisture testing, and harvest timing reveal before a single kernel is roasted.',
    category: 'Sourcing & Origins',
    publishedAt: 'October 2026',
    readMinutes: 3,
    coverImage: '/images/product_roasted_pistachios_1795363214680.jpg',
    coverAlt: 'Close-up of naturally split emerald Antep pistachios on travertine',
    excerpt:
      'Roasting can never rescue stale raw stock. We inspect moisture percentage, natural shell split, and kernel color on every incoming harvest lot.',
    sections: [
      {
        heading: 'Why Emerald Color Signals Early Harvest',
        paragraphs: [
          'Late-harvest pistachios turn pale yellow and lose their intense resinous aroma. Our Antep lots are picked just as the outer hull blushes rose-gold, locking chlorophyll vibrancy deep inside the kernel.',
          'Each sack arriving at Elisabethstraße 70 in Kiel is tested for 5%–6% target moisture so the shell snaps crisply rather than chewing tough.',
        ],
      },
    ],
  },
];

export const INSTAGRAM_DISPATCHES: InstagramDispatch[] = [
  {
    id: 'ig-01',
    handle: '@sabernuts',
    caption: 'Fresh 12kg batch of Mediterranean almonds off the cooling tray—sea salt dusted while still warm.',
    location: 'Kiel Roastery',
    dateLabel: 'Fresh Batch',
    image: '/images/product_salted_almonds_1795363214458.jpg',
    imageAlt: 'Freshly salted roasted almonds in a ceramic bowl',
    productSlug: 'sea-salted-mediterranean-almonds',
  },
  {
    id: 'ig-02',
    handle: '@sabernuts',
    caption: 'Natural split emerald pistachios from Gaziantep—zero bleach, slow hearth roast.',
    location: 'Elisabethstraße 70',
    dateLabel: 'Harvest Lot',
    image: '/images/product_roasted_pistachios_1795363214680.jpg',
    imageAlt: 'Pile of naturally split roasted green pistachios',
    productSlug: 'antep-hearth-pistachios',
  },
  {
    id: 'ig-03',
    handle: '@sabernuts',
    caption: 'Copper-kettle honey nougat cut to order with whole roasted pistachios and toasted almonds.',
    location: 'Confectionery Table',
    dateLabel: 'Small Batch',
    image: '/images/product_artisanal_nougat_1795363214587.jpg',
    imageAlt: 'Stacked pistachio and almond honey nougat bars',
    productSlug: 'honey-pistachio-nougat',
  },
  {
    id: 'ig-04',
    handle: '@sabernuts',
    caption: 'Crushed green cardamom meets velvety Arabica beans—weekly roast ready for brewing.',
    location: 'Roast Room',
    dateLabel: 'Weekly Roast',
    image: '/images/product_cardamom_coffee_1795363214134.jpg',
    imageAlt: 'Roasted coffee beans with brass scoop and cardamom pods',
    productSlug: 'cardamom-roast-arabic-coffee',
  },
];
