"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";

type TerminalLayoutProps = {
  children: ReactNode;
};

// main layout wrapper with header and footer
export function TerminalLayout({ children }: TerminalLayoutProps) {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    // trigger expand animation after mount
    const timeout = setTimeout(() => {
      setExpanded(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="terminal-root">
      <section className={`terminal-frame ${expanded ? "expanded" : ""}`}>
        <header className="terminal-header">
          <div className="terminal-header-left">
            <span className="terminal-status-dot" />
            <span className="terminal-header-label">HOMEPAGE V1.0</span>
          </div>
          <div className="terminal-header-right">
            <span className="terminal-status-text">GUHA: ONLINE</span>
          </div>
        </header>

        <div className="terminal-content">{children}</div>
      </section>

      <footer className="terminal-footer">DON&apos;T LOOK BACK.</footer>
    </main>
  );
}
