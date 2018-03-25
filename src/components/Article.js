import React, { Component } from 'react';
import Nav from "./Nav"
import ListArticle from "./ListArticle"

class Article extends Component {


  render() {
    return (
      <div> 
      <Nav />
      <div className="container">
      <h3 className="center-align">
      Articles synthétisé
      </h3>
      <ListArticle />


      </div>
      </div>
      );
  }
}

export default Article;
