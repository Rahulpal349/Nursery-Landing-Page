const STORAGE_KEY = 'srijoni_nursery_plants_v2';

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
    soilType: 'well-draining',
    wateringFrequency: 'bi-weekly',
    sunlightRequirement: 'low-light',
    temperatureRange: '18 - 30',
    growthRate: 'slow',
    specialFeatures: 'Air Purifying, Low Maintenance',
    isAvailable: true
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
