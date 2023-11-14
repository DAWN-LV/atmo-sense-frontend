import { Method } from 'axios'
import { merge } from 'lodash'
import HttpClient from '../http/HttpClient'

type RequestBody = any

export default class HttpRequest<T = any> {
  readonly queryParams: Record<string, unknown> = {}
  readonly headers: Record<string, string> = {}
  body: RequestBody = {}

  constructor(
    readonly http: HttpClient,
    readonly method: Method,
    readonly resource: string,
  ) {}

  withQueryParams(params: Record<string, unknown>) {
    merge(this.queryParams, params)
    return this
  }

  withHeaders(headers: Record<string, string>) {
    merge(this.headers, headers)
    return this
  }

  withBody<T extends RequestBody>(body: T) {
    this.body = body
    return this
  }

  async send(timeout?: number): Promise<T> {
    return await this.http.send(this, timeout)
  }
}
