/**
 * If the notification number is less than 0, return 0, otherwise, if the notification number is
 * greater than 999, return the number with the last 3 digits replaced with a 'k', otherwise, return
 * the number.
 * @param notificationNumber - the number of notifications
 * @returns the number of notifications modified ej. send `notificationNumber(1342)` returns `1k` .
 */
export const notificationNumberDisplay = (notificationNumber) => {
  let number = parseInt(notificationNumber);
  if (number < 0) return 0;
  if (number > 999) {
    number = number.toString().slice(0, -3) + "k";
  }
  return number;
};
