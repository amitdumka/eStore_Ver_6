<<<<<<< HEAD
import React, { useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { LoadingDialog } from "../../../../../../_metronic/_partials/controls";

export function CustomersLoadingDialog() {
  // Customers Redux state
  const { isLoading } = useSelector(
    (state) => ({ isLoading: state.customers.listLoading }),
    shallowEqual
  );
  // looking for loading/dispatch
  useEffect(() => {}, [isLoading]);
  return <LoadingDialog isLoading={isLoading} text="Loading ..." />;
}
=======
import React, { useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { LoadingDialog } from "../../../../../../_metronic/_partials/controls";

export function CustomersLoadingDialog() {
  // Customers Redux state
  const { isLoading } = useSelector(
    (state) => ({ isLoading: state.customers.listLoading }),
    shallowEqual
  );
  // looking for loading/dispatch
  useEffect(() => {}, [isLoading]);
  return <LoadingDialog isLoading={isLoading} text="Loading ..." />;
}
>>>>>>> b7b54ae91bc076d49d998cdb8c5571fa8e3cf47b
