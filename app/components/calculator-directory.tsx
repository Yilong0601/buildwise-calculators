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
      <div className="directory-heading">
        <div>
          <p className="eyebrow">
            <span />
            Start with your project
          </p>
          <h2 id="directory-title">What are you working on?</h2>
        </div>
        <label className="calculator-search">
          <span>Search all 10 calculators</span>
          <span className="search-field">
            <span aria-hidden="true">⌕</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Try “roof”, “paint”, or “yard”"
            />
          </span>
        </label>
      </div>

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
        <div className="project-groups">
          {groups.map((group, groupIndex) => (
            <article className="project-group" key={group.id}>
              <div className="group-intro">
                <span>{String(groupIndex + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{group.label}</h3>
                  <p>{group.description}</p>
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
        <small>{tool.detail}</small>
      </span>
      <span className="directory-arrow" aria-hidden="true">
        ↗
      </span>
    </a>
  );
}
