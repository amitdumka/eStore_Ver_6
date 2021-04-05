import React, { useMemo } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../../_metronic/_partials/controls";
import { RentsFilter } from "./filter/Filter";
import { RentsTable } from "./table/Table";
import { RentsGrouping } from "./grouping/Grouping";
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
  const title = "Opens";
  return (
    <Card>
      <CardHeader title="Store Operation Time list">
        <CardHeaderToolbar>
          <button
            type="button"
            className="btn btn-primary"
            onClick={uiProps.newButtonClick}
          >
            New {title}
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={uiProps.newButtonClick}
          >
            Add Holiday
          </button>
        </CardHeaderToolbar>
      </CardHeader>
      <CardBody>
        <DataFilter />
        {uiProps.ids.length > 0 && <DataGrouping />}
        <DataTable />
      </CardBody>
    </Card>
  );
}
