import React, { useMemo } from "react";
import { useUIContext } from "../UIContext";

//BillPayment
//billpayment


export function BillPaymentsGrouping() {
  // BillPayments UI Context
  const billpaymentsUIContext = useUIContext();
  const billpaymentsUIProps = useMemo(() => {
    return {
      ids: billpaymentsUIContext.ids,
      setIds: billpaymentsUIContext.setIds,
      openDeleteBillPaymentsDialog: billpaymentsUIContext.openDeleteBillPaymentsDialog,
      openFetchBillPaymentsDialog: billpaymentsUIContext.openFetchBillPaymentsDialog,
      openUpdateBillPaymentsStatusDialog:
        billpaymentsUIContext.openUpdateBillPaymentsStatusDialog,
    };
  }, [billpaymentsUIContext]);

  return (
    <div className="form">
      <div className="row align-items-center form-group-actions margin-top-20 margin-bottom-20">
        <div className="col-xl-12">
          <div className="form-group form-group-inline">
            <div className="form-label form-label-no-wrap">
              <label className="font-bold font-danger">
                <span>
                  Selected records count: <b>{billpaymentsUIProps.ids.length}</b>
                </span>
              </label>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-danger font-weight-bolder font-size-sm"
                onClick={billpaymentsUIProps.openDeleteBillPaymentsDialog}
              >
                <i className="fa fa-trash"></i> Delete All
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-light-primary font-weight-bolder font-size-sm"
                onClick={billpaymentsUIProps.openFetchBillPaymentsDialog}
              >
                <i className="fa fa-stream"></i> Fetch Selected
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-light-primary font-weight-bolder font-size-sm"
                onClick={billpaymentsUIProps.openUpdateBillPaymentsStatusDialog}
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
