import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/home';
import Blog from './routes/blog';
import Accomplishments from './routes/accomplishments';
import SlideNavBar from './components/elements/slideNavBar.jsx';
import About from './routes/about';
import connectDB from './components/elements/connectDB';
// require('dotenv').config()

// connectDB(process.env.MONGO_URI)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SlideNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="about" element={<About />} />
        <Route path="accomplishments" element={<Accomplishments />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
