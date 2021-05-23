import ReactDOM from 'react-dom';
import React from 'react';

class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.fullName}!</h2>;
    <h3>I Like {this.props.bio} </h3>
    
  }
}

class fullName extends React.Component {
  render() {
    return (
      <div>
      <h1></h1>
      <Car fullName="Koussay"  bio="anime"  profession="a student"/>
 
      
      </div>
    );
  }
}


ReactDOM.render(<fullName />, document.getElementById('root'));
ReactDOM.render(<bio />, document.getElementById('root'));
ReactDOM.render(<profession />, document.getElementById('root'));

export default fullName;
