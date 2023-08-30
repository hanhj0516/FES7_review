let hello = 'first hello';
// hello = 'second hello';
// let hello = 'second hello'; // 중복 선언 불가능

if (true) {
  let hello = 'second hello';
  console.log(hello);
}

console.log(hello);