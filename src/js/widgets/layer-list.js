define([
  "dojo/text!./templates/layer-list.html",
  "dijit/_WidgetBase",
  "dijit/_TemplatedMixin",
  "dojo/_base/declare"
], function (
  template,
  _WidgetBase,
  _TemplatedMixin,
  declare
) {
  /** Provides a reusable layer list for toggling layer visibilities.
   * @name LayerList
   * @constructor
   * @augments {external:WidgetBase}
   * @since 1.0.0
   */
  return declare([_WidgetBase, _TemplatedMixin],
    /** @lends LayerList.prototype */
    {
      templateString: template,
      /** Instantiates a new LayerList instance.
       * @param {Object} options - .
       */
      constructor: function () {

      },
      postCreate: function () {
        $(this.layerList).html("TEST");
      },
      declaredClass: 'mag-layer-list'
    });
});