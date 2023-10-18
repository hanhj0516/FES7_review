import React from 'react'
import Logo from '../img/5959_logo.png'
import { EmailLogin, FacebookLogin, FindPassword, GoogleLogin, Join, KakaoLogin, LoginFooter, LoginModal, LoginPage, OguoguSlogan, SnsLogin } from './Login.styel'

export default function Login() {
  return (
    
    <div style={{backgroundColor:'gray'}}>
      <LoginPage>
      <OguoguSlogan>
        <img src={Logo} alt="" />
        <p>내 새꾸 자랑, 네 새꾸 자랑</p>
      </OguoguSlogan>
      <LoginModal>
        <SnsLogin>
          <KakaoLogin>카카오 계정으로 로그인</KakaoLogin>
          <GoogleLogin>구글 계정으로 로그인</GoogleLogin>
          <FacebookLogin>페이스북 계정으로 로그인</FacebookLogin>
          <EmailLogin>이메일로 로그인</EmailLogin>
        </SnsLogin>
        <LoginFooter>
          <FindPassword>비밀번호 찾기</FindPassword>|
          <Join>회원가입</Join>
        </LoginFooter>
      </LoginModal>
      </LoginPage>
    </div>
  )
}
