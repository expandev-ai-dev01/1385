# Ale Hotéis Backend API

Backend API for Ale Hotéis showcase website.

## Technology Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **Architecture**: REST API

## Project Structure

```
src/
├── api/                    # API route handlers
│   └── v1/                 # API Version 1
│       ├── external/       # Public endpoints
│       └── internal/       # Authenticated endpoints
├── routes/                 # Route definitions
│   ├── v1/                 # Version 1 routes
│   └── index.ts            # Main router
├── middleware/             # Express middleware
├── services/               # Business logic
├── utils/                  # Utility functions
├── constants/              # Application constants
├── instances/              # Service instances
└── server.ts               # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Edit .env with your configuration
```

### Development

```bash
# Run development server with hot reload
npm run dev
```

### Build

```bash
# Build for production
npm run build
```

### Production

```bash
# Start production server
npm start
```

### Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

### Linting

```bash
# Check code style
npm run lint

# Fix code style issues
npm run lint:fix
```

## API Endpoints

### Base URL

- Development: `http://localhost:3000/api/v1`
- Production: `https://api.alehoteis.com/api/v1`

### Health Check

```
GET /health
```

Returns server health status.

## Environment Variables

See `.env.example` for all available configuration options.

## License

ISC