"use client";

import { Card, H2 } from "sage-nexus-ui";
import ComponentDemoPage from "../components/ComponentDemoPage";

const LogoOptionsPage = ({ title }: { title: string }) => {
  return (
    <ComponentDemoPage title="Logo Options">
      <H2>{title}</H2>
      <Card />
    </ComponentDemoPage>
  );
};

export default LogoOptionsPage;
