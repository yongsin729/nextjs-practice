
export default function Home() {
  
let title="title" 
let link="www.naver.com"
  return (
    <div>
     <h2 className="title">{title}</h2>
     <p className="title-sub">by LEE</p> 
     <a href={link}>Link</a>
    </div>
  )
}
