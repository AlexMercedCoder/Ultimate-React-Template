import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BodyContainer } from "./styled-components/containers";

function App() {
  return (
    <BodyContainer>
      <Header />
      <Main />
      <Footer />
    </BodyContainer>
  );
}

export default App;
