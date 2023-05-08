// import Image from "next/image"
// import img from '/public/food0.png'
export default function List() {
  let 상품 = ['Tomato','Pasta','Coconut']
      return (
        <div>
            <h4 className="title">상품목록</h4>
            
            {상품.map((a,i)=>{
              return(
              <div className="food" key={i}>
                <img src={`/food${i}.png`} className="food-img" alt="food"/> 
                <h4>{a}</h4>
              </div>)
            })}

        </div>
      )
    }
    //외부이미지는 width, heigh 속성 필요함 + 외부 파일은 next.config.js에서 도메인 등록 필요. 