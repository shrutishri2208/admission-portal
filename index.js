let formDataArray = JSON.parse(localStorage.getItem("formData"));
const form = document.getElementById("myForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);

  const data = {};
  for (let pair of formData.entries()) {
    data[pair[0]] = pair[1];
  }

  formDataArray.push(data);

  localStorage.setItem("formData", JSON.stringify(formDataArray));

  alert("Your Response has been saved!");

  this.reset();
});

const checkForAdmin = () => {
  let adminPW = prompt("Enter the password to login:");
  console.log(adminPW);
  if (adminPW === "admin") {
    window.location.href = "admin.html";
  } else alert("INCORRECT PASSWORD");
};
