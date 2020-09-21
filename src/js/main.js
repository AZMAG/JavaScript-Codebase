define([], function () {
  /** The global MagCore object.
   * @exports magcore/main
   * @version 0.0.1
   * @author MAG Regional Analytics Division <mag@azmag.gov>
   * @see {@link http://www.azmag.gov/About-Us/Divisions/Regional-Analytics-Division}
   */
  var magCore = {
    /** The current version of MagCore.
     * @type {String}
     *
     */
    version: '0.0.1',
    copyrightYear: '2020',
    statewideExtent: {
      xmin: -13271172.93,
      ymin: 3506737.09,
      xmax: -11501054.53,
      ymax: 4612403.73,
      spatialReference: {
        wkid: 102100,
      },
    },
    legalDisclaimer:
      'The Maricopa Association of Governments (MAG) provides the data within these pages as a public resource of general information for use "as is". The Maricopa Association of Governments IS (Information Services) division provides this information with the understanding that it is not guaranteed to be accurate, correct or complete and any conclusions drawn from such information are the sole responsibility of the user. Further, the Maricopa Association of Governments IS (Information Services) division makes no warranty, representation or guaranty as to the content, sequence, accuracy, timeliness or completeness of any of the spatial or database information provided herein. While every effort has been made to ensure the content, sequence, accuracy, timeliness or completeness of materials presented within these pages, the Maricopa Association of Governments IS (Information Services) division assumes no responsibility for errors or omissions, and explicitly disclaims any representations and warranties, including, without limitation, the implied warranties of merchantability and fitness for a particular purpose. The Maricopa Association of Governments IS (Information Services) division shall assume no liability for: Any errors, omissions, or inaccuracies in the information provided, regardless of how caused; orAny decision made or action taken or not taken by viewer in reliance upon any information or data furnished hereunder.Availability of the Maricopa Association of Governments Map Server is not guaranteed. Applications, servers, and network connections may be unavailable at any time for maintenance or unscheduled outages. Outages may be of long duration. Users are cautioned to create dependencies on these services for critical needs.THE FOREGOING WARRANTY IS EXCLUSIVE AND IN LIEU OF ALL OTHER WARRANTIES OF MERCHANTABILITY, FITNESS FOR PARTICULAR PURPOSE AND/OR ANY OTHER TYPE WHETHER EXPRESSED OR IMPLIED. In no event shall The Maricopa Association of Governments become liable to users of these data, or any other party, for any loss or direct, indirect, special, incidental or consequential damages, including, but not limited to, time, money or goodwill, arising from the use or modification of the data.To assist the Maricopa Association of Governments in the maintenance and/or correction of the data, users should provide the Maricopa Association of Governments IS (Information Services) division with information concerning errors or discrepancies found in using the data. Please use the e-mail contact address at the bottom of the affected web page.Please acknowledge the Maricopa Association of Governments GIS as the source when Map Server data is used in the preparation of reports, papers, publications, maps, or other products.',
    bitlyApiInfo: {
      login: 'vwolfley',
      apiKey: 'R_8dbab4a2f0664e8f8b4f88fe0d9d7f80',
    },
    generalPrintUrl:
      'https://geo.azmag.gov/arcgis/rest/services/gp/GenericPrintService/GPServer/Export%20Web%20Map',
  };
  return magCore;
});

// ************************** HTML **********************************
/**
 * @external HTMLElement
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement|HTMLElement}
 */

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
 * @see {@link https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Geometry.html|Geometry}
 */
/**
 * @external Map
 * @see {@link https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html|Map}
 */

// ********************** jQuery externals ****************************
/** jQuery
 * @external jQuery
 * @version 3.4.1
 * @see {@link http://api.jquery.com/Types/#jQuery|jQuery}
 * @author {@link https://github.com/jquery/jquery/blob/master/AUTHORS.txt|JS Foundation and other contributors}
 */

// ********************** Dojo externals ****************************
/** Base class for all Dojo widgets.
 * @external WidgetBase
 * @see {@link https://dojotoolkit.org/reference-guide/1.10/dijit/_WidgetBase.html#dijit-widgetbase|WidgetBase}
 */
