function formatDate(date: string) {
  const formattedDate = new Date(date);

  const day = formattedDate.getUTCDate();
  const month = formattedDate.getUTCMonth() + 1;
  const year = formattedDate.getFullYear();

  return `${day}/${month}/${year}`;
}

export default formatDate;
