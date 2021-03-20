import React, { createContext, useContext, useState, useCallback } from "react";
import { isEqual, isFunction } from "lodash";
import { initialFilter } from "./UIHelpers";

const UIContext = createContext();

export function useUIContext() {
  return useContext(UIContext);
}

//booking
//Booking

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

  const initBooking = {
    purchaseItemId: 0,
    taxName: "",
    taxType: 0,
    compositeRate: 0.0,
  };

  const value = {
    queryParams,
    setQueryParamsBase,
    ids,
    setIds,
    setQueryParams,
    initBooking,
    newBookingButtonClick: UIEvents.newBookingButtonClick,
    openEditBookingDialog: UIEvents.openEditBookingDialog,
    openDeleteBookingDialog: UIEvents.openDeleteBookingDialog,
    openDeleteBookingsDialog: UIEvents.openDeleteBookingsDialog,
    openFetchBookingsDialog: UIEvents.openFetchBookingsDialog,
    openUpdateBookingsStatusDialog:
      UIEvents.openUpdateBookingsStatusDialog,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}
