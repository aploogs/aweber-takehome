import React from "react";
import PasswordInput from "../password-input";
import { Box, Grid } from "@mui/material";

const GOOD_PASSWORD = "Password passes requirements";
const BAD_PASSWORD = "Password is not strong enough, please try again";
const MISMATCHED_PASSWORDS = "Passwords must match";
const PASSWORD_CREATED = "Password created successfully";
const USER_PROMPT = "Please enter in a password";

const Home: React.FC = () => {
  const [input, setInput] = React.useState({
    password: "",
    confirmedPassword: "",
  });

  const validatePassword = (password?: string): string | undefined => {
    const regExpression = new RegExp(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={[}\]|:;"'<,>.])[\w!@#$%^&*()_\-+={[}\]|:;"'<,>.]{6,24}$/
    );
    if (password?.match(regExpression)) {
      return GOOD_PASSWORD;
    }
    if (!password?.match(regExpression)) {
      return BAD_PASSWORD;
    }
    //maybe return a color here instead of a value so I can style the input?
  };

  const validatePasswordMatch = (
    password: string,
    confirmedPassword: string
  ) => {
    const valid =
      confirmedPassword.length && confirmedPassword === password
        ? PASSWORD_CREATED
        : null;
    return valid;
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event?.target;

    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleValidatePasswordContents = () => {
    const { password } = input;

    if (password) {
      const valid =
        validatePassword(password) === GOOD_PASSWORD
          ? GOOD_PASSWORD
          : alert(BAD_PASSWORD);
      return valid;
    } else {
      alert(USER_PROMPT);
    }
  };

  const handlePasswordMatch = () => {
    const { password, confirmedPassword } = input;
    const showSuccess =
      validatePasswordMatch(password, confirmedPassword) === PASSWORD_CREATED
        ? PASSWORD_CREATED
        : null;

    return showSuccess;
  };
  const handleSubmit = () => {
    if (handleValidatePasswordContents() === GOOD_PASSWORD) {
      const matching =
        handlePasswordMatch() === null
          ? alert(MISMATCHED_PASSWORDS)
          : alert(PASSWORD_CREATED);
      return matching;
    }
  };

  return (
    <Box>
      <Grid container justifyContent="center">
        <PasswordInput
          handleChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange(event)
          }
          onSubmit={handleSubmit}
          password={input?.password}
          confirmedPassword={input?.confirmedPassword}
        />
      </Grid>
    </Box>
  );
};

export default Home;
