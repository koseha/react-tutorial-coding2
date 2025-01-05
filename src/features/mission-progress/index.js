import { UserLevel } from './ui/user-level'
import { UserExperience } from './ui/user-experience'
import { UserActivity } from './ui/user-activity'
import './mission-progress.css';

export const Progress = () => {
  return (
    <div className="mission-progress">
      <UserLevel />
      <UserExperience />
      <UserActivity label={"질문에 답한 수"} count={12}/>
      <UserActivity label={"댓글 단 수"} count={34}/>
    </div>
  );
}