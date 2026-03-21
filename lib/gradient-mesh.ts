/**
 * Gradient Mesh Animation Utilities
 * Generates animated gradient mesh SVGs for premium background effects
 */

// Deprecated: kept for reference only. Current UI uses a safe React-based mesh layer.

export function generateMeshGradient(
  id: string = "meshGradient",
  colors: string[] = ["#001f3f", "#d4af37", "#24507a", "#f2d492"]
) {
  // Create an SVG with animated gradient mesh
  const svg = `
    <svg width="1200" height="800" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <style>
          @keyframes meshShift {
            0%, 100% {
              stop-color: ${colors[0]};
            }
            25% {
              stop-color: ${colors[1]};
            }
            50% {
              stop-color: ${colors[2]};
            }
            75% {
              stop-color: ${colors[3]};
            }
          }
          
          @keyframes meshDrift {
            0%, 100% {
              cx: 300px;
              cy: 400px;
            }
            25% {
              cx: 600px;
              cy: 200px;
            }
            50% {
              cx: 900px;
              cy: 500px;
            }
            75% {
              cx: 200px;
              cy: 600px;
            }
          }
        </style>
        
        <radialGradient id="${id}-1">
          <stop offset="0%" style="animation: meshShift 20s ease-in-out infinite;" />
          <stop offset="100%" style="stop-color: transparent;" />
        </radialGradient>
        
        <radialGradient id="${id}-2">
          <stop offset="0%" style="animation: meshShift 25s ease-in-out infinite; animation-delay: -5s;" />
          <stop offset="100%" style="stop-color: transparent;" />
        </radialGradient>
        
        <radialGradient id="${id}-3">
          <stop offset="0%" style="animation: meshShift 22s ease-in-out infinite; animation-delay: -10s;" />
          <stop offset="100%" style="stop-color: transparent;" />
        </radialGradient>
      </defs>
      
      <rect width="1200" height="800" fill="rgba(0, 0, 0, 0.02)" />
      
      <!-- Animated gradient circles -->
      <circle cx="300" cy="400" r="400" fill="url(#${id}-1)" opacity="0.4" />
      <circle cx="600" cy="200" r="350" fill="url(#${id}-2)" opacity="0.35" />
      <circle cx="900" cy="500" r="380" fill="url(#${id}-3)" opacity="0.3" />
      
      <!-- Noise texture overlay -->
      <filter id="noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" />
        <feDisplacementMap in="SourceGraphic" scale="30" />
      </filter>
      <rect width="1200" height="800" fill="url(#${id}-1)" opacity="0.05" filter="url(#noise)" />
    </svg>
  `;

  return svg;
}

