import Addlibrary from "./components/addlibrary";
import Editlibrary from "./components/editlibrary";
import Header from "./components/header";
import Home from "./components/home";
import { Route, Routes } from "react-router";


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addlibrary" element={<Addlibrary/>} />
        <Route path="/edit/:id" element={<Editlibrary />} />
      </Routes>
    </>
  )
}

export default App;
