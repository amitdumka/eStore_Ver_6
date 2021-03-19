import React from "react";
import { Route } from "react-router-dom";
import { PurchaseTaxesLoadingDialog } from "./dialogs/LoadingDialog";
import { EditDialog } from "./dialogs/EditDialog";

import { DeleteDialog } from "./dialogs/DeleteDialog";

import { DeletesDialog } from "./dialogs/DeletesDialog";

import { FetchDialog } from "./dialogs/FetchDialog";
import { UpdateStateDialog } from "./dialogs/UpdateStateDialog";
import { UIProvider } from "./UIContext";
import { PurchaseTaxesCard } from "./PurchaseTaxesCard";

//purchaseTax
//PurchaseTax


export function PurchaseTaxesPage({ history }) {
  const purchaseTaxesUIEvents = {
    newPurchaseTaxButtonClick: () => {
      history.push("/ledger/purchaseTaxes/new");
    },
    openEditPurchaseTaxDialog: (id) => {
      history.push(`/ledger/purchaseTaxes/${id}/edit`);
    },
    openDeletePurchaseTaxDialog: (id) => {
      history.push(`/ledger/purchaseTaxes/${id}/delete`);
    },
    openDeletePurchaseTaxesDialog: () => {
      history.push(`/ledger/purchaseTaxes/deletePurchaseTaxes`);
    },
    openFetchPurchaseTaxesDialog: () => {
      history.push(`/ledger/purchaseTaxes/fetch`);
    },
    openUpdatePurchaseTaxesStatusDialog: () => {
      history.push("/ledger/purchaseTaxes/updateStatus");
    }
  }

  return (
    <UIProvider UIEvents={purchaseTaxesUIEvents}>
      <PurchaseTaxesLoadingDialog />
      <Route path="/ledger/purchaseTaxes/new">
        {({ history, match }) => (
          <EditDialog
            show={match != null}
            onHide={() => {
              history.push("/ledger/purchaseTaxes");
            }}
          />
        )}
      </Route>
      <Route path="/ledger/purchaseTaxes/:id/edit">
        {({ history, match }) => (
          <EditDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/ledger/purchaseTaxes");
            }}
          />
        )}
      </Route>
      <Route path="/ledger/purchaseTaxes/deletePurchaseTaxes">
        {({ history, match }) => (
          <DeletesDialog
            show={match != null}
            onHide={() => {
              history.push("/ledger/purchaseTaxes");
            }}
          />
        )}
      </Route>
      <Route path="/ledger/purchaseTaxes/:id/delete">
        {({ history, match }) => (
          <DeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/ledger/purchaseTaxes");
            }}
          />
        )}
      </Route>
      <Route path="/ledger/purchaseTaxes/fetch">
        {({ history, match }) => (
          <FetchDialog
            show={match != null}
            onHide={() => {
              history.push("/ledger/purchaseTaxes");
            }}
          />
        )}
      </Route>
      <Route path="/ledger/purchaseTaxes/updateStatus">
        {({ history, match }) => (
          <UpdateStateDialog
            show={match != null}
            onHide={() => {
              history.push("/ledger/purchaseTaxes");
            }}
          />
        )}
      </Route>
      <PurchaseTaxesCard />
    </UIProvider>
  );
}
