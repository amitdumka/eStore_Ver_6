import axios from "axios";

//Account
//account

export const API_URL = "https://www.aprajitaretails.in/api/accounts";

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
// CREATE =>  POST: add a new account to the server
export async function createAccount(account) {
  return await axios.post(API_URL,  account,{
    headers: {         'Content-Type' : 'application/json; charset=utf-8' }
});
}

// READ
export  function getAllAccounts() {
  return  axios.get(API_URL);//.catch(function (error){console.log(error)});
}

export async function getAccountById(accountId) {
  return await axios.get(`${API_URL}/${accountId}`);
}

// Method from server should return QueryResultsModel(items: any[], totalsCount: number)
// items => filtered/sorted result
export async function findAccounts(queryParams) {
  //verifyLogin();
  return await axios.get(`${API_URL}`);//find`, { queryParams });
}

// function to get all list of banks
export async function getAllBanks(){
  return await axios.get("https://www.aprajitaretails.in/api/banks") ; 
}

// UPDATE => PUT: update the account on the server
export async function updateAccount(account) {
  return await axios.put(`${API_URL}/${account.accountId}`, JSON.stringify( account ),{
    headers: {         'Content-Type' : 'application/json; charset=utf-8' }
});
}

// UPDATE Status
export async function updateStatusForAccounts(ids, status) {
  return await axios.post(`${API_URL}/updateStatusForAccounts`, {
    ids,
    status
  });
}

// DELETE => delete the account from the server
export async function deleteAccount(accountId) {
  return await axios.delete(`${API_URL}/${accountId}`);
}

// DELETE Accounts by ids
export async function deleteAccounts(ids) {
  return await axios.post(`${API_URL}/deleteAccounts`, { ids });
}
