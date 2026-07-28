export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="BuildWise home">
        Build<span>Wise</span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="/#calculators">Calculators</a>
        <a href="/#guides">Guides</a>
        <a href="/about">About</a>
      </nav>
      <a className="header-cta" href="/#calculators">
        Open a calculator
      </a>
    </header>
  );
}
