const months: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const fixNumberToTwoDigits = (num: number): string => (num < 10 ? `0${num}` : num.toString());

const showDate = (date: Date): string =>
  `${fixNumberToTwoDigits(date.getDate())} ${months[date.getMonth()].substring(
    0,
    3,
  )} ${date.getFullYear()}`;

export default showDate;
