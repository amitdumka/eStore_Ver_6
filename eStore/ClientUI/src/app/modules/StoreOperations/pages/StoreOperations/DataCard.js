import React, { useMemo } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../../_metronic/_partials/controls";
import { DataListView } from "./DataListView";
// import { RentsFilter } from "./filter/Filter";
// import { RentsTable } from "./table/Table";
// import { RentsGrouping } from "./grouping/Grouping";
import { useUIContext } from "./UIContext";

//Rent
//rent

export function DataCard() {
  const uiContext = useUIContext();
  const uiProps = useMemo(() => {
    return {
      ids: uiContext.ids,
      newButtonClick: uiContext.newButtonClick,
    };
  }, [uiContext]);
  const title = "Operation";
  return (
    <Card>
      <CardHeader title="Store Operating Time">
        <CardHeaderToolbar>
          <button
            type="button"
            className="btn btn-primary mr-2"
            onClick={uiProps.newButtonClick}
          >
            Add {title}
          </button>
          <button
            type="button"
            className="btn btn-success ml-2"
            onClick={uiProps.newButtonClick}
          >
            Add Holiday
          </button>
        </CardHeaderToolbar>
      </CardHeader>
      <CardBody>
        {/* <DataFilter />
        {uiProps.ids.length > 0 && <DataGrouping />} */}
        {/* <DataTable /> */}
        <DataListView/>
      </CardBody>
    </Card>
  );
}
