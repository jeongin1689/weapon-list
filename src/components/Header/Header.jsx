import { importAllImages } from "../../utils/importImages";
import { Link } from 'react-router-dom';
import "./Header.scss"

const icons = importAllImages(
  import.meta.glob("/src/assets/image/**/*.{png,jpg,jpeg,svg}", {eager: true,})
);

const lnbItem = [
  {item : "게임정보"},
  {item : "뉴스"},
  {item : "이벤트"},
  {item : "미디어"},
  {item : "커뮤니티"},
  {item : "고객지원"}
]

function Info({data}) {
  return <li className="header-lnb-list-item"><a href="/" className="list-tit">{data}</a></li>;
}

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="outline-btn-box">
          <button className="outlink-btn">
            <img src={icons["outlink_icon.svg"]} alt="Open outlink layer" />
          </button>
        </div>
        <h1 className="main-logo-box">
          <Link to="/" className="main-logo">
            <img src={icons["logo.png"]} alt="BattleGround Home" />
          </Link>
        </h1>
        <div className="header-right-area">
          <div className="local-btn-box">
            <button className="locale-btn">
              <img src={icons["locale_icon.svg"]} alt="언어 설정" />
              <span className="locale">한국어</span>
            </button>
          </div>
          <div className="login-btn-box">
            <button className="login-btn">
              <img src={icons["login_icon.svg"]} alt="로그인" />
              <span className="login">로그인</span>
            </button>
          </div>
          <button className="play-btn">
            <span className="play-btn_text">PLAY NOW</span>
          </button>
        </div>
      </div>
      <nav className="header-lnb">
        <ul className="header-lnb-list">
          {lnbItem.map((lnbText) => (
            <Info data={lnbText.item} key={lnbText.item} />
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header;