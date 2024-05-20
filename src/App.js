import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./containers/Header";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import NotFound from './pages/NotFound';
import Product from './pages/Product';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/menu" element={<Menu/>}></Route>
        <Route path="/notfound" element={<NotFound/>}></Route>
        <Route path="/product/:brandName" element={<Product/>}></Route>
        <Route path="/*" element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;