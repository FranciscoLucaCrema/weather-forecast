import { IForecastDay, IInformation } from "@/models/IInformation";

class WeatherService {
  private readonly url: string;

  constructor() {
    this.url = `${process.env.API_URL_PARAMS}?key=${process.env.WEATHER_API_KEY}`;
  }

  async getWeather(city: string): Promise<IInformation | null> {
    /*  const url = `${process.env.API_URL_PARAMS}?key=${process.env.WEATHER_API_KEY}`; */
    const response = await fetch(`${this.url}&q=${city}`).then(async (res) => {
      if (res.ok) return await res.json();
      else return null;
    });
    return response;
  }

  async getMockDays(days: number): Promise<IForecastDay[] | null> {
    try {
      const response = await fetch("./src/mock.json");
      if (response.ok) {
        const data = await response.json();
        const formattedData = data.slice(0, days);
        return formattedData as IForecastDay[];
      } else {
        throw new Error("Error al obtener los datos del mock");
      }
    } catch (error) {
      return null;
    }
  }
}

export default WeatherService;
