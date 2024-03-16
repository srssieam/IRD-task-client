import axios from "axios";

const publicAPI = axios.create({
  baseURL: "http://localhost:3001",
});
const usePublicAPI = () => {
  return publicAPI;
};

export default usePublicAPI;