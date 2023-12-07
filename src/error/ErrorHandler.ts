type Handler = (error: Error) => boolean | void

function handleError(error: Error, handlers: Handler[]) {
  for (const handler of handlers) {
    if (handler(error) === false) {
      return false
    }
  }
}

export default function setupErrorHandler(handlers: Handler[]) {
  const prevHandler = window.onunhandledrejection

  window.onunhandledrejection = function(event: PromiseRejectionEvent) {
    return handleError(event.reason as Error, handlers)
  }

  return () => window.onunhandledrejection = prevHandler
}
