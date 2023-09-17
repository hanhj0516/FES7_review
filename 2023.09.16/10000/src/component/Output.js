import React from 'react'
import { ContentsBox, SubmitBtn } from './Input.styled'
import { ShareBtn } from './Output.styled'

export default function Output() {
  return (
    <ContentsBox>
      당신은
      전문가가 되기 위해서
      <br/>
      대략
      일 이상 훈련하셔야 합니다: :)
      <br/>
      <SubmitBtn>훈련하러 가기 GO! GO!</SubmitBtn>
      <ShareBtn>공유하기</ShareBtn>
    </ContentsBox>
  )
}
