import Link from "next/link";

export function BackLink() {
  return (
    <Link href="/sales-kit" className="back-link no-print">
      ← Back to Sales Kit
    </Link>
  );
}
