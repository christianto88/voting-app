import React, { Component } from "react";
import PropTypes from "prop-types";
import Vote from "../component/Vote";
import {Grid} from '@material-ui/core'
import {BarChart,CartesianGrid,XAxis,YAxis,Bar,Tooltip,LabelList} from 'recharts'
function MyBarChart(props){
  console.log('BC',props)
return <BarChart width={730} height={250} data={props.data}>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="name" />
<YAxis />
<Tooltip />
<Bar label="value" dataKey="value" fill="#8884d8">
<LabelList dataKey="value" position="top" />
</Bar>
</BarChart>
}
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
  chartData=()=>{
    let data={...this.state.data}
    delete data.event
    delete data.endDate
    let chartData=[]
    for(let key in data){
      chartData.push({name:data[key].name,value:data[key].count})
    }
    return chartData
  }
  render() {
    const { event,type } = this.props;
    console.log("render vote container",type);

    return type==='finished'?<><Grid item container justify="center" alignItems="center">
    <Grid item>    
    <MyBarChart data={this.chartData()}></MyBarChart>
    </Grid>
    </Grid></>:(
     <Vote data={this.state.data} event={event} handleVote={this.vote} />
    )
  }
}

VoteContainer.propTypes = {
  event: PropTypes.string.isRequired
};

export default VoteContainer;
