import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import Event from "./Event";
import { Grid, AppBar, Divider, Button } from "@material-ui/core";
const styles = {
  root: {
    flexGrow: 1
  }
};
function TabContainer(props) {
  return <>{props.children}</>;
}
class Main extends Component {
  state = {
    value: 0,
    data: [
      {
        name: "Pilpres 2019",
        votes: [{ name: "jokowi", value: 50 }, { name: "prabowo", value: 47 }]
      },
      {
        name: "FA cup round 4",
        votes: [
          { name: "manchester united", value: 150 },
          { name: "arsenal", value: 47 }
        ]
      }
    ]
  };

  async componentDidMount() {
    if (localStorage.getItem("votingapp")) {
      let a = await localStorage.getItem("votingapp");
      console.log("test", JSON.parse(a));
      this.setState({ data: JSON.parse(a) });
    } else {
      localStorage.setItem(
        "votingapp",
        JSON.stringify(["pilpres2019", "facup4thround"])
      );
    }
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { value } = this.state;
    console.log("render Main");
    return (
      <Grid container direction="column" justify="center">
        <Grid item>
          <Button variant="outlined" color="secondary">
            Add Voting Event
          </Button>
        </Grid>
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
        </Grid>
        <Grid container item direction="column" name="a">
          {value === 0 && (
            <TabContainer>
              {this.state.data.map(el => (
                <>
                  <Event data={el} />
                  <Divider />
                </>
              ))}
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
