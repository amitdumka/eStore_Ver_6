import axios from "axios";

//bookings
//Bookings
//booking
//Booking


export const API_BASE_URL="https://www.aprajitaretails.in/api/";
export const API_URL = "https://www.aprajitaretails.in/api/bookingTypes";
// CREATE =>  POST: add a new booking to the server
export async function createBooking(booking) {
  return await axios.post(API_URL, booking, {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}

// READ
export function getAllBookings() {
  return axios.get(API_URL); //.catch(function (error){console.log(error)});
}
export async function getTaxType(){
  return await axios.get(`${API_BASE_URL}EnumValue/taxtype/all`);
}
export async function getBookingById(bookingId) {
  return await axios.get(`${API_URL}/${bookingId}`);
}

// Method from server should return QueryResultsModel(items: any[], totalsCount: number)
// items => filtered/sorted result
export async function findBookings(queryParams) {
  //verifyLogin();
  return await axios.get(`${API_URL}`); //find`, { queryParams });
}

// UPDATE => PUT: update the booking on the server
export async function updateBooking(booking) {
  console.error(booking);
  return await axios.put(
    `${API_URL}/${booking.bookingId}`,
    JSON.stringify(booking),
    {
      headers: { "Content-Type": "application/json; charset=utf-8" },
    }
  );
}

// UPDATE Status
export async function updateStatusForBookings(ids, status) {
  return await axios.post(`${API_URL}/updateStatusForBookings`, {
    ids,
    status,
  });
}

// DELETE => delete the booking from the server
export async function deleteBooking(bookingId) {
  return await axios.delete(`${API_URL}/${bookingId}`);
}

// DELETE Bookings by ids
export async function deleteBookings(ids) {
  return await axios.post(`${API_URL}/deleteBookings`, { ids });
}
