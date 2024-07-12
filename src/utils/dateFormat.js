import { DateTime } from "luxon";

export const convertDefaultDateToYMDFormat = (dateString) => {
  if (!dateString) return null;

  const date = DateTime.fromISO(dateString);
  if (!date.isValid) return null;

  return date.toFormat("Y-m-d");
};