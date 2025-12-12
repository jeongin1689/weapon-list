import "./Popup.scss"
import { importAllImages } from "../../utils/importImages";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/swiper.css';

const images = importAllImages(
  import.meta.glob("/src/assets/image/**/*.{png,jpg,jpeg,svg}", {eager: true,})
);

function Modal({onClose, weaponData, category}) {
  const partsSwiperRef = useRef(null);

  const weaponImageName = weaponData.itemImage.replace("/image/", "weapon/");

  const partsCategories = [
    { key: 'muzzle', label: '총구' },
    { key: 'grip', label: '손잡이' },
    { key: 'scope', label: '조준기' },
    { key: 'magazine', label: '탄창' },
    { key: 'stock', label: '개머리판' }
  ];

  
  const availableCategories = weaponData ? partsCategories.filter(
    cat => weaponData.gunParts[cat.key] && weaponData.gunParts[cat.key].length > 0
  ) : [];

  // 활성화된 부착물 카테고리 상태 (기본값: 첫 번째 사용 가능한 카테고리)
  const [activePartsCategory, setActivePartsCategory] = useState(
    availableCategories[0].key || 'muzzle'
  );

  if (!weaponData) {
    return null;
  }
  
  // 탄환 정보 가져오기
  const bulletData = weaponData.gunParts?.bullet?.[0];
  const bulletImageName = bulletData?.image ? bulletData.image.replace("/image/", "weapon/") : "";

  // 현재 선택된 카테고리의 부착물 데이터
  const currentParts = weaponData.gunParts?.[activePartsCategory] || [];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <button className="modal-close" onClick={onClose}>
        <img src={images["icon_close.png"]} alt="팝업 닫기" />
      </button>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <span className="modal-header-category-name"><em>{category}</em></span>
          <h3 className="modal-header-tit">{weaponData.itemName}</h3>
          {bulletData && (
            <div className="modal-header-bullet">
              <img src={images[bulletImageName]} alt={bulletData.name} />
              <span className="modal-header-bullet-name">{bulletData.name}</span>
            </div>
          )}
        </div>
        <div className="modal-body">
          <div className="modal-body-gun-box">
            <div className="modal-body-gun-box-image">
              <img src={images[weaponImageName]} alt={weaponData.itemName} />
            </div>
          </div>
          <div className="modal-body-gun-parts">
            <div className="modal-body-gun-parts-box">
              <h3 className="modal-body-gun-parts-tit">부착물</h3>
              <ul className="modal-body-gun-parts-list">
                {availableCategories.map((cat) => (
                  <li 
                    key={cat.key}
                    className={`modal-body-gun-parts-item ${activePartsCategory === cat.key ? 'is-active' : ''}`}
                    onClick={() => setActivePartsCategory(cat.key)}
                  >
                    {cat.label}
                  </li>
                ))}
              </ul>
            </div>
            <Swiper
              key={activePartsCategory}
              modules={[Navigation]}
              onSwiper={(swiper) => (partsSwiperRef.current = swiper)}
              slidesPerView={3}
              navigation
              className="modal-weapon-parts-area"
            >
              {/* 선택된 카테고리의 부착물 표시 */}
              {currentParts.map((part, index) => {
                const partImageName = part.image.replace("/image/", "weapon/");
                return (
                  <SwiperSlide key={`${activePartsCategory}-${index}`}>
                    <div className="modal-weapon-parts-item">
                      <div className="modal-weapon-parts-item-image">
                        <img src={images[partImageName]} alt={part.name} />
                      </div>
                      <div className="modal-weapon-parts-item-box">
                        <h4 className="modal-weapon-parts-item-name">{part.name}</h4>
                        <span className="modal-weapon-parts-item-desc">{part.desc}</span>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;