/**
 * Capitalizes first letter of string:
 * 'hello' -> 'Hello'
 *
 * Usage:
 * 'string'.capitalizeFirstLetter() // returns 'String'
 *
 */
String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

/**
 * Lowercases first letter of string:
 * 'Hello' -> 'hello'
 *
 * Usage:
 * 'String'.lowercaseFirstLetter() // returns 'string'
 *
 */
String.prototype.lowercaseFirstLetter = function() {
    return this.charAt(0).toLowerCase() + this.slice(1);
}
