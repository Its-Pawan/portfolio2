const form = document.getElementById("contact-form");
const greeting = document.getElementById("greeting");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  greeting.innerHTML = `Thank you, ${firstName} ${lastName}, for contacting us! We will get back to you soon.`;
//   form.style.display = "none";
});



