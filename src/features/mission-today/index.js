import "./mission-today.css";
import { MissionItem } from "./ui/mission-item";
import { useState, useEffect } from "react";
import { GetMissionList } from "./api/get-mission-list";
import { UpdateMissionCompleted } from "./api/update-mission-completed";

export const Today = ({ updateCompletedMission, showNewMissionView }) => {
  const [missionList, setMissionList] = useState({ missions: [] });
  const [page, setPage] = useState(1);

  const handleToggle = async (key) => {
    const updatedMissionList = await Promise.all(
      missionList.missions.map(async (m, i) => {
        if (m.id === key) {
          const data = await updateMissionCompleted(key);
          console.log("*handleToggle* :: ");
          console.log(data);

          if (Object.keys(data).length !== 0) {
            m.isCompleted = data.isCompleted;
            updateCompletedMission(
              m.isCompleted ? data.currentPoint : -data.currentPoint
            );
          }
        }
        return m;
      })
    );

    setMissionList({
      ...missionList,
      missions: updatedMissionList,
    });
  };

  const updateMissionCompleted = async (missionId) => {
    try {
      const data = await UpdateMissionCompleted(missionId);
      return data;
    } catch (err) {
      return {};
    }
  };

  const handlePage = (num) => {
    setPage(num);
  };

  const getMissionList = async (page) => {
    const data = await GetMissionList(page);

    setMissionList({
      ...data,
    });

    return data;
  };

  useEffect(() => {
    getMissionList(page);
  }, [page]);

  return (
    <div className="missionToday">
      <div className="missionToday-header">
        <h3>오늘의 미션을 수행하고 포인트를 얻어보세요!</h3>
        <button onClick={showNewMissionView}>미션 만들기</button>
      </div>
      <div className="missionItems">
        {missionList.missions?.map((mission, index) => (
          <MissionItem
            key={mission.id}
            mission={mission.missionName}
            isCompleted={mission.isCompleted}
            point={mission.missionPoint}
            onToggle={() => handleToggle(mission.id)}
            crown={mission.isGoldMission}
          />
        ))}
      </div>
      <div className="missionPages">
        <button onClick={() => handlePage(page - 1)} disabled={page === 1}>
          {"<"}
        </button>
        {Array.from({ length: missionList.totalPage }, (_, i) => {
          return (
            <button
              className={page === i + 1 ? "active" : ""}
              key={i + 1}
              onClick={() => handlePage(i + 1)}
            >
              {i + 1}
            </button>
          );
        })}
        <button
          onClick={() => handlePage(page + 1)}
          disabled={page === missionList.totalPage}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};
