import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { checkAuthRequest } from './redux/auth/authAction'

import Layout from './pages/layout/Layout'
import { Signup } from './pages/auth/Signup'
import { Login } from './pages/auth/Login'
import { CreateProduct } from './pages/product/productForm'
import Products from './pages/product/Products'

export default function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuthRequest())
    }
  }, [dispatch])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Registration" element={<Signup />} />
          <Route path="Login" element={<Login />} />
          <Route path="Createproduct" element={<CreateProduct />} />
          <Route path="Products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
