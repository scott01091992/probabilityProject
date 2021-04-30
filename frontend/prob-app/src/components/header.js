import React from 'react'
import logo from './../assets/svgs/beaker-logo.svg'

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  render(){
    return (
      <header id="header">
        <img id='logo' src={logo} />
        <div id='header-container'>
          <div class='powerball'><span class='center-num'>01</span></div>
          <div id='title-container'>
            <h1 class='series-title'>UNDERSTANDING</h1>
            <h2 class='header-subtitle'>The Powerball Lottery</h2>
          </div>
          <div class='powerball'><span class='center-num'>25</span></div>
        </div>
      </header>
    )
  }
}
export default Header;
