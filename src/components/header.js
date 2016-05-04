import React, { Component } from 'react';
import { Link } from 'react-router';


class Header extends Component {
  render() {
    return (
      <div>
        {/* left side bar */}
        <div id="m_menu" className="ui thin floating sidebar vertical menu inverted">
          <Link to="/" className="item"><i className="home icon"></i>Home </Link>
          <Link to="/about" className="item"><i className="user icon"></i>About </Link>
          <Link to="/portfolio" className="item"><i className="archive icon"></i>Portfolio </Link>
          <Link to="/contact" className="item"><i className="mail icon"></i>Contact </Link>
        </div>

        {/* Main Header */}
        <div id="mainHead">

          <div id="menu" className="ui fluid four item inverted menu">
            <Link to="/" className="item"><i className="home icon"></i>Home </Link>
            <Link to="/about" className="item"><i className="user icon"></i>About </Link>
            <Link to="/portfolio" className="item"><i className="archive icon"></i>Portfolio </Link>
            <Link to="/contact" className="item"><i className="mail icon"></i>Contact </Link>
          </div>

          {/* Mobile Menu Button */}
          <div id="m_btn" className="ui black labeled icon button">
          <i className="icon list layout"></i> Menu
          </div>

          {/* Chat Icon */}
          <div className="ui icon inverted huge header">
            <i className="circular chat icon inverted"></i>
            Learn . Live. Play.
          </div>

          {/* Mobile Chat Icon */}
          <h2 className="ui header inverted">
            <i className="chat icon"></i>
            Learn . Live. Play.
          </h2>

        </div>

        {/* Header Image */}
        <div>
          <img id="mainImage" src="images/header.jpg" alt="chairs"/>
        </div>

      </div>
    )
  }
}

export default Header;
