export interface IFormula {
  parameters: IParameters[];
  id: number;
  uuid: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  formula?: string;
}


export interface IParameters {
  id: number,
  validation: IValidation;
  default: string;
  name: string;
  label: string;
}

export interface IValidation {
  min: number;
  max: number;
  required: boolean;
  readonly: boolean;
  params: string[];
}