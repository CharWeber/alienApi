import React, {useState, useEffect} from "react";
import AlienList from "./AlienList";
import { connect } from "react-redux";
import { alienListCall, alienListPost, alienListDelete } from '../actions';
import { useDispatch, useSelector } from "react-redux";
import NewAlienForm from "./NewAlienForm";
import AlienDetail from "./AlienDetail";

// class AlienControl extends React.Component() {
//   constructor(props) {
//     super(props);
//     this.state = {
//       error: null,
//       isLoaded: false,
//       aliens: []
//     };
//   }

// componentDidMount() {
//   const { dispatch } = this.props;
//   dispatch(alienListCall());
// }

function AlienControl() {

  const aliens = useSelector((state) => state.aliens);
  const error = useSelector((state) => state.error)
  const dispatch = useDispatch();
  
  const [newForm, setNewForm] = useState(false);
  const [selectedAlien, setSelectedAlien] = useState(null);
  const [update, setUpdate] = useState(false);
  
  useEffect(() => {
    // const { dispatch } = this.props;
    dispatch(alienListCall());
    // setAliens(this.state.aliens)
  }, [dispatch]);
  
  let buttonText= '';
  let visibleState = null;


  
 const handleNewAlien = (newAlien) => {
    dispatch(alienListPost(newAlien))
    // setTimeout(() => {
    //   dispatch(alienListCall());
      setNewForm(false);
    // }, 2000);
  }

  const handleDeleteAlien = (id) => {
    dispatch(alienListDelete(id))
    // setTimeout(() => {
    //   dispatch(alienListCall());
      setSelectedAlien(null);
    // }, 2000);
  }

  if(update){
    dispatch(alienListCall());
    setUpdate(false);
  }


  if (newForm){
    visibleState = <NewAlienForm handleNewAlien={handleNewAlien}/>;
    buttonText = 'Back';
  } else if (selectedAlien != null) {
    visibleState = <AlienDetail alien={selectedAlien} handleDeleteAlien={handleDeleteAlien} setSelectedAlien={setSelectedAlien}/>
    buttonText = 'New Alien'
  } else {
    visibleState = 
    <div>
    <AlienList aliens={aliens} setSelectedAlien={setSelectedAlien}/>
  </div>;
    buttonText = 'New Alien';
  }
  
  
  
  //  if (!isLoaded){
    //     return <p>Loading...</p>
    //   } else if (error) {
      //     return <p>Error: {error.message}</p>
      //   } else {
        return(
          <div>
            {visibleState}
            <button onClick={() => setNewForm(!newForm)}>{buttonText}</button>
          </div>
    )
  
    // make a new alien form, display it using state in the return, probably make a button have a createNewAlien slice of state (use a hook): shows NewAlienForm hides AlienList
  }
// }

  

  // render(){
  //   const { aliens, error, isLoaded } = this.props;

  //   if (!isLoaded){
  //     return <p>Loading...</p>
  //   } else if (error) {
  //     return <p>Error: {error.message}</p>
  //   } else {
  //     return(
  //     <div>
  //       <h1>MIB Extra Terrestrial List</h1>
        
  //       <AlienList aliens={aliens}/>
  //     </div>
  //   )
    //make a new alien form, display it using state in the return, probably make a button have a createNewAlien slice of state (use a hook): shows NewAlienForm hides AlienList
  // }
// }
// }

// const mapStateToProps = (state) => {
//   return {
//     aliens: state.aliens,
//     isLoaded: state.isLoaded,
//     error: state.error,
//   }
// }

export default AlienControl;