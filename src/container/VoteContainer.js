import React, { Component } from "react";
import PropTypes from "prop-types";
import Vote from "../component/Vote";
class VoteContainer extends Component {
  vote = async selected => {
    const { event } = this.props;
    let temp = JSON.parse(await localStorage.getItem(event));
    temp[selected]["count"] += 1;
    await localStorage.setItem(event, JSON.stringify(temp));
    this.setState({ data: temp });
  };
  state = {
    data: {}
  };
  async componentDidMount() {
    const { event } = this.props;
    let temp = JSON.parse(await localStorage.getItem(event));
    this.setState({ data: temp });
  }
  render() {
    const { event } = this.props;
    console.log("render vote container");
    return <Vote data={this.state.data} event={event} handleVote={this.vote} />;
  }
}

VoteContainer.propTypes = {
  event: PropTypes.string.isRequired
};

export default VoteContainer;
