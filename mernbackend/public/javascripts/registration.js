const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// form.addEventListener("submit", async function (e) {
//   e.preventDefault();

// const formData = new FormData(form); // Create a FormData object from the form

// try {
//   const response = await fetch("/registration", {
//     method: "POST",
//     body: formData,
//   });

//   if (response.ok) {
//     const username = await response.text();
//     console.log("Received username: " + username);
//   } else {
//     console.error("Error in the response:", response.status);
//   }
// } catch (error) {
//   console.error("Error during fetch:", error);
// }
// });
