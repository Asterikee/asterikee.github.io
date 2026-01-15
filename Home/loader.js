window.addEventListener("load", () => {
  const loader = document.getElementById("loading-screen");
  const app = document.getElementById("app");

  loader.style.opacity = "0";
  loader.style.pointerEvents = "none";

  setTimeout(() => {
    loader.remove();
    app.classList.remove("hidden");
  }, 400);
});
