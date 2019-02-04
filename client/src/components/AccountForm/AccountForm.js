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
import { Mutation } from 'react-apollo';
import validate from './helpers/validation';
import styles from './styles';
import PropTypes from 'prop-types';

class AccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formToggle: true,
      error: false,
      enteredEmail: '',
      errorMessage: ''
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    e.preventDefault();
    this.setState({ enteredEmail: e.target.value });
  }

  handleSubmit(e) {
    console.log(email);
    e.preventDefault();
    const { email, enteredEmail } = this.state;
    const filterEmail = email.filter(e => e === enteredEmail);
    if (filterEmail) {
      this.setState({
        error: true,
        errorMessage: 'Email already exists'
      });
    }
  }

  onSubmit(values) {
    console.log('onSubmit', values);
    return '';
    // const filterEmail = email.filter(e => e === enteredEmail);
  }

  // onSubmit = async values => {
  //   try {
  //     this.state.formToggle
  //       ? loginMutation({
  //           variables: {
  //             user: {
  //               email: values.email,
  //               password: values.password
  //             }
  //           }
  //         })
  //       : signupMutation({
  //           variables: {
  //             user: {
  //               fullname: values.fullname,
  //               email: values.email,
  //               password: values.password
  //             }
  //           }
  //         });
  //   } catch (e) {}
  // };

  render() {
    const { classes, loginMutation, signupMutation } = this.props;

    return (
      <div>
        {/* <Mutation mutation={SIGNUP_MUTATION}>
          {(loginMutation, signupMutation) => {
            return ( */}
        <Form
          // onSubmit={this.onSubmit()}
          onSubmit={values => {
            {
              this.state.formToggle
                ? loginMutation({
                    variables: {
                      user: {
                        email: values.email,
                        password: values.password
                      }
                    }
                  })
                : signupMutation({
                    variables: {
                      user: {
                        fullname: values.fullname,
                        email: values.email,
                        password: values.password
                      }
                    }
                  });
            }
          }}
          validate={values => {
            return validate(values);
          }}
          render={({ handleSubmit, pristine, submitting, invalid, form }) => (
            <form
              className={classes.accountForm}
              onSubmit={handleSubmit}
              // onSubmit={event => {
              //   console.log(event);
              //   event.preventDefault();
              //   console.log('form', values);
              //   if (this.state.formToggle) {
              //     this.props.loginMutation({
              //       variables: {
              //         user: {
              //           email: values.email,
              //           password: values.password
              //         }
              //       }
              //     });
              //   } else {
              //     this.props.signupMutation({
              //       variables: {
              //         user: {
              //           fullname: 'test',
              //           email: 'test@gmail.com',
              //           password: 'test'
              //         }
              //       }
              //     });
              //   }
              // }}
            >
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
                    disabled={pristine || submitting || invalid}
                  >
                    {this.state.formToggle ? 'Enter' : 'Create Account'}
                  </Button>

                  <Typography>
                    <button
                      className={classes.formToggle}
                      type="button"
                      onClick={() => {
                        // @TODO: Reset the form on submit
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

              <Typography className={classes.errorMessage}>
                {/* @TODO: Display sign-up and login errors */}
              </Typography>
            </form>
          )}
        />
        {/* );
          }}
        </Mutation> */}
      </div>
    );
  }
}

AccountForm.propTypes = {
  loginMutation: PropTypes.func.isRequired,
  signupMutation: PropTypes.func.isRequired,
  classes: PropTypes.object
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
