// tslint:disable-next-line:no-var-requires
// const mongoose: any = require('mongoose');
import * as mongoose from 'mongoose';

export const studentSchema: any = new mongoose.Schema({
    name: String,
    lastName: String,
    group: Number,
    school: Number,
});

// tslint:disable-next-line:interface-name
export interface Student {
    readonly name: string;
    readonly lastName: string;
    readonly group: number;
    readonly school: number;
}

export interface ITicket extends Document, Student {
}
