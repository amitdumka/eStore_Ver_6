import React from "react";
import { Route } from "react-router-dom";
import { PettyCashBooksLoadingDialog } from "./dialogs/LoadingDialog";
import { EditDialog } from "./dialogs/EditDialog";

import { DeleteDialog } from "./dialogs/DeleteDialog";

import { DeletesDialog } from "./dialogs/DeletesDialog";

import { FetchDialog } from "./dialogs/FetchDialog";
import { UpdateStateDialog } from "./dialogs/UpdateStateDialog";
import { UIProvider } from "./UIContext";
import { PettyCashBooksCard } from "./PettyCashBooksCard";

//PettyCashBook
//pettyCashBook

export function PettyCashBooksPage({ history }) {
  const pettyCashBooksUIEvents = {
    newPettyCashBookButtonClick: () => {
      history.push("/pettyCashBooking/pettyCashBooks/new");
    },
    openEditPettyCashBookDialog: (id) => {
      history.push(`/pettyCashBooking/pettyCashBooks/${id}/edit`);
    },
    openDeletePettyCashBookDialog: (id) => {
      history.push(`/pettyCashBooking/pettyCashBooks/${id}/delete`);
    },
    openDeletePettyCashBooksDialog: () => {
      history.push(`/pettyCashBooking/pettyCashBooks/deletePettyCashBooks`);
    },
    openFetchPettyCashBooksDialog: () => {
      history.push(`/pettyCashBooking/pettyCashBooks/fetch`);
    },
    openUpdatePettyCashBooksStatusDialog: () => {
      history.push("/pettyCashBooking/pettyCashBooks/updateStatus");
    }
  }

  return (
    <UIProvider UIEvents={pettyCashBooksUIEvents}>
      <PettyCashBooksLoadingDialog />
      <Route path="/pettyCashBooking/pettyCashBooks/new">
        {({ history, match }) => (
          <EditDialog
            show={match != null}
            onHide={() => {
              history.push("/pettyCashBooking/pettyCashBooks");
            }}
          />
        )}
      </Route>
      <Route path="/pettyCashBooking/pettyCashBooks/:id/edit">
        {({ history, match }) => (
          <EditDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/pettyCashBooking/pettyCashBooks");
            }}
          />
        )}
      </Route>
      <Route path="/pettyCashBooking/pettyCashBooks/deletePettyCashBooks">
        {({ history, match }) => (
          <DeletesDialog
            show={match != null}
            onHide={() => {
              history.push("/pettyCashBooking/pettyCashBooks");
            }}
          />
        )}
      </Route>
      <Route path="/pettyCashBooking/pettyCashBooks/:id/delete">
        {({ history, match }) => (
          <DeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/pettyCashBooking/pettyCashBooks");
            }}
          />
        )}
      </Route>
      <Route path="/pettyCashBooking/pettyCashBooks/fetch">
        {({ history, match }) => (
          <FetchDialog
            show={match != null}
            onHide={() => {
              history.push("/pettyCashBooking/pettyCashBooks");
            }}
          />
        )}
      </Route>
      <Route path="/pettyCashBooking/pettyCashBooks/updateStatus">
        {({ history, match }) => (
          <UpdateStateDialog
            show={match != null}
            onHide={() => {
              history.push("/pettyCashBooking/pettyCashBooks");
            }}
          />
        )}
      </Route>
      <PettyCashBooksCard />
    </UIProvider>
  );
}
