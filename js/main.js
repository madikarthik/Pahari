// Product Data
const products = [
  {
    id: 1,
    name: "Himalayan Wild Honey",
    description: "Pure, raw honey harvested from pristine Himalayan valleys by traditional beekeepers",
    price: "₹899",
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
    hoverImage: "https://images.pexels.com/photos/33162/honey-sweet-syrup-organic.jpg",
    rating: 5,
    category: "Honey & Sweets",
    details: {
      origin: "High-altitude valleys of Himachal Pradesh",
      ingredients: ["100% Pure Wild Honey"],
      benefits: ["Rich in antioxidants", "Natural energy booster", "Antibacterial properties", "Supports immunity"],
      usage: "Take 1-2 teaspoons daily, can be mixed with warm water or consumed directly",
      certifications: ["Organic Certified", "FSSAI Approved", "Export Quality"]
    }
  },
  {
    id: 2,
    name: "Organic Pahadi Tea",
    description: "Hand-picked tea leaves from high-altitude gardens, processed using traditional methods",
    price: "₹649",
    image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg",
    hoverImage: "https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg",
    rating: 4.9,
    category: "Beverages",
    details: {
      origin: "Kangra Valley, Himachal Pradesh",
      ingredients: ["Organic Black Tea Leaves", "Natural Mountain Herbs"],
      benefits: ["Rich in antioxidants", "Boosts metabolism", "Improves mental alertness", "Heart healthy"],
      usage: "Steep 1 teaspoon in hot water for 3-5 minutes. Best enjoyed without milk",
      certifications: ["Organic Certified", "Fair Trade", "Rain Forest Alliance"]
    }
  },
  {
    id: 3,
    name: "Mountain Spice Blend",
    description: "Aromatic spices sourced from mountain villages, ground fresh to preserve flavor",
    price: "₹499",
    image: "https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg",
    hoverImage: "https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg",
    rating: 4.8,
    category: "Spices",
    details: {
      origin: "Various mountain villages across Himachal Pradesh",
      ingredients: ["Cardamom", "Cinnamon", "Cloves", "Black Pepper", "Nutmeg"],
      benefits: ["Aids digestion", "Anti-inflammatory", "Boosts immunity", "Rich in minerals"],
      usage: "Use in cooking, baking, or add to warm milk for a healthy drink",
      certifications: ["Organic Certified", "Chemical-free", "Traditional Processing"]
    }
  },
  {
    id: 4,
    name: "Himalayan Pink Salt",
    description: "Mineral-rich pink salt crystals from ancient deposits, unprocessed and pure",
    price: "₹399",
    image: "https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg",
    hoverImage: "https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg",
    rating: 4.9,
    category: "Condiments",
    details: {
      origin: "Ancient salt mines of the Himalayas",
      ingredients: ["100% Pure Himalayan Pink Salt"],
      benefits: ["84 trace minerals", "Balances pH levels", "Improves hydration", "Supports muscle function"],
      usage: "Use as regular table salt or dissolve in water for sole water",
      certifications: ["Unprocessed", "Chemical-free", "Food Grade"]
    }
  },
  {
    id: 5,
    name: "Organic Walnuts",
    description: "Premium quality walnuts from Kashmir, naturally dried and carefully selected",
    price: "₹1,299",
    image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg",
    hoverImage: "https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg",
    rating: 4.9,
    category: "Dry Fruits",
    details: {
      origin: "Kashmir Valley",
      ingredients: ["100% Organic Kashmiri Walnuts"],
      benefits: ["Rich in Omega-3", "Brain health", "Heart healthy", "High protein content"],
      usage: "Consume 4-6 pieces daily as snack or add to desserts and salads",
      certifications: ["Organic Certified", "Premium Grade", "Naturally Processed"]
    }
  },
  {
    id: 6,
    name: "Himalayan Herbal Tea",
    description: "Caffeine-free herbal blend with traditional mountain herbs for wellness",
    price: "₹549",
    image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg",
    hoverImage: "https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg",
    rating: 4.7,
    category: "Beverages",
    details: {
      origin: "High-altitude meadows of Himachal Pradesh",
      ingredients: ["Chamomile", "Lemon Grass", "Mint", "Tulsi", "Rose Petals"],
      benefits: ["Stress relief", "Better sleep", "Digestive health", "Natural detox"],
      usage: "Steep 1 teaspoon in hot water for 5-7 minutes. Best consumed before bedtime",
      certifications: ["Organic Certified", "Caffeine-free", "Wild Harvested"]
    }
  }
];

// Global Variables
let currentPage = 'home';
let selectedCategory = 'All';
let visibleSections = [];
let hoveredProduct = null;

// DOM Elements
const loadingScreen = document.getElementById('loading-screen');
const navigation = document.getElementById('navigation');
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const scrollToTopBtn = document.getElementById('scroll-to-top');
const heroBackground = document.getElementById('hero-background');
const currentYearSpan = document.getElementById('current-year');

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Lucide icons
  lucide.createIcons();
  
  // Hide loading screen after 1 second
  setTimeout(() => {
    loadingScreen.style.display = 'none';
  }, 1000);
  
  // Set current year
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
  
  // Initialize event listeners
  initializeEventListeners();
  
  // Load initial content
  loadProducts();
  loadCategories();
  
  // Initialize intersection observers
  initializeIntersectionObservers();
  
  // Initialize scroll effects
  initializeScrollEffects();
});

// Event Listeners
function initializeEventListeners() {
  // Navigation
  document.addEventListener('click', handleNavigation);
  
  // Mobile menu toggle
  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMobileMenu);
  }
  
  // Scroll to top
  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', scrollToTop);
  }
  
  // Contact form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactForm);
  }
  
  // WhatsApp button
  const whatsappBtn = document.getElementById('whatsapp-btn');
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', handleWhatsAppClick);
  }
  
  // Modal close
  const modalClose = document.getElementById('modal-close');
  const productModal = document.getElementById('product-modal');
  if (modalClose) {
    modalClose.addEventListener('click', closeProductModal);
  }
  if (productModal) {
    productModal.addEventListener('click', function(e) {
      if (e.target === productModal) {
        closeProductModal();
      }
    });
  }
  
  // Window events
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);
}

// Navigation Handler
function handleNavigation(e) {
  const target = e.target;
  
  // Handle navigation links
  if (target.matches('.nav-link, .mobile-nav-link, .footer-nav-link') || 
      target.closest('.nav-link, .mobile-nav-link, .footer-nav-link')) {
    e.preventDefault();
    const link = target.matches('.nav-link, .mobile-nav-link, .footer-nav-link') ? target : target.closest('.nav-link, .mobile-nav-link, .footer-nav-link');
    const href = link.getAttribute('href');
    
    if (href && href.startsWith('#')) {
      const page = href.substring(1);
      navigateToPage(page);
    }
  }
  
  // Handle CTA buttons
  if (target.matches('.cta-button') || target.closest('.cta-button')) {
    e.preventDefault();
    const button = target.matches('.cta-button') ? target : target.closest('.cta-button');
    const href = button.getAttribute('href');
    
    if (href && href.startsWith('#')) {
      const page = href.substring(1);
      if (page === 'story' && currentPage === 'home') {
        // Smooth scroll to story section on home page
        const storySection = document.getElementById('story');
        if (storySection) {
          storySection.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigateToPage(page);
      }
    }
  }
  
  // Handle view all button
  if (target.matches('.view-all-btn') || target.closest('.view-all-btn')) {
    e.preventDefault();
    navigateToPage('products');
  }
  
  // Handle category buttons
  if (target.matches('.category-btn')) {
    const category = target.textContent.trim();
    setSelectedCategory(category);
  }
  
  // Handle product details
  if (target.matches('.details-btn') || target.closest('.details-btn')) {
    e.preventDefault();
    const productCard = target.closest('.product-card');
    if (productCard) {
      const productId = parseInt(productCard.dataset.productId);
      showProductModal(productId);
    }
  }
  
  // Handle contact options
  if (target.matches('.contact-option') || target.closest('.contact-option')) {
    const button = target.matches('.contact-option') ? target : target.closest('.contact-option');
    const productCard = button.closest('.product-card');
    if (productCard) {
      const productId = parseInt(productCard.dataset.productId);
      const product = products.find(p => p.id === productId);
      if (product) {
        if (button.classList.contains('phone')) {
          handleContactClick('phone', product);
        } else if (button.classList.contains('email')) {
          handleContactClick('email', product);
        } else if (button.classList.contains('whatsapp')) {
          handleContactClick('whatsapp', product);
        }
      }
    }
  }
}

// Page Navigation
function navigateToPage(page) {
  // Hide all pages
  const pages = document.querySelectorAll('.page');
  pages.forEach(p => p.classList.remove('active'));
  
  // Show target page
  const targetPage = document.getElementById(`${page}-page`);
  if (targetPage) {
    targetPage.classList.add('active');
    currentPage = page;
    
    // Update navigation active states
    updateNavigationActiveStates(page);
    
    // Close mobile menu
    closeMobileMenu();
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Reinitialize observers for new page
    setTimeout(() => {
      initializeIntersectionObservers();
    }, 100);
  }
}

// Update Navigation Active States
function updateNavigationActiveStates(page) {
  // Remove active class from all nav links
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  navLinks.forEach(link => link.classList.remove('active'));
  
  // Add active class to current page links
  const activeLinks = document.querySelectorAll(`[href="#${page}"]`);
  activeLinks.forEach(link => {
    if (link.classList.contains('nav-link') || link.classList.contains('mobile-nav-link')) {
      link.classList.add('active');
    }
  });
}

// Mobile Menu
function toggleMobileMenu() {
  mobileMenu.classList.toggle('open');
  const isOpen = mobileMenu.classList.contains('open');
  
  // Update menu toggle icon
  const icon = menuToggle.querySelector('[data-lucide]');
  if (icon) {
    icon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
    lucide.createIcons();
  }
  
  // Update aria-expanded
  menuToggle.setAttribute('aria-expanded', isOpen);
}

function closeMobileMenu() {
  mobileMenu.classList.remove('open');
  const icon = menuToggle.querySelector('[data-lucide]');
  if (icon) {
    icon.setAttribute('data-lucide', 'menu');
    lucide.createIcons();
  }
  menuToggle.setAttribute('aria-expanded', 'false');
}

// Scroll Effects
function initializeScrollEffects() {
  handleScroll(); // Initial call
}

function handleScroll() {
  const scrollY = window.scrollY;
  
  // Navigation scroll effect
  if (scrollY > 50) {
    navigation.classList.add('scrolled');
  } else {
    navigation.classList.remove('scrolled');
  }
  
  // Parallax effect for hero background
  if (heroBackground && currentPage === 'home') {
    heroBackground.style.transform = `translateY(${scrollY * 0.5}px)`;
  }
  
  // Scroll to top button
  if (scrollY > 300) {
    scrollToTopBtn.classList.add('visible');
  } else {
    scrollToTopBtn.classList.remove('visible');
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Intersection Observers
function initializeIntersectionObservers() {
  // Clear existing observers
  visibleSections = [];
  
  // Observer for sections
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = parseInt(entry.target.getAttribute('data-section-id'));
          if (!isNaN(sectionId) && !visibleSections.includes(sectionId)) {
            visibleSections.push(sectionId);
            entry.target.classList.add('visible');
          }
        }
      });
    },
    { threshold: 0.3 }
  );
  
  // Observer for products
  const productObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1 }
  );
  
  // Observe sections
  const sections = document.querySelectorAll('[data-section-id]');
  sections.forEach(section => sectionObserver.observe(section));
  
  // Observe products
  const productCards = document.querySelectorAll('.product-card');
  productCards.forEach(card => productObserver.observe(card));
}

// Product Management
function loadProducts() {
  loadHomeProducts();
  loadAllProducts();
}

function loadHomeProducts() {
  const homeProductsGrid = document.getElementById('products-grid-home');
  if (!homeProductsGrid) return;
  
  // Show first 4 products on home page
  const homeProducts = products.slice(0, 4);
  homeProductsGrid.innerHTML = homeProducts.map(product => createProductCard(product)).join('');
  
  // Add hover effects
  addProductHoverEffects(homeProductsGrid);
}

function loadAllProducts() {
  const productsGrid = document.getElementById('products-grid');
  if (!productsGrid) return;
  
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);
  
  productsGrid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
  
  // Add hover effects
  addProductHoverEffects(productsGrid);
}

function createProductCard(product) {
  return `
    <div class="product-card" data-product-id="${product.id}">
      <div class="product-image-container">
        <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
        <span class="product-category">${product.category}</span>
      </div>
      
      <div class="product-info">
        <div class="product-header">
          <h3 class="product-name">${product.name}</h3>
          <p class="product-description">${product.description}</p>
        </div>
        
        <div class="product-rating" aria-label="Rating: ${product.rating} out of 5 stars">
          ${renderStars(product.rating)}
          <span class="rating-text">(${product.rating})</span>
        </div>
        
        <div class="product-footer">
          <div>
            <div class="product-price-label">Price</div>
            <span class="product-price">${product.price}</span>
          </div>
          <div class="product-actions">
            <button class="details-btn" aria-label="View details for ${product.name}">
              <i data-lucide="info" size="18"></i>
              Details
            </button>
          </div>
        </div>

        <div class="product-contact-options">
          <button class="contact-option phone" aria-label="Call for inquiry">
            <i data-lucide="phone" size="16"></i>
          </button>
          <button class="contact-option email" aria-label="Email for inquiry">
            <i data-lucide="mail" size="16"></i>
          </button>
          <button class="contact-option whatsapp" aria-label="WhatsApp for inquiry">
            <i data-lucide="message-circle" size="16"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderStars(rating) {
  return Array.from({ length: 5 }, (_, i) => {
    const filled = i < Math.floor(rating);
    return `<i data-lucide="star" size="16" class="star ${filled ? 'filled' : ''}" ${filled ? 'fill="currentColor"' : ''}></i>`;
  }).join('');
}

function addProductHoverEffects(container) {
  const productCards = container.querySelectorAll('.product-card');
  
  productCards.forEach(card => {
    const productId = parseInt(card.dataset.productId);
    const product = products.find(p => p.id === productId);
    const image = card.querySelector('.product-image');
    
    if (product && image) {
      card.addEventListener('mouseenter', () => {
        image.src = product.hoverImage;
        hoveredProduct = productId;
      });
      
      card.addEventListener('mouseleave', () => {
        image.src = product.image;
        hoveredProduct = null;
      });
    }
  });
  
  // Reinitialize Lucide icons
  lucide.createIcons();
}

// Categories
function loadCategories() {
  const categoryButtons = document.getElementById('category-buttons');
  if (!categoryButtons) return;
  
  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];
  
  categoryButtons.innerHTML = categories.map(category => 
    `<button class="category-btn ${category === selectedCategory ? 'active' : ''}">${category}</button>`
  ).join('');
}

function setSelectedCategory(category) {
  selectedCategory = category;
  
  // Update button states
  const categoryButtons = document.querySelectorAll('.category-btn');
  categoryButtons.forEach(btn => {
    btn.classList.toggle('active', btn.textContent.trim() === category);
  });
  
  // Reload products
  loadAllProducts();
  
  // Reinitialize observers
  setTimeout(() => {
    initializeIntersectionObservers();
  }, 100);
}

// Product Modal
function showProductModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const modal = document.getElementById('product-modal');
  if (!modal) return;
  
  // Update modal content
  document.getElementById('modal-product-code').textContent = `COD: ${productId.toString().padStart(5, '0')}`;
  document.getElementById('modal-product-title').textContent = product.name;
  document.getElementById('modal-price-value').textContent = product.price.replace('₹', '');
  document.getElementById('modal-main-image').src = product.image;
  document.getElementById('modal-main-image').alt = product.name;
  
  // Update rating
  const modalRating = document.getElementById('modal-rating');
  modalRating.innerHTML = `
    ${renderStars(product.rating)}
    <span class="modal-rating-text">(${product.rating})</span>
  `;
  
  // Update benefits
  const modalBenefits = document.getElementById('modal-benefits');
  modalBenefits.innerHTML = product.details.benefits.map(benefit => `<li>${benefit}</li>`).join('');
  
  // Update certifications
  const modalCertifications = document.getElementById('modal-certifications');
  modalCertifications.innerHTML = product.details.certifications.map(cert => 
    `<span class="modal-certification-badge">${cert}</span>`
  ).join('');
  
  // Update thumbnails
  const modalThumbnails = document.getElementById('modal-thumbnails');
  modalThumbnails.innerHTML = [product.image, product.hoverImage, product.image, product.hoverImage]
    .map((img, index) => 
      `<img src="${img}" alt="${product.name}" class="modal-thumbnail ${index === 0 ? 'active' : ''}">`
    ).join('');
  
  // Add contact button event listeners
  document.getElementById('modal-phone-btn').onclick = () => handleContactClick('phone', product);
  document.getElementById('modal-email-btn').onclick = () => handleContactClick('email', product);
  document.getElementById('modal-whatsapp-btn').onclick = () => handleContactClick('whatsapp', product);
  
  // Show modal
  modal.style.display = 'flex';
  
  // Reinitialize Lucide icons
  lucide.createIcons();
}

function closeProductModal() {
  const modal = document.getElementById('product-modal');
  if (modal) {
    modal.style.display = 'none';
  }
}

// Contact Functions
function handleContactClick(type, product) {
  const message = `Hi! I'm interested in ${product.name}. Could you please provide more information?`;
  
  switch (type) {
    case 'phone':
      window.open('tel:+919876543210');
      break;
    case 'email':
      window.open(`mailto:hello@paharigoodness.com?subject=Inquiry about ${product.name}&body=${encodeURIComponent(message)}`);
      break;
    case 'whatsapp':
      window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
      break;
  }
}

function handleWhatsAppClick() {
  const message = encodeURIComponent("Hi! I'm interested in Pahari Goodness products.");
  window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
}

// Contact Form
function handleContactForm(e) {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message')
  };
  
  // Clear previous errors
  clearFormErrors();
  
  // Validate form
  const errors = validateContactForm(data);
  if (Object.keys(errors).length > 0) {
    displayFormErrors(errors);
    return;
  }
  
  // Submit form
  submitContactForm(data);
}

function validateContactForm(data) {
  const errors = {};
  
  if (!data.name.trim()) {
    errors.name = 'Name is required';
  }
  
  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  if (!data.subject.trim()) {
    errors.subject = 'Subject is required';
  }
  
  if (!data.message.trim()) {
    errors.message = 'Message is required';
  } else if (data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long';
  }
  
  return errors;
}

function clearFormErrors() {
  const errorElements = document.querySelectorAll('.modern-error-message');
  errorElements.forEach(el => el.textContent = '');
  
  const inputElements = document.querySelectorAll('.modern-form-input, .modern-form-textarea');
  inputElements.forEach(el => el.classList.remove('error'));
}

function displayFormErrors(errors) {
  Object.keys(errors).forEach(field => {
    const errorElement = document.getElementById(`${field}-error`);
    const inputElement = document.getElementById(field);
    
    if (errorElement) {
      errorElement.textContent = errors[field];
    }
    
    if (inputElement) {
      inputElement.classList.add('error');
    }
  });
}

async function submitContactForm(data) {
  const submitBtn = document.getElementById('submit-btn');
  const submitMessage = document.getElementById('submit-message');
  
  // Show loading state
  submitBtn.disabled = true;
  submitBtn.innerHTML = `
    <div class="loading-spinner small"></div>
    Sending...
  
  `;
  
  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Show success message
    submitMessage.textContent = "Thank you for your message! We'll get back to you soon.";
    submitMessage.className = 'modern-submit-message success';
    submitMessage.style.display = 'block';
    
    // Reset form
    document.getElementById('contact-form').reset();
    
  } catch (error) {
    // Show error message
    submitMessage.textContent = 'Sorry, there was an error sending your message. Please try again.';
    submitMessage.className = 'modern-submit-message error';
    submitMessage.style.display = 'block';
  } finally {
    // Reset button
    submitBtn.disabled = false;
    submitBtn.innerHTML = 'SEND';
    
    // Hide message after 5 seconds
    setTimeout(() => {
      submitMessage.style.display = 'none';
    }, 5000);
  }
}

// Form input handlers
document.addEventListener('input', function(e) {
  if (e.target.matches('.modern-form-input, .modern-form-textarea')) {
    const field = e.target.name;
    const errorElement = document.getElementById(`${field}-error`);
    
    if (errorElement && errorElement.textContent) {
      errorElement.textContent = '';
      e.target.classList.remove('error');
    }
  }
});

// Window resize handler
function handleResize() {
  // Reinitialize any responsive elements if needed
}

// Utility Functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Add debounced scroll handler
window.addEventListener('scroll', debounce(handleScroll, 10));