import { Paper } from "@mui/material";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import { Button, Link } from "@mui/material";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const Login = () => {
  const paperstyle = {
    padding: 30,
    height: "50vh",
    width: 390,
    margin: "100px 100px 100px 500px",
  };
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Enter Valid Email").required("Required"),
    password: Yup.string()
      .required("Required")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  });
  const onSubmit = (values, props) => {
    console.log(values);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
    console.log(props);
  };
  return (
    <>
      <Grid>
        <Paper elevation={12} style={paperstyle}>
          <Grid align="center">
            <h1>Admin Login</h1>
          </Grid>
          <p></p>
          <p></p>
          <p></p>

          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {(props) => (
              <Form>
                <Field
                  as={TextField}
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  required
                  fullWidth
                  name="email"
                  type="email"
                  helperText={<ErrorMessage name="email" />}
                />
                <p></p>
                <p></p>
                <Field
                  as={TextField}
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  type="password"
                  required
                  fullWidth
                  name="password"
                  helperText={<ErrorMessage name="password" />}
                />

                <p></p>
                <p></p>
                <Link>Forgot password ?</Link>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  disabled={props.isSubmitting}
                >
                  {props.isSubmitting ? "Loading" : "Login"}
                </Button>
              </Form>
            )}
          </Formik>
        </Paper>
      </Grid>
    </>
  );
};
export default Login;
