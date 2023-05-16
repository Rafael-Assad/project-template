import Footer from "./components/Footer";
import Header from "./components/Header";

import Routes from "./routes";

import { AppContainer, MainContainer } from "./styles/appStyle";
import { GlobalStyle } from "./styles/global";

const App = () => {
  return (
    <AppContainer>
      <GlobalStyle/>

      <Header/>

    <MainContainer>
      <Routes/>
    </MainContainer>

      <Footer/>
    </AppContainer>
  );
}

export default App;