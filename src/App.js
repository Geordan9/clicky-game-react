import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Image from './components/Image/Image';
import Image1 from './images/image1.jpg';
import Image2 from './images/image2.jpg';
import Image3 from './images/image3.jpg';
import Image4 from './images/image4.jpg';

class App extends Component {
  state = {
    currentScore: 0,
    topScore: 0,
    message: "Click an Image.",
    images: [
      {image:Image1, clicked: "false"},
      {image:Image2, clicked: "false"},
      {image:Image3, clicked: "false"},
      {image:Image4, clicked: "false"}
    ]
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  handleClick = index => {
    let clicked = this.state.images[index].clicked;
    console.log(clicked);
    if (clicked === "false")
    {
      this.state.images[index].clicked = "true";
      this.setState({currentScore: this.state.currentScore + 1});
      if (this.state.currentScore > this.state.topScore){
        this.setState({topScore: this.state.currentScore});
      }
      this.setState({message: "Click an Image."})
    }
    else{
      this.setState({currentScore: 0});
      this.setState({message: "Incorrect Image."})
      this.setState({images: [
      {image:Image1, clicked: "false"},
      {image:Image2, clicked: "false"},
      {image:Image3, clicked: "false"},
      {image:Image4, clicked: "false"}
    ]})
    }
  };

  render() {
    // const images = [
    //   {image:Image1, clicked: "false"},
    //   {image:Image2, clicked: "false"},
    //   {image:Image3, clicked: "false"},
    //   {image:Image4, clicked: "false"}
    // ]
    return (
      <div>
        <Nav message={this.state.message} currentScore={this.state.currentScore} topScore={this.state.topScore}/>
        <div className="container">
          <div className="col-sm-12">
            {this.shuffle(this.state.images).map((image, index) => <Image imageurl={image.image} key={index} clicked={image.clicked} onClick={() => this.handleClick(index)}/>)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
