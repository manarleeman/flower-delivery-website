# Flower Delivery Backend API

A RESTful API for a flower delivery e-commerce platform built with Node.js, Express, and MongoDB.

## Features
- User authentication (JWT & Google OAuth)
- Flower product management (CRUD operations)
- Image upload with Cloudinary
- Secure password hashing
- Protected routes

## Tech Stack
- Node.js
- Express.js
- MongoDB Atlas
- Cloudinary
- Passport.js
- JWT

## Installation
```bash
npm install
```

## Environment Variables

Create a `.env` file in the root directory:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
CLIENT_URL=http://localhost:3000
```

## Running the Application
```bash
# Development mode
npm run dev

# Production mode
npm start
```

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register new user
- POST `/api/auth/login` - Login user
- GET `/api/auth/google` - Google OAuth login

### Flowers
- GET `/api/flowers` - Get all flowers
- GET `/api/flowers/:id` - Get single flower
- POST `/api/flowers` - Create flower (Protected)
- PUT `/api/flowers/:id` - Update flower (Protected)
- DELETE `/api/flowers/:id` - Delete flower (Protected)

### Users
- GET `/api/users/profile` - Get user profile (Protected)
- PUT `/api/users/profile` - Update user profile (Protected)

## Deployment

Deployed on Render.com

## Loom Video

[Link to Loom video explanation]

## Author

Your Name