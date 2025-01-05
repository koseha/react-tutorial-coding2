import { Progress } from "../../features/mission-progress";
import { Today } from "../../features/mission-today";
import './mission.css'

export const Mission = () => {
  return (
    <div className="mission">
      <Progress />
      <Today />
    </div>
  );
}