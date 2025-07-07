# Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and PostgreSQL.

## Features

- 🎨 Modern, responsive design with dark/light mode
- 🚀 Built with React 18 and TypeScript
- 💅 Styled with Tailwind CSS and Radix UI components
- 📱 Mobile-first responsive design
- ⚡ Fast development with Vite
- 🗄️ PostgreSQL database with Drizzle ORM
- 📧 Working contact form with database storage
- 🎭 Smooth animations and transitions
- 🌙 Dark/light theme toggle

## Tech Stack

### Frontend
- React 18 with TypeScript
- Tailwind CSS for styling
- Radix UI for accessible components
- Framer Motion for animations
- React Query for state management
- Wouter for routing

### Backend
- Node.js with Express
- PostgreSQL database
- Drizzle ORM
- Zod for validation
- TypeScript

### Development
- Vite for build tooling
- ESBuild for server bundling
- Drizzle Kit for database migrations

## Getting Started

### Prerequisites
- Node.js 18 or higher
- PostgreSQL database (or use the provided Neon database)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Copy the example env file
cp .env.example .env

# Add your database URL
DATABASE_URL=your_postgresql_connection_string
```

4. Push database schema:
```bash
npm run db:push
```

5. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run check` - Run TypeScript checks
- `npm run db:push` - Push database schema changes

## Project Structure

```
├── client/              # Frontend React application
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── hooks/       # Custom React hooks
│   │   ├── lib/         # Utility functions
│   │   ├── pages/       # Page components
│   │   └── index.css    # Global styles
│   └── index.html       # HTML template
├── server/              # Backend Express application
│   ├── db.ts           # Database connection
│   ├── routes.ts       # API routes
│   ├── storage.ts      # Data access layer
│   └── index.ts        # Server entry point
├── shared/              # Shared types and schemas
│   └── schema.ts       # Database schema definitions
└── package.json        # Dependencies and scripts
```

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your `DATABASE_URL` environment variable
4. Deploy!

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist/public` folder to Netlify
3. Set up environment variables for the API

### Railway/Render
1. Connect your GitHub repository
2. Add environment variables
3. Use the start script: `npm run start`

## Environment Variables

```bash
DATABASE_URL=your_postgresql_connection_string
NODE_ENV=production
```

## Features Overview

### Contact Form
- Form validation on client and server
- Stores submissions in PostgreSQL database
- Toast notifications for user feedback
- Email validation

### Theme System
- Automatic system theme detection
- Manual light/dark mode toggle
- Consistent theme across all components
- CSS variables for easy customization

### Responsive Design
- Mobile-first approach
- Smooth scrolling navigation
- Animated skill progress bars
- Interactive project showcase

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and checks
5. Submit a pull request

## License

MIT License - feel free to use this project for your own portfolio!

## Contact

- Email: team66415@gmail.com
- GitHub: https://github.com/Mdgulab0786
- LinkedIn: https://www.linkedin.com/in/md-gulab-team66/