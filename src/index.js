import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css';
import App from './Pages/App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MovieRS from './Pages/MovieRS';
import Post from './Post/Post';
import { MovieProvider } from './Components/MovieContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/MovieRS",
    element: <MovieRS />,
  },
  {
    path: "/Post",
    element: <Post />
  },
  {
    path: "/home",
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <div className='font'>
      <MovieProvider>
        <RouterProvider router={router} />
      </MovieProvider>
      </div>
    </React.StrictMode>
    );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
