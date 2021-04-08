import React, { useEffect, useMemo } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../_redux/StoreOperations/Actions";
import {
  getSelectRow,
  getHandlerTableChange,
  NoRecordsFoundMessage,
  PleaseWaitMessage,
  sortCaret,
  headerSortingClasses,
} from "../../../../../_metronic/_helpers";
import * as uiHelpers from "./UIHelpers";
import * as columnFormatters from "./column-formatters";
import { Pagination } from "../../../../../_metronic/_partials/controls";
import { useUIContext } from "./UIContext";
//import { Tab } from "@material-ui/core";
import { Tab, Tabs } from "react-bootstrap";

export function DataListView() {
  const uiContext = useUIContext();
  const uiProps = useMemo(() => {
    return {
      ids: uiContext.ids,
      setIds: uiContext.setIds,
      queryParams: uiContext.queryParams,
      setQueryParams: uiContext.setQueryParams,
      openEditDialog: uiContext.openEditDialog,
      openDeleteDialog: uiContext.openDeleteDialog,
    };
  }, [uiContext]);

  // Stoer Operation state
  const { currentState } = useSelector(
    (state) => ({ currentState: state.storeOperations }),
    shallowEqual
  );
  const {
    totalOpens,
    totalCloses,
    totalHolidays,
    entitiesOpens,
    entitiesCloses,
    entitiesHolidays,
    listLoading,
  } = currentState;
  const totalCount = totalOpens ? totalOpens : 0;
  // Store Operation Redux state
  const dispatch = useDispatch();
  useEffect(() => {
    // clear selections list
    uiProps.setIds([]);
    // server call by queryParams
    dispatch(actions.fetchStoreOpens(uiProps.queryParams));
    dispatch(actions.fetchStoreCloses(uiProps.queryParams));
    dispatch(actions.fetchStoreHolidays(uiProps.queryParams));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uiProps.queryParams, dispatch]);

  const columnOpens = [
    {
      dataField: "storeOpenId",
      text: "ID",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "openningTime",
      text: "Time",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "remarks",
      text: "Remarks",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "storeId",
      text: "Store",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
    },

    {
      dataField: "action",
      text: "Actions",
      formatter: columnFormatters.ActionsColumnFormatter,
      formatExtraData: {
        openEditRentDialog: uiProps.openEditRentDialog,
        openDeleteRentDialog: uiProps.openDeleteRentDialog,
      },
      classes: "text-right pr-0",
      headerClasses: "text-right pr-3",
      style: {
        minWidth: "100px",
      },
    },
  ];
  const columnCloses = [
    {
      dataField: "storeCloseId",
      text: "ID",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "closingDate",
      text: "Time",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "remarks",
      text: "Remarks",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "storeId",
      text: "Store",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
    },

    {
      dataField: "action",
      text: "Actions",
      formatter: columnFormatters.ActionsColumnFormatter,
      formatExtraData: {
        openEditRentDialog: uiProps.openEditRentDialog,
        openDeleteRentDialog: uiProps.openDeleteRentDialog,
      },
      classes: "text-right pr-0",
      headerClasses: "text-right pr-3",
      style: {
        minWidth: "100px",
      },
    },
  ];

  const columnHolidays = [
    {
      dataField: "storeCloseId",
      text: "ID",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "onDate",
      text: "Time",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "reason",
      text: "Reason",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "remarks",
      text: "Remarks",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "approvedBy",
      text: "Approved By",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "storeId",
      text: "Store",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
    },

    {
      dataField: "action",
      text: "Actions",
      formatter: columnFormatters.ActionsColumnFormatter,
      formatExtraData: {
        openEditRentDialog: uiProps.openEditRentDialog,
        openDeleteRentDialog: uiProps.openDeleteRentDialog,
      },
      classes: "text-right pr-0",
      headerClasses: "text-right pr-3",
      style: {
        minWidth: "100px",
      },
    },
  ];
  return (
    <>
      <Tabs defaultActiveKey="daily" id="storeOperationsTab">
        <Tab eventKey="daily" title="Daily Ops" label="Daily">
          <DisplayTable
            listLoading={listLoading}
            uiHelper={uiHelpers}
            uiProps={uiProps}
            idFieldName="storeOpenId"
            totalCount={totalCount}
            entities={entitiesOpens}
            columns={columnOpens}
          />
        </Tab>
        <Tab eventKey="close" title="Closes" label="Closes">
          {/* <DisplayTable listLoading={listLoading} uiHelpers={uiHelpers} uiProps={uiProps}
              idFieldName="storeCloseId" totalCount={totalCloses} entities={entitiesCloses} columns={columnCloses}
              /> */}
          <div>Second Page</div>
        </Tab>
        <Tab eventKey="holiday" title="Holiday" label="Holiday">
          {/* <DisplayTable  listLoading={listLoading} uiHelpers={uiHelpers} uiProps={uiProps}
              idFieldName="storeHolidayId" totalCount={totalHolidays} entities={entitiesHolidays} columns={columnHolidays}
              /> */}
          <div>Third Page</div>
        </Tab>
      </Tabs>
    </>
  );
}

export function DisplayTable(
  listLoading,
  entities,
  totalCount,
  columns,
  idFieldName
) {
  const uiContext = useUIContext();
  const uiProps = useMemo(() => {
    return {
      ids: uiContext.ids,
      setIds: uiContext.setIds,
      queryParams: uiContext.queryParams,
      setQueryParams: uiContext.setQueryParams,
      openEditDialog: uiContext.openEditDialog,
      openDeleteDialog: uiContext.openDeleteDialog,
    };
  }, [uiContext]);

  // Table pagination properties
  const paginationOptions = {
    custom: true,
    totalSize: totalCount,
    sizePerPageList: uiHelpers.sizePerPageList,
    sizePerPage: uiProps.queryParams.sizePage,
    page: uiProps.queryParams.pageNumber,
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
                bordered={false}
                classes="table table-head-custom table-vertical-center overflow-hidden"
                bootstrap4
                remote
                noDataIndication="No Record Found now.."
                keyField={idFieldName}
                data={entities === null ? [] : totalCount ? entities : []}
                columns={columns}
                defaultSorted={uiHelpers.defaultSorted}
                onTableChange={getHandlerTableChange(uiProps.setQueryParams)}
                selectRow={getSelectRow({
                  entities,
                  ids: uiProps.ids,
                  setIds: uiProps.setIds,
                  idName: idFieldName,
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
