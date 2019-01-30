import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import { Grid, Typography, Button } from "@material-ui/core";
import VoteContainer from "../container/VoteContainer";
import TimerContainer from "../container/TimerContainer";
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
  delete=()=>{
    const {handleDelete,event}=this.props
    handleDelete(event)
  }
  render = () => {
    const { event, classes, type } = this.props;
    console.log("render Event");
    return (
      <>
        <Grid item container direction="column" justify="flex-start"  className={classes.event}>
          {
            type === "finished" ? (<>
              <Grid item>
                <Typography variant="h5" gutterBottom>
                  {event.replace(/_/g, " ")}
                </Typography>
              </Grid>
              <Grid item container alignContent="center" direction="row" >
                <VoteContainer type="finished" event={event} />
              </Grid>
            </>) : (
                <>
                  <Grid item container direction="row"  spacing={16} alignItems="center" justify="center">
                    <Grid item>

                      <Typography variant="h5" gutterBottom>
                        {event.replace(/_/g, " ")}
                      </Typography></Grid>
                    <Grid item>
                      <Button onClick={this.delete}  size="small" variant="contained" color="secondary">
                        Delete Event
                    </Button>
                  </Grid>
                  </Grid>
                  <Grid item container justify="space-evenly" direction="column">
                    <VoteContainer event={event} />
                  </Grid>
                  <Grid item container justify="flex-end">
                    <TimerContainer handleFinish={this.finish} event={event} />
                  </Grid>
                </>
              )
          }

        </Grid>
      </>
    );
  };
}

Event.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Event);
