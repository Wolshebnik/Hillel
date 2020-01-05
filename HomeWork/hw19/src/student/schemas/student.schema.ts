// tslint:disable-next-line:no-var-requires
// const mongoose: any = require('mongoose');
import * as mongoose from 'mongoose';


export const studentSchema: any = new mongoose.Schema({
    name: String,
    lastName: String,
    groupID: String
});

// tslint:disable-next-line:interface-name
export interface Student {
    readonly name: string;
    readonly lastName: string;
    readonly groupID: string;
}

export interface ITicket extends Document, Student {
}
