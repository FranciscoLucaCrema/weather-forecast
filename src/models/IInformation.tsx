export interface IInformation {
  location: ILocation;
  current: ICurrent;
}

interface ILocation {
  name: string;
  country: string;
  localtime: string;
}

interface ICurrent {
  temp_c: number;
  condition: ICondition;
  wind_dir: string;
}

interface ICondition {
  text: string;
  icon: string;
  code: number;
}
