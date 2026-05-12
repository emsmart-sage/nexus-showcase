"use client";

import { useEffect, useState } from "react";
import { ActionBar, GlassPaper, GreenWaveBackground } from "sage-nexus-ui";

interface ShowcasePageProps {
  title: string;
  children: React.ReactNode;
}

export function ShowcasePage({ title, children }: ShowcasePageProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <GreenWaveBackground>
      <h1 className="sr-only">{title}</h1>
      <ActionBar
        title={
          <span
            style={{
              position: "relative",
              display: "inline-block",
              paddingLeft: 24,
              lineHeight: 1.2,
            }}
          >
            <span
              aria-hidden
              style={{
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translateY(-45%)",
                width: 16,
                height: 16,
                visibility: "hidden",
                display: "inline-block",
              }}
            />
            <span>{title}</span>
          </span>
        }
      />
      <GlassPaper
        sx={{
          width: "100%",
          maxWidth: 1200,
          margin: "2rem auto",
          padding: "2rem",
        }}
      >
        {children}
      </GlassPaper>
    </GreenWaveBackground>
  );
}
