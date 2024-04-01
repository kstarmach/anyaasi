import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { UserProvider } from './UserContext';
import client from './apollo'; // Import your Apollo Client instance
import './index.css';

import App from './App.jsx';
import AnimeDetails from './components/AnimeDetails';

import Login from './pages/Login.jsx';
import Home from './pages/Home';
import Popular from './pages/Popular';
import NotFoundPage from './pages/NotFoundPage.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    ),
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/login',
        element: <Login />,
        errorElement: <NotFoundPage />,
      },
      {
        path: '/',
        element: <Home />,
        errorElement: <NotFoundPage />,
      },
      {
        path: '/popular',
        element: <Popular />,
        errorElement: <NotFoundPage />,
      },
      {
        path: "/anime/:animeId",
        element: <AnimeDetails />,
        errorElement: <NotFoundPage />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
