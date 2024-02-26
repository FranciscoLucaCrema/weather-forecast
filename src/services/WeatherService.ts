import { IInformation } from "@/models/IInformation";

class WeatherService {
  private readonly url: string;

  constructor() {
    this.url = `${process.env.API_URL_PARAMS}?key=${process.env.WEATHER_API_KEY}`;
  }

  async getWeather(city: string, days: number): Promise<IInformation | null> {
    /*  const url = `${process.env.API_URL_PARAMS}?key=${process.env.WEATHER_API_KEY}`; */
    const response = await fetch(`${this.url}&q=${city}&days=${days}`).then(
      async (res) => {
        if (res.ok) return await res.json();
        else return null;
      }
    );
    return response;
  }
}

export default WeatherService;
