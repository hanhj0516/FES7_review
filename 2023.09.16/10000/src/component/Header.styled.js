import styled from "styled-components";
import Clock from '../img/clock-icon.png';

export const StyledHeader = styled.header`
  img{
    width : 564px;
    object-fit: contain ; 
    
  }
  display : flex;
  background-image : url(${Clock});
  background-size : 261px;
  background-repeat : no-repeat ; 
  background-position : center ;
  height : 265px;
  justify-content : center ; 
  margin-top : 120px ;
`
