import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import * as moment from "moment";
import { Typography, Grid, Paper } from "@material-ui/core";
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});
class Timer extends Component {
  state = {
    daysLeft: 0,
    ongoing: false
  };
  checking = () => {
    const { endDate,handleFinish} = this.props;    
    console.log("checking . . ",endDate);
    if (moment().isAfter(endDate)) {
      console.log("clear interval");
      clearInterval(this.state.timer);
      this.setState({ ongoing: false });
      handleFinish()
    }
  };
  async componentDidMount() {
    const { endDate } = this.props;
    if(endDate!==''){
      let diff=moment(endDate).diff(moment(),'days')+1
      let t = setInterval(this.checking, 60000);
      this.setState({ timer: t,daysLeft:diff,ongoing:true });
    }
  }
  componentWillUnmount(){
    clearInterval(this.state.timer)
  }
  render() {
    const { endDate,classes } = this.props;
    console.log("render Timer");
    return (
        <Grid item >
        <Paper className={classes.root}>
        <Typography variant="title">Days remaining for votes : {this.state.daysLeft} days </Typography>
        </Paper>
        </Grid>
    );
  }
}

Timer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Timer);
