import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeMainScreen from "./screens/HomeMainScreen";
import TopNavigation from "./components/TopNavigation";
import ProjectScreen from "./screens/ProjectScreen";

export default function App() {
  return (
    <>
      <Router>
          <ToastContainer />

          <TopNavigation/>

          <Routes>
              <Route path={"/"} index={true} element={<HomeMainScreen />} />
              <Route path={"/login"} index={true} element={<LoginScreen />} />
              <Route path={"/register"} index={true} element={<RegisterScreen />} />
              <Route path={"/projects"} element={<ProjectScreen />} />

          </Routes>

      </Router>

    </>
  );
}

