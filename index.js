let apiKey="ca44d1ae7744258acf7128c94af7095f"
let apiUrl="https://api.openweathermap.org/data/2.5/weather?"

async function weatherCheck(){
  let response = await fetch(apiUrl + `&appid=${apiKey}`)
  let data =await response.json()
  console.log(data)
}

weatherCheck()

