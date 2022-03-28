import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './routes/home'
import Blog from './routes/blog'
import Navigation from './components/elements/Navigation.jsx'
import connectDB from './components/elements/connectDB'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='blog' element={<Blog/>}/>
        <Route path="*" element={
          <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
          </main>
        }
    />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


