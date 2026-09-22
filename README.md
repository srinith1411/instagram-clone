# Instagram Clone (Mini Project)

A simple front-end clone of Instagram built with **HTML5, CSS3, JavaScript, and React.js**.

## Features

- **Signup / Login / Logout** — account creation and session handling using React Context + `localStorage` (no backend needed)
- **Protected routing** — the feed and profile pages are only reachable when logged in (`react-router-dom`)
- **Home feed** — stories bar + scrollable post feed
- **Posts** — like/unlike (with double-tap-to-like), comment, and save actions, all with live state updates
- **Profile page** — avatar, stats, and a post grid for the logged-in user
- **404 page** — for unknown routes

## Tech Stack

- React 18 (Create React App / `react-scripts`)
- React Router v6
- Plain CSS (no external UI library), styled to resemble Instagram's look

## Project Structure

```
instagram-clone/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Login.js
│   │   ├── Signup.js
│   │   ├── Navbar.js
│   │   ├── Home.js
│   │   ├── Post.js
│   │   ├── Stories.js
│   │   ├── Profile.js
│   │   ├── ProtectedRoute.js
│   │   └── NotFound.js
│   ├── context/
│   │   └── AuthContext.js
│   ├── data/
│   │   └── mockData.js
│   ├── styles/
│   │   ├── index.css
│   │   ├── auth.css
│   │   ├── navbar.css
│   │   ├── home.css
│   │   └── profile.css
│   ├── App.js
│   └── index.js
└── package.json
```

## How to Run

1. Make sure [Node.js](https://nodejs.org/) is installed.
2. Open a terminal in the project folder and install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. The app opens at `http://localhost:3000`.

## Using the App

1. On first launch you'll land on the **Login** page. Click **Sign up** to create an account (this is stored in your browser's `localStorage`, so it's just for demo purposes).
2. After signing up you're automatically logged in and redirected to the feed.
3. Like, comment on, and save posts in the feed.
4. Click your avatar in the navbar to view your profile.
5. Click **Logout** to end your session and return to the login screen.

## Notes for the Mini Project Report

- Authentication is **client-side only** (mock, via `localStorage`) — there is no real backend/database. This keeps the project focused on front-end concepts: components, state, routing, and context.
- Post data (`src/data/mockData.js`) is static/mock data standing in for a real feed API.
- The design intentionally mirrors Instagram's real layout (stories row, card-style posts, profile grid) while staying simple enough to explain line-by-line.

## Possible Extensions

- Connect to a real backend (Node/Express + MongoDB, or Firebase) for persistent accounts and posts
- Add an "upload post" feature
- Add a dark mode toggle
- Add follow/unfollow logic between profiles
