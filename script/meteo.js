const temp= document.querySelector("#temperature");
const humidity= document.querySelector("#humidity");
const lieu= document.querySelector("#lieu");
const climat= document.querySelector("#climat");
const hour= document.querySelector("#hour");
var icon=document.querySelector("#icon");
var date = new Date();
var news_title= document.querySelector(".news_title");
var news_descr= document.querySelector(".news_description");
var news_title2= document.querySelector(".news_title2");
var news_descr2= document.querySelector(".news_description2");
var news_title3= document.querySelector(".news_title3");
var news_descr3= document.querySelector(".news_description3");





    
// API weather
fetch(`https://api.openweathermap.org/data/2.5/weather?q=Paris,FR&appid=4bf558d6703a571b73fb51bc44fa5f70&units=metric&lang=fr`)
.then(res => res.json())
.then(data => {
    temperature.textContent=Math.floor(data.main.temp) +"°C";
    humidity.textContent=data.main.humidity +"%";
    lieu.innerHTML=`<a href='https://fr.wikipedia.org/wiki/${data.name}' target="_blank"> ${data.name} </a>`;
    climat.textContent= data.weather[0].description;
    icon.textContent= icon.setAttribute('src', "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
    hour.textContent= Math.floor((date.getHours()-2+data.timezone/60/60)) + ":" +date.getMinutes() +":" + date.getSeconds(); 
});  
// API News
fetch(`https://newsapi.org/v2/everything?q=Paris&sortBy=publishedAt&apiKey=5061607fa5594ccbb70f9b710b680cc9`)
.then(res => res.json())
.then(dataNews =>{
    console.log(dataNews);
    news_title.innerHTML=  `<a href="${dataNews.articles[3].url}" target="_blank">${dataNews.articles[3].title}</a>` ;
    news_descr.textContent= dataNews.articles[3].description ;
    news_title2.innerHTML=  `<a href="${dataNews.articles[4].url}" target="_blank">${dataNews.articles[4].title}</a>` ;
    news_descr2.textContent= dataNews.articles[4].description ;
    news_title3.innerHTML=  `<a href="${dataNews.articles[5].url}" target="_blank">${dataNews.articles[5].title}</a>` ;
    news_descr3.textContent= dataNews.articles[5].description ;
});




function requete(){
    var cityName=document.getElementById("cityName").value;
    var cityCountry= document.getElementById("cityCountry").value;
    console.log(cityName,cityCountry); 
    // API weather
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},${cityCountry}&appid=4bf558d6703a571b73fb51bc44fa5f70&units=metric&lang=fr`) 
        .then(res => res.json())
        .then(data => {
            console.log(data);
            temperature.textContent=Math.floor(data.main.temp)+"°C";
            humidity.textContent=data.main.humidity+"%";
            lieu.innerHTML=`<a href='https://fr.wikipedia.org/wiki/${data.name}' target="_blank"> ${data.name} </a>`;
            climat.textContent= data.weather[0].description;
            icon.textContent= icon.setAttribute('src', "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
            hour.textContent= Math.floor((date.getHours()-2+data.timezone/60/60)) + ":" +date.getMinutes() +":" + date.getSeconds();  
        }) 
    // API News
  
        
        fetch(`https://newsapi.org/v2/everything?q=${cityName}&sortBy=publishedAt&apiKey=5061607fa5594ccbb70f9b710b680cc9`)
        .then(res => res.json())
        .then(dataNews =>{
            console.log(dataNews);
        news_title.innerHTML=  `<a href="${dataNews.articles[3].url}" target="_blank">${dataNews.articles[3].title}</a>` ;
        news_descr.textContent= dataNews.articles[3].description ;
        news_title2.innerHTML=  `<a href="${dataNews.articles[4].url}" target="_blank">${dataNews.articles[4].title}</a>` ;
        news_descr2.textContent= dataNews.articles[4].description ;
        news_title3.innerHTML=  `<a href="${dataNews.articles[5].url}" target="_blank">${dataNews.articles[5].title}</a>` ;
        news_descr3.textContent= dataNews.articles[5].description ;
    });
    
       
}



