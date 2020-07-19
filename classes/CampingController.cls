public with sharing class CampingController {

    private static final String SOQLQueryString = 'SELECT Name, Quantity__c, Price__c, Packed__c FROM Camping_Item__c';
 
    @AuraEnabled
    public static List<Camping_Item__c> getItems(){
        System.debug('CampingController.getItems.01.1...');
        return Database.query(SOQLQueryString);
    }

    @AuraEnabled
    public static Camping_Item__c saveItem(Camping_Item__c campingItem){
        System.debug('CampingController.saveItem.01.1 campingItem: ' + campingItem);
        if (campingItem != null) {
            upsert campingItem;
        }

        return campingItem;
    }
}