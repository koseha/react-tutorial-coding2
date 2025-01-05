import './header.css';
import {NavItem} from './ui/nav-item';

const navItems = {
  "1" : {
    iconSrc: '/assets/icons/nav01.png',
    label: "오늘의 미션",
    path: "",
  },
  "2" : {
    iconSrc: '/assets/icons/nav02.png',
    label: "주제 던지기",
    path: "",
  },
  "3" : {
    iconSrc: '/assets/icons/nav03.png',
    label: "코지 바다",
    path: "",
  },
  "4" : {
    iconSrc: '/assets/icons/nav04.png',
    label: "개념 공부",
    path: "",
  },
};

/**
 * @todo : nav active 동작 -> useState로 관리
 */
export const Header = () => {
  return (
    <div className="header">
      <ul className="nav">
        <NavItem item={navItems[1]} active={'active'}/>
        <NavItem item={navItems[2]} active={''}/>
        <NavItem item={navItems[3]} active={''}/>
        <NavItem item={navItems[4]} active={''}/>
      </ul>
      <div className="user">
        <div className="user-name">
          <button>정한샘</button>
          <span>님</span>
        </div>
        <button>로그아웃</button>
      </div>
    </div>
  );
}