import type { ToolKey } from "./calculators";

export type GuideSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  steps?: string[];
  formula?: string;
};

export type GuideSpec = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  summary: string;
  updated: string;
  readingTime: string;
  calculator: { label: string; href: string };
  sections: GuideSection[];
  faqs: Array<{ question: string; answer: string }>;
  references: Array<{ label: string; href: string; note: string }>;
  related: string[];
};

export const guides: GuideSpec[] = [
  {
    slug: "how-to-estimate-project-cost",
    title: "How to estimate project cost: a practical step-by-step guide",
    shortTitle: "Estimate project cost",
    description:
      "Build a clear project cost estimate from measured quantities, material rates, labor, delivery, contingency, and tax.",
    summary:
      "A useful budget is more than one price per square foot. This guide shows how to separate quantities, purchase costs, labor, fixed charges, risk, and tax so every part can be checked and updated.",
    updated: "August 2026",
    readingTime: "8 min read",
    calculator: {
      label: "Open the project cost calculator",
      href: "/project-cost-calculator",
    },
    sections: [
      {
        title: "1. Define the scope before you price it",
        paragraphs: [
          "Start by writing down what the estimate includes and excludes. A flooring estimate might include finished flooring, underlayment, trim, delivery, installation labor, disposal, and tax. If one of those items is missing, two estimates that look different may actually be pricing different scopes.",
          "Split a larger project into measurable work areas. A room, roof plane, wall, slab, or garden bed is easier to verify than one combined number. Keep the measurement source beside each line item so you can correct one area without rebuilding the whole budget.",
        ],
        bullets: [
          "List the physical areas or tasks included in the project.",
          "Record exclusions such as permits, structural repair, equipment rental, or design work.",
          "Note whether work will be DIY, contracted, or divided between both.",
        ],
      },
      {
        title: "2. Convert measurements into purchase quantities",
        paragraphs: [
          "Calculate the net quantity first, then add a material-specific allowance for cuts, breakage, spillage, or pattern matching. Finally, convert that adjusted quantity into the way the product is actually sold: complete boxes, bags, cans, boards, rolls, or bundles.",
          "This order matters. Pricing 212 square feet of flooring when the supplier sells 23.5-square-foot boxes can understate the purchase. The real order is ten full boxes, or 235 square feet. BuildWise calculators round package quantities upward so the cost reflects a realistic purchase rather than a fractional package.",
        ],
        formula:
          "Purchase quantity = round up[(measured quantity × (1 + waste allowance)) ÷ package coverage]",
      },
      {
        title: "3. Use current, comparable rates",
        paragraphs: [
          "Use the price and coverage from the exact product you are considering. A unit price is only comparable when the unit is the same. One supplier may quote per square foot, another per box, and another before delivery or tax. Convert each offer to the same basis before comparing it.",
          "Labor should be separated from materials even when both are quoted as one rate. This makes it easier to test a material upgrade, compare DIY savings, or understand why a professional quote differs. If labor is a fixed bid rather than an area rate, enter it as a separate project charge instead of forcing it into the material calculation.",
        ],
        bullets: [
          "Record the date and source of each price.",
          "Confirm whether quoted prices include tax, delivery, minimum orders, and disposal.",
          "Use one currency throughout; a currency label does not perform exchange-rate conversion.",
        ],
      },
      {
        title: "4. Keep waste and contingency separate",
        paragraphs: [
          "Material waste covers physical quantity: cuts, breakage, matching, damaged pieces, and useful spares. Contingency covers cost uncertainty: hidden conditions, small scope changes, or price movement. Combining them into one percentage makes it difficult to see whether the order quantity or the budget is being protected.",
          "Choose both allowances from the project, not from habit. A simple rectangular room has fewer unknowns than a renovation with demolition and concealed conditions. Write down why you selected each allowance so it can be reviewed instead of becoming an unexplained buffer.",
        ],
      },
      {
        title: "5. Work through a transparent example",
        paragraphs: [
          "Assume a 250-square-foot project, material at 4.25 per square foot, labor at 3.50 per square foot, 10% material waste, and 100 for delivery. Material cost is 250 × 4.25 × 1.10 = 1,168.75. Labor is 250 × 3.50 = 875. Adding delivery produces a subtotal of 2,143.75.",
          "If the project uses a 5% contingency, add 107.19. If 7% tax applies to the resulting taxable amount, add 157.57, producing a planning total of 2,408.51. Tax rules vary, so confirm what is taxable locally. The value of the example is not the final number; it is that every layer can be traced back to an input.",
        ],
      },
      {
        title: "6. Review the estimate like a quote",
        paragraphs: [
          "Before buying, compare the estimate with the supplier’s package coverage and a written contractor or installer quote. Check for accessories that are easy to miss: fasteners, adhesive, primer, underlayment, trim, flashing, delivery, disposal, and tool rental.",
          "Save the version you used and update only the inputs that changed. A good estimate is a decision document, not a promise. Site conditions, product requirements, local codes, and professional recommendations take priority over a general planning calculation.",
        ],
      },
    ],
    faqs: [
      {
        question: "What should a project cost estimate include?",
        answer:
          "Include measured material quantities, full-package purchase cost, labor, delivery, equipment or disposal, contingency, and applicable tax. State exclusions so comparisons use the same scope.",
      },
      {
        question: "Is waste the same as contingency?",
        answer:
          "No. Waste increases the physical material quantity. Contingency protects the budget against uncertain costs or scope. Keeping them separate makes the estimate easier to review.",
      },
      {
        question: "Can this replace a contractor quote?",
        answer:
          "No. It is an early planning method. Confirm product quantities with the supplier and use qualified professional quotes for labor, structural work, permits, and site-specific requirements.",
      },
    ],
    references: [
      {
        label: "QUIKRETE concrete quantity calculator",
        href: "https://www.quikrete.com/calculator/main.asp",
        note: "Manufacturer resource illustrating product-specific quantity and bag planning.",
      },
      {
        label: "Sherwin-Williams paint calculator guidance",
        href: "https://www.sherwin-williams.com/en-us/color/color-tools/paint-calculator",
        note: "Manufacturer guidance for measuring rooms and estimating paint.",
      },
    ],
    related: [
      "construction-material-estimating-checklist",
      "material-waste-allowance",
      "calculator-methodology-and-assumptions",
    ],
  },
  {
    slug: "roofing-squares-and-shingle-bundles",
    title: "Roofing squares and shingle bundles explained",
    shortTitle: "Roofing squares & bundles",
    description:
      "Learn how roof area, pitch, roofing squares, bundle coverage, and waste work together in a shingle estimate.",
    summary:
      "Roofing is usually purchased by bundle but planned by surface area and roofing squares. This guide connects those units, explains the effect of pitch, and shows where a simple estimate needs professional verification.",
    updated: "August 2026",
    readingTime: "7 min read",
    calculator: {
      label: "Open the roofing calculator",
      href: "/roofing-calculator",
    },
    sections: [
      {
        title: "What a roofing square means",
        paragraphs: [
          "A roofing square is 100 square feet of roof surface. It is an area unit used to communicate roofing quantity; it is not the size of a package and it does not mean the roof is square-shaped. A 2,500-square-foot roof surface contains 25 roofing squares.",
          "Do not confuse house floor area with roof surface area. Overhangs, separate roof planes, and slope can make the roof surface larger than the building footprint. Measure each plane when possible and add the areas together.",
        ],
        formula: "Roofing squares = total sloped roof area ÷ 100 sq ft",
      },
      {
        title: "How pitch changes surface area",
        paragraphs: [
          "A roof viewed from above has a horizontal plan area. The installed shingles cover the longer sloped surface. For a simple roof, the calculator converts plan area to sloped area using the pitch angle. As pitch increases, the surface multiplier increases too.",
          "The result is only as good as the roof shape entered. Dormers, valleys, intersecting roofs, changes in pitch, and unusual overhangs should be measured as separate planes. Steep or difficult roofs should be measured and worked on by a qualified roofing professional using appropriate safety procedures.",
        ],
        formula: "Sloped area = horizontal plan area ÷ cos(pitch angle)",
      },
      {
        title: "From roofing squares to full bundles",
        paragraphs: [
          "Shingles are packaged in bundles, and coverage varies by product. Some common products use about three bundles per roofing square, but that is not a universal conversion. Use the coverage printed on the wrapper or technical data for the exact shingle.",
          "Add the waste allowance to the sloped area, divide by the product’s coverage per bundle, and round up. Never buy a fractional bundle in the estimate. Starter strips and hip-and-ridge products can have different linear coverage and should be estimated separately.",
        ],
        formula:
          "Full bundles = round up[(sloped area × (1 + waste allowance)) ÷ coverage per bundle]",
      },
      {
        title: "Choose waste for the roof geometry",
        paragraphs: [
          "Waste is affected by the number of cuts and transitions, not only by roof size. A simple gable roof usually has fewer offcuts than a roof with hips, valleys, dormers, skylights, and short planes. Shingle layout and product instructions also affect usable coverage.",
          "Treat any default waste percentage as a starting assumption. Sketch the planes, identify high-cut areas, and confirm the allowance with the installer or supplier. Keep unopened spare material only when product storage and future color matching make that practical.",
        ],
      },
      {
        title: "Worked bundle example",
        paragraphs: [
          "Suppose the roof footprint is 40 by 24 feet and the pitch angle is 22.6 degrees. The 960-square-foot plan becomes about 1,040 square feet of sloped area. Adding 12% waste produces roughly 1,165 square feet of target coverage, or 11.65 roofing squares.",
          "If the selected bundle covers 32.3 square feet, divide 1,165 by 32.3 and round up. The purchase estimate is 37 full bundles. Then estimate underlayment, starter, ridge cap, flashing, fasteners, ventilation, disposal, and labor as separate system components.",
        ],
      },
      {
        title: "What a simple roofing estimate does not decide",
        paragraphs: [
          "A bundle calculation does not select a roof assembly, determine code compliance, diagnose the deck, design ventilation, or establish safe installation methods. It also does not determine whether an existing layer can remain or whether damaged sheathing must be replaced.",
          "Use the result to prepare questions and compare quantities. Before ordering, verify the measured planes, product instructions, accessory coverage, local requirements, and installation plan with the manufacturer, supplier, and a qualified roofer.",
        ],
      },
    ],
    faqs: [
      {
        question: "How many square feet are in one roofing square?",
        answer:
          "One roofing square equals 100 square feet of roof surface.",
      },
      {
        question: "Are there always three shingle bundles in a square?",
        answer:
          "No. About three bundles per square is common for some asphalt shingles, but bundle coverage varies. Use the exact manufacturer coverage for the selected product.",
      },
      {
        question: "Does the bundle count include ridge cap and starter shingles?",
        answer:
          "No. Field shingles, starter products, and hip-and-ridge products can use different coverage units and should be checked separately.",
      },
    ],
    references: [
      {
        label: "GAF: What Is a Roofing Square?",
        href: "https://www.gaf.com/en-us/blog/your-home/what-is-a-roofing-square-f955fe18-daf9-4b0c-b78e-28ca178caa35",
        note: "Manufacturer explanation of roof planes, 100-square-foot roofing squares, bundles, and roof complexity.",
      },
      {
        label: "CertainTeed SwiftStart product coverage",
        href: "https://www.certainteed.com/products/residential-roofing-products/swiftstart",
        note: "Example showing why starter-product coverage must be checked separately from field shingles.",
      },
    ],
    related: [
      "material-waste-allowance",
      "construction-material-estimating-checklist",
      "calculator-methodology-and-assumptions",
    ],
  },
  {
    slug: "material-waste-allowance",
    title: "Material waste allowance: how much extra should you plan?",
    shortTitle: "Material waste allowance",
    description:
      "Choose a waste allowance based on cuts, breakage, patterns, package sizes, and project complexity instead of one universal percentage.",
    summary:
      "Extra material is useful only when it covers a real source of loss. Learn how to separate net quantity, waste-adjusted quantity, full-package rounding, and budget contingency for a more explainable order.",
    updated: "August 2026",
    readingTime: "7 min read",
    calculator: {
      label: "Browse material calculators",
      href: "/#calculators",
    },
    sections: [
      {
        title: "Waste allowance is a planning assumption",
        paragraphs: [
          "A waste allowance increases the calculated material quantity to cover pieces or product that will not become finished work. Common causes include cuts, breakage, defects, pattern alignment, color selection, spillage, irregular surfaces, and useful repair stock.",
          "It is not a universal surcharge. Two projects with the same measured area can need different allowances because one is a simple rectangle and the other has angles, openings, transitions, or a repeating pattern. Write down the reason for the percentage instead of applying a familiar number automatically.",
        ],
      },
      {
        title: "Calculate net quantity before adding extra",
        paragraphs: [
          "Start with the finished area or volume. Subtract large openings only when the material will genuinely not be used there, and avoid false precision when site measurements are rough. Then multiply the net quantity by one plus the waste rate.",
          "For example, a 200-square-foot tile surface with an 8% allowance has a target quantity of 216 square feet. That is not yet the final order. If each box covers 15.5 square feet, the order rounds up to 14 boxes, providing 217 square feet.",
        ],
        formula: "Waste-adjusted quantity = net quantity × (1 + waste %)",
      },
      {
        title: "Match the allowance to the material",
        paragraphs: [
          "Different materials lose quantity in different ways. Tile and flooring create offcuts at walls and doorways. Roofing creates waste at rakes, valleys, hips, and penetrations. Paint consumption changes with coats, surface porosity, texture, and application. Concrete volume can be affected by uneven excavation, form variation, and spillage.",
          "Use the calculator’s default only as a neutral starting point. Replace it after reviewing the product instructions, layout, installer recommendation, and site conditions. Manufacturer coverage or yield should also replace a generic default whenever it is available.",
        ],
        bullets: [
          "More corners, angles, transitions, or small pieces usually increase cuts.",
          "Diagonal, herringbone, centered, or repeating patterns can increase unusable offcuts.",
          "Fragile, highly varied, or special-order materials may justify useful spare stock.",
          "Large simple areas can sometimes use material more efficiently than many small areas.",
        ],
      },
      {
        title: "Do not count package rounding twice",
        paragraphs: [
          "Waste allowance and package rounding solve different problems. Waste adjusts the target quantity for expected loss. Package rounding converts that target into a purchasable order. The last box or bundle may already create more spare coverage than the chosen percentage suggests.",
          "Review the actual purchased coverage after rounding. If the rounded order supplies a sufficient buffer, do not add another package merely to recreate the percentage exactly. Conversely, confirm that partial-package sales are truly available before using a fractional quantity.",
        ],
      },
      {
        title: "Keep material extra separate from budget risk",
        paragraphs: [
          "Material waste should not absorb unrelated costs. A hidden repair, permit change, labor delay, or price increase does not require more square feet of finish material; it requires a budget contingency or a separate line item.",
          "Separating the two makes the estimate easier to explain. The supplier can review the order quantity, while the owner or project team can review the financial risk allowance. If conditions change, you can adjust the correct layer without distorting the other one.",
        ],
      },
      {
        title: "A quick waste review before ordering",
        paragraphs: [
          "Sketch the layout and mark high-cut locations. Confirm whether package coverage is nominal or usable, whether mixed cartons or dye lots matter, and whether unopened packages can be returned. Ask the installer what offcuts can be reused and what spare material should remain for repairs.",
          "Finally, compare net quantity, adjusted quantity, full-package quantity, and purchased coverage side by side. That four-number check is more useful than focusing on a percentage alone.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is 10% waste always enough?",
        answer:
          "No. Ten percent is a common planning input for some simple layouts, not a rule. Material, pattern, room geometry, defects, handling, and installer method can justify a lower or higher allowance.",
      },
      {
        question: "Should I add waste before rounding to boxes?",
        answer:
          "Yes. Add the allowance to the net quantity, divide by package coverage, then round up to complete packages. Review the actual purchased coverage after rounding.",
      },
      {
        question: "Is contingency part of material waste?",
        answer:
          "No. Contingency is a budget allowance for uncertain costs. Material waste is additional physical quantity for expected loss or spares.",
      },
    ],
    references: [
      {
        label: "Shaw Floors laminate installation guidance",
        href: "https://shawfloors.com/en-us/plan-and-install/laminate",
        note: "Manufacturer planning and installation guidance showing why product and site requirements must be checked.",
      },
      {
        label: "GAF roofing-square guidance",
        href: "https://www.gaf.com/en-us/blog/your-home/what-is-a-roofing-square-f955fe18-daf9-4b0c-b78e-28ca178caa35",
        note: "Manufacturer discussion of how roof complexity, cuts, and dormers influence shingle waste.",
      },
      {
        label: "QUIKRETE concrete quantity calculator",
        href: "https://www.quikrete.com/calculator/main.asp",
        note: "Product-specific resource for checking concrete quantities and packaged material.",
      },
    ],
    related: [
      "construction-material-estimating-checklist",
      "roofing-squares-and-shingle-bundles",
      "calculator-methodology-and-assumptions",
    ],
  },
  {
    slug: "construction-material-estimating-checklist",
    title: "Construction material estimating checklist",
    shortTitle: "Estimating checklist",
    description:
      "A repeatable checklist for measuring a project, verifying product coverage, rounding packages, pricing the order, and reviewing the result.",
    summary:
      "Use this checklist before you calculate, before you buy, and before work begins. It keeps measurement, product data, package quantities, accessories, and cost assumptions visible in one repeatable process.",
    updated: "August 2026",
    readingTime: "8 min read",
    calculator: {
      label: "Browse all calculators",
      href: "/#calculators",
    },
    sections: [
      {
        title: "Before measuring: define the work",
        paragraphs: [
          "Write a one-sentence scope for each estimate. Identify the surface or assembly, the material, and the stopping point. A scope such as ‘replace bedroom flooring including underlayment and trim’ is easier to estimate than ‘redo bedroom.’ ",
          "Decide which quantities need separate calculations. Walls, ceilings, openings, roof planes, slab sections, stairs, borders, and transitions often use different formulas or products. Photograph or sketch irregular areas and label every dimension.",
        ],
        steps: [
          "State what is included and excluded.",
          "Divide the project into simple measurable areas.",
          "Choose imperial or metric units and use them consistently.",
          "Record field measurements twice for important dimensions.",
        ],
      },
      {
        title: "Measurement checklist",
        paragraphs: [
          "Measure the dimensions that drive the formula, not only the room’s advertised size. Paint needs perimeter and height; a slab needs thickness; roofing needs roof planes or plan dimensions plus pitch; mulch and gravel need installed depth.",
          "Keep raw measurements before rounding. Round only the final package quantity unless the product instructions require a different step. When a shape is irregular, divide it into rectangles, triangles, or other simple sections and add their quantities.",
        ],
        bullets: [
          "Include overhangs, closets, returns, borders, and other areas receiving material.",
          "Subtract openings only when appropriate for the material and desired buffer.",
          "Check thickness or depth units carefully; inches and feet are not interchangeable.",
          "Use safe, professional measurement for roofs, heights, and inaccessible areas.",
        ],
      },
      {
        title: "Product-data checklist",
        paragraphs: [
          "A calculator needs product inputs to become a purchase estimate. Find the exact coverage, yield, dimensions, package count, and installation instructions for the selected product. Marketing dimensions and usable installed coverage are not always the same.",
          "Save the product name or link with the estimate. If the product changes, update the coverage and package size rather than assuming the original quantity still applies.",
        ],
        steps: [
          "Find coverage or yield on the label, wrapper, data sheet, or manufacturer page.",
          "Confirm whether coverage is per coat, per box, per bundle, per bag, or per roll.",
          "Check required accessories, primer, underlayment, fasteners, trim, or system components.",
          "Review installation limits, expansion gaps, substrate preparation, and local requirements.",
        ],
      },
      {
        title: "Quantity and package checklist",
        paragraphs: [
          "Calculate the net finished quantity, add a reasoned waste allowance, divide by package coverage, and round upward to a full purchasable quantity. Keep all four values visible: net quantity, adjusted quantity, package count, and purchased coverage.",
          "Check whether the supplier sells only full packages, whether packages can be returned, and whether matching lots matter. The last package often supplies useful spares, so compare its extra coverage with the planned waste rather than automatically adding another unit.",
        ],
        formula:
          "Full packages = round up[(net quantity × (1 + waste allowance)) ÷ package coverage]",
      },
      {
        title: "Cost checklist",
        paragraphs: [
          "Price the actual full-package order, then add labor and fixed costs separately. Look for delivery minimums, equipment rental, demolition, disposal, permits, tax, and accessories. Record whether each supplier quote includes those items.",
          "Use contingency for uncertain project cost, not to hide missing scope. A transparent estimate is easier to update and easier to compare with a contractor quote.",
        ],
        bullets: [
          "Full-package material cost",
          "Labor or installation",
          "Delivery, equipment, and disposal",
          "Accessories and preparation materials",
          "Contingency and applicable tax",
        ],
      },
      {
        title: "Final review before purchase",
        paragraphs: [
          "Recheck the largest dimensions and the units. Confirm that a decimal was not entered in the wrong field and that depth, coverage, package size, and currency are current. Compare the result with a second method, supplier takeoff, or professional quote when the order is expensive or difficult to return.",
          "Print or copy the result and date it. Bring the product data and sketch to the supplier. For structural, code-controlled, safety-critical, or high-cost work, have the quantity and specifications reviewed by a qualified professional before ordering.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the most common estimating mistake?",
        answer:
          "Using a finished area as the purchase quantity without adding material-specific waste and converting it to full packages is a common source of under-ordering.",
      },
      {
        question: "Should I use product coverage or a generic default?",
        answer:
          "Use the exact product’s coverage or yield whenever available. Defaults are starting assumptions and can differ from the chosen product and installation conditions.",
      },
      {
        question: "When should a professional verify the estimate?",
        answer:
          "Use professional verification for structural or code-controlled work, unsafe measurements, complex assemblies, expensive orders, or projects where shortage or over-ordering has serious consequences.",
      },
    ],
    references: [
      {
        label: "Sherwin-Williams paint calculator guidance",
        href: "https://www.sherwin-williams.com/en-us/color/color-tools/paint-calculator",
        note: "Manufacturer resource for room measurements and paint quantity planning.",
      },
      {
        label: "QUIKRETE concrete quantity calculator",
        href: "https://www.quikrete.com/calculator/main.asp",
        note: "Manufacturer resource for slab, footing, and packaged concrete quantity checks.",
      },
      {
        label: "Shaw Floors installation resources",
        href: "https://shawfloors.com/en-us/plan-and-install/laminate",
        note: "Manufacturer guidance emphasizing product instructions and site preparation.",
      },
    ],
    related: [
      "how-to-estimate-project-cost",
      "material-waste-allowance",
      "calculator-methodology-and-assumptions",
    ],
  },
  {
    slug: "calculator-methodology-and-assumptions",
    title: "Calculator methodology and assumptions",
    shortTitle: "Methodology & assumptions",
    description:
      "How BuildWise calculators handle measurements, units, product coverage, waste, package rounding, cost, examples, and limitations.",
    summary:
      "BuildWise is designed to make planning estimates inspectable. This page explains the common calculation sequence, how defaults are chosen, what is rounded, and when product or professional guidance should replace a general estimate.",
    updated: "August 2026",
    readingTime: "7 min read",
    calculator: {
      label: "Browse all calculators",
      href: "/#calculators",
    },
    sections: [
      {
        title: "Our calculation sequence",
        paragraphs: [
          "Most BuildWise tools follow the same traceable sequence: calculate a geometric area or volume, apply user-selected allowances, convert the result using product coverage or yield, and round to a practical purchase unit. Cost is calculated from the full purchase quantity when products are sold only in complete packages.",
          "Every calculator displays its formula, an example, and editable assumptions. Calculations run in the browser and do not require an account. The displayed answer changes immediately when an input changes, making it possible to test product coverage, package size, waste, and price rather than relying on a hidden fixed estimate.",
        ],
        steps: [
          "Measure the relevant area, volume, length, or count.",
          "Apply coats, pitch, waste, or another project-specific adjustment.",
          "Divide by manufacturer coverage, yield, or package capacity.",
          "Round up when the product must be purchased in complete units.",
          "Multiply the practical purchase quantity by the entered price.",
        ],
      },
      {
        title: "Units and conversions",
        paragraphs: [
          "Imperial and metric modes use a shared calculation model with explicit conversion factors. Labels beside each field show the expected unit. Internally, inputs are converted to a consistent base before the result is formatted for the selected system.",
          "Switching unit systems is intended to change measurements, not the meaning of the project. Currency selection is different: it changes the label only. BuildWise does not retrieve exchange rates, so all cost inputs must already use the chosen currency.",
        ],
      },
      {
        title: "Defaults are editable assumptions",
        paragraphs: [
          "Defaults make a calculator usable before product research is complete, but they are not a recommendation for every brand or project. Coverage, yield, density, package size, waste, coats, thickness, and price can vary materially.",
          "Whenever possible, replace defaults with the exact label, wrapper, data sheet, supplier value, or installation guide for the selected product. The calculator page explains which inputs have the greatest effect and the result note calls attention to product-dependent values.",
        ],
      },
      {
        title: "Rounding and displayed precision",
        paragraphs: [
          "Intermediate calculations retain more precision than is displayed. Results are formatted to a readable number of decimal places, while purchase counts for indivisible packages are rounded upward. This avoids showing a false ability to buy part of a box, bag, can, roll, or bundle.",
          "Because the final package creates extra coverage, the displayed purchased quantity may exceed the waste-adjusted target. This is intentional. Users should still confirm partial-package availability, minimum orders, and return rules with the supplier.",
        ],
      },
      {
        title: "Content and review process",
        paragraphs: [
          "Calculator formulas are checked against basic geometry and publicly available manufacturer guidance. Examples are recalculated when a tool’s fields or formulas change. Guide pages link to representative primary sources so readers can verify terminology and see why exact product data matters.",
          "Pages show an update month. We review a calculator when its formula, default, product assumption, or explanatory content changes. BuildWise does not maintain local pricing databases or copy regional code requirements; users enter current prices and verify local rules with the appropriate authority or professional.",
        ],
      },
      {
        title: "Known limits",
        paragraphs: [
          "The tools simplify real projects into stated shapes and inputs. They cannot see concealed conditions, field tolerances, workmanship, structural requirements, product compatibility, local codes, taxes, or supplier stock. A mathematically correct result can still be unsuitable if the inputs or project model are wrong.",
          "Use BuildWise for early planning, option comparison, and a second check. Verify significant purchases with the manufacturer or supplier. Use qualified professionals for structural design, code compliance, hazardous or inaccessible measurements, and any work where safety depends on the specification.",
        ],
      },
    ],
    faqs: [
      {
        question: "Where do calculator defaults come from?",
        answer:
          "They are general planning starting points based on common units and representative manufacturer information. They are editable because actual product coverage, yield, package size, and site conditions vary.",
      },
      {
        question: "Why are package quantities rounded up?",
        answer:
          "When a product is sold only as a complete package, rounding up converts a theoretical material quantity into a practical purchase quantity.",
      },
      {
        question: "Does BuildWise store my project data?",
        answer:
          "No. Calculator inputs and calculations run in the browser; BuildWise does not provide an account or saved project database.",
      },
    ],
    references: [
      {
        label: "GAF roofing-square guidance",
        href: "https://www.gaf.com/en-us/blog/your-home/what-is-a-roofing-square-f955fe18-daf9-4b0c-b78e-28ca178caa35",
        note: "Primary manufacturer explanation used to check roofing terminology and bundle assumptions.",
      },
      {
        label: "QUIKRETE concrete quantity calculator",
        href: "https://www.quikrete.com/calculator/main.asp",
        note: "Primary manufacturer quantity resource used to check concrete planning concepts.",
      },
      {
        label: "Sherwin-Williams paint calculator guidance",
        href: "https://www.sherwin-williams.com/en-us/color/color-tools/paint-calculator",
        note: "Primary manufacturer guidance used to check paint measurement and coverage concepts.",
      },
      {
        label: "Shaw Floors installation resources",
        href: "https://shawfloors.com/en-us/plan-and-install/laminate",
        note: "Primary manufacturer guidance used to check flooring planning and installation caveats.",
      },
    ],
    related: [
      "how-to-estimate-project-cost",
      "material-waste-allowance",
      "construction-material-estimating-checklist",
    ],
  },
];

export const guideBySlug = Object.fromEntries(
  guides.map((guide) => [guide.slug, guide]),
) as Record<string, GuideSpec>;

const guideSlugsByTool: Record<ToolKey, string[]> = {
  paint: ["material-waste-allowance", "construction-material-estimating-checklist", "calculator-methodology-and-assumptions"],
  tile: ["material-waste-allowance", "construction-material-estimating-checklist", "calculator-methodology-and-assumptions"],
  flooring: ["material-waste-allowance", "construction-material-estimating-checklist", "how-to-estimate-project-cost"],
  concrete: ["construction-material-estimating-checklist", "material-waste-allowance", "calculator-methodology-and-assumptions"],
  cost: ["how-to-estimate-project-cost", "construction-material-estimating-checklist", "calculator-methodology-and-assumptions"],
  gravel: ["material-waste-allowance", "construction-material-estimating-checklist", "calculator-methodology-and-assumptions"],
  drywall: ["material-waste-allowance", "construction-material-estimating-checklist", "how-to-estimate-project-cost"],
  roofing: ["roofing-squares-and-shingle-bundles", "material-waste-allowance", "construction-material-estimating-checklist"],
  mulch: ["material-waste-allowance", "construction-material-estimating-checklist", "calculator-methodology-and-assumptions"],
  decking: ["material-waste-allowance", "how-to-estimate-project-cost", "construction-material-estimating-checklist"],
  brick: ["material-waste-allowance", "construction-material-estimating-checklist", "calculator-methodology-and-assumptions"],
  fence: ["material-waste-allowance", "how-to-estimate-project-cost", "construction-material-estimating-checklist"],
  insulation: ["construction-material-estimating-checklist", "material-waste-allowance", "calculator-methodology-and-assumptions"],
  wallpaper: ["material-waste-allowance", "construction-material-estimating-checklist", "calculator-methodology-and-assumptions"],
  stair: ["construction-material-estimating-checklist", "how-to-estimate-project-cost", "calculator-methodology-and-assumptions"],
};

export function guidesForTool(tool: ToolKey) {
  return guideSlugsByTool[tool].map((slug) => guideBySlug[slug]);
}
