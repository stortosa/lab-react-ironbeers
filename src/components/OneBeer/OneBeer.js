import React, { Component } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';


export default class OneBeer extends Component {
  constructor(props) {
    super(props);
    // this.state = { name:"",image_url:"", tagline:"", contributed_by: ""};
    this.state = {
      listOfBeers: []
    };
  }

  componentDidMount() {
    this.getOneBeer()
  }

  getOneBeer = () => {
    const { params } = this.props.match;
    axios.get(`http://localhost:5000/single/${params.id}`)
      .then(responseFromApi => {
        this.setState({
          listOfBeers: responseFromApi.data
        });
      });
  };

  render() {
    return (

      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>
        {/* <Link to={'/OneBeer'}>Beers</Link> */}
      </div>
    );
  }
}