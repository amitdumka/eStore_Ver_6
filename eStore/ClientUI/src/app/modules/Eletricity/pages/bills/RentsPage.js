import React from "react";
import { Route } from "react-router-dom";
import { BillsLoadingDialog } from "./dialogs/LoadingDialog";
import { EditDialog } from "./dialogs/EditDialog";

import { DeleteDialog } from "./dialogs/DeleteDialog";

import { DeletesDialog } from "./dialogs/DeletesDialog";

import { FetchDialog } from "./dialogs/FetchDialog";
import { UpdateStateDialog } from "./dialogs/UpdateStateDialog";
import { UIProvider } from "./UIContext";
import { BillsCard } from "./BillsCard";

//Bill
//bill

export function BillsPage({ history }) {
  const billsUIEvents = {
    newBillButtonClick: () => {
      history.push("/billing/bills/new");
    },
    openEditBillDialog: (id) => {
      history.push(`/billing/bills/${id}/edit`);
    },
    openDeleteBillDialog: (id) => {
      history.push(`/billing/bills/${id}/delete`);
    },
    openDeleteBillsDialog: () => {
      history.push(`/billing/bills/deleteBills`);
    },
    openFetchBillsDialog: () => {
      history.push(`/billing/bills/fetch`);
    },
    openUpdateBillsStatusDialog: () => {
      history.push("/billing/bills/updateStatus");
    }
  }

  return (
    <UIProvider UIEvents={billsUIEvents}>
      <BillsLoadingDialog />
      <Route path="/billing/bills/new">
        {({ history, match }) => (
          <EditDialog
            show={match != null}
            onHide={() => {
              history.push("/billing/bills");
            }}
          />
        )}
      </Route>
      <Route path="/billing/bills/:id/edit">
        {({ history, match }) => (
          <EditDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/billing/bills");
            }}
          />
        )}
      </Route>
      <Route path="/billing/bills/deleteBills">
        {({ history, match }) => (
          <DeletesDialog
            show={match != null}
            onHide={() => {
              history.push("/billing/bills");
            }}
          />
        )}
      </Route>
      <Route path="/billing/bills/:id/delete">
        {({ history, match }) => (
          <DeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/billing/bills");
            }}
          />
        )}
      </Route>
      <Route path="/billing/bills/fetch">
        {({ history, match }) => (
          <FetchDialog
            show={match != null}
            onHide={() => {
              history.push("/billing/bills");
            }}
          />
        )}
      </Route>
      <Route path="/billing/bills/updateStatus">
        {({ history, match }) => (
          <UpdateStateDialog
            show={match != null}
            onHide={() => {
              history.push("/billing/bills");
            }}
          />
        )}
      </Route>
      <BillsCard />
    </UIProvider>
  );
}
