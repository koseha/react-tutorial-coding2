import "./mission-item.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

export const MissionItem = ({
  mission,
  isCompleted,
  point,
  onToggle,
  crown,
}) => {
  const completedClass = `missionItem ${isCompleted ? "completed" : ""}`;
  const completedExecute = `missionExecuted ${isCompleted ? "completed" : ""}`;

  return (
    <div className={completedClass} onClick={onToggle}>
      {crown && (
        <img
          className="missionCrown"
          src="/assets/icons/crown.png"
          alt=""
        ></img>
      )}
      <div className={completedExecute}>
        {isCompleted ? (
          <FontAwesomeIcon icon={faCircleCheck} />
        ) : (
          <FontAwesomeIcon icon={faCircleXmark} />
        )}
      </div>
      <div className="missionTitle">
        <span>{mission}</span>
      </div>
      <div className="missionPoint">
        {isCompleted ? (
          <span style={{ color: "#5f52ff" }}>+{point} P 획득!</span>
        ) : (
          <span style={{ color: "#acacb3" }}>아직 안했어요</span>
        )}
      </div>
    </div>
  );
};
