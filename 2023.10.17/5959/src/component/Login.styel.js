import styled from "styled-components";
import KakaoLogo from '../img/kakao_icon.png';
import GoogleLogo from '../img/Google_icon.png';
import FacebookLogo from '../img/facebook_icon.png';
import OguoguLogo from '../img/5959_icon.png';


export const LoginPage = styled.div`
align-items : center ;
background-color : #FF6875;
width : 390px;
height : 820px;
`

export const OguoguSlogan = styled.div`
font-size : 14px;
color : white;
padding-top: 206px;
text-align: center;

  img{
    width: 238px;
  }
  p{
    margin : 0;
  }
`
export const LoginModal = styled.form`
  color: #767676;
  font-size: 12px;
  background-color: white;
  height: 362px;
  margin-top: 188px;
  border-radius: 20px 20px 0 0;
`
export const SnsLogin = styled.ul`
  padding: 50px 34px 0px 34px;
  margin: 0;

  li{
    width: 322px;
  height: 44px;
  border-radius: 44px;
  border-style: solid;
  border-width: 1px;
  margin-bottom: 10px;
  text-align: center;
  justify-content: center;
  display: flex;
  align-items: center;

  font-size: 14px;
  background-repeat: no-repeat;
  background-position: 14px ;
  }
`
export const KakaoLogin = styled.li`
  border-color: #F2C94C;
  background-image: url(${KakaoLogo});
  background-size: 24px;
`

export const GoogleLogin = styled.li`
  border-color: #767676;
  background-image: url(${GoogleLogo});
  background-size: 24px;
`

export const FacebookLogin = styled.li`
  border-color: #2D9CDB;
  background-image: url(${FacebookLogo});
  background-size: 24px;
`

export const EmailLogin = styled.li`
  border-color: #FF6875;
  background-image: url(${OguoguLogo});
  background-size: 30px;
`

export const LoginFooter = styled.footer`
  text-align: center;
  padding-top: 10px;
`

export const FindPassword = styled.a`
  padding-right : 12px;
`

export const Join = styled.button`
  border: 0;
  background: none;
  font-family: inherit;
  font-size: inherit;
  margin: 0;
  padding: 0;
  color: inherit;
  padding-left : 12px;
`