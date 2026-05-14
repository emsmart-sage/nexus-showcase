"use client";

import { useState } from "react";
import { H2, SideBlade, Stack } from "sage-nexus-ui";
import ComponentDemoPage from "../components/ComponentDemoPage";
import {
  CoeCollapsedContent,
  CoeDashboardSideContent,
  ChatCollapsedContent,
  ChatSideContent,
} from "./sideBladeContent";

const SidebladePage = () => {
  const title = "Sideblade";
  const [chatOpen, setChatOpen] = useState(true);
  const [coeOpen, setCoeOpen] = useState(true);
  const [coeActive, setCoeActive] = useState<"overview" | "people">("overview");

  return (
    <ComponentDemoPage title={title}>
      <H2 sx={{ mb: 2 }}>{title}</H2>
      <Stack direction="row" sx={{ gap: 4 }}>
        <SideBlade
          open={chatOpen}
          onToggle={() => setChatOpen((v) => !v)}
          collapsedContent={<ChatCollapsedContent />}
        >
          <ChatSideContent />
        </SideBlade>

        <SideBlade
          open={coeOpen}
          onToggle={() => setCoeOpen((v) => !v)}
          collapsedContent={<CoeCollapsedContent />}
        >
          <CoeDashboardSideContent
            active={coeActive}
            onActiveChange={setCoeActive}
          />
        </SideBlade>
      </Stack>
    </ComponentDemoPage>
  );
};

export default SidebladePage;
