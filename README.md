# WedJust

Modern React + Vite front-end for WedJust with an Express/MongoDB Atlas API that handles registration and login.

## Prerequisites

- Node.js 18+
- npm 10+
- MongoDB Atlas cluster + credentials

## Environment Variables

Copy the sample files and adjust the values for your environment:

```bash
cp env.example .env.local                 # Front-end
cp server/env.example server/.env         # Back-end
```

Values to update:

- `VITE_API_BASE_URL` → URL where the API is exposed (defaults to `http://localhost:5000/api`).
- `MONGODB_URI` → MongoDB Atlas connection string with credentials.
- `JWT_SECRET` → Strong random string for signing JSON web tokens.
- `CLIENT_ORIGIN` → Comma-separated list of front-end origins allowed to call the API.

## Install Dependencies

```bash
npm install                # Front-end (root)
cd server && npm install   # Back-end
```

## Development

Run both apps in separate terminals:

```bash
# Front-end
npm run dev

# Back-end
cd server
npm run dev
```

- Front-end: http://localhost:5173
- API: http://localhost:5000/api

The React `Auth` component posts to `/api/auth/register` and `/api/auth/login`. Successful responses store the returned JWT in `localStorage` under `wedjust_token`.

## Production Build

```bash
npm run build
```

Serve the `dist/` folder with your preferred static host and deploy the Express server separately (Render, Railway, Fly.io, etc.). Update `VITE_API_BASE_URL` to the deployed API URL before building.
