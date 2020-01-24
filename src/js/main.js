define([], function () {
    /** The global MagCore object. 
 * @exports magcore/main
 * @version 0.0.1
 * @author MAG Regional Analytics Devision <mag@azmag.gov>
 * @see {@link http://www.azmag.gov/About-Us/Divisions/Regional-Analytics-Division}
 */
    var magCore = {
        /** The current version of MagCore. 
         * @type {String}
         * 
         */
        version: '0.0.1'
    };
    return magCore;
});

// ********************** ESRI externals ****************************
/**
 * @external FeatureLayer
 * @see {@link https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html|FeatureLayer}
 */
/** 
 * @external QueryTask
 * @see {@link https://developers.arcgis.com/javascript/latest/api-reference/esri-tasks-QueryTask.html|QueryTask}
 */
/** 
 * @external Geometry
 * @see {@link https://developers.arcgis.com/javascript/jsapi/geometry-amd.html|Geometry}
 */

// ********************** jQuery externals ****************************
/** jQuery
 * @external jQuery
 * @version 3.4.1
 * @see {@link http://api.jquery.com/Types/#jQuery|jQuery}
 * @author {@link https://github.com/jquery/jquery/blob/master/AUTHORS.txt|JS Foundation and other contributors}
 */