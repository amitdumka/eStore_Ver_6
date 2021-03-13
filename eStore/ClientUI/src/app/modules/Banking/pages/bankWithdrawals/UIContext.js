import React, { createContext, useContext, useState, useCallback } from "react";
import { isEqual, isFunction } from "lodash";
import { initialFilter } from "./UIHelpers";

//BankWithdrawal
//bankWithdrawal

const UIContext = createContext();

export function useUIContext() {
  return useContext(UIContext);
}

export function getCurrentDate(separator = "") {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}0${date}T00:00:00`;
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

  const initBankWithdrawal = {
    bankWithdrawalId: 0,
    employeeId: 1,
    employee: null,
    attDate: new Date(),
    entryTime: "",
    status: 0,
    remarks: "Testing",
    isTailoring: false,
    storeId: 1,
    store: null,
    userId: "AlokKumar",
    entryStatus: 0,
    isReadOnly: false,
  };

  const value = {
    queryParams,
    setQueryParamsBase,
    ids,
    setIds,
    setQueryParams,
    initBankWithdrawal,
    newBankWithdrawalButtonClick: UIEvents.newBankWithdrawalButtonClick,
    openEditBankWithdrawalDialog: UIEvents.openEditBankWithdrawalDialog,
    openDeleteBankWithdrawalDialog: UIEvents.openDeleteBankWithdrawalDialog,
    openDeleteBankWithdrawalsDialog: UIEvents.openDeleteBankWithdrawalsDialog,
    openFetchBankWithdrawalsDialog: UIEvents.openFetchBankWithdrawalsDialog,
    openUpdateBankWithdrawalsStatusDialog:
      UIEvents.openUpdateBankWithdrawalsStatusDialog,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}
