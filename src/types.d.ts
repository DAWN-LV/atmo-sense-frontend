
interface ISensorData {
    value: number,
    epoch: number
}

declare interface ISensor {
    ip: string,
    mac: string,
    name: string,
    threshold: number,
    status: string,
    setup_timing: number,
    calculated_data: ISensorData[],
    data: ISensorData[]
}

declare interface IStatus {
    ok: boolean
    code: number
    message: string
}