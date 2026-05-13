"use client";

import { Box, H2, H3, LogoOptions, Paper, Stack } from "sage-nexus-ui";
import ComponentDemoPage from "../components/ComponentDemoPage";

const OptionRow = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
    <Box
      component="span"
      sx={{
        fontSize: 11,
        fontFamily: "monospace",
        opacity: 0.55,
        color: "var(--sage-text-default)",
      }}
    >
      {label}
    </Box>
    <Box sx={{ display: "flex", alignItems: "center" }}>{children}</Box>
  </Box>
);

const options = [
  {
    label:
      "Option 1 — Sage Headline Bold, NEXUS all-caps, X shimmer, alternative node shape",
    Component: LogoOptions.LogoOption1,
  },
  {
    label: "Option 2 — Sage Headline Bold, NEXUS all-caps, X shimmer",
    Component: LogoOptions.LogoOption2,
  },
  {
    label: "Option 3 — Sage Headline Bold, nexus lower-case, X shimmer",
    Component: LogoOptions.LogoOption3,
  },
  {
    label: "Option 4 — Sage Text Medium, NEXUS all-caps, X shimmer",
    Component: LogoOptions.LogoOption4,
  },
  {
    label: "Option 5 — Sage UI Medium, NEXUS all-caps, X shimmer",
    Component: LogoOptions.LogoOption5,
  },
  {
    label: "Option 6 — Sage UI Medium, NEXUS all-caps, node shimmer",
    Component: LogoOptions.LogoOption6,
  },
  {
    label: "Option 7 — Sage UI Medium, NEXUS all-caps, whole word shimmer",
    Component: LogoOptions.LogoOption7,
  },
  {
    label: "Option 8 — Sage UI Light, NEXUS all-caps, X shimmer",
    Component: LogoOptions.LogoOption8,
  },
  {
    label: "Option 9 — Sage UI Light, NEXUS all-caps, node shimmer",
    Component: LogoOptions.LogoOption9,
  },
  {
    label: "Option 10 — Sage UI Light, NEXUS all-caps, whole word shimmer",
    Component: LogoOptions.LogoOption10,
  },
  {
    label: "Option 11 — Arial Bold, NEXUS all-caps, X shimmer",
    Component: LogoOptions.LogoOption11,
  },
  {
    label: "Option 12 — Arial Bold, NEXUS all-caps, node shimmer",
    Component: LogoOptions.LogoOption12,
  },
  {
    label: "Option 13 — Arial Medium, NEXUS all-caps, X shimmer",
    Component: LogoOptions.LogoOption13,
  },
  {
    label: "Option 14 — Arial Medium, NEXUS all-caps, node shimmer",
    Component: LogoOptions.LogoOption14,
  },
  {
    label: "Option 15 — Arial Medium, NEXUS all-caps, whole word shimmer",
    Component: LogoOptions.LogoOption15,
  },
];

const LogoOptionsPage = () => {
  const title = "Logo Options";

  const sageOptions = options.filter((o) => o.label.includes("Sage"));
  const arialOptions = options.filter((o) => o.label.includes("Arial"));

  return (
    <ComponentDemoPage title={title}>
      <H2>{title}</H2>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: { sm: 4, md: 8 },
          mt: 4,
          "@media (max-width: 680px)": {
            gridTemplateColumns: "1fr",
          },
        }}
      >
        <Paper sx={{ p: 2 }}>
          <H3>Sage fonts</H3>
          <Stack direction="column" spacing={12} sx={{ mt: 2 }}>
            {sageOptions.map(({ label, Component }) => (
              <OptionRow key={label} label={label}>
                <Component size="lg" />
              </OptionRow>
            ))}
          </Stack>
        </Paper>

        <Paper sx={{ p: 2 }}>
          <H3>Arial</H3>
          <Stack direction="column" spacing={12} sx={{ mt: 2 }}>
            {arialOptions.map(({ label, Component }) => (
              <OptionRow key={label} label={label}>
                <Component size="lg" />
              </OptionRow>
            ))}
          </Stack>
        </Paper>
      </Box>
    </ComponentDemoPage>
  );
};

export default LogoOptionsPage;
