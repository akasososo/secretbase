@import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;700&family=Noto+Serif+JP:wght@500;600;700&family=Cinzel:wght@600;800&family=Shippori+Mincho:wght@500;700&display=swap');
@import "tailwindcss";

@theme {
  --color-secondary-fixed-dim: #95d1ce;
  --color-secondary: #95d1ce;
  --color-on-secondary-container: #87c3c0;
  --color-on-primary-container: #6d5000;
  --color-on-surface-variant: #d4c5ab;
  --color-on-tertiary-container: #983100;
  --color-tertiary-fixed-dim: #ffb59b;
  --color-inverse-surface: #dfe2eb;
  --color-surface-container-highest: #31353c;
  --color-surface-container-high: #262a31;
  --color-on-secondary: #003735;
  --color-surface: #10141a;
  --color-primary-fixed: #ffdfa0;
  --color-surface-container-lowest: #0a0e14;
  --color-on-error: #690005;
  --color-surface-tint: #fbbc00;
  --color-on-tertiary-fixed-variant: #812800;
  --color-on-secondary-fixed: #00201f;
  --color-primary: #ffe2ab;
  --color-error: #ffb4ab;
  --color-surface-container: #1c2026;
  --color-on-error-container: #ffdad6;
  --color-surface-dim: #10141a;
  --color-on-primary-fixed: #261a00;
  --color-tertiary-fixed: #ffdbcf;
  --color-outline: #9c8f78;
  --color-tertiary: #ffdfd4;
  --color-surface-container-low: #181c22;
  --color-on-primary: #402d00;
  --color-on-tertiary: #5b1a00;
  --color-error-container: #93000a;
  --color-background-custom: #10141a;
  --color-on-secondary-fixed-variant: #084f4d;
  --color-secondary-fixed: #b1eeea;
  --color-outline-variant: #504532;
  --color-inverse-on-surface: #2d3137;
  --color-on-primary-fixed-variant: #5c4300;
  --color-secondary-container: #0d5250;
  --color-inverse-primary: #795900;
  --color-primary-container: #ffbf00;
  --color-on-tertiary-fixed: #380d00;
  --color-tertiary-container: #ffb9a1;
  --color-primary-fixed-dim: #fbbc00;
  --color-on-surface: #dfe2eb;
  --color-on-background: #dfe2eb;
  --color-surface-variant: #31353c;
  --color-surface-bright: #353940;

  --font-serif: "Shippori Mincho", "Noto Serif JP", serif;
  --font-sans: "Hanken Grotesk", sans-serif;
  --font-brand: "Cinzel", "Shippori Mincho", "Noto Serif JP", serif;
}

body {
  background: linear-gradient(to bottom, #0a0e14 0%, #10141a 40%, #172030 70%, #1f2d3d 100%);
  background-attachment: fixed;
  color: #dfe2eb;
  font-family: var(--font-sans);
  overflow-x: hidden;
}

/* Texture Grain Overlay */
body::before {
  content: "";
  position: fixed;
  inset: 0;
  background-image: url("https://www.transparenttextures.com/patterns/p6-dark.png");
  opacity: 0.04;
  pointer-events: none;
  z-index: 50;
}

/* Glowing Amber and Candle Effects */
.amber-glow {
  box-shadow: 0 0 40px rgba(255, 191, 0, 0.15);
}

.amber-glow-strong {
  box-shadow: 0 0 50px rgba(255, 191, 0, 0.25);
}

.glass-card {
  background: rgba(28, 32, 38, 0.6);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 226, 171, 0.1);
}

.accent-text {
  color: #fbbc00;
}

.label-caps {
  font-size: 10px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #fbbc00;
  opacity: 0.8;
}

.wabi-sabi-border {
  border-top: 1px solid rgba(255, 226, 171, 0.08); /* wabi-sabi elegant border */
}

.lantern-light {
  filter: drop-shadow(0 0 25px rgba(255, 191, 0, 0.35));
}

.glass-surface {
  background: rgba(28, 32, 38, 0.65);
  backdrop-filter: blur(12px);
}

/* Custom scroll bar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #0a0e14;
}
::-webkit-scrollbar-thumb {
  background: #1c2026;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #ffbf00;
}
