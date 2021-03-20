import axios from "axios";

//RentedLocation
//rentedLocation

export const API_URL = "https://www.aprajitaretails.in/api/rentedLocations";

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
// CREATE =>  POST: add a new rentedLocation to the server
export async function createRentedLocation(rentedLocation) {
  return await axios.post(API_URL,  rentedLocation,{
    headers: {         'Content-Type' : 'application/json; charset=utf-8' }
});
}

// READ
export  function getAllRentedLocations() {
  return  axios.get(API_URL);//.catch(function (error){console.log(error)});
}

export async function getRentedLocationById(rentedLocationId) {
  return await axios.get(`${API_URL}/${rentedLocationId}`);
}

// Method from server should return QueryResultsModel(items: any[], totalsCount: number)
// items => filtered/sorted result
export async function findRentedLocations(queryParams) {
  console.log(queryParams);
  return await axios.get(`${API_URL}`);//find`, { queryParams });
}

// UPDATE => PUT: update the rentedLocation on the server
export async function updateRentedLocation(rentedLocation) {
  return await axios.put(`${API_URL}/${rentedLocation.rentedLocationId}`, JSON.stringify( rentedLocation ),{
    headers: {         'Content-Type' : 'application/json; charset=utf-8' }
});
}

// UPDATE Status
export async function updateStatusForRentedLocations(ids, status) {
  return await axios.post(`${API_URL}/updateStatusForRentedLocations`, {
    ids,
    status
  });
}

// DELETE => delete the rentedLocation from the server
export async function deleteRentedLocation(rentedLocationId) {
  return await axios.delete(`${API_URL}/${rentedLocationId}`);
}

// DELETE RentedLocations by ids
export async function deleteRentedLocations(ids) {
  return await axios.post(`${API_URL}/deleteRentedLocations`, { ids });
}
