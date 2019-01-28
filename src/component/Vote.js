import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ThumbIcon from "@material-ui/icons/ThumbUpAlt";
import {
  Paper,
  Grid,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@material-ui/core";
const styles = theme => ({
  root: {
    display: "flex"
  },
  formControl: {
    margin: theme.spacing.unit * 3
  },
  group: {
    flexDirection: "row",
    justifyContent: "center"
  }
});
class Vote extends Component {
  state = {
    // data: [],
    selected: ""
  };
  vote = () => {
    let data = { ...this.state.data };
    data.votes[0].value = data.votes[0].value + 100;
    this.setState({ data });
  };
  checking = () => {
    console.log("checking . . ");
    if (this.state.count === 12) {
      console.log("twelve");
      clearInterval(this.state.timer);
    }
  };
  handleChange = event => {
    this.setState({ selected: event.target.value });
  };
  vote = () => {
    const { handleVote } = this.props;
    handleVote(this.state.selected);
  };
  componentDidMount() {
    console.log("vote did mount");
    // const { data } = this.props;
    // this.setState({ data });
    // let t = setInterval(this.checking, 2000);
    // this.setState({ timer: t });
  }
  componentDidUpdate() {
    console.log("vote did update");
    // this.setState({ timer: t });
  }
  render() {
    const { classes, data } = this.props;
    console.log("render Vote");
    return (
      <>
        <Grid item name="a" alignContent="center">
          <Paper>
            <RadioGroup
              className={classes.group}
              value={this.state.value}
              onChange={this.handleChange}
            >
              {data.votes
                ? data.votes.map(el => (
                    <FormControlLabel
                      key={el.name}
                      value={el.name}
                      control={<Radio />}
                      label={el.name}
                    />
                  ))
                : ""}
            </RadioGroup>
          </Paper>
        </Grid>
        <Grid item>
          <Button
            onClick={this.vote}
            variant="contained"
            color="primary"
            size="small"
          >
            Vote <ThumbIcon style={{ width: "25px", height: "20px" }} />
          </Button>
        </Grid>
        {/* <Grid item>Vote : {this.state.count}</Grid> */}
      </>
    );
  }
}

Vote.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  handleVote: PropTypes.func.isRequired
};

export default withStyles(styles)(Vote);
