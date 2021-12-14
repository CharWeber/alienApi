import React from "react";
import PropTypes from 'prop-types';

export default function AlienDetail(props) {
const {alien, handleDeleteAlien, setSelectedAlien} = props

  return(
    <div>
      <h1>{alien.name}</h1>
      <hr/>
      <p>{alien.description}</p>
      <ul>
        <li>Planet of Origin: {alien.originPlanet}</li>
        <li>Origin System: {alien.originSystem}</li>
        <li>Planets occupied: {alien.numberOfPlanets}</li>
        <li>Breathes Oxygen: {alien.breathesOxygen}</li>
      </ul>
      <p> Kardashev rating: {alien.kardashevRating}</p>
      <button onClick={() =>handleDeleteAlien(alien.alienId)}>delete</button>
      <button onClick={() =>setSelectedAlien(null)}>Back</button>
    </div>
  );
}

AlienDetail.propType ={
  alien: PropTypes.object,
  handleDeleteAlien: PropTypes.func,
  setSelectedAlien: PropTypes.func
}