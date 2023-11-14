import axios, { AxiosInstance, Method } from 'axios'
import HttpRequest from './HttpRequest'

export default class HttpClient {
  private client: AxiosInstance
  readonly requestHeaders: Record<string, string> = {}

  constructor(baseURL: string, timeout = 0) {
    this.client = axios.create({ baseURL, timeout })
  }

  get<T>(payload: string) {
    return this.createRequest<T>('GET', payload)
  }

  head(payload: string) {
    return this.createRequest<undefined>('HEAD', payload)
  }

  delete<T>(payload: string) {
    return this.createRequest<T>('DELETE', payload)
  }

  post<T>(payload: string) {
    return this.createRequest<T>('POST', payload)
  }

  put<T>(payload: string) {
    return this.createRequest<T>('PUT', payload)
  }

  patch<T>(payload: string) {
    return this.createRequest<T>('PATCH', payload)
  }

  async send(request: HttpRequest, timeout?: number) {
    const requestData = {
      timeout,
      method: request.method,
      url: request.resource,
      params: request.queryParams,
      headers: {
        ...this.requestHeaders,
        ...request.headers,
      },
      data: request.body,
    }

    try {
      return (await this.client.request(requestData)).data
    } catch (error) {
      throw error
    }
  }

  private createRequest<T>(method: Method, resource: string) {
    return new HttpRequest<T>(this, method, resource)
  }
} 