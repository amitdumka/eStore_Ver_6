import React, { useMemo } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../../_metronic/_partials/controls";
import { PartiesFilter } from "./filter/Filter";
import { PartiesTable } from "./table/Table";
import { PartiesGrouping } from "./grouping/Grouping";
import { useUIContext } from "./UIContext";

//Parties
//parties
//Party
//party

export function PartiesCard() {
  const PartiesUIContext = useUIContext();
  const PartiesUIProps = useMemo(() => {
    return {
      ids: PartiesUIContext.ids,
      newPartyButtonClick: PartiesUIContext.newPartyButtonClick,
    };
  }, [PartiesUIContext]);

  return (
    <Card>
      <CardHeader title="Bank Accounts list">
        <CardHeaderToolbar>
          <button
            type="button"
            className="btn btn-primary"
            onClick={PartiesUIProps.newPartyButtonClick}
          >
            New Bank Account
          </button>
        </CardHeaderToolbar>
      </CardHeader>
      <CardBody>
        <PartiesFilter />
        {PartiesUIProps.ids.length > 0 && <PartiesGrouping />}
        <PartiesTable />
      </CardBody>
    </Card>
  );
}
