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
import GpsFixedOutlinedIcon from "@mui/icons-material/GpsFixedOutlined";
import { styled } from "@mui/material";

export const StackFlex = styled(Stack)(() => ({
  direction: "column",
  justifyContent: "center",
  alignItems: "center",
  spacing: 0,
}));

export const OpenOn = (props) => {
  const { date } = props;
  let open_date = new Date(date);
  const open_date_day = open_date.getDate();
  const open_date_month = open_date.getMonth() + 1;
  const open_date_year = open_date.getFullYear();
  const openDate = `${open_date_day}/${open_date_month}/${open_date_year}`;
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
        {openDate}
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

export const Following = (props) => {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Stack
        color="#FFFFFF"
        sx={{
          backgroundColor: "#F48FB1",
          width: "40px",
          height: "40px",
          borderRadius: "50px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <GpsFixedOutlinedIcon />
      </Stack>
      <Typography variant="button" color="secondary" marginLeft="4px">
        Following
      </Typography>
    </Stack>
  );
};
