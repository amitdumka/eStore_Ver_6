import React from "react";
import { Route } from "react-router-dom";
import { SalaryPaymentsLoadingDialog } from "./dialogs/LoadingDialog";
import { EditDialog } from "./dialogs/EditDialog";

import { DeleteDialog } from "./dialogs/DeleteDialog";

import { DeletesDialog } from "./dialogs/DeletesDialog";

import { FetchDialog } from "./dialogs/FetchDialog";
import { UpdateStateDialog } from "./dialogs/UpdateStateDialog";
import { UIProvider } from "./UIContext";
import { SalaryPaymentsCard } from "./SalaryPaymentsCard";

//SalaryPayment
//salaryPayment

export function SalaryPaymentsPage({ history }) {
  const salaryPaymentsUIEvents = {
    newSalaryPaymentButtonClick: () => {
      history.push("/payroll/employee/salarypayments/new");
    },
    openEditSalaryPaymentDialog: (id) => {
      history.push(`/payroll/employee/salarypayments/${id}/edit`);
    },
    openDeleteSalaryPaymentDialog: (id) => {
      history.push(`/payroll/employee/salarypayments/${id}/delete`);
    },
    openDeleteSalaryPaymentsDialog: () => {
      history.push(`/payroll/employee/salarypayments/deleteSalaryPayments`);
    },
    openFetchSalaryPaymentsDialog: () => {
      history.push(`/payroll/employee/salarypayments/fetch`);
    },
    openUpdateSalaryPaymentsStatusDialog: () => {
      history.push("/payroll/employee/salarypayments/updateStatus");
    }
  }

  return (
    <UIProvider UIEvents={salaryPaymentsUIEvents}>
      <SalaryPaymentsLoadingDialog />
      <Route path="/payroll/employee/salarypayments/new">
        {({ history, match }) => (
          <EditDialog
            show={match != null}
            onHide={() => {
              history.push("/payroll/employee/salaryPayments");
            }}
          />
        )}
      </Route>
      <Route path="/payroll/employee/salarypayments/:id/edit">
        {({ history, match }) => (
          <EditDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/payroll/employee/salaryPayments");
            }}
          />
        )}
      </Route>
      <Route path="/payroll/employee/salarypayments/deleteSalaryPayments">
        {({ history, match }) => (
          <DeletesDialog
            show={match != null}
            onHide={() => {
              history.push("/payroll/employee/salaryPayments");
            }}
          />
        )}
      </Route>
      <Route path="/payroll/employee/salarypayments/:id/delete">
        {({ history, match }) => (
          <DeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/payroll/employee/salaryPayments");
            }}
          />
        )}
      </Route>
      <Route path="/payroll/employee/salarypayments/fetch">
        {({ history, match }) => (
          <FetchDialog
            show={match != null}
            onHide={() => {
              history.push("/payroll/employee/salaryPayments");
            }}
          />
        )}
      </Route>
      <Route path="/payroll/employee/salarypayments/updateStatus">
        {({ history, match }) => (
          <UpdateStateDialog
            show={match != null}
            onHide={() => {
              history.push("/payroll/employee/salaryPayments");
            }}
          />
        )}
      </Route>
      <SalaryPaymentsCard />
    </UIProvider>
  );
}
