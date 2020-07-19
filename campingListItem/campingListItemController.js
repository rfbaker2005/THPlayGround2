({
    clickPacked : function(component, event, helper) {

        var item        = component.get("v.item");
        var updateEvent = component.getEvent("updateItem");

        console.log("campingListItemController.clickPacked.01.1 " + JSON.stringify(item, null, 2));
        console.log("campingListItemController.clickPacked.01.2 " + (updateEvent != null));

        updateEvent.setParams({ "item": item });
        updateEvent.fire();
    }
})