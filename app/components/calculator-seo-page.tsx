import { CalculatorTool } from "./calculator-tool";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { ToolIcon } from "./tool-icon";
import { toolById, tools, type ToolKey } from "../lib/calculators";

export function CalculatorSeoPage({ tool }: { tool: ToolKey }) {
  const spec = toolById[tool];
  const related = tools.filter((item) => item.id !== tool).slice(0, 4);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: `${spec.name} Calculator`,
        url: `https://buildwisecalc.com/${spec.slug}`,
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Any",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: spec.seoDescription,
      },
      {
        "@type": "FAQPage",
        mainEntity: spec.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <main>
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="page-hero">
        <div>
          <p className="breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            {spec.name} calculator
          </p>
          <p className="eyebrow">
            <span />
            Free project planning tool
          </p>
          <h1>{spec.name} calculator</h1>
          <p>{spec.summary}</p>
          <div className="trust-row">
            <span>✓ Metric & imperial</span>
            <span>✓ Transparent assumptions</span>
            <span>✓ No signup</span>
          </div>
        </div>
        <div className="page-tool-mark">
          <ToolIcon type={spec.icon} />
          <strong>{spec.detail}</strong>
          <span>Instant estimate</span>
        </div>
      </section>

      <CalculatorTool tool={tool} />

      <section className="seo-content">
        <article className="formula-card">
          <p className="eyebrow">
            <span />
            Formula
          </p>
          <h2>{spec.formulaTitle}</h2>
          <ol>
            {spec.formulas.map((formula) => (
              <li key={formula}>{formula}</li>
            ))}
          </ol>
        </article>

        <article>
          <h2>Example calculation</h2>
          <p>{spec.example}</p>
        </article>

        <article>
          <h2>Planning tips</h2>
          <ul>
            {spec.tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </article>

        <section className="faq-section">
          <p className="eyebrow">
            <span />
            Common questions
          </p>
          <h2>{spec.name} calculator FAQ</h2>
          <div className="faq-list">
            {spec.faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="related-tools">
          <h2>Related calculators</h2>
          <div>
            {related.map((item) => (
              <a href={`/${item.slug}`} key={item.id}>
                <ToolIcon type={item.icon} />
                <span>
                  <strong>{item.name}</strong>
                  <small>{item.detail}</small>
                </span>
              </a>
            ))}
          </div>
        </section>
      </section>

      <SiteFooter />
    </main>
  );
}
