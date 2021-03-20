import React from "react";
import { Route } from "react-router-dom";
import { DeliveriesLoadingDialog } from "./dialogs/LoadingDialog";
import { EditDialog } from "./dialogs/EditDialog";

import { DeleteDialog } from "./dialogs/DeleteDialog";

import { DeletesDialog } from "./dialogs/DeletesDialog";

import { FetchDialog } from "./dialogs/FetchDialog";
import { UpdateStateDialog } from "./dialogs/UpdateStateDialog";
import { UIProvider } from "./UIContext";
import { DeliveriesCard } from "./DeliveriesCard";

//Deliveries
//delivery
//Delivery
//delivery

export function DeliveriesPage({ history }) {
  const deliveriesUIEvents = {
    newDeliveryButtonClick: () => {
      history.push("/taxes/delivery/new");
    },
    openEditDeliveryDialog: (id) => {
      history.push(`/taxes/delivery/${id}/edit`);
    },
    openDeleteDeliveryDialog: (id) => {
      history.push(`/taxes/delivery/${id}/delete`);
    },
    openDeleteDeliveriesDialog: () => {
      history.push(`/taxes/delivery/deleteDeliveries`);
    },
    openFetchDeliveriesDialog: () => {
      history.push(`/taxes/delivery/fetch`);
    },
    openUpdateDeliveriesStatusDialog: () => {
      history.push("/taxes/delivery/updateStatus");
    }
  }

  return (
    <UIProvider UIEvents={deliveriesUIEvents}>
      <DeliveriesLoadingDialog />
      <Route path="/taxes/delivery/new">
        {({ history, match }) => (
          <EditDialog
            show={match != null}
            onHide={() => {
              history.push("/taxes/delivery");
            }}
          />
        )}
      </Route>
      <Route path="/taxes/delivery/:id/edit">
        {({ history, match }) => (
          <EditDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/taxes/delivery");
            }}
          />
        )}
      </Route>
      <Route path="/taxes/delivery/deleteDeliveries">
        {({ history, match }) => (
          <DeletesDialog
            show={match != null}
            onHide={() => {
              history.push("/taxes/delivery");
            }}
          />
        )}
      </Route>
      <Route path="/taxes/delivery/:id/delete">
        {({ history, match }) => (
          <DeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/taxes/delivery");
            }}
          />
        )}
      </Route>
      <Route path="/taxes/delivery/fetch">
        {({ history, match }) => (
          <FetchDialog
            show={match != null}
            onHide={() => {
              history.push("/taxes/delivery");
            }}
          />
        )}
      </Route>
      <Route path="/taxes/delivery/updateStatus">
        {({ history, match }) => (
          <UpdateStateDialog
            show={match != null}
            onHide={() => {
              history.push("/taxes/delivery");
            }}
          />
        )}
      </Route>
      <DeliveriesCard />
    </UIProvider>
  );
}
