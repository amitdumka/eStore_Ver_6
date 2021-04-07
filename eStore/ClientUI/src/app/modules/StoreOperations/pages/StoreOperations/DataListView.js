import React, { useEffect, useMemo } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../_redux/rents/Actions";
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
import { Tab } from "@material-ui/core";

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
    totdalHoliday,
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
    dispatch(actions.fetchOpens(uiProps.queryParams));
    dispatch(actions.fetchCloses(uiProps.queryParams));
    dispatch(actions.fetchHolidays(uiProps.queryParams));
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
  return (
      <>
      <Tab defaultActiveKey="daily" id="storeOperationsTab">
          <Tab eventKey="daily" title="Daily Ops">
              <DisplayTable  listLoading={listLoading} uiHelpers={uiHelpers} uiProps={uiProps}
              idFieldName="storeOpenId" totalCount={totalOpens} entities={entitiesOpens} columns={columnOpens}
              />
          </Tab>
          <Tab eventKey="close" title="Closes">
          <DisplayTable listLoading={listLoading} uiHelpers={uiHelpers} uiProps={uiProps}
              idFieldName="storeCloseId" totalCount={totalCloses} entities={entitiesCloses} columns={columnCloses}
              />
          </Tab>
          <Tab eventKey="holiday" title="Holiday">
          <DisplayTable  listLoading={listLoading} uiHelpers={uiHelpers} uiProps={uiProps}
              idFieldName="storeHolidayId" totalCount={totalHolidays} entities={entitiesHolidays} columns={columnCloses}
              />
          </Tab>

      </Tab>
      </>
  );


}

export function DisplayTable( listLoading,  entities, totalCount, columns,uiHelpers,uiProps, idFieldName) {
// Table pagination properties
const paginationOptions = {
    custom: true,
    totalSize: totalCount,
    sizePerPageList: uiHelpers.sizePerPageList,
    sizePerPage: uiProps.queryParams.pageSize,
    page: uiProps.queryParams.pageNumber,
  };
return (<>
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
