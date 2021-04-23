import React, { createContext, useContext, useState, useCallback } from "react";
import { isEqual, isFunction } from "lodash";
import { initialFilter } from "./UIHelpers";

//pettyCashBook
//PettyCashBook
const UIContext = createContext();

export function useUIContext() {
  return useContext(UIContext);
}

export const UIConsumer = UIContext.Consumer;

export function UIProvider({ UIEvents, children }) {
  const [queryParams, setQueryParamsBase] = useState(initialFilter);
  const [ids, setIds] = useState([]);
  const setQueryParams = useCallback((nextQueryParams) => {
    setQueryParamsBase((prevQueryParams) => {
      if (isFunction(nextQueryParams)) {
        nextQueryParams = nextQueryParams(prevQueryParams);
      }

      if (isEqual(prevQueryParams, nextQueryParams)) {
        return prevQueryParams;
      }

      return nextQueryParams;
    });
  }, []);

  const initData = {
    storeHolidayId: 0,
    userId: "WebUI",
    entryStatus: 0,
    isReadOnly: false,
    storeId: 1,
    onDate: new Date(),
    reason: 0,
    remarks: "",
    approvedBy: "",
    endDate:null,
    nDays:false,
  };

  const initStoreHoliday={
    storeHolidayId: 0,
    userId: "WebUI",
    entryStatus: 0,
    isReadOnly: false,
    storeId: 1,
    onDate: new Date(),
    reason: 0,
    remarks: "",
    approvedBy: "",
  };

  const initNHolidays={
    holiday:null, 
    endDate:null,
  }
  const value = {
    queryParams,
    setQueryParamsBase,
    ids,
    setIds,
    setQueryParams,
    initData,
    initStoreHoliday, initNHolidays,
    newPettyCashBookButtonClick: UIEvents.newPettyCashBookButtonClick,  
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}
