import React, { Component } from "react";
import './Image.css';

class Image extends Component {
  render() {
    const styles = {
      image: {
        backgroundImage:`url(${this.props.imageurl})`
      }
    }
    return (
      <div className="clicky-image" onClick={this.props.onClick} style={styles.image} clicked={this.props.clicked}></div>
    );
  }
}

export default Image;
