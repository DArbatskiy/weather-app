export const getDate = (date: string): string => {
  const [weekday, month, day] = new Date(date).toDateString().split(' ')
  return `${weekday}, ${day} ${month}`
}