import React, { createContext, useContext, useState, useCallback } from "react";
import { isEqual, isFunction } from "lodash";
import { initialFilter } from "./UIHelpers";

//BankAccount
//bankAccount

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

  const initBankAccount = {
    bankAccountId: 0,
    bankId: 0,
    account: null,
    branchName: "",
    accountType: 0
  };

  const value = {
    queryParams,
    setQueryParamsBase,
    ids,
    setIds,
    setQueryParams,
    initBankAccount,
    newBankAccountButtonClick: UIEvents.newBankAccountButtonClick,
    openEditBankAccountDialog: UIEvents.openEditBankAccountDialog,
    openDeleteBankAccountDialog: UIEvents.openDeleteBankAccountDialog,
    openDeleteBankAccountsDialog: UIEvents.openDeleteBankAccountsDialog,
    openFetchBankAccountsDialog: UIEvents.openFetchBankAccountsDialog,
    openUpdateBankAccountsStatusDialog:
      UIEvents.openUpdateBankAccountsStatusDialog,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}
