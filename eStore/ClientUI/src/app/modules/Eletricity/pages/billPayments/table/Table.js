// React bootstrap table next =>
// DOCS: https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/
// STORYBOOK: https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html

import React, { useEffect, useMemo } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../_redux/billpayments/Actions";
import {
  getSelectRow,
  getHandlerTableChange,
  NoRecordsFoundMessage,
  PleaseWaitMessage,
  sortCaret,
  headerSortingClasses,
} from "../../../../../../_metronic/_helpers";
import * as uiHelpers from "../UIHelpers";
import * as columnFormatters from "./column-formatters";
import { Pagination } from "../../../../../../_metronic/_partials/controls";
import { useUIContext } from "../UIContext";

//BillPayment
//billpayment

export function BillPaymentsTable() {
  // BillPayments UI Context
  const billpaymentsUIContext = useUIContext();
  const billpaymentsUIProps = useMemo(() => {
    return {
      ids: billpaymentsUIContext.ids,
      setIds: billpaymentsUIContext.setIds,
      queryParams: billpaymentsUIContext.queryParams,
      setQueryParams: billpaymentsUIContext.setQueryParams,
      openEditBillPaymentDialog:
        billpaymentsUIContext.openEditBillPaymentDialog,
      openDeleteBillPaymentDialog:
        billpaymentsUIContext.openDeleteBillPaymentDialog,
    };
  }, [billpaymentsUIContext]);

  // Getting curret state of billpayments list from store (Redux)
  const { curbillpaymentState } = useSelector(
    (state) => ({ curbillpaymentState: state.billpayments }),
    shallowEqual
  );
  const { totalCount, entities, listLoading } = curbillpaymentState;

  // BillPayments Redux state
  const dispatch = useDispatch();
  useEffect(() => {
    // clear selections list
    billpaymentsUIProps.setIds([]);
    // server call by queryParams
    dispatch(actions.fetchBillPayments(billpaymentsUIProps.queryParams));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [billpaymentsUIProps.queryParams, dispatch]);
  // Table columns
  const columns = [
    {
      dataField: "billpaymentId",
      text: "ID",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "location.placeName",
      text: "BillPaymented Location",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "billpaymentType",
      text: "BillPayment Type",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "onDate",
      text: "Date",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "period",
      text: "Period",
      sort: false,
      
      sortCaret: sortCaret,
    },
    {
      dataField: "amount",
      text: "Amount",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "mode",
      text: "Mode",
      sort: true,
      //formatter:columnFormatters.TypeColumnFormatter,
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "paymentDetails",
      text: "Payment Details",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "remarks",
      text: "Remarks",
      sort: false,
      //formatter:columnFormatters.TypeColumnFormatter,
      sortCaret: sortCaret,
    },
    {
      dataField: "action",
      text: "Actions",
      formatter: columnFormatters.ActionsColumnFormatter,
      formatExtraData: {
        openEditBillPaymentDialog:
          billpaymentsUIProps.openEditBillPaymentDialog,
        openDeleteBillPaymentDialog:
          billpaymentsUIProps.openDeleteBillPaymentDialog,
      },
      classes: "text-right pr-0",
      headerClasses: "text-right pr-3",
      style: {
        minWidth: "100px",
      },
    },
  ];
  // Table pagination properties
  const paginationOptions = {
    custom: true,
    totalSize: totalCount,
    sizePerPageList: uiHelpers.sizePerPageList,
    sizePerPage: billpaymentsUIProps.queryParams.pageSize,
    page: billpaymentsUIProps.queryParams.pageNumber,
  };

  return (
    <>
      <PaginationProvider pagination={paginationFactory(paginationOptions)}>
        {({ paginationProps, paginationTableProps }) => {
          return (
            <Pagination
              isLoading={listLoading}
              paginationProps={paginationProps}
            >
              <BootstrapTable
                wrapperClasses="table-responsive"
                bordered={true}
                classes="table table-head-custom table-vertical-center overflow-hidden"
                bootstrap4
                remote
                noDataIndication="No Record Found now.."
                keyField="billpaymentId"
                data={entities === null ? [] : totalCount ? entities : []}
                //data={[]}
                columns={columns}
                defaultSorted={uiHelpers.defaultSorted}
                onTableChange={getHandlerTableChange(
                  billpaymentsUIProps.setQueryParams
                )}
                selectRow={getSelectRow({
                  entities,
                  ids: billpaymentsUIProps.ids,
                  setIds: billpaymentsUIProps.setIds,
                  idName: "billpaymentId",
                })}
                {...paginationTableProps}
              >
                <PleaseWaitMessage entities={entities} />
                <NoRecordsFoundMessage entities={entities} />
              </BootstrapTable>
            </Pagination>
          );
        }}
      </PaginationProvider>
    </>
  );
}
