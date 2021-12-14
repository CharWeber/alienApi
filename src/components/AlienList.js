import React from "react";
import Alien from "./Alien";
import PropTypes from 'prop-types';
import {Grid} from '@material-ui/core'

export default function AlienList(props){
  const { aliens, setSelectedAlien } = props
  return(
    <React.Fragment>
      <Grid container spacing={2}>
        {aliens.map((alien, index) => (
          <Grid item xs={6}>
            <div onClick ={() => setSelectedAlien(alien)}>
              <Alien
              name={alien.name}
              description={alien.description}
              key={index}
              />
            </div>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  )
}

AlienList.propTypes ={
  aliens: PropTypes.array,
  setSelectedAlien: PropTypes.func
}