import React from "react";
import AlienList from "./AlienList";
import { alienListCall } from '../actions'

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
}

  render(){
    return(
      <div>
        <h1>This is AlienControl. MIB</h1>
        <AlienList />
      </div>
    )
  }
}

export default AlienControl;