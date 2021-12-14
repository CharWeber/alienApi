import PropTypes from "prop-types";
import React from "react";

export default function EditAlienForm(props) {
  const { alien } = props;


  function handleSubmit(e) {
    e.preventDefault();
    props.handleEditAlien(alien.alienId, {
      alienId: alien.alienId,
      name: e.target.name.value,
      description: e.target.description.value,
      originPlanet: e.target.originPlanet.value,
      originSystem: e.target.originSystem.value,
      numberOfPlanets: e.target.numberOfPlanets.value,
      breathesOxygen:
        e.target.breathesOxygen.value === "breathesOxygen" ? true : false,
      kardashevRating:
        e.target.kardashevRating.value === "null"
          ? alien.kardashevRating
          : e.target.kardashevRating.value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        defaultValue={alien.name}
        style={{ display: "block", margin: "10px" }}
      />
      <input
        type="textArea"
        name="description"
        placeholder="Description"
        defaultValue={alien.description}
        style={{ display: "block", margin: "10px" }}
      />
      <input
        type="text"
        name="originPlanet"
        placeholder="Origin Planet"
        defaultValue={alien.originPlanet}
        style={{ display: "block", margin: "10px" }}
      />
      <input
        type="text"
        name="originSystem"
        placeholder="Origin System"
        defaultValue={alien.originSystem}
        style={{ display: "block", margin: "10px" }}
      />
      <input
        type="number"
        name="numberOfPlanets"
        placeholder="Number of Planets"
        defaultValue={alien.numberOfPlanets}
        style={{ display: "block", margin: "10px" }}
      />
      <label style={{ display: "flex", margin: "10px" }}>Breaths Oxygen?</label>
      <input
        type="checkbox"
        name="breathesOxygen"
        value="breathesOxygen"
        defaultChecked
        style={{ display: "flex", margin: "10px" }}
      />
      <label style={{ display: "flex", margin: "10px" }}>
        Kardashev Rating
      </label>
      <select id="kardashevRating" name="kardeshevRating">
        <option value="null">No Change</option>
        <option value="0">Type 0</option>
        <option value="1">Type 1</option>
        <option value="2">Type 2</option>
        <option value="3">Type 3</option>
      </select>
      <button style={{ display: "block", margin: "10px" }} type="submit">
        Submit
      </button>
    </form>
  );
}

EditAlienForm.propTypes = {
  handleEditAlien: PropTypes.func,
  alien: PropTypes.object,
};
