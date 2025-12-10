# Memory Card Game

A simple memory card game built with React and Vite. Flip cards, find matching pairs, and try to complete the board in as few moves as possible.

## Features

- 4x4 grid with shuffled emoji cards
- Flip animation with matched-state styling
- Score (number of matched pairs)
- Move counter
- Restart button to reset the game
- Win message when all pairs are matched
- Responsive layout for desktop and mobile

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- CSS for styling and animations

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm or another Node package manager

### Installation

```bash
npm install
```

### Run in Development

```bash
npm run dev
```

Then open the URL printed in the terminal (usually `http://localhost:5173`).

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Game Rules

1. Click a card to flip it.
2. Click a second card:
   - If both cards match, they stay flipped and are marked as matched.
   - If they do not match, both cards flip back after a short delay.
3. Each pair of flips counts as one move.
4. The score increases by 1 for each matched pair.
5. When all pairs are matched, a win message is shown.
6. Use the “Restart” button to reset the game at any time.

## Project Structure

- `src/main.jsx` – React entry point
- `src/App.jsx` – Main app layout and game wiring
- `src/components/Card.jsx` – Card component
- `src/components/GameHeader.jsx` – Header with stats and restart button
- `src/components/WinMessage.jsx` – Win message component
- `src/hooks/useGameLogic.js` – Core game logic and state management
- `src/index.css` – Global styles and card animations

## Customization Ideas

- Change or extend the `cardValues` array in `src/App.jsx`
- Adjust grid size or layout in `src/index.css`
- Add difficulty levels or a timer
