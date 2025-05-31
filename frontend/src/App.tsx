import './App.css';
import TopNavBar from "./components/TopNavBar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import ProductTableScreen from "./screens/ProductTableScreen";
import {AddProductScreen} from "./screens/AddProductScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import HomeScreen from "./screens/HomeScreen";
import ShoppingScreen from "./screens/ShoppingScreen";
import ProductScreen from "./screens/ProductScreen";
import RegisterScreen from "../src/screens/RegisterScreen"
import LoginScreen from "../src/screens/LoginScreen"

export default function App() {
  return (
    <>
      <Router>
          <ToastContainer />

          <TopNavBar />

          <Routes>
              <Route path={"/"} element={<HomeScreen />} />
              <Route path={"/search/:keyword"} element={<HomeScreen />} />
              <Route path={"/products"} index={true} element={<ShoppingScreen />} />
              <Route path={"/products/:id"} element={<ProductScreen />} />
              <Route path={"/register"} index={true} element={<RegisterScreen />} />
              <Route path={"/login"} index={true} element={<LoginScreen />} />

              <Route path={"/admin/producttable"} element={<ProductTableScreen />} />
              <Route path={"/admin/addProduct"} element={<AddProductScreen />} />
              <Route path={"/admin/products/:id/edit"} element={<ProductEditScreen />} />


          </Routes>

      </Router>

    </>
  );
}

