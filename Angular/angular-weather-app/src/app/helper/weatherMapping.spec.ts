import mapWeatherHelper from './weatherMapping';

describe('WeatherMapping', () => {
  describe('should map all weather icons correctly - for daily icon codes', () => {
    it('maps sunny weather by day', () => {
      expect(mapWeatherHelper('01d')).toBe('sunny');
    });
    it('maps partly cloudy weather', () => {
      expect(mapWeatherHelper('02d')).toBe('partly-cloudy');
    });
    it('maps cloudy weather', () => {
      expect(mapWeatherHelper('03d')).toBe('cloudy');
    });
    it('maps broken clouds weather', () => {
      expect(mapWeatherHelper('04d')).toBe('broken-clouds');
    });
    it('maps shower rain weather', () => {
      expect(mapWeatherHelper('09d')).toBe('shower-rain');
    });
    it('maps rainy weather', () => {
      expect(mapWeatherHelper('10d')).toBe('rainy');
    });
    it('maps thunderstorm weather', () => {
      expect(mapWeatherHelper('11d')).toBe('thunderstorm');
    });
    it('maps snow weather', () => {
      expect(mapWeatherHelper('13d')).toBe('snow');
    });
    it('maps mist weather', () => {
      expect(mapWeatherHelper('50d')).toBe('mist');
    });
    it('maps sunny weather as DEFAULT', () => {
      expect(mapWeatherHelper('xxx')).toBe('sunny');
    });
  });
});
