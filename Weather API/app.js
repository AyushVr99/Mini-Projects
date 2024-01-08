const key = "8870abbef6c43aeedc0b4d58adf64358";
const cityName = document.querySelector(".search input");
const btn = document.querySelector("button");


const getData = async(city)=>{
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;


    let promise = await fetch(baseUrl);
    console.log(promise);
    if(promise.status === 404)
    {
        document.querySelector(".wrongName").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else
    {
        let data = await promise.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + " °C";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

        document.querySelector(".wrongName").style.display = "none";
        document.querySelector(".weather").style.display = "block";

        if(data.weather[0].main == "Clouds")
        {
            document.querySelector(".weatherPic").src = "./images/clouds.png";
        }
        else if(data.weather[0].main == "Clear")
        {
            document.querySelector(".weatherPic").src = "./images/clear.png";
        }
        else if(data.weather[0].main == "Drizzle")
        {
            document.querySelector(".weatherPic").src = "./images/drizzle.png";
        }
        else if(data.weather[0].main == "Humidity")
        {
            document.querySelector(".weatherPic").src = "./images/humidity.png";
        }
        else if(data.weather[0].main == "Mist")
        {
            document.querySelector(".weatherPic").src = "./images/mist.png";
        }
        else if(data.weather[0].main == "Snow")
        {
            document.querySelector(".weatherPic").src = "./images/snow.png";
        }
        else if(data.weather[0].main == "Wind")
        {
            document.querySelector(".weatherPic").src = "./images/wind.png";
        }
    }
}

btn.addEventListener("click", ()=>{
    getData(cityName.value);
})