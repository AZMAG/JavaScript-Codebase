"use strict";
define([
  "magcore/utils/formatter"
], function (
  formatter
) {
  /** The charts utility is a helper class containing static methods for working with chart data.
   * @exports magcore/utils/charts
   * @since 1.0.0
   */
  var chartUtils = {
    /** Creates parameters for generating charts.
     * @param {Object} options - Options for generating parameters.
     * @param {Object[]} options.data - An array of data objects.
     * @param {String} options.target - The ID of an HTML element to place the chart.
     * @param {String} options.type - The chart type.
     * @param {String} options.category - The chart category.
     * @param {Object[]} [options.compareData] - An array of data objects for comparison.
     * @param {String[]} [options.names] - An array of names labeling the chart series.
     * @param {String[]} seriesColors - An array of hex color values.
     */
    createChartParams: function (options, seriesColors) {
      let series = [
        {
          field: "fieldValue",
          categoryField: "fieldAlias",
          type: options.compareData ? "bar" : options.type,
          gap: 0.5,
          data: options.data,
          name: options.names ? options.names[0] : undefined
        }
      ];

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
        series,
        seriesDefaults: {
          labels: {
            position: "outsideEnd",
            background: "#4D4D4D",
            format: "{0:n}",
            color: "black",
            template: `#= kendo.format(" {0:P}", percentage) #`
          },
          tooltip: {
            visible: true,
            template: function (item) {
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
            template: function (item) {
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
            template: function (item) {
              var text = formatter.valueAxisTemplate(item.value);
              return text;
            },
            step: 2
          }
        }
      };
    },
    /** Gets chart categories based on the input data.
     * @param {Object[]} data - An arra of data objects.
     */
    getCategories: function (data) {
      return data.reduce((categories, d) => {
        if (!categories.includes(d.chartCategory) && d.chartCategory !== "") {
          categories.push(d.chartCategory);
        }
        return categories;
      }, []);
    }
  };
  return chartUtils;
});
