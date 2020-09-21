define([], function () {
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
    },
    /** Formats a value as a percentage. 
     * @param {number} val - The value to format.
     * @returns {string} A formatted label.
     */
    pctLabel: function (val) {
      return (Math.round(val * 1000) / 10).toLocaleString("en-US");
    },
    /** Formats a value as a whole number.
     * @param {number} val - The value to format.
     * @returns {string} A formatted label.
     */
    numLabel: function (val) {
      return Math.round(val).toLocaleString("en-US");
    }
  };

  return formatter;
});