/**
 * @summary
 * Validation helper functions for parameter checking
 *
 * @module utils/validation
 */

/**
 * @summary
 * Validates that a required parameter is not null or undefined
 *
 * @function validateRequiredParam
 * @module utils/validation
 *
 * @param {any} param - Parameter to validate
 * @param {string} paramName - Name of parameter for error message
 *
 * @throws {Error} When parameter is null or undefined
 *
 * @returns {void}
 */
export function validateRequiredParam(param: any, paramName: string): void {
  if (param === null || param === undefined) {
    throw new Error(`${paramName}Required`);
  }
}

/**
 * @summary
 * Validates that a number is positive
 *
 * @function validatePositiveNumber
 * @module utils/validation
 *
 * @param {number} value - Value to validate
 * @param {string} fieldName - Name of field for error message
 *
 * @throws {Error} When value is not positive
 *
 * @returns {void}
 */
export function validatePositiveNumber(value: number, fieldName: string): void {
  if (value <= 0) {
    throw new Error(`${fieldName}MustBePositive`);
  }
}
