import styled from "styled-components";
import Clock from '../img/clock-icon.png';

export const StyledHeader = styled.header`
  img{
    width : 564px;
    object-fit: contain ; 
    margin-left : auto ;
    margin-right : auto ;
  }
  display : flex;
  background-image : url(${Clock});
  background-size : 261px;
  background-repeat : no-repeat ; 
  background-position : center ;
  height : 265px;
  margin-top : 120px ;
`
