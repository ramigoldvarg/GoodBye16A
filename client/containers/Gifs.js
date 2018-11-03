import React, { Component } from 'react';
import { connect } from 'react-redux';
import { nextId, prevId } from '../actions/index.js';
import { bindActionCreators } from 'redux';
import './Gifs.css'
 
/**
* A counter button: tap the button to increase the count.
*/
class Gifs extends Component {
 constructor(props) {
    super(props);
    this.state = {"showGif": false};
    this.beginInterval = this.beginInterval.bind(this);
 }

 componentDidMount() {
  this.beginInterval();
  window.addEventListener("click", (e) => {
    e.preventDefault();
    clearInterval(this.switchGifs);
    this.beginInterval();
    this.props.nextId(this.props.currentGif);
  })
  window.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    clearInterval(this.switchGifs);
    this.beginInterval();

    this.props.prevId(this.props.currentGif);
  })
 }

 beginInterval() {
  this.switchGifs = setInterval(() => {
   this.setState({
    "showGif": !this.state.showGif
  }, () => {
    !this.state.showGif && this.props.nextId(this.props.currentGif);
  })
  }, 2500);
 }

 componentWillUnmount() {
   clearInterval(this.switchGifs)
 }

 render() {
   if (this.props.currentGif >= this.props.gifs.length) {
     clearInterval(this.switchGifs);
    return (
      <div>
        <h1>
          מקווים שנהנתם
        </h1>
        <h2>
          ♥16A אוהבים 
        </h2>
      </div>
    );
   }

   const currentShow = this.props.gifs[this.props.currentGif]
   return (
     <div className="wrapper">
        {this.state.showGif && <img src={currentShow.url} />}
        <h1 className={this.state.showGif && "gifShown"}>
          {currentShow.title}
        </h1>
      </div>
   );
 }
}

function mapStateToProps({gifs, currentGif}) {
  return {gifs, currentGif};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ nextId, prevId }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Gifs);