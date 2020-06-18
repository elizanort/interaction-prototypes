import React, { Component } from "react";
import "./App.scss";

class App extends Component {
  state = {
    month: "",
    day: "",
    year: "",

    errors: {
      oldAge: "",
      notBorn: "",
    },

    emptyZodiac:'',

    zodiacs: {
      capricorn: <img src="./img/capricorn.svg"/>,
      aquarius: <img src="./img/capricorn.svg"/>,
      pisces: <img src="./img/capricorn.svg"/>,
      taurus: <img src="./img/capricorn.svg"/>,
      gemini: <img src="./img/capricorn.svg"/>,
      cancer: <img src="./img/capricorn.svg"/>,
      leo: <img src="./img/capricorn.svg"/>,
      virgo: <img src="./img/capricorn.svg"/>,
      libra: <img src="./img/capricorn.svg"/>,
      scorpio: <img src="./img/capricorn.svg"/>,
      sagittarius: <img src="./img/capricorn.svg"/>,
    }
  };

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({[name]:value});

    if (this.state.month >= 11 && <= 12) && (this.state.day )

    if (this.state.month === 12 && this.state.day < 22){
      this.state.emptyZodiac = this.state.zodiacs.capricorn
    }
    switch (name) {
      case 'capricorn':
        if( this.state.month === 12 && this.state.day < 22){
          emptyZodiac = this.state.zodiacs.sagittarius
        }
    }
    
  };



  render() {
    return (
      <div className="inputWrapper">
        <div className="icon">
          {this.state.emptyZodiac}
        </div>
        <input
          name="month"
          className="input month"
          value = {this.state.month}
          onChange = {this.handleChange}
          type="text"
          placeholder="MM"
          maxLength="2"
          pattern="\d*"
        />
        <span>/</span>
        <input
          name="day"
          className="input day"
          value = {this.state.day}
          onChange = {this.handleChange}
          type="text"
          placeholder="DD"
          maxLength="2"
          pattern="\d*"
        />
        <span>/</span>
        <input
          name="year"
          className="input year"
          value = {this.state.year}
          onChange = {this.handleChange}
          type="text"
          placeholder="YYYY"
          maxLength="4"
          pattern="\d*"
        />
      </div>
      <div>
        Icons made by <a href="https://www.flaticon.com/authors/flat-icons" title="Flat Icons">Flat Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
      </div>
      
    );
  }
}

export default App;
