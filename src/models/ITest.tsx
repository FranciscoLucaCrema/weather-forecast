export interface ITest {
  location: ILocation;
  current: ICurrent;
}

interface ILocation {
  name: string;
  region: string;
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
