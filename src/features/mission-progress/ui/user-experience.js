import "./user-experience.css";

export const UserExperience = ({ exp }) => {
  return (
    <div className="userExperience">
      <div className="userExperience-wrapper">
        <span>코딩이 학습 레벨</span>
        <div className="exp">
          <div className="exp-fill" style={{ width: `${exp}%` }}></div>
        </div>
        <div className="exp-point">
          <span>{exp}</span>/<span>100p</span>
        </div>
      </div>
    </div>
  );
};
