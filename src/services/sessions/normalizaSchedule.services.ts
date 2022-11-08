export const normalizeDateService = async (day: string, hour: string) => {
  const newDate = day.split("/");

  const newHour = hour.split(":");

  const normalDate = newDate[0] + "/" + newDate[1] + "/" + newDate[2];

  const normalDueDate = newDate[0] + "/" + newDate[1] + "/" + "01";

  const nomalDateWithHour =
    newDate[0] +
    "/" +
    newDate[1] +
    "/" +
    newDate[2] +
    " " +
    newHour[0] +
    ":" +
    newHour[1];

  const fullDate = new Date(nomalDateWithHour);

  const paymentDate = new Date(normalDueDate);
  console.log(normalDueDate, paymentDate);

  const sessionDate = new Date(normalDate);

  const dayWeek = new Date(sessionDate).getDay();

  const hours = new Date(fullDate).getHours();

  const data = {
    normalDate,
    day,
    hours,
    dayWeek,
    fullDate,
    paymentDate,
  };

  return data;
};
