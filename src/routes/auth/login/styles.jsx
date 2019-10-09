import { cardTitle } from "assets/jss/material-dashboard-react";

export const loginStyles = {
  card: {
    position: "absolute",
    top: "50%",
    left: "50%",
    zIndex: "3",
    transform: "translate(-50%,-50%)",
    textAlign: "center",
    padding: "0 15px",
    width: "100%",
    maxWidth: "500px"
  },
  cardBody: {
    padding: "25px 50px"
  },
  cardTitle: {
    ...cardTitle,
    color: "white"
  }
};

export const formStyles = {
  loginButton: {
    paddingTop: "25px",
    margin: "0 auto"
  }
};
