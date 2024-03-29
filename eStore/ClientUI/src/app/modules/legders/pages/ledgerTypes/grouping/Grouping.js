import React, { useMemo } from "react";
import { useUIContext } from "../UIContext";

//ledgerType
//LedgerType

export function LedgerTypesGrouping() {
  // LedgerTypes UI Context
  const ledgerTypesUIContext = useUIContext();
  const ledgerTypesUIProps = useMemo(() => {
    return {
      ids: ledgerTypesUIContext.ids,
      setIds: ledgerTypesUIContext.setIds,
      openDeleteLedgerTypesDialog: ledgerTypesUIContext.openDeleteLedgerTypesDialog,
      openFetchLedgerTypesDialog: ledgerTypesUIContext.openFetchLedgerTypesDialog,
      openUpdateLedgerTypesStatusDialog:
        ledgerTypesUIContext.openUpdateLedgerTypesStatusDialog,
    };
  }, [ledgerTypesUIContext]);

  return (
    <div className="form">
      <div className="row align-items-center form-group-actions margin-top-20 margin-bottom-20">
        <div className="col-xl-12">
          <div className="form-group form-group-inline">
            <div className="form-label form-label-no-wrap">
              <label className="font-bold font-danger">
                <span>
                  Selected records count: <b>{ledgerTypesUIProps.ids.length}</b>
                </span>
              </label>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-danger font-weight-bolder font-size-sm"
                onClick={ledgerTypesUIProps.openDeleteLedgerTypesDialog}
              >
                <i className="fa fa-trash"></i> Delete All
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-light-primary font-weight-bolder font-size-sm"
                onClick={ledgerTypesUIProps.openFetchLedgerTypesDialog}
              >
                <i className="fa fa-stream"></i> Fetch Selected
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-light-primary font-weight-bolder font-size-sm"
                onClick={ledgerTypesUIProps.openUpdateLedgerTypesStatusDialog}
              >
                <i className="fa fa-sync-alt"></i> Update Status
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
