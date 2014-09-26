function method(object, name) {
  return function() {
    return object[name].apply(object, arguments);
  };
}

var pushTest = method(testArray, "push");