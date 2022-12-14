import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import useStyles from './styles';
import PostDetails from './components/PostDetails/PostDetails';
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';

const App = () => {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <BrowserRouter className={classes.appBar}>
      <Container maxWidth="xl">
        <Navbar />
        <Routes>
        <Route path="/" exact element={<Navigate to="/posts" />}/>
          <Route path="/posts" exact element={<Home />}/>
          <Route path="/posts/search" exact element={<Home />}/>
          <Route path="/posts/:id" exact element={<PostDetails />}/>
          <Route path='/creators/:name' exact element={<CreatorOrTag />} />
          <Route path='/tags/:name' element={<CreatorOrTag />} />
          <Route path="/auth" exact element={!user ? <Auth /> : <Navigate to="/posts"/>} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App;



