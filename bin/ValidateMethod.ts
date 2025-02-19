/**
 * ***ValidateMethod*** : Preset functions for validation checks.
 */
export class ValidateMethod {

    private input : any;

    private context;

    public constructor(input : any, context) {
        this.input = input;
        this.context = context;
    }

    private getArgValue(args : Array<string>, index : number) {
        if (!args) return;
        if (!args[index]) return;
        if (args[index].toString().indexOf("@") === 0) {
            return this.input[args[index].toString().substring(0)];
        }
        return args[index];
    }

    public required(value : any) : boolean {
        if (
            value === undefined ||
            value === null ||
            value === "" 
        ) {
            return false;
        }
        return true;
    }

    public length(value: any, args : Array<any>) : boolean {
        if (!this.required(value)) return true;
        const target = this.getArgValue(args, 0);
        if (Array.from(value).length !== target) return false;
        return true;
    }

    public lengthMin(value: any, args : Array<any>) : boolean {
        if (!this.required(value)) return true;
        const target = this.getArgValue(args, 0);
        if (Array.from(value).length < target) return false;
        return true;
    }

    public lengthMax(value: any, args : Array<any>) : boolean {
        if (!this.required(value)) return true;
        const target = this.getArgValue(args, 0);
        if (Array.from(value).length > target) return false;
        return true;
    }

    public lengthBetween(value: any, args : Array<any>) : boolean {
        if (!this.required(value)) return true;
        const targetMin = this.getArgValue(args, 0);
        const targetMax = this.getArgValue(args, 1);
        if (Array.from(value).length < targetMin) return false;
        if (Array.from(value).length > targetMax) return false;
        return true;
    }

    public byteLength(value: any, args : Array<any>) : boolean {
        if (!this.required(value)) return true;
        const target = this.getArgValue(args, 0);
        const byteValue = new TextEncoder().encode(value);
        if (byteValue.byteLength !== target) return false;
        return true;
    }

    public byteLengthMin(value: any, args : Array<any>) : boolean {
        if (!this.required(value)) return true;
        const target = this.getArgValue(args, 0);
        const byteValue = new TextEncoder().encode(value);
        if (byteValue.byteLength < target) return false;
        return true;
    }

    public byteLengthMax(value: any, args : Array<any>) : boolean {
        if (!this.required(value)) return true;
        const target = this.getArgValue(args, 0);
        const byteValue = new TextEncoder().encode(value);
        if (byteValue.byteLength > target) return false;
        return true;
    }

    public byteLengthBetween(value: any, args : Array<any>) : boolean {
        if (!this.required(value)) return true;
        const targetMin = this.getArgValue(args, 0);
        const targetMax = this.getArgValue(args, 1);
        const byteValue = new TextEncoder().encode(value);
        if (byteValue.byteLength < targetMin) return false;
        if (byteValue.byteLength > targetMax) return false;
        return true;
    }

    public value(value: any, args : Array<any>) : boolean {
        if (!this.required(value)) return true;
        const target = this.getArgValue(args, 0);
        if (value !== target) return false;
        return true;
    }

    public valueMin(value: any, args : Array<any>) : boolean {
        if (!this.required(value)) return true;
        const target = this.getArgValue(args, 0);
        if (value < target) return false;
        return true;
    }

    public valueMax(value: any, args : Array<any>) : boolean {
        if (!this.required(value)) return true;
        const target = this.getArgValue(args, 0);
        if (value > target) return false;
        return true;
    }

    public valueBetween(value: any, args : Array<any>) : boolean {
        if (!this.required(value)) return true;
        const targetMin = this.getArgValue(args, 0);
        const targetMax = this.getArgValue(args, 1);
        if (value < targetMin) return false;
        if (value > targetMax) return false;
        return true;
    }

    public selected(value : any, args : Array<any>) : boolean {
        if (!this.required(value)) return true;
        if(args.indexOf(value) === -1) return false;
        return true;
    }

    public selectedLength(value : any, args : Array<any>) : boolean {
        if (!this.required(value)) return true;
        const target = this.getArgValue(args, 0);
        if (value.length !== target) return false;
        return true;
    }
    
    public selectedLengthMin(value : any, args : Array<any>) : boolean {
        if (!this.required(value)) return true;
        const target = this.getArgValue(args, 0);
        if (value.length < target) return false;
        return true;
    }

    public selectedLengthMax(value : any, args : Array<any>) : boolean {
        if (!this.required(value)) return true;
        const target = this.getArgValue(args, 0);
        if (value.length > target) return false;
        return true;
    }

    public selectedLengthBetween(value : any, args : Array<any>) : boolean {
        if (!this.required(value)) return true;
        const targetMin = this.getArgValue(args, 0);
        const targetMax = this.getArgValue(args, 1);
        if (value.length < targetMin) return false;
        if (value.length > targetMax) return false;
        return true;
    }

    public confirmed(value : any, args : Array<any>) : boolean {
        if (!this.required(value)) return true;
        const target = this.getArgValue(args, 0);
        if (value != target) return false;
        return true;
    }

    public like(value : any, args : Array<any>) : boolean {
        if (!this.required(value)) return true;
        const target = this.getArgValue(args, 0);
        if (value.indexOf(target) === -1) return false;
        return true;
    }

    public characterExists(value : any, args: Array<any>) : boolean {
        if (!this.required(value)) return true;
        const target = this.getArgValue(args, 0);
        let status : boolean = true;
        for (let n = 0 ; n < value.toString().length ; n++) {
            const v = value.toString()[n];
            if (target.indexOf(v) === -1) {
                status = false;
                break;
            }
        }
        return status;
    }

    public alphaNumeric(value : any, args : Array<any>) : boolean {
        if (!this.required(value)) return true;
        const addChars = this.getArgValue(args, 0);
        let target = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (addChars) target += addChars;
        return this.characterExists(value, [target]);
    }

    public alphaNumericLower(value : any, args : Array<any>) : boolean {
        if (!this.required(value)) return true;
        const addChars = this.getArgValue(args, 0);
        let target = "0123456789abcdefghijklmnopqrstuvwxyz";
        if (addChars) target += addChars;
        return this.characterExists(value, [target]);
    }

    public alphaNumericUpper(value : any, args : Array<any>) : boolean {
        if (!this.required(value)) return true;
        const addChars = this.getArgValue(args, 0);
        let target = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (addChars) target += addChars;
        return this.characterExists(value, [target]);
    }

    public alpha(value : any, args : Array<any>) : boolean {
        if (!this.required(value)) return true;
        const addChars = this.getArgValue(args, 0);
        let target = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (addChars) target += addChars;
        return this.characterExists(value, [target]);
    }

    public alphaLower(value : any, args : Array<any>) : boolean {
        if (!this.required(value)) return true;
        const addChars = this.getArgValue(args, 0);
        let target = "abcdefghijklmnopqrstuvwxyz";
        if (addChars) target += addChars;
        return this.characterExists(value, [target]);
    }

    public alphaUpper(value : any, args : Array<any>) : boolean {
        if (!this.required(value)) return true;
        const addChars = this.getArgValue(args, 0);
        let target = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (addChars) target += addChars;
        return this.characterExists(value, [target]);
    }

    public numeric(value : any, args : Array<any>) : boolean {
        if (!this.required(value)) return true;
        const addChars = this.getArgValue(args, 0);
        let target = "0123456789";
        if (addChars) target += addChars;
        return this.characterExists(value, [target]);
    }

    public isHiranaga(value : any, args : Array<any>) : boolean {
        if (!this.required(value)) return true;
        const addChars = this.getArgValue(args, 0);
        let target = "あいうえおかきくけこがぎぐげござじずぜそただちつてとだぢづでとなにぬねのはひふへほばびぶべぼぱぴぷぺぽまみむめもやゆよらりるれろわをん";
        if (addChars) target += addChars;
        return this.characterExists(value, [target]);
    }

    public isKatakana(value : any, args : Array<any>) : boolean {
        if (!this.required(value)) return true;
        const addChars = this.getArgValue(args, 0);
        let target = "アイウエオカキクケコガギグゲゴザジズゼソタダチツテトダヂヅデトナニヌネノハヒフヘホバビブベボパピプペポマミムメモヤユヨラリルレロワヲン";
        if (addChars) target += addChars;
        return this.characterExists(value, [target]);
    }

    public custom(value : any, args : Array<any>) : boolean {
        const custom = this.context[args[0]];
        if (!custom) return true;
        return custom(value, args, this);
    }
}
