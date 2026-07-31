"use client";

import { useMemo, useState } from "react";
import { ToolIcon } from "./tool-icon";

type DirectoryTool = {
  id: string;
  slug: string;
  name: string;
  icon: string;
  detail: string;
  summary: string;
};

type DirectoryGroup = {
  id: string;
  label: string;
  description: string;
  tools: DirectoryTool[];
};

export function CalculatorDirectory({
  groups,
}: {
  groups: DirectoryGroup[];
}) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const matches = useMemo(
    () =>
      groups
        .flatMap((group) => group.tools)
        .filter((tool) =>
          `${tool.name} ${tool.detail} ${tool.summary}`
            .toLowerCase()
            .includes(normalizedQuery),
        ),
    [groups, normalizedQuery],
  );

  return (
    <section
      className="project-directory"
      id="calculators"
      aria-labelledby="directory-title"
    >
      <h2 className="visually-hidden" id="directory-title">
        Browse calculators by project
      </h2>
      <label className="calculator-search">
        <span className="visually-hidden">Search all 10 calculators</span>
        <span className="search-field">
          <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <circle cx="14" cy="14" r="8" />
            <path d="m20 20 7 7" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="What are you working on?"
          />
          <span className="search-arrow" aria-hidden="true">
            →
          </span>
        </span>
      </label>

      {normalizedQuery ? (
        <div className="search-results" aria-live="polite">
          <p>
            {matches.length
              ? `${matches.length} calculator${matches.length === 1 ? "" : "s"} found`
              : "No calculator matches that search yet."}
          </p>
          <div>
            {matches.map((tool) => (
              <DirectoryLink tool={tool} key={tool.id} />
            ))}
          </div>
        </div>
      ) : (
        <div className="project-browser">
          <p>Browse by project</p>
          <div className="project-groups">
          {groups.map((group) => (
            <article className="project-group" key={group.id}>
              <div className="group-intro">
                <div>
                  <h3>{group.label}</h3>
                </div>
              </div>
              <div className="group-tools">
                {group.tools.map((tool) => (
                  <DirectoryLink tool={tool} key={tool.id} />
                ))}
              </div>
            </article>
          ))}
          </div>
        </div>
      )}
    </section>
  );
}

function DirectoryLink({ tool }: { tool: DirectoryTool }) {
  return (
    <a className="directory-tool" href={`/${tool.slug}`}>
      <ToolIcon type={tool.icon} />
      <span>
        <strong>{tool.name}</strong>
      </span>
      <span className="directory-arrow" aria-hidden="true">
        ↗
      </span>
    </a>
  );
}
