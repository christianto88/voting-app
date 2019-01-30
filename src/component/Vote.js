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
  Radio,
  Divider
} from "@material-ui/core";
const styles = theme => ({
  root: {
    display: "flex"
  },
  formControl: {
    margin: theme.spacing.unit * 3
  },
  group: {
    flexDirection: "column",
    justifyContent: "center"
  }
});
class Vote extends Component {
  state = {
    selected: ""
  };
  handleChange = event => {
    this.setState({ selected: event.target.value });
  };
  vote = () => {
    const { handleVote } = this.props;
    handleVote(this.state.selected);
  };
  render() {
    const { classes, data } = this.props;
    console.log("render Vote");
    return (
      <>
        <Grid item container justify="center">
        {/* <Paper> */}

        <Grid item>
            <RadioGroup
              className={classes.group}
              value={this.state.selected}
              onChange={this.handleChange}
            >
              {data
                ? Object.keys(data).map(el =>
                    el !== "endDate" && el !== "event" ? (
                      <FormControlLabel
                        key={data[el]["name"]}
                        value={el}
                        control={<Radio />}
                        label={data[el]["name"]}
                      />
                    ) : (
                      ""
                    )
                  )
                : ""}
            </RadioGroup>
        </Grid>
        {/* </Paper> */}
        </Grid>
        <Grid item>
          <Button
            onClick={this.vote}
            variant="contained"
            color="primary"
            size="medium"
          >
            Vote <ThumbIcon style={{ width: "25px", height: "20px" }} />
          </Button>
        </Grid>
        <Grid item>
          {/* <Paper> */}
            {data
              ? Object.keys(data).map(el =>
                  el !== "endDate" && el !== "event" ? (
                    <div key={el}>
                      <span>
                        {data[el]["name"]} : {data[el]["count"]}
                      </span>
                      {/* <Divider /> */}
                    </div>
                  ) : (
                    ""
                  )
                )
              : ""}
          {/* </Paper> */}
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
