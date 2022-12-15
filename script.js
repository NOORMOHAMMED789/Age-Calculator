let ageEl = document.getElementById("age");
let buttonEl = document.getElementById("btn");
let msgError = document.getElementById("msg");

let value, Year, month, date;
ageEl.addEventListener("change", function (e) {
  value = e.target.value.split("-");
  date = +value[0];
  month = +value[1];
  Year = +value[2];
});

buttonEl.addEventListener("click", function (e) {
  e.preventDefault();
  //!to prevent the default submission to the page

  let useryear = new Date().getFullYear() - Year;
  if (Year < useryear) alert("user birth year should be below current year");
  if (useryear < 0) useryear = 0;
  let usermonth = new Date().getMonth() - month;
  if (usermonth < 0) usermonth = 0;
  let userdate = Math.abs(new Date().getDate() - date);
  let hrs = new Date().getHours();
  let min = new Date().getMinutes();
  let sec = new Date().getSeconds();

  let yearEl = document.createElement("h1");
  yearEl.innerHTML = `Your current age is ${useryear} year ${usermonth} month ${userdate} days ${hrs} hours ${min} minutes ${sec} seconds`;
  document.body.appendChild(yearEl);
});
