export interface Formula {
    parameters: IParam [];
    id: number;
    uuid: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    formula: string;
}

  export interface IParam {
    id: number;
    validation: IValidation,
    default: string;
    name: string;
    label: string;
}

export interface IValidation {
    min: number;
    max: number;
    required: boolean;
    readonly : boolean;
    params: boolean;

}

export interface BodyValue {
    value: number;
}
// "parameters": [
//     {
//         "id": 703,
//         "validation": {
//             "min": 0,
//             "max": 100,
//             "required": null,
//             "readonly": null,
//             "params": null
//         },
//         "default": "10",
//         "name": "WF",
//         "label": "Waste Factor"
//     },
//