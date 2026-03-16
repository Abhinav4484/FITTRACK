# FITTRACK - Cyberpunk Fitness Tracker

## 🚀 Overview

FITTRACK is a cutting-edge fitness tracking application that combines modern web technologies with a stunning Cyberpunk 2077-inspired aesthetic. Built with Spring Boot backend and advanced frontend technologies, it delivers a premium fitness tracking experience with 60fps animations and smooth performance.

## ✨ Features

### 🎨 Cyberpunk 2077 Theme
- **Authentic Cyberpunk Aesthetics**: Neon colors, holographic effects, and futuristic UI
- **Original Game Fonts**: Audiowide font for authentic Cyberpunk branding
- **Animated Backgrounds**: Dynamic cyberpunk backgrounds with scanline effects
- **Bootup Sequence**: Game-like startup animation for immersive experience
- **Theme Switching**: Multiple cyberpunk themes (Default, Neon Blue, Matrix Green)

### 🏃‍♂️ Fitness Tracking
- **Workout Management**: Add, track, and manage workouts with duration tracking
- **Progress Visualization**: Interactive charts and statistics
- **Nutrition Guidance**: Daily meal recommendations with macro tracking
- **Health Metrics**: Comprehensive health and fitness data tracking
- **User Profiles**: Complete user management with profile customization

### 🔧 Advanced Features
- **60fps Performance**: Optimized animations and smooth scrolling
- **Hardware Acceleration**: GPU-accelerated animations for maximum performance
- **Particle Effects**: Interactive particle explosions and sound wave effects
- **Matrix Rain**: Animated matrix-style background effects
- **Glitch Effects**: Cyberpunk-style glitch animations on interactions
- **Holographic Text**: Dynamic holographic text effects
- **Real-time Updates**: Live data updates and statistics

### 🛡️ Security & Data
- **User Authentication**: Secure login and registration system
- **Password Recovery**: Forgot password functionality with email integration
- **Data Persistence**: Settings and preferences saved locally
- **API Integration**: RESTful API endpoints for all functionality

## 🏗️ Technical Architecture

### Backend (Spring Boot)
- **Framework**: Spring Boot 3.x with Java
- **Database**: MySQL with JPA/Hibernate
- **API**: RESTful endpoints for all operations
- **Security**: Basic authentication and password management
- **Controllers**: 
  - `UserController`: User management, authentication, password recovery
  - `WorkoutController`: Workout CRUD operations and user-specific queries
  - `GoalController`: Goal tracking and management
  - `ProgressController`: Progress tracking and analytics
  - `HealthDetailsController`: Health metrics management
  - `ActivityController`: Activity tracking

### Frontend
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Advanced animations, gradients, and cyberpunk effects
- **JavaScript**: ES6+ with advanced cyberpunk effects and animations
- **Bootstrap 5**: Responsive design framework
- **Chart.js**: Interactive data visualization
- **Fonts**: Google Fonts (Audiowide, Rajdhani, Orbitron, Exo 2)

### Performance Optimizations
- **Hardware Acceleration**: `transform: translateZ(0)` for GPU acceleration
- **Smooth Scrolling**: Optimized scroll behavior with `requestAnimationFrame`
- **Efficient Animations**: CSS transforms and opacity changes for 60fps
- **Lazy Loading**: Optimized resource loading and rendering
- **Memory Management**: Proper cleanup of event listeners and animations

## 🎮 Cyberpunk Effects

### Visual Effects
- **Neon Glow**: Dynamic neon lighting effects on hover
- **Holographic Text**: Animated gradient text effects
- **Particle Systems**: Interactive particle explosions on click
- **Sound Waves**: Visual sound wave effects on button interactions
- **Matrix Rain**: Animated binary rain background effect
- **Glitch Animations**: Cyberpunk-style text glitch effects

### Interactive Elements
- **Hover Effects**: Advanced hover animations with color transitions
- **Click Effects**: Particle explosions and sound wave animations
- **Form Interactions**: Dynamic form field highlighting and effects
- **Navigation**: Smooth sidebar animations and active state indicators

## 📱 Responsive Design

- **Mobile-First**: Optimized for all device sizes
- **Adaptive Layout**: Sidebar collapses on mobile devices
- **Touch-Friendly**: Optimized touch interactions for mobile
- **Performance**: Maintains 60fps on mobile devices

## 🚀 Getting Started

### Prerequisites
- Java 17+
- MySQL 8.0+
- Maven 3.6+

### Installation
1. Clone the repository
2. Configure MySQL database connection in `application.properties`
3. Run database migrations
4. Start the Spring Boot application
5. Open browser to `http://localhost:8080`

### Database Setup
```sql
-- Run the migration script
source migration.sql
```

## 🎯 Key Features Implementation

### Bootup Sequence
- Authentic game-like startup animation
- Progress bar with cyberpunk styling
- Smooth fade-out transition
- 3.5-second duration for optimal UX

### Theme System
- Dynamic CSS variable switching
- Real-time theme preview
- Persistent theme storage
- Multiple cyberpunk variants

### Settings Management
- Unit scale preferences (Metric/Imperial)
- Notification settings
- Theme customization
- Local storage persistence

### Advanced Animations
- Matrix rain background effect
- Particle explosion system
- Holographic text effects
- Glitch animations
- Sound wave visualizations

## 🔧 Configuration

### Environment Variables
- `DB_URL`: Database connection URL
- `DB_USERNAME`: Database username
- `DB_PASSWORD`: Database password
- `PORT`: Application port (default: 8080)

### Customization
- Modify CSS variables in `cyberpunk.css` for color schemes
- Adjust animation timings in `cyberpunk-effects.js`
- Customize bootup sequence duration
- Modify particle effects parameters

## 📊 Performance Metrics

- **60fps Animations**: Smooth performance across all devices
- **Hardware Acceleration**: GPU-accelerated rendering
- **Optimized Loading**: Efficient resource loading
- **Memory Efficient**: Proper cleanup and memory management
- **Responsive**: Maintains performance on mobile devices

## 🎨 Design Philosophy

FITTRACK embodies the cyberpunk aesthetic through:
- **Neon Color Palette**: Electric blues, magentas, and yellows
- **Futuristic Typography**: Bold, angular fonts with glowing effects
- **Holographic Elements**: Transparent overlays with gradient effects
- **Interactive Feedback**: Immediate visual response to user actions
- **Immersive Experience**: Game-like interface design

## 🔮 Future Enhancements

- **AI Integration**: Smart workout recommendations
- **Wearable Device Support**: Real-time health monitoring
- **Social Features**: Community challenges and leaderboards
- **Advanced Analytics**: Machine learning insights
- **VR Support**: Virtual reality fitness experiences

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request


---

**Welcome to the future of fitness tracking**


