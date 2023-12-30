import React from "react";
import styles from "./password.module.scss";
import { Box, Grid, TextField, Button, Typography, Stack } from "@mui/material";

type PasswordInputProps = {
  onSubmit?: () => void;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  password?: string;
  confirmedPassword?: string;
};

const PasswordInput: React.FC<PasswordInputProps> = ({
  onSubmit,
  handleChange,
  password,
  confirmedPassword,
}) => {
  const characterList = "(!@#$%^&*()_-+={[}]|<>.)";
  return (
    <Box className={styles.password}>
      <form className={styles.form} onSubmit={onSubmit}>
        <Grid flexDirection="column" item>
          <TextField
            type="text"
            required
            name="password"
            variant="filled"
            margin="normal"
            label="Please enter password"
            value={password}
            className={styles.input}
            onChange={handleChange}
          />
        </Grid>
        <Grid item pb={2}>
          <TextField
            type="password"
            required
            name="confirmedPassword"
            variant="filled"
            margin="normal"
            label="Confirm password"
            value={confirmedPassword}
            className={styles.input}
            onChange={handleChange}
          />
        </Grid>
        <Button onClick={onSubmit} variant="contained">
          Submit
        </Button>
      </form>
      <Stack alignItems="flex-start" ml={0} spacing={0}>
        <Grid className={styles.helperText} pt={5} item>
          <Typography>Password must contain:</Typography>
        </Grid>
        <Grid item>
          <Typography className={styles.helperText}>
            * A minimum length of 6 characters
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={styles.helperText}>
            * At least 1 uppercase character
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={styles.helperText}>
            * At least 1 lowercase character
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={styles.helperText}>
            * At least 1 number
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={styles.helperText}>
            * At least 1 special character{" "}
            <strong className={styles.specialCharacters}>
              {characterList}
            </strong>
          </Typography>
        </Grid>
      </Stack>
    </Box>
  );
};

export default PasswordInput;
