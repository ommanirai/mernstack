import logo from './logo.svg';
import './App.css';
import { Navbar } from './Component/Common/Navbar/Navbar.component';

function App() {
  return (
    <div>
      {/* interpolation */}
      <Navbar isLoggedIn={false}></Navbar>
      {/* <Navbar /> */}
    </div>
  );
}

export default App;
