import "./mission-today.css";
import { MissionItem } from "./ui/mission-item";

export const Today = () => {
  return (
    <div className="missionToday">
      <h3>오늘의 미션을 수행하고 포인트를 얻어보세요!</h3>
      <div className="missionItems">
        <MissionItem mission={"출석체크 미션"} isCompleted={true} point={10} />
        <MissionItem mission={"주제 답글 미션"} isCompleted={false} />
        <MissionItem mission={"공부 인증하기 미션"} isCompleted={false} />
        <MissionItem
          mission={"질문에 답변해보기"}
          isCompleted={true}
          point={10}
        />
      </div>
    </div>
  );
};
