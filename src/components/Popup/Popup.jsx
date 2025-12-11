import "./Popup.scss"
import { importAllImages } from "../../utils/importImages";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/swiper.css';

const images = importAllImages(
  import.meta.glob("/src/assets/image/**/*.{png,jpg,jpeg,svg}", {eager: true,})
);

function Modal({onClose}) {
  const partsSwiperRef = useRef(null);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <button className="modal-close" onClick={onClose}>
        <img src={images["icon_close.png"]} alt="팝업 닫기" />
      </button>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <span className="modal-header-category-name"><em>돌격소총</em></span>
          <h3 className="modal-header-tit">M416</h3>
          <div className="modal-header-bullet">
            <img src={images["weapon/556mm.png"]} alt="" />
            <span className="modal-header-bullet-name">5.56mm</span>
          </div>
        </div>
        <div className="modal-body">
          <div className="modal-body-gun-box">
            <div className="modal-body-gun-box-image">
              <img src={images["weapon/M416.png"]} alt="" />
            </div>
          </div>
          <div className="modal-body-gun-parts">
            <div className="modal-body-gun-parts-box">
              <h3 className="modal-body-gun-parts-tit">부착물</h3>
              <ul className="modal-body-gun-parts-list">
                <li className="modal-body-gun-parts-item is-active">총구</li>
                <li className="modal-body-gun-parts-item">손잡이</li>
                <li className="modal-body-gun-parts-item">조준기</li>
                <li className="modal-body-gun-parts-item">탄창</li>
                <li className="modal-body-gun-parts-item">개머리판</li>
              </ul>
            </div>
            <Swiper
              modules={[Navigation]}
              onSwiper={(swiper) => (partsSwiperRef.current = swiper)}
              slidesPerView={3}
              navigation
              className="modal-weapon-parts-area"
            >
              <SwiperSlide>
                <div className="modal-weapon-parts-item">
                  <div className="modal-weapon-parts-item-image">
                    <img src={images["weapon/weapons-add-on-muzzle-compensator_large.png"]} alt="" />
                  </div>
                  <div className="modal-weapon-parts-item-box">
                    <h4 className="modal-weapon-parts-item-name">보정기</h4>
                    <span className="modal-weapon-parts-item-desc">총기 반동을 크게 줄여주어 조준 제어에 도움을 줍니다.</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="modal-weapon-parts-item">
                  <div className="modal-weapon-parts-item-image">
                    <img src={images["weapon/weapons-add-on-muzzle-compensator_large.png"]} alt="" />
                  </div>
                  <div className="modal-weapon-parts-item-box">
                    <h4 className="modal-weapon-parts-item-name">보정기</h4>
                    <span className="modal-weapon-parts-item-desc">총기 반동을 크게 줄여주어 조준 제어에 도움을 줍니다.</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="modal-weapon-parts-item">
                  <div className="modal-weapon-parts-item-image">
                    <img src={images["weapon/weapons-add-on-muzzle-compensator_large.png"]} alt="" />
                  </div>
                  <div className="modal-weapon-parts-item-box">
                    <h4 className="modal-weapon-parts-item-name">보정기</h4>
                    <span className="modal-weapon-parts-item-desc">총기 반동을 크게 줄여주어 조준 제어에 도움을 줍니다.</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="modal-weapon-parts-item">
                  <div className="modal-weapon-parts-item-image">
                    <img src={images["weapon/weapons-add-on-muzzle-compensator_large.png"]} alt="" />
                  </div>
                  <div className="modal-weapon-parts-item-box">
                    <h4 className="modal-weapon-parts-item-name">보정기</h4>
                    <span className="modal-weapon-parts-item-desc">총기 반동을 크게 줄여주어 조준 제어에 도움을 줍니다.</span>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;