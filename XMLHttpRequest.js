
var todosAPi = "https://restcountries.com/v3.1/all";
var todoRequest = new XMLHttpRequest();

todoRequest.onreadystatechange = function () {
  var data = JSON.parse(this.response);
  console.log(data);
  filterAsianCountries(data);
  filterPopulation(data, 200000);
};

todoRequest.open("GET", todosAPi); // GET, POST, PUT, DELETE, PATCH
todoRequest.send();

console.log(todoRequest);

function filterAsianCountries(data = []) {}

function filterPopulation(data = [], population = 0) {}