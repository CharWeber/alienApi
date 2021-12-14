import React from "react";
import headerImage from "./../img/header-w-text.png";
import {Button} from '@material-ui/core'

export default function Header(){
  return(
    <div>
      <img src={headerImage}  alt="Antony Gormley sculpture. By Brian McMahon - @mcmre on Unsplash" />
      <Button color="secondary" variant='outlined' style={{margin:'auto', display:'block'}}>LIGHT SPEED</Button>
    </div>
  );
}