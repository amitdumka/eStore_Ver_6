// React bootstrap table next =>
// DOCS: https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/
// STORYBOOK: https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html

import React, { useEffect, useMemo } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../_redux/connections/Actions";
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

//Connection
//connection

export function ConnectionsTable() {
  // Connections UI Context
  const connectionsUIContext = useUIContext();
  const connectionsUIProps = useMemo(() => {
    return {
      ids: connectionsUIContext.ids,
      setIds: connectionsUIContext.setIds,
      queryParams: connectionsUIContext.queryParams,
      setQueryParams: connectionsUIContext.setQueryParams,
      openEditConnectionDialog:
        connectionsUIContext.openEditConnectionDialog,
      openDeleteConnectionDialog:
        connectionsUIContext.openDeleteConnectionDialog,
    };
  }, [connectionsUIContext]);

  // Getting curret state of connections list from store (Redux)
  const { currentState } = useSelector(
    (state) => ({ currentState: state.connections }),
    shallowEqual
  );
  const { totalCount, entities, listLoading } = currentState;

  // Connections Redux state
  const dispatch = useDispatch();
  useEffect(() => {
    // clear selections list
    connectionsUIProps.setIds([]);
    // server call by queryParams
    dispatch(actions.fetchConnections(connectionsUIProps.queryParams));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connectionsUIProps.queryParams, dispatch]);
  // Table columns
  const columns = [
    {
      dataField: "connectionId",
      text: "ID",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "placeName",
      text: "Place Name",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "address",
      text: "Address",
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
      dataField: "vacatedDate",
      text: "Vacated Date",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "city",
      text: "City",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "ownerName",
      text: "Owner Name",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "mobileNo",
      text: "Mobile No",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "rentAmount",
      text: "Rent Amount",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "advanceAmount",
      text: "Advance Amount",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
    },{
      dataField: "isRented",
      text: "Occupied",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
    },{
      dataField: "rentType",
      text: "Rent Type",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "action",
      text: "Actions",
      formatter: columnFormatters.ActionsColumnFormatter,
      formatExtraData: {
        openEditConnectionDialog:
          connectionsUIProps.openEditConnectionDialog,
        openDeleteConnectionDialog:
          connectionsUIProps.openDeleteConnectionDialog,
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
    sizePerPage: connectionsUIProps.queryParams.pageSize,
    page: connectionsUIProps.queryParams.pageNumber,
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
                keyField="connectionId"
                data={entities === null ? [] : totalCount ? entities : []}
                //data={[]}
                columns={columns}
                defaultSorted={uiHelpers.defaultSorted}
                onTableChange={getHandlerTableChange(
                  connectionsUIProps.setQueryParams
                )}
                selectRow={getSelectRow({
                  entities,
                  ids: connectionsUIProps.ids,
                  setIds: connectionsUIProps.setIds,
                  idName: "connectionId",
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
