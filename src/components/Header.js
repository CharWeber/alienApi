import React from "react";
import headerImage from "./../img/header-w-text.png";
import {Button} from '@material-ui/core'

export default function Header(){
  return(
    <div>
      <img src={headerImage}  alt="Antony Gormley sculpture. Photo by Brian McMahon - @mcmre on Unsplash" />
      <Button class='blue'>LIGHT SPEED</Button>
    </div>
  );
}