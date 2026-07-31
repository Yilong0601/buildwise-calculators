export function ToolIcon({ type }: { type: string }) {
  return (
    <span className={`tool-icon tool-icon-${type}`} aria-hidden="true">
      <svg viewBox="0 0 48 48" fill="none">
        {iconArtwork(type)}
      </svg>
    </span>
  );
}

function iconArtwork(type: string) {
  switch (type) {
    case "paint":
      return (
        <>
          <path d="M8 11h22v9H8z" />
          <path className="tool-icon-accent" d="M11 15h16" />
          <path d="M30 15h5v8H24v5" />
          <path d="M24 28v10" />
          <path d="M21 38h6" />
        </>
      );
    case "tile":
      return (
        <>
          <rect x="8" y="8" width="32" height="32" rx="2" />
          <path d="M24 8v32M8 24h32" />
          <path className="tool-icon-accent" d="M11 11l10 10M27 27l10 10" />
        </>
      );
    case "floor":
      return (
        <>
          <path d="M12 9h24l6 30H6z" />
          <path d="M18 9l-3 30M30 9l3 30M8 31h32" />
          <path className="tool-icon-accent" d="M10 23h28" />
        </>
      );
    case "concrete":
      return (
        <>
          <path d="M8 31h5l4 5h16l3-5h4" />
          <circle cx="15" cy="38" r="3" />
          <circle cx="35" cy="38" r="3" />
          <path d="M15 14l15 4-5 15-15-5z" />
          <path d="M28 19l8 2v10h-7" />
          <path className="tool-icon-accent" d="M16 19l10 3" />
        </>
      );
    case "cost":
      return (
        <>
          <rect x="10" y="6" width="28" height="36" rx="4" />
          <rect x="15" y="11" width="18" height="8" rx="1" />
          <path d="M16 26h2M24 26h2M32 26h2M16 33h2M24 33h2M32 33h2" />
          <path className="tool-icon-accent" d="M17 15h14" />
        </>
      );
    case "gravel":
      return (
        <>
          <path d="M7 37c2-6 6-10 11-10 3-8 13-8 16 0 5 0 8 4 9 10z" />
          <circle cx="16" cy="33" r="3" />
          <circle cx="25" cy="28" r="3" />
          <circle cx="34" cy="33" r="3" />
          <path className="tool-icon-accent" d="M10 39h29" />
        </>
      );
    case "drywall":
      return (
        <>
          <rect x="9" y="6" width="30" height="36" rx="2" />
          <path d="M24 6v36" />
          <path d="M14 13h2M14 23h2M14 33h2M32 13h2M32 23h2M32 33h2" />
          <path className="tool-icon-accent" d="M20 10h8" />
        </>
      );
    case "roofing":
      return (
        <>
          <path d="M5 25L24 8l19 17" />
          <path d="M10 23v17h28V23" />
          <path d="M17 40V29h14v11" />
          <path className="tool-icon-accent" d="M11 21h26" />
        </>
      );
    case "mulch":
      return (
        <>
          <path d="M24 40V20" />
          <path d="M24 27C14 28 9 22 9 14c9-1 15 4 15 13Z" />
          <path d="M24 22c1-9 7-14 16-13 0 8-5 14-16 13Z" />
          <path d="M24 34c-7 1-12-3-13-9" />
          <path className="tool-icon-accent" d="M17 40h14" />
        </>
      );
    case "decking":
      return (
        <>
          <path d="M11 9h26l6 30H5z" />
          <path d="M17 9l-4 30M24 9v30M31 9l4 30" />
          <path d="M8 31h32" />
          <path className="tool-icon-accent" d="M9 24h30" />
        </>
      );
    default:
      return (
        <>
          <circle cx="24" cy="24" r="16" />
          <path className="tool-icon-accent" d="M16 24h16M24 16v16" />
        </>
      );
  }
}
