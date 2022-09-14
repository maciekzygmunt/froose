export const zoneTime = () => {
  const time = new Date();
  const startTime = time.toISOString();
  time.setDate(time.getDate() + 1);
  const endTime = time.toISOString();
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return {
    startTime,
    endTime,
    timeZone,
  };
};
