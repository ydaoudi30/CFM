import { AddressModel } from './address.model';

export class ContactModel{
    id: number = 0;
    name: string = '';
    surname: string = '';
    birthday: string = '';
    address: AddressModel[] = [];
}