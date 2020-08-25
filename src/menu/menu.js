import "../styles/menu.css";
import menuRefs from "../refs/menuRefs.js";
import menuItem from "../templates/menuItem.hbs";
import data from "../data/menu.json"
console.log(menuRefs);

// переключатель темы //

if (localStorage.getItem("color-theme")) {
  menuRefs.section.classList.add("dark-theme");
  menuRefs.input.checked = true;
}

menuRefs.input.addEventListener("change", () => {
  console.log("произашел клик");
  console.dir(menuRefs.input.checked);
  if (menuRefs.input.checked) {
    localStorage.setItem("color-theme", " ");
    menuRefs.section.classList.add("dark-theme");
    menuRefs.dection.classList.remove("light-theme");
  } else {
    localStorage.removeItem("color-theme");
    menuRefs.section.classList.remove("dark-theme");
    menuRefs.dection.classList.add("light-theme");
  }
});

// console.dir(localStorage);

// создание елементов по шаблону //

const item = menuItem(data);
console.log(item);

// встраивание созданых елементов в HTML //

menuRefs.ul.insertAdjacentHTML("beforeend", item);
