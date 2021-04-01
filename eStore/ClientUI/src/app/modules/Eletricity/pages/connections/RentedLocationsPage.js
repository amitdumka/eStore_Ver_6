import React from "react";
import { Route } from "react-router-dom";
import { ConnectionsLoadingDialog } from "./dialogs/LoadingDialog";
import { EditDialog } from "./dialogs/EditDialog";

import { DeleteDialog } from "./dialogs/DeleteDialog";

import { DeletesDialog } from "./dialogs/DeletesDialog";

import { FetchDialog } from "./dialogs/FetchDialog";
import { UpdateStateDialog } from "./dialogs/UpdateStateDialog";
import { UIProvider } from "./UIContext";
import { ConnectionsCard } from "./ConnectionsCard";

//Connection
//connection

export function ConnectionsPage({ history }) {
  const connectionsUIEvents = {
    newConnectionButtonClick: () => {
      history.push("/renting/connections/new");
    },
    openEditConnectionDialog: (id) => {
      history.push(`/renting/connections/${id}/edit`);
    },
    openDeleteConnectionDialog: (id) => {
      history.push(`/renting/connections/${id}/delete`);
    },
    openDeleteConnectionsDialog: () => {
      history.push(`/renting/connections/deleteConnections`);
    },
    openFetchConnectionsDialog: () => {
      history.push(`/renting/connections/fetch`);
    },
    openUpdateConnectionsStatusDialog: () => {
      history.push("/renting/connections/updateStatus");
    }
  }

  return (
    <UIProvider UIEvents={connectionsUIEvents}>
      <ConnectionsLoadingDialog />
      <Route path="/renting/connections/new">
        {({ history, match }) => (
          <EditDialog
            show={match != null}
            onHide={() => {
              history.push("/renting/connections");
            }}
          />
        )}
      </Route>
      <Route path="/renting/connections/:id/edit">
        {({ history, match }) => (
          <EditDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/renting/connections");
            }}
          />
        )}
      </Route>
      <Route path="/renting/connections/deleteConnections">
        {({ history, match }) => (
          <DeletesDialog
            show={match != null}
            onHide={() => {
              history.push("/renting/connections");
            }}
          />
        )}
      </Route>
      <Route path="/renting/connections/:id/delete">
        {({ history, match }) => (
          <DeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/renting/connections");
            }}
          />
        )}
      </Route>
      <Route path="/renting/connections/fetch">
        {({ history, match }) => (
          <FetchDialog
            show={match != null}
            onHide={() => {
              history.push("/renting/connections");
            }}
          />
        )}
      </Route>
      <Route path="/renting/connections/updateStatus">
        {({ history, match }) => (
          <UpdateStateDialog
            show={match != null}
            onHide={() => {
              history.push("/renting/connections");
            }}
          />
        )}
      </Route>
      <ConnectionsCard />
    </UIProvider>
  );
}
