export class Error {
    constructor(public id: string, public code: number, public severity: number, public message: string) {

    }

    public toString() { 
        return "EC = " + this.code + "  id = " + this.id + " severity = " + this.severity + " message = " + this.message;
     }
}