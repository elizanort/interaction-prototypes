import React, { Component } from "react";
import "./App.scss";

class App extends Component {
  state = {
    month: "",
    day: "",
    year: "",

    selectedZodiac: "",
  };

  zodiacs = {
    colors: {
      fire: "#FF6347",
      water: "#00FFFF",
      air: "#add8e6",
      earth: "#008000",
    },

    emojis: {
      birthdayCake: (
        <img src={require("./img/birthday-cake.svg")} className="zodiac" alt="birthday cake"></img>
      ),
      capricorn: <img src={require("./img/capricorn.svg")} className="zodiac" alt="zodiac capricorn" />,
      aquarius: <img src={require("./img/aquarius.svg")} className="zodiac" alt="zodiac aqurius" />,
      pisces: <img src={require("./img/pisces.svg")} className="zodiac" alt="zodiac pisces" />,
      taurus: <img src={require("./img/taurus.svg")} className="zodiac" alt="zodiac taurus" />,
      gemini: <img src={require("./img/gemini.svg")} className="zodiac" alt="zodiac gemini" />,
      cancer: <img src={require("./img/cancer.svg")} className="zodiac" alt="zodiac cancer" />,
      leo: <img src={require("./img/leo.svg")} className="zodiac" alt="zodiac leo" />,
      virgo: <img src={require("./img/virgo.svg")} className="zodiac" alt="zodiac virgo" />,
      libra: <img src={require("./img/libra.svg")} className="zodiac" alt="zodiac libra" />,
      scorpio: <img src={require("./img/scorpio.svg")} className="zodiac" alt="zodiac scorpio" />,
      sagittarius: <img src={require("./img/sagittarius.svg")} className="zodiac" alt="zodiac sagittarius" />,
      aries: <img src={require("./img/aries.svg")} className="zodiac" alt="zodiac aries"/>
    },
  };

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value }, () => this.handleZodiacs());
  };

  handleZodiacs = () => {

    let zodiac = this.zodiacs.emojis.birthdayCake;

    switch (this.state.month) {
      case "12":
        zodiac =
          this.state.day < 22
            ? this.zodiacs.emojis.sagittarius
            : this.zodiacs.emojis.capricorn;
        break;

      case "01":
        zodiac =
          this.state.day < 20
            ? this.zodiacs.emojis.capricorn
            : this.zodiacs.emojis.aquarius;
        break;

      case "02":
        zodiac =
          this.state.day < 19
            ? this.zodiacs.emojis.aquarius
            : this.zodiacs.emojis.pisces;
        break;

      case "03":
        zodiac =
          this.state.day < 21
            ? this.zodiacs.emojis.pisces
            : this.zodiacs.emojis.aries;
        break;

      case "04":
        zodiac =
          this.state.day < 21
            ? this.zodiacs.emojis.aries
            : this.zodiacs.emojis.taurus;
        break;

      case "05":
        zodiac =
          this.state.day < 21
            ? this.zodiacs.emojis.taurus
            : this.zodiacs.emojis.gemini;
        break;

      case "06":
        zodiac =
          this.state.day < 21
            ? this.zodiacs.emojis.gemini
            : this.zodiacs.emojis.cancer;
        break;

      case "07":
        zodiac =
          this.state.day < 21
            ? this.zodiacs.emojis.cancer
            : this.zodiacs.emojis.leo;
        break;

      case "08":
        zodiac =
          this.state.day < 21
            ? this.zodiacs.emojis.leo
            : this.zodiacs.emojis.virgo;
        break;

      case "09":
        zodiac =
          this.state.day < 21
            ? this.zodiacs.emojis.virgo
            : this.zodiacs.emojis.libra;
        break;
      
      case "10":
        zodiac =
          this.state.day < 21
            ? this.zodiacs.emojis.libra
            : this.zodiacs.emojis.scorpio;
        break;

      case "11":
        zodiac =
          this.state.day < 21
            ? this.zodiacs.emojis.scorpio
            : this.zodiacs.emojis.sagittarius;
        break;

      default:
        zodiac = this.zodiacs.emojis.birthdayCake;
        break;
    }
    this.setState({ selectedZodiac: zodiac });
  };



  render() {
    return (
      <div className="inputWrapper">
        <div className="icon">{this.state.selectedZodiac}</div>
        <input
          name="month"
          className="input month"
          value={this.state.month}
          onChange={this.handleChange}
          type="text"
          placeholder="MM"
          maxLength="2"
          pattern="\d*"
        />
        <span>/</span>
        <input
          name="day"
          className="input day"
          value={this.state.day}
          onChange={this.handleChange}
          type="text"
          placeholder="DD"
          maxLength="2"
          pattern="\d*"
        />
        <span>/</span>
        <input
          name="year"
          className="input year"
          value={this.state.year}
          onChange={this.handleChange}
          type="text"
          placeholder="YYYY"
          maxLength="4"
          pattern="\d*"
        />
      </div>
    );
  }
}

export default App;
