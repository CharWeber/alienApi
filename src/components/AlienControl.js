import React, { useState, useEffect } from "react";
import AlienList from "./AlienList";
import {
  alienListCall,
  alienListPost,
  alienListDelete,
  alienListPut,
} from "../actions";
import { useDispatch, useSelector } from "react-redux";
import NewAlienForm from "./NewAlienForm";
import EditAlienForm from "./EditAlienForm";
import AlienDetail from "./AlienDetail";

function AlienControl() {
  const aliens = useSelector((state) => state.aliens);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  const [newForm, setNewForm] = useState(false);
  const [selectedAlien, setSelectedAlien] = useState(null);
  // const [update, setUpdate] = useState(false);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    dispatch(alienListCall());
  }, [dispatch]);

  let buttonText = "";
  let visibleState = null;
  let editButtonText = '';

  const handleNewAlien = (newAlien) => {
    dispatch(alienListPost(newAlien));
    setNewForm(false);
  };

  const handleDeleteAlien = (id) => {
    dispatch(alienListDelete(id));
    setSelectedAlien(null);
  };

  const handleEditAlien = (id, newAlien) => {
    dispatch(alienListPut(id, newAlien));
    setEditing(false);
    setSelectedAlien(newAlien);
  };

  // if (update) {
  //   dispatch(alienListCall());
  //   setUpdate(false);
  // }

  if (error) {
    alert(error.message);
  }

  if (newForm) {
    visibleState = <NewAlienForm handleNewAlien={handleNewAlien} />;
    buttonText = "Back";
  } else if (selectedAlien != null && editing === true) {
    editButtonText="Stop Editing"
    visibleState = 
      <div>
        <EditAlienForm
          alien={selectedAlien}
          handleEditAlien={handleEditAlien}
        />
        <button onClick={() => setEditing(!editing)} >{editButtonText}</button>
      </div>
    ;
    buttonText = "Back to Alien List";
  } else if (selectedAlien != null) {
    editButtonText = 'Update Alien';
    visibleState = 
      <div>
        <AlienDetail
          alien={selectedAlien}
          handleDeleteAlien={handleDeleteAlien}
          setSelectedAlien={setSelectedAlien}
          setEditing={setEditing}
        />
        <button onClick={() => setEditing(!editing)}>{editButtonText}</button>
      </div>
        buttonText = 'New Alien';
  } else {
    visibleState = (
      <div>
        <AlienList aliens={aliens} setSelectedAlien={setSelectedAlien} />
      </div>
    );
    buttonText = "New Alien";
  }

  return (
    <div>
      {visibleState}
      <button onClick={() => setNewForm(!newForm)}>{buttonText}</button>
    </div>
  );

  // make a new alien form, display it using state in the return, probably make a button have a createNewAlien slice of state (use a hook): shows NewAlienForm hides AlienList
}

export default AlienControl;
