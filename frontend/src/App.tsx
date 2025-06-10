import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeMainScreen from "./screens/HomeMainScreen";
import TopNavigation from "./components/TopNavigation";
import ProjectScreen from "./screens/ProjectScreen";
import ProjectDetailScreen from "./screens/ProjectDetailScreen";
import ProjectTableScreen from "./screens/ProjectTableScreen";
import ContactTableScreen from "./screens/ContactTableScreen";
import UserTableScreen from "./screens/UserTableScreen";
// import AddProjectPage from "./screens/AddProjectPage";
import AddProjectScreen from "./screens/AddProjectScreen";
import AddContactPage from "./screens/AddContactPage";

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
              <Route path={"/projects/:id"} element={<ProjectDetailScreen />} />

              <Route path={"/admin/projecttable"} element={<ProjectTableScreen />} />
              <Route path={"/admin/contacttable"} element={<ContactTableScreen />} />
              <Route path={"/admin/usertable"} element={<UserTableScreen />} />
              <Route path={"/admin/addProject"} element={<AddProjectScreen/>} />
              <Route path={"/admin/addContact"} element={<AddContactPage />} />



          </Routes>

      </Router>

    </>
  );
}

