import React, { useState } from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import makeStyles from '@material-ui/core/styles/makeStyles';
// core components
import Card from 'components/Card/Card';
import CardBody from 'components/Card/CardBody';
import CardHeader from 'components/Card/CardHeader';
import SignupForm from './signup_form';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Danger from 'components/Typography/Danger';
import { withRouter } from 'react-router-dom';
import { signupStyles } from './styles';

const useStyles = makeStyles(signupStyles);

function RegisterPage(props) {
  // STATES
  const [errorMessage, setErrorMessage] = useState('');

  // HANDLERS
  const handleRegister = async () => {
    try {
      // TODO: Handle registeration
      // TODO: Handle updating user context
    } catch (error) {
      setErrorMessage('Something went wrong');
      throw error;
    }
  };

  // RENDERING
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader color="rose">
        <h4 className={classes.cardTitle} style={{ color: 'white' }}>
          Register
        </h4>
      </CardHeader>

      <CardBody className={classes.cardBody}>
        <GridContainer>
          {errorMessage && (
            <GridItem xs={12} sm={12} md={12}>
              <Danger>{errorMessage}</Danger>
            </GridItem>
          )}
          <SignupForm onSubmit={handleRegister} />
        </GridContainer>
      </CardBody>
    </Card>
  );
}

RegisterPage.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(RegisterPage);
