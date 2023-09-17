import styled from "styled-components"
import Quotes from '../img/“.png'

export const SloganTitle = styled.h1`
  font-family : '즐거운이야기체';
  color : #F5DF4D ;
  font-size : 36px ;
  padding : 45px;
`

export const SloganCont = styled.section`
  color : white ;
  font-size : 18px ;
  line-height : 200%;
  display : flex ;
  justify-content : center ;
`

export const SloganText = styled.p`
`

export const SloganEmp = styled.span`
  font-size : 24px;
  font-weight : bold;
  `

export const QuotesIcon = styled.div`
  background-image : url(${Quotes});
  width : 46px;
  height : 46px;
  background-size: contain ;
  background-repeat : no-repeat ; 
  background-position : center ;
`