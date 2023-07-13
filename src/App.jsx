import React from 'react';
import ButtonPanel from './components/ButtonPanel';
import Display from './components/Display';

class App extends React.Component {
  render() {
    return (
      <div>
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
