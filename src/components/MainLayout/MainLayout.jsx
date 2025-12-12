import "./MainLayout.scss"
import Card from "../Card/Card"
import Popup from "../Popup/Popup"
import { useState, useEffect } from "react"

function Layout(){
  
  const weaponsList = [
    {item : "돌격소총"},
    {item : "지정사수소총"},
    {item : "기관단총"},
    {item : "저격소총"},
    {item : "산탄총"},
    {item : "권총"},
    {item : "기타"}
  ]

  // JSON 키 매핑
  const weaponTypeMap = {
    "돌격소총": "AR",
    "지정사수소총": "DMR",
    "기관단총": "SMG",
    "저격소총": "SR",
    "산탄총": "SG",
    "권총": "Pistol",
    "기타": "Other"
  };

  const weaponDescriptions = {
    "돌격소총": "돌격소총(AR)은 준수한 데미지와 연사로 다양한 상황에서 상대를 제압할 수 있는 다재다능한 무기입니다.",
    "지정사수소총": "지정사수소총(DMR)은 지정사수를 위한 무기입니다. 중거리 이상의 목표물을 상대하기에 적합합니다.",
    "기관단총": "기관단총(SMG)은 기동성과 빠른 연사에 특화되어 있습니다. 근거리의 적을 상대하는데 이상적입니다.",
    "저격소총": "저격소총(SR)은 높은 정확도와 데미지를 자랑합니다. 장거리의 적을 상대하는데 특화되어 있습니다.",
    "산탄총": "산탄총(SG)은 탄환이 흩어지며 전방을 타격하는 무기입니다. 근거리에서 발생하는 갑작스러운 위험상황에 효과적입니다.",
    "권총": "권총은 작지만 가장 기본적인 보조무기입니다.",
    "기타": "PUBG:배틀그라운드에는 일반 총기류 외에도 특별한 무기들이 존재합니다. 상황에 맞춰 다양하게 사용하여 적을 제압해보세요."
  };

  // 기본 값 -> 돌격소총
  const [activeWeapon, setActiveWeapon] = useState("돌격소총");

  // 모달 상태 관리
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWeapon, setSelectedWeapon] = useState(null);

  // 카드 클릭 핸들러
  const handleCardClick = (weapon) => {
    setSelectedWeapon(weapon);
    setIsModalOpen(true);
  };

  // 모달 닫기 핸들러
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedWeapon(null);
  };

  function List({data, isActive, onClick}) {
    return (
      <li 
        className={`weapons-list-item ${isActive ? 'is-active' : ''}`}
        onClick={onClick}
      >
        <a href="/" onClick={(e) => e.preventDefault()}>{data}</a>
      </li>
    );
  }

  const [weaponsData, setWeaponsData] = useState({});

  useEffect(() => {
    fetch('/weapon.json')
      .then(response => response.json())
      .then(data => {
        setWeaponsData(data.weapons);

        console.log(data.weapons);
      })
      .catch(error => {
        console.error('weapon.json 로드 실패:', error);
      });
  }, []);

  const currentWeaponType = weaponTypeMap[activeWeapon];
  const currentWeapons = weaponsData[currentWeaponType] || [];

  return (
    <section className="main-layout">
      <h2 className="weapons-tit-area">무기</h2>
      <div className="weapons-list-area">
        <ul className="weapons-list">
          {weaponsList.map((weaponItem) => (
            <List 
              data={weaponItem.item} 
              key={weaponItem.item}
              isActive={activeWeapon === weaponItem.item}
              onClick={() => setActiveWeapon(weaponItem.item)}
            />
          ))}
        </ul>
      </div>
      <div className="weapons-card-area">
        <p className="weapons-card-tit-desc">{weaponDescriptions[activeWeapon]}</p>
        <ul className="weapons-card-list">
            {currentWeapons.map((weapon) => (
              <li className="weapons-card-list-item" key={weapon.itemName}>
                <Card 
                  weaponData={weapon} 
                  category={activeWeapon} 
                  onClick={() => handleCardClick(weapon)}
                />
              </li>
            ))}
        </ul>
      </div>

      {/* 모달이 열려있을 때만 Popup 렌더링 */}
      {isModalOpen && selectedWeapon && (
        <Popup 
          weaponData={selectedWeapon}
          category={activeWeapon}
          onClose={handleCloseModal}
        />
      )}
    </section>
  )
}

export default Layout;