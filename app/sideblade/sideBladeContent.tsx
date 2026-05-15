import {
  Body2,
  Box,
  ButtonBase,
  Caption,
  Divider,
  PrimaryButton,
  SecondaryButton,
  Stack,
  TextField,
  Tooltip,
} from "sage-nexus-ui";
import { Add, BarChart, ForumOutlined, People } from "@mui/icons-material";
import { useState } from "react";

const MOCK_CHATS = [
  "How do I reset my password?",
  "Summarise last quarter's report",
  "Draft an email to the team",
  "What is the RAG status for Project X?",
  "Explain the new compliance rules",
];

const activeControlStyles = {
  fontWeight: 700,
  borderWidth: 2,
  boxSizing: "border-box",
  "&:hover": {
    backgroundColor: "transparent",
    color: "inherit",
    boxShadow: "none",
    borderWidth: 2,
  },
  "&:focus-visible": {
    boxShadow: "0 0 0 3px rgba(3,169,244,0.16)",
    outline: "none",
  },
};

export const ChatCollapsedContent = () => (
  <Stack sx={{ px: 0.5, pt: 0.5, gap: 1 }}>
    <Box>
      <Tooltip title="New chat" placement="right">
        <ButtonBase
          sx={{
            borderRadius: 1,
            width: 36,
            height: 36,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Add fontSize="small" />
        </ButtonBase>
      </Tooltip>
    </Box>

    <Box>
      <Tooltip title="Recent chats" placement="right">
        <ButtonBase
          sx={{
            borderRadius: 1,
            width: 36,
            height: 36,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ForumOutlined fontSize="small" />
        </ButtonBase>
      </Tooltip>
    </Box>
  </Stack>
);

export const ChatSideContent = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <Stack sx={{ px: 0.5, pt: 0.5, gap: 1.5 }}>
      <PrimaryButton
        startIcon={<Add />}
        fullWidth
        sx={{ justifyContent: "flex-start", px: 2 }}
      >
        New chat
      </PrimaryButton>

      <TextField size="small" placeholder="Search chats…" fullWidth />

      <Divider />

      <Caption>Recent</Caption>

      <Box sx={{ flex: 1, overflowY: "auto" }}>
        <Stack sx={{ gap: 0.5 }}>
          {MOCK_CHATS.map((chat, i) => (
            <Box key={i}>
              <ButtonBase
                onClick={() => setSelected(i)}
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  py: 0.5,
                  textAlign: "left",
                  ...(selected === i && {
                    backgroundColor: "rgba(0,0,0,0.06)",
                  }),
                }}
              >
                <Box
                  sx={{
                    minWidth: 32,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ForumOutlined fontSize="small" />
                </Box>
                <Body2
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {chat}
                </Body2>
              </ButtonBase>
            </Box>
          ))}
        </Stack>
      </Box>
    </Stack>
  );
};

export const CoeDashboardSideContent = ({
  active,
  onActiveChange,
}: {
  active: "overview" | "people";
  onActiveChange: (v: "overview" | "people") => void;
}) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: 1,
      px: 1,
      pt: 1,
    }}
  >
    <SecondaryButton
      startIcon={<BarChart />}
      fullWidth
      onClick={() => onActiveChange("overview")}
      sx={[
        { justifyContent: "flex-start", px: 2 },
        active === "overview" && activeControlStyles,
      ]}
    >
      Overview
    </SecondaryButton>

    <SecondaryButton
      startIcon={<People />}
      fullWidth
      onClick={() => onActiveChange("people")}
      sx={[
        { justifyContent: "flex-start", px: 2 },
        active === "people" && activeControlStyles,
      ]}
    >
      People
    </SecondaryButton>
  </Box>
);

export const CoeCollapsedContent = () => (
  <Stack sx={{ px: 0.5, pt: 0.5, gap: 1 }}>
    <Box>
      <Tooltip title="Overview" placement="right">
        <ButtonBase
          sx={{
            borderRadius: 1,
            width: 36,
            height: 36,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BarChart fontSize="small" />
        </ButtonBase>
      </Tooltip>
    </Box>

    <Box>
      <Tooltip title="People" placement="right">
        <ButtonBase
          sx={{
            borderRadius: 1,
            width: 36,
            height: 36,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <People fontSize="small" />
        </ButtonBase>
      </Tooltip>
    </Box>
  </Stack>
);
