let apiKey="ca44d1ae7744258acf7128c94af7095f"
let apiUrl="https://api.openweathermap.org/data/2.5/weather?q="

let forecastUrl="api.openweathermap.org/data/2.5/forecast?q="
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
  document.querySelector('#day1').innerHTML = 
  document.querySelector('#temp1').innerHTML = "Temperature: " + dataF.list.temp + " °F"
  document.querySelector('#wind1').innerHTML ="Wind Speed: "+ dataF.list.wind.speed + " MPH"
  document.querySelector('#humidity1').innerHTML ="Humidity: "+ dataF.list.humidity + " %"

  document.querySelector('#day2').innerHTML = 
  document.querySelector('#temp2').innerHTML = "Temperature: " + dataF.list.temp + " °F"
  document.querySelector('#wind2').innerHTML ="Wind Speed: "+ dataF.list.wind.speed + " MPH"
  document.querySelector('#humidity2').innerHTML ="Humidity: "+ dataF.list.humidity + " %"

  document.querySelector('#day3').innerHTML = 
  document.querySelector('#temp3').innerHTML = "Temperature: " + dataF.list.temp + " °F"
  document.querySelector('#wind3').innerHTML ="Wind Speed: "+ dataF.list.wind.speed + " MPH"
  document.querySelector('#humidity3').innerHTML ="Humidity: "+ dataF.list.humidity + " %"

  document.querySelector('#day4').innerHTML = 
  document.querySelector('#temp4').innerHTML = "Temperature: " + dataF.list.temp + " °F"
  document.querySelector('#wind4').innerHTML ="Wind Speed: "+ dataF.list.wind.speed + " MPH"
  document.querySelector('#humidity4').innerHTML ="Humidity: "+ dataF.list.humidity + " %"

  document.querySelector('#day5').innerHTML = 
  document.querySelector('#temp5').innerHTML = "Temperature: " + dataF.list.temp + " °F"
  document.querySelector('#wind5').innerHTML ="Wind Speed: "+ dataF.list.wind.speed + " MPH"
  document.querySelector('#humidity5').innerHTML ="Humidity: "+ dataF.list.humidity + " %"
  return data
}

searchBtn.addEventListener("click", () =>{
  weatherCheck();
  forecastUrl();
 
})





