# Mohd Kaif Portfolio Website

## Overview

This is a modern, responsive portfolio website built for Mohd Kaif, a data scientist. The application showcases professional experience, technical skills, projects, and contact information through an interactive, visually appealing interface with a tech-themed design.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Animations**: Framer Motion for smooth transitions and interactive elements
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js 20 with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL 16 with Drizzle ORM
- **Session Management**: Built-in session handling with connect-pg-simple
- **Development**: TSX for TypeScript execution in development

### Design System
- **Color Palette**: Dark tech theme with electric blue, matrix green, and data gold accents
- **Typography**: Multiple font families (Inter, JetBrains Mono, Orbitron)
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Animations**: Particle effects, hover animations, and scroll-triggered animations

## Key Components

### Frontend Components
- **Navigation**: Sticky navigation with smooth scrolling
- **Hero Section**: Animated landing area with typing animation and floating particles
- **About Section**: Professional introduction with visual elements
- **Skills Section**: Interactive skill cards with hover effects and progress indicators
- **Experience Section**: Timeline-based work history display
- **Projects Section**: Grid layout showcasing data science projects
- **Education Section**: Academic background and certifications
- **Contact Section**: Contact form and information display

### Backend Components
- **Storage Interface**: Abstracted storage layer supporting in-memory and database implementations
- **User Management**: Basic user schema with authentication capabilities
- **API Routes**: RESTful endpoints with Express.js
- **Database Schema**: Drizzle ORM schema definitions with Zod validation

### UI System
- **Component Library**: Comprehensive set of reusable UI components
- **Form Handling**: React Hook Form integration with Zod validation
- **Toast Notifications**: Radix UI toast system for user feedback
- **Responsive Utilities**: Custom hooks for mobile detection and responsive behavior

## Data Flow

### Frontend Data Flow
1. React components manage local state and UI interactions
2. TanStack Query handles API calls and server state caching
3. Form submissions use React Hook Form with Zod validation
4. Animations are triggered by user interactions and scroll events
5. Responsive behavior adapts to screen size changes

### Backend Data Flow
1. Express middleware handles request logging and error handling
2. Routes process API requests and interact with storage layer
3. Storage interface abstracts database operations
4. Drizzle ORM manages database queries and schema validation
5. Session management maintains user state across requests

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **UI Libraries**: Radix UI components, shadcn/ui, Framer Motion
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Forms**: React Hook Form, Hookform Resolvers
- **Utilities**: clsx, class-variance-authority, date-fns

### Backend Dependencies
- **Server**: Express.js, Node.js HTTP server
- **Database**: Drizzle ORM, @neondatabase/serverless, connect-pg-simple
- **Development**: TSX, Vite, ESBuild
- **Validation**: Zod, drizzle-zod

### Development Tools
- **TypeScript**: Full TypeScript support with strict mode
- **Vite**: Fast development server with HMR
- **Replit Integration**: Cartographer plugin and runtime error overlay
- **Build Tools**: ESBuild for server bundling, Vite for client bundling

## Deployment Strategy

### Development Environment
- **Replit Platform**: Configured for Node.js 20, web, and PostgreSQL 16 modules
- **Hot Reload**: Vite development server with instant updates
- **Environment Variables**: DATABASE_URL for PostgreSQL connection
- **Port Configuration**: Development server on port 5000

### Production Build
- **Client Build**: Vite builds optimized static assets to `dist/public`
- **Server Build**: ESBuild bundles server code to `dist/index.js`
- **Deployment Target**: Autoscale deployment on Replit
- **Database**: PostgreSQL with Drizzle migrations

### Database Management
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Migrations**: Automated schema migrations with `drizzle-kit`
- **Connection**: Neon Database serverless connection
- **Schema**: Centralized schema definitions in `shared/schema.ts`

## Changelog

```
Changelog:
- June 26, 2025. Initial setup
- June 26, 2025. Added resume download functionality with actual PDF file
- June 26, 2025. Created comprehensive Profile section with professional photo
- June 26, 2025. Enhanced photo styling with warm green/white background effects
- June 26, 2025. Updated all content with latest resume data and achievements
- June 26, 2025. Added Profile navigation link and section integration
- June 26, 2025. Removed internship section from experience timeline
- June 26, 2025. Updated positioning to "Data Analyst & Aspiring Data Scientist"
- June 26, 2025. Removed PostgreSQL, Tableau, ETL Process, Business Intelligence from skills
- June 26, 2025. Confirmed LinkedIn icon is clickable across all sections
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```