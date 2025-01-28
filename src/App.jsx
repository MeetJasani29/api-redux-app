import Header from "./components/header";
import Home from "./components/home";
import { Route, Routes } from "react-router";
import AddProduct from "./components/addProduct";
import EditProduct from "./components/editproduct";


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/edit/:id" element={<EditProduct />} />
      </Routes>
    </>
  )
}

export default App;
