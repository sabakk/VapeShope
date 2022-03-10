import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { checkAuthRequest } from './redux/auth/authAction'

import Layout from './pages/layout/Layout'
import { Signup } from './pages/auth/Signup'
import { Login } from './pages/auth/Login'
import { CreateProduct } from './pages/product/productForm'

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
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="createproduct" element={<CreateProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
