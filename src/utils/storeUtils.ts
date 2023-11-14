
type ErrorObject = { code: number, message?: string }

export const getStatus = (err: ErrorObject = { code: 0, message: "" }, customMessage?: string): IStatus => ({
    ok: err.code < 400,
    code: err.code,
    message: customMessage ? customMessage : (err.message ?? "")
})
