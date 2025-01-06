import "./mission-new.css";
import { useState } from "react";
import { CreateNewMission } from "./api/create-new-mission";

export const NewMission = ({ showTodayMissionView }) => {
  const [title, setTitle] = useState("새로운 미션 이름...");
  const [point, setPoint] = useState(40);
  const [crown, setCrown] = useState(false);

  const createNewMission = async () => {
    const data = await CreateNewMission({
      missionName: title,
      missionPoint: point,
      isGoldMission: crown,
    });
    showTodayMissionView();
  };

  return (
    <div className="missionNew">
      <div className="missionNew-header">
        <h3>오늘의 미션을 만들어 보세요!</h3>
        <button onClick={showTodayMissionView}>돌아가기</button>
      </div>
      <div className="missionBox">
        <button
          className={`missionBox-crownBtn ${crown ? "active" : ""}`}
          onClick={() => setCrown(!crown)}
        >
          <img src="/assets/icons/crown.png" alt=""></img>
        </button>
        <input
          className="missionBox-title"
          value={title}
          maxLength={20}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="missionBox-point">
          <input
            value={point}
            onChange={(e) => {
              e.target.style.width = `${e.target.value.length + 1}ch`;
              setPoint(
                Number(e.target.value) > 100 ? 100 : Number(e.target.value)
              );
            }}
          ></input>
          <span>포인트</span>
        </div>
      </div>
      <button className="createMission" onClick={() => createNewMission()}>
        미션 생성
      </button>
    </div>
  );
};
