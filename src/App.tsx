import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./component/Header/‎Header";


function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Header />
    </BrowserRouter>
  );
}

export default App;
