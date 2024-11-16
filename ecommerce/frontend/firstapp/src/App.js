import logo from './logo.svg';
import './App.css';
import { Navbar } from './Component/Common/Navbar/Navbar.component';
import { Login } from './Component/Auth/Login/Login.component';
import { Register } from './Component/Auth/Register/Register.component';

function App() {
  return (
    <div>
      {/* interpolation */}
      <Navbar isLoggedIn={false}></Navbar>
      {/* <Navbar /> */}

      <Login />
      <Register />
    </div>
  );
}

export default App;
