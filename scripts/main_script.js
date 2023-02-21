const APP_ID = '932e77f80b62ba159071dd5ee59f5b41';

function getWeatherData(pos) {
    const crd = pos.coords;
    
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=' + crd.latitude + '&longitude=' + crd.longitude);

    xhr.send();
    xhr.onload = function(){
        let response = JSON.parse(xhr.response);
        let current_weather = response.current_weather;

        let temperature = document.getElementsByClassName('temperature')[0];
        temperature.innerText = current_weather.temperature + ' C°';

        let wind_speed = document.getElementsByClassName('speed')[0];
        wind_speed.innerText = current_weather.windspeed + ' m/s';

        let wind_direction = document.getElementsByClassName('direction')[0];
        const direction = current_weather.winddirection;
        let direction_text = '';
        
        if (direction > 10 && direction < 80){
            direction_text = 'Northeast';
        }
        else if(direction > 100 && direction < 170){
            direction_text = 'Southeast';
        }
        else if(direction > 190 && direction < 260){
            direction_text = 'Southwest';
        }
        else if(direction > 280 && direction < 350){
            direction_text = 'Northwest';
        }
        else if(direction >= 350 && direction <= 10){
            direction_text = 'North';
        }
        else if(direction >= 80 && direction <= 100){
            direction_text = 'East';
        }
        else if(direction >= 170 && direction <= 190){
            direction_text = 'South';
        }
        else if(direction >= 260 && direction <= 280){
            direction_text = 'West';
        }

        wind_direction.innerText = direction_text;

        var weather_icon = document.getElementsByClassName('weather-icon')[0];
        const weather_code = current_weather.weathercode;
        console.log(weather_icon);
        console.log(weather_code);

        let weather_icon_src = '';

        switch (weather_code){
            case 0:
                weather_icon_src = './assets/sunny.svg';
                break;
            case 1:
                weather_icon_src = './assets/cloudy.svg';
                break;
            case 2:
                weather_icon_src = './assets/cloudy.svg';
                break;
            case 3:
                weather_icon_src = './assets/cloudy.svg';
                break;
            case 61:
                weather_icon_src = './assets/thunderstorm.svg';
                break;
            case 63:
                weather_icon_src = './assets/thunderstorm.svg';
                break;
            case 65:
                weather_icon_src = './assets/thunderstorm.svg';
                break;
            case 80:
                weather_icon_src = './assets/thunderstorm.svg';
                break;
            case 81:
                weather_icon_src = './assets/thunderstorm.svg';
                break;
            case 82:
                weather_icon_src = './assets/thunderstorm.svg';
                break;
            case 71:
                weather_icon_src = './assets/cloudy_snowing.svg';
                break;
            case 73:
                weather_icon_src = './assets/cloudy_snowing.svg';
                break;
            case 75:
                weather_icon_src = './assets/cloudy_snowing.svg';
                break;
            case 85:
                weather_icon_src = './assets/cloudy_snowing.svg';
                break;
            case 86:
                weather_icon_src = './assets/cloudy_snowing.svg';
                break;
        }
        console.log(weather_icon_src);
        weather_icon.src = weather_icon_src;
    }
}

function error(){
    alert('I can not to get your geoposition :(');
}

function getCurrentPosition(){
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };
    navigator.geolocation.getCurrentPosition(getWeatherData, error, options);
}

document.addEventListener('DOMContentLoaded', getCurrentPosition);