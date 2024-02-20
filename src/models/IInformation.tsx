export interface IInformation {
  location: ILocation;
  current: ICurrent;
  forecast: IForecast;
}

interface ILocation {
  name: string;
  country: string;
  localtime: string;
}

interface ICurrent {
  temp_c: number;
  condition: ICondition;
}

interface IForecast {
  forecastday: Array<IForecastDay>;
}

interface IForecastDay {
  date: string;
  day: IDay;
}

interface IDay {
  maxtemp_c: number;
  mintemp_c: number;
  condition: ICondition;
}

interface ICondition {
  text: string;
  icon: string;
}
