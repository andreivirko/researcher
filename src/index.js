import "./styles/styles.css";
// import "./timer/timer.js";
// import "./menu/menu.js";
import "./promisification/promise.js";

// const url = "https://restcountries.eu/rest/v2/all";
// GET- запрос на получение данных
// POST-добавляем запрос на добавление данных
// PUT-обновляет
// PATCH-перерисовывает
// DELETE-удаляет информацию
// const options = {
//   method: "GET",
//   headers: { Accept: "application/json" },
// };
// fetch(url, options)
//   .then((response) => {
//     return response.json(); // массив обьектов
//     // return response.text(); // в тексте
//     // return response.formData();
//   })
//   .then((data) => {
//     console.log(data);

// MAP //
// data.map((item) => console.log(item.name));

// FILTER //
// data.filter((item) => {
//   if (item.name.includes("w")) return console.log(item);
// })

// FIND //
// data.find(item => {if(item.name.includes("-")) return console.log(item)});

// SORT //
//   return console.log(
//     data

//       .sort((min, max) => {
//         max.population - min.population;
//       })
//       .filter((item) => item.name.includes("j"))
//       .map((item) => item.name),
//   );
// })
// .catch((error) => {
//   console.log(error);
// });

//   const flag = document.createElement("img");
//   flag.src = "https://restcountries.eu/data/tls.svg";
//   const body = document.querySelector("body");
//   body.appendChild(flag);

// const url = "https://cat-fact.herokuapp.com/facts";

// // fetch("https://cat-fact.herokuapp.com");
// fetch(url)
// .then((response) => response.json())
//   .then((data) => console.log(data));

// запрос аунтефикации //

// let queryCat = "javascript";
// let queryLang = "en";
// let pageSize = 20;
// let page = 1;

// const apiKey = "2b939a2eba6947788e0aaf3b2c375927";
// const maniUrl = "https://newsapi.org/";
// const versionDb = "v2/";
// const endpoint = "everything";
// const queries = `?q=${queryCat}&language=${queryLang}&pageSize=${pageSize}&page=${page}`;

// const url = maniUrl + versionDb + endpoint + queries;
import template from "./templates/menuItem.hbs";
const url = `https://restcountries.eu/rest/v2/all`;
const endPoint = "/name";
console.log(url);

// const options = {
//   headers: {
//     Authirization: apiKey,
//   },
// };

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const item = template(data);
    console.log(item);
    ul.insertAdjacentHTML("afterbegin", item);
  });

  const ul = document.querySelector(".flags");
