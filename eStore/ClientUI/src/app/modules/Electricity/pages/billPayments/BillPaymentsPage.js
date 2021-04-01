import React from "react";
import { Route } from "react-router-dom";
import { BillPaymentsLoadingDialog } from "./dialogs/LoadingDialog";
import { EditDialog } from "./dialogs/EditDialog";

import { DeleteDialog } from "./dialogs/DeleteDialog";

import { DeletesDialog } from "./dialogs/DeletesDialog";

import { FetchDialog } from "./dialogs/FetchDialog";
import { UpdateStateDialog } from "./dialogs/UpdateStateDialog";
import { UIProvider } from "./UIContext";
import { BillPaymentsCard } from "./BillPaymentsCard";

//BillPayment
//billPayment

export function BillPaymentsPage({ history }) {
  const billPaymentsUIEvents = {
    newBillPaymentButtonClick: () => {
      history.push("/electricity/billPayments/new");
    },
    openEditBillPaymentDialog: (id) => {
      history.push(`/electricity/billPayments/${id}/edit`);
    },
    openDeleteBillPaymentDialog: (id) => {
      history.push(`/electricity/billPayments/${id}/delete`);
    },
    openDeleteBillPaymentsDialog: () => {
      history.push(`/electricity/billPayments/deleteBillPayments`);
    },
    openFetchBillPaymentsDialog: () => {
      history.push(`/electricity/billPayments/fetch`);
    },
    openUpdateBillPaymentsStatusDialog: () => {
      history.push("/electricity/billPayments/updateStatus");
    }
  }

  return (
    <UIProvider UIEvents={billPaymentsUIEvents}>
      <BillPaymentsLoadingDialog />
      <Route path="/electricity/billPayments/new">
        {({ history, match }) => (
          <EditDialog
            show={match != null}
            onHide={() => {
              history.push("/electricity/billPayments");
            }}
          />
        )}
      </Route>
      <Route path="/electricity/billPayments/:id/edit">
        {({ history, match }) => (
          <EditDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/electricity/billPayments");
            }}
          />
        )}
      </Route>
      <Route path="/electricity/billPayments/deleteBillPayments">
        {({ history, match }) => (
          <DeletesDialog
            show={match != null}
            onHide={() => {
              history.push("/electricity/billPayments");
            }}
          />
        )}
      </Route>
      <Route path="/electricity/billPayments/:id/delete">
        {({ history, match }) => (
          <DeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/electricity/billPayments");
            }}
          />
        )}
      </Route>
      <Route path="/electricity/billPayments/fetch">
        {({ history, match }) => (
          <FetchDialog
            show={match != null}
            onHide={() => {
              history.push("/electricity/billPayments");
            }}
          />
        )}
      </Route>
      <Route path="/electricity/billPayments/updateStatus">
        {({ history, match }) => (
          <UpdateStateDialog
            show={match != null}
            onHide={() => {
              history.push("/electricity/billPayments");
            }}
          />
        )}
      </Route>
      <BillPaymentsCard />
    </UIProvider>
  );
}
