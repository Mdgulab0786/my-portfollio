# Portfolio Website

## Overview

This is a full-stack portfolio website built with React and Express.js. It features a modern, responsive design showcasing a developer's skills, projects, and contact information. The application includes a contact form with backend storage, theme switching capabilities, and a comprehensive UI component library.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with custom styling (shadcn/ui)
- **State Management**: React Query for server state, React Context for theme management
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL (Neon Database with serverless driver)
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Storage**: PostgreSQL database storage with Drizzle ORM
- **Session Management**: Express sessions with PostgreSQL store support

## Key Components

### Frontend Components
- **Navigation**: Responsive navigation with mobile hamburger menu and smooth scrolling
- **Hero Section**: Landing area with introduction and call-to-action buttons
- **About Section**: Developer introduction with highlight cards
- **Skills Section**: Animated skill bars with progress indicators
- **Projects Section**: Project showcase with technology tags and links
- **Contact Section**: Contact form with validation and submission handling
- **Theme Provider**: Light/dark mode toggle with system preference detection

### Backend Components
- **API Routes**: RESTful endpoints for contact form submission and data retrieval
- **Storage Layer**: Abstract storage interface with PostgreSQL database implementation
- **Database Schema**: Drizzle schema definitions for users and contacts
- **Database Connection**: Neon PostgreSQL serverless driver with connection pooling
- **Validation**: Zod schema validation for form inputs
- **Error Handling**: Centralized error handling middleware

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form in React component
   - Form data validated on client-side
   - POST request sent to `/api/contact` endpoint
   - Backend validates data using Zod schema
   - Contact information stored in PostgreSQL database via Drizzle ORM
   - Success/error response sent back to client
   - Toast notification displayed to user

2. **Theme Management**:
   - Theme preference stored in localStorage
   - Context provider manages theme state
   - CSS variables updated dynamically
   - System preference detection for default theme

3. **Navigation**:
   - Single-page application with smooth scrolling
   - Wouter handles route management
   - Mobile-responsive navigation with sheet overlay

## External Dependencies

### Frontend Dependencies
- **@radix-ui/react-***: Headless UI components for accessibility
- **@tanstack/react-query**: Server state management and caching
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library
- **wouter**: Lightweight routing library
- **react-hook-form**: Form handling and validation
- **date-fns**: Date manipulation utilities

### Backend Dependencies
- **drizzle-orm**: Type-safe ORM for PostgreSQL
- **@neondatabase/serverless**: Neon Database serverless driver
- **zod**: Runtime type validation
- **express**: Web framework
- **connect-pg-simple**: PostgreSQL session store

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type checking
- **@replit/vite-plugin-***: Replit-specific development tools

## Deployment Strategy

### Development
- Vite development server with HMR (Hot Module Replacement)
- Express server with middleware for development features
- TypeScript compilation with strict type checking
- Replit-specific plugins for development environment

### Production Build
- Vite builds frontend to `dist/public`
- esbuild bundles server code to `dist/index.js`
- Static file serving for production assets
- Environment variable configuration for database connection

### Database Configuration
- Drizzle configuration for PostgreSQL dialect
- Environment variable for `DATABASE_URL`
- Migration files generated in `./migrations` directory
- Schema definitions in `./shared/schema.ts`

## Changelog

```
Changelog:
- July 06, 2025. Initial setup
- July 06, 2025. Added PostgreSQL database integration with Drizzle ORM
  - Created database connection layer (server/db.ts)
  - Migrated from in-memory storage to DatabaseStorage
  - Contact form now stores data in PostgreSQL database
  - Database tables created: users, contacts
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```