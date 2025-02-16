import { LightningElement } from 'lwc';

export default class HelloUniverse extends LightningElement {
    userName = 'Aman';

    handleChange(event){
        this.userName = event.target.value;
    }
}