// React bootstrap table next =>
// DOCS: https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/
// STORYBOOK: https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html

import React, { useEffect, useMemo } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../_redux/bookings/Actions";
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

//booking
//Booking


export function BookingsTable() {
  // Bookings UI Context
  const bookingsUIContext = useUIContext();
  const bookingsUIProps = useMemo(() => {
    return {
      ids: bookingsUIContext.ids,
      setIds: bookingsUIContext.setIds,
      queryParams: bookingsUIContext.queryParams,
      setQueryParams: bookingsUIContext.setQueryParams,
      openEditBookingDialog: bookingsUIContext.openEditBookingDialog,
      openDeleteBookingDialog: bookingsUIContext.openDeleteBookingDialog,
    };
  }, [bookingsUIContext]);

  // Getting curret state of bookings list from store (Redux)
  const { currentState ,taxTypes} = useSelector(
    (state) => ({ currentState: state.bookings , taxTypes:state.bookings.bookings}),
    shallowEqual
  );
  const { totalCount, entities, listLoading } = currentState;

  // Bookings Redux state
  const dispatch = useDispatch();
  useEffect(() => {
    // clear selections list
    bookingsUIProps.setIds([]);
    // server call by queryParams
    dispatch(actions.fetchBookings(bookingsUIProps.queryParams));
    dispatch(actions.fetchTaxType());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookingsUIProps.queryParams, dispatch]);
  // Table columns
  const columns = [
    {
      dataField: "bookingId",
      text: "ID",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "ledgerNameType",
      text: "Booking Name",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "category",
      text: "Category",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "remark",
      text: "Remark",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "action",
      text: "Actions",
      formatter: columnFormatters.ActionsColumnFormatter,
      formatExtraData: {
        openEditBookingDialog: bookingsUIProps.openEditBookingDialog,
        openDeleteBookingDialog: bookingsUIProps.openDeleteBookingDialog,
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
    sizePerPage: bookingsUIProps.queryParams.pageSize,
    page: bookingsUIProps.queryParams.pageNumber,
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
                keyField="bookingId"
                data={entities === null ? []: totalCount ?entities:[]}
                //data={[]}
                columns={columns}
                defaultSorted={uiHelpers.defaultSorted}
                onTableChange={getHandlerTableChange(
                  bookingsUIProps.setQueryParams
                )}
                selectRow={getSelectRow({
                  entities,
                  ids: bookingsUIProps.ids,
                  setIds: bookingsUIProps.setIds,
                  idName:"bookingId",
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
