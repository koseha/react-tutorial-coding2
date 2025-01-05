import "./user-level.css";

const codingLevels = [
  {
    text: "난 아직 모가 없어 ㅜㅜ",
    imgSrc: "/assets/level00.png",
    name: "Lv0. 알 코딩이",
    style: {},
  },
  {
    text: "미션해라 ~",
    imgSrc: "/assets/level01.png",
    name: "Lv1. 아기 코딩이",
    style: {},
  },
  {
    text: "난 귀여워",
    imgSrc: "/assets/level02.png",
    name: "Lv2. 귀요미 코딩이",
    style: {},
  },
  {
    text: "난 프로~",
    imgSrc: "/assets/level03.png",
    name: "Lv3. 어른 코딩이",
    style: {},
  },
  {
    text: "크앙",
    imgSrc: "/assets/level04.png",
    name: "Lv4. 괴물 코딩이",
    style: {
      border: `1px solid #ffffff`,
      background: `#23b169`,
    },
  },
  {
    text: "으아앙",
    imgSrc: "/assets/level05.png",
    name: "Lv5. 악마 코딩이",
    style: {
      border: `1px solid #ffffff`,
      background: `#000000`,
      color: `#ffffff`,
    },
  },
];

export const UserLevel = ({ level }) => {
  return (
    <div className="userLevel">
      <div className="userLevel-message">
        <button className="btn" style={codingLevels[level].style}>
          {codingLevels[level].text}
        </button>
      </div>
      <div className="userLevel-status">
        <img src={codingLevels[level].imgSrc} alt=""></img>
        <span>{codingLevels[level].name}</span>
      </div>
    </div>
  );
};
