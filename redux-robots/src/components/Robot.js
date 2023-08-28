import React, { Component } from "react";

export default class Robot extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }


    render() {
        return (
        <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
            <img 
                alt="robots" 
                src={`https://robohash.org/${this.props.id}?`}>
            </img>
            <div>
                <h2>{this.props.name}</h2>
                <p>{this.props.email}</p>
            </div>
        </div>
        )
    }
}

 








// // Robot.js (Functional Component without Redux)
// import React from "react";

// function Robot({ id, name, email }) {
//   return (
//     <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
//       <img alt="robots" src={`https://robohash.org/${id}?`} />
//       <div>
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     </div>
//   );
// }

// export default Robot;







// // Robot.js (With RobotModal)

// // Robot.js

// import React, { useState } from "react";
// import RobotModal from "./RobotModal";

// function Robot({ id, name, email }) {
//   const [modalOpen, setModalOpen] = useState(false);

//   const openModal = () => {
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   return (
//     <>
//       <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5" onClick={openModal}>
//         <img alt="robots" src={`https://robohash.org/${id}?`} />
//         <div>
//           <h2>{name}</h2>
//           <p>{email}</p>
//         </div>
//       </div>
//       {modalOpen && <RobotModal id={id} name={name} email={email} onClose={closeModal} />}
//     </>
//   );
// }

// export default Robot;


//4