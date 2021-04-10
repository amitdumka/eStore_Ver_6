import React, { useMemo, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../../_metronic/_partials/controls";
//import { DataListView } from "./DataListView";
// import { RentsFilter } from "./filter/Filter";
// import { RentsTable } from "./table/Table";
// import { RentsGrouping } from "./grouping/Grouping";
import { useUIContext } from "./UIContext";
import { OperationTable, HolidayTable } from "./table/DataTable";

import { Tabs, Tab } from "react-bootstrap";

export function DataCard() {
  const uiContext = useUIContext();
  const uiProps = useMemo(() => {
    return {
      ids: uiContext.ids,
      newButtonOpenClick: uiContext.newButtonOpenClick,
      newButtonCloseClick: uiContext.newButtonCloseClick,
      newButtonHolidayClick: uiContext.newButtonHolidayClick,
    };
  }, [uiContext]);
  const [openButton, setOpenButton] = useState(false);
  const [closeButton, setCloseButton] = useState(true);

  const enableButtons = (oButton,cButton) => {
    setOpenButton(oButton);
    setCloseButton(cButton);
  };

  return (
    <Card>
      <CardHeader title="Store Operating Time">
        <CardHeaderToolbar className="btn-group">
          <button
            type="button"
            className="btn btn-sm btn-primary "
            onClick={uiProps.newButtonOpenClick}
            disabled={openButton}
          >
            Add Open
          </button>
          <button
            type="button"
            className="btn btn-sm btn-warning "
            onClick={uiProps.newButtonCloseClick}
            disabled={closeButton}
          >
            Add Close
          </button>
          <button
            type="button"
            className="btn btn-sm btn-success "
            onClick={uiProps.newButtonHolidayClick}
          >
            Add Holiday
          </button>
        </CardHeaderToolbar>
      </CardHeader>
      <CardBody>
        {/* <DataFilter />
        {uiProps.ids.length > 0 && <DataGrouping />} */}

        <Tabs defaultActiveKey="daily" id="tabStoreOps">
          <Tab title="Daily Ops" eventKey="daily">
            <OperationTable enableButtons={enableButtons} />
          </Tab>
          <Tab title="Holiday" eventKey="holiday">
            <HolidayTable />
          </Tab>
        </Tabs>
      </CardBody>
    </Card>
  );
}
