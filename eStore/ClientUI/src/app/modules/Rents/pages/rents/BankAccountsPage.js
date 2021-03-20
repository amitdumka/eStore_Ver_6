import React from "react";
import { Route } from "react-router-dom";
import { RentsLoadingDialog } from "./dialogs/LoadingDialog";
import { EditDialog } from "./dialogs/EditDialog";

import { DeleteDialog } from "./dialogs/DeleteDialog";

import { DeletesDialog } from "./dialogs/DeletesDialog";

import { FetchDialog } from "./dialogs/FetchDialog";
import { UpdateStateDialog } from "./dialogs/UpdateStateDialog";
import { UIProvider } from "./UIContext";
import { RentsCard } from "./RentsCard";

//Rent
//rent

export function RentsPage({ history }) {
  const rentsUIEvents = {
    newRentButtonClick: () => {
      history.push("/banking/rents/new");
    },
    openEditRentDialog: (id) => {
      history.push(`/banking/rents/${id}/edit`);
    },
    openDeleteRentDialog: (id) => {
      history.push(`/banking/rents/${id}/delete`);
    },
    openDeleteRentsDialog: () => {
      history.push(`/banking/rents/deleteRents`);
    },
    openFetchRentsDialog: () => {
      history.push(`/banking/rents/fetch`);
    },
    openUpdateRentsStatusDialog: () => {
      history.push("/banking/rents/updateStatus");
    }
  }

  return (
    <UIProvider UIEvents={rentsUIEvents}>
      <RentsLoadingDialog />
      <Route path="/banking/rents/new">
        {({ history, match }) => (
          <EditDialog
            show={match != null}
            onHide={() => {
              history.push("/banking/rents");
            }}
          />
        )}
      </Route>
      <Route path="/banking/rents/:id/edit">
        {({ history, match }) => (
          <EditDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/banking/rents");
            }}
          />
        )}
      </Route>
      <Route path="/banking/rents/deleteRents">
        {({ history, match }) => (
          <DeletesDialog
            show={match != null}
            onHide={() => {
              history.push("/banking/rents");
            }}
          />
        )}
      </Route>
      <Route path="/banking/rents/:id/delete">
        {({ history, match }) => (
          <DeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/banking/rents");
            }}
          />
        )}
      </Route>
      <Route path="/banking/rents/fetch">
        {({ history, match }) => (
          <FetchDialog
            show={match != null}
            onHide={() => {
              history.push("/banking/rents");
            }}
          />
        )}
      </Route>
      <Route path="/banking/rents/updateStatus">
        {({ history, match }) => (
          <UpdateStateDialog
            show={match != null}
            onHide={() => {
              history.push("/banking/rents");
            }}
          />
        )}
      </Route>
      <RentsCard />
    </UIProvider>
  );
}
