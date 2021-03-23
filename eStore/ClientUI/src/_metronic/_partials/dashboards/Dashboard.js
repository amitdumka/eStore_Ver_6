//import React, { useMemo } from "react";
import React, { useEffect, useMemo } from "react";
import objectPath from "object-path";
import { useHtmlClassService } from "../../layout";
import { Demo1Dashboard } from "./Demo1Dashboard";
import { Demo2Dashboard } from "./Demo2Dashboard";
import { Demo3Dashboard } from "./Demo3Dashboard";
import { Demo4Dashboard } from "./Demo4Dashboard";
import { Demo5Dashboard } from "./Demo5Dashboard";
import { Demo6Dashboard } from "./Demo6Dashboard";
import { Demo7Dashboard } from "./Demo7Dashboard";

import * as actions from "../../../redux/dashboard/Action";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

export function Dashboard() {
  const uiService = useHtmlClassService();
  // Getting curret state of cashPayments list from store (Redux)
  const { currentState } = useSelector(
    (state) => ({ currentState: state.dashboard }),
    shallowEqual
  );
  const { totalCount, totalCashBook, cashBookEntities, masterReportEntities, listLoading } = currentState;
   // CashPayments Redux state
   const dispatch = useDispatch();
   useEffect(() => {
     dispatch(actions.fetchMasterReport());
     dispatch(actions.fetchCashBook());
     // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [null, dispatch]);

  const layoutProps = useMemo(() => {
    return {
      demo: objectPath.get(uiService.config, "demo"),
    };
  }, [uiService]);
  return (
    <>
      {layoutProps.demo === "demo1" && <Demo4Dashboard  totalCashBook={totalCashBook} masterReports={masterReportEntities} cashBook={cashBookEntities}/>}
      {/* 
        {layoutProps.demo === 'demo2' && <Demo2Dashboard />}
        {layoutProps.demo === 'demo3' && <Demo3Dashboard />}
        {layoutProps.demo === 'demo4' && <Demo4Dashboard />}*/}
    </>
  );
}
