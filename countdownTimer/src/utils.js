const getMiliSeconds = (date1, date2) => Math.abs(date1 - date2) % 1000;
const getSeconds = (date1, date2) => Math.floor(Math.abs(date1 - date2) / 1000) % 60;
const getMinutes = (date1, date2) => Math.floor(Math.abs(date1 - date2) / (1000 * 60)) % 60;
const getHours = (date1, date2) => Math.floor(Math.abs(date1 - date2) / (1000 * 60 * 60)) % 24;
const getDays = (date1, date2) => Math.floor(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));

export {
  getMiliSeconds,
  getSeconds,
  getMinutes,
  getHours,
  getDays,
};
