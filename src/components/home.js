import React, { Component } from 'react';

import Header from "./header";
import Card from "./card";

class Home extends Component {
  render() {
    return (
      <div className="home">
        {Header() }
        <Card />
      </div>
    );
  }
}

//placeholder
//gray and green number labels
//button space and card height
//content labels
export default Home;
