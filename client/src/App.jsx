import { useState } from 'react'
import reactLogo from './assets/react.svg'

import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Freebook from './components/Freebook'
import Home from './Pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Courses from './Pages/Courses'
import Contacts from './Pages/Contacts'
import About from './Pages/About'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import toast, { Toaster } from 'react-hot-toast';
import Protected from './protected/Protected'
import Header from './Pages/Header'
import Logout from './Pages/Logout'
import SingleBook from './Pages/SingleBook'
import Cart from './Pages/Cart'
import SearchResults from './Pages/SearchResults'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/courses',
      element: (
        <Protected>
          <Courses />
        </Protected>
      )
    },
    {
      path: '/Contacts',
      element: <Contacts />

    },
    {
      path: '/About',
      element: <About />

    },
    {
      path: '/SignUp',
      element: <SignUp />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/logout',
      element: <Logout />
    },
    {
      path: '/book/:id',
      element: <SingleBook />
    },
    {
      path: '/cart',
      element: <Cart />
    },
    {
      path: '/search',
      element: <SearchResults />
    }

  ])


  return (
    <>

      <RouterProvider router={router} />
      <Toaster />

    </>
  )
}

export default App
