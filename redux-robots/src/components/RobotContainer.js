import React, { Component } from 'react';
import { connect } from "react-redux";
import Robot from "./Robot";
import "../App.css";

class RobotContainer extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }


  render() {
    return (
      <div className="robot-container">
      
      {this.props.loadingReducer && <div className='title'>LOADING</div>}  
      
      {this.props.users
      .filter((user) => user.name.toLowerCase().includes(this.props.searchTerm.toLowerCase()))
      .map((user) => (<Robot key={user.id} name={user.name} email={user.email} id={user.id} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  searchTerm: state.robotReducer.searchTerm // Map the searchTerm state from the Redux store
});

export default connect(mapStateToProps)(RobotContainer);




//1





// // RobotContainer.js (Functional Component without Redux)
// import React from 'react';
// import Robot from "./Robot";

// function RobotContainer({ users, searchTerm }) {
//   const filteredUsers = users.filter(user =>
//     user.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="robot-container">
//       {filteredUsers.map((user) => (
//         <Robot key={user.id} name={user.name} email={user.email} id={user.id} />
//       ))}
//     </div>
//   );
// }

// export default RobotContainer;

  


//3