import React, { Component } from "react";
import axios from "axios";
import './Beers.css';
import { Link } from 'react-router-dom';

export default class Beers extends Component {
  constructor() {
    super();
    // this.state = { name:"",image_url:"", tagline:"", contributed_by: ""};
    this.state = {
      listOfBeers: []
    };
  }
  getAllBeers = () => {
    axios.get(`http://localhost:5000/all`).then(responseFromApi => {
      this.setState({
        listOfBeers: responseFromApi.data
      });
    });
  };

  componentDidMount() {
    this.getAllBeers();
  }

  render() {
    return (
      <div>
        {this.state.listOfBeers.map((beer, idx) => (
        // <Link className="link" to={'single/'}> Beers 
        //     <h2>{beer.name}</h2>
        //     </Link>
          
          <ul>
            <li><img className="beers" src={beer.image_url} alt="beers"/></li>
            <li>{beer.tagline}</li>
            <li>{beer.contributed_by}</li>
          </ul>
          
        ))}
      </div>
    );
  }
}
