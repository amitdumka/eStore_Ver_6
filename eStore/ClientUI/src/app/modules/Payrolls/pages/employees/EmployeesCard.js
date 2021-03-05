import React, { useMemo } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../../_metronic/_partials/controls";
import { CustomersFilter } from "./filter/Filter";
import { CustomersTable } from "./table/EmployeesTable";
import { CustomersGrouping } from "./grouping/Grouping";
import { useCustomersUIContext } from "./CustomersUIContext";

export function CustomersCard() {
  const customersUIContext = useCustomersUIContext();
  const customersUIProps = useMemo(() => {
    return {
      ids: customersUIContext.ids,
      newCustomerButtonClick: customersUIContext.newCustomerButtonClick,
    };
  }, [customersUIContext]);

  return (
    <Card>
      <CardHeader title="Customers list">
        <CardHeaderToolbar>
          <button
            type="button"
            className="btn btn-primary"
            onClick={customersUIProps.newCustomerButtonClick}
          >
            New Customer
          </button>
        </CardHeaderToolbar>
      </CardHeader>
      <CardBody>
        <CustomersFilter />
        {customersUIProps.ids.length > 0 && <CustomersGrouping />}
        <CustomersTable />
      </CardBody>
    </Card>
  );
}
