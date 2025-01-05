import { Progress } from "../../features/mission-progress";
import { Today } from "../../features/mission-today";
import "./mission.css";
import { useEffect, useState } from "react";

const calculateExperience = (base, answer, comment) => {
  const tmp = base + (answer + comment) / 10;
  return parseInt(tmp);
};

export const Mission = () => {
  const answerCount = 12;
  const commentCount = 34;
  const [experience, setExperience] = useState(
    calculateExperience(0, answerCount, commentCount)
  );
  const [level, setLevel] = useState(0);

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
