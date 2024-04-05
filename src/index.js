let key = "4d49b75508624cc6b29145523240204"; // api key
let temp = document.getElementById("temp");

let infoHolder = {
  temp_c: 0,
  temp_f: 0,
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
}; // info object, updates on switch

async function grabber(city) {
  try {
    let response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`,
      { mode: "cors" }
    );
    let data = await response.json();
    console.log(data);
    objectEditor(data);
  } catch (error) {
    console.log(error);
  }
} // api info grabber

function objectEditor(data) {
  infoHolder.temp_c = data.current.temp_c;
  infoHolder.temp_f = data.current.temp_f;
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
  // change to full sentence
  switch (data.current.wind_dir) {
    case "SW":
      infoHolder.wind_dir = "South West";
      break;
    case "SE":
      infoHolder.wind_dir = "South East";
      break;
    case "NW":
      infoHolder.wind_dir = "North West";
      break;
    case "NE":
      infoHolder.wind_dir = "North East";
      break;
  }
  infoHolder.wind_kph = data.current.wind_kph;
  infoHolder.wind_mph = data.current.wind_mph;
  infoHolder.last_updated = data.current.last_updated;
  console.log(infoHolder);
} // updates object

function DOMEditor() {} // updates DOM

grabber("Beirut");
