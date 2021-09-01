import moment from "moment";

export const formatDateRange = (start_date, end_date) => {
  if (!start_date || !end_date) {
    return "N/A";
  }

  const start = moment(start_date).format("MMM DD HH:mm");
  const end = moment(end_date).format("MMM DD HH:mm");
  return `${start} - ${end}`;
};
