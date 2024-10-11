import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./component/Header/‎Header";
import Baseboard from "./component/Baseboard/Baseboard";


function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Baseboard />
    </BrowserRouter>
  );
}

export default App;
