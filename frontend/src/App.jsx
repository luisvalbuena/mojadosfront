import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout/Layout'

export default function App() {
  return (
    <>
      <Layout>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
      </Layout>
    </>
  )
}
