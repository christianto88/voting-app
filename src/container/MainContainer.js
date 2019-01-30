import React, { Component } from "react";
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
  finishedEvent = async event => {
    let finished = [...this.state.finished]
    let ongoing = [...this.state.ongoing];
    finished.push(event)
    ongoing.splice(ongoing.indexOf(event), 1);
    await localStorage.setItem("ongoing", JSON.stringify(ongoing));
    await localStorage.setItem('finished', JSON.stringify(finished))
    this.setState({ ongoing,finished });
  };
  deleteEvent=async (event)=>{
    let ongoing = [...this.state.ongoing];
    ongoing.splice(ongoing.indexOf(event), 1);
    await localStorage.setItem("ongoing", JSON.stringify(ongoing));
    await localStorage.removeItem(event)
    this.setState({ ongoing });

  }
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
        handleFinish={this.finishedEvent}
        handleSave={this.saveEvent}
        ongoing={this.state.ongoing}
        finished={this.state.finished}
      />
    );
  }
}

export default MainContainer;
