const API = "http://localhost:3000/rest/selections";

const state = {
  horses: [],
  count: 0
};

const getHorsesData = fetch(API, {
  method: "get"
})
  .then(response => {
    return response.json();
  })
  .then(horses => {
    state.horses = horses;
    renderAllHorses();
    counter();
  });
const renderAllHorses = () => {
  state.horses.response.selections.forEach(horse => horseInfo(horse));

  const btn = document.querySelectorAll(".btn");
  btn.forEach(btn => btn.addEventListener("click", clickHandler));
};

const horseInfo = horse => {
  const horseEl = document.querySelector("#horse-data");
  horseEl.innerHTML += `
      <div class="horse-info">
        <p class="horse-id">${horse.id}.</p>
        <p class="horse-name">${horse.name}</p>
        <p class="horse-price">Price: ${horse.price}</p>
        <button data-id="${horse.id}" class="btn">Select horse</button>
      </div>`;
};

const clickHandler = event => {
  const clicked = event.detail;
  if (clicked == 1) {
    state.count++;
  } else {
    state.count--;
  }

  const counterComponent = document.querySelector("#count-data");
  counterComponent.innerHTML = counter();
};

const counter = () => {
  return `<p>${state.count} bet slip</p>`;
};
