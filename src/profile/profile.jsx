import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
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
export default Car;
