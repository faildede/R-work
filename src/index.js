import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/FirstPage/Main";
import { SignUp }  from "./components/Auth/SignUp"
import MainCandidate from './components/СandidatePage/MainCandidate'
import AboutCondidate from "components/СandidatePage/AboutCandidate";
import ErrorComp from 'components/ErrorComp'

const router = createBrowserRouter([
  {
    path: '/',
    element:<Main />,
    errorElement: <ErrorComp /> ,
  },
  {
    path:'/Candidate',
    element:<MainCandidate />,
    errorElement: <ErrorComp /> 
  },
  {
    path:'/Candidate/:id',
    element:<AboutCondidate />,
    errorElement: <ErrorComp /> 
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


