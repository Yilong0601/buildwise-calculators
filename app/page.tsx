import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { CalculatorDirectory } from "./components/calculator-directory";
import { tools } from "./lib/calculators";
import { guides } from "./lib/guides";

export default function Home() {
  const toolById = new Map(tools.map((tool) => [tool.id, tool]));
  const groups = [
    {
      id: "interior",
      label: "Interior surfaces",
      description: "Rooms, walls, floors, and finishes.",
      tools: ["paint", "tile", "flooring", "drywall", "wallpaper", "insulation"],
    },
    {
      id: "structure",
      label: "Structure",
      description: "Foundations and exterior shells.",
      tools: ["concrete", "roofing", "brick", "stair"],
    },
    {
      id: "landscape",
      label: "Outdoors",
      description: "Decks, paths, beds, and landscaping.",
      tools: ["decking", "gravel", "mulch", "fence"],
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
        <h1>
          <span>Plan with confidence.</span>
          <em>Buy only what you need.</em>
        </h1>
        <p>
          Purchase-ready estimates for building, renovation, and landscaping
          materials.
        </p>
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
            Planning guides
          </p>
          <h2>Know what the number means before you buy.</h2>
          <p>
            Practical guides for measuring, choosing assumptions, checking
            packages, and building a budget you can explain.
          </p>
        </div>
        <div className="planning-guide-grid">
          {guides.map((guide, index) => (
            <a href={`/guides/${guide.slug}`} key={guide.slug}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{guide.shortTitle}</h3>
                <p>{guide.description}</p>
              </div>
              <b aria-hidden="true">→</b>
            </a>
          ))}
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
