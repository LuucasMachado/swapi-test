import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Home extends React.Component {

  render() {
    return (
        <div>
        <h3>Bem vindo ao meu teste</h3>
        <span>Esse teste foi criado para que possa desenvolver meus conhecimentos no desenvolvimento front-end</span>
        < br/>
        <Link to="/people">Personagens</Link>
        </div>
    );
  }
}
export default Home