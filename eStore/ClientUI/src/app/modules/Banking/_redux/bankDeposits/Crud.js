import axios from "axios";

//BankDeposits
//bankDeposit

export const API_URL = "https://www.aprajitaretails.in/api/bankDeposits";

export async function doLogin(){
  axios.post("https://www.aprajitaretails.in/api/login").then(
    res => {
      return res.data;  
    }
  ).catch(function (error){console.log(error)});
}

export async function verifyLogin(){

  axios.get("https://www.aprajitaretails.in/api/login").then(
    res => {
      const isLogin = res.data;
      if(!isLogin)  return  doLogin();
    }
  ).catch(function (error){console.log(error)});

}
// CREATE =>  POST: add a new bankDeposit to the server
export async function createBankDeposits(bankDeposit) {
  return await axios.post(API_URL,  bankDeposit,{
    headers: {         'Content-Type' : 'application/json; charset=utf-8' }
});
}

// READ
export  function getAllBankDepositss() {
  return  axios.get(API_URL);//.catch(function (error){console.log(error)});
}

export async function getBankDepositsById(bankDepositId) {
  return await axios.get(`${API_URL}/${bankDepositId}`);
}

// Method from server should return QueryResultsModel(items: any[], totalsCount: number)
// items => filtered/sorted result
export async function findBankDepositss(queryParams) {
  //verifyLogin();
  return await axios.get(`${API_URL}`);//find`, { queryParams });
}

// function to get all list of banks
export async function getAllBanks(){
  return await axios.get("https://www.aprajitaretails.in/api/banks") ; 
}

// UPDATE => PUT: update the bankDeposit on the server
export async function updateBankDeposits(bankDeposit) {
  return await axios.put(`${API_URL}/${bankDeposit.bankDepositId}`, JSON.stringify( bankDeposit ),{
    headers: {         'Content-Type' : 'application/json; charset=utf-8' }
});
}

// UPDATE Status
export async function updateStatusForBankDepositss(ids, status) {
  return await axios.post(`${API_URL}/updateStatusForBankDepositss`, {
    ids,
    status
  });
}

// DELETE => delete the bankDeposit from the server
export async function deleteBankDeposits(bankDepositId) {
  return await axios.delete(`${API_URL}/${bankDepositId}`);
}

// DELETE BankDepositss by ids
export async function deleteBankDepositss(ids) {
  return await axios.post(`${API_URL}/deleteBankDepositss`, { ids });
}
