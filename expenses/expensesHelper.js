/**
 * Created by Rick Baker on 6/15/2020.
 */
({
    saveExpense: function (component, expense, callback) {
        console.log("expensesHelper.saveExpense.01.1 expense: " + JSON.stringify(expense));

        var action = component.get("c.saveExpense");
        action.setParams({ "expense": expense });
        if (callback) {
            action.setCallback(this, callback);
        }
        $A.enqueueAction(action);
    },

    createExpense: function (component, expense) {
        console.log("expensesHelper.createExpense.01.1 expense: " + JSON.stringify(expense), null, 2);

        this.saveExpense(component, expense, function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var expenses = component.get("v.expenses");
                expenses.push(response.getReturnValue());
                component.set("v.expenses", expenses);

                console.log("expensesHelper.createExpense.01.2 expense: " + JSON.stringify(expenses), null, 2);
            }
        });
    },

    updateExpense: function (component, expense) {
        console.log("expensesHelper.updateExpense.01.1 expense: " + JSON.stringify(expense), null, 2);

        this.saveExpense(component, expense);
    }
});