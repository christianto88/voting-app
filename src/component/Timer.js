import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import * as moment from "moment";
const styles = {
  root: {
    flexGrow: 1
  }
};
class Timer extends Component {
  state = {
    time: 0,
    ongoing: false
  };
  checking = () => {
    console.log("checking . . ");
    if (moment().isSameOrAfter("2019-01-29T16:05:20.567Z")) {
      console.log("clear interval");
      clearInterval(this.state.timer);
      this.setState({ ongoing: false });
    }
  };
  async componentDidMount() {
    console.log("didmount");
    const { event } = this.props;
    // let temp = JSON.parse(await localStorage.getItem(event));
    // this.setStaate({ time });
    // let t = setInterval(this.checking, 2000);
    // this.setState({ timer: t });
  }
  componentDidUpdate() {
    // this.setState({ timer: t });
  }
  render() {
    const { classes } = this.props;
    console.log("render Timer");
    return (
      <Paper className={classes.root}>
        {this.state.ongoing ? <h1>Ongoing</h1> : ""}
      </Paper>
    );
  }
}

Timer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Timer);
