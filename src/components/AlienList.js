import React from "react";
import Alien from "./Alien";

export default function AlienList(props){
  const {aliens} = props
  return(
    <React.Fragment>
      <h1>this is the start of the list</h1>
      {aliens.map((alien, index) => (
        <Alien 
        name={alien.name}
        description={alien.description}
        key={index}
        />

      ))}
    </React.Fragment>
  )
}