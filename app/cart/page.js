'use client'

import 작명 from './data1.js'

export default function Cart() {
  return (
    <div>
      <h4 className="title">Cart</h4>
      <작명></작명>
      <CartItem/>  
      <CartItem/>
       </div>
  )
} 

function CartItem(){// 아무데나 대충 만든건 server component
  return(
    <div className="cart-item">
        <p>상품명</p>
        <p>$40</p>
        <p>1개</p>
      </div>
  )
}

//'use client' 를 위에 쓰면 client component
// server에서는 html에 자바스크립트 사용불가. 단 로딩속도가 매우 빠름. 검색엔진 노출 유리
//client에서는 로딩속도느림, hydration(html을 리액트로 분석하는) 필요. 
//큰 페이지는 server js가 필요한 곳에만 client component 