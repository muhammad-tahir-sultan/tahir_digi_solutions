import Image from "next/image";
import { BRAND } from "@/lib/brand";

type DocHeaderProps = {
  subtitle: string;
  meta: React.ReactNode;
};

export function DocHeader({ subtitle, meta }: DocHeaderProps) {
  return (
    <header className="doc-header">
      <div className="doc-brand">
        <Image
          src="/brand-logo.svg"
          alt={BRAND.name}
          width={44}
          height={44}
          className="doc-logo"
          priority
        />
        <div>
          <h1>{BRAND.name}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
      <div className="doc-meta">{meta}</div>
    </header>
  );
}
