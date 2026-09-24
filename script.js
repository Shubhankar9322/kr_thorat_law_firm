const overlay = document.getElementById("disclaimerOverlay");
const agreeBtn = document.getElementById("agreeBtn");
const disclaimerKey = "krThoratDisclaimerAgreed";

// Show the disclaimer only until the visitor agrees once on this browser/device.
if (localStorage.getItem(disclaimerKey) === "true") {
  overlay.remove();
  document.body.classList.remove("modal-open");
} else {
  document.body.classList.add("modal-open");

  agreeBtn.addEventListener("click", () => {
    localStorage.setItem(disclaimerKey, "true");
    overlay.remove();
    document.body.classList.remove("modal-open");
  });
}
