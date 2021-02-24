// Create a function to check if provided argument is palindrome or not.

/**
 * Checks if argument is palindrome
 * @param {string | number} arg latin string or number
 * @returns {boolean} result logic result of check
 */

function isPalindrome(arg) {
    if (typeof arg !== "string" && typeof arg !== "number") {
        throw new Error("argument must be string or number");
    }
    arg = String(arg);
    const reg = /[\W]/g;
    const lowCaseArg = arg.toLowerCase().replace(reg, "");
    const reverseArg = lowCaseArg.split("").reverse().join("");
    return lowCaseArg === reverseArg;
}

exports.isPalindrome = isPalindrome;
