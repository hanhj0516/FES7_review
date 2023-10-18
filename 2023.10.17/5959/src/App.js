import Login from "./component/Login";
import { createGlobalStyle } from "styled-components";

function App() {
  return (
    <div >
      <GlobalStyle/>
      <Login></Login>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Pretendard-Regular';
  src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
    format('woff');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'Pretendard-Bold';
  src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff')
    format('woff');
  font-weight: 700;
  font-style: normal;
}

body{
  font-family : 'Pretendard-Regular';
}

`
export default App;
