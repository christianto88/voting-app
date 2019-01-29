import React, { Component } from "react";
import PropTypes from "prop-types";
import Event from "../component/Event";

class EventContainer extends Component {
  render() {
    const { event, handleFinish } = this.props;
    console.log("render event container");
    return <Event handleFinish={handleFinish} event={event} />;
  }
}

EventContainer.propTypes = {
  event: PropTypes.string.isRequired
};

export default EventContainer;
