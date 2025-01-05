import { UserLevel } from "./ui/user-level";
import { UserExperience } from "./ui/user-experience";
import { UserActivity } from "./ui/user-activity";
import "./mission-progress.css";

export const Progress = ({ experience, answerCount, commentCount }) => {
  return (
    <div className="mission-progress">
      <UserLevel />
      <UserExperience exp={Math.min(experience, 100)} />
      <UserActivity label={"질문에 답한 수"} count={answerCount} />
      <UserActivity label={"댓글 단 수"} count={commentCount} />
    </div>
  );
};
