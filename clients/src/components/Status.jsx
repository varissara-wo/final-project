import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import VillaOutlinedIcon from "@mui/icons-material/VillaOutlined";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PauseCircleOutlineOutlinedIcon from "@mui/icons-material/PauseCircleOutlineOutlined";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import MarkChatReadOutlinedIcon from "@mui/icons-material/MarkChatReadOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import { styled } from "@mui/material";

export const StackFlex = styled(Stack)(() => ({
  direction: "column",
  justifyContent: "center",
  alignItems: "center",
  spacing: 0,
}));

export const OpenOn = (props) => {
  const { date } = props;
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={0}
      sx={{ marginLeft: "10px", marginRight: "10px" }}
    >
      <DraftsOutlinedIcon color="secondary" />
      <Typography variant="caption" color="secondary">
        Open on
      </Typography>
      <Typography variant="caption" color="secondary">
        {date}
      </Typography>
    </Stack>
  );
};

export const TotalCandidates = (props) => {
  const { candidates } = props;
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={0}
      sx={{ marginLeft: "10px", marginRight: "10px" }}
      color="secondary"
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={0.2}
        color="secondary"
      >
        <AccountCircleOutlinedIcon color="secondary" />
        <Typography variant="caption" color="secondary">
          {candidates}
        </Typography>
      </Stack>
      <Typography variant="caption" color="secondary">
        Total
      </Typography>
      <Typography variant="caption" color="secondary">
        Candidates
      </Typography>
    </Stack>
  );
};

export const CandidatesOnTrack = (props) => {
  const { candidates } = props;
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={0}
      sx={{ marginLeft: "10px", marginRight: "10px" }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={0.2}
        color="secondary"
      >
        <AccountCircleOutlinedIcon color="primary" />
        <Typography variant="caption" color="primary">
          {candidates}
        </Typography>
      </Stack>
      <Typography variant="caption" color="primary">
        Candidates
      </Typography>
      <Typography variant="caption" color="primary">
        on track
      </Typography>
    </Stack>
  );
};

export const SentOn = (props) => {
  const { date } = props;
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={0}
      sx={{ marginLeft: "10px", marginRight: "10px" }}
      color="secondary"
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={0.2}
        color="secondary"
      >
        <EmailOutlinedIcon color="secondary" />
      </Stack>
      <Typography variant="caption" color="secondary">
        Sent on
      </Typography>
      <Typography variant="caption" color="secondary">
        {date}
      </Typography>
    </Stack>
  );
};

export const SentAgo = (props) => {
  const { date, time, day } = props;
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={0}
      sx={{ marginLeft: "10px", marginRight: "10px" }}
      color="secondary"
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={0.2}
        color="secondary"
      >
        <EmailOutlinedIcon color="secondary" />
      </Stack>
      {day && (
        <Typography variant="caption" color="secondary">
          Sent {day} days
        </Typography>
      )}
      {time && (
        <Typography variant="caption" color="secondary">
          Sent {time} hr
        </Typography>
      )}
      <Typography variant="caption" color="secondary">
        ago
      </Typography>
    </Stack>
  );
};

export const WaitingForReview = (props) => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={0}
      sx={{ marginLeft: "10px", marginRight: "10px" }}
      color="secondary"
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={0.2}
        color="secondary"
      >
        <PauseCircleOutlineOutlinedIcon color="primary" />
      </Stack>
      <Typography variant="caption" color="primary">
        Waiting for
      </Typography>
      <Typography variant="caption" color="primary">
        review
      </Typography>
    </Stack>
  );
};

export const ReviewInProgress = (props) => {
  return (
    <StackFlex sx={{ marginLeft: "10px", marginRight: "10px" }}>
      <MarkEmailReadOutlinedIcon color="primary" />
      <Typography variant="caption" color="primary">
        Review in
      </Typography>
      <Typography variant="caption" color="primary">
        progress
      </Typography>
    </StackFlex>
  );
};

export const ReviewFinished = (props) => {
  return (
    <StackFlex sx={{ marginLeft: "10px", marginRight: "10px" }}>
      <Stack>
        <MarkChatReadOutlinedIcon color="primary" />
      </Stack>
      <Typography variant="caption" color="primary">
        Review
      </Typography>
      <Typography variant="caption" color="primary">
        finished
      </Typography>
    </StackFlex>
  );
};

export const DeclinedOn = (props) => {
  const { date } = props;
  return (
    <StackFlex sx={{ marginLeft: "10px", marginRight: "10px" }}>
      <Stack>
        <HighlightOffIcon color="primary" />
      </Stack>
      <Typography variant="caption" color="primary">
        Declined on
      </Typography>
      <Typography variant="caption" color="primary">
        {date}
      </Typography>
    </StackFlex>
  );
};
