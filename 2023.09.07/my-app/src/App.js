import './App.css';

function App() {
  const name = '라이켓';
  function 함수() {
    return '함수';
  }
  const someStyle = { backgroundColor: "yellow", color: "white" };

  let today = new Date();

  let year = today.getFullYear();

  return (
    <div>
      <h1 className="h1">안녕 {함수() ? '함수' : 'JSX'}!</h1>
      <h1 className='newClass'>안녕 라이켓! 1호</h1>
      <h1>안녕 라이켓! 2호</h1>
      {/* <input type="text" style={{ backgroundColor: "red" }} /> */}
      <p>년 : {year}</p>
    </div>
  );
}

export default App;