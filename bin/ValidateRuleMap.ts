import { ValidateRule } from "ValidateRule";

export interface ValidateRuleMaps {
    [name : string]: Array<ValidateRuleMap>,
}

export interface ValidateRuleMap {
    /**
     * ***rule*** : Specify the conditions to be checked for validation (required).
     * The value can be a string or a value from the ValidateRule enumeration.  
     * ```typescript
     * {
     *    rule: ValidateRule.required,
     * }
     * ```
     */
    rule : ValidateRule,

    /**
     * ***index*** : This allows you to perform a validation check on a specific index number when there are multiple identical items.
     */
    index?: number,

    /**
     * ***args*** : Specify the options for the validation check rules here.
     * ```typescript
     * {
     *    rule: ValidateRule.lengthBetween,
     *    args: [ 5, 30 ],      // <= Only strings between 5 and 30 characters are allowed.
     * }
     * ```
     */
    args? : Array<string | number>,

    /**
     * ***message*** : Output message when validation check error is detected.
     * ```typescript
     * {
     *    rule: ValidateRule.required,
     *    message: "No value entered!",
     * }
     * ```
     */
    message? : string,
}
