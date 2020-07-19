/**
 * Created by Rick Baker on 6/19/2020.
 */
({
	doInit: function (component) {

		var action = component.get("c.getItems");
		action.setCallback(this, function (response) {
			var state = response.getState();
			if (state == 'SUCCESS') {
				var items = component.get("v.items");
				var dbRecs = response.getReturnValue();

				component.set("v.items", dbRecs);

				console.log("campingListController.doInit.01.1 " + JSON.stringify("v.items", null, 2));
				console.log("campingListController.doInit.01.2 " + JSON.stringify(items, null, 2));
				console.log("campingListController.doInit.01.3 " + JSON.stringify(response.getReturnValue(), null, 2));
				console.log("campingListController.doInit.01.4 " + JSON.stringify(component.get("v.items"), null, 2));
			} else {
			}
		});

		$A.enqueueAction(action);
	},

	handleAddItem: function (component, event, helper) {
		console.log("campingListController.handleCreateItem.01.1 ...");

		var newItem = event.getParam("item");
		var action = component.get("c.saveItem");
		action.setParams({ "campingItem" : newItem });
		action.setCallback(this, function(response){
			var state  = response.getState();
			var dbRecs = response.getReturnValue();
			var items  = component.get("v.items");

			items.push(dbRecs);
			component.set("v.items", items);
			
			component.get("v.items")
			console.log('campingListController.handleCreateItem.01.3.1: ' + state);
			console.log('campingListController.handleCreateItem.01.3.2: ' + JSON.stringify(dbRecs, null, 2));
		});

		$A.enqueueAction(action);
	},

	handleUpdateItem: function (component, event, helper) {
		console.log("campingListController.handleUpdateItem.01.1 ...");

		var updateItem = event.getParam("item");
		var action = component.get("c.saveItem");
		action.setParams({ "campingItem": updateItem });
		action.setCallback(this, function (response) {
			var state = response.getState();
			var dbRecs = response.getReturnValue();
			console.log('campingListController.handleUpdateItem.01.3.1: ' + state);
			console.log('campingListController.handleUpdateItem.01.3.2: ' + JSON.stringify(dbRecs, null, 2));
		});

		$A.enqueueAction(action);
	}
})