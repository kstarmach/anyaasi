import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './apollo'; // Import your Apollo Client instance
import App from './App.jsx';
import './index.css';

import LoginForm from './components/LoginForm.jsx';
import NewComponent from './components/NewComponent.jsx';
import AnimeInfo from './components/AnimeInfo.jsx';
import { UserProvider } from './UserContext';
import AnimeDetails from './components/AnimeDetails';



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
        element: <LoginForm />,
      },
      {
        path: '/',
        element: <NewComponent />,
      },
      {
        path: '/aninfo',
        element: <AnimeInfo />,
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
