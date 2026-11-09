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

// Modal de detalhes dos projetos
document.querySelectorAll("[data-open]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const dialog = document.getElementById(btn.dataset.open);
    if (!dialog || typeof dialog.showModal !== "function") return;
    dialog.showModal();
    document.body.style.overflow = "hidden";
  });
});

document.querySelectorAll("dialog.modal").forEach((dialog) => {
  const close = () => {
    dialog.close();
  };

  dialog.addEventListener("close", () => {
    document.body.style.overflow = "";
  });

  dialog.querySelectorAll("[data-close]").forEach((btn) => {
    btn.addEventListener("click", close);
  });

  // clique fora da caixa fecha
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) close();
  });
});

