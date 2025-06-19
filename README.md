# Bingo Game

This is a dark-mode Bingo game built with React, Vite, Tailwind CSS, and Firebase.

## Features
- Google Sign-In via Firebase Authentication
- Dynamic Bingo terms from Firestore
- Real-time leaderboard with weekly and all-time win counts
- Confetti animation on win
- Automatic new rounds broadcast to all players

## Setup

1. **Clone the repo**
   ```bash
   git clone <repo-url>
   cd bingo-game
   ```

   Install dependencies before running any npm scripts:

   ```bash
   npm install
   # or use `npm ci` for reproducible installs
   ```
2. **Environment variables**
   Copy the example file and fill in your Firebase config:
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your Firebase project credentials.

3. **Firebase setup**
   - Create a Firebase project  
   - Enable **Authentication** (Google Sign-In)  
   - Enable **Firestore** with rules for `terms`, `boards`, and `users` collections  

4. **Run the app**
   ```bash
   npm run dev
   ```

5. **Tests**
   ```bash
   npm run test
   ```
