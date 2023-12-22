//Melbourne
function updateTime() {
  let melbourne = document.querySelector("#melbourne");
  let melbourneDate = melbourne.querySelector(".date");
  let melbourneTime = melbourne.querySelector(".time");
  let melbourneCurrentTime = moment().tz("Australia/Melbourne");

  melbourneDate.innerHTML = melbourneCurrentTime.format("dddd, MMM DD, YYYY");
  melbourneTime.innerHTML = melbourneCurrentTime.format(
    "hh:mm:ss [<small>] A[</small>]"
  );

  //London
  let london = document.querySelector("#london");
  let londonDate = london.querySelector(".date");
  let londonTime = london.querySelector(".time");
  let londonCurrentTime = moment().tz("Europe/London");

  londonDate.innerHTML = londonCurrentTime.format("dddd, MMM DD, YYYY");
  londonTime.innerHTML = londonCurrentTime.format(
    "hh:mm:ss [<small>] A[</small>]"
  );

  //New York
  let newYork = document.querySelector("#new-york");
  let newYorkDate = newYork.querySelector(".date");
  let newYorkTime = newYork.querySelector(".time");
  let newYorkCurrentTime = moment().tz("America/New_York");

  newYorkDate.innerHTML = newYorkCurrentTime.format("dddd, MMM DD, YYYY");
  newYorkTime.innerHTML = newYorkCurrentTime.format(
    "hh:mm:ss [<small>] A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
