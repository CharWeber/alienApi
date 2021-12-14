import React from "react";
import Alien from "./Alien";
import PropTypes from 'prop-types'; 

export default function AlienList(props){
  const { aliens, setSelectedAlien } = props
  return(
    <React.Fragment>
      {aliens.map((alien, index) => (
        <div onClick ={() => setSelectedAlien(alien)}>
          <Alien
          name={alien.name}
          description={alien.description}
          key={index}
          />
        </div>

      ))}
    </React.Fragment>
  )
}

AlienList.propTypes ={
  aliens: PropTypes.array,
  setSelectedAlien: PropTypes.func
}