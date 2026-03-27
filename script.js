const modal = document.getElementById("modal");
const buttons = document.querySelectorAll(".custom-button");
const nome = document.getElementById("produto-nome");
const whatsapp = document.getElementById("whatsapp-link");
const fechar = document.getElementById("fechar");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const produto = btn.dataset.nome;

    nome.textContent = produto;

    whatsapp.href = `https://wa.me/5551999999999?text=Olá, quero comprar a ${produto}`;

    modal.showModal();
  });
});

fechar.onclick = () => modal.close();
