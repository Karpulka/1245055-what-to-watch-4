import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
momentDurationFormatSetup(moment);

export const prepareFilmDuration = (time) => {
  return moment.duration(time, `minutes`).format(`h[h] m[m]`);
};

export const formatTimeLeft = (time) => {
  return moment.duration(time, `seconds`).format(`hh:mm:ss`);
};

export const prepareReviewDate = (date) => {
  return moment(date).format(`MMMM DD, YYYY`);
};

export const setNewObject = (a, b) => {
  return Object.assign({}, a, b);
};
