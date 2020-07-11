import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
momentDurationFormatSetup(moment);

export const prepareFilmDuration = (time) => {
  return moment.duration(time, `minutes`).format(`h[h] m[m]`);
};

export const prepareReviewDate = (date) => {
  return moment(date).format(`MMMM DD, YYYY`);
};