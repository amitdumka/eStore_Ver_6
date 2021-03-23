import React from "react";
import {
  MixedWidget1,
  MixedWidget14,
  ListsWidget9,
  StatsWidget11,
  StatsWidget12,
  ListsWidget1,
  AdvanceTablesWidget2,
  AdvanceTablesWidget4,
  CashBookTableWidget,
  ListsWidget3,
  ListsWidget4,
  ListsWidget8,
  MixedWidget6,
  ListsWidget10,
  ListsWidget11,
  TilesWidget1,
  TilesWidget13,
  TilesWidget11,
  TilesWidget12,
} from "../widgets";

export function Demo4Dashboard({ totalCashBook, cashBook, masterReports }) {
  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-xxl-4">
          <MixedWidget1 className="card-stretch gutter-b" />
        </div>
        <div className="col-lg-6 col-xxl-4 ">
          <ListsWidget9 className="card-stretch gutter-b" />
        </div>
        <div className="col-lg-6 col-xxl-4 ">
          <ListsWidget4 className="card-stretch gutter-b" />
        </div>
        <div className="col-xl-4 ">
          <TilesWidget1 className="gutter-b card-stretch" chartColor="danger" />
        </div>
        <div className="col-lg-6 col-xxl-4 ">
          <MixedWidget6 className="gutter-b card-stretch" chartColor="danger" />
        </div>
        <div className="col-lg-6 col-xxl-4">
          <StatsWidget11
            className="card-stretch card-stretch-half gutter-b"
            symbolShape="circle"
            baseColor="success"
          />
          <StatsWidget12 className="card-stretch card-stretch-half gutter-b" />
        </div>
        <div className="row order-1 order-xxl-2 ">
          <div className="col-xl-6">
            <TilesWidget11
              className="gutter-b"
              baseColor="primary"
              widgetHeight="150px"
            />
          </div>
          <div className="col-xl-6">
            <TilesWidget12
              className="gutter-b"
              iconColor="success"
              widgetHeight="150px"
            />
          </div>
        </div>
      </div>
      {/* begin::Row */}
      <div className="row">
        <div className="col-lg-6">
          <ListsWidget10 className="card-stretch gutter-b" />
        </div>
        <div className="col-lg-6">
          <ListsWidget11 className="card-stretch gutter-b" />
        </div>
      </div>
      <div className="row">
        <div className="col-xxl-8 order-2 order-xxl-1">
          <CashBookTableWidget
            className="card-stretch gutter-b"
            cashBook={cashBook} totalCount={totalCashBook}
          />
        </div>
      </div>
      {/* end::Row */}
    </>
  );
}
