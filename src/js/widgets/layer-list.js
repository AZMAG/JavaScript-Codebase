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
       * @param {Object} options - Configuration options for the list.
       * @param {Object[]} options.layers - An array of individual layer options.
       * @param {external:Map} options.map - A map instance containing the layers.
       */

      _map: {},
      constructor: function ({ map, layers }, domNode) {

      this.layers = layers;
      _map = map;

      },
      postCreate: function () {

        var arr = this.layers.sort((a, b) => a.layerListOrder - b.layerListOrder);
        
        for (var i = 0; i < arr.length; i++) {
            var conf = arr[i];

            if (conf.id !== "blockGroups") {
                $(this.layerList).append(this.getCheckBoxHTML(conf));
            }
        }
        $(this.layerList).find(".checkbox-div").click(this.toggleLayerItem);
        $(this.layerList).find("[data-toggle=popover]").popover();

        //$(this.layerList).html("TEST");
      },
      toggleLayerItem: function(e) {

        //Toggle Checkbox
        let $cbox = $(this).find(".big-checkbox");
        $cbox.prop("checked", !$cbox.prop("checked"));

        let layerId = $cbox.data("layer-id");

        //Toggle Layer
        let layer = _map.findLayerById(layerId);
        if (layer) {
            layer.visible = !layer.visible;
        } else {
            let grpLayers = getLayersByGroupId(layerId);

            for (var i = 0; i < grpLayers.length; i++) {
                var grpLayer = grpLayers[i];

                let lay = _map.findLayerById(grpLayer.id);
                if (lay) {
                    lay.visible = !lay.visible;
                }
            }
        }
      },
      getCheckBoxHTML: function(conf) {
        var c = $.extend({}, conf);

        if (c.legend.group) {
            c.id = c.legend.group.id;
            c.title = c.legend.group.title;
        }

        return `
                <div>
                    <div class="checkbox-div">
                        <input type="checkbox" dojoattachpoint="c-${c.id}" ${c.visible ? "checked" : ""} data-layer-id="${c.id}" class="regular-checkbox big-checkbox" />
                        <label></label>
                        <label class="layerLabel">${c.title}</label>
                        <a
                        style="height: 25px;"
                        tabindex="0"
                        role="button"
                        data-html="true"
                        data-toggle="popover"
                        data-placement="auto"
                        data-trigger="hover"
                        title="${c.title}"
                        data-content="${c.definition}"><i class="fas fa-info-circle"></i>
                        </a>
                    </div>
                </div>
                `;
      },
      declaredClass: 'mag-layer-list'
    });
});