import React from "react";
import AlienList from "./AlienList";
import { connect } from "react-redux";
import { alienListCall } from '../actions';

class AlienControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      aliens: []
    };
  }

componentDidMount() {
  const {dispatch } = this.props;
  dispatch(alienListCall());
  // const aliens = dispatch(alienListCall());
  // console.log(aliens)
}



  render(){
    const { aliens, error, isLoaded } = this.props;

    if (!isLoaded){
      return <p>Loading...</p>
    } else if (error) {
      return <p>Error: {error.message}</p>
    } else {
      return(
      <div>
        <h1>This is AlienControl. MIB</h1>
        {/* <ul>
            {aliens.map((aliens, index) => (
              <li key={index}>
                <h3>{aliens.name}</h3>
              </li>
            ))}
          </ul> */}
        <AlienList aliens={aliens}/>
      </div>
    )
  }
}
}

const mapStateToProps = (state) => {
  return {
    aliens: state.aliens,
    isLoaded: state.isLoaded,
    error: state.error,
  }
}

export default connect(mapStateToProps)(AlienControl);