import HttpClient from "./services/http/HttpClient"

// Need to create config files
const http = new HttpClient('http://40.68.14.121:3000/api', 5_000)

export { http }