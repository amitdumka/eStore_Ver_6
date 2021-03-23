import * as requestFromServer from "./Crud";
import { dashboardSlice, callTypes } from "./Slice";

//CashPayment
//cashPayment

const { actions } = dashboardSlice;

export const fetchMasterReport = () => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.list }));

  return requestFromServer
    .getMasterReport()
    .then((response) => {
      const entities = response.data;
      console.log(entities);
      dispatch(actions.masterReportFetched({ entities }));
    })
    .catch((error) => {
      console.log(error);
      error.clientMessage = "Can't get master report from server...";
      dispatch(actions.catchError({ error, callTypes: callTypes.list }));
    });
};

export const fetchCashBook = () => (dispatch) => {
    dispatch(actions.startCall({ callType: callTypes.list }));
  
    return requestFromServer
      .getCashBook()
      .then((response) => {
        const entities = response.data;
        const totalCount=response.data.length;
        console.log(entities);
        dispatch(actions.cashBookFetched({ entities, totalCount }));
      })
      .catch((error) => {
        console.log(error);
        error.clientMessage = "Can't get cash Book from server...";
        dispatch(actions.catchError({ error, callTypes: callTypes.list }));
      });
  };
  