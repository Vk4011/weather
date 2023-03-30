




// const apiKey ="851dc5d5c170bf755736275577e05553";
// const apiUrl =" https://api.openweathermap.org/data/2.5/weather?units=metric";

// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");
// const weatherIcon = document.querySelector("weather-icon");


// async function checkWeather(city){

//     const response = await fetch(apiUrl +city+`&appid=${apiKey}`);

//     if(response.status == 404 ){
//       document.querySelector(".error").style.display = "block";
//       document.querySelector(".weather").style.display = "none";
//     }
    
//     else{

//       var data = await response.json();
    


   
//       document.querySelector(".city").innerHtml = data.name;
//       document.querySelector(".temp").innerHtml = Math.round(data.main.temp)  + "°c";
//       document.querySelector(".humidity").innerHtml = data.main.humidity + "%";
//       document.querySelector(".wind").innerHtml = data.wind.speed + "km/h";
  
  
//       if(data.weather[0].main == "Clouds"){
//         weatherIcon.src = "cloud.png ";
//       }
//       else if(data.weather[0].main == "clear"){
//         weatherIcon.src  =  "clear-sky.png";
  
//       }
//       else if(data.weather[0].main == "Rain"){
//         weatherIcon.src ="heavy-rain.png";
  
//       }
//       else if(data.weather[0].main == "Drizzle"){
//         weatherIcon.src = "fog.png";
//       }
  
//       document.querySelector(".weather").getElementsByClassName.display = "block";
//       document.querySelector(".error").style.display = "none";
  

//     }

    
    
//    }

// searchBtn.addEventListener("click" , ()=>{
//     checkWeather(searchBox.value );
// })










const apiKey ="851dc5d5c170bf755736275577e05553";
const apiUrl =" https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
  const response = await fetch(apiUrl +city+`&appid=${apiKey}` );
  if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    
  }
  else{

    
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  if(data.weather[0].main == "Clouds"){
  weatherIcon.src = "images/cloud.png ";
  }
  else if(data.weather[0].main == "Clear"){
  weatherIcon.src  =  "images/clear-sky.png";
  }
  else if(data.weather[0].main == "Rain"){
  weatherIcon.src ="images/heavy-rain.png";
  }
  else if(data.weather[0].main == "Drizzle"){
  weatherIcon.src = "images/fog.png";
  }
     
  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display = "none";
}


}

searchBtn.addEventListener("click" , ()=> {
  checkWeather(searchBox.value);
})


