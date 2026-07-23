// Plant data for modal
const plants = [
    {
        name: "Monstera Deliciosa",
        scientific: "Swiss Cheese Plant",
        image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600&h=600&fit=crop",
        light: "☀️ Bright Indirect",
        water: "💧 Once a Week",
        temp: "🌡️ 18-30°C",
        description: "Native to the tropical forests of southern Mexico, the Monstera Deliciosa is famous for its natural leaf holes, often called the 'Swiss Cheese Plant'. It's a climbing evergreen that can grow huge in the wild, but stays manageable indoors with proper care. It thrives in humid environments and adds a bold tropical feel to any room.",
        tips: ["Rotate for even growth - Turn your pot every few weeks so all sides get equal light", "Wipe leaves monthly to remove dust and help photosynthesis", "Support with a moss pole for climbing", "Mist regularly or use a humidifier"]
    },
    {
        name: "Snake Plant",
        scientific: "Sansevieria Trifasciata",
        image: "https://images.unsplash.com/photo-1593691509543-c55fb32e7355?w=600&h=600&fit=crop",
        light: "🌗 Low to Bright Light",
        water: "💧 Every 2-3 Weeks",
        temp: "🌡️ 15-30°C",
        description: "The Snake Plant is nearly indestructible, making it perfect for beginners or busy plant parents. Its striking upright leaves come in various patterns and can grow up to 4 feet tall. It's one of the best air-purifying plants, removing toxins like formaldehyde and benzene from the air.",
        tips: ["Let soil dry completely between waterings", "Tolerates low light but grows faster in bright indirect light", "Avoid cold drafts - keep away from air conditioning", "Very drought tolerant - when in doubt, don't water"]
    },
    {
        name: "Fiddle Leaf Fig",
        scientific: "Ficus Lyrata",
        image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&h=600&fit=crop",
        light: "☀️ Bright Indirect",
        water: "💧 Weekly",
        temp: "🌡️ 18-24°C",
        description: "An absolute icon in interior design, the Fiddle Leaf Fig features large, violin-shaped leaves with prominent veining. While it requires consistent care and can be finicky, it rewards dedicated plant parents with dramatic, sculptural foliage that makes a stunning statement in any room.",
        tips: ["Keep in a stable location - they don't like being moved", "Water when top 2 inches of soil are dry", "Dust leaves regularly for better photosynthesis", "Feed monthly during growing season (spring/summer)"]
    },
    {
        name: "Peace Lily",
        scientific: "Spathiphyllum",
        image: "https://images.unsplash.com/photo-1632321086489-5e0f5a77c6dc?w=600&h=600&fit=crop",
        light: "🌤 Low to Medium Light",
        water: "💧 Regular",
        temp: "🌡️ 18-26°C",
        description: "The Peace Lily produces elegant white blooms that rise above glossy dark green leaves. It's one of the best air-purifying plants and will actually droop to tell you when it's thirsty, making it forgiving for beginners. Perfect for bedrooms and offices where it thrives in low light.",
        tips: ["Drooping leaves mean it needs water", "Remove spent flowers to encourage new blooms", "Wipe leaves monthly to keep them glossy", "Avoid direct sunlight which can burn leaves"]
    },
    {
        name: "Aloe Vera",
        scientific: "Aloe Barbadensis",
        image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600&h=600&fit=crop",
        light: "☀️ Bright Light",
        water: "💧 Every 2-3 Weeks",
        temp: "🌡️ 13-27°C",
        description: "Aloe Vera is a succulent with thick, fleshy leaves filled with a healing gel used for burns, cuts, and skin care. Easy to care for and requiring minimal water, it's perfect for sunny windowsills. The plant produces offsets (pups) that can be separated to grow new plants.",
        tips: ["Use well-draining succulent or cactus soil", "Water deeply but infrequently", "Separate pups when they're 1/5 the size of the parent", "Keep in terracotta pot to prevent overwatering"]
    },
    {
        name: "Lavender",
        scientific: "Lavandula",
        image: "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=600&h=600&fit=crop",
        light: "☀️ Full Sun",
        water: "💧 Low",
        temp: "🌡️ 15-25°C",
        description: "Lavender is beloved for its beautiful purple flower spikes and enchanting fragrance. It attracts butterflies and bees while naturally repelling mosquitoes. Perfect for gardens, borders, and containers, it's also used in aromatherapy, cooking, and crafts.",
        tips: ["Requires excellent drainage - add sand to soil", "Prune after flowering to maintain shape", "Harvest flowers when they first open", "Protect from cold wet winters with mulch"]
    },
    {
        name: "Echeveria",
        scientific: "Echeveria Elegans",
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&h=600&fit=crop",
        light: "☀️ Bright Light",
        water: "💧 Minimal",
        temp: "🌡️ 10-24°C",
        description: "Echeverias form beautiful rosettes in stunning pastel colors ranging from pale blue-green to pink and purple. These compact succulents are perfect for windowsills, terrariums, and arrangements. They're drought-tolerant and produce offset rosettes that can be propagated.",
        tips: ["Water at the base, never on the rosette", "Provide at least 4-6 hours of light daily", "Remove dead lower leaves to prevent rot", "Propagate from leaves or offsets"]
    },
    {
        name: "Phalaenopsis Orchid",
        scientific: "Moth Orchid",
        image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&h=600&fit=crop",
        light: "🌤 Bright Indirect",
        water: "💧 Weekly",
        temp: "🌡️ 18-29°C",
        description: "The Moth Orchid produces stunning blooms that can last for months, making it one of the most popular indoor flowering plants. Available in white, pink, purple, and speckled varieties, these elegant orchids add sophistication to any space and are easier to care for than most people think.",
        tips: ["Water with ice cubes (3 per week)", "Keep in clear pot to check root health", "Fertilize monthly with orchid food", "Cut spent spike above a node for reblooming"]
    }
];

// Open plant modal
function openPlantModal(index) {
    const plant = plants[index];
    const modal = document.getElementById('plantModal');

    document.getElementById('modalImage').src = plant.image;
    document.getElementById('modalImage').alt = plant.name;
    document.getElementById('modalName').textContent = plant.name;
    document.getElementById('modalScientific').textContent = plant.scientific;
    document.getElementById('modalDescription').textContent = plant.description;

    const tagsContainer = document.getElementById('modalTags');
    tagsContainer.innerHTML = `
        <span class="indicator">${plant.light}</span>
        <span class="indicator">${plant.water}</span>
        <span class="indicator">${plant.temp}</span>
    `;

    const tipsContainer = document.getElementById('modalTips');
    tipsContainer.innerHTML = plant.tips.map(tip => `<li>${tip}</li>`).join('');

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close plant modal
function closePlantModal() {
    const modal = document.getElementById('plantModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal on outside click
document.getElementById('plantModal').addEventListener('click', (e) => {
    if (e.target.id === 'plantModal') {
        closePlantModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closePlantModal();
    }
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
    }
});

// Newsletter form submission
function handleNewsletterSubmit(e) {
    e.preventDefault();
    const input = e.target.querySelector('input');
    const email = input.value;

    // Show success message
    const formContainer = e.target.parentElement;
    e.target.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <div style="font-size: 48px; margin-bottom: 16px;">🌱</div>
            <p style="color: var(--primary-green); font-weight: 600;">Thank you for subscribing!</p>
            <p style="color: var(--text-light); font-size: 14px;">We'll send plant tips to ${email}</p>
        </div>
    `;
}

// Category filter (optional enhancement)
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
        const filter = card.dataset.filter;
        const plantCards = document.querySelectorAll('.plant-card');

        plantCards.forEach(plantCard => {
            if (filter === 'all' || plantCard.dataset.category === filter) {
                plantCard.style.display = 'block';
                plantCard.style.animation = 'fadeIn 0.5s ease';
            } else {
                plantCard.style.display = 'block';
                plantCard.style.opacity = '0.5';
            }
        });

        // Smooth scroll to plants section
        document.getElementById('plants').scrollIntoView({ behavior: 'smooth' });
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.plant-card, .tip-card, .category-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
