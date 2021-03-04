<<<<<<< HEAD
import React from "react";
import { Route } from "react-router-dom";
import { CustomersLoadingDialog } from "./customers-loading-dialog/CustomersLoadingDialog";
import { CustomerEditDialog } from "./customer-edit-dialog/CustomerEditDialog";
import { CustomerDeleteDialog } from "./customer-delete-dialog/CustomerDeleteDialog";
import { CustomersDeleteDialog } from "./customers-delete-dialog/CustomersDeleteDialog";
import { CustomersFetchDialog } from "./customers-fetch-dialog/CustomersFetchDialog";
import { CustomersUpdateStateDialog } from "./customers-update-status-dialog/CustomersUpdateStateDialog";
import { CustomersUIProvider } from "./CustomersUIContext";
import { CustomersCard } from "./CustomersCard";

export function CustomersPage({ history }) {
  const customersUIEvents = {
    newCustomerButtonClick: () => {
      history.push("/store/customers/new");
    },
    openEditCustomerDialog: (id) => {
      history.push(`/store/customers/${id}/edit`);
    },
    openDeleteCustomerDialog: (id) => {
      history.push(`/store/customers/${id}/delete`);
    },
    openDeleteCustomersDialog: () => {
      history.push(`/store/customers/deleteCustomers`);
    },
    openFetchCustomersDialog: () => {
      history.push(`/store/customers/fetch`);
    },
    openUpdateCustomersStatusDialog: () => {
      history.push("/store/customers/updateStatus");
    }
  }

  return (
    <CustomersUIProvider customersUIEvents={customersUIEvents}>
      <CustomersLoadingDialog />
      <Route path="/store/customers/new">
        {({ history, match }) => (
          <CustomerEditDialog
            show={match != null}
            onHide={() => {
              history.push("/store/customers");
            }}
          />
        )}
      </Route>
      <Route path="/store/customers/:id/edit">
        {({ history, match }) => (
          <CustomerEditDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/store/customers");
            }}
          />
        )}
      </Route>
      <Route path="/store/customers/deleteCustomers">
        {({ history, match }) => (
          <CustomersDeleteDialog
            show={match != null}
            onHide={() => {
              history.push("/store/customers");
            }}
          />
        )}
      </Route>
      <Route path="/store/customers/:id/delete">
        {({ history, match }) => (
          <CustomerDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/store/customers");
            }}
          />
        )}
      </Route>
      <Route path="/store/customers/fetch">
        {({ history, match }) => (
          <CustomersFetchDialog
            show={match != null}
            onHide={() => {
              history.push("/store/customers");
            }}
          />
        )}
      </Route>
      <Route path="/store/customers/updateStatus">
        {({ history, match }) => (
          <CustomersUpdateStateDialog
            show={match != null}
            onHide={() => {
              history.push("/store/customers");
            }}
          />
        )}
      </Route>
      <CustomersCard />
    </CustomersUIProvider>
  );
}
=======
import React from "react";
import { Route } from "react-router-dom";
import { CustomersLoadingDialog } from "./customers-loading-dialog/CustomersLoadingDialog";
import { CustomerEditDialog } from "./customer-edit-dialog/CustomerEditDialog";
import { CustomerDeleteDialog } from "./customer-delete-dialog/CustomerDeleteDialog";
import { CustomersDeleteDialog } from "./customers-delete-dialog/CustomersDeleteDialog";
import { CustomersFetchDialog } from "./customers-fetch-dialog/CustomersFetchDialog";
import { CustomersUpdateStateDialog } from "./customers-update-status-dialog/CustomersUpdateStateDialog";
import { CustomersUIProvider } from "./CustomersUIContext";
import { CustomersCard } from "./CustomersCard";

export function CustomersPage({ history }) {
  const customersUIEvents = {
    newCustomerButtonClick: () => {
      history.push("/e-commerce/customers/new");
    },
    openEditCustomerDialog: (id) => {
      history.push(`/e-commerce/customers/${id}/edit`);
    },
    openDeleteCustomerDialog: (id) => {
      history.push(`/e-commerce/customers/${id}/delete`);
    },
    openDeleteCustomersDialog: () => {
      history.push(`/e-commerce/customers/deleteCustomers`);
    },
    openFetchCustomersDialog: () => {
      history.push(`/e-commerce/customers/fetch`);
    },
    openUpdateCustomersStatusDialog: () => {
      history.push("/e-commerce/customers/updateStatus");
    }
  }

  return (
    <CustomersUIProvider customersUIEvents={customersUIEvents}>
      <CustomersLoadingDialog />
      <Route path="/e-commerce/customers/new">
        {({ history, match }) => (
          <CustomerEditDialog
            show={match != null}
            onHide={() => {
              history.push("/e-commerce/customers");
            }}
          />
        )}
      </Route>
      <Route path="/e-commerce/customers/:id/edit">
        {({ history, match }) => (
          <CustomerEditDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/e-commerce/customers");
            }}
          />
        )}
      </Route>
      <Route path="/e-commerce/customers/deleteCustomers">
        {({ history, match }) => (
          <CustomersDeleteDialog
            show={match != null}
            onHide={() => {
              history.push("/e-commerce/customers");
            }}
          />
        )}
      </Route>
      <Route path="/e-commerce/customers/:id/delete">
        {({ history, match }) => (
          <CustomerDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/e-commerce/customers");
            }}
          />
        )}
      </Route>
      <Route path="/e-commerce/customers/fetch">
        {({ history, match }) => (
          <CustomersFetchDialog
            show={match != null}
            onHide={() => {
              history.push("/e-commerce/customers");
            }}
          />
        )}
      </Route>
      <Route path="/e-commerce/customers/updateStatus">
        {({ history, match }) => (
          <CustomersUpdateStateDialog
            show={match != null}
            onHide={() => {
              history.push("/e-commerce/customers");
            }}
          />
        )}
      </Route>
      <CustomersCard />
    </CustomersUIProvider>
  );
}
>>>>>>> b7b54ae91bc076d49d998cdb8c5571fa8e3cf47b
