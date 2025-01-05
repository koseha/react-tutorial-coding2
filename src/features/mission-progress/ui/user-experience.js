import './user-experience.css'

export const UserExperience = () => {
  return (
    <div className="userExperience">
      <div className="userExperience-wrapper">
        <span>코딩이 학습 레벨</span>
        <div className="exp">
          <div className="exp-fill"></div>
        </div>
        <div className="exp-point">
          <span>10</span>/
          <span>100p</span>
        </div>
      </div>
    </div>
  );
}