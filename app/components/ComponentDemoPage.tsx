"use client";

import { useEffect, useState } from "react";
import {
  ActionBar,
  GlassPaper,
  GreenWaveBackground,
  Stack,
} from "sage-nexus-ui";

interface ComponentDemoPageProps {
  title: string;
  children: React.ReactNode;
}

const ComponentDemoPage = ({ title, children }: ComponentDemoPageProps) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <GreenWaveBackground>
      <h1 className="sr-only">{title}</h1>
      <ActionBar title={"Nexus Showcase"} homeHref={"/nexus-showcase"} />

      <Stack
        direction="row"
        sx={{
          m: 2,
          justifyContent: "center",
          marginBottom: 4,
        }}
      >
        <GlassPaper
          sx={{
            padding: "2rem",
            width: 1200,
          }}
        >
          {children}
        </GlassPaper>
      </Stack>
    </GreenWaveBackground>
  );
};

export default ComponentDemoPage;
