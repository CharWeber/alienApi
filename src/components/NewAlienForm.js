import React from "react";
import PropTypes from 'prop-types';

export default function NewAlienForm(props) {
  function handleSubmit(e){
    e.preventDefault();
    props.handleNewAlien({
      name: e.target.name.value,
      description: e.target.description.value,
      originPlanet: e.target.originPlanet.value,
      originSystem: e.target.originSystem.value,
      numberOfPlanets: e.target.numberOfPlanets.value,
      breathesOxygen: e.target.breathesOxygen.value === "breathesOxygen" ? true : false,
      kardashevRating: e.target.kardashevRating.value
    })
  }

  return(
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        style={{ display: "block", margin: "10px" }}
        />
      <input
        type="textArea"
        name="description"
        placeholder="Description"
        style={{ display: "block", margin: "10px" }}
        />
      <input
        type="text"
        name="originPlanet"
        placeholder="Origin Planet"
        style={{ display: "block", margin: "10px" }}
        />
      <input
        type="text"
        name="originSystem"
        placeholder="Origin System"
        style={{ display: "block", margin: "10px" }}
        />
      <input
        type="number"
        name="numberOfPlanets"
        placeholder="Number of Planets"
        style={{ display: "block", margin: "10px" }}
        />
        <label style={{ display: "flex", margin: "10px" }} >Breaths Oxygen?</label>
      <input
        type="checkbox"
        name="breathesOxygen"
        value="breathesOxygen"
        defaultChecked
        style={{ display: "flex", margin: "10px" }}
        />
        <label style={{ display: "flex", margin: "10px" }} >Kardashev Rating</label>
        <select id="kardashevRating" name="kardeshevRating">
          <option value="0">Type 0</option>
          <option value="1">Type 1</option>
          <option value="2">Type 2</option>
          <option value="3">Type 3</option>
        </select>
        <button style={{ display: "block", margin: "10px" }} type='submit'>Submit</button>
    </form>
  );
}

NewAlienForm.propTypes= {
handleNewAlien: PropTypes.func
}

// something along these lines in the action index?

// var data = new FormData();
//         data.append("PoLos", JSON.stringify(PL));

//         fetch('api/Testing/test',
//             {
//                 method: "POST",
//                 body: data
//             }).
//             then(response => response.text())
//             .then(data => {
//                 this.setState({ text: data, loading: false });
//             });

//     }