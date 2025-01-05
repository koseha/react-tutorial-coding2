import { NavLink } from "react-router-dom";
import "./header.css";

const navItems = {
  1: {
    iconSrc: "/assets/icons/nav01.png",
    label: "오늘의 미션",
  },
  2: {
    iconSrc: "/assets/icons/nav02.png",
    label: "주제 던지기",
  },
  3: {
    iconSrc: "/assets/icons/nav03.png",
    label: "코지 바다",
  },
  4: {
    iconSrc: "/assets/icons/nav04.png",
    label: "개념 공부",
  },
};

/**
 * @todo : nav active 동작 -> useState로 관리
 */
export const Header = () => {
  return (
    <div className="header">
      <nav className="nav">
        <NavLink to="/mission">
          <img src={navItems[1].iconSrc} alt=""></img>
          {navItems[1].label}
        </NavLink>
        <NavLink to="/topic">
          <img src={navItems[2].iconSrc} alt=""></img>
          {navItems[2].label}
        </NavLink>
        <NavLink to="/cozy">
          <img src={navItems[3].iconSrc} alt=""></img>
          {navItems[3].label}
        </NavLink>
        <NavLink to="/study">
          <img src={navItems[4].iconSrc} alt=""></img>
          {navItems[4].label}
        </NavLink>
      </nav>
      <div className="user">
        <div className="user-name">
          <button>정한샘</button>
          <span>님</span>
        </div>
        <button>로그아웃</button>
      </div>
    </div>
  );
};
