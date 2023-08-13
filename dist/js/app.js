import { NeogicacaoController } from "./controllers/negociacao-controller.js";
const controller = new NeogicacaoController();
const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    controller.adiciona();
});
