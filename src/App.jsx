import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Mainlayout from './components/Layout/Mainlayout'
import HomePages from './pages/HomePages'
import ProductsPages from './pages/ProductsPages'
import BlogPages from './pages/BlogPages'
import FAQPages from './pages/FAQPages'
import ContactPages from './pages/ContactPages'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Mainlayout/>}>
      <Route path='/' element={<HomePages/>}/>
      <Route path='/praducts' element={<ProductsPages/>}/>
      <Route path='/blog' element={<BlogPages/>}/>
      <Route path='/faq' element={<FAQPages/>}/>
      <Route path='/contact' element={<ContactPages/>}/>
      </Route>
    </Routes>
  )
}

export default App