import React, { Component } from 'react';
import { get } from 'http';

class Planets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

	componentDidMount() {
    const request = this.props.location.pathname.replace("/", "");
    fetch("https://swapi.co/api/"+ request)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.results
          });
        },  
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          { console.log(this.props.location.pathname),
            items.map(item => (
            <li key={item.name}>
              {item.name}
            </li>
          ))}
        </ul>
      );
    }
  }
}
export default Planets