import Register from './components/Register';
import Login from './components/Login';
import { Link } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import Missing from './components/Missing';
import Home from './components/Home';
import Layout from './components/Layout';
import axios from './api/axios';
import Unauthorized from './components/Unauthorized';
import Menu from './components/Menu';
import MyArtists from './components/MyArtists';
import Search from './components/Search';
import News from './components/News'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="menu" element={<Menu />} />
        <Route path="search" element={<Search/>}/>
        <Route path="myartists" element={<MyArtists />} />
        <Route path='news' element = {<News/>}/>

        {/* we want to protect these routes */}
          <Route path="/" element={<Login />} />
          
        {/* </Route> */}

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;