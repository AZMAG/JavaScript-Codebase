define([
    "esri/tasks/QueryTask"
], function (
    QueryTask
) {
    /** The data utility is a helper class containing static methods for querying data.
     * @exports magcore/utils/data
     * @since 1.0.0
     */
    var dataUtils = {
        /** Executes a query against the specified layer or query task.
         * @param {(external:FeatureLayer|String)} layer - The layer to query or a URL to a queryable layer.
         * @param {Object} [query] - An optional query specifying the options to pass to the layer query.
         * @param {Object} [options] - Additional options for the query as described below.
         * @param {Boolean} [options.attributesOnly=false] - If specified, indicates whether to return just the attributes
         * of the features or the features themselves. Only valid if `queryForCount` is false.
         * @param {Boolean} [options.countOnly=false] - If specified, indicates whether to return the count of
         * records matching the query. Only valid if `attributesOnly` is false.
         */
        query: async function (layer, query = {
            where: "1=1",
            outFields: ["OBJECTID", "GEOID", "NAME"],
            returnGeometry: false,
            distinct: true,
            orderByFields: "NAME"
        }, { attributesOnly, countOnly } = { attributesOnly: false, countOnly: false }) {
            let res;
            if (typeof layer.queryFeatures === "function") {
                res = countOnly === true ? await layer.queryFeatureCount(query) : await layer.queryFeatures(query);
            } else if (typeof layer === "string") {
                let qt = new QueryTask(layer);
                res = countOnly === true ? await qt.executeForCount(query) : await qt.execute(query);
            } else {
                throw new TypeError(`Invalid parameter for querying data: ${layer}`);
            }
            if (typeof res === 'number') {
                return res;
            } else {                
                return attributesOnly === true ? res.features.map(r => r.attributes) : res;
            }
        }
    };
    return dataUtils;
});