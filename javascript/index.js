function updateTime() {
  //Melbourne
  let melbourne = document.querySelector("#melbourne");
  if (melbourne) {
    let melbourneDate = melbourne.querySelector(".date");
    let melbourneTime = melbourne.querySelector(".time");
    let melbourneCurrentTime = moment().tz("Australia/Melbourne");

    melbourneDate.innerHTML = melbourneCurrentTime.format("dddd, MMM DD, YYYY");
    melbourneTime.innerHTML = melbourneCurrentTime.format(
      "hh:mm:ss [<small>] A[</small>]"
    );
  }

  //London
  let london = document.querySelector("#london");
  if (london) {
    let londonDate = london.querySelector(".date");
    let londonTime = london.querySelector(".time");
    let londonCurrentTime = moment().tz("Europe/London");

    londonDate.innerHTML = londonCurrentTime.format("dddd, MMM DD, YYYY");
    londonTime.innerHTML = londonCurrentTime.format(
      "hh:mm:ss [<small>] A[</small>]"
    );
  }

  //New York
  let newYork = document.querySelector("#new-york");
  if (newYork) {
    let newYorkDate = newYork.querySelector(".date");
    let newYorkTime = newYork.querySelector(".time");
    let newYorkCurrentTime = moment().tz("America/New_York");

    newYorkDate.innerHTML = newYorkCurrentTime.format("dddd, MMM DD, YYYY");
    newYorkTime.innerHTML = newYorkCurrentTime.format(
      "hh:mm:ss [<small>] A[</small>]"
    );
  }
}

function showCity(event) {
  let timeZone = event.target.value;
  if (timeZone.length > 0) {
    if (timeZone === "current") {
      timeZone = moment.tz.guess();
    }
    let cityName = timeZone.replace("_", " ").split("/")[1];
    let showDate = moment().tz(timeZone);
    let newCity = document.querySelector("#cityList");

    newCity.innerHTML = `<div class="new-city-element">
      <div class="newCity">${cityName}</div>
        <div class="time-details">
            <div class="time">${showDate.format(
              "hh:mm:ss [<small>] A[</small>]"
            )}</div>
            <div class="date">${showDate.format("dddd, MMM DD, YYYY")}</div>
        </div>
    </div>
    <a class="homePage" href="index.html"> Go Back</a>
    `;
  }
  setInterval(() => {
    showCity(event);
  }, 1000);
}

updateTime();
setInterval(updateTime, 1000);

let selectCity = document.querySelector("#city-input-form");
selectCity.addEventListener("change", showCity);
