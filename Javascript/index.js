function updateTime() {
  // Kyzyl
  let kyzylElement = document.querySelector("#kyzyl");
  if (kyzylElement) {
    let kyzylDateElement = kyzylElement.querySelector(".date");
    let kyzylTimeElement = kyzylElement.querySelector(".time");
    let kyzylTime = moment().tz("Asia/Krasnoyarsk");

    kyzylDateElement.innerHTML = kyzylTime.format("MMMM Do YYYY");
    kyzylTimeElement.innerHTML = kyzylTime.format(
      "h:mm:ss [<small>]A[</small>]",
    );
  }

  // Amsterdam
  let amsterdamElement = document.querySelector("#amsterdam");
  if (amsterdamElement) {
    let amsterdamDateElement = amsterdamElement.querySelector(".date");
    let amsterdamTimeElement = amsterdamElement.querySelector(".time");
    let amsterdamTime = moment().tz("Europe/Amsterdam");

    amsterdamDateElement.innerHTML = amsterdamTime.format("MMMM Do YYYY");
    amsterdamTimeElement.innerHTML = amsterdamTime.format(
      "h:mm:ss [<small>]A[</small>]",
    );
  }

  // Edinburgh
  let edinburghElement = document.querySelector("#edinburgh");
  if (edinburghElement) {
    let edinburghDateElement = edinburghElement.querySelector(".date");
    let edinburghTimeElement = edinburghElement.querySelector(".time");
    let edinburghTime = moment().tz("Europe/London");

    edinburghDateElement.innerHTML = edinburghTime.format("MMMM Do YYYY");
    edinburghTimeElement.innerHTML = edinburghTime.format(
      "h:mm:ss [<small>]A[</small>]",
    );
  }

  // Boston
  let bostonElement = document.querySelector("#boston");
  if (bostonElement) {
    let bostonDateElement = bostonElement.querySelector(".date");
    let bostonTimeElement = bostonElement.querySelector(".time");
    let bostonTime = moment().tz("America/New_York");

    bostonDateElement.innerHTML = bostonTime.format("MMMM Do YYYY");
    bostonTimeElement.innerHTML = bostonTime.format(
      "h:mm:ss [<small>]A[</small>]",
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (!cityTimeZone) {
    return;
  }

  let cityName = "";
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
    cityName = cityTimeZone.replace("_", " ").split("/").pop();
  } else {
    cityName = event.target.options[event.target.selectedIndex].text;
  }

  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format("A")}</small></div>
    </div>
    <a href="index.html">All cities</a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
