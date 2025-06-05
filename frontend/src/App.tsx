import './App.css';
import TopNavBar from "./components/TopNavBar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import StaticNavHeader from "./components/StaticNavHeader";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeMainScreen from "./screens/HomeMainScreen";


export default function App() {
  return (
    <>
      <Router>
          <ToastContainer />

          <StaticNavHeader />

          <Routes>
              <Route path={"/"} index={true} element={<HomeMainScreen />} />
              <Route path={"/login"} index={true} element={<LoginScreen />} />
              <Route path={"/register"} index={true} element={<RegisterScreen />} />


          </Routes>

      </Router>

    </>
  );
}

