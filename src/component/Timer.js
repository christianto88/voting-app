import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";

const styles = {
  root: {
    flexGrow: 1
  }
};
class Timer extends Component {
  state = {
    time: 0
  };
  render() {
    const { classes } = this.props;
    console.log("render Timer");
    return <Paper className={classes.root}>Timer: {this.state.time}</Paper>;
  }
}

Timer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Timer);
