"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { BRAND } from "@/lib/brand";

export function SalesKitLoginForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const response = await fetch("/api/sales-kit/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    setLoading(false);

    if (!response.ok) {
      setError("Invalid access password.");
      return;
    }

    router.push("/sales-kit");
    router.refresh();
  }

  return (
    <div className="login-panel">
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
        <Image src="/brand-logo.svg" alt={BRAND.name} width={40} height={40} />
        <div>
          <h1>Sales Kit Access</h1>
          <p>Internal documents — authorized team only.</p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Access password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="current-password"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Checking…" : "Enter Sales Kit"}
        </button>
        {error ? <p className="login-error">{error}</p> : null}
      </form>
    </div>
  );
}
