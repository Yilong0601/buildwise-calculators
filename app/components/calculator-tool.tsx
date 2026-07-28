"use client";

import { useMemo, useState } from "react";
import {
  calculate,
  currencies,
  defaults,
  fieldsFor,
  toolById,
  type ToolKey,
  type UnitSystem,
} from "../lib/calculators";

export function CalculatorTool({ tool }: { tool: ToolKey }) {
  const [unit, setUnit] = useState<UnitSystem>("imperial");
  const [values, setValues] = useState<Record<string, number>>(
    defaults.imperial[tool],
  );
  const [currency, setCurrency] = useState("USD");
  const [copyState, setCopyState] = useState("Copy result");
  const spec = toolById[tool];
  const fields = fieldsFor(tool, unit);
  const result = useMemo(
    () => calculate(tool, unit, values, currency),
    [currency, tool, unit, values],
  );

  const chooseUnit = (nextUnit: UnitSystem) => {
    setUnit(nextUnit);
    setValues(defaults[nextUnit][tool]);
  };

  const copyResult = async () => {
    const text = [
      `BuildWise ${spec.name} Calculator`,
      `${result.label}: ${result.primary}`,
      ...result.stats.map(([label, value]) => `${label}: ${value}`),
      result.note,
      window.location.href,
    ].join("\n");

    try {
      await navigator.clipboard.writeText(text);
      setCopyState("Copied");
      window.setTimeout(() => setCopyState("Copy result"), 1800);
    } catch {
      setCopyState("Select & copy");
    }
  };

  return (
    <section className="calculator-section embedded-calculator" id="calculator">
      <div className="workspace">
        <div className="input-panel">
          <div className="panel-topline">
            <div>
              <span className="panel-step">01</span>
              <h2>Project inputs</h2>
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

          <form
            className="field-grid"
            onSubmit={(event) => event.preventDefault()}
          >
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
            <label className="field">
              <span>Currency label</span>
              <span className="input-wrap">
                <select
                  value={currency}
                  onChange={(event) => setCurrency(event.target.value)}
                >
                  {currencies.map((code) => (
                    <option value={code} key={code}>
                      {code}
                    </option>
                  ))}
                </select>
              </span>
            </label>
          </form>
          <p className="currency-note">
            Enter all prices in the selected currency. No exchange-rate service
            is used.
          </p>
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
          <div className="result-actions">
            <button type="button" onClick={copyResult}>
              {copyState}
            </button>
            <button type="button" onClick={() => window.print()}>
              Print / PDF
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
}
