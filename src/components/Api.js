import axios from "axios";

const getDuty = () => {
  return axios("https://632711b05731f3db995278f8.mockapi.io/api/v1/duty");
};

const updateDuty = (duty) => {
  return axios.put(
    `https://632711b05731f3db995278f8.mockapi.io/api/v1/duty/${duty.id}`,
    duty
  );
};

const createDuty = (duty) => {
  return axios.post(
    `https://632711b05731f3db995278f8.mockapi.io/api/v1/duty`,
    duty
  );
};

const deleteDuty = (id) => {
  return axios.delete(
    `https://632711b05731f3db995278f8.mockapi.io/api/v1/duty/${id}`
  );
};

export { updateDuty, getDuty, createDuty, deleteDuty };
