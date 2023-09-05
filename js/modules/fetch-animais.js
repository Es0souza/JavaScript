import initAnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimais() {
  async function fetchAnimais(url) {
    const animaisResponse = await fetch(url);
    const animaisJSON = await animaisResponse.json();
    const numeroGrid = document.querySelector(".numero-grid");

    animaisJSON.forEach((animal) => {
      const divAnimal = creatAnimal(animal);
      numeroGrid.appendChild(divAnimal);
    });
    initAnimaNumeros();
  }

  function creatAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<p>${animal.especies}</p><span data-numero>${animal.total}</span>`;
    return div;
  }
  fetchAnimais("./animaisapi.json");
}
