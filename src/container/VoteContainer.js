import React, { Component } from "react";
import PropTypes from "prop-types";
import Vote from "../component/Vote";
class VoteContainer extends Component {
  vote = selected => {
    console.log("voteCon", selected);
  };
  render() {
    const { data } = this.props;
    return <Vote data={data} handleVote={this.vote} />;
  }
}

VoteContainer.propTypes = {
  data: PropTypes.object.isRequired
};

export default VoteContainer;
