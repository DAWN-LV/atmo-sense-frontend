
class Status implements IStatus {
    constructor(
        public readonly code = 0, 
        public readonly message = ''
    ) {}

    get ok() {
        return this.code < 300
    }
}

export default Status
