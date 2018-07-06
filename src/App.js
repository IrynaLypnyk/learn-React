import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
        <div className="wrapper">
            <SayFullName name="Ирина" surname="Лыпник" link="#"/>
            <SayFullName name="Сергей" surname="Лыпник" link="#"/>
            <SayFullName name="Тихон" surname="Лыпник" link="#"/>
        </div>
    );
  }
}

function SayFullName(props){
    return(
        <div>
            <h3>Мое имя - {props.name}, моя фамилия - {props.surname} </h3>
            <a href={props.link}>Ссылка на мой профиль</a>
        </div>
    )
}



export default App;
