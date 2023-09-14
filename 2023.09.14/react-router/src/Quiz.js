import { BrowserRouter, Routes, Route, Link, useLocation, useParams, Outlet } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Link to ="/">home</Link>
      <Link to ="/products">products</Link>
      <Link to ="/cart">cart</Link>
      <Link to ="/users">users</Link>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/products" element = {<Products />}/>
        <Route path = "/products/:id" element = {<ProductsDetail />}/>
        <Route path = "/products/:id/notice" element = {<ProductsDetailNotice />}/>
        <Route path = "/cart" element = {<Cart />}/>
        <Route path = "/users/*" element = {<Outlet />}>
          <Route path = "" element = {<UserIndex/>}/>
          <Route path = "coupon/" element = {<Coupon/>}/>
          <Route path = "question/" element = {<Question/>}/>
          <Route path = "notice/" element = {<Notice/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home(){
  return <h1>홈</h1>
}

function Products(){
  return <h1> 상품 </h1>
}
function ProductsDetail(){
  const {id} = useParams()
  return <h1> {id}번 상품입니다.</h1>
}

function ProductsDetailNotice(){
  const {id} = useParams()
  return <h1>{id}번 상품 상세 페이지입니다.</h1>
}
function Cart(){
  return <h1>장바구니</h1>
}

function UserIndex(){
  return <h1>유저</h1>
}

function Coupon(){
  return <h1>쿠폰</h1>
}

function Question(){
  return <h1>문의</h1>
}

function Notice(){
  return <h1>공지</h1>
}

export default App;