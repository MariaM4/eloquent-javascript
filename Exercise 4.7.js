function between(string, start, end) {
  var startAt = string.indexOf(start) + start.length;
  var endAt = string.indexOf(end, startAt);
  return string.slice(startAt, endAt);
}
console.log(between("bu ] boo [ bah ] gzz", "[ ", " ]"));
