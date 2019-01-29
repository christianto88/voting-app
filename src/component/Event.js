import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import { Grid, Typography, Button } from "@material-ui/core";
import Timer from "./Timer";
import VoteContainer from "../container/VoteContainer";
const styles = {
  root: {
    flexGrow: 1
  },
  event: {
    backgroundColor: "#f6f8fa"
  }
};
class Event extends Component {
  finish = () => {
    const { handleFinish, event } = this.props;
    handleFinish(event);
  };
  render = () => {
    const { event, classes } = this.props;
    console.log("render Event", event);
    return (
      <>
        <Grid item container direction="column" className={classes.event}>
          <Grid item>
            <Typography variant="h5" gutterBottom>
              {event.replace(/_/g, " ")}
            </Typography>
            <Button onClick={this.finish} variant="contained" color="secondary">
              Finished
            </Button>
          </Grid>
          <Grid item container justify="space-evenly" direction="column">
            <VoteContainer event={event} />
          </Grid>
          <Grid item>
            <Timer event={event} />
          </Grid>
        </Grid>
      </>
    );
  };
}

Event.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Event);
