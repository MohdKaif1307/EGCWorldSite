# Emmanuel Global Consultancies (EGC World)

## Overview

Emmanuel Global Consultancies (EGC World) is a comprehensive business consultancy platform that provides end-to-end services including compliance management, corporate training, brand development, and regulatory project implementation. The application is a full-stack web platform built with modern technologies to showcase services, share insights, and facilitate client engagement through a professional corporate website.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development patterns
- **Routing**: Wouter for lightweight client-side routing without React Router dependencies
- **UI Framework**: Radix UI components with shadcn/ui design system for consistent, accessible interface components
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Language**: TypeScript throughout the stack for consistency and type safety
- **Database ORM**: Drizzle ORM with PostgreSQL for type-safe database operations
- **Session Management**: Connect-pg-simple for PostgreSQL-backed session storage
- **Development**: Custom Vite integration for seamless full-stack development experience

### Database Design
- **Primary Database**: PostgreSQL with connection pooling via Neon Database serverless
- **Schema Management**: Drizzle Kit for migrations and schema versioning
- **Type Safety**: Drizzle-Zod integration for runtime validation matching database schema
- **Current Schema**: User management system with username/password authentication foundation

### Content Management Strategy
- **Static Content**: Pages for services, about, insights, and contact information
- **SEO Optimization**: Custom SEO component for meta tags, Open Graph, and structured data
- **Blog System**: Insights section with article content and metadata management
- **Form Processing**: Contact forms with validation and submission handling

### Development Workflow
- **Monorepo Structure**: Shared types and utilities between client and server
- **Hot Reload**: Vite HMR for both frontend and backend development
- **Type Checking**: Strict TypeScript configuration across all packages
- **Asset Management**: Vite-based asset optimization and bundling

## External Dependencies

### Core Infrastructure
- **Database**: Neon Database (PostgreSQL) serverless platform for scalable data storage
- **Hosting**: Designed for deployment on platforms supporting Node.js applications
- **CDN**: Font loading via Google Fonts for typography consistency

### UI and Design
- **Component Library**: Radix UI primitives for accessible, unstyled components
- **Icons**: Lucide React for consistent iconography throughout the application
- **Animations**: Embla Carousel for interactive content presentation
- **Design Tokens**: CSS custom properties for maintainable theming system

### Development Tools
- **Build System**: Vite with custom plugins for Replit integration and error overlays
- **Validation**: Zod for runtime type validation and form schema definition
- **Date Handling**: date-fns for date formatting and manipulation utilities
- **Class Management**: clsx and tailwind-merge for conditional CSS class handling

### Form and Data Processing
- **Form Validation**: Hookform resolvers with Zod for integrated form validation
- **HTTP Client**: Fetch API with custom wrapper functions for consistent error handling
- **Query Management**: TanStack Query for caching, synchronization, and background updates

The architecture emphasizes type safety, developer experience, and scalable content management while maintaining a clean separation between presentation and business logic layers.