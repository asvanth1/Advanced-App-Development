// App.jsx

import Navbar from './Components/Navbar';
import Events from './Components/Events';
import Login from './Components/Login';
import ServicesPage from './Components/ServicesPage';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Check from './Components/Check';
import Adminlog from './Components/Adminlog'
import Adminhome from './Components/Adminhome'
const App=() => {
  return (
     <>

      <BrowserRouter>
      <div>
        <Routes>

          <Route path='/' element={<Check/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/Navbar' element={<Navbar/>}></Route>
          <Route path='/Events' element={<Events/>}></Route>
          <Route path='/ServicesPage' element={<ServicesPage/>}></Route>
          <Route path='/Adminlog' element={<Adminlog/>}></Route>
          <Route path='/Adminhome' element={<Adminhome/>}></Route>
        
        </Routes>
      </div>
      </BrowserRouter>
     </>
      
   
  );
}

export default App;
