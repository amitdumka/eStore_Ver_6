import axios from "axios";

//Rent
//rent

export const API_URL = "https://www.aprajitaretails.in/api/rents";

export async function doLogin() {
  axios
    .post("https://www.aprajitaretails.in/api/login")
    .then((res) => {
      return res.data;
    })
    .catch(function(error) {
      console.log(error);
    });
}

export async function verifyLogin() {
  axios
    .get("https://www.aprajitaretails.in/api/login")
    .then((res) => {
      const isLogin = res.data;
      if (!isLogin) return doLogin();
    })
    .catch(function(error) {
      console.log(error);
    });
}
// CREATE =>  POST: add a new rent to the server
export async function createRent(rent) {
  return await axios.post(API_URL, rent, {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}

// READ
export function getAllRents() {
  return axios.get(API_URL); //.catch(function (error){console.log(error)});
}

export async function getRentById(rentId) {
  return await axios.get(`${API_URL}/${rentId}`);
}

// Method from server should return QueryResultsModel(items: any[], totalsCount: number)
// items => filtered/sorted result
export async function findRents(queryParams) {
  //verifyLogin();
  return await axios.get(`${API_URL}`); //find`, { queryParams });
}

// function to get all list of banks
export async function getAllBanks() {
  return await axios.get("https://www.aprajitaretails.in/api/banks");
}

// UPDATE => PUT: update the rent on the server
export async function updateRent(rent) {
  return await axios.put(
    `${API_URL}/${rent.rentId}`,
    JSON.stringify(rent),
    {
      headers: { "Content-Type": "application/json; charset=utf-8" },
    }
  );
}

// UPDATE Status
export async function updateStatusForRents(ids, status) {
  return await axios.post(`${API_URL}/updateStatusForRents`, {
    ids,
    status,
  });
}

// DELETE => delete the rent from the server
export async function deleteRent(rentId) {
  return await axios.delete(`${API_URL}/${rentId}`);
}

// DELETE Rents by ids
export async function deleteRents(ids) {
  return await axios.post(`${API_URL}/deleteRents`, { ids });
}
