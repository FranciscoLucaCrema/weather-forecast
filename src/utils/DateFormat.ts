function formatDate(date: string): string {
  const formattedDate = new Date(date).toLocaleString("en-US", {
    timeZone: "UTC",
    weekday: "long",
    day: "2-digit",
    month: "long",
  });

  return formattedDate;
}

function formatDay(date: string, format: "narrow" | "short" | "long"): string {
  const formattedDate = new Date(date).toLocaleString("en-US", {
    timeZone: "UTC",
    weekday: format,
  });

  return formattedDate;
}

export { formatDate, formatDay };
