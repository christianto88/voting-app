import React, { Component } from "react";
import PropTypes from "prop-types";
import Timer from "../component/Timer";

class TimerContainer extends Component {
  state = { endDate: '' }
  async componentDidMount() {
    const { event } = this.props
    const data = JSON.parse(await localStorage.getItem(event))
    this.setState({ endDate: data.endDate })
  }

  render() {
    const { handleFinish } = this.props;
    console.log("render TimerContainer");
    return <Timer  handleFinish={handleFinish} key={this.state.endDate} endDate={this.state.endDate} />;
  }
}

TimerContainer.propTypes = {
  event: PropTypes.string.isRequired
};

export default TimerContainer;
