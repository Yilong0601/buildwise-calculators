import { CalculatorTool } from "./calculator-tool";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { ToolIcon } from "./tool-icon";
import { toolById, tools, type ToolKey } from "../lib/calculators";

export function CalculatorSeoPage({ tool }: { tool: ToolKey }) {
  const spec = toolById[tool];
  const related = spec.related
    ? spec.related.map((id) => toolById[id])
    : tools.filter((item) => item.id !== tool).slice(0, 4);
  const pageTitle = spec.pageTitle ?? `${spec.name} calculator`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: pageTitle,
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
            {pageTitle}
          </p>
          <p className="eyebrow">
            <span />
            Free project planning tool
          </p>
          <h1>{pageTitle}</h1>
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
        {spec.guideSections?.map((section) => (
          <article key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.bullets ? (
              <ul>
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}

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
