import { useState, useEffect } from "react";
import { MultilineTextField, InputLabelStyle } from "../Register/Styles.jsx";

const MultilineInputJobPostBig = (props) => {
  const {
    label,
    name,
    onChange,
    value,
    placeholder,
    helperText,
    pattern,
    errorMessage,
  } = props;

  const [isValid, setIsValid] = useState(false);
  const validateInput = () => {
    const regex = new RegExp(pattern);
    console.log(value);
    console.log(regex);
    const isInputValid = regex.test(value);
    setIsValid(isInputValid);
  };

  console.log(isValid);

  const message = () => {
    if (value === "") {
      console.log("why");
      return helperText;
    } else if (isValid === false) {
      console.log("hmm");
      return errorMessage;
    } else if (isValid === true) {
      console.log("hiiii");
      return "";
    }
  };

  useEffect(() => {
    validateInput();
  }, [value]);

  return (
    <>
      <InputLabelStyle style={{ fontSize: "10px", fontWeight: "500" }}>
        {label}
      </InputLabelStyle>
      <MultilineTextField
        name={name}
        type="text"
        onChange={onChange}
        value={value}
        defaultValue=""
        style={{ marginBottom: "14px", width: "760px " }}
        color="primary"
        placeholder={placeholder}
        focused
        inputProps={{ style: { padding: "8px" } }}
        multiline
        helperText={message()}
        FormHelperTextProps={{
          style: { color: isValid || value === "" ? "#8E8E8E" : "#F48FB1" },
        }}
        rows={8}
      />
    </>
  );
};

export default MultilineInputJobPostBig;
