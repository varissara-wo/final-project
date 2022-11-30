import { Accordion, AccordionSummary, Stack, Typography } from "@mui/material";
import React from "react";

export default function CandidatesWrapper(props) {
  const {} = props;
  const AccordionSummaryStyled = styled(AccordionSummary)(() => ({
    "& .css-o4b71y-MuiAccordionSummary-content": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  }));

  return (
    <Accordion
      expanded={expanded === `panal${index}`}
      onChange={handleChange(`panal${index}`)}
      sx={{ marginBottom: "16px", width: "945px" }}
    >
      <AccordionSummaryStyled
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          width="auto"
          spacing={0}
        >
          {/*------------------------------ Column 1 ------------------------------*/}
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            width="auto"
            marginRight="20px"
            spacing={0}
          >
            <Typography variant="h6">{content.name}</Typography>
            <Typography variant="caption" color="info.main" sx={{}}>
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={0}
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 20,
                  },
                }}
              >
                <LinkedInIcon sx={{ marginRight: "6px", marginLeft: "10px" }} />
                {content.title}
              </Stack>
            </Typography>
          </Stack>
          {/*------------------------------ Column 2 ------------------------------*/}
          <Stack
            direction="column"
            justifyContent="center"
            width="auto"
            spacing={0}
            margin="10px 20px 0 0"
          >
            <Typography variant="caption" color="info.main">
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={0}
              >
                <MailOutlineIcon
                  sx={{ marginRight: "6px", marginLeft: "10px" }}
                />
                {content.email}
              </Stack>
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={0}
              >
                <LocalPhoneIcon
                  sx={{ marginRight: "6px", marginLeft: "10px" }}
                />
                {content.phone}
              </Stack>
            </Typography>
          </Stack>
          {/*------------------------------ Column 3 ------------------------------*/}
          <Stack>
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="center"
              width="90px"
              spacing={0}
              textAlign="center"
              margin="0px 10px 0px 10px"
            >
              <MailOutlineIcon
                sx={{ marginRight: "6px", marginLeft: "10px" }}
              />
              <Typography variant="caption">
                Sent {content.date} days ago
              </Typography>
            </Stack>
          </Stack>
          {/*------------------------------ Column 4 ------------------------------*/}
          <Stack>
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="center"
              width="90px"
              textAlign="center"
              spacing={0}
              color="info.main"
            >
              <PauseCircleOutlineIcon
                sx={{ marginRight: "6px", marginLeft: "10px" }}
              />
              <Typography variant="caption">Waiting for review</Typography>
            </Stack>
          </Stack>
          {/*------------------------------ Column 5 ------------------------------*/}
          <Stack height="auto" color="info.main" margin="10px 0 0 20px">
            <CloseButton
              variant="contained"
              color="background"
              onClick={() => closedPost(content.job_id)}
            >
              Mark as started
            </CloseButton>
          </Stack>
        </Stack>
      </AccordionSummaryStyled>
      <Stack margin="0 10px 10px 10px ">
        <Typography variant="caption">
          LAST UPDATE ON {content.updated}
        </Typography>
        <Typography variant="subtitle1" color="error.main">
          Professional experience
        </Typography>
        <Typography variant="body2">{content.experience}</Typography>
        <Typography variant="subtitle1" color="error.main">
          Why are you interested in working at The company name SA
        </Typography>
        <Typography variant="body2">{content.experience}</Typography>
      </Stack>
    </Accordion>
  );
}
