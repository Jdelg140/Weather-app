let apiKey="ca44d1ae7744258acf7128c94af7095f"
let apiUrl="https://api.openweathermap.org/data/2.5/weather?q="

let forecastUrl="https://api.openweathermap.org/data/2.5/forecast?q="
const searchBtn = document.querySelector(".search-btn")
const city= document.querySelector(".city-input")

async function weatherCheck(){
  let response = await fetch(apiUrl + `${city.value}` + `&appid=${apiKey}&units=imperial`)
  let data =await response.json()
  console.log(data)
  document.querySelector('.tempnow').innerHTML = "Temperature: " + data.main.temp + " °F"
  document.querySelector('.windnow').innerHTML ="Wind Speed: "+ data.wind.speed + " MPH"
  document.querySelector('.humiditynow').innerHTML ="Humidity: "+ data.main.humidity + " %"
  return data
}

async function forecast(){

  let response = await fetch(forecastUrl + `${city.value}` + `&appid=${apiKey}&units=imperial`)
  let dataF =await response.json()
  console.log(dataF)
  
  document.querySelector('#temp1').innerHTML = "Temperature: " + dataF.list[0].main.temp + " °F"
  document.querySelector('#wind1').innerHTML ="Wind Speed: "+ dataF.list[0].wind.speed + " MPH"
  document.querySelector('#humidity1').innerHTML ="Humidity: "+ dataF.list[0].main.humidity + " %"

 
  document.querySelector('#temp2').innerHTML = "Temperature: " + dataF.list[1].main.temp + " °F"
  document.querySelector('#wind2').innerHTML ="Wind Speed: "+ dataF.list[1].wind.speed + " MPH"
  document.querySelector('#humidity2').innerHTML ="Humidity: "+ dataF.list[1].main.humidity + " %"

 
  document.querySelector('#temp3').innerHTML = "Temperature: " + dataF.list[3].main.temp + " °F"
  document.querySelector('#wind3').innerHTML ="Wind Speed: "+ dataF.list[3].wind.speed + " MPH"
  document.querySelector('#humidity3').innerHTML ="Humidity: "+ dataF.list[3].main.humidity + " %"

  
  document.querySelector('#temp4').innerHTML = "Temperature: " + dataF.list[4].main.temp + " °F"
  document.querySelector('#wind4').innerHTML ="Wind Speed: "+ dataF.list[4].wind.speed + " MPH"
  document.querySelector('#humidity4').innerHTML ="Humidity: "+ dataF.list[4].main.humidity + " %"

  
  document.querySelector('#temp5').innerHTML = "Temperature: " + dataF.list[5].main.temp + " °F"
  document.querySelector('#wind5').innerHTML ="Wind Speed: "+ dataF.list[5].wind.speed + " MPH"
  document.querySelector('#humidity5').innerHTML ="Humidity: "+ dataF.list[5].main.humidity + " %"
  return dataF
}

searchBtn.addEventListener("click", () =>{
  weatherCheck();
  forecast();
 
})





