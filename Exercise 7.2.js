function filter(test, array) {
  var result = [];
  forEach(array, function (element) {
    if (test(element))
      result.push(element);
  });
  return result;
}

console.log(filter(partial(op[">"], 5), [0, 4, 8, 12]));