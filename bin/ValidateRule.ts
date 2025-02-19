/**
 * ***ValidateRule*** : Validation check rule enumeration.
 */
export enum ValidateRule {
    /**
     * ***required*** : If no value is entered, an error is detected.
     *   
     * ```typescript
     * {
     *   rule: ValidateRule.required,
     * }
     * ```
     */
    required = "required",
    /**
     * ***length*** : If the length of the value (string) is not the specified length, an error is detected.    
     *   
     * Below is an example of an error being detected if the value is not 20 characters.
     * ```typescript
     * {
     *   rule: ValidateRule.length,
     *   args: [ 20 ],
     * }
     * ```
     */
    length = "length",
    /**
     * ***lengthMin*** : If the length of the value (string) is less than the specified length, an error is detected.
     *   
     * Below is an example of an error being detected if the value is 10 characters or less.  
     * ```typescript
     * {
     *   rule: ValidateRule.lengthMin,
     *   args: [ 10 ],
     * }
     * ```
     */
    lengthMin = "lengthMin",
    /**
     * ***lengthMax*** : If the length of the value (string) is greater than or equal to the specified length, an error is detected.
     *   
     * Below is an example of an error being detected if the value is 128 characters or more.  
     * ```typescript
     * {
     *   rule: ValidateRule.lengthMax,
     *   args: [ 128 ],
     * }
     * ```
     */
    lengthMax = "lengthMax",
    /**
     * ***lengthBetween*** : If the length of the value (string) is outside the specified length range, an error is detected.
     *   
     * Below is an example of an error being detected if the value is outside the range of 10 to 128 characters.  
     * ```typescript
     * {
     *   rule: ValidateRule.lengthBetween,
     *   args: [ 10, 128 ],
     * }
     * ```
     */
    lengthBetween = "lengthBetween",
    /**
     * ***byteLength*** : If the length of the value (string) is not the specified byte length, an error is detected.    
     *   
     * Below is an example of an error being detected if the value is not 20 byte.
     * ```typescript
     * {
     *   rule: ValidateRule.byteLength,
     *   args: [ 20 ],
     * }
     * ```
     */
    byteLength = "byteLength",
    /**
     * ***byteLengthMin*** : If the length of the value (string) is less than the specified byte length, an error is detected.
     *   
     * Below is an example of an error being detected if the value is 10 byte or less.  
     * ```typescript
     * {
     *   rule: ValidateRule.byteLengthMin,
     *   args: [ 20 ],
     * }
     * ```
     */
    byteLengthMin = "byteLengthMin",
    /**
     * ***byteLengthMax*** : If the length of the value (string) is greater than or equal to the specified byte length, an error is detected.
     *   
     * Below is an example of an error being detected if the value is 128 byte or more.  
     * ```typescript
     * {
     *   rule: ValidateRule.byteLengthMax,
     *   args: [ 128 ],
     * }
     * ```
     */
    byteLengthMax = "byteLengthMax",
    /**
     * ***byteLengthBetween*** : If the length of the value (string) is outside the specified byte length range, an error is detected.
     *   
     * Below is an example of an error being detected if the value is outside the range of 10 to 128 byte.  
     * ```typescript
     * {
     *   rule: ValidateRule.byteLengthBetween,
     *   args: [ 10, 128 ],
     * }
     * ```
     */
    byteLengthBetween = "byteLengthBetween",
    /**
     * ***value*** : If the value is not equal to the specified value, an error occurs.
     *   
     * Below is an example of an error being detected if the value is other than 20.  
     * ```typescript
     * {
     *   rule: ValidateRule.value,
     *   args: [ 30 ],
     * }
     * ```
     */
    value = "value",
    /**
     * ***valueMin*** : If the value is less than or equal to the specified value, an error occurs.
     *   
     * Below is an example of an error being detected if the value is less than 10.  
     * ```typescript
     * {
     *   rule: ValidateRule.valueMin,
     *   args: [ 10 ],
     * }
     * ```
     */
    valueMin = "valueMin",
    /**
     * ***valueMax*** : If the value is greater than or equal to the specified value, an error occurs.
     *   
     * Below is an example of an error being detected if the value is 255 or more.  
     * ```typescript
     * {
     *   rule: ValidateRule.valueMax,
     *   args: [ 255 ],
     * }
     * ```
     */
    valueMax = "valueMax",
    /**
     * ***valueBetween*** : If the value is outside the specified range, an error is detected.
     *   
     * Below is an example of an error being detected if the value is outside the range of 10 to 255.  
     * ```typescript
     * {
     *   rule: ValidateRule.valueBetween,
     *   args: [ 10, 255 ],
     * }
     * ```
     */
    valueBetween = "valueBetween",
    /**
     * ***selected*** : If the value is not one of the options, an error occurs.  
     * ```typescript
     * {
     *    rule: ValidateRule.selected,
     *    args: [ "apple", "orange", "kiwi", "banana" ],
     * }
     * ```
     */
    selected = "selected",
    /**
     * ***selectedLength*** : If the value (array value) does not select the specified number of items, an error will be detected.
     * ```typescript
     * {
     *    rule: ValidateRule.selectedLength,
     *    args: [ 3 ],
     * }
     * ```
     */
    selectedLength = "selectedLength",
    /**
     * ***selectedLengthMin*** : If the number of values ​​(array values) selected is less than the specified number, an error will be detected.
     * ```typescript
     * {
     *    rule: ValidateRule.selectedLengthMin,
     *    args: [ 4 ],
     * }
     * ```
     */
    selectedLengthMin = "selectedLengthMin",
    /**
     * ***selectedLengthMax*** : If the number of selected values ​​(array values) is greater than the specified number, an error will occur.
     * ```typescript
     * {
     *    rule: ValidateRule.selectedLengthMax,
     *    args: [ 10 ],
     * }
     * ```
    */
    selectedLengthMax = "selectedLengthMax",
    /**
     * ***selectedLengthBetween*** : If you select a number of values ​​(array values) outside the specified range, an error will be detected.
     * ```typescript
     * {
     *    rule: ValidateRule.selectedLengthBetween,
     *    args: [ 5, 10 ],
     * }
     * ```
    */
    selectedLengthBetween = "selectedLengthBetween",
    /**
     * ***confirmed*** : If the value is not the same as the specified value, an error occurs.
     * ```typescript
     * {
     *    rule: ValidateRule.confirmed,
     *    args: [ "password" ],
     * }
     * ```
     */
    confirmed = "confirmed",
    /**
     * ***like*** : If the value does not contain the specified string, an error occurs.
     * ```typescript
     * {
     *    rule: ValidateRule.like,
     *    args: [ "word" ],
     * }
     * ```
     */
    like = "like",

    /**
     * ***characterExists*** : If the value contains characters that do not exist in the specified string, an error occurs..
     * ```typescript
     * {
     *    rule: ValidateRule.characterExists,
     *    args: [ "0123456789" ],
     * }
     * ```
    */
    characterExists = "characterExists",
    /**
     * ***alphaNumeric*** : If the value contains any characters other than half-width alphanumeric characters and specified special characters, an error is detected.
     * ```typescript
     * {
     *    rule: ValidateRule.alphaNumeric,
     * }
     * ```
     * Special characters can be allowed in args
     * ```typescript
     * {
     *    rule: ValidateRule.alphaNumeric,
     *    args: [ "-_=+/.," ],
     * }
     * ```
    */
    alphaNumeric = "alphaNumeric",
    /**
     * ***alphaNumericLower*** : If the value contains any characters other than half-width alphanumeric characters and specified special characters, an error is detected.  
     * Lowercase letters are allowed, but uppercase letters are not allowed.
     * ```typescript
     * {
     *    rule: ValidateRule.alphaNumericLower,
     * }
     * ```
     * Special characters can be allowed in args
     * ```typescript
     * {
     *    rule: ValidateRule.alphaNumericLower,
     *    args: [ "-_=+/.," ],
     * }
     * ```
     */
    alphaNumericLower = "alphaNumericLower",
    /**
     * ***alphaNumericUpper*** : If the value contains any characters other than half-width alphanumeric characters and specified special characters, an error is detected.  
     * Uppercase letters are allowed, but lowercase letters are not allowed.
     * ```typescript
     * {
     *    rule: ValidateRule.alphaNumericUpper,
     * }
     * ```
     * Special characters can be allowed in args
     * ```typescript
     * {
     *    rule: ValidateRule.alphaNumericUpper,
     *    args: [ "-_=+/.," ],
     * }
     * ```
     */
    alphaNumericUpper = "alphaNumericUpper",
    /**
     * ***alpha*** : An error is detected if the value contains any characters other than half-width English characters and the specified special characters.
     * ```typescript
     * {
     *    rule: ValidateRule.alpha,
     * }
     * ```
     * Special characters can be allowed in args
     * ```typescript
     * {
     *    rule: ValidateRule.alpha,
     *    args: [ "-_=+/.," ],
     * }
     * ``` 
     */
    alpha = "alpha",
    /**
     * ***alphaLower*** : An error is detected if the value contains any characters other than half-width English characters and the specified special characters.  
     * Lowercase letters are allowed, but uppercase letters are not allowed.
     * ```typescript
     * {
     *    rule: ValidateRule.alphaLower,
     * }
     * ```
     * Special characters can be allowed in args
     * ```typescript
     * {
     *    rule: ValidateRule.alphaLower,
     *    args: [ "-_=+/.," ],
     * }
     * ``` 
     */
    alphaLower = "alphaLower",
    /**
     * ***alphaUpper*** : An error is detected if the value contains any characters other than half-width English characters and the specified special characters.  
     * Uppercase letters are allowed, but lowercase letters are not allowed.
     * ```typescript
     * {
     *    rule: ValidateRule.alphaUpper,
     * }
     * ```
     * Special characters can be allowed in args
     * ```typescript
     * {
     *    rule: ValidateRule.alphaUpper,
     *    args: [ "-_=+/.," ],
     * }
     * ``` 
     */
    alphaUpper = "alphaUpper",
    /**
     * ***numeric*** : If the value contains any characters other than numeric characters and the specified special characters, an error is detected.
     * ```typescript
     * {
     *    rule: ValidateRule.numeric,
     * }
     * ```
     * Special characters can be allowed in args
     * ```typescript
     * {
     *    rule: ValidateRule.numeric,
     *    args: [ "-_=+/.," ],
     * }
     * ```
     */
    numeric = "numeric",
    /**
     * ***isHiranaga*** : If the value contains hiragana and any other characters than the specified special characters, an error is detected.
     * ```typescript
     * {
     *    rule: ValidateRule.isHiranaga,
     * }
     * ```
     * Special characters can be allowed in args
     * ```typescript
     * {
     *    rule: ValidateRule.isHiranaga,
     *    args: [ "-_=+/.," ],
     * }
     * ```
     */
    isHiranaga = "isHiranaga",
    /**
     * ***isKatakana*** : If the value contains katakana and any characters other than the specified special characters, an error is detected.
     * ```typescript
     * {
     *    rule: ValidateRule.isKatakana,
     * }
     * ```
     * Special characters can be allowed in args
     * ```typescript
     * {
     *    rule: ValidateRule.isKatakana,
     *    args: [ "-_=+/.," ],
     * }
     * ```
     */
    isKatakana = "isKatakana",
    /**
     * ***custom*** : For custom validation    
     * Execute validation using the specified function.
     * 
     * ```typescript
     * {
     *   rule: ValidateRule.custom,
     *   args: [ "customValidate" ],
     * }
     * ```
     * 
     * Then, place the customValidate method in the Validation-derived class as follows:
     * 
     * ```typescript
     * public customValidate (value : string, args :Array<string>, context : ValidateMethod) {
     *    if (value === "custom value") {
     *        return true;  
     *    }
     * }
     * ```
     * 
     */
    custom = "custom",
}
