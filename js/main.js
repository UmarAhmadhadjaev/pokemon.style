const elSelect = document.querySelector("#select");
const elSearch = document.querySelector(".search");
const elEdit = document.querySelectorAll(".edit");


renderPosts(pokemons);

function renderPosts(pokemons) {
  parent.textContent = "";
  const fragment = document.createDocumentFragment();
  let boxes = document.querySelector(".box-dad");
  pokemons.forEach((poc) => {
    let box = document.createElement("div");
    let div_img = document.createElement("div");
    let img = document.createElement("img");
    let id = document.createElement("p");
    let name = document.createElement("h1");
    let height = document.createElement("p");
    let weight = document.createElement("p");
    let type = document.createElement("p");
    let buttons = document.createElement("div");
    let deleteBtn = document.createElement("button"); //delete button
    let editBtn = document.createElement("button"); //edit button

    box.classList.add("box");
    div_img.classList.add("img_manip");
    id.classList.add("number");
    type.classList.add("weak");
    buttons.classList.add("buttons");
    deleteBtn.classList.add("delete");
    editBtn.classList.add("edit");

    img.src = poc.img;
    id.textContent = poc.id;
    name.textContent = poc.name;
    height.textContent = `height: ${poc.height}`;
    weight.textContent = `weight: ${poc.weight}`;
    type.textContent = poc.type;
    deleteBtn.textContent = "Delete";
    editBtn.textContent = "Edit";
    div_img.append(img);
    box.append(
      div_img,
      id,
      name,
      height,
      weight,
      type,
      buttons,
      // deleteBtn,
      // editBtn
    );
    boxes.appendChild(box);
    // buttons.append();
    fragment.appendChild(box);
  });
  boxes.appendChild(fragment);
}

function renderType(arr, parent) {
  const tyepArr = [];
  arr.forEach((pokemon) => {
    pokemon.type.forEach((type) => {
      if (!tyepArr.includes(type)) {
        tyepArr.push(type);
      }
    });
  });

  tyepArr.forEach((type) => {
    const elOption = document.createElement("option");
    elOption.textContent = type;
    elOption.value = type;
    parent.appendChild(elOption);
  });
}
renderType(pokemons, elSelect);

elSelect.addEventListener("change", () => {
  let boxes = document.querySelector(".box-dad");
  boxes.innerHTML = "";
  let type = elSelect.value;
  let filtered = pokemons.filter((pokemon) => {
    return pokemon.type.includes(type);
  });
  if (type === "all") {
    renderPosts(pokemons);
  }
  renderPosts(filtered);
});

elSearch.addEventListener("input", () => {
  let boxes = document.querySelector(".box-dad");
  boxes.innerHTML = "";
  let search = elSearch.value;
  let filtered = pokemons.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(search.toLowerCase());
  });
  renderPosts(filtered);
});
