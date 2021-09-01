import moment from "moment";

export const formatDateRange = (start_date, end_date) => {
  if (!start_date || !end_date) {
    return "N/A";
  }

  const start = moment(start_date).format("MM DD HH:MM");
  const end = moment(end_date).format("MM DD HH:MM");
  return `${start} - ${end}`;
};
