import "./Card.scss"
import { importAllImages } from "../../utils/importImages";

const images = importAllImages(
  import.meta.glob("/src/assets/image/**/*.{png,jpg,jpeg,svg}", {eager: true,})
);

function Card({ weaponData, category = "돌격소총", onClick }) {
  if (!weaponData) {
    return null;
  }
  
  const imageName = weaponData.itemImage.replace("/image/", "weapon/");
  return (
    <button className="card-item-box" onClick={onClick}>
      <span className="card-item-category">{category}</span>
      <div className="card-item-plusIcon">
        <img src={images["card_plus_icon.svg"]} alt="카드 열기" />
      </div>
      <div className="card-item-weaponImage">
        <img 
          src={images[imageName]} 
          className="weapon-image" 
          alt={weaponData.itemName} 
        />
      </div>
      <span className="card-item-weaponName">{weaponData.itemName}</span>
    </button>
  )
}

export default Card;