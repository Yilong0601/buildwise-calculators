"use client";

import { useMemo, useState } from "react";

type ToolKey = "paint" | "tile" | "flooring" | "concrete" | "cost";
type UnitSystem = "imperial" | "metric";

const tools: Array<{
  id: ToolKey;
  name: string;
  icon: string;
  detail: string;
  summary: string;
}> = [
  {
    id: "paint",
    name: "Paint",
    icon: "paint",
    detail: "Walls & ceilings",
    summary: "Estimate wall area and the paint required for your room.",
  },
  {
    id: "tile",
    name: "Tile",
    icon: "tile",
    detail: "Floors & backsplashes",
    summary: "Calculate tile quantity, waste allowance, and full boxes.",
  },
  {
    id: "flooring",
    name: "Flooring",
    icon: "floor",
    detail: "Boards & boxes",
    summary: "Plan floor coverage, spare material, and estimated material cost.",
  },
  {
    id: "concrete",
    name: "Concrete",
    icon: "concrete",
    detail: "Slabs & footings",
    summary: "Find concrete volume and an approximate number of premix bags.",
  },
  {
    id: "cost",
    name: "Project Cost",
    icon: "cost",
    detail: "Materials & labor",
    summary: "Combine materials, labor, waste, and tax into one estimate.",
  },
];

const defaults: Record<UnitSystem, Record<ToolKey, Record<string, number>>> = {
  imperial: {
    paint: { length: 12, width: 10, height: 8, doors: 1, windows: 2, coats: 2, coverage: 350 },
    tile: { length: 12, width: 10, tileWidth: 12, tileLength: 24, waste: 10, perBox: 8 },
    flooring: { length: 16, width: 12, boxCoverage: 23.5, waste: 10, unitCost: 4.25 },
    concrete: { length: 12, width: 10, depth: 4, waste: 5 },
    cost: { area: 250, materialCost: 4.25, laborCost: 3.5, waste: 10, tax: 7 },
  },
  metric: {
    paint: { length: 3.6, width: 3, height: 2.4, doors: 1, windows: 2, coats: 2, coverage: 10 },
    tile: { length: 3.6, width: 3, tileWidth: 30, tileLength: 60, waste: 10, perBox: 8 },
    flooring: { length: 4.8, width: 3.6, boxCoverage: 2.18, waste: 10, unitCost: 45 },
    concrete: { length: 3.6, width: 3, depth: 10, waste: 5 },
    cost: { area: 25, materialCost: 45, laborCost: 38, waste: 10, tax: 7 },
  },
};

type Field = {
  key: string;
  label: string;
  suffix?: string;
  min?: number;
  step?: number;
};

function fieldsFor(tool: ToolKey, unit: UnitSystem): Field[] {
  const lengthUnit = unit === "imperial" ? "ft" : "m";
  const areaUnit = unit === "imperial" ? "sq ft" : "m²";
  switch (tool) {
    case "paint":
      return [
        { key: "length", label: "Room length", suffix: lengthUnit, min: 0, step: 0.1 },
        { key: "width", label: "Room width", suffix: lengthUnit, min: 0, step: 0.1 },
        { key: "height", label: "Wall height", suffix: lengthUnit, min: 0, step: 0.1 },
        { key: "doors", label: "Doors", min: 0, step: 1 },
        { key: "windows", label: "Windows", min: 0, step: 1 },
        { key: "coats", label: "Number of coats", min: 1, step: 1 },
        {
          key: "coverage",
          label: "Coverage per gallon / litre",
          suffix: unit === "imperial" ? "sq ft" : "m²",
          min: 1,
          step: 1,
        },
      ];
    case "tile":
      return [
        { key: "length", label: "Surface length", suffix: lengthUnit, min: 0, step: 0.1 },
        { key: "width", label: "Surface width", suffix: lengthUnit, min: 0, step: 0.1 },
        { key: "tileWidth", label: "Tile width", suffix: unit === "imperial" ? "in" : "cm", min: 0, step: 0.1 },
        { key: "tileLength", label: "Tile length", suffix: unit === "imperial" ? "in" : "cm", min: 0, step: 0.1 },
        { key: "waste", label: "Waste allowance", suffix: "%", min: 0, step: 1 },
        { key: "perBox", label: "Tiles per box", min: 1, step: 1 },
      ];
    case "flooring":
      return [
        { key: "length", label: "Room length", suffix: lengthUnit, min: 0, step: 0.1 },
        { key: "width", label: "Room width", suffix: lengthUnit, min: 0, step: 0.1 },
        { key: "boxCoverage", label: "Coverage per box", suffix: areaUnit, min: 0.01, step: 0.01 },
        { key: "waste", label: "Waste allowance", suffix: "%", min: 0, step: 1 },
        { key: "unitCost", label: "Material cost", suffix: `per ${areaUnit}`, min: 0, step: 0.01 },
      ];
    case "concrete":
      return [
        { key: "length", label: "Slab length", suffix: lengthUnit, min: 0, step: 0.1 },
        { key: "width", label: "Slab width", suffix: lengthUnit, min: 0, step: 0.1 },
        { key: "depth", label: "Slab depth", suffix: unit === "imperial" ? "in" : "cm", min: 0, step: 0.1 },
        { key: "waste", label: "Extra allowance", suffix: "%", min: 0, step: 1 },
      ];
    case "cost":
      return [
        { key: "area", label: "Project area", suffix: areaUnit, min: 0, step: 0.1 },
        { key: "materialCost", label: "Material cost", suffix: `per ${areaUnit}`, min: 0, step: 0.01 },
        { key: "laborCost", label: "Labor cost", suffix: `per ${areaUnit}`, min: 0, step: 0.01 },
        { key: "waste", label: "Material waste", suffix: "%", min: 0, step: 1 },
        { key: "tax", label: "Tax rate", suffix: "%", min: 0, step: 0.1 },
      ];
  }
}

function format(value: number, digits = 1) {
  return Number.isFinite(value)
    ? value.toLocaleString("en-US", { maximumFractionDigits: digits })
    : "0";
}

function ToolIcon({ type }: { type: string }) {
  return (
    <span className={`tool-icon tool-icon-${type}`} aria-hidden="true">
      <span />
      <i />
    </span>
  );
}

export default function Home() {
  const [activeTool, setActiveTool] = useState<ToolKey>("paint");
  const [unit, setUnit] = useState<UnitSystem>("imperial");
  const [values, setValues] = useState<Record<string, number>>(defaults.imperial.paint);
  const [currency, setCurrency] = useState("USD");

  const active = tools.find((tool) => tool.id === activeTool) ?? tools[0];
  const fields = fieldsFor(activeTool, unit);

  const chooseTool = (tool: ToolKey, shouldScroll = true) => {
    setActiveTool(tool);
    setValues(defaults[unit][tool]);
    if (shouldScroll) {
      requestAnimationFrame(() =>
        document.getElementById("calculator-workspace")?.scrollIntoView({ behavior: "smooth" }),
      );
    }
  };

  const chooseUnit = (nextUnit: UnitSystem) => {
    setUnit(nextUnit);
    setValues(defaults[nextUnit][activeTool]);
  };

  const result = useMemo(() => {
    const v = values;
    const factor = 1 + (v.waste || 0) / 100;
    if (activeTool === "paint") {
      const openingArea =
        unit === "imperial"
          ? (v.doors || 0) * 21 + (v.windows || 0) * 15
          : (v.doors || 0) * 1.95 + (v.windows || 0) * 1.4;
      const wallArea = Math.max(0, 2 * ((v.length || 0) + (v.width || 0)) * (v.height || 0) - openingArea);
      const quantity = (wallArea * (v.coats || 0)) / Math.max(v.coverage || 1, 1);
      return {
        label: "Paint required",
        primary: `${format(quantity, 2)} ${unit === "imperial" ? "gal" : "L"}`,
        stats: [
          ["Paintable wall area", `${format(wallArea)} ${unit === "imperial" ? "sq ft" : "m²"}`],
          ["Coverage with coats", `${format(wallArea * (v.coats || 0))} ${unit === "imperial" ? "sq ft" : "m²"}`],
          ["Suggested purchase", `${Math.ceil(quantity)} ${unit === "imperial" ? "gallon cans" : "litres"}`],
        ],
        note: "Coverage varies by surface texture, primer, color change, and manufacturer.",
      };
    }
    if (activeTool === "tile") {
      const area = (v.length || 0) * (v.width || 0);
      const tileArea =
        unit === "imperial"
          ? ((v.tileWidth || 0) * (v.tileLength || 0)) / 144
          : ((v.tileWidth || 0) / 100) * ((v.tileLength || 0) / 100);
      const tiles = tileArea > 0 ? Math.ceil((area * factor) / tileArea - 1e-9) : 0;
      return {
        label: "Tiles required",
        primary: `${format(tiles, 0)} tiles`,
        stats: [
          ["Surface area", `${format(area)} ${unit === "imperial" ? "sq ft" : "m²"}`],
          ["Area incl. waste", `${format(area * factor)} ${unit === "imperial" ? "sq ft" : "m²"}`],
          ["Full boxes", `${Math.ceil(tiles / Math.max(v.perBox || 1, 1))} boxes`],
        ],
        note: "Complex patterns and diagonal layouts often need a higher waste allowance.",
      };
    }
    if (activeTool === "flooring") {
      const area = (v.length || 0) * (v.width || 0);
      const purchaseArea = area * factor;
      const boxes = Math.ceil(purchaseArea / Math.max(v.boxCoverage || 0.01, 0.01));
      return {
        label: "Flooring required",
        primary: `${format(purchaseArea)} ${unit === "imperial" ? "sq ft" : "m²"}`,
        stats: [
          ["Room area", `${format(area)} ${unit === "imperial" ? "sq ft" : "m²"}`],
          ["Full boxes", `${boxes} boxes`],
          ["Material estimate", `${currency} ${format(purchaseArea * (v.unitCost || 0), 2)}`],
        ],
        note: "Check the manufacturer’s box coverage and keep spare boards for future repairs.",
      };
    }
    if (activeTool === "concrete") {
      if (unit === "imperial") {
        const cubicFeet = (v.length || 0) * (v.width || 0) * ((v.depth || 0) / 12) * factor;
        return {
          label: "Concrete required",
          primary: `${format(cubicFeet / 27, 2)} yd³`,
          stats: [
            ["Volume", `${format(cubicFeet, 2)} ft³`],
            ["80 lb premix bags", `${Math.ceil(cubicFeet / 0.6)} bags`],
            ["Extra included", `${format(v.waste || 0, 0)}%`],
          ],
          note: "Bag yields vary. For structural work, confirm the mix and volume with your supplier.",
        };
      }
      const cubicMetres = (v.length || 0) * (v.width || 0) * ((v.depth || 0) / 100) * factor;
      return {
        label: "Concrete required",
        primary: `${format(cubicMetres, 3)} m³`,
        stats: [
          ["Volume", `${format(cubicMetres * 1000, 1)} L`],
          ["25 kg premix bags", `${Math.ceil(cubicMetres / 0.012)} bags`],
          ["Extra included", `${format(v.waste || 0, 0)}%`],
        ],
        note: "Bag yields vary. For structural work, confirm the mix and volume with your supplier.",
      };
    }
    const material = (v.area || 0) * factor * (v.materialCost || 0);
    const labor = (v.area || 0) * (v.laborCost || 0);
    const subtotal = material + labor;
    const tax = subtotal * ((v.tax || 0) / 100);
    return {
      label: "Estimated project total",
      primary: `${currency} ${format(subtotal + tax, 2)}`,
      stats: [
        ["Materials incl. waste", `${currency} ${format(material, 2)}`],
        ["Labor", `${currency} ${format(labor, 2)}`],
        ["Estimated tax", `${currency} ${format(tax, 2)}`],
      ],
      note: "This planning estimate excludes permits, delivery, equipment rental, and unforeseen work.",
    };
  }, [activeTool, currency, unit, values]);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#" aria-label="BuildWise home">
          Build<span>Wise</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#calculators">Calculators</a>
          <a href="#guides">Guides</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-cta" href="#calculators">
          Open a calculator
        </a>
      </header>

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
            Fast, accurate calculators for paint, tile, flooring, concrete, and
            project costs. No signup. No guesswork.
          </p>
          <a className="primary-button" href="#calculators">
            Start calculating
            <span aria-hidden="true">↘</span>
          </a>
          <div className="trust-row" aria-label="Product benefits">
            <span>✓ Metric & imperial</span>
            <span>✓ Instant results</span>
            <span>✓ Free to use</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Project calculator preview">
          <div className="shape shape-arch" />
          <div className="shape shape-dot-grid" />
          <div className="measurement measurement-top"><span>12.4 ft</span></div>
          <div className="measurement measurement-side"><span>8.2 ft</span></div>
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
              <span>Estimated paint</span>
              <strong>4.2 <small>gal</small></strong>
            </div>
          </div>
          <div className="floating-chip chip-one">+ 10% waste</div>
          <div className="floating-chip chip-two">2 coats</div>
        </div>
      </section>

      <section className="tool-strip" id="calculators" aria-labelledby="tools-title">
        <div className="section-kicker">
          <p id="tools-title">Choose your calculator</p>
          <span>Five essential tools for your next project</span>
        </div>
        <div className="tool-grid">
          {tools.map((tool, index) => (
            <button
              className={`tool-card ${activeTool === tool.id ? "is-active" : ""}`}
              type="button"
              key={tool.id}
              onClick={() => chooseTool(tool.id)}
              aria-pressed={activeTool === tool.id}
            >
              <span className="tool-number">0{index + 1}</span>
              <ToolIcon type={tool.icon} />
              <span className="tool-name">{tool.name}</span>
              <span className="tool-detail">{tool.detail}</span>
              <span className="tool-arrow" aria-hidden="true">↗</span>
            </button>
          ))}
        </div>
      </section>

      <aside className="ad-slot" aria-label="Advertisement placeholder">
        <span>Advertisement</span>
        <p>Reserved ad placement</p>
      </aside>

      <section className="calculator-section" id="calculator-workspace">
        <div className="calculator-intro">
          <p className="eyebrow"><span /> Interactive calculator</p>
          <h2>{active.name} calculator</h2>
          <p>{active.summary} Adjust any value and your estimate updates instantly.</p>
        </div>

        <div className="workspace">
          <div className="input-panel">
            <div className="panel-topline">
              <div>
                <span className="panel-step">01</span>
                <h3>Project inputs</h3>
              </div>
              <div className="unit-toggle" aria-label="Unit system">
                <button
                  type="button"
                  className={unit === "imperial" ? "selected" : ""}
                  onClick={() => chooseUnit("imperial")}
                  aria-pressed={unit === "imperial"}
                >
                  Imperial
                </button>
                <button
                  type="button"
                  className={unit === "metric" ? "selected" : ""}
                  onClick={() => chooseUnit("metric")}
                  aria-pressed={unit === "metric"}
                >
                  Metric
                </button>
              </div>
            </div>

            <form className="field-grid" onSubmit={(event) => event.preventDefault()}>
              {fields.map((field) => (
                <label className="field" key={field.key}>
                  <span>{field.label}</span>
                  <span className="input-wrap">
                    <input
                      type="number"
                      value={values[field.key] ?? 0}
                      min={field.min}
                      step={field.step ?? 1}
                      onChange={(event) =>
                        setValues((current) => ({
                          ...current,
                          [field.key]: Number(event.target.value),
                        }))
                      }
                    />
                    {field.suffix && <small>{field.suffix}</small>}
                  </span>
                </label>
              ))}
              {(activeTool === "flooring" || activeTool === "cost") && (
                <label className="field">
                  <span>Currency</span>
                  <span className="input-wrap">
                    <select value={currency} onChange={(event) => setCurrency(event.target.value)}>
                      <option value="USD">USD</option>
                      <option value="CAD">CAD</option>
                      <option value="GBP">GBP</option>
                      <option value="EUR">EUR</option>
                      <option value="AUD">AUD</option>
                    </select>
                  </span>
                </label>
              )}
            </form>
          </div>

          <aside className="result-panel" aria-live="polite">
            <div className="result-heading">
              <span className="panel-step">02</span>
              <p>Your estimate</p>
            </div>
            <span className="result-label">{result.label}</span>
            <strong className="result-primary">{result.primary}</strong>
            <div className="result-stats">
              {result.stats.map(([label, value]) => (
                <div key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
            <p className="result-note">
              <span aria-hidden="true">i</span>
              {result.note}
            </p>
          </aside>
        </div>
      </section>

      <section className="guides-section" id="guides">
        <div className="guides-heading">
          <p className="eyebrow"><span /> Build smarter</p>
          <h2>Good estimates start with good measurements.</h2>
        </div>
        <div className="guide-grid">
          <article>
            <span>01</span>
            <h3>Measure every surface</h3>
            <p>Break irregular rooms into simple rectangles. Measure each area, then add them together before allowing for waste.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Use the product label</h3>
            <p>Coverage and yield differ by brand, material, surface, and installation method. Replace our defaults with the label values.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Buy a practical buffer</h3>
            <p>A waste allowance covers cuts, breakage, pattern matching, and future repairs. Complex layouts usually need more.</p>
          </article>
        </div>
      </section>

      <section className="about-section" id="about">
        <div>
          <span className="about-mark">BW</span>
          <h2>Built for planning—not pressure.</h2>
        </div>
        <p>
          BuildWise turns basic dimensions into clear material estimates without
          collecting personal information or requiring an account. Use it to plan,
          compare options, and have a better conversation with your supplier or contractor.
        </p>
      </section>

      <footer>
        <a className="brand" href="#" aria-label="BuildWise home">Build<span>Wise</span></a>
        <p>Free calculators for better-built projects.</p>
        <div>
          <a href="#calculators">Calculators</a>
          <a href="#guides">Guides</a>
          <a href="#about">About</a>
        </div>
        <small>Estimates are for planning only. Always verify quantities, product coverage, local requirements, and structural specifications with a qualified supplier or professional.</small>
      </footer>
    </main>
  );
}
