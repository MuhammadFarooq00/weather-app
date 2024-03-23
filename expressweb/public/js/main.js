const submitbtn = document.getElementById("submitbtn");
const cityname = document.getElementById("cityname");
const temp = document.getElementById("temp");
const inp = document.getElementById("input");
let statusw = document.getElementById("tempstatus");
const getdata =async (event)=>{
    event.preventDefault();
    let cityval = inp.value;
    if(cityval === ""){
        cityname.innerText = "plz write the city name in search"
    }
    else{
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=2873a0505f0f19b7e42ea29fd4221952&units=metric`;
            let data = await fetch(url);
            let resdata = await data.json();
            cityname.innerText = `${resdata.name} ${resdata.sys.country}`;
            temp.innerText = `${resdata.main.temp}`;
            if(resdata.weather[0].main==="Clouds"){
                   statusw.innerHTML = '<i class="fa-solid fa-cloud"></i>'; 
            }
            if(resdata.weather[0].main==="Clear"){
                statusw.innerHTML = '<i class="fa-solid fa-sun"></i>'; 
         }
         if(resdata.weather[0].main==="Rain"){
            statusw.innerHTML = '<i class="fa-solid fa-cloud-rain"></i>'; 
     }
     else{
        statusw.innerHTML = '<i class="fa-solid fa-cloud-moon"></i>'; 
      }
            
        } catch (error) {
            cityname.innerText = "plz write exact city name "
        }
    }
    };

submitbtn.addEventListener("click", getdata )
