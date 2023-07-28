
import './App.css';
import './pages/Home.js';
import Home from './pages/Home.js';
import Rooms from './pages/Rooms.mjs';
import SingleRoom from './pages/SingleRoom.js';
import Error from './pages/Error.mjs';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar.js';
import { useParams } from 'react-router-dom';
import { withRoomConsumer } from './context';
function App() {
  var x = withRoomConsumer;
  return (
    <>
      <Navbar />
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/rooms/' Component={Rooms} />
          <Route exact path="/rooms/:slug" element = {<SingleRoom props={x}/>} />
          <Route exact path='*' Component={Error} />
        </Routes>
    </>
  );
}

export default App;
