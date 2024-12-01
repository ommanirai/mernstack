import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Navbar } from './Component/Common/Navbar/Navbar.component';
import { Login } from './Component/Auth/Login/Login.component';
import { Register } from './Component/Auth/Register/Register.component';
import { Signup } from './Component/Auth/Register/Signup.component';
import { Signin } from './Component/Auth/Login/Signin.component';
import { MyRoute } from './MyRoute';
import { Toaster } from 'react-hot-toast';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <React.Fragment>
      {/* interpolation */}

      {/* <Navbar /> */}

      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Signin/>
      <Signup /> */}
      <MyRoute />
      <ToastContainer />
    </React.Fragment>
  );
}

export default App;
