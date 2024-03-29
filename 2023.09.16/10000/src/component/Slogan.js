import React from 'react'
import { QuotesIcon, SloganCont, SloganEmp, SloganText, SloganTitle } from './Slogan.styled';

export default function Slogan() {

  return (
    <div>
      <SloganTitle>"연습은 어제의 당신보다 당신을 더 낫게 만든다."</SloganTitle>
      <SloganCont>
        <QuotesIcon></QuotesIcon>
        <SloganText><SloganEmp>1만 시간의 법칙</SloganEmp>은<br/>어떤 분야의 전문가가 되기 위해서는<br/>최소한 1만 시간의 훈련이 필요하다는 법칙이다. </SloganText>
        <QuotesIcon style={{transform:'rotate(180deg)'}} ></QuotesIcon>
      </SloganCont>
      </div>
  )
}
