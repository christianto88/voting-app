import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Main from "../component/Main";

const styles = {
  root: {
    flexGrow: 1
  }
};
class MainContainer extends PureComponent {
  state = {
    event: {
      vote1: {},
      vote2: {}
    }
  };
  render() {
    console.log("render main container");
    return <Main />;
  }
}

MainContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MainContainer);
