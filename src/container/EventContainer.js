import React, { Component } from "react";
import PropTypes from "prop-types";
import Event from "../component/Event";

class EventContainer extends Component {
  render() {
    const { event, handleFinish, handleDelete,type } = this.props;
    console.log("render event container");
    return type === 'ongoing' ? <Event handleFinish={handleFinish} handleDelete={handleDelete} event={event} /> : <Event type={type} event={event}></Event>;
  }
}

EventContainer.propTypes = {
  event: PropTypes.string.isRequired,
  type: PropTypes.string,
  handleFinish:PropTypes.func,
  handleDelete:PropTypes.func

};

export default EventContainer;
