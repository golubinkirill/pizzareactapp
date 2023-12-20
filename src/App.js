import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Uheader from './components/Uheader';
import Mainpage from './pages/Mainpage';
import Cart from './pages/Cart'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  let flexsus = '';

  async function getData(){
    const FlexData = await axios.get('https://jsonplaceholder.typicode.com/posts');
    flexsus = FlexData.data;
  }

  const Notice=()=>{
    console.log('cock');
  }

  return (
    <div>
      <BrowserRouter>
        <Uheader/>
        <Routes>
          <Route path='/' element={<Mainpage/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
