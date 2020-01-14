/*! The MAG Core JavaScript library for utilization within the MAG suite of mapping applications.
 *
 * magcore v0.0.1 (git+https://github.com/AZMAG/map-mag-core-js.git)
 * The MIT License (MIT)

Copyright (c) 2019 Maricopa Association of Governments

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */

define('magcore/main',[], function () {
    /** The global MagCore object. 
 * @exports magcore/main
 * @version 0.0.1
 * @author MAG Regional Analytics Devision
 * @see http://www.azmag.gov/About-Us/Divisions/Regional-Analytics-Division [mag@azmag.gov]
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


define('magcore/reports/reportsQuery',[
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
        },
        getSpecificData: async function (conf, layer) {
            let displayField = "NAME";
            let optionalFields = conf.displayFields || [displayField];
            let outFields = ["OBJECTID", "GEOID"].concat(optionalFields.slice());

            const q = {
                where: "1=1",
                outFields: outFields,
                returnGeometry: false,
                distinct: true,
                orderByFields: optionalFields
            };

            let res = await layer.queryFeatures(q);
            let rtnFeatures = [];
            res.features.forEach((feature) => {
                rtnFeatures.push(feature.attributes);
            })
            return rtnFeatures;
        }
    };

    return reportsQuery;

});

define('magcore/utils/formatter',[], function () {
  Number.prototype.MagFormat = function () {
    return this.toFixed(1);
  };
  /** The formatter utility is a helper class containing static methods for various formatting activities.
   * @exports magcore/utils/formatter
   * @since 1.0.0
   */
  var formatter = {
    /** Parses the query strnig of the current URL for the specified key.
     * @param {string} key - The key for which to retrieve the query string value.
     * @returns {string} The value of the query string key.
     */
    qs: function (key) {
      key = key.replace(/[*+?^$.\[\]{}()|\\\/]/g, "\\$&"); // escape RegEx meta chars
      var match = location.search.match(new RegExp("[?&]" + key + "=([^&]+)(&|$)"));
      return match && decodeURIComponent(match[1].replace(/\+/g, " "));
    },
    /** Adds commas to numbers.
     * @param {number} x - The number to format.
     * @returns {string} The formatted value.
     */
    numberWithCommas: function (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    /** Returns a formatted chart tooltip using the input value and category.
     * @param {number} value - The number to include in the tooltip.
     * @param {string} category - The category to display in the tooltip.
     * @returns {string} The formatted value.
     */
    chartTooltip: function (value, category) {
      return `${this.numberWithCommas(value)} <r> ${category}`;
    },
    // TODO: Is this funtion really necessary?
    valueAxisTemplate: function (value) {
      return this.numberWithCommas(value);
    },
    /** Wraps a text value onto separate lines.
     * @param {string} value - The value to wrap.
     * @returns {string} The wrapped value.
     */
    wrapText: function (value) {
      var wrapLength = 12;
      var returnLabel = "";
      var lineLength = 0;

      if (value.length >= wrapLength) {
        var wordsList = value.split(" ");
        $.each(wordsList, function (index, word) {
          var separator = " ";
          if (lineLength >= wrapLength) {
            separator = "\n";
            lineLength = 0;
          }
          returnLabel += separator + word;
          lineLength += word.length;
        });
      } else {
        returnLabel = value;
      }
      return returnLabel;
    },

    showInThousands: function (value) {
      console.log(value);
    }
  };

  return formatter;
});
