var mailAddress = /\b[\w\.-]+@[\w\.-]+\.\w{2,3}\b/;

console.log(mailAddress.test("kenny@test.net"));
console.log(mailAddress.test("I mailt kenny@tets.nets, but it didn wrok!"));
console.log(mailAddress.test("the_giant_sloth@gmail.com"));