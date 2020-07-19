public with sharing class AccountListController {
    @AuraEnabled
    public static List<Account> fetchAccts() {
        return [SELECT Id, Name, Industry FROM Account LIMIT 10];
    }
    
    @AuraEnabled
    public static Expense__c saveExpense(Expense__c expense) {
        // Perform isUpdateable() checking first, then
        upsert expense;
        return expense;
    }
}