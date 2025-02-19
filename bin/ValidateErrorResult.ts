import { ValidateRuleMaps } from "ValidateRuleMap";
import { VirtualDom, VirtualDomList } from "VirtualDom";

export class ValidateErrorResult {

    /**
     * ***status*** : Verification check result flag.  
     * ``false`` means there is an error,  ``true`` means there is no error
     */
    public status : boolean = true;

    public fields : Array<string> = [];

    public fieldIndexs: {[name: string] : number} = {};

    public errors : ValidateRuleMaps = {};

    /**
     * ***get*** : Gets the results of validation checks for all items.
     * @returns {{[name : string] : Array<string>}}
     */
    public get() : {[name : string] : Array<string>};

    /**
     * ***get*** : Get the verification check results.
     * @param {string} name field Name
     * @returns {Array<string>}
     */
    public get(name : string) : Array<string>;

    /**
     * ***get*** : Get the verification check results.
     * @param {string} name field Name
     * @param {number} index Target index number
     * @returns {Array<string>}
     */
    public get(name : string, index : number) : Array<string>;

    public get(name? : string, index? : number) : Array<string> | {[name : string] : Array<string>} {
        let res;
        if (name) {
            res = [];
            const errors = this.errors[name];
            if (!errors) return;
            errors.forEach((error)=>{
                if (index && index != error.index) return;
                let message = error.message;
                if (!message) {
                    message = "rule = " + error.rule;
                    if (error.args) message += ", args = [" + error.args.join(",") + "]";
                    if (index) message += ", index = " + index;
                }
                res.push(message);
            });
        }
        else {
            res = {};
            this.fields.forEach((field) => {
                const fieldCount = this.fieldIndexs[field];
                if (fieldCount) {
                    for(let n = 0 ; n < fieldCount ; n++) {
                        const buffer = this.get(field, n);
                        if (buffer) {
                            if (!res[field]) res[field] = [];
                            res[field] = buffer;
                        }
                    }
                }
                else {
                    const buffer = this.get(field);
                    if (buffer) {
                        res[field] = buffer;
                    }
                }
            });
        }
        return res;
    }

    /**
     * ***bind*** : Based on the result of the validation check, an error message is bound to the error virtual DOM from the specified virtual DOM list.  
     * The virtual DOM must be created by specifying error.{fieldName} in the v attribute of HTML tags such as View.  
     * ```html
     * <div v="error.name"></div>
     * ```
     * @param {VirtualDomList} vdos Virtual DOM List
     * @returns {void}
     */
    public bind(vdos : VirtualDomList) : void;

    /**
     * ***bind*** : Based on the result of the validation check, an error message is bound to the error virtual DOM from the specified virtual DOM list.  
     * The virtual DOM must be created by specifying error.{fieldName} in the v attribute of HTML tags such as View.  
     * ```html
     * <div v="error.name"></div>
     * ```
     * @param {VirtualDomList} vdos Virtual DOM List
     * @param {string} name field name
     * @returns {void}
     */
    public bind(vdos : VirtualDomList, name : string) : void;

    /**
     * ***bind*** : Based on the result of the validation check, an error message is bound to the error virtual DOM from the specified virtual DOM list.  
     * The virtual DOM must be created by specifying error.{fieldName} in the v attribute of HTML tags such as View.  
     * ```html
     * <div v="error.name"></div>
     * ```
     * @param {VirtualDomList} vdos Virtual DOM List
     * @param {string} name field name
     * @param {number} index Index Number
     * @returns {void}
     */
    public bind(vdos : VirtualDomList, name : string, index : number) : void;

    public bind(vdos : VirtualDomList, name? : string, index? : number) : void {
        if (name) {
            if (!vdos.error) return;
            if (!vdos.error.childs[name]) return;
            let target : VirtualDom = vdos.error.childs[name];
            let result;
            if (index) {
                if (target.index(index)) {
                    target = target.index(index);
                    result = this.get(name, index);
                }
                else {
                    result = this.get(name);
                }
            }
            else {
                result = this.get(name);
            }

            if (!target) return;

            if (result) {
                target.addClass("active").text = result.join("\n");
            }
            else {
                target.removeClass("active").text = "";
            }
        }
        else {
            this.fields.forEach((field) => {
                if (this.fieldIndexs[field]) {
                    const fieldCount = this.fieldIndexs[field];
                    for(let n = 0 ; n < fieldCount ; n++) {
                        this.bind(vdos, field, n);
                    }
                }
                else {
                    this.bind(vdos, field);
                }
            });
        }
    }
}
