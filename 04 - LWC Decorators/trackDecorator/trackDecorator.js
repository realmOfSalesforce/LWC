import { LightningElement } from 'lwc';

export default class TrackDecorator extends LightningElement {
    person = {name : 'John', age: 25}
    

    updateAge(){
        //this.person.age = 30; //track is required
        this.person = {name: 'Aman', age: 30}; //track is not required because we are directly reassigning
    }
}