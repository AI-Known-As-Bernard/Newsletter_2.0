import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/home';
import Blog from './routes/blog';
import About from './routes/about';
import Accomplishments from './routes/accomplishments';
import SlideNavBar from './components/elements/slideNavBar.jsx';
import connectDB from './components/elements/connectDB';
// import App from './app'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    {/* <App/> */}
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
  </React.StrictMode>
);


