import axios from "axios";
const BASE_URL = "https://aprajitaretails.in/api";
const ENUMAPI = BASE_URL + "/enumvalue";

export async function getEnumType(typeName) {
  return axios.get(ENUMAPI + typeName+"/all");
}
export async function getStores() {
  return axios.get(BASE_URL+"/stores");
}
