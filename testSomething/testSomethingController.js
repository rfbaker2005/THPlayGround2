({
	handleSampleEvent : function(component, event, helper) {
		alert("This is my sample event.  Get over it!");
	},
	handleEventTestButton1 : function (component, event, helper) {
		alert("This is a click from: " + event.getSource().get("v.label"));
	},
	fetchAccounts : function(component, event, helper) {
        var action = component.get("c.fetchAccts");
        action.setParams({
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.acctList", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    }
})