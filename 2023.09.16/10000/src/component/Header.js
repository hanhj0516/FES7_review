import React from 'react'
import Logo from '../img/1만시간.png'
import { StyledHeader } from './Header.styled';

export default function Header() {

  return (
    <div>
      <StyledHeader><img src={Logo} alt='logo'/></StyledHeader>
    </div>
  )
}
