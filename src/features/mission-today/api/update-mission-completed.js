import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const UpdateMissionCompleted = async (missionId) => {
  const url = API_BASE_URL + `/sprint5/mission/complete`;
  const apiKey = `Bearer ${API_KEY}`;

  try {
    const response = await axios.post(
      url,
      { missionId },
      {
        headers: {
          Authorization: apiKey,
        },
      }
    );

    return response.data;
  } catch (err) {
    console.log("API error in updateMissionCompleted :: " + err.message);

    throw new Error();
  }
};
