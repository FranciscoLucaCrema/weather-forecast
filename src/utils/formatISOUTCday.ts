function formatDay(date: string, format: "narrow" | "short" | "long"): string {
  const formattedDate = new Date(date).toLocaleString("en-US", {
    timeZone: "UTC",
    weekday: format,
  });

  return formattedDate;
}

export default formatDay;
