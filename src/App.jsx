import React from 'react'
import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './Layouts/RootLayout'
import LandingPage from './pages/landingpage'

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
      children: [
        {
          index: true, element: <LandingPage/>
        },
      ]
    },

    

  ])

  
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
