const getDateFormatted = (date: string): string => {
  return new Date(date).toLocaleDateString(undefined, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export default getDateFormatted;
