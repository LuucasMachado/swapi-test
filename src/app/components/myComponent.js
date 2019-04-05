import React, { Component } from 'react'
import { get } from 'http';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

	componentDidMount() {
		const apiURL = "https://swapi.co/api/people/1";
    fetch(apiURL,{
			method: "GET",})
      .then(res => res.json())
      .then(
        (result) => {
					console.log(result),
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
					console.log(error),
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
          <p>{items.name}</p>
        </ul>
      );
    }
  }
}
export default MyComponent