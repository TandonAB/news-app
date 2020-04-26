import React, { Component } from 'react';
import NewsBox from './news/NewsBox';

class Main extends Component {
  render() {
    return (
      <div className="container border my-3 p-3 d-block">
        <NewsBox />
        <NewsBox />
      </div>
    );
  }
}

export default Main;
