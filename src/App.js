import React from 'react';
import Car from './components/Car'
import { ReactComponent as Logo} from './components/assets/react.svg'

function App() {
  
  return (
    <div className="App">
      <h1>My App</h1>    
      <Logo style={{ width:80,height:80 }}/>
      <Car />     
    </div>
  );
}

export default App;
