import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./component/Header/‎Header";
import Baseboard from "./component/Baseboard/Baseboard";
import { AppContainer, ContentWrapper } from "./assets/Styles/AppStyled";
import { useEffect, useState } from "react";

function App() {
  const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsTablet(window.innerWidth <= 1100); 
        };
        checkScreenSize(); 
        window.addEventListener('resize', checkScreenSize); 
        return () => window.removeEventListener('resize', checkScreenSize); 
    }, []);
  return (
    <AppContainer>
      <Header isTablet={isTablet} />
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
