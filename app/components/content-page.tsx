import type { ReactNode } from "react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function ContentPage({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <main>
      <SiteHeader />
      <section className="content-hero">
        <p className="eyebrow">
          <span />
          {eyebrow}
        </p>
        <h1>{title}</h1>
        <p>{intro}</p>
      </section>
      <article className="content-page">{children}</article>
      <SiteFooter />
    </main>
  );
}
