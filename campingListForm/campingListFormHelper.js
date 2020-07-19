({
    createItem: function (component, newItem) {
        console.log("campingListFormHelper.createItem.01.1 newItem: " + JSON.stringify(newItem, null, 2));
        var createEvent = component.getEvent("addItem");
        
        createEvent.setParams({ "item" : newItem });
        createEvent.fire();

        // This is a hack.  Should send a message back to the form to clear out the form fields
        component.set(
            "v.newItem",
            {
                'sObjectType' : 'Camping_Item__c',
                'Name'        : '',
                'Quantity__c' : 0,
                'Price__c'    : 0,
                'Packed__c'   : false 
            });        
    }
})