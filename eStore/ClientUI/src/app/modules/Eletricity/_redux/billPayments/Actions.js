import * as requestFromServer from "./Crud";
import {billpaymentsSlice, callTypes} from "./Slice";


//BillPayment
//billpayment


const {actions} = billpaymentsSlice;



export const fetchPayModes =id=>dispatch => {
  
  dispatch(actions.startCall({callType:callTypes.list}));

  return requestFromServer
  .getPayModes()
  .then(response=>{
    const entities  = response.data; 
    const totalCount=response.data.length;
    console.log(entities);
    dispatch(actions.payModesFetched({totalCount, entities}));
  })
  .catch(error =>{
    console.log(error);
    error.clientMessage="Can't load paymode list"; 
    dispatch(actions.catchError({error,callTypes:callTypes.list}));
  });
}
export const fetchBillPaymentTypes =id=>dispatch => {
  
  dispatch(actions.startCall({callType:callTypes.list}));

  return requestFromServer
  .getBillPaymentTypes()
  .then(response=>{
    const entities  = response.data; 
    const totalCount=response.data.length;
    console.log(entities);
    dispatch(actions.billpaymentTypesFetched({totalCount, entities}));
  })
  .catch(error =>{
    console.log(error);
    error.clientMessage="Can't load billpayment type list"; 
    dispatch(actions.catchError({error,callTypes:callTypes.list}));
  });
}
export const fetchLocations =id=>dispatch => {
  
  dispatch(actions.startCall({callType:callTypes.list}));

  return requestFromServer
  .getBillPaymentedLocations()
  .then(response=>{
    const entities  = response.data; 
    const totalCount=response.data.length;
    console.log(entities);
    dispatch(actions.billpaymentedLocationsFetched({totalCount, entities}));
  })
  .catch(error =>{
    console.log(error);
    error.clientMessage="Can't load billpayment location list"; 
    dispatch(actions.catchError({error,callTypes:callTypes.list}));
  });
}

export const fetchBillPayments = queryParams => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .findBillPayments(queryParams)
    .then(response => {
      const  entities  = response.data;
      const totalCount = response.data.length;
      console.log(response);
      console.log(response.data.length);
      dispatch(actions.billpaymentsFetched({ totalCount, entities }));
    })
    .catch(error => {
      console.log(error);
      error.clientMessage = "Can't find billpayments";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const fetchBillPayment = id => dispatch => {
  if (!id) {
    return dispatch(actions.billpaymentFetched({ billpaymentForEdit: undefined }));
  }

  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getBillPaymentById(id)
    .then(response => {
      const billpayment = response.data;
      console.log(billpayment);
      dispatch(actions.billpaymentFetched({ billpaymentForEdit: billpayment }));
    })
    .catch(error => {
      error.clientMessage = "Can't find billpayment";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteBillPayment = id => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteBillPayment(id)
    .then(response => {
      dispatch(actions.billpaymentDeleted({ id }));
    })
    .catch(error => {
      
      console.log("CD="+error);
      error.clientMessage = "Can't delete billpayment";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const createBillPayment = billpaymentForCreation => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  console.log(billpaymentForCreation);
  return requestFromServer
    .createBillPayment(JSON.stringify( billpaymentForCreation))
    .then(response => {
      const  billpayment  = response.data;
      console.log(response.data);
      dispatch(actions.billpaymentCreated({ billpayment }));
    })
    .catch(error => {
      console.log(error);
      error.clientMessage = "Can't create billpayment";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateBillPayment = billpayment => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  console.log(billpayment);
  return requestFromServer
    .updateBillPayment(billpayment)
    .then(() => {
      console.log(billpayment);
      dispatch(actions.billpaymentUpdated({ billpayment }));
    })
    .catch(error => {
      console.log(error);
      error.clientMessage = "Can't update billpayment";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateBillPaymentsStatus = (ids, status) => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateStatusForBillPayments(ids, status)
    .then(() => {
      dispatch(actions.billpaymentsStatusUpdated({ ids, status }));
    })
    .catch(error => {
      error.clientMessage = "Can't update billpayments status";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteBillPayments = ids => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteBillPayments(ids)
    .then(() => {

      dispatch(actions.billpaymentsDeleted({ ids }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete billpayments";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

