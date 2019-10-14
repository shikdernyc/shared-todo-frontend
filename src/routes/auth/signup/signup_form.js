import React, { Fragment, useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import InputAdornment from '@material-ui/core/InputAdornment';
import CustomInput from 'components/CustomInput/CustomInput';
import Face from '@material-ui/icons/Face';
import Email from '@material-ui/icons/Email';
import Lock from '@material-ui/icons/Lock';
import Button from 'components/CustomButtons/Button';
import GridItem from 'components/Grid/GridItem';
import useInputState from 'hooks/useInputState';
import { formStyles } from './styles';

const useStyles = makeStyles(formStyles);


function SignupForm(props) {
  // FORM DATA STATES
  const [loading, setLoading] = useState(false);
  const [email, handleEmailChange] = useInputState();
  const [fullName, handleFullNameChange] = useInputState();
  const [password, handlePasswordChange] = useInputState();
  const [confirmPassword, handleConfirmPasswordChange] = useInputState();

  const classes = useStyles();

  const handleSubmit = async () => {
    const formData = {
      email, fullName, password, confirmPassword
    };
    await setLoading(true);
    try {
      await props.onSubmit(formData);
    } catch (error) {
      throw error;
    } finally {
      await setLoading(false);
    }
  };

  // RENDER
  return (
    <Fragment>
      <GridItem xs={12} sm={12} md={12}>
        <CustomInput
          formControlProps={{
            fullWidth: true,
            className: classes.formControlClasses
          }}
          inputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                className={classes.inputAdornment}
              >
                <Face className={classes.inputAdornmentIcon} />
              </InputAdornment>
            ),
            value: fullName,
            onChange: handleFullNameChange,
            placeholder: 'Full Name...'
          }}
        />
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <CustomInput
          formControlProps={{
            fullWidth: true,
            className: classes.formControlClasses
          }}
          inputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                className={classes.inputAdornment}
              >
                <Email className={classes.inputAdornmentIcon} />
              </InputAdornment>
            ),
            value: email,
            onChange: handleEmailChange,
            placeholder: 'Email...',
            type: 'email'
          }}
        />
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <CustomInput
          formControlProps={{
            fullWidth: true,
            className: classes.formControlClasses
          }}
          inputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                className={classes.inputAdornment}
              >
                <Lock className={classes.inputAdornmentIcon} />
              </InputAdornment>
            ),
            value: password,
            onChange: handlePasswordChange,
            placeholder: 'Password...',
            type: 'password'
          }}
        />
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <CustomInput
          formControlProps={{
            fullWidth: true,
            className: classes.formControlClasses
          }}
          inputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                className={classes.inputAdornment}
              >
                <Lock className={classes.inputAdornmentIcon} />
              </InputAdornment>
            ),
            name: 'confirmPassword',
            value: confirmPassword,
            onChange: handleConfirmPasswordChange,
            placeholder: 'Confirm Password...',
            type: 'password'
          }}
        />
      </GridItem>
      <div className={classes.registerButton}>
        <Button color="rose" onClick={handleSubmit} disable={loading}>
          GET STARTED!
        </Button>
      </div>
    </Fragment>
  );
}

export default SignupForm;