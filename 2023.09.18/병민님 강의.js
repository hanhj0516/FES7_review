import React, { useState } from 'react';

function App() {
  const [value, setValue] = useState('');

  function 함수(event) {
    setValue(event.target.value);
    console.log('유즈스테이트 value입니다', value);
  }

  function 출력함수() {
    console.log('출력함수', value);
  }

  return (
    <div>
      <button onClick={출력함수}>버튼</button>
      <input onChange={(event) => 함수(event)} />
    </div>
  );
}

export default App;