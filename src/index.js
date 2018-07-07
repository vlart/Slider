import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// export default class Hello extends Component {
//   render() {
//     let phrase = "world"
//     return (
//       <div>
//         <h1>Hello, {phrase}</h1>
//       </div>
//     )
//   }
// }

// function SayFullName(props) {
//     return(
//         <div>
//             <h3>Меня зовут {props.name} {props.lastName} </h3>
//             <a href={ props.link}>мой проф </a>
//         </div>
//     )
// }


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
