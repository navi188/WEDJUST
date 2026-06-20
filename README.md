# WedJust

WedJust is a full-stack event services platform that helps users discover and explore event-related services such as photographers, caterers, DJs, decorators, banquet halls, and rental providers. The platform features a responsive user interface, service detail pages, and a backend powered by MongoDB Atlas.

## Features

* Browse event service categories
* View detailed service provider information
* Search services by category
* Responsive user interface
* MongoDB Atlas integration
* REST API architecture
* Modern frontend-backend project structure

## Tech Stack

### Frontend

* ReactJS
* Vite
* Tailwind CSS
* CSS
* React Router

### Backend

* NodeJS
* ExpressJS

### Database

* MongoDB Atlas

### Design & Tools

* Figma
* Git
* GitHub
* VS Code
* Cursor

## Project Structure

wedjust/
├── src/                # React frontend
├── server/             # Express backend
├── public/
└── README.md

## Installation

### Frontend

```bash
npm install
npm run dev
```

### Backend

```bash
cd server
npm install
npm run dev
```

Frontend: http://localhost:5173

Backend API: http://localhost:5000/api

## Environment Variables

Create a `.env` file inside the server folder and add:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIENT_ORIGIN=http://localhost:5173
```

## Future Enhancements

* Service booking functionality
* Vendor dashboards
* Reviews and ratings
* Payment gateway integration


