import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const GetUserInfo = async () => {
  const url = API_BASE_URL + `/sprint5/user-info`;
  const apiKey = `Bearer ${API_KEY}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: apiKey,
      },
    });

    return response.data;
  } catch (err) {
    console.log("API error in GetUserInfo :: " + err.message);
  }
};
