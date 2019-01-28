import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import { Grid, Typography } from "@material-ui/core";
import Vote from "./Vote";
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
  componentDidMount() {}
  render() {
    const { data, classes } = this.props;
    console.log("render Event");
    return (
      <>
        <Grid item container direction="column" className={classes.event}>
          <Grid item>
            <Typography variant="h5" gutterBottom>
              {data.name}
            </Typography>
          </Grid>
          <Grid item container justify="space-evenly" direction="column">
            <VoteContainer data={data} />
          </Grid>
          <Grid item>
            <Timer />
          </Grid>
        </Grid>
      </>
    );
  }
}

Event.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Event);
