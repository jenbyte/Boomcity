import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { Form, Field } from 'react-final-form';
import {
  LOGIN_MUTATION,
  SIGNUP_MUTATION,
  VIEWER_QUERY
} from '../../apollo/queries';
import { graphql, compose } from 'react-apollo';
import validate from './helpers/validation';
import styles from './styles';
import PropTypes from 'prop-types';
import { FORM_ERROR } from 'final-form';

class AccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formToggle: true,
      error: false,
      enteredEmail: '',
      errorMessage: ''
    };
  }

  handleInputChange(e) {
    e.preventDefault();
    this.setState({ enteredEmail: e.target.value });
  }

  render() {
    const { classes, loginMutation, signupMutation } = this.props;

    return (
      <div>
        <Form
          onSubmit={async values => {
            try {
              this.state.formToggle
                ? await loginMutation({
                    variables: {
                      user: {
                        email: values.email,
                        password: values.password
                      }
                    }
                  })
                : await signupMutation({
                    variables: {
                      user: {
                        fullname: values.fullname,
                        email: values.email,
                        password: values.password
                      }
                    }
                  });
            } catch (e) {
              console.log(e);
              return {
                [FORM_ERROR]: this.state.formToggle
                  ? 'Your email and/or password is incorrect.'
                  : 'The email you entered already exists.'
              };
            }
          }}
          validate={values => {
            return validate(values);
          }}
          render={({
            handleSubmit,
            pristine,
            submitting,
            invalid,
            form,
            hasValidationErrors,
            hasSubmitErrors,
            submitError
          }) => (
            <form className={classes.accountForm} onSubmit={handleSubmit}>
              {!this.state.formToggle && (
                <Field name="fullname">
                  {({ input, meta }) => (
                    <FormControl fullWidth className={classes.formControl}>
                      <InputLabel htmlFor="fullname">Username</InputLabel>
                      <Input
                        id="fullname"
                        type="text"
                        inputProps={{ autoComplete: 'off' }}
                        value={''}
                        {...input}
                      />
                      {meta.touched &&
                        meta.error && (
                          <span className={classes.errorMessage}>
                            {meta.error}
                          </span>
                        )}
                    </FormControl>
                  )}
                </Field>
              )}

              <Field name="email">
                {({ input, meta }) => (
                  <FormControl fullWidth className={classes.formControl}>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input
                      id="email"
                      type="text"
                      inputProps={{ autoComplete: 'off' }}
                      onChange={this.handleInputChange}
                      value={''}
                      ref={ref => {
                        this.email = ref;
                      }}
                      {...input}
                    />

                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </FormControl>
                )}
              </Field>

              <Field name="password">
                {({ input, meta }) => (
                  <FormControl fullWidth className={classes.formControl}>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input
                      id="password"
                      type="password"
                      inputProps={{ autoComplete: 'off' }}
                      value={''}
                      {...input}
                    />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </FormControl>
                )}
              </Field>

              <FormControl className={classes.formControl}>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
                  <Button
                    type="submit"
                    className={classes.formButton}
                    variant="contained"
                    size="large"
                    color="secondary"
                    disabled={pristine || submitting || hasValidationErrors}
                  >
                    {this.state.formToggle ? 'Enter' : 'Create Account'}
                  </Button>

                  <Typography>
                    <button
                      className={classes.formToggle}
                      type="button"
                      onClick={() => {
                        this.setState({
                          formToggle: !this.state.formToggle
                        });
                        form.reset();
                      }}
                    >
                      {this.state.formToggle
                        ? 'Create an account.'
                        : 'Login to existing account.'}
                    </button>
                  </Typography>
                </Grid>
              </FormControl>

              {hasSubmitErrors && (
                <Typography className={classes.errorMessage}>
                  {submitError}
                </Typography>
              )}
            </form>
          )}
        />
      </div>
    );
  }
}

AccountForm.propTypes = {
  loginMutation: PropTypes.func.isRequired,
  signupMutation: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

const refetchQueries = [{ query: VIEWER_QUERY }];

// VIEWER_QUERY reloads the app and access authenticated routes
export default compose(
  graphql(SIGNUP_MUTATION, {
    options: { refetchQueries },
    name: 'signupMutation'
  }),
  graphql(LOGIN_MUTATION, {
    options: { refetchQueries },
    name: 'loginMutation'
  }),
  withStyles(styles)
)(AccountForm);
