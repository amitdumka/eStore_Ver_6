
import React, { useEffect, useMemo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../_redux/Actions";

export  function ReportTable() {

    // Getting curret state of rents list from store (Redux)
  const { currentState } = useSelector(
    (state) => ({ currentState: state.rents }),
    shallowEqual
  );
  const { totalCount, incomeExpensesEntities, listLoading } = currentState;

  // Report Redux state
  const dispatch = useDispatch();
  useEffect(() => {
    // server call 
    dispatch(actions.fetchIncomeExpenses());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ dispatch]);

  const IEReport=(data)=>{
      const title=data.title;
      return (<>
      <h4> {title} Report</h4>
      <div className="col-6">
      <table className="table table table-head-custom table-vertical-center overflow-hidden">
        {/* Income Part */}
        <tr><td>Income</td><td></td></tr>
        <tr><td>TotalSale</td><td></td></tr>
        <tr><td>TotalManualSale</td><td></td></tr>
        <tr><td>TotalTailoringSale</td><td></td></tr>
        <tr><td>TotalCashRecipts</td><td></td></tr>
        <tr><td>TotalRecipts</td><td></td></tr>
        <tr><td>TotalOtherIncome</td><td></td></tr>
        
         {/* Expenses */}
         <tr><td>Expenses</td><td></td></tr>
        <tr><td>TotalExpenses</td><td></td></tr>
        <tr><td>TotalOthersExpenses</td><td></td></tr>
        <tr><td>TotalPayments</td><td></td></tr>
        <tr><td>TotalStaffPayments</td><td></td></tr>
        <tr><td>TotalCashPayments</td><td></td></tr>
        <tr><td>TotalHomeExpenses</td><td></td></tr>
        {/* Dues */}
        <tr><td>Dues</td><td></td></tr>
        <tr><td>TotalDues</td><td></td></tr>
        <tr><td>TotalRecovery</td><td></td></tr>
        {/** Footer */}
        <tr><td></td><td></td></tr>
        <tr><td></td><td></td></tr>
      </table>
      </div>
      </>);
  };

    return (
      <div>
      {incomeExpensesEntities ? incomeExpensesEntities.map((item)=><IEReport data={item}/>):<h3 className="text-warning"> No Data Avialable </h3>}
       </div>
    )
}
