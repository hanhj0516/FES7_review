import { createGlobalStyle } from "styled-components"
import Header from "./component/Header";
import Slogan from "./component/Slogan";


const GlobalStyle = createGlobalStyle`
  body{background-color : #5B2386;}
  @font-face {
    font-family: '즐거운이야기체';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/OTEnjoystoriesBA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
`

function App() {
  return (
    <>
      <GlobalStyle/>
      <Header />
      <Slogan />
    </>
  );
}



export default App;
