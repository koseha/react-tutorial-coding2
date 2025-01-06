import { Progress } from "../../features/mission-progress";
import { Today } from "../../features/mission-today";
import "./mission.css";
import { useEffect, useState } from "react";
import { GetUserInfo } from "./api/get-user-info";
import { NewMission } from "../../features/mission-new";

export const Mission = () => {
  const [answerCount, setAnswerCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [experience, setExperience] = useState(0);
  const [level, setLevel] = useState(0);
  const [showTodayMission, setShowTodayMission] = useState(true);

  const getUserinfo = async () => {
    const data = await GetUserInfo();
    return data;
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      const data = await getUserinfo();
      setAnswerCount(data.answerCount);
      setCommentCount(data.commentCount);
      setExperience(data.currentPoint);
    };

    fetchUserInfo();
  }, []);

  useEffect(() => {
    const level = parseInt(experience / 20);
    setLevel(level < 0 ? Math.max(level, 0) : Math.min(level, 5));
  }, [experience]);

  return (
    <div className="mission">
      <Progress
        level={level}
        experience={experience}
        answer={answerCount}
        comment={commentCount}
      />
      <div>
        {showTodayMission && (
          <Today
            updateCompletedMission={(point) =>
              setExperience(experience + point)
            }
            showNewMissionView={() => setShowTodayMission(false)}
          />
        )}
        {!showTodayMission && (
          <NewMission showTodayMissionView={() => setShowTodayMission(true)} />
        )}
      </div>
    </div>
  );
};
