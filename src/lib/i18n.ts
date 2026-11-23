export type Locale = 'en' | 'de' | 'fr' | 'ar' | 'sv';

export const LOCALES: readonly { code: Locale; label: string; nativeLabel: string; dir: 'ltr' | 'rtl' }[] = [
  { code: 'en', label: 'English', nativeLabel: 'English', dir: 'ltr' },
  { code: 'de', label: 'German', nativeLabel: 'Deutsch', dir: 'ltr' },
  { code: 'fr', label: 'French', nativeLabel: 'Français', dir: 'ltr' },
  { code: 'sv', label: 'Swedish', nativeLabel: 'Svenska', dir: 'ltr' },
  { code: 'ar', label: 'Arabic', nativeLabel: 'العربية', dir: 'rtl' },
] as const;

export function isValidLocale(value: string | null | undefined): value is Locale {
  return value === 'en' || value === 'de' || value === 'fr' || value === 'ar' || value === 'sv';
}

export function getLocaleDirection(locale: Locale): 'ltr' | 'rtl' {
  return locale === 'ar' ? 'rtl' : 'ltr';
}

export interface ProductTranslation {
  name: string;
  origin: string;
  roastProfile: string;
  shortDescription: string;
  description: string;
  tastingNotes: string[];
  ingredients: string;
}

export interface ArticleTranslation {
  title: string;
  subtitle: string;
  category: string;
  publishedAt: string;
  excerpt: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
}

export interface DispatchTranslation {
  caption: string;
  location: string;
  dateLabel: string;
}

export interface Dictionary {
  brandName: string;
  nav: {
    collection: string;
    craft: string;
    journal: string;
    gallery: string;
    bag: string;
    menuOpen: string;
    menuClose: string;
    languageLabel: string;
    themeToLight: string;
    themeToDark: string;
    themeLightLabel: string;
    themeDarkLabel: string;
  };
  hero: {
    kicker: string;
    headline: string;
    body: string;
    ctaPrimary: string;
    followPrefix: string;
    captionKicker: string;
    captionTitle: string;
    proof: {
      title: string;
      sub: string;
    }[];
  };
  catalog: {
    kicker: string;
    title: string;
    searchPlaceholder: string;
    searchLabel: string;
    clearSearch: string;
    showingPrefix: string;
    showingOf: string;
    batchesSuffix: string;
    emptyTitle: string;
    emptyBody: string;
    resetFilters: string;
    basePerKg: string;
    addToBag: string;
    categories: {
      All: string;
      'Nuts & Seeds': string;
      'Dried Fruits': string;
      'Nougat & Sweets': string;
      'Coffee & Cocoa': string;
    };
  };
  craft: {
    kicker: string;
    title: string;
    steps: {
      number: string;
      title: string;
      body: string;
      metric: string;
    }[];
    journalTitle: string;
    allGuides: string;
    minRead: string;
    tip: string;
  };
  gallery: {
    kicker: string;
    title: string;
    followCta: string;
  };
  pdp: {
    backToCollection: string;
    roastTemp: string;
    cycleTime: string;
    proteinPer100: string;
    packWeight: string;
    bulkSavings: string;
    addedToBag: string;
    addPrefix: string;
    toBagSuffix: string;
    tastingNotes: string;
    ingredientsMethod: string;
    nutrition100g: string;
    pairTitle: string;
    fromPrefix: string;
  };
  journalPage: {
    kicker: string;
    title: string;
    subtitle: string;
    readGuide: string;
    backAllGuides: string;
    standardText: string;
    largeText: string;
  };
  bag: {
    titleBag: string;
    titleCheckout: string;
    titleConfirmed: string;
    packsSelectedSingular: string;
    packsSelectedPlural: string;
    freeShippingUnlocked: string;
    freeShippingAddPrefix: string;
    freeShippingAddSuffix: string;
    emptyTitle: string;
    emptyBody: string;
    browseCollection: string;
    subtotal: string;
    shipping: string;
    complimentary: string;
    total: string;
    proceedCheckout: string;
    back: string;
    confirmOrder: string;
    checkoutNote: string;
    fullName: string;
    email: string;
    phone: string;
    address: string;
    postalCode: string;
    errName: string;
    errEmail: string;
    errPhone: string;
    errAddress: string;
    errPostal: string;
    confirmedHeadingPrefix: string;
    confirmedHeadingSuffix: string;
    confirmedBodyPrefix: string;
    confirmedBodyMid: string;
    confirmationEmail: string;
    paymentMethod: string;
    paymentMethodValue: string;
    orderTotal: string;
    continueBrowsing: string;
  };
  footer: {
    blurb: string;
    roasteryHeading: string;
    connectHeading: string;
    copyright: string;
    tagline: string;
  };
  products: Record<string, ProductTranslation>;
  articles: Record<string, ArticleTranslation>;
  dispatches: Record<string, DispatchTranslation>;
}

const EN: Dictionary = {
  brandName: 'Saber Nuts',
  nav: {
    collection: 'Collection',
    craft: 'Craft',
    journal: 'Journal',
    gallery: 'Gallery',
    bag: 'Bag',
    menuOpen: 'Open navigation menu',
    menuClose: 'Close navigation menu',
    languageLabel: 'Language',
    themeToLight: 'Switch to light earthy theme',
    themeToDark: 'Switch to dark walnut theme',
    themeLightLabel: 'Light',
    themeDarkLabel: 'Dark',
  },
  hero: {
    kicker: 'Kiel Hearth Roastery · Small-Batch Craft',
    headline: 'Hearth-roasted nuts, cured fruits & warm nougat.',
    body: 'Dry-roasted weekly in small cast-iron drums without refined seed oils. Crisp Mediterranean almonds, naturally split Antep pistachios, Smyrna figs, and cardamom coffee shipped fresh from our counter.',
    ctaPrimary: 'Explore Collection',
    followPrefix: 'Follow fresh batch releases on',
    captionKicker: 'Daily Roastery Selection · Packed to Order',
    captionTitle: 'Valencia Almonds, Antep Pistachios & Copper-Kettle Nougat',
    proof: [
      { title: '100% Dry-Roasted', sub: 'Zero seed oils or artificial gloss' },
      { title: '12 kg Batch Drums', sub: 'Roasted weekly in Kiel' },
      { title: '100 g – 1 kg Packs', sub: 'Up to 10% bulk pack savings' },
      { title: 'Free Over €45.00', sub: 'Sealed for peak crunch on arrival' },
    ],
  },
  catalog: {
    kicker: 'Fresh Roastery Selection',
    title: 'Small-batch nuts, cured fruits & confections',
    searchPlaceholder: 'Search almonds, figs, nougat...',
    searchLabel: 'Search Saber Nuts catalog',
    clearSearch: 'Clear search query',
    showingPrefix: 'Showing',
    showingOf: 'of',
    batchesSuffix: 'batches',
    emptyTitle: 'No matching batches found',
    emptyBody: 'Try clearing your search filter or browsing all roastery categories.',
    resetFilters: 'Reset Filters',
    basePerKg: '/ kg base',
    addToBag: 'Add to Bag',
    categories: {
      All: 'All',
      'Nuts & Seeds': 'Nuts & Seeds',
      'Dried Fruits': 'Dried Fruits',
      'Nougat & Sweets': 'Nougat & Sweets',
      'Coffee & Cocoa': 'Coffee & Cocoa',
    },
  },
  craft: {
    kicker: 'How Saber Nuts Roasts',
    title: 'Precision heat, zero shortcuts.',
    steps: [
      {
        number: '01.',
        title: 'Single-Origin Moisture Inspection',
        body: 'Every harvest sack from Valencia, Gaziantep, and the Aegean valley is screened for natural split ratio and 5%–6% moisture before entering the drum.',
        metric: '5.5% target moisture',
      },
      {
        number: '02.',
        title: 'Cast-Iron Dry Hearth Roasting',
        body: 'Instead of industrial oil frying, we roast in small 12 kg cast-iron batches between 158°C and 164°C so kernels toast in their own natural lipids.',
        metric: '0% refined seed oils',
      },
      {
        number: '03.',
        title: 'Perforated Airflow Cooling & Sea Salt',
        body: 'Warm kernels rest across wide steel cooling trays where flaky Mediterranean sea salt bonds lightly without clumping, preserving snap for weeks.',
        metric: 'Packed weekly in Kiel',
      },
    ],
    journalTitle: 'Roastery Journal',
    allGuides: 'All Guides',
    minRead: 'min read',
    tip: 'Switch between Light and Dark themes or choose English, Deutsch, Français, Svenska, and العربية anytime in the header.',
  },
  gallery: {
    kicker: 'Direct from the Counter',
    title: 'Roastery dispatches from @sabernuts',
    followCta: 'Follow @sabernuts on Instagram',
  },
  pdp: {
    backToCollection: 'Back to Collection',
    roastTemp: 'Roast Temp',
    cycleTime: 'Cycle Time',
    proteinPer100: 'Protein / 100g',
    packWeight: 'Pack Weight',
    bulkSavings: 'Save 5% at 500 g · 10% at 1 kg',
    addedToBag: 'Added to Bag',
    addPrefix: 'Add',
    toBagSuffix: 'to Bag',
    tastingNotes: 'Tasting Notes',
    ingredientsMethod: 'Ingredients & Roasting Method',
    nutrition100g: 'Nutrition per 100 g',
    pairTitle: 'Pair with other roastery batches',
    fromPrefix: 'From',
  },
  journalPage: {
    kicker: 'Saber Nuts Journal',
    title: 'Roastery notes, harvest standards & tasting guides',
    subtitle: 'Explore how we select origins, roast without seed oils, and pair nuts with cardamom coffee.',
    readGuide: 'Read Guide',
    backAllGuides: 'All Reading Guides',
    standardText: 'Standard Text',
    largeText: 'Large Text',
  },
  bag: {
    titleBag: 'Your Roastery Bag',
    titleCheckout: 'Delivery Details',
    titleConfirmed: 'Order Confirmed',
    packsSelectedSingular: 'pack selected',
    packsSelectedPlural: 'packs selected',
    freeShippingUnlocked: 'Complimentary courier shipping unlocked',
    freeShippingAddPrefix: 'Add',
    freeShippingAddSuffix: 'more for complimentary courier shipping',
    emptyTitle: 'Your roastery bag is empty',
    emptyBody: 'Select a pack size from our freshly roasted nuts, dried figs, nougat, or cardamom coffee to get started.',
    browseCollection: 'Browse Collection',
    subtotal: 'Subtotal',
    shipping: 'Courier Shipping',
    complimentary: 'Complimentary',
    total: 'Total',
    proceedCheckout: 'Proceed to Delivery Details',
    back: 'Back',
    confirmOrder: 'Confirm Order',
    checkoutNote: 'Pay on delivery or by invoice upon dispatch.',
    fullName: 'Full Name',
    email: 'Email Address',
    phone: 'Phone Number',
    address: 'Street & City',
    postalCode: 'Postal Code',
    errName: 'Please enter your full name.',
    errEmail: 'Please enter a valid email address.',
    errPhone: 'Please enter a reachable phone number.',
    errAddress: 'Please enter your street address and city.',
    errPostal: 'Please enter a valid postal code.',
    confirmedHeadingPrefix: 'Order #',
    confirmedHeadingSuffix: 'Confirmed — Preparing Shipment',
    confirmedBodyPrefix: 'Thank you,',
    confirmedBodyMid: 'Your freshly packed batch will dispatch from our Kiel roastery to',
    confirmationEmail: 'Confirmation email',
    paymentMethod: 'Payment method',
    paymentMethodValue: 'Pay on Delivery / Invoice',
    orderTotal: 'Order Total',
    continueBrowsing: 'Continue Browsing',
  },
  footer: {
    blurb: 'Small-batch hearth-roasted nuts, sun-cured Mediterranean figs, hand-cut pistachio nougat, and cardamom coffee crafted in Kiel.',
    roasteryHeading: 'Roastery',
    connectHeading: 'Connect & Store',
    copyright: '© 2026 Saber Nuts · Artisanal Roastery & Delicatessen',
    tagline: 'Dry hearth-roasted weekly · No refined seed oils',
  },
  products: {
    'sn-almonds-01': {
      name: 'Sea-Salted Mediterranean Almonds',
      origin: 'Valencia, Spain',
      roastProfile: 'Dry Hearth Roast',
      shortDescription: 'Plump Spanish almonds slow-roasted dry in small batches and finished with flaky Mediterranean sea salt.',
      description: 'Selected for high natural oil sweetness and uniform kernel size, our Mediterranean almonds are dry-roasted in cast-iron drums without seed oils. While still warm from the hearth, they are tumbled lightly with coarse sea salt crystals.',
      tastingNotes: ['Toasted marzipan', 'Crisp sea salt', 'Clean nutty finish'],
      ingredients: 'Almonds (98.5%), Mediterranean sea salt (1.5%).',
    },
    'sn-pistachio-02': {
      name: 'Antep Hearth-Roasted Pistachios',
      origin: 'Gaziantep Highlands',
      roastProfile: 'High-Crunch Shell Roast',
      shortDescription: 'Naturally split emerald kernels toasted gently in their shells for vibrant color and rich, savory aroma.',
      description: 'Harvested at peak ripeness and sun-cured before reaching our Kiel roastery, these Antep pistachios split naturally along the seam. Slow conductive heat locks in their deep emerald hue and buttery sweetness.',
      tastingNotes: ['Emerald pistachio', 'Light brine', 'Buttery kernel'],
      ingredients: 'Pistachios in shell (98%), sea salt (2%).',
    },
    'sn-figs-03': {
      name: 'Sun-Cured Smyrna Dried Figs',
      origin: 'Aegean Valley',
      roastProfile: 'Sun-Cured Unsulfured',
      shortDescription: 'Supple, caramel-rich mountain figs dried whole on woven reeds with zero added sugar or sulfites.',
      description: 'Picked once they begin drying naturally on the branch, our Smyrna figs are finished slowly under open Aegean sun. Each fruit holds a jammy amber center with delicate seed crunch.',
      tastingNotes: ['Wildflower honey', 'Caramelized fig jam', 'Warm spice'],
      ingredients: '100% sun-dried Smyrna figs. No preservatives or added sugars.',
    },
    'sn-nougat-04': {
      name: 'Hand-Cut Honey Pistachio Nougat',
      origin: 'Kiel Roastery Kitchen',
      roastProfile: 'Copper Kettle Whipped',
      shortDescription: 'Aerated blossom-honey nougat generously packed with freshly roasted Antep pistachios and blanched almonds.',
      description: 'Crafted in small copper kettles using whipped egg whites, blossom honey, and nearly 50% whole roasted nuts by weight. Tender yet cleanly structured, every slab is hand-scored and wrapped.',
      tastingNotes: ['Blossom honey', 'Roasted pistachio', 'Toasted almond'],
      ingredients: 'Roasted pistachios (30%), roasted almonds (20%), blossom honey, cane sugar, egg white, wafer paper.',
    },
    'sn-coffee-05': {
      name: 'Cardamom Roast Arabic Coffee',
      origin: 'Cerrado & Guatemala Blend',
      roastProfile: 'Medium-Dark Velvet',
      shortDescription: 'Freshly roasted 100% Arabica beans blended with crushed green cardamom pods for fragrant cezve or espresso brewing.',
      description: 'Roasted weekly right beside our nut drums, this balanced Arabica blend pairs chocolatey body with aromatic green cardamom. Ideal for traditional brass-pot brewing alongside salted nuts.',
      tastingNotes: ['Green cardamom', 'Dark cocoa', 'Roasted hazelnut'],
      ingredients: 'Roasted Arabica coffee beans (94%), freshly ground green cardamom (6%).',
    },
    'sn-medley-06': {
      name: 'Saber Signature Roastery Medley',
      origin: 'House Curated Selection',
      roastProfile: 'Multi-Stage Hearth Roast',
      shortDescription: 'Our flagship tasting blend uniting salted almonds, Antep pistachios, crisp cashews, and honey-kissed walnuts.',
      description: 'Because every nut demands a distinct roasting curve, we roast each variety separately before uniting them in our Kiel tasting room for an effortless entertaining platter.',
      tastingNotes: ['Flaky sea salt', 'Buttery cashew', 'Caramelized walnut'],
      ingredients: 'Pistachios (28%), almonds (27%), cashews (25%), honey-glazed walnuts (20%), sea salt.',
    },
  },
  articles: {
    'why-we-roast-dry-without-seed-oils': {
      title: 'Why We Roast Dry: Temperature Curves Over Seed Oils',
      subtitle: 'How cast-iron thermal mass preserves crispness and natural nut sweetness for weeks.',
      category: 'Roasting Craft',
      publishedAt: 'November 2026',
      excerpt: 'Industrial nut processors flash-fry kernels in refined vegetable oils. Inside our roastery, slow dry convection lets each nut cook in its own natural lipids.',
      sections: [
        {
          heading: 'The Problem with Oil-Fried Nuts',
          paragraphs: [
            'Most supermarket snack nuts are submerged in hot refined sunflower or rapeseed oil for speed and weight gain. That extra coating masks subtle terroir and dulls crunch within days.',
            'At Saber Nuts, every batch enters a pre-heated dry drum between 155°C and 166°C rather than rushing a single high-heat cycle.',
          ],
        },
        {
          heading: 'Cooling Tray Discipline',
          paragraphs: [
            'Immediately after discharge, we spread every 12kg batch across perforated steel cooling trays with ambient airflow so kernels stay crisp and bright.',
          ],
        },
      ],
    },
    'pairing-roasted-nuts-with-cardamom-coffee': {
      title: 'Evening Rituals: Pairing Cardamom Coffee with Salted Almonds & Figs',
      subtitle: 'Balancing salinity, bitter-sweet roast notes, and sun-cured fruit for unhurried gatherings.',
      category: 'Tasting Guide',
      publishedAt: 'November 2026',
      excerpt: 'Across Levantine and Mediterranean hospitality traditions, a small tray of roasted nuts and dried figs turns a simple coffee break into an occasion.',
      sections: [
        {
          heading: 'Contrast Is the Secret of a Balanced Tray',
          paragraphs: [
            'Great tasting boards rely on tension between crisp salt, natural fruit sugar, floral cardamom aromatics, and clean espresso bitterness.',
          ],
        },
      ],
    },
    'from-antep-orchards-to-kiel-roastery': {
      title: 'Single-Origin Sourcing: Inside Our Antep & Valencia Harvest Standards',
      subtitle: 'What shell split ratios, moisture testing, and harvest timing reveal before a single kernel is roasted.',
      category: 'Sourcing & Origins',
      publishedAt: 'October 2026',
      excerpt: 'Roasting can never rescue stale raw stock. We inspect moisture percentage, natural shell split, and kernel color on every incoming harvest lot.',
      sections: [
        {
          heading: 'Why Emerald Color Signals Early Harvest',
          paragraphs: [
            'Our Antep lots are picked just as the outer hull blushes rose-gold, locking chlorophyll vibrancy deep inside the kernel and maintaining 5%–6% target moisture.',
          ],
        },
      ],
    },
  },
  dispatches: {
    'ig-01': {
      caption: 'Fresh 12kg batch of Mediterranean almonds off the cooling tray—sea salt dusted while still warm.',
      location: 'Kiel Roastery',
      dateLabel: 'Fresh Batch',
    },
    'ig-02': {
      caption: 'Natural split emerald pistachios from Gaziantep—zero bleach, slow hearth roast.',
      location: 'Elisabethstraße 70',
      dateLabel: 'Harvest Lot',
    },
    'ig-03': {
      caption: 'Copper-kettle honey nougat cut to order with whole roasted pistachios and toasted almonds.',
      location: 'Confectionery Table',
      dateLabel: 'Small Batch',
    },
    'ig-04': {
      caption: 'Crushed green cardamom meets velvety Arabica beans—weekly roast ready for brewing.',
      location: 'Roast Room',
      dateLabel: 'Weekly Roast',
    },
  },
};

const DE: Dictionary = {
  brandName: 'Saber Nuts',
  nav: {
    collection: 'Sortiment',
    craft: 'Röstkunst',
    journal: 'Journal',
    gallery: 'Galerie',
    bag: 'Warenkorb',
    menuOpen: 'Navigationsmenü öffnen',
    menuClose: 'Navigationsmenü schließen',
    languageLabel: 'Sprache',
    themeToLight: 'Zum hellen Design wechseln',
    themeToDark: 'Zum dunklen Walnuss-Design wechseln',
    themeLightLabel: 'Hell',
    themeDarkLabel: 'Dunkel',
  },
  hero: {
    kicker: 'Kieler Rösterei · Handwerk in kleinen Chargen',
    headline: 'Trocken geröstete Nüsse, edle Früchte & feiner Nugat.',
    body: 'Wöchentlich schonend in gusseisernen Trommeln ohne Industrieöle geröstet. Knackige Mittelmeermandeln, naturbelassene Antep-Pistazien, Smyrna-Feigen und Kardamom-Kaffee frisch aus Kiel.',
    ctaPrimary: 'Sortiment entdecken',
    followPrefix: 'Frische Röstchargen auf',
    captionKicker: 'Tägliche Auswahl · Frisch abgefüllt',
    captionTitle: 'Valencia-Mandeln, Antep-Pistazien & Honig-Nugat',
    proof: [
      { title: '100% Trocken geröstet', sub: 'Ohne Pflanzenfett oder Ölfilm' },
      { title: '12-kg-Trommelröstung', sub: 'Wöchentlich frisch in Kiel' },
      { title: '100 g – 1 kg Packungen', sub: 'Bis zu 10% Vorratsrabatt' },
      { title: 'Frei ab €45,00', sub: 'Aromaversiegelt verpackt' },
    ],
  },
  catalog: {
    kicker: 'Frische Rösterei-Auswahl',
    title: 'Geröstete Nüsse, Trockenfrüchte & Spezialitäten',
    searchPlaceholder: 'Mandeln, Feigen, Nugat suchen...',
    searchLabel: 'Saber Nuts Katalog durchsuchen',
    clearSearch: 'Suchfeld leeren',
    showingPrefix: 'Zeige',
    showingOf: 'von',
    batchesSuffix: 'Sorten',
    emptyTitle: 'Keine passenden Sorten gefunden',
    emptyBody: 'Bitte Suchbegriff zurücksetzen oder alle Kategorien anzeigen.',
    resetFilters: 'Filter zurücksetzen',
    basePerKg: '/ kg Basis',
    addToBag: 'In den Korb',
    categories: {
      All: 'Alle',
      'Nuts & Seeds': 'Nüsse & Samen',
      'Dried Fruits': 'Trockenfrüchte',
      'Nougat & Sweets': 'Nugat & Süßes',
      'Coffee & Cocoa': 'Kaffee & Kakao',
    },
  },
  craft: {
    kicker: 'Unsere Röstmethode',
    title: 'Präzise Hitze, kompromisslose Frische.',
    steps: [
      {
        number: '01.',
        title: 'Sortenreine Rohwaren-Prüfung',
        body: 'Jeder Erntesack aus Valencia, Gaziantep und der Ägäis wird vor dem Rösten auf natürliche Öffnungsrate und 5%–6% Restfeuchte geprüft.',
        metric: '5,5% Ziel-Feuchte',
      },
      {
        number: '02.',
        title: 'Trockene Gusseisen-Röstung',
        body: 'Statt industriellem Frittieren rösten wir 12-kg-Chargen trocken zwischen 158°C und 164°C – im eigenen natürlichen Nussöl.',
        metric: '0% Fremdöle',
      },
      {
        number: '03.',
        title: 'Luftkühlung & Meersalz-Finish',
        body: 'Auf gelochten Kühlsieben bindet feines Meersalz direkt an die noch warmen Kerne und bewahrt den vollen Biss über Wochen.',
        metric: 'Wöchentlich in Kiel',
      },
    ],
    journalTitle: 'Rösterei-Journal',
    allGuides: 'Alle Beiträge',
    minRead: 'Min. Lesezeit',
    tip: 'Wechseln Sie jederzeit in der Kopfzeile zwischen hellem und dunklem Design sowie Deutsch, Englisch, Französisch, Schwedisch und Arabisch.',
  },
  gallery: {
    kicker: 'Direkt aus der Rösterei',
    title: 'Einblicke von @sabernuts',
    followCta: '@sabernuts auf Instagram folgen',
  },
  pdp: {
    backToCollection: 'Zurück zum Sortiment',
    roastTemp: 'Rösttemperatur',
    cycleTime: 'Röstzeit',
    proteinPer100: 'Protein / 100g',
    packWeight: 'Packungsgröße',
    bulkSavings: '5% Rabatt ab 500 g · 10% ab 1 kg',
    addedToBag: 'Hinzugefügt',
    addPrefix: 'Hinzufügen:',
    toBagSuffix: 'in den Korb',
    tastingNotes: 'Geschmacksprofil',
    ingredientsMethod: 'Zutaten & Röstverfahren',
    nutrition100g: 'Nährwerte je 100 g',
    pairTitle: 'Passend dazu aus der Rösterei',
    fromPrefix: 'Ab',
  },
  journalPage: {
    kicker: 'Saber Nuts Journal',
    title: 'Röstberichte, Herkunft & Genussideen',
    subtitle: 'Erfahren Sie, wie wir Rohware auswählen, ohne Öl rösten und Nüsse mit Kardamom-Kaffee kombinieren.',
    readGuide: 'Beitrag lesen',
    backAllGuides: 'Alle Beiträge',
    standardText: 'Standard-Schrift',
    largeText: 'Große Schrift',
  },
  bag: {
    titleBag: 'Ihr Warenkorb',
    titleCheckout: 'Lieferadresse',
    titleConfirmed: 'Bestellung bestätigt',
    packsSelectedSingular: 'Packung ausgewählt',
    packsSelectedPlural: 'Packungen ausgewählt',
    freeShippingUnlocked: 'Kostenloser Versand freigeschaltet',
    freeShippingAddPrefix: 'Noch',
    freeShippingAddSuffix: 'für kostenlosen Versand hinzufügen',
    emptyTitle: 'Ihr Warenkorb ist leer',
    emptyBody: 'Wählen Sie eine Packungsgröße unserer gerösteten Nüsse, Feigen, Nugat oder Kardamom-Kaffee.',
    browseCollection: 'Sortiment ansehen',
    subtotal: 'Zwischensumme',
    shipping: 'Versandkosten',
    complimentary: 'Kostenlos',
    total: 'Gesamt',
    proceedCheckout: 'Zur Lieferadresse',
    back: 'Zurück',
    confirmOrder: 'Bestellung absenden',
    checkoutNote: 'Zahlung per Rechnung oder bei Lieferung.',
    fullName: 'Vollständiger Name',
    email: 'E-Mail-Adresse',
    phone: 'Telefonnummer',
    address: 'Straße & Stadt',
    postalCode: 'Postleitzahl',
    errName: 'Bitte geben Sie Ihren vollständigen Namen ein.',
    errEmail: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
    errPhone: 'Bitte geben Sie eine erreichbare Telefonnummer ein.',
    errAddress: 'Bitte geben Sie Straße und Stadt ein.',
    errPostal: 'Bitte geben Sie eine gültige Postleitzahl ein.',
    confirmedHeadingPrefix: 'Bestellung #',
    confirmedHeadingSuffix: 'Bestätigt — Wird vorbereitet',
    confirmedBodyPrefix: 'Vielen Dank,',
    confirmedBodyMid: 'Ihre frisch verpackte Charge geht aus unserer Kieler Rösterei an',
    confirmationEmail: 'Bestätigung an',
    paymentMethod: 'Zahlungsart',
    paymentMethodValue: 'Rechnung / Bar bei Lieferung',
    orderTotal: 'Bestellsumme',
    continueBrowsing: 'Weiter einkaufen',
  },
  footer: {
    blurb: 'Handgeröstete Nüsse, sonnengetrocknete Feigen, Honig-Pistazien-Nugat und Kardamom-Kaffee aus unserer Kieler Rösterei.',
    roasteryHeading: 'Rösterei',
    connectHeading: 'Kontakt & Shop',
    copyright: '© 2026 Saber Nuts · Feinkost & Nussrösterei',
    tagline: 'Wöchentlich trocken geröstet · Ohne Pflanzenöle',
  },
  products: {
    'sn-almonds-01': {
      name: 'Gesalzene Mittelmeermandeln',
      origin: 'Valencia, Spanien',
      roastProfile: 'Trockene Trommelröstung',
      shortDescription: 'Prall-süße spanische Mandeln langsam trocken geröstet und mit Meersalzflocken veredelt.',
      description: 'Ausgewählt wegen ihres hohen natürlichen Ölgehalts und gleichmäßiger Größe, werden unsere Mandeln fettfrei im Gusseisen geröstet und warm mit Meersalz gewendet.',
      tastingNotes: ['Geröstetes Marzipan', 'Feines Meersalz', 'Reiner Biss'],
      ingredients: 'Mandeln (98,5%), Meersalz (1,5%).',
    },
    'sn-pistachio-02': {
      name: 'Antep-Pistazien aus der Rösttrommel',
      origin: 'Hochland Gaziantep',
      roastProfile: 'Knackige Schalenröstung',
      shortDescription: 'Natürlich geöffnete smaragdgrüne Kerne, schonend in der Schale geröstet für volles Aroma.',
      description: 'Sonnengereift geerntet und in Kiel langsam geröstet: Die langsame Wärmeführung bewahrt das intensive Grün und den butterweichen Geschmack.',
      tastingNotes: ['Smaragd-Pistazie', 'Dezente Salznote', 'Nussiger Kern'],
      ingredients: 'Pistazien in Schale (98%), Meersalz (2%).',
    },
    'sn-figs-03': {
      name: 'Sonnengetrocknete Smyrna-Feigen',
      origin: 'Ägäis-Tal',
      roastProfile: 'Ungeschwefelt sonnengetrocknet',
      shortDescription: 'Saftige, karamellig-süße Bergfeigen ohne Zuckerzusatz und ohne Schwefelung.',
      description: 'Direkt am Baum vorgetrocknet und unter ägäischer Sonne vollendet – mit honigsüßem Inneren und feinem Kernbiss.',
      tastingNotes: ['Wildblütenhonig', 'Feigenkonfitüre', 'Warme Würze'],
      ingredients: '100% sonnengetrocknete Smyrna-Feigen.',
    },
    'sn-nougat-04': {
      name: 'Handgeschnittener Honig-Pistazien-Nugat',
      origin: 'Kieler Manufaktur',
      roastProfile: 'Im Kupferkessel geschlagen',
      shortDescription: 'Luftiger Blütenhonig-Nugat reichlich gespickt mit frisch gerösteten Pistazien und Mandeln.',
      description: 'Mit fast 50% Nussanteil aus eigener Röstung im Kupferkessel geschlagen und von Hand in Stücke geschnitten.',
      tastingNotes: ['Blütenhonig', 'Geröstete Pistazie', 'Mandel'],
      ingredients: 'Geröstete Pistazien (30%), Mandeln (20%), Blütenhonig, Rohrzucker, Eiweiß, Oblate.',
    },
    'sn-coffee-05': {
      name: 'Kardamom-Röstkaffee nach arabischer Art',
      origin: 'Cerrado & Guatemala',
      roastProfile: 'Mittel-dunkle Samtröstung',
      shortDescription: 'Frisch gerösteter Arabica-Kaffee verfeinert mit grünem Kardamom für Mokkakännchen oder Espresso.',
      description: 'Wöchentlich neben unseren Nusstrommeln geröstet – schokoladiger Körper trifft auf duftenden grünen Kardamom.',
      tastingNotes: ['Grüner Kardamom', 'Zartbitterschokolade', 'Haselnuss'],
      ingredients: 'Gerösteter Arabica-Kaffee (94%), gemahlener grüner Kardamom (6%).',
    },
    'sn-medley-06': {
      name: 'Saber Hausmischung Deluxe',
      origin: 'Rösterei-Auswahl',
      roastProfile: 'Separat geröstete Komposition',
      shortDescription: 'Unsere Signatur-Mischung aus gesalzenen Mandeln, Antep-Pistazien, Cashews und Honig-Walnüssen.',
      description: 'Jede Nusssorte wird nach eigener Temperaturkurve geröstet und erst im Verkostungsraum vereint.',
      tastingNotes: ['Meersalzflocken', 'Butter-Cashew', 'Karamell-Walnuss'],
      ingredients: 'Pistazien (28%), Mandeln (27%), Cashews (25%), Honig-Walnüsse (20%), Meersalz.',
    },
  },
  articles: {
    'why-we-roast-dry-without-seed-oils': {
      title: 'Warum wir trocken rösten: Temperaturkurven statt Industrieöl',
      subtitle: 'Wie Gusseisen-Wärme den natürlichen Biss und das Aroma wochenlang bewahrt.',
      category: 'Rösthandwerk',
      publishedAt: 'November 2026',
      excerpt: 'Industrielle Hersteller frittieren Nüsse in Pflanzenöl. Wir setzen auf langsame trockene Konvektion im eigenen Nussöl.',
      sections: [
        {
          heading: 'Der Nachteil ölfrittierter Nüsse',
          paragraphs: [
            'Supermarktnüsse werden oft in raffiniertem Sonnenblumenöl erhitzt. Das überdeckt die Herkunft und macht Kerne schnell weich.',
            'Bei Saber Nuts durchläuft jede Sorte eine eigene Kurve zwischen 155°C und 166°C.',
          ],
        },
        {
          heading: 'Schnelle Luftkühlung',
          paragraphs: [
            'Nach dem Rösten verteilen wir jede Charge auf breiten Kühlsieben, damit das Meersalz fein haftet.',
          ],
        },
      ],
    },
    'pairing-roasted-nuts-with-cardamom-coffee': {
      title: 'Abendrituale: Kardamom-Kaffee mit Mandeln & Feigen kombinieren',
      subtitle: 'Das Zusammenspiel aus Salz, Fruchtsüße und feinen Röstnoten.',
      category: 'Genussguide',
      publishedAt: 'November 2026',
      excerpt: 'Ein kleiner Teller mit gerösteten Nüssen und Feigen macht aus jeder Kaffeepause ein Fest.',
      sections: [
        {
          heading: 'Kontrast ist das Geheimnis',
          paragraphs: [
            'Knackiges Meersalz verstärkt die Schokoladennote des Kaffees, während weiche Smyrna-Feigen die feine Bitterkeit abrunden.',
          ],
        },
      ],
    },
    'from-antep-orchards-to-kiel-roastery': {
      title: 'Sortenreiner Einkauf: Qualitätsstandards in Antep & Valencia',
      subtitle: 'Was Schalenöffnung und Restfeuchte über die Erntefrische verraten.',
      category: 'Herkunft',
      publishedAt: 'Oktober 2026',
      excerpt: 'Rösten kann alte Rohware nicht retten. Wir prüfen Feuchte und Kernfarbe bei jeder Lieferung.',
      sections: [
        {
          heading: 'Warum Smaragdgrün für Frühernte steht',
          paragraphs: [
            'Früh geerntete Antep-Pistazien bewahren ihr tiefes Grün und erreichen 5%–6% optimale Feuchte.',
          ],
        },
      ],
    },
  },
  dispatches: {
    'ig-01': {
      caption: 'Frische 12-kg-Charge Mittelmeermandeln direkt vom Kühlsieb – noch warm mit Meersalz veredelt.',
      location: 'Kieler Rösterei',
      dateLabel: 'Frische Charge',
    },
    'ig-02': {
      caption: 'Natürlich geöffnete Antep-Pistazien aus Gaziantep – ungebleicht und langsam geröstet.',
      location: 'Elisabethstraße 70',
      dateLabel: 'Erntelos',
    },
    'ig-03': {
      caption: 'Honig-Nugat aus dem Kupferkessel, frisch geschnitten mit ganzen Pistazien und Mandeln.',
      location: 'Manufaktur',
      dateLabel: 'Kleine Charge',
    },
    'ig-04': {
      caption: 'Frisch gemahlener grüner Kardamom trifft auf dunkle Arabica-Bohnen – bereit zum Aufbrühen.',
      location: 'Röststube',
      dateLabel: 'Wochenröstung',
    },
  },
};

const FR: Dictionary = {
  brandName: 'Saber Nuts',
  nav: {
    collection: 'Collection',
    craft: 'Savoir-faire',
    journal: 'Journal',
    gallery: 'Galerie',
    bag: 'Panier',
    menuOpen: 'Ouvrir le menu',
    menuClose: 'Fermer le menu',
    languageLabel: 'Langue',
    themeToLight: 'Passer au thème clair',
    themeToDark: 'Passer au thème sombre noyer',
    themeLightLabel: 'Clair',
    themeDarkLabel: 'Sombre',
  },
  hero: {
    kicker: 'Torréfaction Artisanale à Kiel · Petits Lots',
    headline: 'Noix grillées à sec, fruits séchés & nougat au miel.',
    body: 'Torréfiées chaque semaine en tambour de fonte sans huiles raffinées. Amandes méditerranéennes, pistaches d’Antep, figues de Smyrne et café à la cardamome expédiés frais.',
    ctaPrimary: 'Découvrir la Collection',
    followPrefix: 'Suivez nos fournées sur',
    captionKicker: 'Sélection du Jour · Emballée à la Commande',
    captionTitle: 'Amandes de Valence, Pistaches d’Antep & Nougat au Miel',
    proof: [
      { title: '100% Grillées à Sec', sub: 'Zéro huile de graines ajoutée' },
      { title: 'Lots de 12 kg', sub: 'Torréfaction hebdomadaire à Kiel' },
      { title: 'Sachets 100 g – 1 kg', sub: 'Jusqu’à 10% d’économie en grand format' },
      { title: 'Offert dès €45.00', sub: 'Sachets hermétiques haute fraîcheur' },
    ],
  },
  catalog: {
    kicker: 'Sélection de la Torréfaction',
    title: 'Noix grillées, fruits séchés & confiseries',
    searchPlaceholder: 'Rechercher amandes, figues, nougat...',
    searchLabel: 'Rechercher dans le catalogue Saber Nuts',
    clearSearch: 'Effacer la recherche',
    showingPrefix: 'Affichage de',
    showingOf: 'sur',
    batchesSuffix: 'lots',
    emptyTitle: 'Aucun produit correspondant',
    emptyBody: 'Effacez votre recherche ou parcourez toutes les catégories.',
    resetFilters: 'Réinitialiser',
    basePerKg: '/ kg base',
    addToBag: 'Ajouter',
    categories: {
      All: 'Tous',
      'Nuts & Seeds': 'Noix & Graines',
      'Dried Fruits': 'Fruits Séchés',
      'Nougat & Sweets': 'Nougat & Douceurs',
      'Coffee & Cocoa': 'Café & Cacao',
    },
  },
  craft: {
    kicker: 'Notre Savoir-Faire',
    title: 'Chaleur maîtrisée, zéro compromis.',
    steps: [
      {
        number: '01.',
        title: 'Contrôle d’Humidité par Origine',
        body: 'Chaque sac venu de Valence, Gaziantep ou de la mer Égée est vérifié pour son taux d’ouverture naturelle et 5%–6% d’humidité.',
        metric: '5,5% humidité cible',
      },
      {
        number: '02.',
        title: 'Torréfaction à Sec en Fonte',
        body: 'Plutôt que de frire dans l’huile, nous grillons des lots de 12 kg entre 158°C et 164°C dans les lipides naturels du fruit.',
        metric: '0% huile raffinée',
      },
      {
        number: '03.',
        title: 'Refroidissement & Fleur de Sel',
        body: 'Les noyaux encore tièdes refroidissent sur grilles ventilées avec une pincée de sel marin qui préserve le croquant.',
        metric: 'Emballé à Kiel',
      },
    ],
    journalTitle: 'Journal de Torréfaction',
    allGuides: 'Tous les Articles',
    minRead: 'min de lecture',
    tip: 'Basculez entre les thèmes Clair et Sombre ou choisissez Français, Deutsch, English, Svenska et العربية dans l’en-tête.',
  },
  gallery: {
    kicker: 'En Direct du Comptoir',
    title: 'Instants de l’atelier @sabernuts',
    followCta: 'Suivre @sabernuts sur Instagram',
  },
  pdp: {
    backToCollection: 'Retour à la Collection',
    roastTemp: 'Température',
    cycleTime: 'Durée',
    proteinPer100: 'Protéines / 100g',
    packWeight: 'Format du Sachet',
    bulkSavings: '-5% dès 500 g · -10% dès 1 kg',
    addedToBag: 'Ajouté au Panier',
    addPrefix: 'Ajouter',
    toBagSuffix: 'au Panier',
    tastingNotes: 'Notes de Dégustation',
    ingredientsMethod: 'Ingrédients & Méthode',
    nutrition100g: 'Valeurs pour 100 g',
    pairTitle: 'À associer avec nos autres lots',
    fromPrefix: 'Dès',
  },
  journalPage: {
    kicker: 'Journal Saber Nuts',
    title: 'Carnets de torréfaction, terroirs & accords',
    subtitle: 'Découvrez comment nous sélectionnons nos récoltes, grillons sans huile et accordons nos noix avec le café.',
    readGuide: 'Lire l’Article',
    backAllGuides: 'Tous les Articles',
    standardText: 'Texte Standard',
    largeText: 'Grand Texte',
  },
  bag: {
    titleBag: 'Votre Panier',
    titleCheckout: 'Adresse de Livraison',
    titleConfirmed: 'Commande Confirmée',
    packsSelectedSingular: 'sachet sélectionné',
    packsSelectedPlural: 'sachets sélectionnés',
    freeShippingUnlocked: 'Livraison offerte débloquée',
    freeShippingAddPrefix: 'Ajoutez',
    freeShippingAddSuffix: 'pour bénéficier de la livraison offerte',
    emptyTitle: 'Votre panier est vide',
    emptyBody: 'Choisissez un format parmi nos noix grillées, figues séchées, nougat au miel ou café à la cardamome.',
    browseCollection: 'Voir la Collection',
    subtotal: 'Sous-total',
    shipping: 'Livraison',
    complimentary: 'Offerte',
    total: 'Total',
    proceedCheckout: 'Passer à la Livraison',
    back: 'Retour',
    confirmOrder: 'Confirmer la Commande',
    checkoutNote: 'Paiement à la livraison ou sur facture.',
    fullName: 'Nom Complet',
    email: 'Adresse E-mail',
    phone: 'Téléphone',
    address: 'Adresse & Ville',
    postalCode: 'Code Postal',
    errName: 'Veuillez saisir votre nom complet.',
    errEmail: 'Veuillez saisir une adresse e-mail valide.',
    errPhone: 'Veuillez saisir un numéro de téléphone valide.',
    errAddress: 'Veuillez saisir votre adresse et votre ville.',
    errPostal: 'Veuillez saisir un code postal valide.',
    confirmedHeadingPrefix: 'Commande #',
    confirmedHeadingSuffix: 'Confirmée — En préparation',
    confirmedBodyPrefix: 'Merci,',
    confirmedBodyMid: 'Votre lot fraîchement emballé partira de notre atelier de Kiel vers',
    confirmationEmail: 'E-mail de confirmation',
    paymentMethod: 'Mode de paiement',
    paymentMethodValue: 'À la livraison / Facture',
    orderTotal: 'Total Commande',
    continueBrowsing: 'Continuer la Visite',
  },
  footer: {
    blurb: 'Noix grillées à sec, figues de Smyrne, nougat au miel et café à la cardamome préparés chaque semaine à Kiel.',
    roasteryHeading: 'Atelier',
    connectHeading: 'Réseaux & Boutique',
    copyright: '© 2026 Saber Nuts · Torréfaction & Épicerie Fine',
    tagline: 'Grillé à sec chaque semaine · Sans huiles raffinées',
  },
  products: {
    'sn-almonds-01': {
      name: 'Amandes Méditerranéennes au Sel Marin',
      origin: 'Valence, Espagne',
      roastProfile: 'Torréfaction à Sec',
      shortDescription: 'Amandes espagnoles charnues grillées à sec en petits lots avec fleur de sel méditerranéenne.',
      description: 'Sélectionnées pour leur douceur naturelle, nos amandes sont grillées en tambour de fonte sans aucune huile ajoutée puis salées à chaud.',
      tastingNotes: ['Massepain grillé', 'Fleur de sel', 'Finale nette'],
      ingredients: 'Amandes (98,5%), sel marin (1,5%).',
    },
    'sn-pistachio-02': {
      name: 'Pistaches d’Antep Grillées en Coque',
      origin: 'Hauts Plateaux de Gaziantep',
      roastProfile: 'Grillage Croquant',
      shortDescription: 'Cœurs émeraude ouverts naturellement, grillés doucement en coque pour un arôme riche.',
      description: 'Récoltées à maturité et séchées au soleil avant torréfaction lente à Kiel afin de préserver leur couleur vert émeraude.',
      tastingNotes: ['Pistache émeraude', 'Sel léger', 'Cœur fondant'],
      ingredients: 'Pistaches en coque (98%), sel marin (2%).',
    },
    'sn-figs-03': {
      name: 'Figues Séchées de Smyrne',
      origin: 'Vallée Égéenne',
      roastProfile: 'Séchées au Soleil',
      shortDescription: 'Figues de montagne souples et caramélisées séchées sans sucre ajouté ni sulfites.',
      description: 'Cueillies en début de séchage naturel sur l’arbre et affinées au soleil, offrant un cœur confituré couleur ambre.',
      tastingNotes: ['Miel de fleurs', 'Confiture de figue', 'Épice douce'],
      ingredients: '100% figues de Smyrne séchées au soleil.',
    },
    'sn-nougat-04': {
      name: 'Nougat Artisanal au Miel & Pistaches',
      origin: 'Atelier de Kiel',
      roastProfile: 'Battu au Chaudron de Cuivre',
      shortDescription: 'Nougat aérien au miel de fleurs généreusement garni de pistaches d’Antep et d’amandes grillées.',
      description: 'Préparé en petits chaudrons de cuivre avec près de 50% de fruits secs entiers torréfiés puis découpé à la main.',
      tastingNotes: ['Miel de fleurs', 'Pistache grillée', 'Amande dorée'],
      ingredients: 'Pistaches (30%), amandes (20%), miel de fleurs, sucre de canne, blanc d’œuf, pain azyme.',
    },
    'sn-coffee-05': {
      name: 'Café Arabe Torréfié à la Cardamome',
      origin: 'Cerrado & Guatemala',
      roastProfile: 'Velours Moyen-Foncé',
      shortDescription: 'Grains 100% Arabica fraîchement torréfiés et mariés à la cardamome verte moulue.',
      description: 'Torréfié chaque semaine près de nos tambours à noix, alliant corps chocolaté et fraîcheur aromatique de cardamome.',
      tastingNotes: ['Cardamome verte', 'Cacao noir', 'Noisette grillée'],
      ingredients: 'Café Arabica torréfié (94%), cardamome verte moulue (6%).',
    },
    'sn-medley-06': {
      name: 'Mélange Signature Saber Nuts',
      origin: 'Sélection Maison',
      roastProfile: 'Torréfaction Séparée',
      shortDescription: 'Notre assortiment phare réunissant amandes salées, pistaches d’Antep, cajous et noix au miel.',
      description: 'Chaque variété suit sa propre courbe de chaleur avant d’être assemblée à Kiel pour un plateau équilibré.',
      tastingNotes: ['Sel marin', 'Cajou fondant', 'Noix caramélisée'],
      ingredients: 'Pistaches (28%), amandes (27%), noix de cajou (25%), noix au miel (20%), sel marin.',
    },
  },
  articles: {
    'why-we-roast-dry-without-seed-oils': {
      title: 'Pourquoi griller à sec : la maîtrise thermique sans huile ajoutée',
      subtitle: 'Comment la fonte préserve le croquant et la douceur naturelle pendant des semaines.',
      category: 'Savoir-Faire',
      publishedAt: 'Novembre 2026',
      excerpt: 'Les industriels plongent les noix dans des huiles raffinées. Notre torréfaction à sec laisse chaque grain cuire dans sa propre richesse.',
      sections: [
        {
          heading: 'Les limites de la friture à l’huile',
          paragraphs: [
            'L’huile raffinée masque le terroir et ramollit la texture. Nous réglons nos tambours entre 155°C et 166°C selon chaque récolte.',
          ],
        },
        {
          heading: 'Refroidissement sur grilles perforées',
          paragraphs: [
            'Chaque lot de 12 kg est refroidi par ventilation naturelle avec un saupoudrage final de fleur de sel.',
          ],
        },
      ],
    },
    'pairing-roasted-nuts-with-cardamom-coffee': {
      title: 'Rituels du soir : accorder café à la cardamome, amandes & figues',
      subtitle: 'Équilibrer salinité, notes torréfiées et douceur fruitée.',
      category: 'Dégustation',
      publishedAt: 'Novembre 2026',
      excerpt: 'Un simple plateau de noix grillées et de figues transforme la pause café en moment de partage.',
      sections: [
        {
          heading: 'Le secret réside dans le contraste',
          paragraphs: [
            'La pointe de sel marin relève le cacao du café tandis que la figue adoucit l’amertume finale.',
          ],
        },
      ],
    },
    'from-antep-orchards-to-kiel-roastery': {
      title: 'Origines uniques : nos exigences de récolte à Antep et Valence',
      subtitle: 'Ce que révèlent le taux d’ouverture et l’humidité avant la cuisson.',
      category: 'Origines',
      publishedAt: 'Octobre 2026',
      excerpt: 'La torréfaction ne rattrape jamais une matière terne. Chaque lot entrant est contrôlé à la main.',
      sections: [
        {
          heading: 'Le vert émeraude, signe de récolte précoce',
          paragraphs: [
            'Nos pistaches d’Antep sont récoltées dès le rougissement de la coque avec une humidité idéale de 5%–6%.',
          ],
        },
      ],
    },
  },
  dispatches: {
    'ig-01': {
      caption: 'Fournée fraîche de 12 kg d’amandes méditerranéennes salées encore tièdes sur grille.',
      location: 'Atelier de Kiel',
      dateLabel: 'Lot Frais',
    },
    'ig-02': {
      caption: 'Pistaches émeraude ouvertes naturellement à Gaziantep – sans blanchiment.',
      location: 'Elisabethstraße 70',
      dateLabel: 'Récolte',
    },
    'ig-03': {
      caption: 'Nougat au miel monté au chaudron de cuivre avec pistaches et amandes entières.',
      location: 'Table Confiserie',
      dateLabel: 'Petit Lot',
    },
    'ig-04': {
      caption: 'Cardamome verte fraîchement moulue et grains Arabica – fournée hebdomadaire.',
      location: 'Salle de Torréfaction',
      dateLabel: 'Rôtissage Semaine',
    },
  },
};

const AR: Dictionary = {
  brandName: 'مكسرات صابر',
  nav: {
    collection: 'المنتجات',
    craft: 'حرفتنا',
    journal: 'المجلة',
    gallery: 'المعرض',
    bag: 'السلة',
    menuOpen: 'فتح قائمة التنقل',
    menuClose: 'إغلاق قائمة التنقل',
    languageLabel: 'اللغة',
    themeToLight: 'التبديل إلى المظهر الفاتح',
    themeToDark: 'التبديل إلى مظهر الجوز الداكن',
    themeLightLabel: 'فاتح',
    themeDarkLabel: 'داكن',
  },
  hero: {
    kicker: 'محمصة صابر في كيل · تحميص يدوي بكميات صغيرة',
    headline: 'مكسرات محمصة على الجمر، فواكه مجففة ونوغا بالعسل.',
    body: 'نحمّص أسبوعياً في أفران الحديد الزهر بدون زيوت مهدرجة أو نباتية. لوز متوسطي مقرمش، فستق عنتابي مفتوح طبيعياً، تين مجفف بالشمس، وقهوة بالهيل طازجة من متجرنا.',
    ctaPrimary: 'تصفح المنتجات',
    followPrefix: 'تابع دفعات التحميص الطازجة على',
    captionKicker: 'تشكيلة اليوم · تعبأ عند الطلب',
    captionTitle: 'لوز فالنسيا، فستق عنتابي ونوغا العسل الفاخرة',
    proof: [
      { title: 'تحميص جاف 100%', sub: 'بدون زيوت نباتية مضافة' },
      { title: 'دفعات 12 كغ', sub: 'تحميص أسبوعي طازج في كيل' },
      { title: 'أحجام 100 غ – 1 كغ', sub: 'وفر حتى 10% في العبوات الكبيرة' },
      { title: 'شحن مجاني فوق €45.00', sub: 'تغليف محكم للحفاظ على القرمشة' },
    ],
  },
  catalog: {
    kicker: 'مختارات المحمصة الطازجة',
    title: 'مكسرات محمصة، فواكه مجففة وحلويات شرقية',
    searchPlaceholder: 'ابحث عن اللوز، الفستق، التين، النوغا...',
    searchLabel: 'البحث في منتجات مكسرات صابر',
    clearSearch: 'مسح البحث',
    showingPrefix: 'عرض',
    showingOf: 'من أصل',
    batchesSuffix: 'أصناف',
    emptyTitle: 'لم يتم العثور على أصناف مطابقة',
    emptyBody: 'جرّب مسح نص البحث أو استعراض جميع أقسام المحمصة.',
    resetFilters: 'إعادة ضبط الفلتر',
    basePerKg: '/ كغ أساس',
    addToBag: 'أضف للسلة',
    categories: {
      All: 'الكل',
      'Nuts & Seeds': 'مكسرات وبذور',
      'Dried Fruits': 'فواكه مجففة',
      'Nougat & Sweets': 'نوغا وحلويات',
      'Coffee & Cocoa': 'قهوة وكاكاو',
    },
  },
  craft: {
    kicker: 'كيف نحمّص في صابر',
    title: 'حرارة دقيقة وجودة بلا تنازلات.',
    steps: [
      {
        number: '01.',
        title: 'فحص الرطوبة ومصدر الحصاد',
        body: 'نفحص كل شحنة من فالنسيا وعنتاب وبحر إيجه للتأكد من نسبة التفتح الطبيعي ورطوبة 5%–6% قبل دخول المحمصة.',
        metric: 'رطوبة مستهدفة 5.5%',
      },
      {
        number: '02.',
        title: 'تحميص جاف في أفران الحديد الزهر',
        body: 'بدلاً من القلي الصناعي بالزيوت، نحمّص دفعات 12 كغ على حرارة بين 158°م و164°م لتتحمص الحبات في زيوتها الطبيعية.',
        metric: '0% زيوت مهدرجة',
      },
      {
        number: '03.',
        title: 'تبريد بالهواء ورشة ملح البحر',
        body: 'تبرد الحبات الدافئة على صواني هوائية واسعة مع رش ملح البحر المتقشر ليلتصق بنعومة ويحافظ على القرمشة لأسابيع.',
        metric: 'تعبئة أسبوعية في كيل',
      },
    ],
    journalTitle: 'مجلة المحمصة',
    allGuides: 'كل المقالات',
    minRead: 'دقائق قراءة',
    tip: 'يمكنك التبديل بين المظهر الفاتح والداكن أو اختيار العربية والألمانية والفرنسية والسويدية والإنجليزية من الشريط العلوي.',
  },
  gallery: {
    kicker: 'مباشرة من المحمصة',
    title: 'لقطات طازجة من حساب @sabernuts',
    followCta: 'تابع @sabernuts على إنستغرام',
  },
  pdp: {
    backToCollection: 'العودة إلى المنتجات',
    roastTemp: 'درجة التحميص',
    cycleTime: 'مدة التحميص',
    proteinPer100: 'بروتين / 100 غ',
    packWeight: 'وزن العبوة',
    bulkSavings: 'خصم 5% لوزن 500 غ · خصم 10% لوزن 1 كغ',
    addedToBag: 'تمت الإضافة',
    addPrefix: 'أضف',
    toBagSuffix: 'إلى السلة',
    tastingNotes: 'نكهات التذوق',
    ingredientsMethod: 'المكونات وطريقة التحميص',
    nutrition100g: 'القيم الغذائية لكل 100 غ',
    pairTitle: 'أصناف تكمّل ضيافتك',
    fromPrefix: 'ابتداءً من',
  },
  journalPage: {
    kicker: 'مجلة مكسرات صابر',
    title: 'ملاحظات التحميص، معايير الحصاد ودليل التذوق',
    subtitle: 'تعرّف على أسرار اختيار المحاصيل، التحميص بدون زيوت، وتنسيق المكسرات مع القهوة العربية.',
    readGuide: 'اقرأ المقال',
    backAllGuides: 'جميع المقالات',
    standardText: 'حجم عادي',
    largeText: 'خط كبير',
  },
  bag: {
    titleBag: 'سلة المشتريات',
    titleCheckout: 'بيانات التوصيل',
    titleConfirmed: 'تم تأكيد الطلب',
    packsSelectedSingular: 'عبوة مختارة',
    packsSelectedPlural: 'عبوات مختارة',
    freeShippingUnlocked: 'تم تفعيل الشحن المجاني لطلبك',
    freeShippingAddPrefix: 'أضف',
    freeShippingAddSuffix: 'للحصول على شحن مجاني',
    emptyTitle: 'سلتك فارغة حالياً',
    emptyBody: 'اختر الوزن المناسب من المكسرات المحمصة، التين المجفف، النوغا أو القهوة بالهيل للبدء.',
    browseCollection: 'تصفح المنتجات',
    subtotal: 'المجموع الفرعي',
    shipping: 'تكلفة الشحن',
    complimentary: 'مجاني',
    total: 'الإجمالي',
    proceedCheckout: 'متابعة لبيانات التوصيل',
    back: 'رجوع',
    confirmOrder: 'تأكيد الطلب',
    checkoutNote: 'الدفع عند الاستلام أو عبر الفاتورة.',
    fullName: 'الاسم الكامل',
    email: 'البريد الإلكتروني',
    phone: 'رقم الهاتف',
    address: 'العنوان والمدينة',
    postalCode: 'الرمز البريدي',
    errName: 'يرجى إدخال الاسم الكامل.',
    errEmail: 'يرجى إدخال بريد إلكتروني صحيح.',
    errPhone: 'يرجى إدخال رقم هاتف متاح.',
    errAddress: 'يرجى إدخال العنوان والمدينة.',
    errPostal: 'يرجى إدخال رمز بريدي صحيح.',
    confirmedHeadingPrefix: 'طلب رقم #',
    confirmedHeadingSuffix: 'مؤكد — قيد التجهيز',
    confirmedBodyPrefix: 'شكراً لك،',
    confirmedBodyMid: 'سيتم تجهيز طلبك الطازج وشحنه من محمصتنا في كيل إلى',
    confirmationEmail: 'البريد الإلكتروني',
    paymentMethod: 'طريقة الدفع',
    paymentMethodValue: 'عند الاستلام / فاتورة',
    orderTotal: 'إجمالي الطلب',
    continueBrowsing: 'مواصلة التسوق',
  },
  footer: {
    blurb: 'مكسرات محمصة على الحديد الزهر، تين متوسطي، نوغا الفستق بالعسل وقهوة بالهيل تُحضّر أسبوعياً في كيل.',
    roasteryHeading: 'المحمصة',
    connectHeading: 'التواصل والمتجر',
    copyright: '© 2026 مكسرات صابر · محمصة ومختارات فاخرة',
    tagline: 'تحميص جاف أسبوعي · بدون زيوت مضافة',
  },
  products: {
    'sn-almonds-01': {
      name: 'لوز متوسطي محمص بملح البحر',
      origin: 'فالنسيا، إسبانيا',
      roastProfile: 'تحميص جاف على الحديد',
      shortDescription: 'حبات لوز إسبانية ممتلئة محمصة ببطء بدون زيوت ومتبلة برقائق ملح البحر.',
      description: 'نختار حبات اللوز الغنية بالزيوت الطبيعية ونحمّصها جافاً في أفران الحديد الزهر، ثم تُرش بملح البحر الخشن وهي دافئة.',
      tastingNotes: ['لوز محمص', 'ملح بحري خفيف', 'قرمشة نقية'],
      ingredients: 'لوز (98.5%)، ملح بحر متوسطي (1.5%).',
    },
    'sn-pistachio-02': {
      name: 'فستق عنتابي محمص بالقشر',
      origin: 'هضاب غازي عنتاب',
      roastProfile: 'تحميص عالي القرمشة',
      shortDescription: 'فستق عنتابي أخضر متفتح طبيعياً، محمص بهدوء للحفاظ على لونه الزمردي ونكهته الغنية.',
      description: 'يُحصد في ذروة نضجه ويُجفف تحت الشمس ثم يُحمص ببطء في محمصتنا ليحتفظ بقلبه الأخضر وطعمه الكريمي.',
      tastingNotes: ['فستق عنتابي', 'ملوحة متوازنة', 'لب غني'],
      ingredients: 'فستق بالقشر (98%)، ملح البحر (2%).',
    },
    'sn-figs-03': {
      name: 'تين إزمير المجفف بالشمس',
      origin: 'وادي بحر إيجه',
      roastProfile: 'مجفف بالشمس بدون كبريت',
      shortDescription: 'تين جبلي طري غني بنكهة الكراميل مجفف طبيعياً دون سكر مضاف أو مواد حافظة.',
      description: 'يُقطف بعد بداية جفافه على الشجر ويُكمل تجفيفه تحت شمس بحر إيجه ليمنحك قلباً عسلياً دافئاً.',
      tastingNotes: ['عسل بري', 'مربى التين', 'دفء طبيعي'],
      ingredients: 'تين إزمير مجفف طبيعياً 100%.',
    },
    'sn-nougat-04': {
      name: 'نوغا العسل بالفستق واللوز',
      origin: 'مطبخ محمصة كيل',
      roastProfile: 'مخفوق في قدور النحاس',
      shortDescription: 'نوغا هشة بعسل الزهور محشوة بسخاء بالفستق العنتابي المحمص وحبات اللوز الكاملة.',
      description: 'تُصنع في قدور نحاسية صغيرة بعسل الزهور ونحو 50% من المكسرات المحمصة الكاملة وتُقطع يدوياً.',
      tastingNotes: ['عسل الزهور', 'فستق محمص', 'لوز مقرمش'],
      ingredients: 'فستق محمص (30%)، لوز محمص (20%)، عسل زهور، سكر قصب، بياض بيض، رقائق ويفر.',
    },
    'sn-coffee-05': {
      name: 'قهوة عربية محمصة بالهيل الأخضر',
      origin: 'توليفة سيرادو وغواتيمالا',
      roastProfile: 'تحميص مخملي متوسط داكن',
      shortDescription: 'حبوب أرابيكا 100% محمصة حديثاً وممزوجة بحبات الهيل الأخضر المطحونة.',
      description: 'نحمّصها أسبوعياً بجانب أفران المكسرات لنقدم قواماً شوكولاتياً مع عبق الهيل الأخضر الأصيل.',
      tastingNotes: ['هيل أخضر', 'كاكاو داكن', 'بندق محمص'],
      ingredients: 'بن أرابيكا محمص (94%)، هيل أخضر مطحون (6%).',
    },
    'sn-medley-06': {
      name: 'تشكيلة صابر الفاخرة للمناسبات',
      origin: 'اختيار المحمصة الخاص',
      roastProfile: 'تحميص منفصل لكل صنف',
      shortDescription: 'خلطتنا المميزة التي تجمع اللوز المملح، الفستق العنتابي، الكاجو المقرمش والجوز بالعسل.',
      description: 'لأن كل نوع يحتاج درجة حرارة خاصة، نحمّص كل صنف على حدة ثم نجمعها في طبق ضيافة متوازن.',
      tastingNotes: ['ملح البحر', 'كاجو كريمي', 'جوز بالكراميل'],
      ingredients: 'فستق (28%)، لوز (27%)، كاجو (25%)، جوز بالعسل (20%)، ملح بحر.',
    },
  },
  articles: {
    'why-we-roast-dry-without-seed-oils': {
      title: 'لماذا نحمّص جافاً؟ منحنيات الحرارة بدلاً من الزيوت النباتية',
      subtitle: 'كيف تحافظ أفران الحديد الزهر على قرمشة المكسرات ونقائها لأسابيع.',
      category: 'فن التحميص',
      publishedAt: 'نوفمبر 2026',
      excerpt: 'تغمر المصانع الكبرى المكسرات في زيوت مكررة للسرعة. نحن نعتمد التحميص الجاف البطيء في زيوت الحبة الطبيعية.',
      sections: [
        {
          heading: 'مشكلة المكسرات المقلية بالزيت',
          paragraphs: [
            'القلي السريع يغطي النكهة الأصلية ويفقد المكسرات قرمشتها سريعاً. في محمصة صابر نضبط الحرارة بين 155°م و166°م لكل محصول.',
          ],
        },
        {
          heading: 'التبريد المنظم على الصواني',
          paragraphs: [
            'فور خروج الدفعة نوزعها على صواني تبريد مهواة مع رش ملح البحر لتبقى مقرمشة وخفيفة.',
          ],
        },
      ],
    },
    'pairing-roasted-nuts-with-cardamom-coffee': {
      title: 'طقوس المساء: تنسيق القهوة بالهيل مع اللوز المملح والتين',
      subtitle: 'التوازن بين الملوحة، حلاوة الفاكهة وعمق القهوة.',
      category: 'دليل التذوق',
      publishedAt: 'نوفمبر 2026',
      excerpt: 'في تقاليد الضيافة الشرقية والمتوسطية، يحوّل طبق صغير من المكسرات والتين جلسة القهوة إلى مناسبة دافئة.',
      sections: [
        {
          heading: 'التباين سر الطبق المتكامل',
          paragraphs: [
            'تبرز رشة ملح البحر غنى الكاكاو في القهوة بينما تخفف حلاوة التين من مرارتها.',
          ],
        },
      ],
    },
    'from-antep-orchards-to-kiel-roastery': {
      title: 'مصادر أحادية المنشأ: معاييرنا في بساتين عنتاب وفالنسيا',
      subtitle: 'ما تكشفه نسبة التفتح والرطوبة قبل بدء التحميص.',
      category: 'المصادر والمنشأ',
      publishedAt: 'أكتوبر 2026',
      excerpt: 'لا يمكن للتحميص إنقاذ محصول قديم. نفحص كل شحنة واردة بدقة.',
      sections: [
        {
          heading: 'اللون الزمردي علامة الحصاد المبكر',
          paragraphs: [
            'يُقطف الفستق العنتابي عند احمرار قشرته الخارجية بنسبة رطوبة مثالية 5%–6%.',
          ],
        },
      ],
    },
  },
  dispatches: {
    'ig-01': {
      caption: 'دفعة 12 كغ طازجة من اللوز المتوسطي على صينية التبريد مع رشة ملح البحر.',
      location: 'محمصة كيل',
      dateLabel: 'دفعة طازجة',
    },
    'ig-02': {
      caption: 'فستق عنتابي أخضر متفتح طبيعياً – تحميص هادئ بدون تبييض.',
      location: 'Elisabethstraße 70',
      dateLabel: 'حصاد جديد',
    },
    'ig-03': {
      caption: 'نوغا العسل المصنوعة في قدور النحاس ومقطعة طازجة بالفستق واللوز.',
      location: 'ركن الحلويات',
      dateLabel: 'كمية محدودة',
    },
    'ig-04': {
      caption: 'هيل أخضر مطحون طازجاً مع حبوب الأرابيكا الداكنة – جاهز للتحضير.',
      location: 'غرفة التحميص',
      dateLabel: 'تحميص الأسبوع',
    },
  },
};

const SV: Dictionary = {
  brandName: 'Saber Nuts',
  nav: {
    collection: 'Sortiment',
    craft: 'Hantverk',
    journal: 'Journal',
    gallery: 'Galleri',
    bag: 'Kasse',
    menuOpen: 'Öppna navigeringsmenyn',
    menuClose: 'Stäng navigeringsmenyn',
    languageLabel: 'Språk',
    themeToLight: 'Byt till ljust jordnära tema',
    themeToDark: 'Byt till mörkt valnötstema',
    themeLightLabel: 'Ljust',
    themeDarkLabel: 'Mörkt',
  },
  hero: {
    kicker: 'Hantverksrosteri i Kiel · Små satser',
    headline: 'Hällrostade nötter, soltorkad frukt & varm nougat.',
    body: 'Torrrostade varje vecka i små gjutjärnstrummor utan raffinerade fröoljor. Krispiga medelhavsmandlar, naturligt spruckna Antep-pistagenötter, Smyrna-fikon och kardemummakaffe skickas färska från vår disk.',
    ctaPrimary: 'Utforska sortimentet',
    followPrefix: 'Följ färska rostningar på',
    captionKicker: 'Dagens rosteriurval · Packat på beställning',
    captionTitle: 'Valenciamandel, Antep-pistage & kittelnougat i koppar',
    proof: [
      { title: '100% Torrrostade', sub: 'Helt utan fröoljor eller glansmedel' },
      { title: '12 kg Trumsatser', sub: 'Rostas varje vecka i Kiel' },
      { title: '100 g – 1 kg Påsar', sub: 'Upp till 10% mängdrabatt' },
      { title: 'Fri frakt över €45.00', sub: 'Förslutna för maximal krispighet' },
    ],
  },
  catalog: {
    kicker: 'Färskt från rosteriet',
    title: 'Småskaliga nötter, torkad frukt & konfektyr',
    searchPlaceholder: 'Sök mandel, fikon, nougat...',
    searchLabel: 'Sök i Saber Nuts sortiment',
    clearSearch: 'Rensa sökning',
    showingPrefix: 'Visar',
    showingOf: 'av',
    batchesSuffix: 'satser',
    emptyTitle: 'Inga matchande satser hittades',
    emptyBody: 'Prova att rensa sökfiltret eller bläddra bland alla rosterikategorier.',
    resetFilters: 'Återställ filter',
    basePerKg: '/ kg grundpris',
    addToBag: 'Lägg i kassen',
    categories: {
      All: 'Alla',
      'Nuts & Seeds': 'Nötter & Frön',
      'Dried Fruits': 'Torkad Frukt',
      'Nougat & Sweets': 'Nougat & Sötsaker',
      'Coffee & Cocoa': 'Kaffe & Kakao',
    },
  },
  craft: {
    kicker: 'Så rostar Saber Nuts',
    title: 'Precis värme, inga genvägar.',
    steps: [
      {
        number: '01.',
        title: 'Fuktkontroll per ursprung',
        body: 'Varje skördesäck från Valencia, Gaziantep och Egeiska dalen kontrolleras för naturlig sprickgrad och 5%–6% fuktighet innan den når trumman.',
        metric: '5,5% målfuktighet',
      },
      {
        number: '02.',
        title: 'Torrrostning i gjutjärn',
        body: 'Istället för industriell oljefritering rostar vi i små 12 kg gjutjärnssatser mellan 158°C och 164°C så att kärnorna rostas i sina egna naturliga oljor.',
        metric: '0% raffinerade fröoljor',
      },
      {
        number: '03.',
        title: 'Luftkylning på brickor & havssalt',
        body: 'Varma kärnor svalnar över perforerade stålbrickor där flingat medelhavssalt fäster lätt utan att klumpa, vilket bevarar krispet i veckor.',
        metric: 'Packat veckovis i Kiel',
      },
    ],
    journalTitle: 'Rosteriets Journal',
    allGuides: 'Alla guider',
    minRead: 'min läsning',
    tip: 'Växla mellan ljust och mörkt tema eller välj English, Deutsch, Français, Svenska och العربية när som helst i sidhuvudet.',
  },
  gallery: {
    kicker: 'Direkt från disken',
    title: 'Hälsningar från rosteriet @sabernuts',
    followCta: 'Följ @sabernuts på Instagram',
  },
  pdp: {
    backToCollection: 'Tillbaka till sortimentet',
    roastTemp: 'Rosttemp',
    cycleTime: 'Rosttid',
    proteinPer100: 'Protein / 100g',
    packWeight: 'Förpackningsvikt',
    bulkSavings: 'Spara 5% vid 500 g · 10% vid 1 kg',
    addedToBag: 'Tillagd i kassen',
    addPrefix: 'Lägg till',
    toBagSuffix: 'i kassen',
    tastingNotes: 'Smaknoter',
    ingredientsMethod: 'Ingredienser & rostningsmetod',
    nutrition100g: 'Näringsvärde per 100 g',
    pairTitle: 'Kombinera med andra rostningar',
    fromPrefix: 'Från',
  },
  journalPage: {
    kicker: 'Saber Nuts Journal',
    title: 'Rosterinoter, skördestandarder & smakguider',
    subtitle: 'Upptäck hur vi väljer ursprung, rostar utan fröoljor och kombinerar nötter med kardemummakaffe.',
    readGuide: 'Läs guide',
    backAllGuides: 'Alla läsguider',
    standardText: 'Standardtext',
    largeText: 'Stor text',
  },
  bag: {
    titleBag: 'Din rosterikasse',
    titleCheckout: 'Leveransuppgifter',
    titleConfirmed: 'Beställning bekräftad',
    packsSelectedSingular: 'vald förpackning',
    packsSelectedPlural: 'valda förpackningar',
    freeShippingUnlocked: 'Fri budfrakt upplåst',
    freeShippingAddPrefix: 'Lägg till',
    freeShippingAddSuffix: 'till för fri budfrakt',
    emptyTitle: 'Din rosterikasse är tom',
    emptyBody: 'Välj en förpackningsstorlek av våra nyrostade nötter, torkade fikon, nougat eller kardemummakaffe för att börja.',
    browseCollection: 'Bläddra i sortimentet',
    subtotal: 'Delsumma',
    shipping: 'Budfrakt',
    complimentary: 'Kostnadsfri',
    total: 'Totalt',
    proceedCheckout: 'Fortsätt till leveransuppgifter',
    back: 'Tillbaka',
    confirmOrder: 'Bekräfta beställning',
    checkoutNote: 'Betala vid leverans eller mot faktura vid utskick.',
    fullName: 'Fullständigt namn',
    email: 'E-postadress',
    phone: 'Telefonnummer',
    address: 'Gatuadress & stad',
    postalCode: 'Postnummer',
    errName: 'Vänligen ange ditt fullständiga namn.',
    errEmail: 'Vänligen ange en giltig e-postadress.',
    errPhone: 'Vänligen ange ett nåbart telefonnummer.',
    errAddress: 'Vänligen ange gatuadress och stad.',
    errPostal: 'Vänligen ange ett giltigt postnummer.',
    confirmedHeadingPrefix: 'Order #',
    confirmedHeadingSuffix: 'Bekräftad — Förbereds för leverans',
    confirmedBodyPrefix: 'Tack,',
    confirmedBodyMid: 'Din färskpackade sats skickas från vårt rosteri i Kiel till',
    confirmationEmail: 'Bekräftelsemejl',
    paymentMethod: 'Betalningssätt',
    paymentMethodValue: 'Betalning vid leverans / Faktura',
    orderTotal: 'Ordersumma',
    continueBrowsing: 'Fortsätt handla',
  },
  footer: {
    blurb: 'Småskaligt hällrostade nötter, soltorkade medelhavsfikon, handskuren pistagenougat och kardemummakaffe från vårt rosteri i Kiel.',
    roasteryHeading: 'Rosteri',
    connectHeading: 'Kontakt & Butik',
    copyright: '© 2026 Saber Nuts · Hantverksrosteri & Delikatesser',
    tagline: 'Torrrostade varje vecka · Utan raffinerade fröoljor',
  },
  products: {
    'sn-almonds-01': {
      name: 'Havssaltade Medelhavsmandlar',
      origin: 'Valencia, Spanien',
      roastProfile: 'Torr hällrostning',
      shortDescription: 'Fylliga spanska mandlar långsamt torrrostade i små satser och avslutade med flingat medelhavssalt.',
      description: 'Utvalda för sin höga naturliga oljesötma och jämna storlek torrrostas våra medelhavsmandlar i gjutjärnstrummor utan fröoljor. Medan de fortfarande är varma vänds de varsamt i grovt havssalt.',
      tastingNotes: ['Rostad marsipan', 'Krispigt havssalt', 'Ren nötsmak'],
      ingredients: 'Mandlar (98,5%), medelhavshavssalt (1,5%).',
    },
    'sn-pistachio-02': {
      name: 'Hällrostade Antep-pistagenötter',
      origin: 'Gazianteps högland',
      roastProfile: 'Krispig skalrostning',
      shortDescription: 'Naturligt spruckna smaragdgröna kärnor varsamt rostade i sitt skal för djup färg och fyllig, salt arom.',
      description: 'Skördade vid full mognad och soltorkade innan de når vårt rosteri i Kiel spricker dessa Antep-pistagenötter naturligt längs sömmen. Långsam värme kapslar in den djupa färgen och smöriga sötman.',
      tastingNotes: ['Smaragdpistage', 'Lätt sälta', 'Smörig kärna'],
      ingredients: 'Pistagenötter med skal (98%), havssalt (2%).',
    },
    'sn-figs-03': {
      name: 'Soltorkade Smyrnafikon',
      origin: 'Egeiska dalen',
      roastProfile: 'Soltorkade utan sulfit',
      shortDescription: 'Mjuka, karamellrika bergsfikon torkade hela på vävda vassmattor helt utan tillsatt socker eller sulfiter.',
      description: 'Plockade när de börjat torka naturligt på grenen och färdigtorkade under öppen egeisk sol. Varje frukt gömmer ett bärnstensfärgat, syltigt inre med fint frökrisp.',
      tastingNotes: ['Blomsterhonung', 'Karamelliserad fikonmarmelad', 'Varm krydda'],
      ingredients: '100% soltorkade Smyrnafikon. Inga konserveringsmedel eller tillsatt socker.',
    },
    'sn-nougat-04': {
      name: 'Handskuren Honung- & Pistagenougat',
      origin: 'Saber Nuts Kök, Kiel',
      roastProfile: 'Vispad i kopparkittel',
      shortDescription: 'Luftig blomsterhonungsnougat generöst fylld med nyrostade Antep-pistagenötter och skållade mandlar.',
      description: 'Tillverkad i små kopparkittlar med vispad äggvita, blomsterhonung och nästan 50% hela rostade nötter. Mör men med tydlig struktur, skuren och inslagen för hand.',
      tastingNotes: ['Blomsterhonung', 'Rostad pistage', 'Rostad mandel'],
      ingredients: 'Rostade pistagenötter (30%), rostade mandlar (20%), blomsterhonung, rörsocker, äggvita, oblatpapper.',
    },
    'sn-coffee-05': {
      name: 'Kardemummarostat Arabiskt Kaffe',
      origin: 'Cerrado- & Guatemalablandning',
      roastProfile: 'Mellanmörk sammetsrostning',
      shortDescription: 'Nyrostade 100% Arabicabönor blandade med nystött grön kardemumma för doftrik ibrik- eller espressobryggning.',
      description: 'Rostas varje vecka precis intill våra nöttrummor. Denna balanserade Arabicablandning förenar chokladig fyllighet med aromatisk grön kardemumma – perfekt till saltade nötter.',
      tastingNotes: ['Grön kardemumma', 'Mörk kakao', 'Rostad hasselnöt'],
      ingredients: 'Rostade Arabicabönor (94%), nymalen grön kardemumma (6%).',
    },
    'sn-medley-06': {
      name: 'Saber Signaturblandning från Rosteriet',
      origin: 'Husets utvalda blandning',
      roastProfile: 'Flerstegs hällrostning',
      shortDescription: 'Vår flaggskeppsblandning som förenar saltade mandlar, Antep-pistage, krispiga cashewnötter och honungsrostade valnötter.',
      description: 'Eftersom varje nötsort kräver sin egen rostningskurva rostar vi varje sort separat innan de blandas i vårt provningsrum i Kiel till ett färdigt bjudfat.',
      tastingNotes: ['Flingsalt', 'Smörig cashew', 'Karamelliserad valnöt'],
      ingredients: 'Pistagenötter (28%), mandlar (27%), cashewnötter (25%), honungsglaserade valnötter (20%), havssalt.',
    },
  },
  articles: {
    'why-we-roast-dry-without-seed-oils': {
      title: 'Därför torrrostar vi: Temperaturkurvor före fröoljor',
      subtitle: 'Hur gjutjärnets värmelagring bevarar krispighet och naturlig nötsötma i veckor.',
      category: 'Rostningshantverk',
      publishedAt: 'November 2026',
      excerpt: 'Industriella nötproducenter snabbfriterar kärnor i raffinerade vegetabiliska oljor. Hos oss får varje nöt rostas långsamt i sina egna naturliga fetter.',
      sections: [
        {
          heading: 'Problemet med oljefriterade nötter',
          paragraphs: [
            'De flesta butiksnötter sänks ner i het raffinerad solros- eller rapsolja för att gå snabbt och öka i vikt. Den extra beläggningen döljer ursprungssmaken och gör krispet mjukt inom några dagar.',
            'Hos Saber Nuts går varje sats in i en förvärmd torr trumma mellan 155°C och 166°C istället för att jäktas igenom hög värme.',
          ],
        },
        {
          heading: 'Disciplin vid kylbrickorna',
          paragraphs: [
            'Direkt efter rostningen breder vi ut varje 12 kg-sats över perforerade stålkylbrickor med jämnt luftflöde så att kärnorna håller sig krispiga och klara i smaken.',
          ],
        },
      ],
    },
    'pairing-roasted-nuts-with-cardamom-coffee': {
      title: 'Kvällsritualer: Kardemummakaffe med saltade mandlar & fikon',
      subtitle: 'Balansen mellan sälta, fyllig rostton och soltorkad frukt för lugna stunder.',
      category: 'Smakguide',
      publishedAt: 'November 2026',
      excerpt: 'I levantinsk och medelhavsinspirerad gästfrihet förvandlar ett litet fat med rostade nötter och torkade fikon en enkel kaffepaus till en högtid.',
      sections: [
        {
          heading: 'Kontrast är hemligheten bakom en balanserad bricka',
          paragraphs: [
            'Bra smakbrickor bygger på spänningen mellan krispigt havssalt, naturlig fruktsötma, blommig kardemumma och ren espressobeska.',
          ],
        },
      ],
    },
    'from-antep-orchards-to-kiel-roastery': {
      title: 'Ursprungsspårning: Våra skördestandarder i Antep & Valencia',
      subtitle: 'Vad skalets sprickgrad, fuktmätning och skördetidpunkt avslöjar innan en enda kärna rostas.',
      category: 'Råvaror & Ursprung',
      publishedAt: 'Oktober 2026',
      excerpt: 'Rostning kan aldrig rädda gammal råvara. Vi kontrollerar fukthalt, naturlig sprickning och kärnfärg på varje inkommande skördeparti.',
      sections: [
        {
          heading: 'Varför smaragdgrön färg signalerar tidig skörd',
          paragraphs: [
            'Våra Antep-partier plockas precis när det yttre skalet skiftar i rosaguld, vilket kapslar in klorofyllets djupgröna lyster och håller målfukten på 5%–6%.',
          ],
        },
      ],
    },
  },
  dispatches: {
    'ig-01': {
      caption: 'Nyrostad 12 kg-sats medelhavsmandlar direkt på kylbrickan – lätt vända i havssalt medan de är varma.',
      location: 'Kiel Rosteri',
      dateLabel: 'Ny sats',
    },
    'ig-02': {
      caption: 'Naturligt spruckna smaragdpistagenötter från Gaziantep – helt oblekta, långsamt hällrostade.',
      location: 'Elisabethstraße 70',
      dateLabel: 'Skördeparti',
    },
    'ig-03': {
      caption: 'Honungsnougat från kopparkitteln, handskuren på beställning med hela pistagenötter och mandlar.',
      location: 'Konfektyrbordet',
      dateLabel: 'Liten sats',
    },
    'ig-04': {
      caption: 'Nystött grön kardemumma möter sammetslena Arabicabönor – veckans rostning redo att bryggas.',
      location: 'Rosterirummet',
      dateLabel: 'Veckorostning',
    },
  },
};

export const DICTIONARIES: Record<Locale, Dictionary> = {
  en: EN,
  de: DE,
  fr: FR,
  sv: SV,
  ar: AR,
};

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale] ?? EN;
}
