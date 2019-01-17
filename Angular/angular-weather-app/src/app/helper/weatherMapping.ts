export default (weather) => {
  let mappedWeatherName = '';
  switch (weather) {
    case '01d' || '01n':
      mappedWeatherName = 'sunny';
      break;
    case '02d' || '02n':
      mappedWeatherName = 'partly-cloudy';
      break;
    case '03d' || '03n':
      mappedWeatherName = 'cloudy';
      break;
    case '04d' || '04n':
      mappedWeatherName = 'broken-clouds';
      break;
    case '09d' || '09n':
      mappedWeatherName = 'shower-rain';
      break;
    case '10d' || '10n':
      mappedWeatherName = 'rainy';
      break;
    case '11d' || '11n':
      mappedWeatherName = 'thunderstorm';
      break;
    case '13d' || '13n':
      mappedWeatherName = 'snow';
      break;
    case '50d' || '50n':
      mappedWeatherName = 'sunny';
      break;
    default:
      mappedWeatherName = "sunny";
  }

  return mappedWeatherName;
}