import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './components/pages/HomePage.tsx'
import CinemaPage from './components/pages/CinemaPage.tsx'
import MovieListPage from './components/pages/MovieListPage.tsx'

const router = createBrowserRouter ([
  {
    path : "/",
    element : <App/>,
    children : [
      {
        path : "",
        element : <HomePage />,
      },
      {
        path : "cinemas",
        element : <CinemaPage/>,
      }, 
      {
        path : "movie-list",
        element : <MovieListPage/>
      },
    ],
  }
  
]);

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
