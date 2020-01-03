export interface BasePerson {
  id: number;
}
export interface IPerson extends BasePerson {
  name: string;
  lastName: string;
  age: number;
  children: IChildren;
}
export interface IParents {
  mother: string;
  father: string;
}

export interface IChildren {
  kidName: string;
}

