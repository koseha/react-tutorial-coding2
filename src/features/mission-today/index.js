import "./mission-today.css";
import { MissionItem } from "./ui/mission-item";
import { useState } from "react";

export const Today = ({ updateCompletedMission }) => {
  const [completions, setCompletion] = useState([false, false, false, false]);
  const missions = [
    "출석체크 미션",
    "주제 답글 미션",
    "공부 인증하기 미션",
    "질문에 답변해보기",
  ];

  const handleToggle = (index) => {
    const updatedCompletions = completions.map((task, i) => {
      task = i === index ? !task : task;
      if (i === index) updateCompletedMission(task ? 10 : -10);
      return task;
    });
    setCompletion(updatedCompletions);
  };

  return (
    <div className="missionToday">
      <h3>오늘의 미션을 수행하고 포인트를 얻어보세요!</h3>
      <div className="missionItems">
        {completions.map((isCompleted, index) => (
          <MissionItem
            key={index}
            mission={missions[index]}
            isCompleted={isCompleted}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};
