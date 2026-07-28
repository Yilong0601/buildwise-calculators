import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { ToolIcon } from "./components/tool-icon";
import { tools } from "./lib/calculators";

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span />
            Free project planning tools
          </p>
          <h1>
            Measure once.
            <br />
            Build with <em>confidence.</em>
          </h1>
          <p className="hero-lede">
            Clear calculators for paint, tile, flooring, concrete, and project
            costs. See practical purchase quantities, not just theoretical
            measurements.
          </p>
          <a className="primary-button" href="#calculators">
            Choose a calculator
            <span aria-hidden="true">↘</span>
          </a>
          <div className="trust-row" aria-label="Product benefits">
            <span>✓ Metric & imperial</span>
            <span>✓ Transparent formulas</span>
            <span>✓ Free, no signup</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Project calculator preview">
          <div className="shape shape-arch" />
          <div className="shape shape-dot-grid" />
          <div className="measurement measurement-top">
            <span>12.4 ft</span>
          </div>
          <div className="measurement measurement-side">
            <span>8.2 ft</span>
          </div>
          <div className="preview-card">
            <div className="preview-topline">
              <span>Paint estimate</span>
              <span className="preview-status">Ready</span>
            </div>
            <div className="preview-room">
              <span className="room-window" />
              <span className="room-door" />
              <span className="room-floor" />
            </div>
            <div className="preview-result">
              <span>Full cans to buy</span>
              <strong>
                4 <small>cans</small>
              </strong>
            </div>
          </div>
          <div className="floating-chip chip-one">+ 10% waste</div>
          <div className="floating-chip chip-two">Full boxes</div>
        </div>
      </section>

      <section
        className="tool-strip"
        id="calculators"
        aria-labelledby="tools-title"
      >
        <div className="section-kicker">
          <p id="tools-title">Choose your calculator</p>
          <span>Five focused tools with formulas, examples, and practical totals</span>
        </div>
        <div className="tool-grid">
          {tools.map((tool, index) => (
            <a className="tool-card" href={`/${tool.slug}`} key={tool.id}>
              <span className="tool-number">0{index + 1}</span>
              <ToolIcon type={tool.icon} />
              <span className="tool-name">{tool.name}</span>
              <span className="tool-detail">{tool.detail}</span>
              <span className="tool-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="value-section">
        <div>
          <p className="eyebrow">
            <span />
            Built for real purchases
          </p>
          <h2>From dimensions to a useful shopping estimate.</h2>
        </div>
        <div className="value-grid">
          <article>
            <span>01</span>
            <h3>Complete packages</h3>
            <p>
              Results round tile, flooring, and paint up to practical boxes or
              cans instead of stopping at a fraction.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Editable assumptions</h3>
            <p>
              Replace coverage, yield, package size, waste, and price with the
              values printed on your product.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Easy to take with you</h3>
            <p>
              Copy an estimate or use your browser’s print option to save a PDF
              without creating an account.
            </p>
          </article>
        </div>
      </section>

      <section className="guides-section" id="guides">
        <div className="guides-heading">
          <p className="eyebrow">
            <span />
            Build smarter
          </p>
          <h2>Good estimates start with good measurements.</h2>
        </div>
        <div className="guide-grid">
          <article>
            <span>01</span>
            <h3>Measure every surface</h3>
            <p>
              Break irregular rooms into simple rectangles. Measure each area,
              then add them together before allowing for waste.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Use the product label</h3>
            <p>
              Coverage and yield differ by brand, material, surface, and
              installation method. Replace defaults with the label values.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Buy a practical buffer</h3>
            <p>
              A waste allowance covers cuts, breakage, pattern matching, and
              future repairs. Complex layouts usually need more.
            </p>
          </article>
        </div>
      </section>

      <section className="about-section" id="about">
        <div>
          <span className="about-mark">BW</span>
          <h2>Simple tools. Clear assumptions.</h2>
        </div>
        <p>
          BuildWise turns basic dimensions into transparent planning estimates.
          Calculations run in your browser, require no account, and can be
          checked against the formulas shown on every calculator page.
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
