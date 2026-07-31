export function SiteFooter() {
  return (
    <footer>
      <a className="brand" href="/" aria-label="BuildWise home">
        Build<span>Wise</span>
      </a>
      <p>Free calculators for better-built projects.</p>
      <div>
        <a href="/#calculators">Calculators</a>
        <a href="/about">About</a>
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms</a>
        <a href="/contact">Contact</a>
      </div>
      <small>
        Estimates are for planning only. Always verify quantities, product
        coverage, local requirements, prices, and structural specifications
        with a qualified supplier or professional.
        <br />
        <a href="mailto:contact@buildwisecalc.com">
          contact@buildwisecalc.com
        </a>
        <br />© 2026 BuildWise Calculators. All rights reserved.
      </small>
    </footer>
  );
}
