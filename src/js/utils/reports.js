"use strict";

define([
    "./data"
], function (
    dataUtils
) {
    var current = {};
    /** The report utility is a helper class containing static methods for querying report data.
     * @exports magcore/utils/reports
     * @since 1.0.0
     */
    var reportUtils = {
        /** Retrieves the currently selected report and it's data.
         * @returns {Object} The selected report.
         */
        getSelectedReport: function () {
            return current;
        },
        /** Gets report data using the specified IDs.
         * @param {String} serviceUrl - The URL to the feature service containing the ACS and Census layers.
         * @param {Object} options - The specific options for the report which should include the following indices.
         * @param {Number} options.ACSIndex - The index of the ACS layer.
         * @param {Number} options.CensusIndex - The index of the Census layer.
         * @param {String[]} geoIds - An array of IDs for which to query.
         * @param {external:Geometry} [geometry] - A geometry to used in the query.
         */
        getReportData: async function (serviceUrl, options, geoIds = [], geometry) {
            let where = "1=1";
            if (geoIds && geoIds.length > 0) {
                where = `GEOID IN(${geoIds.map(id => `'${id}'`).join(',')})`;
            }
            let q = {
                returnGeometry: true,
                outFields: ["*"],
                where: where,
                geometry: geometry ? geometry : null,
                orderByFields: ["GEOID"]
            };
           
            let acsPromise = dataUtils.query(serviceUrl + "/" + options.ACSIndex, q);
            
            q.returnGeometry = false;

            let censusPromise = dataUtils.query(serviceUrl + "/" + options.CensusIndex, q);

            let [acsData, censusData] = await Promise.all([
                acsPromise,
                censusPromise
            ]);
            current = {
                options: options,
                acsData,
                censusData
            };
            return Object.assign({}, this.getSelectedReport());
        }
    };

    return reportUtils;
});