import React from 'react'

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui icons
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import {
  cardTitle,
  cardLink,
  cardSubtitle
} from "assets/jss/material-kit-pro-react.js";

const style = {
  cardTitle,
  cardLink,
  cardSubtitle
};

const useStyles = makeStyles(style);

function TeamCard(props) {
  // TODO: MAKE THIS NICER AND MORE PROPER
  const { name, subtitle, description, members, id } = props
  const classes = useStyles();

  return (
    <Card style={{ width: "20rem" }}>
      <CardBody>
        <h4 className={classes.cardTitle}>{name}</h4>
        <h6 className={classes.cardSubtitle}>{subtitle}</h6>
        <p>
          {description}
        </p>
      </CardBody>
    </Card>
  );
}

// TODO: ADD PROP TYPES

export default TeamCard