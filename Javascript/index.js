function updateTime() {
  //Kyzal
  let kyzalElement = document.querySelector("#kyzal");
  let kyzalDateElement = kyzalElement.querySelector(".date");
  let kyzalTimeElement = kyzalElement.querySelector(".time");
  let kyzalTime = moment().tz("Asia/Krasnoyarsk");

  kyzalDateElement.innerHTML = kyzalTime.format("MMMM Do YYYY");
  kyzalTimeElement.innerHTML = kyzalTime.format("h:mm:ss [<small>]A[</small>]");

  //Amsterdam
  let amsterdamElement = document.querySelector("#amsterdam");
  let amsterdamDateElement = amsterdamElement.querySelector(".date");
  let amsterdamTimeElement = amsterdamElement.querySelector(".time");
  let amsterdamTime = moment().tz("Europe/Amsterdam");

  amsterdamDateElement.innerHTML = amsterdamTime.format("MMMM Do YYYY");
  amsterdamTimeElement.innerHTML = amsterdamTime.format(
    "h:mm:ss [<small>]A[</small>]",
  );

  //Edinburgh
  let edinburghElement = document.querySelector("#edinburgh");
  let edinburghDateElement = edinburghElement.querySelector(".date");
  let edinburghTimeElement = edinburghElement.querySelector(".time");
  let edinburghTime = moment().tz("Europe/London");

  edinburghDateElement.innerHTML = edinburghTime.format("MMMM Do YYYY");
  edinburghTimeElement.innerHTML = edinburghTime.format(
    "h:mm:ss [<small>]A[</small>]",
  );

  //Boston
  let bostonElement = document.querySelector("#boston");
  let bostonDateElement = bostonElement.querySelector(".date");
  let bostonTimeElement = bostonElement.querySelector(".time");
  let bostonTime = moment().tz("America/New York");

  bostonDateElement.innerHTML = bostonTime.format("MMMM Do YYYY");
  bostonTimeElement.innerHTML = bostonTime.format(
    "h:mm:ss [<small>]A[</small>]",
  );
}

updateTime();
setInterval(updateTime, 1000);
