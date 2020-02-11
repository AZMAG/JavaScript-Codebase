define([], function () {
  /** The application utility is a helper class containing static methods for general application support.
   * @exports magcore/utils/application
   * @since 1.0.0
   */
  var appUtils = {
    /** Displays the specified loading element.
     * @param {string} selector - A jQuery selector specifying the element to display.
     * @param {string} [display=flex] - Optional CSS display type to use.
     */
    showLoading: function (selector, display) {
      $(selector).addClass(`d-${display || "flex"}`);
    },
    /** Hides the specified loading element.
     * @param {string} selector - A jQuery selector specifying the element to hide.
     */
    hideLoading: function (selector) {
      $(selector).removeClass((i, className) => (className.match(/\bd-\S+/g) || []).join(' '));
      $(selector).addClass("d-none");
    },
    /** Converts a hex color code to it's equivalent RGB value.
     * @param {string} hex - The hex code to convert.
     * @returns {object} An object with `r`, `g`, and `b` values.
     */
    hexToRgb: function (hex) {
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
    rgbToHex: function (r, g, b) {
      return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
  };
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }
  return appUtils;
});