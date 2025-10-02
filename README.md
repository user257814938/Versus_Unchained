# Versus Unchained: Decepticon Protocol Interface

A neon-drenched control console that showcases the Versus Unchained Decepticon persona. The web experience pairs pulsing Energon effects with interactive controls for immersive Decepticon-themed storytelling.

## Features

- **Dynamic Hologram Display** – Animated holographic panel with spectral scanlines and Energon pulse effects.
- **Reactive Glow Controls** – Buttons to ignite an Energon surge or stabilize the core, adjusting glow intensity in real time.
- **Atmospheric Visual Design** – Cybertronian color palette, animated gradients, and neon typography inspired by Decepticon aesthetics.

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari) that supports ES6 modules and CSS animations.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-user>/Versus_Unchained.git
   cd Versus_Unchained
   ```

### Run Locally

Open `public/index.html` in your browser or start a lightweight static server:

```bash
# Using Python 3
python -m http.server 5173 --directory public
```

Navigate to `http://localhost:5173` to view the experience.

## Project Structure

```
public/
├── index.html
├── script.js
└── styles.css
```

## Development Notes

- Styles and animations live in `public/styles.css`. Adjust CSS variables in the `:root` scope to tune the color palette.
- Interactive behavior is handled in `public/script.js`. Add additional control routines or animation triggers here.
- The layout is optimized for modern browsers and includes responsive tweaks for smaller screens.

## License

Distributed under the MIT License. See `LICENSE` for more information.
