define([], function () {
  /** The misc module contains miscellaneous useful functions that don't fit into another module.
   * @exports magcore/utils/misc
   * @since 1.0.0
   */
  var misc = {
    /** Parses the query string of the current URL for the specified key.
     * @param {string} key - The key for which to retrieve the query string value.
     * @returns {string} The value of the query string key.
     */
    qs: function (key) {
      key = key.replace(/[*+?^$.\[\]{}()|\\\/]/g, '\\$&'); // escape RegEx meta chars
      var match = location.search.match(
        new RegExp('[?&]' + key + '=([^&]+)(&|$)')
      );
      return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    },
  };

  return misc;
});
