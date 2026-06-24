"use client";

import { useRef } from "react";
import { Download, FileSpreadsheet } from "lucide-react";
import { cn } from "@/lib/utils";

const HEADERS = [
  "Business Name",
  "Website",
  "Contact",
  "Hunter",
  "Status",
  "Deal Value",
  "Notes",
];

const SAMPLE_ROW = ["ABC Dental", "abcdental.com", "John", "Ali", "Proposal", "$800", "Follow up Friday"];

const EMPTY_ROWS = 9;

function escapeCsv(value: string) {
  const text = value.replace(/\s+/g, " ").trim();
  if (/[",\n\r]/.test(text)) {
    return `"${text.replace(/"/g, '""')}"`;
  }
  return text;
}

function downloadCsv(filename: string, lines: string[]) {
  const blob = new Blob(["\uFEFF" + lines.join("\r\n")], {
    type: "text/csv;charset=utf-8;",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function getRowValues(row: HTMLTableRowElement) {
  return Array.from(row.querySelectorAll("td")).map((cell) =>
    cell.textContent?.replace(/\s+/g, " ").trim() ?? ""
  );
}

export function LeadSheetClient() {
  const tableRef = useRef<HTMLTableElement>(null);

  function downloadTemplate() {
    const lines = [
      HEADERS.map(escapeCsv).join(","),
      SAMPLE_ROW.map(escapeCsv).join(","),
      ...Array.from({ length: 24 }, () => HEADERS.map(() => "").map(escapeCsv).join(",")),
    ];
    downloadCsv("dbs-lead-sheet-template.csv", lines);
  }

  function exportCurrent() {
    const table = tableRef.current;
    if (!table) return;

    const lines = [HEADERS.map(escapeCsv).join(",")];
    const rows = Array.from(table.querySelectorAll("tbody tr")) as HTMLTableRowElement[];

    rows.forEach((row) => {
      const values = getRowValues(row);
      if (values.some(Boolean)) {
        lines.push(values.map(escapeCsv).join(","));
      }
    });

    const month = new Date().toISOString().slice(0, 7);
    downloadCsv(`dbs-lead-sheet-${month}.csv`, lines);
  }

  return (
    <>
      <div className="doc-toolbar no-print">
        <button type="button" className="toolbar-btn" onClick={downloadTemplate}>
          <Download size={16} />
          Download Excel template (.csv)
        </button>
        <button type="button" className="toolbar-btn toolbar-btn--primary" onClick={exportCurrent}>
          <FileSpreadsheet size={16} />
          Export current sheet (.csv)
        </button>
      </div>

      <section className="section">
        <h2>Active Leads</h2>
        <div className="table-wrap">
          <table ref={tableRef} className="leads-table">
            <thead>
              <tr>
                {HEADERS.map((header) => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>ABC Dental</strong>
                </td>
                <td>abcdental.com</td>
                <td>John</td>
                <td>Ali</td>
                <td>
                  <span className="status status-proposal">Proposal</span>
                </td>
                <td>$800</td>
                <td>Follow up Friday</td>
              </tr>
              {Array.from({ length: EMPTY_ROWS }, (_, index) => (
                <tr key={index}>
                  {HEADERS.map((header) => (
                    <td key={header} contentEditable suppressContentEditableWarning data-editable="true">
                      {index === 0 && header === "Status" ? (
                        <span className={cn("status", "status-new")}>New</span>
                      ) : (
                        "\u00a0"
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
