import Home from './Home'
import './App.css'
import {  Route, Routes } from 'react-router-dom';
import Details from './Details'
import Create from './Create'


function App() {
  

  return (
    <>
   
     <div>
    
     <Routes>
      <Route path='/create' element={<Create/>}></Route>
       <Route path='/UniBuy' element={<Home/>}></Route>
         <Route path='/details/:id' element={<Details/>}></Route>
     </Routes>
     
    </div> 
    
    </>
  )
}

export default App
