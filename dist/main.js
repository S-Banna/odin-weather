(()=>{const t=document.getElementById("temp");(async function(t){try{const t=await fetch("https://api.weatherapi.com/v1/current.json?key=4d49b75508624cc6b29145523240204&q=Beirut",{mode:"cors"});return await t.json()}catch(t){console.log(t)}})().then((e=>{t.innerHTML=e.current.temp_c+"°C"}))})();