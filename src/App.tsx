import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./component/Header/‎Header";
import Baseboard from "./component/Baseboard/Baseboard";
import { AppContainer, ContentWrapper } from "./assets/Styles/AppStyled";


function App() {
  return (
    <AppContainer>
      <Header />
      <ContentWrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </ContentWrapper>
      <Baseboard />
    </AppContainer>
  );
}

export default App;
