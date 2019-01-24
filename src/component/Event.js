import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Grid } from "@material-ui/core";
import Vote from "./Vote";
import Timer from "./Timer";
const styles = {
  root: {
    flexGrow: 1
  }
};
class Event extends Component {
  render() {
    const { classes } = this.props;
    console.log("render Event");
    return (
      <div style={{ backgroundColor: "#f6f8fa", height: "100%" }}>
        <Grid container direction="column">
          <Grid item>
            <Vote />
          </Grid>
          <Grid item>
            <Timer />
          </Grid>
        </Grid>
      </div>
    );
  }
}

Event.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Event);
