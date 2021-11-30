import HomePage from "./Pages/Home/home";
import '../src/App.css'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LoginPage from "./Pages/Login";
import SignupPage from "./Pages/Signup";
import Cart from "./Pages/Cart";
function App() {
  return (
    <div className="Main">
      <BrowserRouter>
        <Routes>
          <Route exact element={<HomePage/>} path="/"/>
          <Route exact path="/login" element={<LoginPage />}/>
          <Route exact path="/signup" element={<SignupPage />}/>
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
