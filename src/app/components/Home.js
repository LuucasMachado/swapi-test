import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Home extends React.Component {

  render() {
    return (
        <div>
        <p>Bem vindo ao meu teste</p>
        <span>Esse teste foi criado para que possa desenvolver meus conhecimentos no desenvolvimento front-end</span>
        < br/>
        <Link to="/list">Personagens</Link>
        </div>
    );
  }
}
export default Home