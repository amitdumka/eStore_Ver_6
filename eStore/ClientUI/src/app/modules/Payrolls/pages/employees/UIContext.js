import React, { createContext, useContext, useState, useCallback } from "react";
import { isEqual, isFunction } from "lodash";
import { initialFilter } from "./UIHelpers";

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

  const initEmployee = {
    employeeId: 0,
    firstName: "Alok1",
    lastName: "Kumar1 ",
    staffName: "Alok Kumar1 ",
    mobileNo: "9386601284",
    joiningDate: "2016-02-17T00:00:00",
    leavingDate: null,
    isWorking: true,
    category: 1,
    isTailors: false,
    eMail: "alokkumar18111@gmail.com",
    dateOfBirth: "0001-01-01T00:00:00",
    adharNumber: "483173455467",
    panNo: "FDVPK0626P",
    otherIdDetails: "N/A",
    address: "Shiv Pahar Dumka",
    city: "Dumka",
    state: "Jharkhand",
    fatherName: "Rabindra Chandra Das",
    highestQualification: "",
    salesmen: null,
    attendances: null,
    user: null,
    storeId: 1,
    store: null,
    userId: "TestID",
    entryStatus: 0,
    isReadOnly: false,
  };

  const value = {
    queryParams,
    setQueryParamsBase,
    ids,
    setIds,
    setQueryParams,
    initEmployee,
    newEmployeeButtonClick: UIEvents.newEmployeeButtonClick,
    openEditEmployeeDialog: UIEvents.openEditEmployeeDialog,
    openDeleteEmployeeDialog: UIEvents.openDeleteEmployeeDialog,
    openDeleteEmployeesDialog: UIEvents.openDeleteEmployeesDialog,
    openFetchEmployeesDialog: UIEvents.openFetchEmployeesDialog,
    openUpdateEmployeesStatusDialog: UIEvents.openUpdateEmployeesStatusDialog,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}
