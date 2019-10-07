import { JWT_COOKIE_NAME } from "variables/app";
import { get, post } from './index'

function getAuthHeader() {
  const tokenStr = localStorage.getItem(JWT_COOKIE_NAME);
  return `bearer ${tokenStr}`;
}

class Query {
  constructor(url) {
    this.url = url
    this.body = null
    this.headers = {}
  }

  setBody(data) {
    this.body = data
    return this
  }

  withAuth() {
    this.headers.Authorization = getAuthHeader();
    return this
  }

  async get() {
    try {
      let response = await get(this.url, this.headers)
      return response
    } catch (error) {
      throw error
    }
  }

  async post() {
    if (this.body === null) throw new Error("body cannot be null")
    try {
      let response = await post(this.url, this.body, this.headers)
      return response
    } catch (error) {
      throw error
    }
  }
}

export default Query