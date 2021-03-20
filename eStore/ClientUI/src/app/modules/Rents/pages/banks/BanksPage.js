import React from "react";
import { Route } from "react-router-dom";
import { BanksLoadingDialog } from "./dialogs/LoadingDialog";
import { EditDialog } from "./dialogs/EditDialog";

import { DeleteDialog } from "./dialogs/DeleteDialog";

import { DeletesDialog } from "./dialogs/DeletesDialog";

import { FetchDialog } from "./dialogs/FetchDialog";
import { UpdateStateDialog } from "./dialogs/UpdateStateDialog";
import { UIProvider } from "./UIContext";
import { BanksCard } from "./BanksCard";

//Bank
//bank

export function BanksPage({ history }) {
  const banksUIEvents = {
    newBankButtonClick: () => {
      history.push("/accounting/banking/banks/new");
    },
    openEditBankDialog: (id) => {
      history.push(`/accounting/banking/banks/${id}/edit`);
    },
    openDeleteBankDialog: (id) => {
      history.push(`/accounting/banking/banks/${id}/delete`);
    },
    openDeleteBanksDialog: () => {
      history.push(`/accounting/banking/banks/deleteBanks`);
    },
    openFetchBanksDialog: () => {
      history.push(`/accounting/banking/banks/fetch`);
    },
    openUpdateBanksStatusDialog: () => {
      history.push("/accounting/banking/banks/updateStatus");
    }
  }

  return (
    <UIProvider UIEvents={banksUIEvents}>
      <BanksLoadingDialog />
      <Route path="/accounting/banking/banks/new">
        {({ history, match }) => (
          <EditDialog
            show={match != null}
            onHide={() => {
              history.push("/accounting/banking/banks");
            }}
          />
        )}
      </Route>
      <Route path="/accounting/banking/banks/:id/edit">
        {({ history, match }) => (
          <EditDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/accounting/banking/banks");
            }}
          />
        )}
      </Route>
      <Route path="/accounting/banking/banks/deleteBanks">
        {({ history, match }) => (
          <DeletesDialog
            show={match != null}
            onHide={() => {
              history.push("/accounting/banking/banks");
            }}
          />
        )}
      </Route>
      <Route path="/accounting/banking/banks/:id/delete">
        {({ history, match }) => (
          <DeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/accounting/banking/banks");
            }}
          />
        )}
      </Route>
      <Route path="/accounting/banking/banks/fetch">
        {({ history, match }) => (
          <FetchDialog
            show={match != null}
            onHide={() => {
              history.push("/accounting/banking/banks");
            }}
          />
        )}
      </Route>
      <Route path="/accounting/banking/banks/updateStatus">
        {({ history, match }) => (
          <UpdateStateDialog
            show={match != null}
            onHide={() => {
              history.push("/accounting/banking/banks");
            }}
          />
        )}
      </Route>
      <BanksCard />
    </UIProvider>
  );
}
