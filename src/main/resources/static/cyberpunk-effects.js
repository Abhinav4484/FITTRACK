// FITTRACK CYBERPUNK - Advanced Features & Animations
// Enhanced JavaScript for 60fps performance and cyberpunk effects

class CyberpunkEffects {
  constructor() {
    this.init();
  }

  init() {
    this.setupPerformanceOptimizations();
    this.setupCyberpunkAnimations();
    this.setupThemeSwitcher();
    this.setupAdvancedInteractions();
    this.setupDataVisualization();
  }

  setupPerformanceOptimizations() {
    // Enable hardware acceleration for all animated elements
    const animatedElements = document.querySelectorAll('.card, .nav-link, .btn, .stat-card, .progress-card, .workout-card, .nutrition-card, .settings-card, .form-card, .details-card');
    
    animatedElements.forEach(element => {
      element.style.transform = 'translateZ(0)';
      element.style.willChange = 'transform';
      element.style.backfaceVisibility = 'hidden';
    });

    // Optimize scroll performance
    let ticking = false;
    const updateScrollEffects = () => {
      this.updateParallaxEffects();
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollEffects);
        ticking = true;
      }
    });
  }

  setupCyberpunkAnimations() {
    // Matrix-style rain effect
    this.createMatrixRain();
    
    // Glitch effects for buttons
    this.setupGlitchEffects();
    
    // Neon glow animations
    this.setupNeonGlowEffects();
    
    // Holographic text effects
    this.setupHolographicText();
  }

  createMatrixRain() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.1';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = '01';
    const charArray = chars.split('');
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ffff';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    setInterval(draw, 50);
  }

  setupGlitchEffects() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        this.addGlitchEffect(button);
      });
    });
  }

  addGlitchEffect(element) {
    const originalText = element.textContent;
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    let glitchCount = 0;
    const glitchInterval = setInterval(() => {
      if (glitchCount < 3) {
        element.textContent = originalText.split('').map(char => 
          Math.random() < 0.1 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char
        ).join('');
        glitchCount++;
      } else {
        element.textContent = originalText;
        clearInterval(glitchInterval);
      }
    }, 100);
  }

  setupNeonGlowEffects() {
    const neonElements = document.querySelectorAll('.brand-text h1, .workout-header, .nutrition-header, .progress-header, .settings-header, .profile-header, .details-header, .about-title, .contact-title');
    
    neonElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        element.style.textShadow = '0 0 50px rgba(0, 255, 255, 1), 0 0 100px rgba(255, 0, 255, 0.8)';
        element.style.transform = 'scale(1.05)';
      });
      
      element.addEventListener('mouseleave', () => {
        element.style.textShadow = '0 0 30px rgba(0, 255, 255, 0.8)';
        element.style.transform = 'scale(1)';
      });
    });
  }

  setupHolographicText() {
    const holographicElements = document.querySelectorAll('.form-title, .section-title, .meal-title');
    
    holographicElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        element.style.background = 'linear-gradient(45deg, #ff00ff, #00ffff, #ffff00, #ff00ff)';
        element.style.backgroundSize = '400% 400%';
        element.style.animation = 'holographicShift 2s ease-in-out infinite';
      });
      
      element.addEventListener('mouseleave', () => {
        element.style.background = 'linear-gradient(135deg, var(--cp-neon-pink), var(--cp-neon-cyan))';
        element.style.animation = 'none';
      });
    });
  }

  setupThemeSwitcher() {
    const themeSelect = document.getElementById('themeSelect');
    if (themeSelect) {
      themeSelect.addEventListener('change', (e) => {
        this.applyTheme(e.target.value);
        this.saveTheme(e.target.value);
      });
    }
    
    // Load saved theme on page load
    this.loadTheme();
  }

  applyTheme(theme) {
    const root = document.documentElement;
    
    switch(theme) {
      case 'neon-blue':
        root.style.setProperty('--cp-primary', '#0066ff');
        root.style.setProperty('--cp-secondary', '#00ccff');
        root.style.setProperty('--cp-neon-cyan', '#00ccff');
        root.style.setProperty('--cp-neon-pink', '#0066ff');
        root.style.setProperty('--cp-neon-yellow', '#0066ff');
        root.style.setProperty('--cp-neon-green', '#00ccff');
        root.style.setProperty('--cp-neon-red', '#ff3366');
        break;
      case 'matrix-green':
        root.style.setProperty('--cp-primary', '#00ff00');
        root.style.setProperty('--cp-secondary', '#00cc00');
        root.style.setProperty('--cp-neon-cyan', '#00ff00');
        root.style.setProperty('--cp-neon-pink', '#00cc00');
        root.style.setProperty('--cp-neon-yellow', '#00ff00');
        root.style.setProperty('--cp-neon-green', '#00ff00');
        root.style.setProperty('--cp-neon-red', '#ff6666');
        break;
      default: // cyberpunk
        root.style.setProperty('--cp-primary', '#ff00ff');
        root.style.setProperty('--cp-secondary', '#00ffff');
        root.style.setProperty('--cp-neon-cyan', '#00ffff');
        root.style.setProperty('--cp-neon-pink', '#ff00ff');
        root.style.setProperty('--cp-neon-yellow', '#ffff00');
        root.style.setProperty('--cp-neon-green', '#00ff88');
        root.style.setProperty('--cp-neon-red', '#ff0066');
    }
  }

  saveTheme(theme) {
    localStorage.setItem('fittrackTheme', theme);
    // Also update the theme preview if it exists
    const themePreview = document.getElementById('themePreview');
    if (themePreview) {
      themePreview.className = `theme-preview ${theme}`;
    }
  }

  loadTheme() {
    const savedTheme = localStorage.getItem('fittrackTheme');
    if (savedTheme) {
      this.applyTheme(savedTheme);
      // Update theme select if it exists
      const themeSelect = document.getElementById('themeSelect');
      if (themeSelect) {
        themeSelect.value = savedTheme;
      }
      // Update theme preview if it exists
      const themePreview = document.getElementById('themePreview');
      if (themePreview) {
        themePreview.className = `theme-preview ${savedTheme}`;
      }
    }
  }

  setupAdvancedInteractions() {
    // Particle effects on click
    this.setupParticleEffects();
    
    // Sound effects (visual feedback)
    this.setupSoundEffects();
    
    // Advanced hover effects
    this.setupAdvancedHoverEffects();
  }

  setupParticleEffects() {
    document.addEventListener('click', (e) => {
      this.createParticleExplosion(e.clientX, e.clientY);
    });
  }

  createParticleExplosion(x, y) {
    const particleCount = 20;
    const colors = ['#ff00ff', '#00ffff', '#ffff00', '#00ff88'];
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.style.position = 'fixed';
      particle.style.left = x + 'px';
      particle.style.top = y + 'px';
      particle.style.width = '4px';
      particle.style.height = '4px';
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      particle.style.borderRadius = '50%';
      particle.style.pointerEvents = 'none';
      particle.style.zIndex = '9999';
      particle.style.boxShadow = '0 0 10px currentColor';
      
      document.body.appendChild(particle);
      
      const angle = (Math.PI * 2 * i) / particleCount;
      const velocity = 50 + Math.random() * 50;
      const vx = Math.cos(angle) * velocity;
      const vy = Math.sin(angle) * velocity;
      
      let posX = x;
      let posY = y;
      let opacity = 1;
      
      const animate = () => {
        posX += vx * 0.016;
        posY += vy * 0.016;
        opacity -= 0.02;
        
        particle.style.left = posX + 'px';
        particle.style.top = posY + 'px';
        particle.style.opacity = opacity;
        
        if (opacity > 0) {
          requestAnimationFrame(animate);
        } else {
          particle.remove();
        }
      };
      
      requestAnimationFrame(animate);
    }
  }

  setupSoundEffects() {
    // Visual sound wave effects
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        this.createSoundWave(button);
      });
    });
  }

  createSoundWave(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const wave = document.createElement('div');
    wave.style.position = 'fixed';
    wave.style.left = centerX + 'px';
    wave.style.top = centerY + 'px';
    wave.style.width = '0px';
    wave.style.height = '0px';
    wave.style.border = '2px solid #00ffff';
    wave.style.borderRadius = '50%';
    wave.style.pointerEvents = 'none';
    wave.style.zIndex = '9999';
    wave.style.transform = 'translate(-50%, -50%)';
    
    document.body.appendChild(wave);
    
    let size = 0;
    let opacity = 1;
    
    const animate = () => {
      size += 10;
      opacity -= 0.05;
      
      wave.style.width = size + 'px';
      wave.style.height = size + 'px';
      wave.style.opacity = opacity;
      
      if (opacity > 0) {
        requestAnimationFrame(animate);
      } else {
        wave.remove();
      }
    };
    
    requestAnimationFrame(animate);
  }

  setupAdvancedHoverEffects() {
    const cards = document.querySelectorAll('.card, .workout-card, .nutrition-card, .progress-card, .settings-card, .form-card, .details-card');
    
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        this.addHolographicBorder(card);
      });
      
      card.addEventListener('mouseleave', () => {
        this.removeHolographicBorder(card);
      });
    });
  }

  addHolographicBorder(element) {
    element.style.border = '2px solid transparent';
    element.style.background = 'linear-gradient(45deg, #ff00ff, #00ffff, #ffff00, #ff00ff) border-box';
    element.style.backgroundClip = 'border-box';
    element.style.animation = 'holographicShift 2s linear infinite';
  }

  removeHolographicBorder(element) {
    element.style.border = '2px solid var(--cp-neon-cyan)';
    element.style.background = 'linear-gradient(135deg, rgba(26, 26, 46, 0.9) 0%, rgba(22, 33, 62, 0.9) 100%)';
    element.style.animation = 'none';
  }

  setupDataVisualization() {
    // Enhanced chart animations
    this.enhanceCharts();
    
    // Real-time data updates
    this.setupRealTimeUpdates();
  }

  enhanceCharts() {
    const charts = document.querySelectorAll('canvas');
    
    charts.forEach(chart => {
      chart.addEventListener('mouseenter', () => {
        chart.style.filter = 'drop-shadow(0 0 20px rgba(0, 255, 255, 0.5))';
      });
      
      chart.addEventListener('mouseleave', () => {
        chart.style.filter = 'none';
      });
    });
  }

  setupRealTimeUpdates() {
    // Simulate real-time data updates
    setInterval(() => {
      this.updateRealTimeData();
    }, 5000);
  }

  updateRealTimeData() {
    const statValues = document.querySelectorAll('.stat-value');
    
    statValues.forEach(stat => {
      const currentValue = parseInt(stat.textContent);
      if (!isNaN(currentValue)) {
        const newValue = currentValue + Math.floor(Math.random() * 3) - 1;
        if (newValue >= 0) {
          stat.textContent = newValue;
          this.addGlowEffect(stat);
        }
      }
    });
  }

  addGlowEffect(element) {
    element.style.textShadow = '0 0 20px rgba(0, 255, 255, 0.8)';
    setTimeout(() => {
      element.style.textShadow = '0 0 10px rgba(0, 255, 255, 0.3)';
    }, 1000);
  }

  updateParallaxEffects() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.bootup-overlay');
    
    parallaxElements.forEach(element => {
      const speed = 0.5;
      element.style.transform = `translateY(${scrolled * speed}px)`;
    });
  }
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes holographicShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  @keyframes cyberpunkGlow {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }
  
  @keyframes matrixRain {
    0% { transform: translateY(-100vh); }
    100% { transform: translateY(100vh); }
  }
  
  .cyberpunk-glow {
    animation: cyberpunkGlow 2s ease-in-out infinite;
  }
  
  .holographic-text {
    background: linear-gradient(45deg, #ff00ff, #00ffff, #ffff00, #ff00ff);
    background-size: 400% 400%;
    animation: holographicShift 3s ease-in-out infinite;
  }
`;

document.head.appendChild(style);

// Initialize cyberpunk effects immediately
document.addEventListener('DOMContentLoaded', () => {
  new CyberpunkEffects();
});

// Also initialize if DOM is already loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new CyberpunkEffects();
  });
} else {
  new CyberpunkEffects();
}

// Export for use in other scripts
window.CyberpunkEffects = CyberpunkEffects;
