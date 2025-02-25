import { LightningElement, track, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

export default class LoopAndRendering extends LightningElement {
    //redering properties
    //expression1 = false;
    //expression2 = true;

    /*@track contacts = [
        {id: 1, name: 'John Doe', email: 'john@example.com'},
        {id: 2, name: 'Jane Smith', email: 'jane@example.com'},
        {id: 3, name: 'Mike Johnson', email: 'mike@example.com'}
    ]
 
    accountList; 

    @wire(getAccounts)
    accounts({data, error}){
        if(data){
            this.accountList = data;
        }
        else if(error){
            console.log('Error', error);
        }
    }*/

        @track contacts = [
            {id: 1, name: 'John Doe', email: 'john@example.com'},
            {id: 2, name: 'Jane Smith', email: 'jane@example.com'},
            {id: 3, name: 'Mike Johnson', email: 'mike@example.com'}
        ]
}