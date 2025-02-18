import { LightningElement } from 'lwc';

export default class ApiDecoratorParent extends LightningElement {
    handleClick(){
        this.template.querySelector('c-api-decorator-child').showAlert();
    }
}