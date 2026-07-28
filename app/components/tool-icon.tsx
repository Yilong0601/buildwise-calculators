export function ToolIcon({ type }: { type: string }) {
  return (
    <span className={`tool-icon tool-icon-${type}`} aria-hidden="true">
      <span />
      <i />
    </span>
  );
}
