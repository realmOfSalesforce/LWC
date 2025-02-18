import { LightningElement, api } from 'lwc';

export default class ApiDecoratorChild extends LightningElement {
    @api myName = 'Aman'; //default

    @api showAlert(){
        alert('Hello from Child Component');
    }
}