import React from "react";
import { Route } from "react-router-dom";
import { DuesListsLoadingDialog } from "./dialogs/LoadingDialog";
import { EditDialog } from "./dialogs/EditDialog";

import { DeleteDialog } from "./dialogs/DeleteDialog";

import { DeletesDialog } from "./dialogs/DeletesDialog";

import { FetchDialog } from "./dialogs/FetchDialog";
import { UpdateStateDialog } from "./dialogs/UpdateStateDialog";
import { UIProvider } from "./UIContext";
import { DuesListsCard } from "./DuesListsCard";

//DuesList
//duesList

export function DuesListsPage({ history }) {
  const duesListsUIEvents = {
    newDuesListButtonClick: () => {
      history.push("/accounting/duesList/duesLists/new");
    },
    openEditDuesListDialog: (id) => {
      history.push(`/accounting/duesList/duesLists/${id}/edit`);
    },
    openDeleteDuesListDialog: (id) => {
      history.push(`/accounting/duesList/duesLists/${id}/delete`);
    },
    openDeleteDuesListsDialog: () => {
      history.push(`/accounting/duesList/duesLists/deleteDuesLists`);
    },
    openFetchDuesListsDialog: () => {
      history.push(`/accounting/duesList/duesLists/fetch`);
    },
    openUpdateDuesListsStatusDialog: () => {
      history.push("/accounting/duesList/duesLists/updateStatus");
    }
  }

  return (
    <UIProvider UIEvents={duesListsUIEvents}>
      <DuesListsLoadingDialog />
      <Route path="/accounting/duesList/duesLists/new">
        {({ history, match }) => (
          <EditDialog
            show={match != null}
            onHide={() => {
              history.push("/accounting/duesList/duesLists");
            }}
          />
        )}
      </Route>
      <Route path="/accounting/duesList/duesLists/:id/edit">
        {({ history, match }) => (
          <EditDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/accounting/duesList/duesLists");
            }}
          />
        )}
      </Route>
      <Route path="/accounting/duesList/duesLists/deleteDuesLists">
        {({ history, match }) => (
          <DeletesDialog
            show={match != null}
            onHide={() => {
              history.push("/accounting/duesList/duesLists");
            }}
          />
        )}
      </Route>
      <Route path="/accounting/duesList/duesLists/:id/delete">
        {({ history, match }) => (
          <DeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/accounting/duesList/duesLists");
            }}
          />
        )}
      </Route>
      <Route path="/accounting/duesList/duesLists/fetch">
        {({ history, match }) => (
          <FetchDialog
            show={match != null}
            onHide={() => {
              history.push("/accounting/duesList/duesLists");
            }}
          />
        )}
      </Route>
      <Route path="/accounting/duesList/duesLists/updateStatus">
        {({ history, match }) => (
          <UpdateStateDialog
            show={match != null}
            onHide={() => {
              history.push("/accounting/duesList/duesLists");
            }}
          />
        )}
      </Route>
      <DuesListsCard />
    </UIProvider>
  );
}
