import HttpException from "@/error/exceptions/HttpException"
import NotificationStore from "@/store/notification/NotificationStore"

export default function createHttpErrorHandler(notification: NotificationStore) {
  return (error: Error) => {
    if (error instanceof HttpException) {
      notification.add({
        type: "error",
        title: "Something went wrong...",
        message: error.body.message,
      })
      return false
    }
  }
}
