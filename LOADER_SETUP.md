# Trigonal 3D Loader Setup

## Required Dependencies

To use the 3D Trigonal Loader, you need to install the following packages:

```bash
npm install three @react-three/fiber @react-three/drei
```

### Package Descriptions:

- **three**: Core Three.js library for 3D graphics
- **@react-three/fiber**: React renderer for Three.js
- **@react-three/drei**: Useful helpers and abstractions for React Three Fiber

## Installation Steps

1. Install the dependencies:
   ```bash
   npm install three @react-three/fiber @react-three/drei
   ```

2. The loader is already integrated into `/src/app/layout.tsx`

3. The loader will:
   - Display only once per browser session (using `sessionStorage`)
   - Show for 4 seconds with the FIRE culture animation
   - Automatically fade out and reveal the main content

## Customization

### Modify Animation Duration
Edit `/src/components/layout/TrigonalLoader.tsx`:

```typescript
// Change the duration (currently 4000ms = 4 seconds)
const hideTimer = setTimeout(() => {
    setShow(false);
    sessionStorage.setItem('trigonal_loader_seen', 'true');
}, 4000); // ← Adjust this value
```

### Change Colors
Update the material colors:

```typescript
// For light mode (currently #1E4E9B precision-blue)
<meshBasicMaterial color="#1E4E9B" ... />
```

### Disable Loader (for development)
Temporarily comment out in `/src/app/layout.tsx`:

```typescript
{/* <TrigonalLoader /> */}
```

## Browser Compatibility

The 3D loader uses:
- WebGL (supported in all modern browsers)
- sessionStorage (supported in all modern browsers)
- Framer Motion (already installed)

## Performance

- Lightweight: Only 3 spheres + 3 cylinders
- Hardware-accelerated: Uses WebGL
- Optimized: Automatically removes from DOM after animation

## Session Storage

The loader uses `sessionStorage` (not `localStorage`), which means:
- ✓ Clears automatically when browser tab/window closes
- ✓ Shows again in new tabs/windows
- ✓ Doesn't persist across browser restarts
