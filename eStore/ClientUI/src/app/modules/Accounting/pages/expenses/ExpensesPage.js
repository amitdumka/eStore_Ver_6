import React from "react";
import { Route } from "react-router-dom";
import { ExpensesLoadingDialog } from "./dialogs/LoadingDialog";
import { EditDialog } from "./dialogs/EditDialog";

import { DeleteDialog } from "./dialogs/DeleteDialog";

import { DeletesDialog } from "./dialogs/DeletesDialog";

import { FetchDialog } from "./dialogs/FetchDialog";
import { UpdateStateDialog } from "./dialogs/UpdateStateDialog";
import { UIProvider } from "./UIContext";
import { ExpensesCard } from "./ExpensesCard";

//Expense
//expense

export function ExpensesPage({ history }) {
  const expensesUIEvents = {
    newExpenseButtonClick: () => {
      history.push("/accouting/expense/expenses/new");
    },
    openEditExpenseDialog: (id) => {
      history.push(`/accouting/expense/expenses/${id}/edit`);
    },
    openDeleteExpenseDialog: (id) => {
      history.push(`/accouting/expense/expenses/${id}/delete`);
    },
    openDeleteExpensesDialog: () => {
      history.push(`/accouting/expense/expenses/deleteExpenses`);
    },
    openFetchExpensesDialog: () => {
      history.push(`/accouting/expense/expenses/fetch`);
    },
    openUpdateExpensesStatusDialog: () => {
      history.push("/accouting/expense/expenses/updateStatus");
    }
  }

  return (
    <UIProvider UIEvents={expensesUIEvents}>
      <ExpensesLoadingDialog />
      <Route path="/accouting/expense/expenses/new">
        {({ history, match }) => (
          <EditDialog
            show={match != null}
            onHide={() => {
              history.push("/accouting/expense/expenses");
            }}
          />
        )}
      </Route>
      <Route path="/accouting/expense/expenses/:id/edit">
        {({ history, match }) => (
          <EditDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/accouting/expense/expenses");
            }}
          />
        )}
      </Route>
      <Route path="/accouting/expense/expenses/deleteExpenses">
        {({ history, match }) => (
          <DeletesDialog
            show={match != null}
            onHide={() => {
              history.push("/accouting/expense/expenses");
            }}
          />
        )}
      </Route>
      <Route path="/accouting/expense/expenses/:id/delete">
        {({ history, match }) => (
          <DeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/accouting/expense/expenses");
            }}
          />
        )}
      </Route>
      <Route path="/accouting/expense/expenses/fetch">
        {({ history, match }) => (
          <FetchDialog
            show={match != null}
            onHide={() => {
              history.push("/accouting/expense/expenses");
            }}
          />
        )}
      </Route>
      <Route path="/accouting/expense/expenses/updateStatus">
        {({ history, match }) => (
          <UpdateStateDialog
            show={match != null}
            onHide={() => {
              history.push("/accouting/expense/expenses");
            }}
          />
        )}
      </Route>
      <ExpensesCard />
    </UIProvider>
  );
}
