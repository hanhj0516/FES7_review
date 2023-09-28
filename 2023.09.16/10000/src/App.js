import React from 'react';
import { createGlobalStyle } from "styled-components"
import Header from "./component/Header";
import Slogan from "./component/Slogan";
import Input from "./component/Input";
import Output from './component/Output';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Header />
      <Slogan />
      <Input />
      <Output/>
      <Footer/>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: '즐거운이야기체';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/OTEnjoystoriesBA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
  @font-face {
      font-family: 'GmarketSans';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
  font-family: 'GmarketSansBold';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'GmarketSansMedium';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}


  body{
    background-color : #5B2386;
    font-family : 'GmarketSans' ;
    margin-left : auto ;
    margin-right : auto ;
    display : flex ;
    justify-content : center ;
    text-align : center ; 
  }

`




export default App;
