"use strict";

define([
    "esri/tasks/QueryTask"
], 
function(
    QueryTask
) {
    var reportsQuery = {
        queryGeoIds: async function (conf, url, geoids, geo) {
            let where = "1=1";
            if (geoids && geoids.length > 0) {
                let str = "";
                geoids.forEach(id => {
                    str += `'${id}',`;
                });
                where = `GEOID IN(${str.slice(0, -1)})`;
            }
            let q = {
                returnGeometry: true,
                outFields: ["*"],
                where: where,
                geometry: geo ? geo : null,
                orderByFields: ["GEOID"]
            };
    
            let qt = new QueryTask({
                url: url + "/" + conf.ACSIndex
            });
    
            const acsPromise = qt.execute(q);
    
            qt.url = url + "/" + conf.censusIndex;
            q.returnGeometry = false;
    
            const censusPromise = qt.execute(q);
    
            const [acsData, censusData] = await Promise.all([
                acsPromise,
                censusPromise
            ]);
    
            return {
                conf: conf,
                acsData,
                censusData
            };
        }
    };

    return reportsQuery;


});
