const key = "4d49b75508624cc6b29145523240204";
const temp = document.getElementById("temp");

async function grabber(city) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`,
      { mode: "cors" }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

grabber("Beirut").then((data) => {temp.innerHTML = data.current.temp_c + "°C"})