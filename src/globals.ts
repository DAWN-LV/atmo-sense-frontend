import { mande } from "mande"
import config from "@/config"

const http = mande(config.api.baseUrl)

export { http }