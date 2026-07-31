export type ToolKey =
  | "paint"
  | "tile"
  | "flooring"
  | "concrete"
  | "cost"
  | "gravel"
  | "drywall"
  | "roofing"
  | "mulch"
  | "decking"
  | "brick"
  | "fence"
  | "insulation"
  | "wallpaper"
  | "stair";
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
  {
    id: "gravel",
    slug: "gravel-calculator",
    name: "Gravel",
    icon: "gravel",
    detail: "Driveways & paths",
    summary:
      "Estimate gravel volume, weight, full bag quantity, and material cost for driveways, paths, and landscape bases.",
    seoTitle: "Free Gravel Calculator — Tons, Bags & Cost",
    seoDescription:
      "Calculate gravel volume, tons or tonnes, full bags, and estimated cost from area, depth, density, and waste allowance.",
    formulaTitle: "How the gravel estimate works",
    formulas: [
      "Gravel volume = area length × area width × gravel depth",
      "Adjusted volume = gravel volume × (1 + extra allowance %)",
      "Gravel weight = adjusted volume × material density",
      "Full bags = gravel weight ÷ bag weight, rounded up",
    ],
    example:
      "A 12 × 10 ft area at 3 in deep is 30 cubic feet before extra allowance. With 10% extra and gravel at 100 lb per cubic foot, the estimate is about 1.65 short tons or 66 full 50 lb bags.",
    tips: [
      "Measure compacted depth, then allow for settlement and an uneven base.",
      "Replace the default density with a supplier value when available.",
      "Bulk delivery is usually more practical than bags for larger areas.",
    ],
    faqs: [
      {
        question: "How deep should gravel be?",
        answer:
          "Depth depends on the project and base conditions. Decorative paths may use a shallower layer than driveways, which commonly require a prepared base and multiple material layers.",
      },
      {
        question: "How much does a cubic yard of gravel weigh?",
        answer:
          "Weight varies by stone size, moisture, and compaction. A common planning range is roughly 1.3–1.5 short tons per cubic yard, but supplier values are more reliable.",
      },
      {
        question: "Does the calculator include compaction?",
        answer:
          "Use the extra allowance field to cover compaction, settlement, and minor grade variation. Confirm the final order with the material supplier.",
      },
    ],
  },
  {
    id: "drywall",
    slug: "drywall-calculator",
    name: "Drywall",
    icon: "drywall",
    detail: "Walls & ceilings",
    summary:
      "Calculate drywall surface area, complete sheet quantity, waste allowance, and estimated sheet cost for a room.",
    seoTitle: "Free Drywall Calculator — Sheets, Waste & Cost",
    seoDescription:
      "Estimate full drywall sheets and cost for room walls and ceilings, including openings, sheet size, and waste allowance.",
    formulaTitle: "How the drywall estimate works",
    formulas: [
      "Wall area = 2 × (room length + room width) × wall height − openings",
      "Total board area = wall area + optional ceiling area",
      "Required sheets = total board area × (1 + waste %) ÷ sheet area, rounded up",
    ],
    example:
      "A 12 × 10 × 8 ft room has 352 sq ft of wall area before openings. Subtract 51 sq ft of doors and windows, add a 120 sq ft ceiling, and allow 10% waste. Using 4 × 8 ft sheets, the purchase quantity rounds up to 15 sheets.",
    tips: [
      "Enter zero for ceiling area when only the walls will be covered.",
      "Choose a sheet size that fits the framing and can be safely handled.",
      "Complex ceilings, short offcuts, and many openings can require more waste.",
    ],
    faqs: [
      {
        question: "How many drywall sheets do I need?",
        answer:
          "Divide the adjusted wall and ceiling area by one sheet’s area, then round up. This calculator performs that step using your selected sheet dimensions.",
      },
      {
        question: "Should I subtract doors and windows?",
        answer:
          "Yes for a tighter estimate. On small projects, leaving part of the opening area in the estimate can provide useful offcuts and repair stock.",
      },
      {
        question: "What waste allowance should I use?",
        answer:
          "Ten percent is a practical starting point for a simple room. Irregular layouts, many corners, and difficult handling may need more.",
      },
    ],
  },
  {
    id: "roofing",
    slug: "roofing-calculator",
    name: "Roofing",
    icon: "roofing",
    detail: "Shingles & bundles",
    summary:
      "Estimate sloped roof area, waste-adjusted coverage, full shingle bundles, roofing squares, and material cost.",
    seoTitle: "Free Roofing Calculator — Shingles, Bundles & Cost",
    seoDescription:
      "Calculate roof area, shingle bundles, roofing squares, waste, and estimated material cost using plan dimensions and roof pitch.",
    formulaTitle: "How the roofing estimate works",
    formulas: [
      "Sloped roof area = plan length × plan width ÷ cos(pitch angle)",
      "Target coverage = sloped roof area × (1 + waste %)",
      "Full bundles = target coverage ÷ coverage per bundle, rounded up",
    ],
    example:
      "A 40 × 24 ft roof footprint at a 22.6° pitch has roughly 1,040 sq ft of sloped area. With 12% waste and 32.3 sq ft per bundle, the estimate rounds up to 37 bundles.",
    tips: [
      "Use the total horizontal roof footprint, including overhangs.",
      "Hip roofs, valleys, dormers, and complex cuts generally need more waste.",
      "Confirm bundle coverage and required underlayment with the product manufacturer.",
    ],
    faqs: [
      {
        question: "What is a roofing square?",
        answer:
          "In US roofing, one roofing square equals 100 square feet of roof surface. It is a measurement of area, not a square-shaped bundle.",
      },
      {
        question: "Does roof pitch increase material quantity?",
        answer:
          "Yes. A sloped roof has more surface area than its flat plan footprint. The calculator uses the pitch angle to account for that increase.",
      },
      {
        question: "How much roofing waste should I add?",
        answer:
          "Simple gable roofs may use about 10%. Roofs with hips, valleys, dormers, or intricate cuts often require a higher allowance.",
      },
    ],
  },
  {
    id: "mulch",
    slug: "mulch-calculator",
    name: "Mulch",
    icon: "mulch",
    detail: "Beds & borders",
    summary:
      "Find mulch volume, full bag quantity, bulk order volume, and estimated bag or bulk material cost.",
    seoTitle: "Free Mulch Calculator — Bags, Volume & Cost",
    seoDescription:
      "Estimate mulch bags, cubic yards or metres, depth, extra allowance, and material cost for garden beds and borders.",
    formulaTitle: "How the mulch estimate works",
    formulas: [
      "Mulch volume = bed length × bed width × mulch depth",
      "Adjusted volume = mulch volume × (1 + extra allowance %)",
      "Full bags = adjusted volume ÷ volume per bag, rounded up",
    ],
    example:
      "A 20 × 8 ft garden bed at 3 in deep needs 40 cubic feet before extra allowance. With 5% extra and 2 cubic foot bags, the purchase quantity is 21 bags, or about 1.56 cubic yards.",
    tips: [
      "Measure irregular beds as several rectangles and add their results.",
      "Use the bag volume printed on the product, not the bag’s outside dimensions.",
      "Avoid piling mulch against trunks, stems, siding, or drainage openings.",
    ],
    faqs: [
      {
        question: "How deep should mulch be?",
        answer:
          "A 2–3 inch layer is a common planning range for many landscape beds, but plant type, existing mulch, drainage, and local conditions should guide the depth.",
      },
      {
        question: "How many bags are in one cubic yard?",
        answer:
          "One cubic yard is 27 cubic feet, so it equals about fourteen 2-cubic-foot bags or nine 3-cubic-foot bags after rounding up.",
      },
      {
        question: "Should I add extra mulch?",
        answer:
          "A small allowance can cover uneven beds, settlement, and measurement error. Avoid excessive depth around plants and structures.",
      },
    ],
  },
  {
    id: "decking",
    slug: "decking-calculator",
    name: "Decking",
    icon: "decking",
    detail: "Boards & coverage",
    summary:
      "Estimate deck surface area, board rows, total linear length, full board quantity, waste, and material cost.",
    seoTitle: "Free Decking Calculator — Boards, Waste & Cost",
    seoDescription:
      "Calculate decking boards, rows, linear length, waste, and estimated material cost from deck and board dimensions.",
    formulaTitle: "How the decking estimate works",
    formulas: [
      "Board rows = deck width ÷ (board width + board gap), rounded up",
      "Linear decking = board rows × deck length × (1 + waste %)",
      "Full boards = linear decking ÷ board length, rounded up",
    ],
    example:
      "A 16 × 12 ft deck using 5.5 in boards with a 0.25 in gap needs about 26 rows. With 10% waste and 16 ft boards, the estimate rounds up to 29 full boards.",
    tips: [
      "Enter the actual face width of the board, not its nominal product name.",
      "Board direction, breaker boards, picture frames, and staggered joints affect layout.",
      "Calculate stairs, fascia, railings, framing, and fasteners separately.",
    ],
    faqs: [
      {
        question: "Does the calculator include board gaps?",
        answer:
          "Yes. The board-row estimate uses both the actual board width and the installation gap you enter.",
      },
      {
        question: "How much decking waste should I allow?",
        answer:
          "Ten percent is a useful starting point for a simple rectangular deck. Diagonal boards, picture framing, and complex cuts usually need more.",
      },
      {
        question: "Does this calculate deck framing?",
        answer:
          "No. It estimates surface decking boards only. Joists, beams, posts, footings, stairs, railing, fascia, and fasteners require separate planning.",
      },
    ],
  },
  {
    id: "brick",
    slug: "brick-calculator",
    name: "Brick",
    icon: "brick",
    detail: "Walls & masonry",
    summary:
      "Estimate brick quantity, mortar-joint allowance, waste, and material cost for a rectangular wall.",
    seoTitle: "Free Brick Calculator — Bricks, Waste & Cost",
    seoDescription:
      "Calculate how many bricks you need for a wall using wall size, openings, brick dimensions, mortar joints, waste, and unit cost.",
    formulaTitle: "How the brick estimate works",
    formulas: [
      "Net wall area = wall length × wall height − openings",
      "Modular brick area = (brick length + joint) × (brick height + joint)",
      "Bricks required = net wall area × (1 + waste %) ÷ modular brick area, rounded up",
    ],
    example:
      "A 20 × 8 ft wall with 24 sq ft of openings, standard 7.625 × 2.25 in bricks, a 0.375 in mortar joint, and 10% waste needs roughly 1,030 bricks.",
    tips: [
      "Use the actual brick dimensions and planned mortar-joint thickness.",
      "Subtract doors, windows, and large openings for a tighter estimate.",
      "Corners, cuts, breakage, and matching an existing bond may require more waste.",
    ],
    faqs: [
      {
        question: "Does the estimate include mortar joints?",
        answer:
          "Yes. Brick length and height are combined with the joint thickness to estimate the modular face area.",
      },
      {
        question: "How much extra brick should I order?",
        answer:
          "Ten percent is a practical starting point. Complex bonds, many cuts, fragile brick, or future repair stock may need more.",
      },
      {
        question: "Does this calculate mortar?",
        answer:
          "No. Mortar quantity depends on brick type, joint profile, wall thickness, and installation method and should be estimated separately.",
      },
    ],
  },
  {
    id: "fence",
    slug: "fence-calculator",
    name: "Fence",
    icon: "fence",
    detail: "Panels & posts",
    summary:
      "Estimate full fence panels, posts, gate openings, waste allowance, and basic material cost.",
    seoTitle: "Free Fence Calculator — Panels, Posts & Cost",
    seoDescription:
      "Estimate fence panels, posts, gate allowance, waste, and material cost from total run length and panel spacing.",
    formulaTitle: "How the fence estimate works",
    formulas: [
      "Net fence run = total run − (gate width × gate count)",
      "Panel count = net fence run ÷ panel width × (1 + waste %), rounded up",
      "Post count = panel count + 1 + gate count",
    ],
    example:
      "A 120 ft run with one 4 ft gate and 8 ft panels needs 15 panels before waste. With 5% waste, the purchase quantity rounds up to 16 panels and about 18 posts.",
    tips: [
      "Measure each straight run separately when the fence has corners or changes direction.",
      "Gate posts, end posts, corner posts, and slope transitions may require different hardware.",
      "Confirm panel width and post spacing with the actual product system.",
    ],
    faqs: [
      {
        question: "How many fence posts do I need?",
        answer:
          "For one straight run, a useful starting point is one more post than the number of panels, plus an additional post allowance for gates.",
      },
      {
        question: "Does the calculator include corners?",
        answer:
          "No. Calculate separate straight runs and review corner, end, and gate-post requirements for the selected fence system.",
      },
      {
        question: "How much fence waste should I use?",
        answer:
          "Five percent is often enough for simple panel systems. Irregular boundaries, slopes, custom cuts, and picket fences may need more.",
      },
    ],
  },
  {
    id: "insulation",
    slug: "insulation-calculator",
    name: "Insulation",
    icon: "insulation",
    detail: "Batts & packages",
    summary:
      "Estimate insulation coverage, full packages, purchased area, waste, and material cost.",
    seoTitle: "Free Insulation Calculator — Batts, Bags & Cost",
    seoDescription:
      "Calculate insulation area, full packages, purchased coverage, waste allowance, and material cost for walls or ceilings.",
    formulaTitle: "How the insulation estimate works",
    formulas: [
      "Net surface area = surface length × surface height − openings",
      "Target coverage = net surface area × (1 + waste %)",
      "Packages required = target coverage ÷ coverage per package, rounded up",
    ],
    example:
      "A 30 × 8 ft wall with 32 sq ft of openings has 208 sq ft to cover. With 10% waste and 40 sq ft per package, the purchase quantity rounds up to six packages.",
    tips: [
      "Use the coverage printed on the actual batt, roll, or bag package.",
      "Calculate walls, ceilings, and different cavity depths separately.",
      "Confirm the required R-value, vapor control, and local code before buying.",
    ],
    faqs: [
      {
        question: "Does this choose the correct R-value?",
        answer:
          "No. It estimates quantity only. Required R-value depends on climate, assembly, cavity depth, and local building requirements.",
      },
      {
        question: "Should I subtract windows and doors?",
        answer:
          "Yes, when you want a tighter material estimate. Keep a waste allowance for cuts, damaged pieces, and awkward cavities.",
      },
      {
        question: "Can I use it for blown insulation?",
        answer:
          "Use the area result as a starting point, then follow the manufacturer’s bag-coverage chart for the target depth and R-value.",
      },
    ],
  },
  {
    id: "wallpaper",
    slug: "wallpaper-calculator",
    name: "Wallpaper",
    icon: "wallpaper",
    detail: "Rolls & pattern repeat",
    summary:
      "Estimate wallpaper strips and full rolls using wall size, roll dimensions, pattern repeat, openings, and waste.",
    seoTitle: "Free Wallpaper Calculator — Rolls & Pattern Repeat",
    seoDescription:
      "Calculate wallpaper strips, usable drops per roll, full rolls, waste, and material cost with pattern-repeat allowance.",
    formulaTitle: "How the wallpaper estimate works",
    formulas: [
      "Net wall area = wall width × wall height − openings",
      "Cut length = wall height rounded up to the next pattern repeat",
      "Rolls required = strips needed ÷ usable strips per roll × (1 + waste %), rounded up",
    ],
    example:
      "A 24 × 8 ft wall with 20 sq ft of openings, 20.5 in wide wallpaper, a 33 ft roll, and a 21 in pattern repeat needs about five full rolls with a 10% allowance.",
    tips: [
      "Use the roll’s printed width, length, and vertical pattern repeat.",
      "Large repeats and half-drop matches can increase waste substantially.",
      "Order all rolls from the same dye lot when color matching matters.",
    ],
    faqs: [
      {
        question: "Why does pattern repeat increase the roll count?",
        answer:
          "Each strip must be cut long enough for the pattern to align, leaving an unusable portion at the end of some drops.",
      },
      {
        question: "Should I subtract windows and doors?",
        answer:
          "You can subtract large openings, but keep enough allowance for matching, trimming, and strips above or below openings.",
      },
      {
        question: "Does this support double rolls?",
        answer:
          "Yes. Enter the total width and length printed on the product, whether the package is described as a single, double, or euro roll.",
      },
    ],
  },
  {
    id: "stair",
    slug: "stair-calculator",
    name: "Stair",
    icon: "stair",
    detail: "Risers & treads",
    summary:
      "Plan stair risers, actual rise, tread count, total run, stringer length, and tread cost.",
    seoTitle: "Free Stair Calculator — Risers, Treads & Run",
    seoDescription:
      "Calculate stair risers, actual riser height, treads, total run, approximate stringer length, and tread cost.",
    formulaTitle: "How the stair estimate works",
    formulas: [
      "Riser count = total rise ÷ target riser height, rounded to the nearest practical whole number",
      "Actual riser height = total rise ÷ riser count",
      "Tread count = riser count − 1; total run = tread count × tread depth",
    ],
    example:
      "A floor-to-floor rise of 108 in with a target 7.25 in riser produces 15 risers at 7.2 in each, 14 treads, and a 140 in total run using 10 in treads.",
    tips: [
      "Measure finished-floor to finished-floor height, not rough framing alone.",
      "Verify maximum riser height, minimum tread depth, headroom, landings, and handrails locally.",
      "Use the result for planning only; structural stringer layout should be checked professionally.",
    ],
    faqs: [
      {
        question: "How many treads are in a staircase?",
        answer:
          "A typical straight stair between two floors has one fewer tread than risers because the upper floor acts as the final tread.",
      },
      {
        question: "What is a comfortable stair rise?",
        answer:
          "Comfort and legal limits vary. Many residential stairs are near 7–7.75 in per riser, but local requirements control.",
      },
      {
        question: "Can I use this to cut stringers?",
        answer:
          "Use it as a planning check only. Material size, bearing, notches, landings, code, and structural loading require project-specific verification.",
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
    gravel: {
      length: 12,
      width: 10,
      depth: 3,
      waste: 10,
      density: 100,
      bagSize: 50,
      bagCost: 5.5,
      bulkCost: 55,
    },
    drywall: {
      length: 12,
      width: 10,
      height: 8,
      openingArea: 51,
      ceilingArea: 120,
      sheetWidth: 4,
      sheetHeight: 8,
      waste: 10,
      sheetCost: 16,
    },
    roofing: {
      length: 40,
      width: 24,
      pitchAngle: 22.6,
      waste: 12,
      bundleCoverage: 32.3,
      bundleCost: 38,
    },
    mulch: {
      length: 20,
      width: 8,
      depth: 3,
      waste: 5,
      bagVolume: 2,
      bagCost: 4.5,
      bulkCost: 48,
    },
    decking: {
      length: 16,
      width: 12,
      boardWidth: 5.5,
      gap: 0.25,
      boardLength: 16,
      waste: 10,
      boardCost: 28,
    },
    brick: {
      length: 20,
      height: 8,
      openingArea: 24,
      brickLength: 7.625,
      brickHeight: 2.25,
      joint: 0.375,
      waste: 10,
      unitCost: 0.85,
    },
    fence: {
      runLength: 120,
      panelWidth: 8,
      gateWidth: 4,
      gateCount: 1,
      waste: 5,
      panelCost: 65,
      postCost: 18,
    },
    insulation: {
      length: 30,
      height: 8,
      openingArea: 32,
      packageCoverage: 40,
      waste: 10,
      packageCost: 55,
    },
    wallpaper: {
      width: 24,
      height: 8,
      openingArea: 20,
      rollWidth: 20.5,
      rollLength: 33,
      patternRepeat: 21,
      waste: 10,
      rollCost: 48,
    },
    stair: {
      totalRise: 108,
      targetRise: 7.25,
      treadDepth: 10,
      treadCost: 32,
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
    gravel: {
      length: 3.6,
      width: 3,
      depth: 8,
      waste: 10,
      density: 1600,
      bagSize: 20,
      bagCost: 5,
      bulkCost: 60,
    },
    drywall: {
      length: 3.6,
      width: 3,
      height: 2.4,
      openingArea: 4.75,
      ceilingArea: 10.8,
      sheetWidth: 1.2,
      sheetHeight: 2.4,
      waste: 10,
      sheetCost: 15,
    },
    roofing: {
      length: 12,
      width: 7.2,
      pitchAngle: 22.6,
      waste: 12,
      bundleCoverage: 3,
      bundleCost: 36,
    },
    mulch: {
      length: 6,
      width: 2.4,
      depth: 7.5,
      waste: 5,
      bagVolume: 50,
      bagCost: 5,
      bulkCost: 52,
    },
    decking: {
      length: 4.8,
      width: 3.6,
      boardWidth: 140,
      gap: 6,
      boardLength: 4.8,
      waste: 10,
      boardCost: 26,
    },
    brick: {
      length: 6,
      height: 2.4,
      openingArea: 2.2,
      brickLength: 19.4,
      brickHeight: 5.7,
      joint: 1,
      waste: 10,
      unitCost: 0.8,
    },
    fence: {
      runLength: 36,
      panelWidth: 2.4,
      gateWidth: 1.2,
      gateCount: 1,
      waste: 5,
      panelCost: 62,
      postCost: 17,
    },
    insulation: {
      length: 9,
      height: 2.4,
      openingArea: 3,
      packageCoverage: 3.7,
      waste: 10,
      packageCost: 52,
    },
    wallpaper: {
      width: 7.2,
      height: 2.4,
      openingArea: 1.8,
      rollWidth: 52,
      rollLength: 10,
      patternRepeat: 53,
      waste: 10,
      rollCost: 45,
    },
    stair: {
      totalRise: 274,
      targetRise: 18.5,
      treadDepth: 25,
      treadCost: 30,
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
    case "gravel":
      return [
        { key: "length", label: "Area length", suffix: lengthUnit, min: 0, step: 0.1 },
        { key: "width", label: "Area width", suffix: lengthUnit, min: 0, step: 0.1 },
        { key: "depth", label: "Gravel depth", suffix: unit === "imperial" ? "in" : "cm", min: 0, step: 0.1 },
        { key: "waste", label: "Extra allowance", suffix: "%", min: 0, step: 1 },
        { key: "density", label: "Gravel density", suffix: unit === "imperial" ? "lb/ft³" : "kg/m³", min: 1, step: 1 },
        { key: "bagSize", label: "Weight per bag", suffix: unit === "imperial" ? "lb" : "kg", min: 0.1, step: 0.1 },
        { key: "bagCost", label: "Cost per bag", min: 0, step: 0.01 },
        { key: "bulkCost", label: "Bulk cost", suffix: unit === "imperial" ? "per ton" : "per tonne", min: 0, step: 0.01 },
      ];
    case "drywall":
      return [
        { key: "length", label: "Room length", suffix: lengthUnit, min: 0, step: 0.1 },
        { key: "width", label: "Room width", suffix: lengthUnit, min: 0, step: 0.1 },
        { key: "height", label: "Wall height", suffix: lengthUnit, min: 0, step: 0.1 },
        { key: "openingArea", label: "Doors & windows", suffix: areaUnit, min: 0, step: 0.1 },
        { key: "ceilingArea", label: "Ceiling area (optional)", suffix: areaUnit, min: 0, step: 0.1 },
        { key: "sheetWidth", label: "Sheet width", suffix: lengthUnit, min: 0.1, step: 0.1 },
        { key: "sheetHeight", label: "Sheet length", suffix: lengthUnit, min: 0.1, step: 0.1 },
        { key: "waste", label: "Waste allowance", suffix: "%", min: 0, step: 1 },
        { key: "sheetCost", label: "Cost per sheet", min: 0, step: 0.01 },
      ];
    case "roofing":
      return [
        { key: "length", label: "Roof plan length", suffix: lengthUnit, min: 0, step: 0.1 },
        { key: "width", label: "Roof plan width", suffix: lengthUnit, min: 0, step: 0.1 },
        { key: "pitchAngle", label: "Roof pitch angle", suffix: "degrees", min: 0, step: 0.1 },
        { key: "waste", label: "Waste allowance", suffix: "%", min: 0, step: 1 },
        { key: "bundleCoverage", label: "Coverage per bundle", suffix: areaUnit, min: 0.01, step: 0.01 },
        { key: "bundleCost", label: "Cost per bundle", min: 0, step: 0.01 },
      ];
    case "mulch":
      return [
        { key: "length", label: "Bed length", suffix: lengthUnit, min: 0, step: 0.1 },
        { key: "width", label: "Bed width", suffix: lengthUnit, min: 0, step: 0.1 },
        { key: "depth", label: "Mulch depth", suffix: unit === "imperial" ? "in" : "cm", min: 0, step: 0.1 },
        { key: "waste", label: "Extra allowance", suffix: "%", min: 0, step: 1 },
        { key: "bagVolume", label: "Volume per bag", suffix: unit === "imperial" ? "ft³" : "L", min: 0.01, step: 0.01 },
        { key: "bagCost", label: "Cost per bag", min: 0, step: 0.01 },
        { key: "bulkCost", label: "Bulk cost", suffix: unit === "imperial" ? "per yd³" : "per m³", min: 0, step: 0.01 },
      ];
    case "decking":
      return [
        { key: "length", label: "Deck length", suffix: lengthUnit, min: 0, step: 0.1 },
        { key: "width", label: "Deck width", suffix: lengthUnit, min: 0, step: 0.1 },
        { key: "boardWidth", label: "Actual board width", suffix: unit === "imperial" ? "in" : "mm", min: 0.1, step: 0.1 },
        { key: "gap", label: "Board gap", suffix: unit === "imperial" ? "in" : "mm", min: 0, step: 0.01 },
        { key: "boardLength", label: "Board length", suffix: lengthUnit, min: 0.1, step: 0.1 },
        { key: "waste", label: "Waste allowance", suffix: "%", min: 0, step: 1 },
        { key: "boardCost", label: "Cost per board", min: 0, step: 0.01 },
      ];
    case "brick":
      return [
        { key: "length", label: "Wall length", suffix: lengthUnit, min: 0, step: 0.1 },
        { key: "height", label: "Wall height", suffix: lengthUnit, min: 0, step: 0.1 },
        { key: "openingArea", label: "Doors & windows", suffix: areaUnit, min: 0, step: 0.1 },
        { key: "brickLength", label: "Brick length", suffix: unit === "imperial" ? "in" : "cm", min: 0.1, step: 0.1 },
        { key: "brickHeight", label: "Brick height", suffix: unit === "imperial" ? "in" : "cm", min: 0.1, step: 0.1 },
        { key: "joint", label: "Mortar joint", suffix: unit === "imperial" ? "in" : "cm", min: 0, step: 0.01 },
        { key: "waste", label: "Waste allowance", suffix: "%", min: 0, step: 1 },
        { key: "unitCost", label: "Cost per brick", min: 0, step: 0.01 },
      ];
    case "fence":
      return [
        { key: "runLength", label: "Total fence run", suffix: lengthUnit, min: 0, step: 0.1 },
        { key: "panelWidth", label: "Panel width", suffix: lengthUnit, min: 0.1, step: 0.1 },
        { key: "gateWidth", label: "Width per gate", suffix: lengthUnit, min: 0, step: 0.1 },
        { key: "gateCount", label: "Number of gates", min: 0, step: 1 },
        { key: "waste", label: "Extra panel allowance", suffix: "%", min: 0, step: 1 },
        { key: "panelCost", label: "Cost per panel", min: 0, step: 0.01 },
        { key: "postCost", label: "Cost per post", min: 0, step: 0.01 },
      ];
    case "insulation":
      return [
        { key: "length", label: "Surface length", suffix: lengthUnit, min: 0, step: 0.1 },
        { key: "height", label: "Surface height", suffix: lengthUnit, min: 0, step: 0.1 },
        { key: "openingArea", label: "Doors & windows", suffix: areaUnit, min: 0, step: 0.1 },
        { key: "packageCoverage", label: "Coverage per package", suffix: areaUnit, min: 0.01, step: 0.01 },
        { key: "waste", label: "Waste allowance", suffix: "%", min: 0, step: 1 },
        { key: "packageCost", label: "Cost per package", min: 0, step: 0.01 },
      ];
    case "wallpaper":
      return [
        { key: "width", label: "Total wall width", suffix: lengthUnit, min: 0, step: 0.1 },
        { key: "height", label: "Wall height", suffix: lengthUnit, min: 0, step: 0.1 },
        { key: "openingArea", label: "Doors & windows", suffix: areaUnit, min: 0, step: 0.1 },
        { key: "rollWidth", label: "Roll width", suffix: unit === "imperial" ? "in" : "cm", min: 0.1, step: 0.1 },
        { key: "rollLength", label: "Roll length", suffix: lengthUnit, min: 0.1, step: 0.1 },
        { key: "patternRepeat", label: "Vertical pattern repeat", suffix: unit === "imperial" ? "in" : "cm", min: 0, step: 0.1 },
        { key: "waste", label: "Waste allowance", suffix: "%", min: 0, step: 1 },
        { key: "rollCost", label: "Cost per roll", min: 0, step: 0.01 },
      ];
    case "stair":
      return [
        { key: "totalRise", label: "Finished floor-to-floor rise", suffix: unit === "imperial" ? "in" : "cm", min: 0.1, step: 0.1 },
        { key: "targetRise", label: "Target riser height", suffix: unit === "imperial" ? "in" : "cm", min: 0.1, step: 0.1 },
        { key: "treadDepth", label: "Tread depth", suffix: unit === "imperial" ? "in" : "cm", min: 0.1, step: 0.1 },
        { key: "treadCost", label: "Cost per tread", min: 0, step: 0.01 },
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

  if (tool === "gravel") {
    if (unit === "imperial") {
      const cubicFeet =
        (v.length || 0) *
        (v.width || 0) *
        ((v.depth || 0) / 12) *
        factor;
      const pounds = cubicFeet * Math.max(v.density || 1, 1);
      const tons = pounds / 2000;
      const bags = Math.ceil(pounds / Math.max(v.bagSize || 0.1, 0.1));
      return {
        label: "Gravel required",
        primary: `${format(tons, 2)} tons`,
        stats: [
          ["Adjusted volume", `${format(cubicFeet, 2)} ft³`],
          ["Full bags", `${bags} bags · ${currency} ${format(bags * (v.bagCost || 0), 2)}`],
          ["Bulk material estimate", `${currency} ${format(tons * (v.bulkCost || 0), 2)}`],
        ],
        note:
          "Gravel density changes with stone type, moisture, and compaction. Use a supplier value when available.",
      };
    }
    const cubicMetres =
      (v.length || 0) *
      (v.width || 0) *
      ((v.depth || 0) / 100) *
      factor;
    const kilograms = cubicMetres * Math.max(v.density || 1, 1);
    const tonnes = kilograms / 1000;
    const bags = Math.ceil(kilograms / Math.max(v.bagSize || 0.1, 0.1));
    return {
      label: "Gravel required",
      primary: `${format(tonnes, 2)} tonnes`,
      stats: [
        ["Adjusted volume", `${format(cubicMetres, 3)} m³`],
        ["Full bags", `${bags} bags · ${currency} ${format(bags * (v.bagCost || 0), 2)}`],
        ["Bulk material estimate", `${currency} ${format(tonnes * (v.bulkCost || 0), 2)}`],
      ],
      note:
        "Gravel density changes with stone type, moisture, and compaction. Use a supplier value when available.",
    };
  }

  if (tool === "drywall") {
    const wallArea = Math.max(
      0,
      2 * ((v.length || 0) + (v.width || 0)) * (v.height || 0) -
        (v.openingArea || 0),
    );
    const boardArea = wallArea + Math.max(v.ceilingArea || 0, 0);
    const sheetArea =
      Math.max(v.sheetWidth || 0.1, 0.1) *
      Math.max(v.sheetHeight || 0.1, 0.1);
    const sheets = Math.ceil((boardArea * factor) / sheetArea);
    return {
      label: "Drywall required",
      primary: `${sheets} sheets`,
      stats: [
        ["Board surface area", `${format(boardArea)} ${unit === "imperial" ? "sq ft" : "m²"}`],
        ["Adjusted coverage", `${format(boardArea * factor)} ${unit === "imperial" ? "sq ft" : "m²"}`],
        ["Estimated sheet cost", `${currency} ${format(sheets * (v.sheetCost || 0), 2)}`],
      ],
      note:
        "Sheet layout, framing direction, offcuts, and safe handling can change the practical quantity.",
    };
  }

  if (tool === "roofing") {
    const planArea = (v.length || 0) * (v.width || 0);
    const radians = Math.min(Math.max(v.pitchAngle || 0, 0), 80) * (Math.PI / 180);
    const roofArea = planArea / Math.max(Math.cos(radians), 0.01);
    const targetCoverage = roofArea * factor;
    const bundles = Math.ceil(
      targetCoverage / Math.max(v.bundleCoverage || 0.01, 0.01),
    );
    return {
      label: "Shingle bundles required",
      primary: `${bundles} bundles`,
      stats: [
        [
          unit === "imperial" ? "Roofing squares" : "Sloped roof area",
          unit === "imperial"
            ? `${format(roofArea / 100, 2)} squares`
            : `${format(roofArea, 2)} m²`,
        ],
        ["Adjusted coverage", `${format(targetCoverage)} ${unit === "imperial" ? "sq ft" : "m²"}`],
        ["Estimated material cost", `${currency} ${format(bundles * (v.bundleCost || 0), 2)}`],
      ],
      note:
        "This is a surface-material estimate. Underlayment, flashing, ridge caps, starter strips, and structure are separate.",
    };
  }

  if (tool === "mulch") {
    if (unit === "imperial") {
      const cubicFeet =
        (v.length || 0) *
        (v.width || 0) *
        ((v.depth || 0) / 12) *
        factor;
      const cubicYards = cubicFeet / 27;
      const bags = Math.ceil(cubicFeet / Math.max(v.bagVolume || 0.01, 0.01));
      return {
        label: "Mulch required",
        primary: `${bags} bags`,
        stats: [
          ["Bulk volume", `${format(cubicYards, 2)} yd³`],
          ["Bag material cost", `${currency} ${format(bags * (v.bagCost || 0), 2)}`],
          ["Bulk material estimate", `${currency} ${format(cubicYards * (v.bulkCost || 0), 2)}`],
        ],
        note:
          "Bag volume and recommended depth vary by product and planting conditions. Check the label before buying.",
      };
    }
    const cubicMetres =
      (v.length || 0) *
      (v.width || 0) *
      ((v.depth || 0) / 100) *
      factor;
    const litres = cubicMetres * 1000;
    const bags = Math.ceil(litres / Math.max(v.bagVolume || 0.01, 0.01));
    return {
      label: "Mulch required",
      primary: `${bags} bags`,
      stats: [
        ["Bulk volume", `${format(cubicMetres, 2)} m³`],
        ["Bag material cost", `${currency} ${format(bags * (v.bagCost || 0), 2)}`],
        ["Bulk material estimate", `${currency} ${format(cubicMetres * (v.bulkCost || 0), 2)}`],
      ],
      note:
        "Bag volume and recommended depth vary by product and planting conditions. Check the label before buying.",
    };
  }

  if (tool === "decking") {
    const widthInBoardUnits =
      unit === "imperial" ? (v.width || 0) * 12 : (v.width || 0) * 1000;
    const moduleWidth =
      Math.max(v.boardWidth || 0.1, 0.1) + Math.max(v.gap || 0, 0);
    const rows = Math.ceil(widthInBoardUnits / moduleWidth);
    const linearLength = rows * (v.length || 0) * factor;
    const boards = Math.ceil(
      linearLength / Math.max(v.boardLength || 0.1, 0.1),
    );
    const area = (v.length || 0) * (v.width || 0);
    return {
      label: "Decking boards required",
      primary: `${boards} boards`,
      stats: [
        ["Deck area", `${format(area)} ${unit === "imperial" ? "sq ft" : "m²"}`],
        ["Board rows & linear length", `${rows} rows · ${format(linearLength)} ${unit === "imperial" ? "linear ft" : "linear m"}`],
        ["Estimated board cost", `${currency} ${format(boards * (v.boardCost || 0), 2)}`],
      ],
      note:
        "This estimates surface boards only. Framing, fascia, stairs, railings, fasteners, and special border layouts are separate.",
    };
  }

  if (tool === "brick") {
    const wallArea = Math.max(
      0,
      (v.length || 0) * (v.height || 0) - (v.openingArea || 0),
    );
    const modularArea =
      unit === "imperial"
        ? ((v.brickLength || 0) + (v.joint || 0)) *
          ((v.brickHeight || 0) + (v.joint || 0)) /
          144
        : (((v.brickLength || 0) + (v.joint || 0)) / 100) *
          (((v.brickHeight || 0) + (v.joint || 0)) / 100);
    const bricks =
      modularArea > 0 ? Math.ceil((wallArea * factor) / modularArea) : 0;
    return {
      label: "Bricks required",
      primary: `${bricks} bricks`,
      stats: [
        ["Net wall area", `${format(wallArea)} ${unit === "imperial" ? "sq ft" : "m²"}`],
        ["Area incl. waste", `${format(wallArea * factor)} ${unit === "imperial" ? "sq ft" : "m²"}`],
        ["Estimated brick cost", `${currency} ${format(bricks * (v.unitCost || 0), 2)}`],
      ],
      note:
        "This estimates face brick quantity only. Wall thickness, bond pattern, corners, mortar, and structural requirements are separate.",
    };
  }

  if (tool === "fence") {
    const gates = Math.max(Math.floor(v.gateCount || 0), 0);
    const netRun = Math.max(
      0,
      (v.runLength || 0) - gates * Math.max(v.gateWidth || 0, 0),
    );
    const panels = Math.ceil(
      (netRun / Math.max(v.panelWidth || 0.1, 0.1)) * factor,
    );
    const posts = panels > 0 ? panels + 1 + gates : gates * 2;
    const cost =
      panels * (v.panelCost || 0) + posts * (v.postCost || 0);
    return {
      label: "Fence panels required",
      primary: `${panels} panels`,
      stats: [
        ["Posts to plan for", `${posts} posts`],
        ["Net panel run", `${format(netRun)} ${unit === "imperial" ? "ft" : "m"}`],
        ["Panel & post estimate", `${currency} ${format(cost, 2)}`],
      ],
      note:
        "Corners, slopes, end conditions, gate hardware, post depth, concrete, and local requirements can change the final material list.",
    };
  }

  if (tool === "insulation") {
    const netArea = Math.max(
      0,
      (v.length || 0) * (v.height || 0) - (v.openingArea || 0),
    );
    const targetArea = netArea * factor;
    const coverage = Math.max(v.packageCoverage || 0.01, 0.01);
    const packages = Math.ceil(targetArea / coverage);
    return {
      label: "Insulation packages required",
      primary: `${packages} packages`,
      stats: [
        ["Net surface area", `${format(netArea)} ${unit === "imperial" ? "sq ft" : "m²"}`],
        ["Purchased coverage", `${format(packages * coverage)} ${unit === "imperial" ? "sq ft" : "m²"}`],
        ["Estimated material cost", `${currency} ${format(packages * (v.packageCost || 0), 2)}`],
      ],
      note:
        "Confirm cavity size, required R-value, vapor control, and the package coverage printed for the selected product.",
    };
  }

  if (tool === "wallpaper") {
    const netArea = Math.max(
      0,
      (v.width || 0) * (v.height || 0) - (v.openingArea || 0),
    );
    const rollWidth =
      unit === "imperial"
        ? (v.rollWidth || 0) / 12
        : (v.rollWidth || 0) / 100;
    const repeat =
      unit === "imperial"
        ? (v.patternRepeat || 0) / 12
        : (v.patternRepeat || 0) / 100;
    const stripLength =
      repeat > 0
        ? Math.ceil((v.height || 0) / repeat - 1e-9) * repeat
        : Math.max(v.height || 0, 0);
    const coveragePerStrip =
      Math.max(rollWidth, 0.001) * Math.max(v.height || 0, 0.001);
    const strips = Math.ceil((netArea * factor) / coveragePerStrip);
    const stripsPerRoll = Math.max(
      1,
      Math.floor((v.rollLength || 0) / Math.max(stripLength, 0.001)),
    );
    const rolls = Math.ceil(strips / stripsPerRoll);
    return {
      label: "Wallpaper rolls required",
      primary: `${rolls} rolls`,
      stats: [
        ["Strips required", `${strips} strips`],
        ["Usable strips per roll", `${stripsPerRoll} strips`],
        ["Estimated material cost", `${currency} ${format(rolls * (v.rollCost || 0), 2)}`],
      ],
      note:
        "Pattern matching method, trimming, half-drop repeats, and dye-lot availability can increase the practical roll quantity.",
    };
  }

  if (tool === "stair") {
    const totalRise = Math.max(v.totalRise || 0, 0);
    const risers = Math.max(
      1,
      Math.round(totalRise / Math.max(v.targetRise || 0.1, 0.1)),
    );
    const actualRise = totalRise / risers;
    const treads = Math.max(risers - 1, 0);
    const totalRun = treads * Math.max(v.treadDepth || 0, 0);
    const stringerLength = Math.hypot(totalRise, totalRun);
    const dimensionUnit = unit === "imperial" ? "in" : "cm";
    return {
      label: "Stair risers",
      primary: `${risers} risers`,
      stats: [
        ["Actual riser height", `${format(actualRise, 2)} ${dimensionUnit}`],
        ["Treads & total run", `${treads} treads · ${format(totalRun, 1)} ${dimensionUnit}`],
        ["Approx. stringer & tread cost", `${format(stringerLength, 1)} ${dimensionUnit} · ${currency} ${format(treads * (v.treadCost || 0), 2)}`],
      ],
      note:
        "This is a geometry planning estimate. Verify rise, run, headroom, landings, handrails, structural details, and local code before construction.",
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
