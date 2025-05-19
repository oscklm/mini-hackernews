export const unixTimeToDateString = (seconds: number): string => {
  const date = new Date(seconds * 1000);

  const dateString = date.toLocaleString("en-DK", {
    timeZone: "Europe/Copenhagen",
  });

  return dateString;
};
