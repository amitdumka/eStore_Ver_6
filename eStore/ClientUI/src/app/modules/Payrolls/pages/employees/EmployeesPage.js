import React from "react";
import { Route } from "react-router-dom";
import { EmployeesLoadingDialog } from "./loading-dialog/LoadingDialog";
import { EditDialog } from "./edit-dialog/EditDialog";

import { DeleteDialog } from "./delete-dialog/DeleteDialog";

import { DeletesDialog } from "./deletes-dialog/DeletesDialog";

import { FetchDialog } from "./fetch-dialog/FetchDialog";
import { UpdateStateDialog } from "./update-status-dialog/UpdateStateDialog";
import { UIProvider } from "./UIContext";
import { EmployeesCard } from "./EmployeesCard";

export function EmployeesPage({ history }) {
  const employeesUIEvents = {
    newEmployeeButtonClick: () => {
      history.push("/payroll/employees/new");
    },
    openEditEmployeeDialog: (id) => {
      history.push(`/payroll/employees/${id}/edit`);
    },
    openDeleteEmployeeDialog: (id) => {
      history.push(`/payroll/employees/${id}/delete`);
    },
    openDeleteEmployeesDialog: () => {
      history.push(`/payroll/employees/deleteEmployees`);
    },
    openFetchEmployeesDialog: () => {
      history.push(`/payroll/employees/fetch`);
    },
    openUpdateEmployeesStatusDialog: () => {
      history.push("/payroll/employees/updateStatus");
    }
  }

  return (
    <UIProvider UIEvents={employeesUIEvents}>
      <EmployeesLoadingDialog />
      <Route path="/payroll/employees/new">
        {({ history, match }) => (
          <EditDialog
            show={match != null}
            onHide={() => {
              history.push("/payroll/employees");
            }}
          />
        )}
      </Route>
      <Route path="/payroll/employees/:id/edit">
        {({ history, match }) => (
          <EditDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/payroll/employees");
            }}
          />
        )}
      </Route>
      <Route path="/payroll/employees/deleteEmployees">
        {({ history, match }) => (
          <DeletesDialog
            show={match != null}
            onHide={() => {
              history.push("/payroll/employees");
            }}
          />
        )}
      </Route>
      <Route path="/payroll/employees/:id/delete">
        {({ history, match }) => (
          <DeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/payroll/employees");
            }}
          />
        )}
      </Route>
      <Route path="/payroll/employees/fetch">
        {({ history, match }) => (
          <FetchDialog
            show={match != null}
            onHide={() => {
              history.push("/payroll/employees");
            }}
          />
        )}
      </Route>
      <Route path="/payroll/employees/updateStatus">
        {({ history, match }) => (
          <UpdateStateDialog
            show={match != null}
            onHide={() => {
              history.push("/payroll/employees");
            }}
          />
        )}
      </Route>
      <EmployeesCard />
    </UIProvider>
  );
}
