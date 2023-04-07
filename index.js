const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');


openBtn.addEventListener('click', () => {
    var element = document.getElementById("menu");
    element.classList.add("active");
});

closeBtn.addEventListener('click', () => {
    var element = document.getElementById("menu");
    element.classList.remove("active");
});
var UserName = document.getElementById("name");
var email = document.getElementById("email");
var phone = document.getElementById("phone");


var submit = 1;

function validation() {
  if (UserName.value == "") {
    document.getElementById("text-danger1").innerHTML = "UserName Field is empty!";
    submit = 0;
  } else if (UserName.value.length < 3) {
    document.getElementById("text-danger1").innerHTML =
      "Please Enter the Correct UserName!";
    submit = 0;
  } else {
    document.getElementById("text-danger1").innerHTML = "";
    submit = 1;
  }
  if (email.value == "") {
    document.getElementById("text-danger2").innerHTML =
      "Please provide your Email!";
    submit = 0;
  } else {
    document.getElementById("text-danger2").innerHTML = "";
    submit = 1;
  }
  if (email.value == "") {
    document.getElementById("text-danger3").innerHTML = "Please provide your phone Number!";
    submit = 0;
  } else {
    document.getElementById("text-danger3").innerHTML = "";
    submit = 1;
  }
  if (submit) {
    return true;
  } else {
    return false;
  }
}
