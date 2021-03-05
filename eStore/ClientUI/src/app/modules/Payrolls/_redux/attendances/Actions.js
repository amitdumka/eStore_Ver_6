import * as requestFromServer from "./Crud";
import {attendanceSlice, callTypes} from "./Slice";

const {actions} = attendanceSlice;

export const fetchAttendanes = queryParams => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .findAttendanes(queryParams)
    .then(response => {
      const  entities  = response.data;
      const totalCount = response.data.length;
      console.log(response);
      console.log(response.data.length);
      dispatch(actions.attendanceFetched({ totalCount, entities }));
    })
    .catch(error => {
      console.log(error);
      error.clientMessage = "Can't find attendance";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const fetchAttendane = id => dispatch => {
  if (!id) {
    return dispatch(actions.employeeFetched({ employeeForEdit: undefined }));
  }

  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getAttendaneById(id)
    .then(response => {
      const employee = response.data;
      dispatch(actions.employeeFetched({ employeeForEdit: employee }));
    })
    .catch(error => {
      error.clientMessage = "Can't find employee";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteAttendane = id => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteAttendane(id)
    .then(response => {
      dispatch(actions.employeeDeleted({ id }));
    })
    .catch(error => {
      
      console.log("CD="+error);
      error.clientMessage = "Can't delete employee";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const createAttendane = employeeForCreation => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .createAttendane(JSON.stringify( employeeForCreation))
    .then(response => {
      const  employee  = response.data;
     // console.log(response.data);
      dispatch(actions.employeeCreated({ employee }));
    })
    .catch(error => {
      error.clientMessage = "Can't create employee";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateAttendane = employee => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateAttendane(employee)
    .then(() => {
      dispatch(actions.employeeUpdated({ employee }));
    })
    .catch(error => {
      error.clientMessage = "Can't update employee";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateAttendanesStatus = (ids, status) => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateStatusForAttendanes(ids, status)
    .then(() => {
      dispatch(actions.attendanceStatusUpdated({ ids, status }));
    })
    .catch(error => {
      error.clientMessage = "Can't update attendance status";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteAttendanes = ids => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteAttendanes(ids)
    .then(() => {

      dispatch(actions.attendanceDeleted({ ids }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete attendance";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

