// Select the form
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  const input = document.querySelector('input[name="title"]');
  const title = input.value.trim();

  if (title !== "") {
    alert(`Adding todo: ${title}`);
    // form submits normally, no extra code needed
  } else {
    alert("Please enter a todo!");
    event.preventDefault(); // stop empty submit
  }
});
