import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import './App.css'
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/RowPost/Rowpost';
import {originals,actions,comedy} from './urls' 
function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <Rowpost url={originals} title='Netflix Originals' />
     <Rowpost url={actions} title='Actions' isSmall/>
     <Rowpost url={comedy} title='Comedy' isSmall/>
   
    </div>
  );
}

export default App;
