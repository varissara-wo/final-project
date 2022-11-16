import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import VillaOutlinedIcon from "@mui/icons-material/VillaOutlined";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

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

export const SendOn = (props) => {
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
        <AccountCircleOutlinedIcon color="secondary" />
      </Stack>
      <Typography variant="caption" color="secondary">
        Send on
      </Typography>
      <Typography variant="caption" color="secondary">
        {date}
      </Typography>
    </Stack>
  );
};
