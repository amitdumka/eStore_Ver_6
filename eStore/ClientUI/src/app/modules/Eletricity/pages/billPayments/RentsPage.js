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
//billpayment

export function BillPaymentsPage({ history }) {
  const billpaymentsUIEvents = {
    newBillPaymentButtonClick: () => {
      history.push("/billpaymenting/billpayments/new");
    },
    openEditBillPaymentDialog: (id) => {
      history.push(`/billpaymenting/billpayments/${id}/edit`);
    },
    openDeleteBillPaymentDialog: (id) => {
      history.push(`/billpaymenting/billpayments/${id}/delete`);
    },
    openDeleteBillPaymentsDialog: () => {
      history.push(`/billpaymenting/billpayments/deleteBillPayments`);
    },
    openFetchBillPaymentsDialog: () => {
      history.push(`/billpaymenting/billpayments/fetch`);
    },
    openUpdateBillPaymentsStatusDialog: () => {
      history.push("/billpaymenting/billpayments/updateStatus");
    }
  }

  return (
    <UIProvider UIEvents={billpaymentsUIEvents}>
      <BillPaymentsLoadingDialog />
      <Route path="/billpaymenting/billpayments/new">
        {({ history, match }) => (
          <EditDialog
            show={match != null}
            onHide={() => {
              history.push("/billpaymenting/billpayments");
            }}
          />
        )}
      </Route>
      <Route path="/billpaymenting/billpayments/:id/edit">
        {({ history, match }) => (
          <EditDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/billpaymenting/billpayments");
            }}
          />
        )}
      </Route>
      <Route path="/billpaymenting/billpayments/deleteBillPayments">
        {({ history, match }) => (
          <DeletesDialog
            show={match != null}
            onHide={() => {
              history.push("/billpaymenting/billpayments");
            }}
          />
        )}
      </Route>
      <Route path="/billpaymenting/billpayments/:id/delete">
        {({ history, match }) => (
          <DeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/billpaymenting/billpayments");
            }}
          />
        )}
      </Route>
      <Route path="/billpaymenting/billpayments/fetch">
        {({ history, match }) => (
          <FetchDialog
            show={match != null}
            onHide={() => {
              history.push("/billpaymenting/billpayments");
            }}
          />
        )}
      </Route>
      <Route path="/billpaymenting/billpayments/updateStatus">
        {({ history, match }) => (
          <UpdateStateDialog
            show={match != null}
            onHide={() => {
              history.push("/billpaymenting/billpayments");
            }}
          />
        )}
      </Route>
      <BillPaymentsCard />
    </UIProvider>
  );
}
