import React, { createContext, useContext, useState, useCallback } from "react";
import { isEqual, isFunction } from "lodash";
import { initialFilter } from "./UIHelpers";

//rent
//Rent
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

  const initRent = {
    rentId: 0,
    bankId: 0,
    account: "",
    branchName: "",
    accountType: 0,
    bankTranscations:null,
    bankDeposits:null,
    bankWithdrawals:null,
    banks:null
  };

  const value = {
    queryParams,
    setQueryParamsBase,
    ids,
    setIds,
    setQueryParams,
    initRent,
    newRentButtonClick: UIEvents.newRentButtonClick,
    openEditRentDialog: UIEvents.openEditRentDialog,
    openDeleteRentDialog: UIEvents.openDeleteRentDialog,
    openDeleteRentsDialog: UIEvents.openDeleteRentsDialog,
    openFetchRentsDialog: UIEvents.openFetchRentsDialog,
    openUpdateRentsStatusDialog:
      UIEvents.openUpdateRentsStatusDialog,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}
