import React, { createContext, useContext, useState, useCallback } from "react";
import { isEqual, isFunction } from "lodash";
import { initialFilter } from "./StoreUIHelpers";

const StoresUIContext = createContext();

export function useStoresUIContext() {
  return useContext(StoresUIContext);
}
export function getCurrentDate(separator=''){

  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  
  return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}0${date}T00:00:00`
  }
export const StoreUIConsumer = StoresUIContext.Consumer;

export function StoresUIProvider({ storesUIEvents, children }) {
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
  
  const initStore = {
    storeId: 1,
    storeCode: "JH0006",
    storeName: "Aprajita Retails",
    address: "Bhagalpur Road Dumka",
    city: "Dumka",
    pinCode: "814101",
    phoneNo: "06434-224461",
    storeManagerName: "Alok Kumar",
    storeManagerPhoneNo: "06434-224461",
    panNo: "AJHPA7396P",
    gstno: "20AJHPA739P1zv",
    noOfEmployees: 9,
    openingDate: "2016-02-17T00:00:00",
    closingDate: null,
    status: true,
    companyId: null,
    company: null,
    userId: null,
    entryStatus: 0,
    isReadOnly: false,
  };

  const value = {
    queryParams,
    setQueryParamsBase,
    ids,
    setIds,
    setQueryParams,
    initStore,
    newStoreButtonClick: storesUIEvents.newStoreButtonClick,
    openEditStoreDialog: storesUIEvents.openEditStoreDialog,
    openDeleteStoreDialog: storesUIEvents.openDeleteStoreDialog,
    openDeleteStoresDialog: storesUIEvents.openDeleteStoreDialog,
    openFetchStoreDialog: storesUIEvents.openFetchStoreDialog,
    openUpdateStoreStatusDialog:
      storesUIEvents.openUpdateStoreStatusDialog,
  };

  return (
    <StoresUIContext.Provider value={value}>
      {children}
    </StoresUIContext.Provider>
  );
}
