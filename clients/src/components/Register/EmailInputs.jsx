import React, { useEffect, useState } from "react";
import { Stack, Typography } from "@mui/material";
import { useRegis } from "../../contexts/register.jsx";
import { OnelineTextField, InputLabelStyle } from "./Styles.jsx";

const EmailInput = (props) => {
  const { isProfessionalExist, isRecruiterExist } = useRegis();

  const { user, value, onChange, message } = props;

  const [isValid, setIsValid] = useState(false);

  const validateInput = () => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const isValid = regex.test(value);
    setIsValid(isValid);
  };

  useEffect(() => {
    validateInput();
  }, [value]);

  return (
    <>
      <InputLabelStyle>EMAIL</InputLabelStyle>
      <Stack direction="row" gap="15px">
        <OnelineTextField
          defaultValue=""
          color="primary"
          focused
          inputProps={{ style: { padding: 8 } }}
          name="email"
          value={value}
          type="email"
          placeholder="some.user@mail.com"
          onChange={onChange}
        />
        <Stack flex={1}>
          <Typography
            variant="body2"
            color="primary"
            component="span"
            display="flex"
          >
            {isValid ? "" : "** It should be valid email address"}
          </Typography>
          {user === "professional" && (
            <Typography
              variant="body2"
              color="primary"
              component="span"
              display="flex"
              flex={1}
            >
              {isProfessionalExist && `** This email is unavailable`}
            </Typography>
          )}
          {user === "recruiter" && (
            <Typography
              variant="body2"
              color="primary"
              component="span"
              display="flex"
              flex={1}
            >
              {isRecruiterExist && `** This email is available`}
            </Typography>
          )}
          {user === "updateProfile" && (
            <Typography
              variant="body2"
              color="primary"
              component="span"
              display="flex"
              flex={1}
            >
              {message}
            </Typography>
          )}
        </Stack>
      </Stack>
    </>
  );
};

export default EmailInput;
