import React from "react";
import { Route } from "react-router-dom";
import { SaleTaxesLoadingDialog } from "./dialogs/LoadingDialog";
import { EditDialog } from "./dialogs/EditDialog";

import { DeleteDialog } from "./dialogs/DeleteDialog";

import { DeletesDialog } from "./dialogs/DeletesDialog";

import { FetchDialog } from "./dialogs/FetchDialog";
import { UpdateStateDialog } from "./dialogs/UpdateStateDialog";
import { UIProvider } from "./UIContext";
import { SaleTaxesCard } from "./SaleTaxesCard";

//SaleTaxes
//saleTax
//SaleTax
//saleTax

export function SaleTaxesPage({ history }) {
  const saleTaxesUIEvents = {
    newSaleTaxButtonClick: () => {
      history.push("/ledger/saleTax/new");
    },
    openEditSaleTaxDialog: (id) => {
      history.push(`/ledger/saleTax/${id}/edit`);
    },
    openDeleteSaleTaxDialog: (id) => {
      history.push(`/ledger/saleTax/${id}/delete`);
    },
    openDeleteSaleTaxesDialog: () => {
      history.push(`/ledger/saleTax/deleteSaleTaxes`);
    },
    openFetchSaleTaxesDialog: () => {
      history.push(`/ledger/saleTax/fetch`);
    },
    openUpdateSaleTaxesStatusDialog: () => {
      history.push("/ledger/saleTax/updateStatus");
    }
  }

  return (
    <UIProvider UIEvents={saleTaxesUIEvents}>
      <SaleTaxesLoadingDialog />
      <Route path="/ledger/saleTax/new">
        {({ history, match }) => (
          <EditDialog
            show={match != null}
            onHide={() => {
              history.push("/ledger/saleTax");
            }}
          />
        )}
      </Route>
      <Route path="/ledger/saleTax/:id/edit">
        {({ history, match }) => (
          <EditDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/ledger/saleTax");
            }}
          />
        )}
      </Route>
      <Route path="/ledger/saleTax/deleteSaleTaxes">
        {({ history, match }) => (
          <DeletesDialog
            show={match != null}
            onHide={() => {
              history.push("/ledger/saleTax");
            }}
          />
        )}
      </Route>
      <Route path="/ledger/saleTax/:id/delete">
        {({ history, match }) => (
          <DeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/ledger/saleTax");
            }}
          />
        )}
      </Route>
      <Route path="/ledger/saleTax/fetch">
        {({ history, match }) => (
          <FetchDialog
            show={match != null}
            onHide={() => {
              history.push("/ledger/saleTax");
            }}
          />
        )}
      </Route>
      <Route path="/ledger/saleTax/updateStatus">
        {({ history, match }) => (
          <UpdateStateDialog
            show={match != null}
            onHide={() => {
              history.push("/ledger/saleTax");
            }}
          />
        )}
      </Route>
      <SaleTaxesCard />
    </UIProvider>
  );
}
