//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
//import TedLogo from '../../images/1.png';
import NavBar from '../Navbar/index'




const Header = ({ siteTitle }) => (
  <div id="sticky">
        <NavBar />
       
        
  </div>
)
    window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("sticky").style.fontSize = "15px";
    } else {
        document.getElementById("sticky").style.fontSize = "25px";
    }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

 

export default Header
