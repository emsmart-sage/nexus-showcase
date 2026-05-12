"use client";

import { useState } from "react";
import Link from "next/link";
import { ActionBar, GlassPaper, GreenWaveBackground } from "sage-nexus-ui";
import ArrowBackIosNew from "@mui/icons-material/ArrowBackIosNew";

interface ComponentDemoPageProps {
  title: string;
  children: React.ReactNode;
}

const ComponentDemoPage = ({ title, children }: ComponentDemoPageProps) => {
  // const [mounted, setMounted] = useState(false);
  const [hoveredTitle, setHoveredTitle] = useState(false);
  // useEffect(() => setMounted(true), []);
  // if (!mounted) return null;

  return (
    <GreenWaveBackground>
      <h1 className="sr-only">{title}</h1>
      <ActionBar
        title={
          <Link
            href="/"
            onMouseEnter={() => setHoveredTitle(true)}
            onMouseLeave={() => setHoveredTitle(false)}
            onFocus={() => setHoveredTitle(true)}
            onBlur={() => setHoveredTitle(false)}
            style={{
              color: "inherit",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
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
                  transform: "translateY(-40%)",
                  width: 16,
                  height: 16,
                  display: hoveredTitle ? "inline-flex" : "none",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ArrowBackIosNew style={{ fontSize: 16 }} />
              </span>
              <span>Nexus Showcase</span>
            </span>
          </Link>
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
};

export default ComponentDemoPage;
