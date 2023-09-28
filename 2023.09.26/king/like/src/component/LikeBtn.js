import React, { useState } from 'react'

export default function LikeBtn() {
const [like, setlike] = useState('');
const clickLike = () => {
  if(like===''){
    setlike('❤')
  }
  else {
    setlike('')
  }
}

  return (
    <button type='button' onClick={clickLike}>좋아요{like}</button>
  )
}


// const clickLike = function() {

