import axios from "axios";

//legderType
//LedgerType

export const API_URL = "https://www.aprajitaretails.in/api/ledgerTypes";
// CREATE =>  POST: add a new legderType to the server
export async function createLedgerType(legderType) {
  return await axios.post(API_URL, legderType, {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}

// READ
export function getAllLedgerTypes() {
  return axios.get(API_URL); //.catch(function (error){console.log(error)});
}

export async function getLedgerTypeById(legderTypeId) {
  return await axios.get(`${API_URL}/${legderTypeId}`);
}

// Method from server should return QueryResultsModel(items: any[], totalsCount: number)
// items => filtered/sorted result
export async function findLedgerTypes(queryParams) {
  //verifyLogin();
  return await axios.get(`${API_URL}`); //find`, { queryParams });
}

// UPDATE => PUT: update the legderType on the server
export async function updateLedgerType(legderType) {
  return await axios.put(
    `${API_URL}/${legderType.legderTypeId}`,
    JSON.stringify(legderType),
    {
      headers: { "Content-Type": "application/json; charset=utf-8" },
    }
  );
}

// UPDATE Status
export async function updateStatusForLedgerTypes(ids, status) {
  return await axios.post(`${API_URL}/updateStatusForLedgerTypes`, {
    ids,
    status,
  });
}

// DELETE => delete the legderType from the server
export async function deleteLedgerType(legderTypeId) {
  return await axios.delete(`${API_URL}/${legderTypeId}`);
}

// DELETE LedgerTypes by ids
export async function deleteLedgerTypes(ids) {
  return await axios.post(`${API_URL}/deleteLedgerTypes`, { ids });
}
