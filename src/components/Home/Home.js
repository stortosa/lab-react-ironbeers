import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Home.css'

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="links">
          <Link className="link" to={'/OneBeer'}> One Beer ╔ </Link>
          <Link className="link" to={'/beers'}> Beers ╔</Link>
          <Link className="link" to={'/random-beers'}> Random Beer ╔</Link>
          <Link className="link" to={'/new-beers'}> New Beer ╔</Link>
        </div>
      </React.Fragment>
    )
  }
}
