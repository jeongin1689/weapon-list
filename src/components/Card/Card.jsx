import "./Card.scss"
import { importAllImages } from "../../utils/importImages";

const images = importAllImages(
  import.meta.glob("/src/assets/image/**/*.{png,jpg,jpeg,svg}", {eager: true,})
);

function Card(){
  return (
    <button className="card-item-box">
      <span className="card-item-category">돌격소총</span>
      <div className="card-item-plusIcon">
        <img src={images["card_plus_icon.svg"]} alt="카드 열기" />
      </div>
      <div className="card-item-weaponImage">
        <img src={images["weapon/AKM.png"]} className="weapon-image" alt="AKM" />
      </div>
      <span className="card-item-weaponName">M16A4</span>
    </button>
  )
}

export default Card;