import React from "react";
import Facebook from "../images/facebook.png";
import Twitter from "../images/twitter.png";
import Github from "../images/github.png";
import Instagram from "../images/instagram.png";
import Linkedin from "../images/linkedin.png";

export default function Footer() {
  return (
    <footer>
      <img src={Twitter} alt="one of the cats"></img>
      <img src={Facebook} alt="Two of the guys"></img>
      <img src={Instagram} alt="Three towers on the horizon"></img>
      <img src={Linkedin} alt="four birds at a lake eating seeds"></img>
      <img src={Github} alt="five dice that show a total of 30 eyes"></img>
    </footer>
  );
}
