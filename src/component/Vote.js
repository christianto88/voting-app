import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ThumbIcon from "@material-ui/icons/ThumbUpAlt";
import {
  Grid,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography
} from "@material-ui/core";
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
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
          <div className={classes.root} >
            {data
              ? Object.keys(data).map(el =>
                  el !== "endDate" && el !== "event" ? (
                    <div key={el}>
                      <Typography>
                        {data[el]["name"]} : {data[el]["count"]}
                      </Typography>
                    </div>
                  ) : (
                    ""
                  )
                )
              : ""}
          </div>
        </Grid>
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
