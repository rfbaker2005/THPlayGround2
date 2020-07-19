({
    clickCreateItem: function (component, event, helper) {

        var validCampingItem = component.find('campingItemform').reduce(
            function (validSoFar, inputCmp) {
                // Displays error messages for invalid fields
                inputCmp.showHelpMessageIfInvalid();
                return validSoFar && inputCmp.get('v.validity').valid;
            }, true);

        if (validCampingItem) {
            console.log("campingListFormController.clickCreateItem.01.1 validCampingItem: BOO THERE");
            var newItem = component.get("v.newItem");
            console.log("campingListFormController.clickCreateItem.01.2 validCampingItem: " + JSON.stringify(newItem, null, 2));
            helper.createItem(component, newItem);
        }
    }
})