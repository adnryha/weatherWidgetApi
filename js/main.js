let cityName = prompt('Введіть місто (Львів, Київ...)');
console.log(cityName);

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=16b6754ad8952f29340c4a77785bfb10&lang=uk`)
  .then(function (resp) { return resp.json() })
  .then(function (data) {
    document.querySelector('.package-name').innerHTML = data.name;
    document.querySelector('.price').innerHTML = '<img src="https://img.icons8.com/windows/32/26e07f/temperature-high.png"/>' + ' ' + Math.round(data.main.temp) + '&deg;';
    document.querySelector('.pressure').innerHTML = '<img src="https://img.icons8.com/material-sharp/32/26e07f/pressure.png"/>' + " " + data.main.pressure;
    document.querySelector('.humidity').innerHTML = '<img src="https://img.icons8.com/ios-filled/50/26e07f/humidity.png"/>' + ' ' + data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = '<img src="https://img.icons8.com/ios/50/26e07f/windsock.png"/>' + ' ' + data.wind.speed + 'м/с';
    document.querySelector('.wind_deg').innerHTML = '<img src="https://img.icons8.com/ios-filled/50/26e07f/azimuth--v5.png"/>' + ' ' + data.wind.deg + '&deg;';
    document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/w/${data.weather[0]['icon']}.png">`;
    document.querySelector('.disclaimer').innerHTML = 'Опис:' + 'Сьогодні в ' + ' ' + cityName + ' ' + 'очікуються' + ' ' + data.weather[0]['description'] + '.';

  })
  .catch(function () {
    alert('Вибачте, запит тимчасово не доступний')
  });
