import React from 'react';
import './App.css';
import "antd/dist/antd.css"
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import PostsList from './components/PostsListing';
import PostDetails from './components/PostDetails';

import  {Navbar}  from './components/Navbar';

function App() {
  return (
    <>
    <ToastContainer 
    position="top-center"
    autoclose={3000}
    draggable
    />
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<PostsList/>}/>
      <Route path="/post/delete/:postid" element={<PostsList/>}/> 
      <Route path="/post/:postid" element={<PostDetails/>}/> 
    </Routes>

    </Router>
    </>
  );
}

export default App;
