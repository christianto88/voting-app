import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import Event from "./Event";
import { Typography, Grid, AppBar } from "@material-ui/core";
const styles = {
  root: {
    flexGrow: 1
  }
};
function TabContainer(props) {
  return (
    <div style={{ border: "2px solid black", height: "100%" }}>
      {props.children}
    </div>
  );
}
class Main extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { classes } = this.props;
    const { value } = this.state;
    console.log("render Main");
    return (
      <Grid container direction="column">
        <Grid item>Voting app</Grid>
        <Grid item>
          <AppBar position="static" color="secondary">
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="On Going" />
              <Tab label="Finished" />
            </Tabs>
          </AppBar>
          {value === 0 && (
            <TabContainer>
              <Event />
            </TabContainer>
          )}
          {value === 1 && <TabContainer>Item Two</TabContainer>}
        </Grid>
      </Grid>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Main);
