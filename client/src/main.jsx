import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { UserProvider } from './UserContext';
import client from './apollo'; // Import your Apollo Client instance
import './index.css';

import App from './App.jsx';
import Login from './pages/Login.jsx';
import AnimeDetails from './components/AnimeDetails';
import Home from './pages/Home';
import Popular from './pages/Popular';



const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    ),
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/popular',
        element: <Popular />,
      },
      {
        path: "anime/:animeId",
        element: <AnimeDetails />,
      },
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
