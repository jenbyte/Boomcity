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

class AccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formToggle: true
    };
  }

  onSubmit = values => {
    console.log('onSubmit', values);
    if (this.state.formToggle) {
      this.props.loginMutation({
        variables: {
          user: {
            email: values.email,
            password: values.password
          }
        }
      });
    } else {
      this.props.signupMutation({
        variables: {
          user: {
            fullname: 'test',
            email: 'test@gmail.com',
            password: 'test'
          }
        }
      });
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <Form
        onSubmit={() => {}}
        validate={values => {
          return validate(
            values,
            this.state.selectedTags,
            this.state.fileSelected
          );
        }}
        render={({ handleSubmit, pristine, submitting, invalid, values }) => (
          <form
            className={classes.accountForm}
            onSubmit={e => {
              e.preventDefault();
              console.log('form', values);
              if (this.state.formToggle) {
                this.props.loginMutation({
                  variables: {
                    user: {
                      email: values.email,
                      password: values.password
                    }
                  }
                });
              } else {
                this.props.signupMutation({
                  variables: {
                    user: {
                      fullname: 'test',
                      email: 'test@gmail.com',
                      password: 'test'
                    }
                  }
                });
              }
            }}
          >
            {!this.state.formToggle && (
              <Field name="fullname">
                {({ input, meta }) => (
                  <FormControl fullWidth className={classes.formControl}>
                    <InputLabel htmlFor="fullname">Username</InputLabel>
                    <Input
                      id="fullname"
                      type="text"
                      inputProps={{
                        autoComplete: 'off'
                      }}
                      value={''}
                      {...input}
                    />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
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
                    inputProps={{
                      autoComplete: 'off'
                    }}
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
                  disabled={pristine || invalid}
                  // onClick={e => {
                  //   e.preventDefault();
                  //   if (this.state.formToggle) {
                  //     this.props.loginMutation({
                  //       variables: {
                  //         user: {
                  //           email: values.email,
                  //           password: '{ password }'
                  //         }
                  //       }
                  //     });
                  //   } else {
                  //     this.props.signupMutation({
                  //       variables: {
                  //         user: {
                  //           fullname: '',
                  //           email: '',
                  //           password: ''
                  //         }
                  //       }
                  //     });
                  //   }
                  // }}
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
      // EndOf <Form closing tag
    );
  }
}

const refetchQueries = [{ query: VIEWER_QUERY }];

// Reload the app and access authenticated routes via VIEWER_QUERY
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
