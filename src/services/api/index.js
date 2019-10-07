import axios from 'axios'
import Query from './query'
import { API_URL } from "variables/app";

function path(path) {
  return `${API_URL}/${path}`
}

export function query(url) {
  return new Query(url)
}

export async function get(url, headers = {}) {
  try {
    let response = axios.get(path(url), headers)
    return response.data
  } catch (error) {
    throw error.response['data']
  }
}

export async function post(url, body, headers = {}) {
  try {
    let response = await axios.post(path(url), body, { headers });
    return response.data
  } catch (error) {
    throw error.response['data']
  }
}