import './user-activity.css'

export const UserActivity = ({label, count}) => {
  return (
    <div className="userActivity">
      <span>{label}</span>
      <div>
        <span className="count">{count}</span>
        회
      </div>
    </div>
  );
}