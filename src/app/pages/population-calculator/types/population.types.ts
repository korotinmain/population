export type CalculationParams = {
  age: number,
  country: string;
  date: string;
  sex: string;
}

export interface RemainingInfoType extends CalculationParams {
  remaining_life_expectancy: number;
}
