export type ToolKey = "paint" | "tile" | "flooring" | "concrete" | "cost";
export type UnitSystem = "imperial" | "metric";

export type Field = {
  key: string;
  label: string;
  suffix?: string;
  min?: number;
  step?: number;
};

export type CalculatorResult = {
  label: string;
  primary: string;
  stats: Array<[string, string]>;
  note: string;
};

export type ToolSpec = {
  id: ToolKey;
  slug: string;
  name: string;
  icon: string;
  detail: string;
  summary: string;
  seoTitle: string;
  seoDescription: string;
  formulaTitle: string;
  formulas: string[];
  example: string;
  tips: string[];
  faqs: Array<{ question: string; answer: string }>;
};

export const currencies = ["USD", "CAD", "GBP", "EUR", "AUD"];

export const tools: ToolSpec[] = [
  {
    id: "paint",
    slug: "paint-calculator",
    name: "Paint",
    icon: "paint",
    detail: "Walls & rooms",
    summary:
      "Estimate paint volume, full cans, and material cost using your room dimensions and product coverage.",
    seoTitle: "Free Paint Calculator — Walls, Cans & Cost",
    seoDescription:
      "Estimate wall area, paint volume, full cans, and cost in metric or imperial units. Adjust coats, openings, coverage, and can size.",
    formulaTitle: "How the paint estimate works",
    formulas: [
      "Wall area = 2 × (room length + room width) × wall height − openings",
      "Paint volume = wall area × number of coats ÷ product coverage",
      "Full cans = round paint volume up to the next complete can",
    ],
    example:
      "For a 12 × 10 × 8 ft room with 51 sq ft of doors and windows, two coats, and 350 sq ft of coverage per gallon, the estimate is about 3.5 gallons. Buying four 1-gallon cans provides a practical purchase quantity.",
    tips: [
      "Use the coverage printed on the actual paint label.",
      "Measure the combined area of doors and windows for a more accurate result.",
      "Textured or porous walls and dramatic color changes may need more paint.",
    ],
    faqs: [
      {
        question: "How much area does one gallon of paint cover?",
        answer:
          "Many interior paints cover roughly 350–400 sq ft per gallon for one coat, but the product label is the best value to use.",
      },
      {
        question: "Should I subtract doors and windows?",
        answer:
          "Yes. Enter their combined area when you want a tighter estimate. For a quick buffer, you can leave the opening area slightly low.",
      },
      {
        question: "Does the calculator include primer?",
        answer:
          "No. Primer coverage varies, so estimate it separately using the same wall area and the coverage printed on the primer label.",
      },
    ],
  },
  {
    id: "tile",
    slug: "tile-calculator",
    name: "Tile",
    icon: "tile",
    detail: "Floors & backsplashes",
    summary:
      "Calculate tile quantity, waste allowance, complete boxes, purchased pieces, and estimated box cost.",
    seoTitle: "Free Tile Calculator — Tiles, Boxes & Cost",
    seoDescription:
      "Calculate how many tiles and full boxes you need for floors or walls, including waste and box cost in metric or imperial units.",
    formulaTitle: "How the tile estimate works",
    formulas: [
      "Surface area = surface length × surface width",
      "Required tiles = surface area × (1 + waste %) ÷ area of one tile",
      "Full boxes = required tiles ÷ tiles per box, rounded up",
    ],
    example:
      "A 12 × 10 ft surface using 12 × 24 in tiles needs 60 tiles before waste. With 10% waste and eight tiles per box, the purchase quantity rounds up to nine boxes.",
    tips: [
      "Straight layouts often use 10% waste; diagonal or complex patterns may need 15–20%.",
      "Order all boxes from the same production lot when color matching matters.",
      "Keep a few spare tiles for future repairs.",
    ],
    faqs: [
      {
        question: "How much extra tile should I buy?",
        answer:
          "Ten percent is a common starting point. Increase it for diagonal layouts, many cuts, breakage risk, or pattern matching.",
      },
      {
        question: "Why does the result round up to complete boxes?",
        answer:
          "Most retailers sell tile by the box, so the real purchase quantity is based on complete boxes rather than a fractional theoretical amount.",
      },
      {
        question: "Does this include grout spacing?",
        answer:
          "The estimate uses nominal tile dimensions. Small grout joints usually fit within the waste allowance; complex modular layouts should be checked against the manufacturer’s pattern guide.",
      },
    ],
  },
  {
    id: "flooring",
    slug: "flooring-calculator",
    name: "Flooring",
    icon: "floor",
    detail: "Boards & boxes",
    summary:
      "Plan room coverage, waste, complete flooring boxes, actual purchased coverage, and box cost.",
    seoTitle: "Free Flooring Calculator — Boxes, Waste & Cost",
    seoDescription:
      "Estimate complete flooring boxes, purchased coverage, waste, and material cost for laminate, vinyl, or wood flooring.",
    formulaTitle: "How the flooring estimate works",
    formulas: [
      "Room area = room length × room width",
      "Target coverage = room area × (1 + waste %)",
      "Full boxes = target coverage ÷ coverage per box, rounded up",
    ],
    example:
      "A 16 × 12 ft room is 192 sq ft. With 10% waste and 23.5 sq ft per box, the purchase quantity rounds up to nine boxes, covering 211.5 sq ft.",
    tips: [
      "Use the coverage printed on the box, not the board dimensions alone.",
      "Add more waste for angled rooms, herringbone patterns, or many doorways.",
      "The cost result uses full boxes so it matches a realistic purchase.",
    ],
    faqs: [
      {
        question: "How much flooring waste should I allow?",
        answer:
          "Ten percent is a practical default for simple rooms. Complex patterns and irregular layouts commonly require more.",
      },
      {
        question: "Does the calculator round to full boxes?",
        answer:
          "Yes. Both the box count and material cost use complete boxes, which prevents a low theoretical cost estimate.",
      },
      {
        question: "Should I include closets?",
        answer:
          "Include every area that will receive the same flooring. Measure separate rectangles and add their areas before entering the total dimensions or calculate them separately.",
      },
    ],
  },
  {
    id: "concrete",
    slug: "concrete-calculator",
    name: "Concrete",
    icon: "concrete",
    detail: "Slabs & pads",
    summary:
      "Find concrete volume, premix bag quantity, bag cost, and an optional ready-mix estimate.",
    seoTitle: "Free Concrete Calculator — Volume, Bags & Cost",
    seoDescription:
      "Estimate concrete volume, premix bags, bag cost, and ready-mix cost for a rectangular slab in metric or imperial units.",
    formulaTitle: "How the concrete estimate works",
    formulas: [
      "Volume = slab length × slab width × slab depth",
      "Adjusted volume = volume × (1 + extra allowance %)",
      "Premix bags = adjusted volume ÷ yield per bag, rounded up",
    ],
    example:
      "A 12 × 10 ft slab at 4 in deep is 40 cubic feet before extra allowance. Add 5% and the order volume is about 1.56 cubic yards. Bag quantity depends on the yield printed on the bag.",
    tips: [
      "Always enter slab depth in inches or centimetres as shown beside the field.",
      "Replace the default bag yield with the value printed on your premix bag.",
      "For structural work or ready-mix delivery, confirm volume and specifications with the supplier.",
    ],
    faqs: [
      {
        question: "How much extra concrete should I order?",
        answer:
          "Five to ten percent is often used for minor grade variation, spillage, and measurement error, but the project conditions should guide the allowance.",
      },
      {
        question: "Why is bag yield editable?",
        answer:
          "Premix yield changes by bag weight and product. Using the manufacturer’s stated yield produces a more reliable bag count.",
      },
      {
        question: "Can I use this for footings or columns?",
        answer:
          "This version calculates rectangular slabs and pads. Break a project into rectangular sections and add the results, or have structural quantities verified professionally.",
      },
    ],
  },
  {
    id: "cost",
    slug: "project-cost-calculator",
    name: "Project Cost",
    icon: "cost",
    detail: "Materials & labor",
    summary:
      "Combine material waste, labor, delivery, contingency, and tax into a transparent planning total.",
    seoTitle: "Free Project Cost Calculator — Materials & Labor",
    seoDescription:
      "Estimate a project budget from area, material and labor rates, waste, delivery, contingency, and tax in your chosen currency.",
    formulaTitle: "How the project cost estimate works",
    formulas: [
      "Material cost = area × material rate × (1 + waste %)",
      "Subtotal = material cost + labor cost + delivery",
      "Total = subtotal + contingency + tax",
    ],
    example:
      "For a 250 sq ft project with material at 4.25 per sq ft, labor at 3.50, 10% material waste, 100 delivery, 5% contingency, and 7% tax, the calculator builds each part into one clear planning total.",
    tips: [
      "Enter all rates in the currency selected; the calculator does not perform exchange-rate conversion.",
      "Use a contingency for small unknowns rather than hiding them inside material waste.",
      "Permits, equipment rental, design fees, and structural work may need separate line items.",
    ],
    faqs: [
      {
        question: "Does changing currency convert the amounts?",
        answer:
          "No. The currency selector labels your estimate. Enter material, labor, and delivery costs in that same currency.",
      },
      {
        question: "What contingency should I use?",
        answer:
          "A small, well-defined project may use a lower contingency than renovation work with hidden conditions. Choose a value that matches the project risk.",
      },
      {
        question: "Is this a contractor quote?",
        answer:
          "No. It is a planning estimate based only on your inputs and should be compared with supplier prices and professional quotes.",
      },
    ],
  },
];

export const toolById = Object.fromEntries(
  tools.map((tool) => [tool.id, tool]),
) as Record<ToolKey, ToolSpec>;

export const defaults: Record<
  UnitSystem,
  Record<ToolKey, Record<string, number>>
> = {
  imperial: {
    paint: {
      length: 12,
      width: 10,
      height: 8,
      openingArea: 51,
      coats: 2,
      coverage: 350,
      canSize: 1,
      canCost: 42,
    },
    tile: {
      length: 12,
      width: 10,
      tileWidth: 12,
      tileLength: 24,
      waste: 10,
      perBox: 8,
      boxCost: 48,
    },
    flooring: {
      length: 16,
      width: 12,
      boxCoverage: 23.5,
      waste: 10,
      boxCost: 62,
    },
    concrete: {
      length: 12,
      width: 10,
      depth: 4,
      waste: 5,
      bagYield: 0.6,
      bagCost: 7.5,
      bulkCost: 170,
    },
    cost: {
      area: 250,
      materialCost: 4.25,
      laborCost: 3.5,
      waste: 10,
      delivery: 100,
      contingency: 5,
      tax: 7,
    },
  },
  metric: {
    paint: {
      length: 3.6,
      width: 3,
      height: 2.4,
      openingArea: 4.75,
      coats: 2,
      coverage: 10,
      canSize: 4,
      canCost: 35,
    },
    tile: {
      length: 3.6,
      width: 3,
      tileWidth: 30,
      tileLength: 60,
      waste: 10,
      perBox: 8,
      boxCost: 42,
    },
    flooring: {
      length: 4.8,
      width: 3.6,
      boxCoverage: 2.18,
      waste: 10,
      boxCost: 58,
    },
    concrete: {
      length: 3.6,
      width: 3,
      depth: 10,
      waste: 5,
      bagYield: 12,
      bagCost: 6.5,
      bulkCost: 160,
    },
    cost: {
      area: 25,
      materialCost: 45,
      laborCost: 38,
      waste: 10,
      delivery: 90,
      contingency: 5,
      tax: 7,
    },
  },
};

export function fieldsFor(tool: ToolKey, unit: UnitSystem): Field[] {
  const lengthUnit = unit === "imperial" ? "ft" : "m";
  const areaUnit = unit === "imperial" ? "sq ft" : "m²";

  switch (tool) {
    case "paint":
      return [
        { key: "length", label: "Room length", suffix: lengthUnit, min: 0, step: 0.1 },
        { key: "width", label: "Room width", suffix: lengthUnit, min: 0, step: 0.1 },
        { key: "height", label: "Wall height", suffix: lengthUnit, min: 0, step: 0.1 },
        { key: "openingArea", label: "Total doors & windows", suffix: areaUnit, min: 0, step: 0.1 },
        { key: "coats", label: "Number of coats", min: 1, step: 1 },
        { key: "coverage", label: "Coverage per gallon / litre", suffix: areaUnit, min: 1, step: 1 },
        { key: "canSize", label: "Can size", suffix: unit === "imperial" ? "gal" : "L", min: 0.01, step: 0.01 },
        { key: "canCost", label: "Cost per can", min: 0, step: 0.01 },
      ];
    case "tile":
      return [
        { key: "length", label: "Surface length", suffix: lengthUnit, min: 0, step: 0.1 },
        { key: "width", label: "Surface width", suffix: lengthUnit, min: 0, step: 0.1 },
        { key: "tileWidth", label: "Tile width", suffix: unit === "imperial" ? "in" : "cm", min: 0.1, step: 0.1 },
        { key: "tileLength", label: "Tile length", suffix: unit === "imperial" ? "in" : "cm", min: 0.1, step: 0.1 },
        { key: "waste", label: "Waste allowance", suffix: "%", min: 0, step: 1 },
        { key: "perBox", label: "Tiles per box", min: 1, step: 1 },
        { key: "boxCost", label: "Cost per box", min: 0, step: 0.01 },
      ];
    case "flooring":
      return [
        { key: "length", label: "Room length", suffix: lengthUnit, min: 0, step: 0.1 },
        { key: "width", label: "Room width", suffix: lengthUnit, min: 0, step: 0.1 },
        { key: "boxCoverage", label: "Coverage per box", suffix: areaUnit, min: 0.01, step: 0.01 },
        { key: "waste", label: "Waste allowance", suffix: "%", min: 0, step: 1 },
        { key: "boxCost", label: "Cost per box", min: 0, step: 0.01 },
      ];
    case "concrete":
      return [
        { key: "length", label: "Slab length", suffix: lengthUnit, min: 0, step: 0.1 },
        { key: "width", label: "Slab width", suffix: lengthUnit, min: 0, step: 0.1 },
        { key: "depth", label: "Slab depth", suffix: unit === "imperial" ? "in" : "cm", min: 0, step: 0.1 },
        { key: "waste", label: "Extra allowance", suffix: "%", min: 0, step: 1 },
        { key: "bagYield", label: "Yield per premix bag", suffix: unit === "imperial" ? "ft³" : "L", min: 0.01, step: 0.01 },
        { key: "bagCost", label: "Cost per bag", min: 0, step: 0.01 },
        { key: "bulkCost", label: "Ready-mix cost", suffix: unit === "imperial" ? "per yd³" : "per m³", min: 0, step: 0.01 },
      ];
    case "cost":
      return [
        { key: "area", label: "Project area", suffix: areaUnit, min: 0, step: 0.1 },
        { key: "materialCost", label: "Material cost", suffix: `per ${areaUnit}`, min: 0, step: 0.01 },
        { key: "laborCost", label: "Labor cost", suffix: `per ${areaUnit}`, min: 0, step: 0.01 },
        { key: "waste", label: "Material waste", suffix: "%", min: 0, step: 1 },
        { key: "delivery", label: "Delivery & fixed costs", min: 0, step: 0.01 },
        { key: "contingency", label: "Contingency", suffix: "%", min: 0, step: 0.1 },
        { key: "tax", label: "Tax rate", suffix: "%", min: 0, step: 0.1 },
      ];
  }
}

function format(value: number, digits = 1) {
  return Number.isFinite(value)
    ? value.toLocaleString("en-US", { maximumFractionDigits: digits })
    : "0";
}

export function calculate(
  tool: ToolKey,
  unit: UnitSystem,
  values: Record<string, number>,
  currency: string,
): CalculatorResult {
  const v = values;
  const factor = 1 + (v.waste || 0) / 100;

  if (tool === "paint") {
    const wallArea = Math.max(
      0,
      2 * ((v.length || 0) + (v.width || 0)) * (v.height || 0) -
        (v.openingArea || 0),
    );
    const volume =
      (wallArea * Math.max(v.coats || 1, 1)) /
      Math.max(v.coverage || 1, 1);
    const cans = Math.ceil(volume / Math.max(v.canSize || 0.01, 0.01));
    return {
      label: "Paint required",
      primary: `${format(volume, 2)} ${unit === "imperial" ? "gal" : "L"}`,
      stats: [
        ["Paintable wall area", `${format(wallArea)} ${unit === "imperial" ? "sq ft" : "m²"}`],
        ["Full cans to buy", `${cans} cans`],
        ["Estimated material cost", `${currency} ${format(cans * (v.canCost || 0), 2)}`],
      ],
      note:
        "Coverage varies by product and surface. Replace the defaults with the paint label values.",
    };
  }

  if (tool === "tile") {
    const area = (v.length || 0) * (v.width || 0);
    const tileArea =
      unit === "imperial"
        ? ((v.tileWidth || 0) * (v.tileLength || 0)) / 144
        : ((v.tileWidth || 0) / 100) * ((v.tileLength || 0) / 100);
    const tiles =
      tileArea > 0 ? Math.ceil((area * factor) / tileArea - 1e-9) : 0;
    const boxes = Math.ceil(tiles / Math.max(v.perBox || 1, 1));
    return {
      label: "Tiles required",
      primary: `${format(tiles, 0)} tiles`,
      stats: [
        ["Full boxes to buy", `${boxes} boxes`],
        ["Tiles purchased", `${boxes * Math.max(v.perBox || 1, 1)} tiles`],
        ["Estimated material cost", `${currency} ${format(boxes * (v.boxCost || 0), 2)}`],
      ],
      note:
        "Complex patterns and diagonal layouts often need a higher waste allowance.",
    };
  }

  if (tool === "flooring") {
    const area = (v.length || 0) * (v.width || 0);
    const targetCoverage = area * factor;
    const boxCoverage = Math.max(v.boxCoverage || 0.01, 0.01);
    const boxes = Math.ceil(targetCoverage / boxCoverage);
    return {
      label: "Flooring boxes required",
      primary: `${boxes} boxes`,
      stats: [
        ["Room area", `${format(area)} ${unit === "imperial" ? "sq ft" : "m²"}`],
        ["Purchased coverage", `${format(boxes * boxCoverage)} ${unit === "imperial" ? "sq ft" : "m²"}`],
        ["Estimated material cost", `${currency} ${format(boxes * (v.boxCost || 0), 2)}`],
      ],
      note:
        "The cost uses complete boxes so the estimate matches a practical purchase.",
    };
  }

  if (tool === "concrete") {
    if (unit === "imperial") {
      const cubicFeet =
        (v.length || 0) *
        (v.width || 0) *
        ((v.depth || 0) / 12) *
        factor;
      const cubicYards = cubicFeet / 27;
      const bags = Math.ceil(cubicFeet / Math.max(v.bagYield || 0.01, 0.01));
      return {
        label: "Concrete required",
        primary: `${format(cubicYards, 2)} yd³`,
        stats: [
          ["Premix bags", `${bags} bags`],
          ["Premix bag cost", `${currency} ${format(bags * (v.bagCost || 0), 2)}`],
          ["Ready-mix estimate", `${currency} ${format(cubicYards * (v.bulkCost || 0), 2)}`],
        ],
        note:
          "Bag yield and supplier minimums vary. Confirm structural work and delivery quantities with the supplier.",
      };
    }

    const cubicMetres =
      (v.length || 0) *
      (v.width || 0) *
      ((v.depth || 0) / 100) *
      factor;
    const litres = cubicMetres * 1000;
    const bags = Math.ceil(litres / Math.max(v.bagYield || 0.01, 0.01));
    return {
      label: "Concrete required",
      primary: `${format(cubicMetres, 3)} m³`,
      stats: [
        ["Premix bags", `${bags} bags`],
        ["Premix bag cost", `${currency} ${format(bags * (v.bagCost || 0), 2)}`],
        ["Ready-mix estimate", `${currency} ${format(cubicMetres * (v.bulkCost || 0), 2)}`],
      ],
      note:
        "Bag yield and supplier minimums vary. Confirm structural work and delivery quantities with the supplier.",
    };
  }

  const material =
    (v.area || 0) * factor * (v.materialCost || 0);
  const labor = (v.area || 0) * (v.laborCost || 0);
  const base = material + labor + (v.delivery || 0);
  const contingency = base * ((v.contingency || 0) / 100);
  const tax = (base + contingency) * ((v.tax || 0) / 100);
  return {
    label: "Estimated project total",
    primary: `${currency} ${format(base + contingency + tax, 2)}`,
    stats: [
      ["Materials incl. waste", `${currency} ${format(material, 2)}`],
      ["Labor & fixed costs", `${currency} ${format(labor + (v.delivery || 0), 2)}`],
      ["Contingency & tax", `${currency} ${format(contingency + tax, 2)}`],
    ],
    note:
      "Enter all prices in the selected currency. This tool labels values but does not convert exchange rates.",
  };
}
