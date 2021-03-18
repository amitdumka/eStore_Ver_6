import React from "react";
import { Route } from "react-router-dom";
import { PartiesLoadingDialog } from "./dialogs/LoadingDialog";
import { EditDialog } from "./dialogs/EditDialog";

import { DeleteDialog } from "./dialogs/DeleteDialog";

import { DeletesDialog } from "./dialogs/DeletesDialog";

import { FetchDialog } from "./dialogs/FetchDialog";
import { UpdateStateDialog } from "./dialogs/UpdateStateDialog";
import { UIProvider } from "./UIContext";
import { PartiesCard } from "./PartiesCard";

//Parties
//parties
//Party
//party

export function PartiesPage({ history }) {
  const partiesUIEvents = {
    newPartyButtonClick: () => {
      history.push("/banking/parties/new");
    },
    openEditPartyDialog: (id) => {
      history.push(`/banking/parties/${id}/edit`);
    },
    openDeletePartyDialog: (id) => {
      history.push(`/banking/parties/${id}/delete`);
    },
    openDeletePartiesDialog: () => {
      history.push(`/banking/parties/deleteParties`);
    },
    openFetchPartiesDialog: () => {
      history.push(`/banking/parties/fetch`);
    },
    openUpdatePartiesStatusDialog: () => {
      history.push("/banking/parties/updateStatus");
    }
  }

  return (
    <UIProvider UIEvents={partiesUIEvents}>
      <PartiesLoadingDialog />
      <Route path="/banking/parties/new">
        {({ history, match }) => (
          <EditDialog
            show={match != null}
            onHide={() => {
              history.push("/banking/parties");
            }}
          />
        )}
      </Route>
      <Route path="/banking/parties/:id/edit">
        {({ history, match }) => (
          <EditDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/banking/parties");
            }}
          />
        )}
      </Route>
      <Route path="/banking/parties/deleteParties">
        {({ history, match }) => (
          <DeletesDialog
            show={match != null}
            onHide={() => {
              history.push("/banking/parties");
            }}
          />
        )}
      </Route>
      <Route path="/banking/parties/:id/delete">
        {({ history, match }) => (
          <DeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/banking/parties");
            }}
          />
        )}
      </Route>
      <Route path="/banking/parties/fetch">
        {({ history, match }) => (
          <FetchDialog
            show={match != null}
            onHide={() => {
              history.push("/banking/parties");
            }}
          />
        )}
      </Route>
      <Route path="/banking/parties/updateStatus">
        {({ history, match }) => (
          <UpdateStateDialog
            show={match != null}
            onHide={() => {
              history.push("/banking/parties");
            }}
          />
        )}
      </Route>
      <PartiesCard />
    </UIProvider>
  );
}
