# Ecommerce Backend

This is the backend server for the Ecommerce project. It provides RESTful APIs for product management, user management, and handles data fetching with pagination, searching, filtering, sorting, and authentication. The backend is built using Node.js and Express, with MongoDB as the database.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [License](#license)

## Features
- RESTful API for product and user management
- MongoDB integration with Mongoose
- Firebase Authentication for secure user login
- Supports pagination, search, filter, and sorting for product listings
- CORS support for client-side access
- Environment variable configuration via `.env`

## Technologies Used
- **Node.js**: JavaScript runtime for building server-side applications
- **Express.js**: Web framework for building APIs
- **MongoDB**: NoSQL database for storing data
- **Firebase Authentication**: Secure user authentication
- **Mongoose**: MongoDB object modeling for Node.js
- **CORS**: Middleware for handling Cross-Origin Resource Sharing
- **dotenv**: Loads environment variables from `.env` files

## Getting Started

To run the backend server locally, follow these steps:

### Prerequisites
- Node.js (v14+)
- MongoDB (Local or Atlas)
- Firebase account for authentication

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ecommerce-backend.git
