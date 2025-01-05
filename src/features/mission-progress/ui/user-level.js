import './user-level.css'

export const UserLevel = () => {
  return (
    <div className="userLevel">
      <div className="userLevel-message">
        <button className="btn">미션해라~</button>
      </div>
      <div className="userLevel-status">
        <img src="/assets/level01.png"></img>
        <span>Lv. 1 아기 코딩이 상태</span>
      </div>
    </div>
  );
}