import HttpException from "@/error/exceptions/HttpException"
import NotificationStore from "@/store/alerts/AlertStore"

export default function createHttpErrorHandler(alert: NotificationStore) {
  return (error: Error) => {
    if (error instanceof HttpException) {
      alert.add({
        category: "error",
        content: error.body.message,
      })
      
      return false
    }
  }
}
