userForm.elements.send.onclick = function() {
  if (validInfo(userForm))
    userForm.submit();
  else
    alert("Give us a name and a valid e-mail address!");
};