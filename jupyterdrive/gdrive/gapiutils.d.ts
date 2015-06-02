/**
 * Google API App ID
 * @type {string}
 */
export declare var APP_ID: string;
/**
 * Helper functions
 */
/**
 * Perform an authenticated download.
 * @param {string} url The download URL.
 * @return {Promise} resolved with the contents of the file, or rejected
 *     with an Error.
 */
export declare var download: (url: any) => Promise<any>;
/**
 * Executes a Google API request.  This wraps the request.execute() method,
 * by returning a Promise, which may be resolved or rejected.  The raw
 * return value of execute() has errors detected, and errors are wrapped as
 * an Error object.
 *
 * Typical usage:
 * var request = gapi.client.drive.files.get({
 *     'fileId': fileId
 * });
 * execute(request, success, error);
 *
 * @param {Object} request The request, generated by the Google JavaScript
 *     client API.
 * @return {Promise} Fullfilled with the result on success, or the
 *     result wrapped as an Error on error.
 */
export declare var execute: (request: any) => any;
/**
 * calling config with conf, results in the promise _conf_prm being resolved with conf.
 * This then triggers the rest of the gapi loading
 **/
export declare var config: (conf: any) => void;
export declare var gapi_ready: any;
