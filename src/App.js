import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './component/layout/index';
import Home from './pages/homePage/index'
import AboutUs from './pages/aboutUsPage/index';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Layout>
  );
}

export default App;
