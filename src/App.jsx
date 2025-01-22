import Home from './Home'
import './App.css'
import {Routes,Route, HashRouter} from 'react-router-dom'
import Details from './Details'
import Create from './Create'


function App() {
  

  return (
    <>
     <div>
    <HashRouter>
     <Routes>
      <Route path='/create' element={<Create/>}></Route>
       <Route path='/' element={<Home/>}></Route>
         <Route path='/details/:id' element={<Details/>}></Route>
     </Routes>
     </HashRouter>
    </div> 
    </>
  )
}

export default App
