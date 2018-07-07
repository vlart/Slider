import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <SayFullName name="Артем" lastName="Кавтя" link="http://github.com" />
        <SayFullName name="Ира" lastName="Петрова" link="http://gitlab.com" />
        <SayFullName name="Женя" lastName="Бочкин" link="http://fb.com" />
      </div>
    );
  }
}


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

function SayFullName(props) {
    return(
        <div>
            <h3>Меня зовут {props.name} {props.lastName} </h3>
            <a href={ props.link}>мой проф </a>
        </div>
    )
}




