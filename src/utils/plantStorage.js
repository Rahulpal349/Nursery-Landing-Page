const STORAGE_KEY = 'srijoni_nursery_plants_v6';

// Default plant (Snake Plant) to show initially
const defaultPlants = [
  {
    id: 'snake-plant',
    name: 'Snake Plant',
    sku: 'SNK-001',
    scientificName: 'Sansevieria trifasciata',
    commonName: 'Snake Plant',
    category: 'indoor',
    price: 449,
    originalPrice: 599,
    discount: '25% OFF',
    shortDescription: 'The Snake Plant is a hardy, low-maintenance indoor plant known for its tall, sword-like leaves and air-purifying qualities. Perfect for homes, offices, and beginners!',
    tagline: 'Purify your air naturally.',
    image: 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1599320294139-4dffeb3de9d6?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1593696954577-ab3d39317b97?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1595180425712-4eb2e3919e1c?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=400&q=80'
    ],
    careInstructions: 'The Snake Plant (Sansevieria trifasciata) is one of the most popular indoor plants, loved for its striking appearance and exceptional resilience. It purifies the air by removing toxins and produces oxygen, making it ideal for bedrooms, living rooms, and workspaces. Its upright leaves with green and yellow patterns add a touch of elegance to any space.',
    soilType: 'Well-draining potting mix.',
    wateringFrequency: 'bi-weekly',
    sunlightRequirement: 'low-light',
    temperatureRange: '18 - 30',
    growthRate: 'slow',
    specialFeatures: 'Air Purifying, Low Maintenance',
    isAvailable: true,
    keyFeatures: [
      { iconType: 'air', title: 'Air Purifying', description: 'Improves indoor air quality' },
      { iconType: 'maintenance', title: 'Low Maintenance', description: 'Easy to care for everyone' },
      { iconType: 'light', title: 'Low Light Tolerant', description: 'Thrives in low to bright light' },
      { iconType: 'wellbeing', title: 'Enhances Wellbeing', description: 'Brings peace and positivity' }
    ],
    benefits: [
      'Super easy to maintain',
      'Purifies air naturally',
      'Grows in low light',
      'Perfect for busy people',
      'Stylish and modern look'
    ]
  },
  {
    id: 'aloe-vera',
    name: 'Aloe Vera Plant',
    sku: 'ALV-001',
    scientificName: 'Aloe barbadensis Miller',
    commonName: 'Aloe Vera',
    category: 'succulents',
    price: 349,
    originalPrice: 499,
    discount: 'Best Seller',
    shortDescription: 'A versatile medicinal plant with thick green leaves that store soothing gel. Ideal for bright spaces.',
    tagline: 'Healing, beautiful, and effortless.',
    image: '/images/plants/aloe_vera.png',
    thumbnails: [
      '/images/plants/aloe_vera.png'
    ],
    careInstructions: "The Aloe Vera Plant (Aloe barbadensis Miller) is one of the world's most versatile medicinal plants. Its thick green leaves store a cooling gel that has been traditionally used for treating minor burns, skin irritation, and promoting healthy skin and hair.\n\nBesides its health benefits, Aloe Vera also serves as an attractive ornamental succulent. Its drought-resistant nature makes it ideal for beginners and busy plant lovers.\n\nWhether placed on a sunny windowsill, office desk, or balcony, Aloe Vera adds a fresh, natural touch to any space while requiring very little maintenance.",
    soilType: 'Requires a well-draining cactus or succulent potting mix with good drainage.',
    wateringFrequency: 'Water only when the soil becomes completely dry. Usually every 10–15 days, depending on the season.',
    sunlightRequirement: 'Prefers bright indirect sunlight or 4–6 hours of direct morning sunlight.',
    temperatureRange: '18 - 30',
    growthRate: 'Moderate',
    specialFeatures: 'Medicinal, Low Maintenance',
    isAvailable: true,
    keyFeatures: [
      { iconType: 'medicinal', title: 'Medicinal Plant', description: 'Naturally rich in vitamins and soothing aloe gel.' },
      { iconType: 'maintenance', title: 'Low Maintenance', description: 'Requires minimal watering and care.' },
      { iconType: 'light', title: 'Loves Bright Sunlight', description: 'Thrives in bright indirect to direct sunlight.' },
      { iconType: 'air', title: 'Air Purifying', description: 'Helps improve indoor air quality.' }
    ],
    benefits: [
      'Rich in natural aloe gel',
      'Easy to grow and maintain',
      'Excellent for beginners',
      'Purifies indoor air',
      'Drought tolerant',
      'Beautiful decorative succulent',
      'Ideal for homes and offices'
    ]
  },
  {
    id: 'areca-palm',
    name: 'Areca Palm',
    sku: 'ARC-001',
    scientificName: 'Dypsis lutescens',
    commonName: 'Areca Palm',
    category: 'indoor',
    price: 499,
    originalPrice: 699,
    discount: 'Best Seller',
    shortDescription: 'Graceful, feathery green fronds and exceptional air-purifying qualities.',
    tagline: 'Elegant tropical foliage.',
    image: '/images/plants/areca_palm.png',
    thumbnails: [
      '/images/plants/areca_palm.png'
    ],
    careInstructions: 'The Areca Palm (Dypsis lutescens) is one of the most popular indoor ornamental plants, admired for its graceful, feathery green fronds and exceptional air-purifying qualities. Native to Madagascar, this elegant tropical palm instantly adds freshness and sophistication to homes, offices, hotels, and commercial spaces.\n\nKnown as a natural humidifier, the Areca Palm helps remove harmful indoor pollutants while improving air quality and maintaining humidity. It is an excellent choice for both beginners and experienced plant enthusiasts due to its easy-care nature and long-lasting beauty.\n\nWhether placed in a living room, office reception, balcony, or bedroom, the Areca Palm creates a calm, relaxing, and vibrant atmosphere.',
    soilType: 'Use a well-draining, nutrient-rich potting mix containing compost, coco peat, and perlite for healthy root growth.',
    wateringFrequency: 'Water when the top 1–2 inches of soil feel dry. Keep the soil slightly moist but avoid overwatering.',
    sunlightRequirement: 'Thrives in bright, indirect sunlight. Can tolerate partial shade but should be protected from harsh afternoon sun.',
    temperatureRange: '18 - 30',
    growthRate: 'Moderate',
    specialFeatures: 'Air Purifying, Humidifier',
    isAvailable: true,
    keyFeatures: [
      { iconType: 'air', title: 'Natural Air Purifier', description: 'Removes indoor toxins and improves air quality.' },
      { iconType: 'medicinal', title: 'Elegant Tropical Foliage', description: 'Beautiful feathery leaves enhance any interior décor.' },
      { iconType: 'maintenance', title: 'Easy to Maintain', description: 'Requires minimal care and moderate watering.' },
      { iconType: 'maintenance', title: 'Natural Humidifier', description: 'Helps increase indoor humidity for a healthier environment.' }
    ],
    benefits: [
      'Excellent indoor air purifier',
      'Adds a tropical look to any space',
      'Easy to grow and maintain',
      'Safe for homes and offices',
      'Natural humidity booster',
      'Perfect for beginners',
      'Beautiful decorative foliage'
    ]
  },
  {
    id: 'bougainvillea',
    name: 'Bougainvillea',
    sku: 'BOU-001',
    scientificName: 'Bougainvillea glabra',
    commonName: 'Bougainvillea',
    category: 'outdoor',
    price: 399,
    originalPrice: 599,
    discount: 'Best Seller',
    shortDescription: 'A vibrant flowering climber admired for its colorful, paper-like bracts that bloom almost year-round.',
    tagline: 'Stunning tropical charm for gardens.',
    image: '/images/plants/bougainvillea.png',
    thumbnails: [
      '/images/plants/bougainvillea.png'
    ],
    careInstructions: 'Bougainvillea is a vibrant flowering climber admired for its colorful, paper-like bracts that bloom almost year-round. Available in shades of pink, purple, orange, red, yellow, and white, this hardy plant adds a stunning tropical charm to gardens, balconies, fences, and walls.\n\nIt thrives in warm climates, requires minimal maintenance, and is highly drought tolerant, making it an excellent choice for both home gardens and landscaping projects.',
    soilType: 'Well-draining sandy or loamy soil.',
    wateringFrequency: 'Water deeply but allow the soil to dry between watering.',
    sunlightRequirement: 'Requires 6–8 hours of direct sunlight daily.',
    temperatureRange: '20 - 35',
    growthRate: 'Fast',
    specialFeatures: 'Flowering, Drought Tolerant',
    isAvailable: true,
    keyFeatures: [
      { iconType: 'light', title: 'Long-lasting colorful blooms', description: 'Available in stunning vibrant shades.' },
      { iconType: 'light', title: 'Thrives in full sunlight', description: 'Loves warm and sunny climates.' },
      { iconType: 'maintenance', title: 'Drought tolerant', description: 'Highly resilient and requires low water.' },
      { iconType: 'wellbeing', title: 'Ideal for walls, fences & gardens', description: 'Perfect for landscaping.' }
    ],
    benefits: [
      'Bright, eye-catching flowers',
      'Easy to maintain',
      'Fast-growing climber',
      'Attracts butterflies and bees',
      'Perfect for landscaping'
    ]
  },
  {
    id: 'hibiscus',
    name: 'Hibiscus',
    sku: 'HIB-001',
    scientificName: 'Hibiscus rosa-sinensis',
    commonName: 'Hibiscus',
    category: 'outdoor',
    price: 349,
    originalPrice: 499,
    discount: 'Best Seller',
    shortDescription: 'A loved flowering plant producing large, colorful blooms throughout the year.',
    tagline: 'Ornamental beauty for your garden.',
    image: '/images/plants/hibiscus.png',
    thumbnails: [
      '/images/plants/hibiscus.png'
    ],
    careInstructions: 'Hibiscus is one of the most loved flowering plants, producing large, colorful blooms throughout the year. It is widely grown in gardens, balconies, and terraces for its ornamental beauty and ability to attract butterflies and pollinators.\n\nBesides enhancing landscapes, Hibiscus flowers are also commonly used in herbal teas, hair care, and traditional remedies.',
    soilType: 'Rich, fertile, well-draining soil.',
    wateringFrequency: 'Keep the soil consistently moist without waterlogging.',
    sunlightRequirement: 'Needs 6–8 hours of direct sunlight.',
    temperatureRange: '18 - 32',
    growthRate: 'Moderate',
    specialFeatures: 'Flowering, Attracts Pollinators',
    isAvailable: true,
    keyFeatures: [
      { iconType: 'light', title: 'Large colorful flowers', description: 'Stunning blooms in vibrant shades.' },
      { iconType: 'wellbeing', title: 'Attracts butterflies & bees', description: 'Great for supporting pollinators.' },
      { iconType: 'medicinal', title: 'Evergreen ornamental shrub', description: 'Lush green foliage year-round.' },
      { iconType: 'light', title: 'Blooms throughout the year', description: 'Continuous flowering in warm weather.' }
    ],
    benefits: [
      'Beautiful year-round blooms',
      'Easy to grow',
      'Excellent ornamental plant',
      'Supports pollinators',
      'Great for pots and gardens'
    ]
  },
  {
    id: 'mint-plant',
    name: 'Mint Plant',
    sku: 'MNT-001',
    scientificName: 'Mentha spicata',
    commonName: 'Mint',
    category: 'herbs',
    price: 199,
    originalPrice: 299,
    discount: 'Best Seller',
    shortDescription: 'A fast-growing aromatic herb known for its refreshing fragrance and culinary uses.',
    tagline: 'Fresh herbs for your kitchen garden.',
    image: '/images/plants/mint_plant.png',
    thumbnails: [
      '/images/plants/mint_plant.png'
    ],
    careInstructions: 'Mint is a fast-growing aromatic herb known for its refreshing fragrance and culinary uses. It is commonly used in teas, beverages, salads, and various dishes while also offering medicinal benefits.\n\nMint grows well in containers, kitchen gardens, and balconies, making it a must-have herb for every home.',
    soilType: 'Rich, moist, well-draining soil.',
    wateringFrequency: 'Keep soil evenly moist.',
    sunlightRequirement: 'Prefers bright indirect light or partial sunlight.',
    temperatureRange: '15 - 30',
    growthRate: 'Fast',
    specialFeatures: 'Aromatic, Culinary, Medicinal',
    isAvailable: true,
    keyFeatures: [
      { iconType: 'medicinal', title: 'Fresh aromatic leaves', description: 'Releases a strong, refreshing fragrance.' },
      { iconType: 'medicinal', title: 'Culinary & medicinal herb', description: 'Great for teas, salads, and natural remedies.' },
      { iconType: 'air', title: 'Fast-growing plant', description: 'Spreads quickly in pots or gardens.' },
      { iconType: 'wellbeing', title: 'Perfect for kitchen gardens', description: 'Easy to harvest fresh mint daily.' }
    ],
    benefits: [
      'Fresh herbs anytime',
      'Easy to grow',
      'Pleasant fragrance',
      'Excellent for cooking',
      'Suitable for small spaces'
    ]
  },
  {
    id: 'peace-lily',
    name: 'Peace Lily',
    sku: 'PCL-001',
    scientificName: 'Spathiphyllum wallisii',
    commonName: 'Peace Lily',
    category: 'indoor',
    price: 499,
    originalPrice: 699,
    discount: 'Best Seller',
    shortDescription: 'A graceful indoor plant famous for its elegant white blooms and air-purifying qualities.',
    tagline: 'Elegant and air-purifying.',
    image: '/images/plants/peace_lily.png',
    thumbnails: [
      '/images/plants/peace_lily.png'
    ],
    careInstructions: 'Peace Lily is a graceful indoor flowering plant famous for its elegant white blooms and glossy green foliage. It is also one of the best natural air-purifying plants, helping remove toxins while adding sophistication to homes and offices.\n\nIts low-maintenance nature makes it an ideal choice for beginners and indoor plant enthusiasts.',
    soilType: 'Well-draining, nutrient-rich potting mix.',
    wateringFrequency: 'Water when the topsoil feels slightly dry.',
    sunlightRequirement: 'Bright indirect light; avoid direct sunlight.',
    temperatureRange: '18 - 30',
    growthRate: 'Moderate',
    specialFeatures: 'Air Purifying, Flowering',
    isAvailable: true,
    keyFeatures: [
      { iconType: 'light', title: 'Elegant white flowers', description: 'Graceful blooms above glossy green leaves.' },
      { iconType: 'air', title: 'Excellent air purifier', description: 'Naturally removes toxins from indoor air.' },
      { iconType: 'maintenance', title: 'Low maintenance', description: 'Easy to care for and beginner-friendly.' },
      { iconType: 'wellbeing', title: 'Perfect indoor plant', description: 'Adds sophistication to homes and offices.' }
    ],
    benefits: [
      'Beautiful indoor blooms',
      'Improves air quality',
      'Beginner friendly',
      'Elegant decorative plant',
      'Thrives indoors'
    ]
  },
  {
    id: 'rubber-plant',
    name: 'Rubber Plant',
    sku: 'RBP-001',
    scientificName: 'Ficus elastica',
    commonName: 'Rubber Plant',
    category: 'indoor',
    price: 549,
    originalPrice: 799,
    discount: 'Best Seller',
    shortDescription: 'A popular indoor ornamental plant admired for its large, glossy green leaves.',
    tagline: 'Modern, sophisticated indoor décor.',
    image: '/images/plants/rubber_plant.png',
    thumbnails: [
      '/images/plants/rubber_plant.png'
    ],
    careInstructions: 'Rubber Plant is a popular indoor ornamental plant admired for its large, glossy green leaves and elegant appearance. It is an excellent air-purifying plant that adds a modern, sophisticated touch to homes, offices, and commercial interiors.\n\nWith minimal care requirements and steady growth, the Rubber Plant is ideal for both beginners and experienced plant lovers.',
    soilType: 'Well-draining potting mix rich in organic matter.',
    wateringFrequency: 'Water when the top 1–2 inches of soil become dry.',
    sunlightRequirement: 'Thrives in bright indirect sunlight.',
    temperatureRange: '18 - 30',
    growthRate: 'Moderate',
    specialFeatures: 'Air Purifying, Large Foliage',
    isAvailable: true,
    keyFeatures: [
      { iconType: 'medicinal', title: 'Large glossy foliage', description: 'Bold and elegant dark green leaves.' },
      { iconType: 'air', title: 'Natural air purifier', description: 'Improves indoor air quality.' },
      { iconType: 'maintenance', title: 'Easy to maintain', description: 'Minimal care required for healthy growth.' },
      { iconType: 'wellbeing', title: 'Modern indoor décor plant', description: 'Adds a sophisticated touch to interiors.' }
    ],
    benefits: [
      'Stylish indoor plant',
      'Purifies indoor air',
      'Low maintenance',
      'Long-lasting foliage',
      'Perfect for homes and offices'
    ]
  }
];

export const getPlants = () => {
  const storedPlants = localStorage.getItem(STORAGE_KEY);
  if (storedPlants) {
    return JSON.parse(storedPlants);
  }
  // Initialize with default
  localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultPlants));
  return defaultPlants;
};

export const getPlantById = (id) => {
  const plants = getPlants();
  return plants.find(p => p.id === id);
};

export const addPlant = (plantData) => {
  const plants = getPlants();
  // generate a simple id from the name
  const newId = plantData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Date.now().toString().slice(-4);
  const newPlant = {
    ...plantData,
    id: newId,
    // Add default placeholders for properties if they are missing
    thumbnails: [
      plantData.image || 'https://images.unsplash.com/photo-1599320294139-4dffeb3de9d6?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1593696954577-ab3d39317b97?auto=format&fit=crop&w=400&q=80'
    ]
  };
  plants.push(newPlant);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(plants));
  return newId;
};
