// pending 대기상태
// pulfilled 이행상태
// rejected 실패상태

function sayHello(){
  return new Promise((resolve, reject) => {
    // const hello = 'hello hello';
    resolve('hello!!');
    // reject(new Error());
  })
}

// sayHello() .then((resolveData) =>{
//   console.log(resolveData);
// }).catch((error) =>{
//   console.log(error);
// });

async function test(){
  const hello1 = await sayHello();
  console.log(hello1);
}

test();