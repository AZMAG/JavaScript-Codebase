/*! The MAG Core JavaScript library for utilization within the MAG suite of mapping applications.
 *
 * magcore v0.1.0 (https://github.com/AZMAG/map-mag-core-js)
 * The MIT License (MIT)

Copyright (c) 2020 Maricopa Association of Governments

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
  * @version 0.1.0
  * @author MAG Regional Analytics Division <mag@azmag.gov>
  * @see {@link http://www.azmag.gov/About-Us/Divisions/Regional-Analytics-Division}
  */
  var magCore = {
    /** The current version of MagCore. 
     * @type {string}
     * 
     */
    version: '0.1.0'
  };
  return magCore;
}); // ************************** HTML/JS ********************************

/**
 * @external HTMLElement
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement|HTMLElement}
 */

/**
 * @external Promise
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise|Promise}
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
;


define('magcore/resources/color-ramps',[], function () {
  /** Provides a set of default color ramps.
   * @exports magcore/resources/color-ramps
   * @since 1.0.0
   */
  var colorRamps = {
    sequential: {
      classBreakSets: {
        3: "CFI",
        4: "BEGJ",
        5: "BEGIK",
        6: "BDFGIK",
        7: "BDFGHJL",
        8: "ACDFGHJL",
        9: "ACDFGHJKM"
      },
      colorRamps: {
        YlGn: {
          A: ["255", "255", "229"],
          B: ["255", "255", "204"],
          C: ["247", "252", "185"],
          D: ["217", "240", "163"],
          E: ["194", "230", "153"],
          F: ["173", "221", "142"],
          G: ["120", "198", "121"],
          H: ["65", "171", "93"],
          I: ["49", "163", "84"],
          J: ["35", "132", "67"],
          K: ["0", "104", "55"],
          L: ["0", "90", "50"],
          M: ["0", "69", "41"]
        },
        YlGnBu: {
          A: ["255", "255", "217"],
          B: ["255", "255", "204"],
          C: ["237", "248", "177"],
          D: ["199", "233", "180"],
          E: ["161", "218", "180"],
          F: ["127", "205", "187"],
          G: ["65", "182", "196"],
          H: ["29", "145", "192"],
          I: ["44", "127", "184"],
          J: ["34", "94", "168"],
          K: ["37", "52", "148"],
          L: ["12", "44", "132"],
          M: ["8", "29", "88"]
        },
        GnBu: {
          A: ["247", "252", "240"],
          B: ["240", "249", "232"],
          C: ["224", "243", "219"],
          D: ["204", "235", "197"],
          E: ["186", "228", "188"],
          F: ["168", "221", "181"],
          G: ["123", "204", "196"],
          H: ["78", "179", "211"],
          I: ["67", "162", "202"],
          J: ["43", "140", "190"],
          K: ["8", "104", "172"],
          L: ["8", "88", "158"],
          M: ["8", "64", "129"]
        },
        BuGn: {
          A: ["247", "252", "253"],
          B: ["237", "248", "251"],
          C: ["229", "245", "249"],
          D: ["204", "236", "230"],
          E: ["178", "226", "226"],
          F: ["153", "216", "201"],
          G: ["102", "194", "164"],
          H: ["65", "174", "118"],
          I: ["44", "162", "95"],
          J: ["35", "139", "69"],
          K: ["0", "109", "44"],
          L: ["0", "88", "36"],
          M: ["0", "68", "27"]
        },
        PuBuGn: {
          A: ["255", "247", "251"],
          B: ["246", "239", "247"],
          C: ["236", "226", "240"],
          D: ["208", "209", "230"],
          E: ["189", "201", "225"],
          F: ["166", "189", "219"],
          G: ["103", "169", "207"],
          H: ["54", "144", "192"],
          I: ["28", "144", "153"],
          J: ["2", "129", "138"],
          K: ["1", "108", "89"],
          L: ["1", "100", "80"],
          M: ["1", "70", "54"]
        },
        PuBu: {
          A: ["255", "247", "251"],
          B: ["241", "238", "246"],
          C: ["236", "231", "242"],
          D: ["208", "209", "230"],
          E: ["189", "201", "225"],
          F: ["166", "189", "219"],
          G: ["116", "169", "207"],
          H: ["54", "144", "192"],
          I: ["43", "140", "190"],
          J: ["5", "112", "176"],
          K: ["4", "90", "141"],
          L: ["3", "78", "123"],
          M: ["2", "56", "88"]
        },
        BuPu: {
          A: ["247", "252", "253"],
          B: ["237", "248", "251"],
          C: ["224", "236", "244"],
          D: ["191", "211", "230"],
          E: ["179", "205", "227"],
          F: ["158", "188", "218"],
          G: ["140", "150", "198"],
          H: ["140", "107", "177"],
          I: ["136", "86", "167"],
          J: ["136", "65", "157"],
          K: ["129", "15", "124"],
          L: ["110", "1", "107"],
          M: ["77", "0", "75"]
        },
        RdPu: {
          A: ["255", "247", "243"],
          B: ["254", "235", "226"],
          C: ["253", "224", "221"],
          D: ["252", "197", "192"],
          E: ["251", "180", "185"],
          F: ["250", "159", "181"],
          G: ["247", "104", "161"],
          H: ["221", "52", "151"],
          I: ["197", "27", "138"],
          J: ["174", "1", "126"],
          K: ["122", "1", "119"],
          L: ["122", "1", "119"],
          M: ["73", "0", "106"]
        },
        PuRd: {
          A: ["247", "244", "249"],
          B: ["241", "238", "246"],
          C: ["231", "225", "239"],
          D: ["212", "185", "218"],
          E: ["215", "181", "216"],
          F: ["201", "148", "199"],
          G: ["223", "101", "176"],
          H: ["231", "41", "138"],
          I: ["221", "28", "119"],
          J: ["206", "18", "86"],
          K: ["152", "0", "67"],
          L: ["145", "0", "63"],
          M: ["103", "0", "31"]
        },
        OrRd: {
          A: ["255", "247", "236"],
          B: ["254", "240", "217"],
          C: ["254", "232", "200"],
          D: ["253", "212", "158"],
          E: ["253", "204", "138"],
          F: ["253", "187", "132"],
          G: ["252", "141", "89"],
          H: ["239", "101", "72"],
          I: ["227", "74", "51"],
          J: ["215", "48", "31"],
          K: ["179", "0", "0"],
          L: ["153", "0", "0"],
          M: ["127", "0", "0"]
        },
        YlOrRd: {
          A: ["255", "255", "204"],
          B: ["255", "255", "178"],
          C: ["255", "237", "160"],
          D: ["254", "217", "118"],
          E: ["254", "204", "92"],
          F: ["254", "178", "76"],
          G: ["253", "141", "60"],
          H: ["252", "78", "42"],
          I: ["240", "59", "32"],
          J: ["227", "26", "28"],
          K: ["189", "0", "38"],
          L: ["177", "0", "38"],
          M: ["128", "0", "38"]
        },
        YlOrBr: {
          A: ["255", "255", "229"],
          B: ["255", "255", "212"],
          C: ["255", "247", "188"],
          D: ["254", "227", "145"],
          E: ["254", "217", "142"],
          F: ["254", "196", "79"],
          G: ["254", "153", "41"],
          H: ["236", "112", "20"],
          I: ["217", "95", "14"],
          J: ["204", "76", "2"],
          K: ["153", "52", "4"],
          L: ["140", "45", "4"],
          M: ["102", "37", "6"]
        },
        Purples: {
          A: ["252", "251", "253"],
          B: ["242", "240", "247"],
          C: ["239", "237", "245"],
          D: ["218", "218", "235"],
          E: ["203", "201", "226"],
          F: ["188", "189", "220"],
          G: ["158", "154", "200"],
          H: ["128", "125", "186"],
          I: ["117", "107", "177"],
          J: ["106", "81", "163"],
          K: ["84", "39", "143"],
          L: ["74", "20", "134"],
          M: ["63", "0", "125"]
        },
        Blues: {
          A: ["247", "251", "255"],
          B: ["239", "243", "255"],
          C: ["222", "235", "247"],
          D: ["198", "219", "239"],
          E: ["189", "215", "231"],
          F: ["158", "202", "225"],
          G: ["107", "174", "214"],
          H: ["66", "146", "198"],
          I: ["49", "130", "189"],
          J: ["33", "113", "181"],
          K: ["8", "81", "156"],
          L: ["8", "69", "148"],
          M: ["8", "48", "107"]
        },
        Greens: {
          A: ["247", "252", "245"],
          B: ["237", "248", "233"],
          C: ["229", "245", "224"],
          D: ["199", "233", "192"],
          E: ["186", "228", "179"],
          F: ["161", "217", "155"],
          G: ["116", "196", "118"],
          H: ["65", "171", "93"],
          I: ["49", "163", "84"],
          J: ["35", "139", "69"],
          K: ["0", "109", "44"],
          L: ["0", "90", "50"],
          M: ["0", "68", "27"]
        },
        Oranges: {
          A: ["255", "245	", "235"],
          B: ["254", "237", "222"],
          C: ["254", "230", "206"],
          D: ["253", "208", "162"],
          E: ["253", "190", "133"],
          F: ["253", "174", "107"],
          G: ["253", "141", "60"],
          H: ["241", "105", "19"],
          I: ["230", "85", "13"],
          J: ["217", "72", "1"],
          K: ["166", "54", "3"],
          L: ["140", "45", "4"],
          M: ["127", "39", "4"]
        },
        Reds: {
          A: ["255", "245", "240"],
          B: ["254", "229", "217"],
          C: ["254", "224", "210"],
          D: ["252", "187", "161"],
          E: ["252", "174", "145"],
          F: ["252", "146", "114"],
          G: ["251", "106", "74"],
          H: ["239", "59", "44"],
          I: ["222", "45", "38"],
          J: ["203", "24", "29"],
          K: ["165", "15", "21"],
          L: ["153", "0", "13"],
          M: ["103", "0", "13"]
        },
        Greys: {
          A: ["255", "255", "255"],
          B: ["247", "247", "247"],
          C: ["240", "240", "240"],
          D: ["217", "217", "217"],
          E: ["204", "204", "204"],
          F: ["189", "189", "189"],
          G: ["150", "150", "150"],
          H: ["115", "115", "115"],
          I: ["99", "99", "99"],
          J: ["82", "82", "82"],
          K: ["37", "37", "37"],
          L: ["37", "37", "37"],
          M: ["0", "0", "0"]
        }
      }
    },
    diverging: {
      classBreakSets: {
        3: "EHK",
        4: "CFJM",
        5: "CFHJM",
        6: "BEGIKN",
        7: "BEGHIKN",
        8: "BDFGIJLN",
        9: "BDFGHIJLN",
        10: "ABDFGIJLNO",
        11: "ABDFGHIJLNO"
      },
      colorRamps: {
        PuOr: {
          A: ["127", "59", "8"],
          B: ["179", "88", "6"],
          C: ["230", "97", "1"],
          D: ["224", "130", "20"],
          E: ["241", "163", "64"],
          F: ["253", "184", "99"],
          G: ["254", "224", "182"],
          H: ["247", "247", "247"],
          I: ["216", "218", "235"],
          J: ["178", "171", "210"],
          K: ["153", "142", "195"],
          L: ["128", "115", "172"],
          M: ["94", "60", "153"],
          N: ["84", "39", "136"],
          O: ["45", "0", "75"]
        },
        BrBG: {
          A: ["84", "48", "5"],
          B: ["140", "81", "10"],
          C: ["166", "97", "26"],
          D: ["191", "129", "45"],
          E: ["216", "179", "101"],
          F: ["223", "194", "125"],
          G: ["246", "232", "195"],
          H: ["245", "245", "245"],
          I: ["199", "234", "229"],
          J: ["128", "205", "193"],
          K: ["90", "180", "172"],
          L: ["53", "151", "143"],
          M: ["1", "133", "113"],
          N: ["1", "102", "94"],
          O: ["0", "60", "48"]
        },
        PRGn: {
          A: ["64", "0", "75"],
          B: ["118", "42", "131"],
          C: ["123", "50", "148"],
          D: ["153", "112", "171"],
          E: ["175", "141", "195"],
          F: ["194", "165", "207"],
          G: ["231", "212", "232"],
          H: ["247", "247", "247"],
          I: ["217", "240", "211"],
          J: ["166", "219", "160"],
          K: ["127", "191", "123"],
          L: ["90", "174", "97"],
          M: ["0", "136", "55"],
          N: ["27", "120", "55"],
          O: ["0", "68", "27"]
        },
        PiYG: {
          A: ["142", "1", "82"],
          B: ["197", "27", "125"],
          C: ["208", "28", "139"],
          D: ["222", "119", "174"],
          E: ["233", "163", "201"],
          F: ["241", "182", "218"],
          G: ["253", "224", "239"],
          H: ["247", "247", "247"],
          I: ["230", "245", "208"],
          J: ["184", "225", "134"],
          K: ["161", "215", "106"],
          L: ["127", "188", "65"],
          M: ["77", "172", "38"],
          N: ["77", "146", "33"],
          O: ["39", "100", "25"]
        },
        RdBu: {
          A: ["103", "0", "31"],
          B: ["178", "24", "43"],
          C: ["202", "0", "32"],
          D: ["214", "96", "77"],
          E: ["239", "138", "98"],
          F: ["244", "165", "130"],
          G: ["253", "219", "199"],
          H: ["247", "247", "247"],
          I: ["209", "229", "240"],
          J: ["146", "197", "222"],
          K: ["103", "169", "207"],
          L: ["67", "147", "195"],
          M: ["5", "113", "176"],
          N: ["33", "102", "172"],
          O: ["5", "48", "97"]
        },
        RdGy: {
          A: ["103", "0", "31"],
          B: ["178", "24", "43"],
          C: ["202", "0", "32"],
          D: ["214", "96", "77"],
          E: ["239", "138", "98"],
          F: ["244", "165", "130"],
          G: ["253", "219", "199"],
          H: ["255", "255", "255"],
          I: ["224", "224", "224"],
          J: ["186", "186", "186"],
          K: ["153", "153", "153"],
          L: ["135", "135", "135"],
          M: ["64", "64", "64"],
          N: ["77", "77", "77"],
          O: ["26", "26", "26"]
        },
        RdYlBu: {
          A: ["165", "0", "38"],
          B: ["215", "48", "39"],
          C: ["215", "25", "28"],
          D: ["244", "109", "67"],
          E: ["252", "141", "89"],
          F: ["253", "174", "97"],
          G: ["254", "224", "144"],
          H: ["255", "255", "191"],
          I: ["224", "243", "248"],
          J: ["171", "217", "233"],
          K: ["145", "191", "219"],
          L: ["116", "173", "209"],
          M: ["44", "123", "182"],
          N: ["69", "117", "180"],
          O: ["49", "54", "149"]
        },
        Spectral: {
          A: ["158", "1", "66"],
          B: ["213", "62", "79"],
          C: ["215", "25", "28"],
          D: ["244", "109", "67"],
          E: ["252", "141", "89"],
          F: ["253", "174", "97"],
          G: ["254", "224", "139"],
          H: ["255", "255", "191"],
          I: ["230", "245", "152"],
          J: ["171", "221", "164"],
          K: ["153", "213", "148"],
          L: ["102", "194", "165"],
          M: ["43", "131", "186"],
          N: ["50", "136", "189"],
          O: ["94", "79", "162"]
        },
        RdYlGn: {
          A: ["165", "0", "38"],
          B: ["215", "48", "39"],
          C: ["215", "25", "28"],
          D: ["244", "109", "67"],
          E: ["252", "141", "89"],
          F: ["253", "174", "97"],
          G: ["254", "224", "139"],
          H: ["255", "255", "191"],
          I: ["217", "239", "139"],
          J: ["166", "217", "106"],
          K: ["145", "207", "96"],
          L: ["102", "189", "99"],
          M: ["26", "150", "65"],
          N: ["26", "152", "80"],
          O: ["0", "104", "55"]
        }
      }
    }
  };
  return colorRamps;
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
    /** Parses the query string of the current URL for the specified key.
     * @param {string} key - The key for which to retrieve the query string value.
     * @returns {string} The value of the query string key.
     */
    qs: function qs(key) {
      key = key.replace(/[*+?^$.\[\]{}()|\\\/]/g, "\\$&"); // escape RegEx meta chars

      var match = location.search.match(new RegExp("[?&]" + key + "=([^&]+)(&|$)"));
      return match && decodeURIComponent(match[1].replace(/\+/g, " "));
    },

    /** Adds commas to numbers.
     * @param {number} x - The number to format.
     * @returns {string} The formatted value.
     */
    numberWithCommas: function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    /** Returns a formatted chart tooltip using the input value and category.
     * @param {number} value - The number to include in the tooltip.
     * @param {string} category - The category to display in the tooltip.
     * @returns {string} The formatted value.
     */
    chartTooltip: function chartTooltip(value, category) {
      return "".concat(this.numberWithCommas(value), " <r> ").concat(category);
    },
    // TODO: Is this funtion really necessary?
    valueAxisTemplate: function valueAxisTemplate(value) {
      return this.numberWithCommas(value);
    },

    /** Wraps a text value onto separate lines.
     * @param {string} value - The value to wrap.
     * @returns {string} The wrapped value.
     */
    wrapText: function wrapText(value) {
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
    showInThousands: function showInThousands(value) {
      console.log(value);
    },

    /** Formats a value as a percentage. 
     * @param {number} val - The value to format.
     * @returns {string} A formatted label.
     */
    pctLabel: function pctLabel(val) {
      return (Math.round(val * 1000) / 10).toLocaleString("en-US");
    },

    /** Formats a value as a whole number.
     * @param {number} val - The value to format.
     * @returns {string} A formatted label.
     */
    numLabel: function numLabel(val) {
      return Math.round(val).toLocaleString("en-US");
    }
  };
  return formatter;
});



define('magcore/utils/charts',["magcore/utils/formatter"], function (formatter) {
  /** The charts utility is a helper class containing static methods for working with chart data.
   * @exports magcore/utils/charts
   * @since 1.0.0
   */
  var chartUtils = {
    /** Creates parameters for generating charts.
     * @param {object} options - Options for generating parameters.
     * @param {object[]} options.data - An array of data objects.
     * @param {string} options.target - The ID of an HTML element to place the chart.
     * @param {string} options.type - The chart type.
     * @param {string} options.category - The chart category.
     * @param {object[]} [options.compareData] - An array of data objects for comparison.
     * @param {string[]} [options.names] - An array of names labeling the chart series.
     * @param {string[]} seriesColors - An array of hex color values.
     * @returns {object} An object containing the chart parameters.
     */
    createChartParams: function createChartParams(options, seriesColors) {
      var series = [{
        field: "fieldValue",
        categoryField: "fieldAlias",
        type: options.compareData ? "bar" : options.type,
        gap: 0.5,
        data: options.data,
        name: options.names ? options.names[0] : undefined
      }];

      if (options.compareData) {
        series.push({
          field: "fieldValue",
          categoryField: "fieldAlias",
          type: "bar",
          gap: 0.5,
          data: options.compareData,
          name: options.names ? options.names[1] : undefined
        });
      }

      return {
        seriesColors: seriesColors,
        legend: {
          position: "bottom",
          labels: {
            color: "black"
          }
        },
        series: series,
        seriesDefaults: {
          labels: {
            position: "outsideEnd",
            background: "#4D4D4D",
            format: "{0:n}",
            color: "black",
            template: "#= kendo.format(\" {0:P}\", percentage) #"
          },
          tooltip: {
            visible: true,
            template: function template(item) {
              var text = formatter.chartTooltip(item.value, item.category);
              return text + " <br> " + kendo.format("{0:P}", item.percentage);
            }
          }
        },
        chartArea: {
          background: "#fafafa"
        },
        categoryAxis: {
          field: "fieldAlias",
          color: "black",
          labels: {
            visible: true,
            rotation: {
              angle: options.type === "column" ? 45 : 0
            },
            template: function template(item) {
              var text = formatter.wrapText(item.value);
              return text;
            }
          },
          majorGridLines: {
            visible: false
          },
          line: {
            visible: false
          }
        },
        valueAxis: {
          color: "black",
          labels: {
            template: function template(item) {
              var text = formatter.valueAxisTemplate(item.value);
              return text;
            },
            step: 2
          }
        }
      };
    },

    /** Gets chart categories based on the input data.
     * @param {object[]} data - An arra of data objects.
     * @returns {string[]} An array of category names.
     */
    getCategories: function getCategories(data) {
      return data.reduce(function (categories, d) {
        if (!categories.includes(d.chartCategory) && d.chartCategory !== "") {
          categories.push(d.chartCategory);
        }

        return categories;
      }, []);
    }
  };
  return chartUtils;
});



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

define('magcore/utils/data',["esri/tasks/QueryTask"], function (QueryTask) {
  /** The data utility is a helper class containing static methods for querying data.
   * @exports magcore/utils/data
   * @since 1.0.0
   */
  var dataUtils = {
    /** Executes a query against the specified layer or query task.
     * @param {(external:FeatureLayer|string)} layer - The layer to query or a URL to a queryable layer.
     * @param {object} [query] - An optional query specifying the options to pass to the layer query.
     * @param {object} [options] - Additional options for the query as described below.
     * @param {boolean} [options.attributesOnly=false] - If specified, indicates whether to return just the attributes
     * of the features or the features themselves. Only valid if `queryForCount` is false.
     * @param {boolean} [options.countOnly=false] - If specified, indicates whether to return the count of
     * records matching the query. Only valid if `attributesOnly` is false.
     * @returns {external:Promise} A promise that resolves to either a FeatureSet, an array of attributes, or the count.
     */
    query: function () {
      var _query2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(layer) {
        var _query,
            _ref,
            attributesOnly,
            countOnly,
            res,
            qt,
            _args = arguments;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _query = _args.length > 1 && _args[1] !== undefined ? _args[1] : {
                  where: "1=1",
                  outFields: ["OBJECTID", "GEOID", "NAME"],
                  returnGeometry: false,
                  distinct: true,
                  orderByFields: "NAME"
                };
                _ref = _args.length > 2 && _args[2] !== undefined ? _args[2] : {
                  attributesOnly: false,
                  countOnly: false
                }, attributesOnly = _ref.attributesOnly, countOnly = _ref.countOnly;

                if (!(typeof layer.queryFeatures === "function")) {
                  _context.next = 15;
                  break;
                }

                if (!(countOnly === true)) {
                  _context.next = 9;
                  break;
                }

                _context.next = 6;
                return layer.queryFeatureCount(_query);

              case 6:
                _context.t0 = _context.sent;
                _context.next = 12;
                break;

              case 9:
                _context.next = 11;
                return layer.queryFeatures(_query);

              case 11:
                _context.t0 = _context.sent;

              case 12:
                res = _context.t0;
                _context.next = 30;
                break;

              case 15:
                if (!(typeof layer === "string")) {
                  _context.next = 29;
                  break;
                }

                qt = new QueryTask(layer);

                if (!(countOnly === true)) {
                  _context.next = 23;
                  break;
                }

                _context.next = 20;
                return qt.executeForCount(_query);

              case 20:
                _context.t1 = _context.sent;
                _context.next = 26;
                break;

              case 23:
                _context.next = 25;
                return qt.execute(_query);

              case 25:
                _context.t1 = _context.sent;

              case 26:
                res = _context.t1;
                _context.next = 30;
                break;

              case 29:
                throw new TypeError("Invalid parameter for querying data: ".concat(layer));

              case 30:
                if (!(typeof res === 'number')) {
                  _context.next = 34;
                  break;
                }

                return _context.abrupt("return", res);

              case 34:
                return _context.abrupt("return", attributesOnly === true ? res.features.map(function (r) {
                  return r.attributes;
                }) : res);

              case 35:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function query(_x) {
        return _query2.apply(this, arguments);
      }

      return query;
    }()
  };
  return dataUtils;
});



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

define('magcore/utils/reports',["./data"], function (dataUtils) {
  var current = {};
  /** The report utility is a helper class containing static methods for querying report data.
   * @exports magcore/utils/reports
   * @since 1.0.0
   */

  var reportUtils = {
    /** Retrieves the currently selected report and it's data.
     * @returns {object} The selected report.
     */
    getSelectedReport: function getSelectedReport() {
      return current;
    },

    /** Gets report data using the specified IDs.
     * @param {string} serviceUrl - The URL to the feature service containing the ACS and Census layers.
     * @param {object} options - The specific options for the report which should include the following indices.
     * @param {number} options.ACSIndex - The index of the ACS layer.
     * @param {number} options.CensusIndex - The index of the Census layer.
     * @param {string[]} geoIds - An array of IDs for which to query.
     * @param {external:Geometry} [geometry] - A geometry to used in the query.
     */
    getReportData: function () {
      var _getReportData = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(serviceUrl, options) {
        var geoIds,
            geometry,
            where,
            q,
            acsPromise,
            censusPromise,
            _ref,
            _ref2,
            acsData,
            censusData,
            _args = arguments;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                geoIds = _args.length > 2 && _args[2] !== undefined ? _args[2] : [];
                geometry = _args.length > 3 ? _args[3] : undefined;
                where = "1=1";

                if (geoIds && geoIds.length > 0) {
                  where = "GEOID IN(".concat(geoIds.map(function (id) {
                    return "'".concat(id, "'");
                  }).join(','), ")");
                }

                q = {
                  returnGeometry: true,
                  outFields: ["*"],
                  where: where,
                  geometry: geometry ? geometry : null,
                  orderByFields: ["GEOID"]
                };
                acsPromise = dataUtils.query(serviceUrl + "/" + options.ACSIndex, q);
                q.returnGeometry = false;
                censusPromise = dataUtils.query(serviceUrl + "/" + options.CensusIndex, q);
                _context.next = 10;
                return Promise.all([acsPromise, censusPromise]);

              case 10:
                _ref = _context.sent;
                _ref2 = _slicedToArray(_ref, 2);
                acsData = _ref2[0];
                censusData = _ref2[1];
                current = {
                  options: options,
                  acsData: acsData,
                  censusData: censusData
                };
                return _context.abrupt("return", Object.assign({}, this.getSelectedReport()));

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getReportData(_x, _x2) {
        return _getReportData.apply(this, arguments);
      }

      return getReportData;
    }()
  };
  return reportUtils;
});



define('magcore/utils/application',[], function () {
  /** The application utility is a helper class containing static methods for general application support.
   * @exports magcore/utils/application
   * @since 1.0.0
   */
  var appUtils = {
    /** Displays the specified loading element.
     * @param {string} selector - A jQuery selector specifying the element to display.
     * @param {string} [display=flex] - Optional CSS display type to use.
     */
    showLoading: function showLoading(selector, display) {
      $(selector).addClass("d-".concat(display || "flex"));
    },

    /** Hides the specified loading element.
     * @param {string} selector - A jQuery selector specifying the element to hide.
     */
    hideLoading: function hideLoading(selector) {
      $(selector).removeClass(function (i, className) {
        return (className.match(/\bd-\S+/g) || []).join(' ');
      });
      $(selector).addClass("d-none");
    },

    /** Converts a hex color code to it's equivalent RGB value.
     * @param {string} hex - The hex code to convert.
     * @returns {object} An object with `r`, `g`, and `b` values.
     */
    hexToRgb: function hexToRgb(hex) {
      // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
      var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
      });
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    },

    /** Converts RGB values to a hex color code.
     * @param {number} r - The `red` value.
     * @param {number} g - The `green` value.
     * @param {number} b - The `blue` value.
     * @returns {string} The hex color code.
     */
    rgbToHex: function rgbToHex(r, g, b) {
      return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
  };

  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }

  return appUtils;
});


define('magcore/widgets/templates/layer-list.html',[],function () { return '<div>\r\n  <span class="layers-title">Select any of the items from\r\n    the list below to add to the map.</span>\r\n  <div data-dojo-attach-point="layerList"></div>\r\n</div>';});


define('magcore/widgets/templates/layer-list-item.html',[],function () { return '<div class="checkbox-div" data-dojo-attach-event="onclick:toggle">\r\n  <input type="checkbox" ${checkedAttrSetting} data-layer-id="${layerId}"\r\n    class="regular-checkbox big-checkbox" />\r\n  <label></label>\r\n  <label class="layer-label">${title}</label>\r\n  <a style="height: 25px;" tabindex="0" role="button" data-html="true" data-toggle="popover" data-placement="auto"\r\n    data-trigger="hover" title="${title}" data-content="${definition}"><i class="fas fa-info-circle"></i>\r\n  </a>\r\n</div>';});



define('magcore/widgets/layer-list',["./templates/layer-list.html", "./templates/layer-list-item.html", "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dijit/_WidgetsInTemplateMixin", "dojo/_base/declare"], function (template, itemTemplate, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, declare) {
  /** Provides a reusable layer list for toggling layer visibilities.
   * @class LayerList
   * @augments {external:WidgetBase}
   * @since 1.0.0
   * @example require(["magcore/widgets/layer-list"], function(LayerList) { // code goes here. });
   */
  var LayerList = declare([_WidgetBase, _TemplatedMixin],
  /** @lends LayerList.prototype */
  {
    /** A string that represents the widget template.
     * @type {String}
     * @default
     */
    templateString: template,

    /** Instantiates a new LayerList instance.
     * @param {Object} options - Configuration options for the list.
     * @param {Object[]} options.layers - An array of individual layer options.
     * @param {external:Map} options.map - A map instance containing the layers.
     * @param {(String|external:HTMLElement)} domNode - The ID or node representing the DOM element 
     * that will contain the widget.
     */
    constructor: function constructor(_ref, domNode) {
      var map = _ref.map,
          layers = _ref.layers;
    },

    /** Processing after the DOM fragment is created.
     * Called after the DOM fragment has been created, but not necessarily added to the document. 
     * Do not include any operations which rely on node dimensions or placement. 
     */
    postCreate: function postCreate() {
      var _this = this;

      this.layers.sort(function (a, b) {
        return a.layerListOrder - b.layerListOrder;
      });
      this.layers.forEach(function (layer) {
        if (layer.id !== "blockGroups") {
          var cb = $("<div>");
          $(_this.layerList).append(cb);
          new LayerListItem(Object.assign({}, layer, {
            map: _this.map,
            layerId: layer.id,
            id: "".concat(layer.id, "_CheckBox")
          }), cb[0]);
        }
      });
    },

    /** Root CSS class of the widget (ex: dijitTextBox), used to construct CSS classes to indicate widget state.
     * @type {String}
     * @default
     */
    baseClass: 'mag-layer-list'
  });
  /** Represents a single item in the layer list. Used internally and not meant for 
   * use externally.
   * @class LayerListItem
   * @augments {external:WidgetBase}
   * @since 1.0.0
   * @private
   */

  var LayerListItem = declare([_WidgetBase, _TemplatedMixin],
  /** @lends LayerListItem.prototype */
  {
    /** A string that represents the widget template.
     * @type {String}
     * @default
     */
    templateString: itemTemplate,

    /** Instantiates a new layer list item.
     * @param {Object} options - Configuration options for the item.
     * @param {String} options.id - The unique ID of the list item.
     * @param {String} options.title - The title to display in the list.
     * @param {Boolean} options.visible - Whether the layer is visible by default.
     * @param {(Boolean|Object)} options.legend - Whether to display a legend for the item.
     * @param {String} options.definition - A description of the layer that will display in a popover.
     * @param {external:Map} options.map - The map instance associated with this layer.
     * @param {(String|external:HTMLElement)} domNode - The ID or node representing the DOM element 
     * that will contain the widget.
     */
    constructor: function constructor(_ref2, domNode) {
      var id = _ref2.id,
          visible = _ref2.visible,
          title = _ref2.title,
          legend = _ref2.legend,
          definition = _ref2.definition,
          map = _ref2.map;
    },

    /** Processing after the DOM fragment is created.
     * Called after the DOM fragment has been created, but not necessarily added to the document. 
     * Do not include any operations which rely on node dimensions or placement. 
     */
    postCreate: function postCreate() {
      if (this.legend && this.legend.group) {
        this.id = this.legend.group.id;
        this.title = this.legend.group.title;
      }

      $("[data-toggle=\"popover\"]", this.domNode).popover();
    },

    /** Called after the parameters to the widget have been read-in, but before the widget template is instantiated. 
     * Especially useful to set properties that are referenced in the widget template. 
     */
    postMixInProperties: function postMixInProperties() {
      this.inherited(arguments);
      this.checkedAttrSetting = this.visible === true ? "checked" : "";
    },

    /** Toggles the visibility of the layer. */
    toggle: function toggle() {
      //Toggle Checkbox
      var cb = $(this.domNode).find(".big-checkbox");
      var layerId = cb.data("layer-id"); //Toggle Layer

      var layer = this.map.findLayerById(layerId);

      if (layer) {
        layer.visible = !layer.visible;
        cb.prop("checked", !cb.prop("checked"));
      }
    }
  });
  return LayerList;
});

