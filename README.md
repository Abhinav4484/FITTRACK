# FitTrack

A fitness tracking web application built with Spring Boot and MySQL.

## Tech Stack

- **Backend**: Spring Boot 3.x, Java 17
- **Database**: MySQL 8.0 with JPA/Hibernate
- **Frontend**: HTML5, CSS3, JavaScript, Bootstrap 5, Chart.js

## Features

- User registration and login
- Workout logging and management
- Progress tracking with charts
- Goal setting and monitoring
- Nutrition guidance
- Health metrics tracking
- Profile customization

## Getting Started

### Prerequisites

- Java 17+
- MySQL 8.0+
- Maven 3.6+

### Setup

1. Clone the repository
   ```bash
   git clone https://github.com/Abhinav4484/FITTRACK.git
   cd FITTRACK
   ```

2. Configure your database in `src/main/resources/application.properties`
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/fittrack
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   ```

3. Run the database migration
   ```bash
   mysql -u your_username -p fittrack < migration.sql
   ```

4. Build and run
   ```bash
   mvn spring-boot:run
   ```

5. Open your browser at `http://localhost:8080`

## Project Structure

```
src/
├── main/
│   ├── java/com/baddie/fittrack/
│   │   ├── controller/      # REST controllers
│   │   ├── model/           # Entity classes
│   │   └── Repository/      # JPA repositories
│   └── resources/
│       ├── static/          # Frontend files (HTML, CSS, JS)
│       └── application.properties
└── test/
```

## API Endpoints

| Controller | Description |
|---|---|
| UserController | Registration, login, password recovery |
| WorkoutController | Workout CRUD operations |
| GoalController | Goal management |
| ProgressController | Progress tracking |
| HealthDetailsController | Health metrics |
| ActivityController | Activity logging |

## License

MIT License
