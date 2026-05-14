"use client";

import Link from "next/link";
import { Card, Stack, useTokens } from "sage-nexus-ui";
import { ShowcasePage } from "./components/ShowcasePage";
import { Tiles } from "../src/showcase/Tiles";

export default function HomePage() {
  const tokens = useTokens();

  return (
    <ShowcasePage title="Nexus Showcase">
      <Stack
        direction="row"
        sx={{ flexWrap: "wrap", gap: 4, justifyContent: "center" }}
      >
        {Tiles.map((tile) => (
          <Link
            key={tile.label}
            href={tile.href}
            className="tile-link"
            style={{ textDecoration: "none" }}
          >
            <Card
              className="tile-card"
              value={tile.label}
              elevation={5}
              sx={{
                border: "2px solid transparent",
                width: "300px",
                textAlign: "center",
                "&:hover": {
                  border: "2px solid",
                  borderColor: tokens.outlinedPrimaryHover,
                },
              }}
            />
          </Link>
        ))}
      </Stack>
    </ShowcasePage>
  );
}
