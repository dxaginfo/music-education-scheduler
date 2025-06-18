# Music Education Scheduler

A comprehensive web application designed to streamline the management of music lessons, student progress tracking, and teacher scheduling.

## Overview

The Music Education Scheduler aims to simplify administrative tasks for music schools, independent teachers, and students while enhancing communication and organization. This platform provides robust tools for scheduling, student management, resource sharing, and more.

## Key Features

- **Lesson Scheduling System**: Calendar interface with drag-and-drop functionality, recurring lessons, and room assignment
- **Student Management**: Progress tracking, assignment management, and family linking
- **Teacher Management**: Availability settings, specialization tagging, and workload monitoring
- **Communication Tools**: Automated reminders, messaging system, and announcement broadcasts
- **Payment Processing**: Invoicing, recurring payments, and financial reporting
- **Practice Management**: Practice logs, goal setting, and teacher feedback system
- **Resource Library**: Sheet music repository, instructional videos, and custom uploads
- **Reporting & Analytics**: Attendance reports, progress metrics, and performance analytics

## Technology Stack

### Frontend
- React.js with TypeScript
- Redux for state management
- Material UI components
- FullCalendar.js for calendar interface
- Formik with Yup validation
- Styled-components for styling

### Backend
- Node.js with Express
- RESTful API architecture
- JWT authentication with OAuth2
- Prisma ORM for database interaction

### Database
- PostgreSQL for data storage
- Redis for caching and session management

### Infrastructure
- Docker and Docker Compose for containerization
- AWS/Google Cloud for hosting
- GitHub Actions for CI/CD
- Sentry for error tracking

## Getting Started

### Prerequisites

- Node.js (v16.x or higher)
- npm (v8.x or higher)
- PostgreSQL (v14.x or higher)
- Redis (v6.x or higher)
- Docker and Docker Compose (optional, for containerized setup)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dxaginfo/music-education-scheduler.git
   cd music-education-scheduler
   ```

2. Install dependencies:
   ```bash
   # Install backend dependencies
   cd server
   npm install

   # Install frontend dependencies
   cd ../client
   npm install
   ```

3. Set up environment variables:
   - Create `.env` files in both `server` and `client` directories based on the provided `.env.example` files

4. Set up the database:
   ```bash
   cd server
   npm run db:migrate
   npm run db:seed # Optional, to populate with sample data
   ```

5. Start the development servers:
   ```bash
   # Start backend server
   cd server
   npm run dev

   # Start frontend development server
   cd ../client
   npm start
   ```

### Docker Setup

1. Build and start the containers:
   ```bash
   docker-compose up -d
   ```

2. Access the application at `http://localhost:3000`

## Project Structure

```
music-education-scheduler/
├── client/                 # Frontend React application
│   ├── public/             # Static files
│   ├── src/                # Source code
│   │   ├── assets/         # Images, fonts, etc.
│   │   ├── components/     # Reusable UI components
│   │   ├── contexts/       # React contexts
│   │   ├── hooks/          # Custom React hooks
│   │   ├── layouts/        # Page layouts
│   │   ├── pages/          # Page components
│   │   ├── services/       # API service integration
│   │   ├── store/          # Redux store configuration
│   │   ├── types/          # TypeScript type definitions
│   │   ├── utils/          # Utility functions
│   │   ├── App.tsx         # Main App component
│   │   └── index.tsx       # Entry point
│   └── package.json        # Frontend dependencies
│
├── server/                 # Backend Node.js/Express application
│   ├── prisma/             # Prisma schema and migrations
│   ├── src/                # Source code
│   │   ├── config/         # Configuration files
│   │   ├── controllers/    # Request handlers
│   │   ├── middleware/     # Express middleware
│   │   ├── models/         # Data models
│   │   ├── routes/         # API routes
│   │   ├── services/       # Business logic
│   │   ├── utils/          # Utility functions
│   │   └── app.js          # Express app setup
│   └── package.json        # Backend dependencies
│
├── docker-compose.yml      # Docker Compose configuration
├── .github/                # GitHub Actions workflows
├── .gitignore              # Git ignore file
└── README.md               # Project documentation
```

## API Documentation

API documentation is available at `/api/docs` when running the server locally, powered by Swagger UI.

## Database Schema

The database schema includes the following main entities:
- Users (Admin, Teacher, Student, Parent)
- Profiles (Teacher, Student)
- Lessons
- Schedules
- Enrollments
- Attendance
- Practice Logs
- Resources
- Payments
- Invoices
- Notifications

Detailed schema documentation is available in the project's wiki.

## Deployment

### Production Deployment

1. Build the frontend for production:
   ```bash
   cd client
   npm run build
   ```

2. Configure production environment variables for the server

3. Deploy using Docker:
   ```bash
   docker-compose -f docker-compose.prod.yml up -d
   ```

### CI/CD Pipeline

The project uses GitHub Actions for continuous integration and deployment:
- Automated testing on pull requests
- Automated builds and deployments to staging/production environments
- Code quality checks and linting

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Prisma](https://www.prisma.io/)
- [Material UI](https://mui.com/)
- [FullCalendar](https://fullcalendar.io/)