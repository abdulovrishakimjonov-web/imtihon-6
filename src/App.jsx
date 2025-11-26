import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Mainlayout from './components/Layout/Mainlayout';
import HomePages from './pages/HomePages';
import BlogPages from './pages/BlogPages';
import FAQPages from './pages/FAQPages';
import ContactPages from './pages/ContactPages';
import AboutDetail from './pages/AboutDetail';
import Best from './components/Best';
import Products from './components/Products';
import ProductDetail from './pages/catigoriya/ProductDetail';
import CategoryPage from './pages/catigoriya/CategoryPage';
import Technology from './pages/Technology';
import ProductPage from './pages/ProductsPagese';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Mainlayout/>}>
        <Route index element={<HomePages />} /> 
        <Route path='/praducts' element={<ProductPage/>}/>
        <Route path='blog' element={<BlogPages/>}/>
        <Route path='faq' element={<FAQPages/>}/>
        <Route path='contact' element={<ContactPages/>}/>
        <Route path='category/:category' element={<CategoryPage />} />
        <Route path="/technology/:category" element={<CategoryPage />} />
        <Route path='/produkts/:id' element={<ProductDetail />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/about/:id" element={<AboutDetail />} />
        <Route path="/products" element={<Products />} />
        <Route path="/best" element={<Best />} />
        <Route path="/technology/:category/:id" element={<ProductDetail />} />
        <Route path="/best/:id" element={<ProductDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
