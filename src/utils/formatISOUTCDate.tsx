function formatDate(date: string) {
  const formattedDate = new Date(date).toLocaleString("en-US", {
    timeZone: "UTC",
    weekday: "long",
    day: "2-digit",
    month: "long",
  });

  return formattedDate;
}

export default formatDate;
