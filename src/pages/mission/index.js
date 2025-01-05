import { Progress } from "../../features/mission-progress";
import { Today } from "../../features/mission-today";
import "./mission.css";
import { useEffect, useState } from "react";

const calculateExperience = (base, answer, comment) => {
  const tmp = base + (answer + comment) / 10;
  return parseInt(tmp);
};

export const Mission = () => {
  const [answerCount, setAnswerCount] = useState(12);
  const [commentCount, setCommentCount] = useState(34);
  // const answerCount = 12;
  // const commentCount = 34;
  const [experience, setExperience] = useState(20);
  const [level, setLevel] = useState(0);

  useEffect(() => {
    setExperience(calculateExperience(experience, answerCount, commentCount));
  }, [answerCount, commentCount]);

  useEffect(() => {
    setLevel(parseInt(experience / 20));
  }, [experience]);

  return (
    <div className="mission">
      <Progress
        level={level}
        experience={experience}
        answer={answerCount}
        comment={commentCount}
      />
      <Today
        updateCompletedMission={(point) => setExperience(experience + point)}
      />
    </div>
  );
};
