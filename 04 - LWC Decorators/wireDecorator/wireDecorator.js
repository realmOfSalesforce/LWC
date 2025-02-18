import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
import getAccountDetails from '@salesforce/apex/AccountController.getAccountDetail';
import {getRecord} from 'lightning/uiRecordApi';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';
import ACCOUNT_SOURCE_FIELD from '@salesforce/schema/Account.AccountSource';

export default class WireDecorator extends LightningElement {
    //fetch account records from salesforce
    /*accountList;
    @wire(getAccounts) accounts({data, error}){
        if(data){
            console.log('Data', JSON.stringify(data));
            this.accountList = data;
        }
        else if(error){
            console.log('Error fetching accounts', error);
        }
    }

    recordId = '001Qy00000ivcAXIAY';
    accountList;
    @wire(getAccountDetails,{accountId:'$recordId'}) accountDetail({data, error}){
        if(data){
            this.accountList=data;
        }
        else if(error){
            console.log('Error fetching accounts', error);
        }
    }*/

    //scenerio: we need to feth a account name, source by using record id
    accountDetail;
    recordId = '001Qy00000ivcAXIAY';
    @wire(getRecord,{recordId:'$recordId', fields:[ACCOUNT_NAME_FIELD, ACCOUNT_SOURCE_FIELD]}) 
    accounts({data,error}){
        if(data){
            this.accountDetail = data;
            console.log('Data', JSON.stringify(data));
        }
        else if(error){
            console.log('Error fetching accounts', error);
        }
    }
}