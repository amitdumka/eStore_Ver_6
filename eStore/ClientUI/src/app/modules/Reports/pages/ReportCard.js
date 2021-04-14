import React, { useMemo } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../../_metronic/_partials/controls";

import { useUIContext } from "./UIContext";

//Rent
//rent


export function RentsCard() {
  const uiContext = useUIContext();
  const uiProps = useMemo(() => {
    return {
      ids: uiContext.ids,
      newRentButtonClick: uiContext.newRentButtonClick,
    };
  }, [uiContext]);

  return (
    <Card>
      <CardHeader title="Rent Payment list">
        <CardHeaderToolbar>
          <button
            type="button"
            className="btn btn-primary"
            
          >
            New Payment
          </button>
        </CardHeaderToolbar>
      </CardHeader>
      <CardBody>
        
      </CardBody>
    </Card>
  );
}
