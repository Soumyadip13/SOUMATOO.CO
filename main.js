// Preloader js...
var preloader = document.getElementById("loading");
function myFunction() {
  preloader.style.display = 'none';
};

// Contact form by Google Sheet...
var form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
  e.preventDefault()
  fetch(form.action, {
    method: "post",
    body: new FormData(document.getElementById("sheetdb-form")),
  }).then(
    response => response.json()
  ).then((html) => {
    alert('Successfull🎉 | We will contact you within 48 hours. Stay tuned 😃...')
  })
});
