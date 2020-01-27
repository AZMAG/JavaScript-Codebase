define([
  "dojo/text!./templates/layer-list.html",
  "dojo/text!./templates/layer-list-item.html",
  "dijit/_WidgetBase",
  "dijit/_TemplatedMixin",
  "dijit/_WidgetsInTemplateMixin",
  "dojo/_base/declare"
], function (
  template,
  itemTemplate,
  _WidgetBase,
  _TemplatedMixin,
  _WidgetsInTemplateMixin,
  declare
) {
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
      constructor: function ({ map, layers }, domNode) {
      },
      /** Processing after the DOM fragment is created.
       * Called after the DOM fragment has been created, but not necessarily added to the document. 
       * Do not include any operations which rely on node dimensions or placement. 
       */
      postCreate: function () {
        this.layers.sort((a, b) => a.layerListOrder - b.layerListOrder);
        this.layers.forEach(layer => {
          if (layer.id !== "blockGroups") {
            var cb = $("<div>");
            $(this.layerList).append(cb);
            new LayerListItem(Object.assign({}, layer, { 
              map: this.map,
              layerId: layer.id,
              id: `${layer.id}_CheckBox`
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
      constructor: function ({ id, visible, title, legend, definition, map }, domNode) {
      },      
      /** Processing after the DOM fragment is created.
       * Called after the DOM fragment has been created, but not necessarily added to the document. 
       * Do not include any operations which rely on node dimensions or placement. 
       */
      postCreate: function () {
        if (this.legend && this.legend.group) {
          this.id = this.legend.group.id;
          this.title = this.legend.group.title;
        }
        $("[data-toggle=\"popover\"]", this.domNode).popover();
      },
      /** Called after the parameters to the widget have been read-in, but before the widget template is instantiated. 
       * Especially useful to set properties that are referenced in the widget template. 
       */
      postMixInProperties: function () {
        this.inherited(arguments);
        this.checkedAttrSetting = this.visible === true ? "checked" : "";
      },
      /** Toggles the visibility of the layer. */
      toggle: function () {        
        //Toggle Checkbox
        let cb = $(this.domNode).find(".big-checkbox");
        let layerId = cb.data("layer-id");

        //Toggle Layer
        let layer = this.map.findLayerById(layerId);
        if (layer) {
          layer.visible = !layer.visible;
          cb.prop("checked", !cb.prop("checked"));
        }
      }
    });
  return LayerList;
});