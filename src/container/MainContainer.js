import React, { Component } from "react";
import PropTypes from "prop-types";
import Main from "../component/Main";

class MainContainer extends Component {
  state = {
    ongoing: [],
    finished: []
  };
  saveEvent = async (form, ongoing) => {
    await localStorage.setItem(
      form.event.replace(/ /g, "_"),
      JSON.stringify(form)
    );
    await localStorage.setItem("ongoing", JSON.stringify(ongoing));
    this.setState({ ongoing });
  };
  deleteEvent = async event => {
    await localStorage.removeItem(event);
    let ongoing = [...this.state.ongoing];
    console.log("a", ongoing.indexOf(event));
    ongoing.splice(ongoing.indexOf(event), 1);
    console.log("after slice", ongoing);
    await localStorage.setItem("ongoing", JSON.stringify(ongoing));
    this.setState({ ongoing });
  };
  async componentDidMount() {
    let ongoing = JSON.parse(await localStorage.getItem("ongoing"));
    let finished = JSON.parse(await localStorage.getItem("finished"));
    this.setState({
      ongoing: ongoing ? ongoing : [],
      finished: finished ? finished : []
    });
  }

  render() {
    console.log("render main container");
    return (
      <Main
        handleDelete={this.deleteEvent}
        handleSave={this.saveEvent}
        ongoing={this.state.ongoing}
        finished={this.state.finished}
      />
    );
  }
}

MainContainer.propTypes = {};

export default MainContainer;
