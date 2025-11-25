import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Mainlayout from './components/Layout/Mainlayout';
import HomePages from './pages/HomePages';
import ProductsPages from './pages/ProductsPages';
import BlogPages from './pages/BlogPages';
import FAQPages from './pages/FAQPages';
import ContactPages from './pages/ContactPages';
import ProductDetail from './pages/ProductDetail';
import CategoryPage from './pages/CategoryPage';
import AboutDetail from './pages/AboutDetail';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Mainlayout/>}>
        <Route index element={<HomePages />} />  {/* '/' */}
        <Route path='products' element={<ProductsPages/>}/>
        <Route path='blog' element={<BlogPages/>}/>
        <Route path='faq' element={<FAQPages/>}/>
        <Route path='contact' element={<ContactPages/>}/>
        <Route path='category/:category' element={<CategoryPage />} />
        <Route path='produkt/:id' element={<ProductDetail />} />
        <Route path="/about/:id" element={<AboutDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
