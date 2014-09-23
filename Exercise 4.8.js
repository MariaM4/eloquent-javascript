function formatDate(date) {
  function pad(number) {
    if (number < 10)
      return "0" + number;
    else
      return number;
  }
  return pad(date.getDate()) + "/" + pad(date.getMonth() + 1) +
             "/" + date.getFullYear();
}
print(formatDate(new Date(2000, 0, 1)));