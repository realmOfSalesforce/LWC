public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
        return [Select id, name from Account];
    }
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountDetail(Id accountId){
        return [Select id, name from Account where id = :accountId];
    }
}