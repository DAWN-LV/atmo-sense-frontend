
type StatusType = { code: number, message?: string }

export const createStatus = (status: StatusType = { code: 0, message: "" }): IStatus => ({
    ok: status.code < 400,
    code: status.code,
    message: status.message ?? ""
})
