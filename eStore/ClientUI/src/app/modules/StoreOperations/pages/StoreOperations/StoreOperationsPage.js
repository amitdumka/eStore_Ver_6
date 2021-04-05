import React from "react";
import { Route } from "react-router-dom";
// import { RentsLoadingDialog } from "./dialogs/LoadingDialog";
// import { EditDialog } from "./dialogs/EditDialog";

// import { DeleteDialog } from "./dialogs/DeleteDialog";

// import { DeletesDialog } from "./dialogs/DeletesDialog";

// import { FetchDialog } from "./dialogs/FetchDialog";
// import { UpdateStateDialog } from "./dialogs/UpdateStateDialog";
import { UIProvider } from "./UIContext";
// import { RentsCard } from "./RentsCard";

//Rent
//rent

export function StoreOperationsPage({ history }) {
  const rentsUIEvents = {
    newButtonClick: () => {
      history.push("/storeOperations/open/new");
    },
    openEditialog: (id) => {
      history.push(`/storeOperations/open/${id}/edit`);
    },
    openDeleteDialog: (id) => {
      history.push(`/storeOperations/open/${id}/delete`);
    },
    openDeletesDialog: () => {
      history.push(`/storeOperations/open/deletes`);
    },
    openFetchDialog: () => {
      history.push(`/storeOperations/open/fetch`);
    },
    openUpdateStatusDialog: () => {
      history.push("/storeOperations/open/updateStatus");
    }
  }

  return (
    <UIProvider UIEvents={rentsUIEvents}>
      <DataLoadingDialog />
      <Route path="/storeOperations/open/new">
        {({ history, match }) => (
          <EditDialog
            show={match != null}
            onHide={() => {
              history.push("/storeOperations/open");
            }}
          />
        )}
      </Route>
      <Route path="/storeOperations/open/:id/edit">
        {({ history, match }) => (
          <EditDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/storeOperations/open");
            }}
          />
        )}
      </Route>
      <Route path="/storeOperations/open/deleteRents">
        {({ history, match }) => (
          <DeletesDialog
            show={match != null}
            onHide={() => {
              history.push("/storeOperations/open");
            }}
          />
        )}
      </Route>
      <Route path="/storeOperations/open/:id/delete">
        {({ history, match }) => (
          <DeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/storeOperations/open");
            }}
          />
        )}
      </Route>
      <Route path="/storeOperations/open/fetch">
        {({ history, match }) => (
          <FetchDialog
            show={match != null}
            onHide={() => {
              history.push("/storeOperations/open");
            }}
          />
        )}
      </Route>
      <Route path="/storeOperations/open/updateStatus">
        {({ history, match }) => (
          <UpdateStateDialog
            show={match != null}
            onHide={() => {
              history.push("/storeOperations/open");
            }}
          />
        )}
      </Route>
      <DataCard />
    </UIProvider>
  );
}
