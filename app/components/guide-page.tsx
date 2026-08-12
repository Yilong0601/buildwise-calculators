import { guideBySlug } from "../lib/guides";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function GuidePage({ slug }: { slug: string }) {
  const guide = guideBySlug[slug];
  const related = guide.related.map((item) => guideBySlug[item]);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: guide.title,
        description: guide.description,
        dateModified: "2026-08-12",
        datePublished: "2026-08-12",
        mainEntityOfPage: `https://buildwisecalc.com/guides/${guide.slug}`,
        author: { "@type": "Organization", name: "BuildWise Calculators" },
        publisher: { "@type": "Organization", name: "BuildWise Calculators" },
      },
      {
        "@type": "FAQPage",
        mainEntity: guide.faqs.map((faq) => ({
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
      <section className="guide-hero">
        <p className="breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          Planning guide
        </p>
        <p className="eyebrow">
          <span />
          Planning guide
        </p>
        <h1>{guide.title}</h1>
        <p className="guide-summary">{guide.summary}</p>
        <div className="guide-meta">
          <span>Updated {guide.updated}</span>
          <span>{guide.readingTime}</span>
          <span>Reviewed by BuildWise</span>
        </div>
        <a className="content-cta" href={guide.calculator.href}>
          {guide.calculator.label} <span aria-hidden="true">→</span>
        </a>
      </section>

      <div className="guide-layout">
        <aside className="guide-toc" aria-label="On this page">
          <strong>On this page</strong>
          {guide.sections.map((section, index) => (
            <a href={`#section-${index + 1}`} key={section.title}>
              {section.title}
            </a>
          ))}
          <a href="#questions">Common questions</a>
          <a href="#references">Sources & references</a>
        </aside>

        <article className="guide-article">
          {guide.sections.map((section, index) => (
            <section id={`section-${index + 1}`} key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.formula ? (
                <div className="guide-formula">
                  <span>Formula</span>
                  <strong>{section.formula}</strong>
                </div>
              ) : null}
              {section.steps ? (
                <ol className="guide-steps">
                  {section.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              ) : null}
              {section.bullets ? (
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          <section className="guide-faq" id="questions">
            <p className="eyebrow">
              <span />
              Common questions
            </p>
            <h2>Questions about this guide</h2>
            <div className="faq-list">
              {guide.faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="guide-references" id="references">
            <h2>Sources & references</h2>
            <p>
              These primary manufacturer resources support the terminology and
              planning approach. Always use the instructions for your exact
              product and project.
            </p>
            <ul>
              {guide.references.map((reference) => (
                <li key={reference.href}>
                  <a href={reference.href} rel="noreferrer">
                    {reference.label} ↗
                  </a>
                  <span>{reference.note}</span>
                </li>
              ))}
            </ul>
          </section>

          <aside className="guide-disclaimer">
            <strong>Planning note</strong>
            <p>
              BuildWise estimates are educational planning tools, not a
              substitute for product instructions, supplier quantities,
              engineering, code review, or a qualified professional.
            </p>
          </aside>
        </article>
      </div>

      <section className="related-guides">
        <div>
          <p className="eyebrow">
            <span />
            Continue planning
          </p>
          <h2>Related guides</h2>
        </div>
        <div className="related-guide-grid">
          {related.map((item, index) => (
            <a href={`/guides/${item.slug}`} key={item.slug}>
              <span>0{index + 1}</span>
              <strong>{item.shortTitle}</strong>
              <small>{item.description}</small>
              <b aria-hidden="true">→</b>
            </a>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
