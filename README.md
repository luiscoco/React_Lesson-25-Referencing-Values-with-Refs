# React Refs Playground (Vite + React 19)

A minimal, ready-to-run playground to learn **React refs** (`useRef`) with practical examples:
- Stopwatch with interval ID stored in a ref
- DOM element access (focus an input)
- Persistent values that don’t trigger re-renders (latest input, render count)
- State vs Ref behavior demo

## Run locally

```bash
npm install
npm run dev
```

Open the URL that Vite prints (defaults to http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## What to explore

- Try typing into the input and notice that **Latest Input** (stored in a ref) doesn’t re-render the UI.
- Start the stopwatch, then open DevTools and watch state vs ref updates.
- Use the “Trigger State Update” button to see how state changes cause re-renders while ref updates do not.
