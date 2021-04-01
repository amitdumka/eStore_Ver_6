import axios from "axios";

//BillPayment
//billpayment

export const API_URL = "https://www.aprajitaretails.in/api/billpayments";
export const APIBASE_URL = "https://www.aprajitaretails.in/api";

export async function getPayModes(){
  return axios.get(APIBASE_URL+"/enumvalue/paymode/all"); 
}
export async function getBillPaymentTypes(){
  return axios.get(APIBASE_URL+"/enumvalue/billpaymenttype/all");
}
export async function getBillPaymentedLocations(){
  return axios.get(APIBASE_URL+"/billpaymentedlocations");
}



// CREATE =>  POST: add a new billpayment to the server
export async function createBillPayment(billpayment) {
  return await axios.post(API_URL, billpayment, {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}

// READ
export function getAllBillPayments() {
  return axios.get(API_URL); //.catch(function (error){console.log(error)});
}

export async function getBillPaymentById(billpaymentId) {
  return await axios.get(`${API_URL}/${billpaymentId}`);
}

// Method from server should return QueryResultsModel(items: any[], totalsCount: number)
// items => filtered/sorted result
export async function findBillPayments(queryParams) {
  //verifyLogin();
  return await axios.get(`${API_URL}`); //find`, { queryParams });
}

// function to get all list of banks
export async function getAllBanks() {
  return await axios.get("https://www.aprajitaretails.in/api/banks");
}

// UPDATE => PUT: update the billpayment on the server
export async function updateBillPayment(billpayment) {
  return await axios.put(
    `${API_URL}/${billpayment.billpaymentId}`,
    JSON.stringify(billpayment),
    {
      headers: { "Content-Type": "application/json; charset=utf-8" },
    }
  );
}

// UPDATE Status
export async function updateStatusForBillPayments(ids, status) {
  return await axios.post(`${API_URL}/updateStatusForBillPayments`, {
    ids,
    status,
  });
}

// DELETE => delete the billpayment from the server
export async function deleteBillPayment(billpaymentId) {
  return await axios.delete(`${API_URL}/${billpaymentId}`);
}

// DELETE BillPayments by ids
export async function deleteBillPayments(ids) {
  return await axios.post(`${API_URL}/deleteBillPayments`, { ids });
}
