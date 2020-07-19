/**
 * Created by Rick Baker on 6/14/2020.
 */
({
    // Load expenses from Salesforce
    doInit: function(component, event, helper) {
        var action = component.get("c.getExpenses");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.expenses", response.getReturnValue());
                console.log("expensesController.doInit.01.1.1 itemList: " + JSON.stringify(component.get("v.expenses", null, 2)));
                console.log("expensesController.doInit.01.1.2 itemList: " + JSON.stringify(response.getReturnValue(), null, 2));
            } else {
                console.log("Failed with state: " + state);
            }
			// console.lo("expensesController.doInit.01.2 itemList: " + JSON.stringify(component.get("v.expenses"), null, 2));
        });
        // Send action off to be executed
        $A.enqueueAction(action);
    },

    handleCreateExpense: function (component, event, helper) {
        var expense = event.getParam("expense");
        console.log("expensesController.handleCreateExpense.01.1 expense: " + JSON.stringify(expense, null, 2));
        helper.createExpense(component, expense);
    },

    handleUpdateExpense: function (component, event, helper) {
        var updatedExp = event.getParam("expense");
        console.log("expensesController.handleUpdateExpense.01.1 updatedExp: " + JSON.stringify(updatedExp, null, 2));
        helper.updateExpense(component, updatedExp);
    }
});