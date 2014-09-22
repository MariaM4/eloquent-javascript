function startsWith(string, pattern) {
  return string.slice(0, pattern.length) == pattern;
}

console.log(startsWith("rotation", "rot"));