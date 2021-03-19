import axios from "axios";

//SaleTax
//saleTax
//SaleTaxes
//saleTaxes

export const API_URL = "https://www.aprajitaretails.in/api/saleTaxes";


// CREATE =>  POST: add a new saleTax to the server
export async function createSaleTax(saleTax) {
  return await axios.post(API_URL, saleTax, {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}

// READ
export function getAllParties() {
  return axios.get(API_URL); //.catch(function (error){console.log(error)});
}

export async function getSaleTaxById(saleTaxId) {
  return await axios.get(`${API_URL}/${saleTaxId}`);
}

// Method from server should return QueryResultsModel(items: any[], totalsCount: number)
// items => filtered/sorted result
export async function findParties(queryParams) {
  //verifyLogin();
  return await axios.get(`${API_URL}`); //find`, { queryParams });
}

// function to get all list of banks
export async function getAllLedgerTypes() {
  return await axios.get("https://www.aprajitaretails.in/api/ledgerTypes");
}

// UPDATE => PUT: update the saleTax on the server
export async function updateSaleTax(saleTax) {
  return await axios.put(
    `${API_URL}/${saleTax.saleTaxId}`,
    JSON.stringify(saleTax),
    {
      headers: { "Content-Type": "application/json; charset=utf-8" },
    }
  );
}

// UPDATE Status
export async function updateStatusForParties(ids, status) {
  return await axios.post(`${API_URL}/updateStatusForParties`, {
    ids,
    status,
  });
}

// DELETE => delete the saleTax from the server
export async function deleteSaleTax(saleTaxId) {
  return await axios.delete(`${API_URL}/${saleTaxId}`);
}

// DELETE Parties by ids
export async function deleteParties(ids) {
  return await axios.post(`${API_URL}/deleteParties`, { ids });
}
