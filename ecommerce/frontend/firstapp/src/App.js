import logo from './logo.svg';
import './App.css';
import { Navbar } from './Component/Common/Navbar/Navbar.component';
import { Login } from './Component/Auth/Login/Login.component';
import { Register } from './Component/Auth/Register/Register.component';
import { Signup } from './Component/Auth/Register/Signup.component';
import { Signin } from './Component/Auth/Login/Signin.component';

function App() {
  return (
    <div>
      {/* interpolation */}
      <Navbar isLoggedIn={false}></Navbar>
      {/* <Navbar /> */}

      {/* <Login /> */}
      {/* <Register /> */}
      <Signin/>
      <Signup />
    </div>
  );
}

export default App;
