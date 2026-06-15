/* global React */
// Inline-SVG icon set for the animated demo — avoids the lucide <i> vs React
// reconciliation conflict during per-frame re-renders. Lucide-style geometry.

const V_PATHS = {
  "chevron-left":  { s: ["M15 18l-6-6 6-6"] },
  "plus":          { s: ["M12 5v14", "M5 12h14"] },
  "send":          { s: ["M22 2 11 13", "M22 2l-7 20-4-9-9-4 20-7z"] },
  "navigation":    { s: ["M3 11l19-9-9 19-2-8-8-2z"] },
  "ticket":        { s: ["M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z", "M13 5v2", "M13 11v2", "M13 17v2"] },
  "bed-double":    { s: ["M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8", "M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4", "M2 18h20", "M12 10v4"] },
  "plane":         { s: ["M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"] },
  "forward":       { s: ["M15 17l5-5-5-5", "M4 18v-2a4 4 0 0 1 4-4h12"] },
  "check":         { s: ["M20 6 9 17l-5-5"] },
  "shield-check":  { s: ["M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", "M9 12l2 2 4-4"] },
  "wifi":          { s: ["M5 12.55a10.94 10.94 0 0 1 14 0", "M8.53 16.11a6 6 0 0 1 6.95 0", "M2 8.82a15 15 0 0 1 20 0", "M12 20h.01"] },
  "play":          { f: ["M6 3l14 9-14 9z"] },
  "apple":         { f: ["M16.1 1.4c.1 1-.3 2-1 2.8-.7.8-1.7 1.3-2.7 1.2-.1-1 .4-2 1-2.7.7-.8 1.8-1.4 2.7-1.3zM19 17c-.5 1.1-.7 1.6-1.3 2.6-.9 1.4-2.1 3.1-3.6 3.1-1.3 0-1.7-.9-3.5-.9s-2.2.8-3.5.9c-1.5.1-2.6-1.5-3.5-2.9C1.4 17 1.2 12.3 3 9.9c.9-1.2 2.3-2 3.8-2 1.4 0 2.3.9 3.5.9 1.1 0 1.8-.9 3.5-.9 1.3 0 2.6.7 3.6 1.9-3.1 1.7-2.6 6.2.6 7.3z"] },
};

function VIcon({ name, size = 24, strokeWidth = 2, style }) {
  const def = V_PATHS[name];
  if (!def) return null;
  const common = { width: size, height: size, viewBox: "0 0 24 24", style, "aria-hidden": "true" };
  if (def.f) {
    return <svg {...common} fill="currentColor">{def.f.map((d, i) => <path key={i} d={d}></path>)}</svg>;
  }
  return (
    <svg {...common} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      {def.s.map((d, i) => <path key={i} d={d}></path>)}
    </svg>
  );
}

// Status-bar signal bars + battery use their own primitives.
function VSignal({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="1" y="14" width="4" height="7" rx="1"></rect>
      <rect x="7" y="10" width="4" height="11" rx="1"></rect>
      <rect x="13" y="6" width="4" height="15" rx="1"></rect>
      <rect x="19" y="2" width="4" height="19" rx="1"></rect>
    </svg>
  );
}
function VBattery({ size = 20 }) {
  return (
    <svg width={size} height={size * 0.5} viewBox="0 0 40 20" fill="none" aria-hidden="true">
      <rect x="1" y="2" width="33" height="16" rx="4" stroke="currentColor" strokeWidth="2"></rect>
      <rect x="4" y="5" width="27" height="10" rx="2" fill="currentColor"></rect>
      <rect x="36" y="7" width="3" height="6" rx="1.5" fill="currentColor"></rect>
    </svg>
  );
}

Object.assign(window, { VIcon, VSignal, VBattery });
