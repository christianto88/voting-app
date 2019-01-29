import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import Event from "./Event";
import {
  Grid,
  AppBar,
  Divider,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Typography,
  FormControl,
  InputLabel,
  Input
} from "@material-ui/core";
import { DatePicker } from "material-ui-pickers";
import EventContainer from "../container/EventContainer";

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
    open: false,
    selectedDate: new Date(),
    form: {}
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  createEvent = async event => {
    const { handleSave } = this.props;
    event.preventDefault();
    const form = { ...this.state.form };
    if (form) {
      form[form.option1.replace(/ /g, "_")] = { name: form.option1, count: 0 };
      form[form.option2.replace(/ /g, "_")] = { name: form.option2, count: 0 };
      delete form.option1;
      delete form.option2;
      form.endDate = this.state.selectedDate.toISOString();

      let ongoing = [...this.props.ongoing];
      ongoing.push(form.event.replace(/ /g, "_"));
      handleSave(form, ongoing);
      this.setState({ open: false });
    } else {
      this.setState({ open: false, form: {} });
    }
  };

  handleTextChange = event => {
    let form = { ...this.state.form };
    form[event.target.name] = event.target.value;
    this.setState({ form });
  };

  openDialog = () => {
    this.setState({ open: true });
  };

  closeDialog = () => {
    this.setState({ open: false, form: {} });
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  render() {
    const { value } = this.state;
    const { handleDelete } = this.props;
    console.log("render Main");
    return (
      <Grid container direction="column" justify="center">
        <Dialog
          open={this.state.open}
          onClose={this.closeDialog}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Voting Event</DialogTitle>
          <form onSubmit={this.createEvent}>
            <DialogContent>
              <TextField
                required
                autoFocus
                margin="dense"
                name="event"
                label="Event name"
                type="text"
                fullWidth
                onChange={this.handleTextChange}
              />
              <TextField
                required
                margin="dense"
                name="option1"
                label="Option 1"
                type="text"
                fullWidth
                onChange={this.handleTextChange}
              />
              <TextField
                required
                margin="dense"
                name="option2"
                label="Option 2"
                type="text"
                fullWidth
                onChange={this.handleTextChange}
              />
              <DatePicker
                format="DD MMMM YYYY"
                margin="dense"
                label="Pick End Date"
                value={this.state.selectedDate}
                onChange={this.handleDateChange}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.closeDialog} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Create Event
              </Button>
            </DialogActions>
          </form>
        </Dialog>
        <Grid
          item
          container
          alignItems="center"
          alignContent="center"
          justify="center"
        >
          <Grid item>Voting App</Grid>
          <Grid item>
            <Button
              style={{ margin: "10px" }}
              onClick={this.openDialog}
              variant="outlined"
              color="primary"
            >
              Add Voting Event
            </Button>
          </Grid>
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
              {this.props.ongoing
                ? this.props.ongoing.map(el => (
                    <div key={el}>
                      <EventContainer handleFinish={handleDelete} event={el} />
                      <Divider />
                    </div>
                  ))
                : ""}
            </TabContainer>
          )}
          {value === 1 && (
            <TabContainer>
              {this.props.finished
                ? this.props.finished.map(el => (
                    <div key={el}>
                      <EventContainer event={el} />
                      <Divider />
                    </div>
                  ))
                : ""}
            </TabContainer>
          )}
        </Grid>
      </Grid>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Main);
