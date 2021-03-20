import React from "react";
import { Route } from "react-router-dom";
import { DueRecoveredsLoadingDialog } from "./dialogs/LoadingDialog";
import { EditDialog } from "./dialogs/EditDialog";

import { DeleteDialog } from "./dialogs/DeleteDialog";

import { DeletesDialog } from "./dialogs/DeletesDialog";

import { FetchDialog } from "./dialogs/FetchDialog";
import { UpdateStateDialog } from "./dialogs/UpdateStateDialog";
import { UIProvider } from "./UIContext";
import { DueRecoveredsCard } from "./DueRecoveredsCard";

//DueRecovered
//dueRecovered

export function DueRecoveredsPage({ history }) {
  const dueRecoveredsUIEvents = {
    newDueRecoveredButtonClick: () => {
      history.push("/accounting/expense/dueRecovereds/new");
    },
    openEditDueRecoveredDialog: (id) => {
      history.push(`/accounting/expense/dueRecovereds/${id}/edit`);
    },
    openDeleteDueRecoveredDialog: (id) => {
      history.push(`/accounting/expense/dueRecovereds/${id}/delete`);
    },
    openDeleteDueRecoveredsDialog: () => {
      history.push(`/accounting/expense/dueRecovereds/deleteDueRecovereds`);
    },
    openFetchDueRecoveredsDialog: () => {
      history.push(`/accounting/expense/dueRecovereds/fetch`);
    },
    openUpdateDueRecoveredsStatusDialog: () => {
      history.push("/accounting/expense/dueRecovereds/updateStatus");
    }
  }

  return (
    <UIProvider UIEvents={dueRecoveredsUIEvents}>
      <DueRecoveredsLoadingDialog />
      <Route path="/accounting/expense/dueRecovereds/new">
        {({ history, match }) => (
          <EditDialog
            show={match != null}
            onHide={() => {
              history.push("/accounting/expense/dueRecovereds");
            }}
          />
        )}
      </Route>
      <Route path="/accounting/expense/dueRecovereds/:id/edit">
        {({ history, match }) => (
          <EditDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/accounting/expense/dueRecovereds");
            }}
          />
        )}
      </Route>
      <Route path="/accounting/expense/dueRecovereds/deleteDueRecovereds">
        {({ history, match }) => (
          <DeletesDialog
            show={match != null}
            onHide={() => {
              history.push("/accounting/expense/dueRecovereds");
            }}
          />
        )}
      </Route>
      <Route path="/accounting/expense/dueRecovereds/:id/delete">
        {({ history, match }) => (
          <DeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/accounting/expense/dueRecovereds");
            }}
          />
        )}
      </Route>
      <Route path="/accounting/expense/dueRecovereds/fetch">
        {({ history, match }) => (
          <FetchDialog
            show={match != null}
            onHide={() => {
              history.push("/accounting/expense/dueRecovereds");
            }}
          />
        )}
      </Route>
      <Route path="/accounting/expense/dueRecovereds/updateStatus">
        {({ history, match }) => (
          <UpdateStateDialog
            show={match != null}
            onHide={() => {
              history.push("/accounting/expense/dueRecovereds");
            }}
          />
        )}
      </Route>
      <DueRecoveredsCard />
    </UIProvider>
  );
}
