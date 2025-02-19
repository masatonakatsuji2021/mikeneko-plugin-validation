import { VirtualDomList } from "VirtualDom";
import { ValidateRuleMap, ValidateRuleMaps } from "ValidateRuleMap";
import { ValidateErrorResult } from "ValidateErrorResult";
import { ValidateMethod } from "ValidateMethod";

/**
 * ***ValidateOption***
 * 
 */
export interface ValidateOption {

    /** ***oneMessage*** :  */
    oneMessage? : boolean,

}

/**
 * ***Validation*** : Class used for input data validation checks.  
 * There are two ways to set validation check rules:  
 * Create a Validation derived class in the ``app/validation`` directory and place it there, or  
 * Specify validation check rules directly using the ``verify`` method, etc.  
 */
export class Validation {

    /**
     * ***rules*** : Specify the validation check rules here.  
     * Exsample:
     * ```typescript
     * public rules : ValidateRuleMaps = {
     *    name: [
     *       {
     *          rule: ValidateRule.required,
     *          message: "name is empty.",
     *       },
     *       {
     *          rule: ValidateRule.lengthMax,
     *          args: [ 100 ],
     *          message: "Please enter within 100 characters.!",
     *       },
     *    ],
     * };
     * ```
     */
    public rules : ValidateRuleMaps;

    /**
     * ***oneMessage*** : If set to true, only the first error will be output if multiple errors occur.
     */
    public oneMessage : boolean = false;

    /**
     * ***verify*** : Runs validation checks on given input data.
     * @param {any} data Input data 
     * @returns {ValidateErrorResult}
     */
    public static verify(data: any) : ValidateErrorResult;

    /**
     * ***verify*** : Runs validation checks on given input data.
     * @param {any} data Input data 
     * @param {ValidateRuleMaps} rules Validation Check Rules
     * @returns {ValidateErrorResult}
     */
    public static verify(data: any, rules : ValidateRuleMaps) : ValidateErrorResult;

    /**
     * ***verify*** : Runs validation checks on given input data.
     * @param {any} data Input data 
     * @param {string} rules Validation Check Rules name
     * @returns {ValidateErrorResult}
     */
    public static verify(data: any, rules : string) : ValidateErrorResult;

    /**
     * ***verify*** : Runs validation checks on given input data.
     * @param {any} data Input data 
     * @param {string} rules Validation Check Rules name
     * @param {ValidateOption} options Validate Options
     * @returns {ValidateErrorResult}
     */
    public static verify(data: any, rules : string, options : ValidateOption) : ValidateErrorResult;

    public static verify(data: any, rules? : ValidateRuleMaps | string, options? : ValidateOption) : ValidateErrorResult {
        const my = new this();
        if (rules) {
            if (typeof rules == "string") {
                if (my[rules]) my.rules = my[rules];
            }
            else {
                my.rules = rules;
            }    
        }
        return my.verify(data);
    }

    /**
     * ***verify*** : Runs validation checks on given input data.
     * @param {any} data Input data 
     * @param {ValidateOption} options Validate Options
     * @returns {ValidateErrorResult}
     */
    public verify(data : any, options? : ValidateOption) : ValidateErrorResult {
        if (!options) options = {};
        const vm = new ValidateMethod(data, this);
        const c = Object.keys(this.rules);

        let result = new ValidateErrorResult();

        for (let n = 0 ; n < c.length ; n++) {
            const name = c[n];
            const rules = this.rules[name];

            result.fields.push(name);

            rules.forEach((rule) => {

                if (!vm[rule.rule]) return;

                const value = data[name];
                if (Array.isArray(value) && rule.rule.indexOf("selectedLength") === -1) {
                    result.fieldIndexs[name] = value.length;

                    value.forEach((v_, index) => {
                        const status = vm[rule.rule](v_, rule.args);
                        if (!status) {
                            if (!result.errors[name]) result.errors[name] = []; 
                            const errors : ValidateRuleMap = {
                                rule: rule.rule,
                                index: index,
                                args: rule.args,
                                message: rule.message,
                            };

                            if (options.oneMessage || this.oneMessage) {
                                result.errors[name][0] = errors;
                            }
                            else {
                                result.errors[name].push(errors);   
                            }
                        }
                    });
                }
                else {
                    const status = vm[rule.rule](data[name], rule.args);
                    if (!status) {
                        if (!result.errors[name]) result.errors[name] = []; 
                        result.errors[name].push({
                            rule: rule.rule,
                            args: rule.args,
                            message: rule.message,
                        });
                    }
                }
            });
        }

        if (Object.keys(result.errors).length) result.status = false;

        return result;
    }

    /**
     * ***verifyBind*** : After checking the input data for validity, the error content is automatically bound using the virtual DOM.
     * @param {VirtualDomList} vdos Virtual DOM Class List
     * @param {any} data input data
     * @returns {ValidateErrorResult} 
     */
    public static verifyBind(vdos: VirtualDomList, data: any) : ValidateErrorResult;

    /**
     * ***verifyBind*** : After checking the input data for validity, the error content is automatically bound using the virtual DOM.
     * @param {VirtualDomList} vdos Virtual DOM Class List
     * @param {any} data input data
     * @param {ValidateRuleMaps} rules Validation Check Rules
     * @returns {ValidateErrorResult} 
     */
    public static verifyBind(vdos: VirtualDomList, data: any, rules : ValidateRuleMaps) : ValidateErrorResult;
    
    public static verifyBind(vdos: VirtualDomList, data: any, rules? : ValidateRuleMaps) : ValidateErrorResult {
        const my = new this();
        if (rules) my.rules = rules;
        return my.verifyBind(vdos, data);
    }

    /**
     * ***verifyBind*** : After checking the input data for validity, the error content is automatically bound using the virtual DOM.
     * @param {VirtualDomList} vdos Virtual DOM Class List
     * @param {any} data input data
     * @returns {ValidateErrorResult} 
     */
    public verifyBind(vdos: VirtualDomList, data : any) : ValidateErrorResult {
        const result = this.verify(data);
        result.bind(vdos);
        return result;
    }
}
