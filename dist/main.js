(()=>{let e="4d49b75508624cc6b29145523240204",r=(document.getElementById("locationSelector"),{temp_c:0,feelslike_c:0,temp_f:0,feelslike_f:0,condition:"error",icon:"error",is_day:"error",uv:0,precip_in:0,precip_mm:0,gust_kph:0,gust_mph:0,humidity:0,pressure_in:0,pressure_mb:0,wind_degree:0,wind_dir:"error",wind_kph:0,wind_mph:0,last_updated:"error",average_day1_c:0,average_day1_f:0,average_day2_c:0,average_day2_f:0,day1_text:"error",day2_text:"error",day1_icon:"error",day2_icon:"error"});!async function(t){try{let t=await fetch(`https://api.weatherapi.com/v1/current.json?key=${e}&q=Beirut`,{mode:"cors"}),a=await t.json(),c=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${e}&q=Beirut&days=3`,{mode:"cors"});!function(e,t){switch(r.temp_c=e.current.temp_c,r.feelslike_c=e.current.feelslike_c,r.temp_f=e.current.temp_f,r.feelslike_f=e.current.feelslike_f,r.condition=e.current.condition.text,r.icon=e.current.condition.icon,1==e.current.is_day&&(r.is_day=!0),0==e.current.is_day&&(r.is_day=!1),r.uv=e.current.uv,r.precip_in=e.current.precip_in,r.precip_mm=e.current.precip_mm,r.gust_kph=e.current.gust_kph,r.gust_mph=e.current.gust_mph,r.humidity=e.current.humidity,r.pressure_in=e.current.pressure_in,r.pressure_mb=e.current.pressure_mb,r.wind_degree=e.current.wind_degree,e.current.wind_dir){case"SW":r.wind_dir="South West";break;case"SE":r.wind_dir="South East";break;case"NW":r.wind_dir="North West";break;case"NE":r.wind_dir="North East"}r.wind_kph=e.current.wind_kph,r.wind_mph=e.current.wind_mph,r.last_updated=e.current.last_updated,r.average_day1_c=t.forecast.forecastday[1].day.avgtemp_c,r.average_day1_f=t.forecast.forecastday[1].day.avgtemp_f,r.average_day2_c=t.forecast.forecastday[2].day.avgtemp_c,r.average_day2_f=t.forecast.forecastday[2].day.avgtemp_f,r.day1_text=t.forecast.forecastday[1].day.condition.text,r.day1_icon=t.forecast.forecastday[1].day.condition.icon,r.day2_text=t.forecast.forecastday[2].day.condition.text,r.day2_icon=t.forecast.forecastday[2].day.condition.icon,console.log(r)}(a,await c.json())}catch(e){console.log(e)}}()})();