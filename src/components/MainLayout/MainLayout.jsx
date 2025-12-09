import "./MainLayout.scss"
import Card from "../Card/Card"

const weaponsList = [
  {item : "돌격소총"},
  {item : "지정사수소총"},
  {item : "기관단총"},
  {item : "저격소총"},
  {item : "산탄총"},
  {item : "권총"},
  {item : "기타"}
]

function List({data}) {
  return <li className="weapons-list-item"><a href="/">{data}</a></li>
}

// function CardList() {
//   return <li className="weapons-card-list-item"><Card></Card></li>
// }

function Layout(){
  return (
    <section className="main-layout">
      <h2 className="weapons-tit-area">무기</h2>
      <div className="weapons-list-area">
        <ul className="weapons-list">
          {weaponsList.map((weaponItem) => (
            <List data={weaponItem.item} key={weaponItem.item}/>
          ))}
        </ul>
      </div>
      <div className="weapons-card-area">
        <p class="weapon-card-tit-desc">돌격소총(AR)은 준수한 데미지와 연사로 다양한 상황에서 상대를 제압할 수 있는 다재다능한 무기입니다.</p>
        <ul className="weapons-card-list">
          <li className="weapons-card-list-item">
            <Card></Card>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Layout;