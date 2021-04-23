import React from "react";
import { Route } from "react-router-dom";
import { useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { LoadingDialog } from "../../../../../_metronic/_partials/controls";
// import { EditDialog } from "./dialogs/EditDialog";
import { useMemo } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../../_metronic/_partials/controls";
import { DataTable } from "./Table";
import { useUIContext } from "./UIContext";
import { UIProvider } from "./UIContext";

export function DataLoadingDialog() {
  // PettyCashBooks Redux state
  const { isLoading } = useSelector(
    (state) => ({ isLoading: state.pettyCashBooks.listLoading }),
    shallowEqual
  );
  // looking for loading/dispatch
  useEffect(() => {}, [isLoading]);
  return <LoadingDialog isLoading={isLoading} text="Loading ..." />;
}

export function PettyCashBooksPage({ history }) {
  const pettyCashBooksUIEvents = {
    newPettyCashBookButtonClick: () => {
      history.push("/stores/pettyCashBooks/new");
    },
  };

  return (
    <UIProvider UIEvents={pettyCashBooksUIEvents}>
      <DataLoadingDialog />
      <Route path="/stores/pettyCashBooks/new">
        {({ history, match }) => (
          <EditDialog
            show={match != null}
            onHide={() => {
              history.push("/stores/pettyCashBooks");
            }}
          />
        )}
      </Route>
      <DataCard />
    </UIProvider>
  );
}

export function DataCard() {
  const uiContext = useUIContext();
  const uiProps = useMemo(() => {
    return {
      ids: uiContext.ids,
      newPettyCashBookButtonClick: uiContext.newPettyCashBookButtonClick,
    };
  }, [uiContext]);

  return (
    <Card>
      <CardHeader title="Store Closed">
        <CardHeaderToolbar>
          <button
            type="button"
            className="btn btn-primary"
            onClick={uiProps.newPettyCashBookButtonClick}
          >
            Add Holiday
          </button>
        </CardHeaderToolbar>
      </CardHeader>
      <CardBody>       
        <DataTable />
      </CardBody>
    </Card>
  );
}
