import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Grid, Button } from "@material-ui/core";
const styles = {
  root: {
    flexGrow: 1
  }
};
class Vote extends Component {
  state = {
    count: 0,
    timer: ""
  };
  vote = () => {
    let count = this.state.count;
    count++;
    this.setState({ count });
  };
  checking = () => {
    console.log("checking . . ");
    if (this.state.count == 12) {
      console.log("twelve");
      clearInterval(this.state.timer);
    }
  };
  componentDidMount() {
    console.log("did mount");
    let t = setInterval(this.checking, 2000);
    this.setState({ timer: t });
  }
  componentDidUpdate() {
    console.log("did update");
    // this.setState({ timer: t });
  }
  render() {
    const { classes } = this.props;
    console.log("render Vote");
    return (
      <Grid container direction="row" spacing={40}>
        <Grid item>
          <Button variant="contained" color="primary" onClick={this.vote}>
            Click to Vote
          </Button>
        </Grid>
        <Grid item>Vote : {this.state.count}</Grid>
      </Grid>
    );
  }
}

Vote.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Vote);
