import React, { useState } from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import makeStyles from '@material-ui/core/styles/makeStyles';
// core components
import Card from 'components/Card/Card';
import CardBody from 'components/Card/CardBody';
import CardHeader from 'components/Card/CardHeader';
import LoginForm from './login_form';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Danger from 'components/Typography/Danger';
import { withRouter } from 'react-router-dom';
import { loginStyles } from './styles';

const useStyles = makeStyles(loginStyles);

function Login(props) {
  // STATES
  const [errorMessage, setErrorMessage] = useState('');

  // HANDLERS
  const handleLogin = async () => {
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
          Login
        </h4>
      </CardHeader>

      <CardBody className={classes.cardBody}>
        <GridContainer>
          {errorMessage && (
            <GridItem xs={12} sm={12} md={12}>
              <Danger>{errorMessage}</Danger>
            </GridItem>
          )}
          <LoginForm onSubmit={handleLogin} />
        </GridContainer>
      </CardBody>
    </Card>
  );
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(Login);
