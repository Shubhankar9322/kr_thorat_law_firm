const overlay = document.getElementById("disclaimerOverlay");
const agreeBtn = document.getElementById("agreeBtn");

// The disclaimer is deliberately NOT stored in localStorage.
// Therefore it appears every time the website is opened or refreshed.
document.body.classList.add("modal-open");

agreeBtn.addEventListener("click", () => {
  overlay.remove();
  document.body.classList.remove("modal-open");
});
