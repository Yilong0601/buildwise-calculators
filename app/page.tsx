import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { CalculatorDirectory } from "./components/calculator-directory";
import { tools } from "./lib/calculators";

export default function Home() {
  const toolById = new Map(tools.map((tool) => [tool.id, tool]));
  const groups = [
    {
      id: "interior",
      label: "Interior surfaces",
      description: "Rooms, walls, floors, and finishes.",
      tools: ["paint", "tile", "flooring", "drywall"],
    },
    {
      id: "structure",
      label: "Structure & exterior",
      description: "Foundations, roofs, and outdoor builds.",
      tools: ["concrete", "roofing", "decking"],
    },
    {
      id: "landscape",
      label: "Yard & ground",
      description: "Paths, beds, bases, and landscaping.",
      tools: ["gravel", "mulch"],
    },
    {
      id: "budget",
      label: "Project budget",
      description: "Bring materials, labor, tax, and contingency together.",
      tools: ["cost"],
    },
  ].map((group) => ({
    ...group,
    tools: group.tools.map((id) => toolById.get(id)!).filter(Boolean),
  }));

  return (
    <main>
      <SiteHeader />

      <section className="home-hero">
        <div className="home-hero-label">
          <span>10 focused calculators</span>
          <span>Free · no signup</span>
        </div>
        <h1>
          <span>Plan the project.</span>
          <em>Buy the right amount.</em>
        </h1>
        <div className="home-hero-foot">
          <p>
            Turn measurements into purchase-ready quantities for building,
            renovation, and landscaping materials.
          </p>
          <a className="primary-button" href="#calculators">
            Find your calculator
            <span aria-hidden="true">↓</span>
          </a>
          <div className="home-hero-note">
            <span>Metric + imperial</span>
            <span>Editable assumptions</span>
            <span>Full packages</span>
          </div>
        </div>
      </section>

      <CalculatorDirectory groups={groups} />

      <section className="purchase-section">
        <div className="purchase-copy">
          <p className="eyebrow">
            <span />
            Built for real purchases
          </p>
          <h2>The result should help at the store—not stop at square feet.</h2>
          <p>
            Each calculator shows the assumptions behind the answer, rounds to
            practical package quantities, and gives you a result you can copy
            or save as a PDF.
          </p>
        </div>
        <div className="purchase-ticket" aria-label="Example purchase estimate">
          <div>
            <span>Example estimate</span>
            <strong>Paint · bedroom</strong>
          </div>
          <dl>
            <div>
              <dt>Paintable area</dt>
              <dd>624 sq ft</dd>
            </div>
            <div>
              <dt>Two coats</dt>
              <dd>3.57 gal</dd>
            </div>
            <div>
              <dt>Full cans to buy</dt>
              <dd>4 × 1 gal</dd>
            </div>
          </dl>
          <p>Coverage and openings remain editable.</p>
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
