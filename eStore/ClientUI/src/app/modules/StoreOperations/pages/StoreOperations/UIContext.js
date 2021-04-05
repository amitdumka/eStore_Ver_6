import React, { createContext, useContext, useState, useCallback } from "react";
import { isEqual, isFunction } from "lodash";
import { initialFilter } from "./UIHelpers";

//StoreOperation

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

  const initOpen = {
    storeOpenId: 0,
    storeId: 0,
    remarks: null,
    OpenningTime: new Date(),
    store: null,
    userId: "WebUI",
    isReadOnly: false,
  };
  const initClose = {
    storeCloseId: 0,
    storeId: 0,
    remarks: null,
    closingDate: new Date(),
    store: null,
    userId: "WebUI",
    isReadOnly: false,
  };

  const initHoliday = {
    storeHolidayId: 0,
    storeId: 0,
    store: null,
    entryStatus: 0,
    isReadOnly: false,
    onDate: new Date(),
    reason: "",
    remark: "",
    approvedBY: "",
  };

  const value = {
    queryParams,
    setQueryParamsBase,
    ids,
    setIds,
    setQueryParams,
    initOpen,
    initClose,
    initHoliday,
    newButtonClick: UIEvents.newButtonClick,
    openEditDialog: UIEvents.openEditDialog,
    openDeleteDialog: UIEvents.openDeleteDialog,
    openDeleteDialog: UIEvents.openDeleteDialog,
    openFetchDialog: UIEvents.openFetchDialog,
    openUpdateStatusDialog: UIEvents.openUpdateStatusDialog,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}
