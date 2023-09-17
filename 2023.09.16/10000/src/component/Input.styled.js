import styled from "styled-components";
import Clickiconimg from '../img/click-icon.png'


export const ContentsBox = styled.form`
font-size : 24px;
color : white;
padding : 70px;
align-items : center ;
`

export const InputJobTime = styled.input`
width: 228px;
height: 57px;
border-radius : 7px;
margin : 17px;

color: #BABCBE;
text-align: center;
font-family: inherit;
font-size: 24px;
`

export const SubmitBtn = styled.button`
cursor: pointer;
display: inline-block;
padding: 21px 49px;
gap: 10px;
margin : auto ;
margin-top : 100px;

border-radius: 56px;
background: #FCEE21;
box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.50);

color: #5B2386;
font-family: inherit;
font-size: 24px;
font-weight: bolder;

`
export const ClickIcon = styled.button`
cursor: pointer;
border : 0;
width : 72px ;
height : 72px;
background-image : url(${Clickiconimg});
background-size: cover ;
background-repeat : no-repeat ; 
background-color : transparent;
transform : translateY(40px); 
`