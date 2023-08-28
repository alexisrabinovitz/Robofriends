import React, { Component } from "react";
import RobotContainer from "./components/RobotContainer";
import { connect } from "react-redux";
import './App.css';


const usersUrl = "https://jsonplaceholder.typicode.com/users";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }
  
  componentDidMount(){
    fetch(usersUrl)
    .then((res) => res.json())
    .then((users) => this.setState({users: users}))
    .then(() => this.props.dispatch({type: "END_LOADING"}))
    .catch(console.error);
  }

   
  // componentDidMount() {
  //   fetch(usersUrl)
  //     .then((res) => res.json())
  //     .then((users) => {
  //       this.setState({ users: users }, () => {
  //         this.props.dispatch({ type: "END_LOADING" });
  //       });
  //     })
  //     .catch(console.error);
  // }

  handleChange = (e) => {
    const searchString = e.target.value; 
    this.props.dispatch({ type: "SEARCH_ROBOT", payload: searchString });
  }

  render () {
    return (
    <div>
      <h1 className="title">Robofriends</h1>
      <div className="tc">
          <div className="pa2">
             <input 
             type="search" 
             className="pa3 ba b--green bg-lightest-blue" 
             placeholder="search robots"
             onChange={this.handleChange}/>
         </div>
      </div>
        <RobotContainer users={this.state.users}/>
    </div>
  );
}}

export default connect()(App);







// handleChange = (e) => { ... }: This arrow function defines the handleChange event handler. 
// It gets called whenever the input field for searching robots changes. It extracts the search string 
// from the event, and then it dispatches a Redux action of type "SEARCH_ROBOT" with the payload being the 
// search string. //2














// // App.js (Functional Component without Redux)
// import React, { useState, useEffect } from "react";
// import RobotContainer from "./components/RobotContainer";
// import './App.css';

// const usersUrl = "https://jsonplaceholder.typicode.com/users";

// function App() {
//   const [users, setUsers] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     fetch(usersUrl)
//       .then((res) => res.json())
//       .then((users) => setUsers(users))
//       .catch(console.error);
//   }, []);

//   const handleChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   return (
//     <div>
//       <h1 className="title">Robofriends</h1>
//       <div className="tc">
//         <div className="pa2">
//           <input
//             type="search"
//             className="pa3 ba b--green bg-lightest-blue"
//             placeholder="search robots"
//             onChange={handleChange}
//           />
//         </div>
//       </div>
//       <RobotContainer users={users} searchTerm={searchTerm} />
//     </div>
//   );
// }

// export default App;