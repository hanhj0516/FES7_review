import React from 'react';
import { useState } from 'react';
import { InputJobTime, SubmitBtn, ClickIcon, ContentsBox } from './Input.styled';


export default function Input() {

  const [job, setJob] = useState('');
  const [time, setTime] = useState('');
  
  const handleJobInput = (e) =>{
    setJob(e.target.value)
  };
  
  const handleTimeInput = (e) =>{
    setTime(e.target.value)
  }

  const handleInputSubmit = (e) => {
    e.preventDefault();
    if(job === ''){
      alert('분야를 입력하지 않았습니다.')
    }
    if(time === ''){
      alert('시간을 입력하지 않았습니다.')
    }
  }
  

  return (
    <ContentsBox>
      나는 
      <InputJobTime placeholder='예)프로그래밍' onChange = {(event)=>handleJobInput(event)}>
      </InputJobTime>전문가가 될 것이다.
      <br/>
      그래서 앞으로 매일 하루에 
      <InputJobTime type='number' placeholder='예)5시간' onChange={(event)=>handleTimeInput(event)}>
      </InputJobTime>시간씩 훈련할 것이다.
      <br/>
      <SubmitBtn onClick={(event)=>handleInputSubmit(event)}>나는 며칠 동안 훈련을 해야 1만 시간이 될까?</SubmitBtn>
      <ClickIcon></ClickIcon>
    </ContentsBox>
  )
}
