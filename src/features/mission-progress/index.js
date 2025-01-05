import { UserLevel } from "./ui/user-level";
import { UserExperience } from "./ui/user-experience";
import { UserActivity } from "./ui/user-activity";
import "./mission-progress.css";
import { useEffect, useState } from "react";

const calculateExperience = (base, answer, comment) => {
  const tmp = base + (answer + comment) / 10;
  return parseInt(tmp);
};

export const Progress = () => {
  const [answerCount, setAnswerCount] = useState(12);
  const [commentCount, setCommentCount] = useState(34);
  const [experience, setExperience] = useState(10);

  useEffect(() => {
    setExperience(calculateExperience(experience, answerCount, commentCount));
  }, [answerCount, commentCount]);

  return (
    <div className="mission-progress">
      <UserLevel />
      <UserExperience exp={Math.min(experience, 100)} />
      <UserActivity label={"질문에 답한 수"} count={answerCount} />
      <UserActivity label={"댓글 단 수"} count={commentCount} />
    </div>
  );
};
