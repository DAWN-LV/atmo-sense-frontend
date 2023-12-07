import HttpException from "@/error/exceptions/HttpException"
import { MandeError, MandeInstance, Options, mande } from "mande"

function isMandeError(error: any): error is MandeError {
  return error instanceof Error && "body" in error && "response" in error
}

export default class HttpClient {
  private client: MandeInstance

  constructor(baseUrl: string) {
    this.client = mande(baseUrl)

    this.configurateHttpClient()
  }

  public setAuthorization(token: string) {
    this.client.options.headers.Authorization = token
  }

  async get<T>(url: string | number, options?: Options<"json">) {
    try {
      return await this.client.get<T, "json">(url, options)
    } catch (error) {
      HttpClient.handleError(error)
    }
  }

  async post<T>(url: string | number, data?: any, options?: Options<"json">) {
    try {
      return await this.client.post<T, "json">(url, data, options)
    } catch (error) {
      HttpClient.handleError(error)
    }
  }

  async delete<T>(url: string | number, options?: Options<"json">) {
    try {
      return await this.client.delete<T, "json">(url, options)
    } catch (error) {
      HttpClient.handleError(error)
    }
  }

  private configurateHttpClient() {
    delete this.client.options.headers.Authorization
  }

  private static handleError(error: any): never {
    if (isMandeError(error)) {
      const bodyData = {
        message: error.body.message,
        error: error.body.error,
        statusCode: error.body.statusCode,
      }

      throw new HttpException(error.message, bodyData, error)
    }

    throw error
  }
}