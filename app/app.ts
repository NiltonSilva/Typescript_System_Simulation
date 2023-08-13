import { NegociacoesView } from './views/negociacoes-view.js';
import { NeogicacaoController } from "./controllers/negociacao-controller.js";

const controller = new NeogicacaoController();
const form = document.querySelector(".form");
form.addEventListener("submit", (event: Event) => {
  event.preventDefault();
  controller.adiciona();
});
