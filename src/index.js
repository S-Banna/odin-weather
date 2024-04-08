let key = "4d49b75508624cc6b29145523240204"; // api key
let locationSelector = document.getElementById("locationSelector");
let location = document.getElementById("location");
let note = document.getElementById("note");

// info object, updates on switch
let infoHolder = {
  temp_c: 0,
  feelslike_c: 0,
  temp_f: 0,
  feelslike_f: 0,
  condition: "error",
  icon: "error",
  is_day: "error",
  uv: 0,
  precip_in: 0,
  precip_mm: 0,
  gust_kph: 0,
  gust_mph: 0,
  humidity: 0,
  pressure_in: 0,
  pressure_mb: 0,
  wind_degree: 0,
  wind_dir: "error",
  wind_kph: 0,
  wind_mph: 0,
  last_updated: "error",
  average_day1_c: 0,
  average_day1_f: 0,
  average_day2_c: 0,
  average_day2_f: 0,
  day1_text: "error",
  day2_text: "error",
  day1_icon: "error",
  day2_icon: "error",
  country: "error",
  city: "error"
};

// api info grabber
async function grabber(city) {
  try {
    let response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`,
      { mode: "cors" }
    );
    let data = await response.json();
    let forecast =  await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=Beirut&days=3`, {mode: "cors"})
    let dataForecast = await forecast.json();
    note.textContent = "Text should be entered in the form: City, Country";
    objectEditor(data, dataForecast);
  } catch (error) {
    console.log(error);
    note.textContent = "No location found";
  }
}

// updates object
function objectEditor(data, dataForecast) {
  // current
  // day
  infoHolder.temp_c = data.current.temp_c;
  infoHolder.feelslike_c = data.current.feelslike_c;
  infoHolder.temp_f = data.current.temp_f;
  infoHolder.feelslike_f = data.current.feelslike_f;
  infoHolder.condition = data.current.condition.text;
  infoHolder.icon = data.current.condition.icon;
  // change to boolean
  if (data.current.is_day == 1) {
    infoHolder.is_day = true;
  }
  if (data.current.is_day == 0) {
    infoHolder.is_day = false;
  }
  infoHolder.uv = data.current.uv;
  infoHolder.precip_in = data.current.precip_in;
  infoHolder.precip_mm = data.current.precip_mm;
  infoHolder.gust_kph = data.current.gust_kph;
  infoHolder.gust_mph = data.current.gust_mph;
  infoHolder.humidity = data.current.humidity;
  infoHolder.pressure_in = data.current.pressure_in;
  infoHolder.pressure_mb = data.current.pressure_mb;
  infoHolder.wind_degree = data.current.wind_degree;
  infoHolder.wind_dir = data.current.wind_dir
  infoHolder.wind_kph = data.current.wind_kph;
  infoHolder.wind_mph = data.current.wind_mph;
  infoHolder.last_updated = data.current.last_updated;
  // days after
  infoHolder.average_day1_c = dataForecast.forecast.forecastday[1].day.avgtemp_c;
  infoHolder.average_day1_f = dataForecast.forecast.forecastday[1].day.avgtemp_f;
  infoHolder.average_day2_c = dataForecast.forecast.forecastday[2].day.avgtemp_c;
  infoHolder.average_day2_f = dataForecast.forecast.forecastday[2].day.avgtemp_f;
  infoHolder.day1_text = dataForecast.forecast.forecastday[1].day.condition.text;
  infoHolder.day1_icon = dataForecast.forecast.forecastday[1].day.condition.icon;
  infoHolder.day2_text = dataForecast.forecast.forecastday[2].day.condition.text;
  infoHolder.day2_icon = dataForecast.forecast.forecastday[2].day.condition.icon;
  //location
  infoHolder.country = data.location.country;
  infoHolder.city = data.location.name;
  console.log(infoHolder);
}

locationSelector.addEventListener("click", () => {
  let now = location.value;
  location.value = "";
  let arr = now.split(",");
  grabber(arr[0]);
})