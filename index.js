let apiKey="ca44d1ae7744258acf7128c94af7095f"
let apiUrl="https://api.openweathermap.org/data/2.5/weather?q=Miami"

let forecastUrl="api.openweathermap.org/data/2.5/forecast?q=Miami"

async function weatherCheck(){

  let response = await fetch(apiUrl + `&appid=${apiKey}&units=imperial`)
  let data =await response.json()
  console.log(data)
  document.querySelector('.tempnow').innerHTML = "Temperature: " + data.main.temp + " °F"
  document.querySelector('.windnow').innerHTML ="Wind Speed: "+ data.wind.speed + " MPH"
  document.querySelector('.humiditynow').innerHTML ="Humidity: "+ data.main.humidity + " %"
  return data
}

async function forecast(){

  let response = await fetch(forecastUrl + `&appid=${apiKey}&units=imperial`)
  let data =await response.json()
  console.log(data)
  document.querySelector('#').innerHTML = 
  document.querySelector('#').innerHTML = "Temperature: " + data.main.temp + " °F"
  document.querySelector('#').innerHTML ="Wind Speed: "+ data.wind.speed + " MPH"
  document.querySelector('#').innerHTML ="Humidity: "+ data.main.humidity + " %"
  return data
}

weatherCheck()

