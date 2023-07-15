import React from 'react';
import ButtonPanel from './components/ButtonPanel';
import Display from './components/Display';

class App extends React.Component {
  handleClick = (buttonName) => {
    console.log(`click, ${buttonName}`);
  }

  render() {
    return (
      <div>
        <Display />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
