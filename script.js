const toggle = document.getElementById("about-toggle");
const full = document.getElementById("about-full");

toggle?.addEventListener("click", () => {
  const open = !full.classList.contains("hidden");
  full.classList.toggle("hidden", open);
  toggle.textContent = open ? "Ver mais" : "Ver menos";
});

document.querySelector(".share")?.addEventListener("click", async () => {
  const url = window.location.href;
  try {
    if (navigator.share) {
      await navigator.share({ title: "Portfólio · João Victor", url });
    } else {
      await navigator.clipboard.writeText(url);
      alert("Link copiado.");
    }
  } catch {
    /* user cancelled */
  }
});
