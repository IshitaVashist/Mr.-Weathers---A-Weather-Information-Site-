    const apiKey="1a78702bba0a1db3066061055b7d4d56";
    const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


    const searchbox= document.querySelector(".search input");
    const searchbtn= document.querySelector(".search button");

    

   async function checkweather (city) {

        const response = await fetch (apiUrl + city + `&appid=${apiKey}`);

        if(response.status== 404){
            document.querySelector(".error").style.display="block"
        }
        else{
        var data = await response.json();
        console.log(data);

        const condition = data.weather[0].main;
        updateBackground(condition);

       document.querySelector(".city").innerHTML= data.name;
       document.querySelector(".temp").innerHTML= data.main.temp +"°C";
       document.querySelector(".condition").innerHTML= data.weather[0].main;
       document.querySelector(".feelslike").innerHTML= "Feels-like: "+ data.main.feels_like +"°C" ;
       document.querySelector(".mintemp").innerHTML = "Min-Temp: " + data.main.temp_min + "°C";
       document.querySelector(".maxtemp").innerHTML="Max-Temp:"+ data.main.temp_max+"°C";
       document.querySelector(".pressure").innerHTML= "Pressure:"+ data.main.pressure+"Pa";
       document.querySelector(".windspeed").innerHTML="Wind-Speed:"+ data.wind.speed+"km/hr";
       document.querySelector(".humidity").innerHTML="Humidity:"+ data.main.humidity+"g/m3";

}


function updateBackground(condition) {
    const element = document.querySelector('.card');
 
    switch (condition) {
        default:
            element.style.background = "url('images/default2.png') no-repeat center center";
            break;
        case 'Clear':
            element.style.background = "url('images/clear.webp') no-repeat center center";
            break;
        case 'Clouds':
            element.style.background = "url('images/cloudy.webp')  no-repeat center center ";
            break;
        case 'Rain':
            element.style.background = "url('images/rainy.webp') no-repeat center center";
            break;  
        case 'Snow':
            element.style.background = "url('images/snowy.webp') no-repeat center center";
            break;
        case 'Haze':
            element.style.background = "url('images/hazy.webp') no-repeat center center";
            break;   
        case 'Mist':
            element.style.background = "url('images/misty.png') no-repeat center center";
            break;      
       
 }   
 element.style.backgroundSize = 'cover';
};
   
}
searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value)
})




    