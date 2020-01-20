"use strict";
define(
    [
        "magcore/utils/formatter"
    ], function(
        formatter
  ) {
  var chartUtils = {
    createChartParams: function(ops, seriesColors) {
      let series = [
        {
          field: "fieldValue",
          categoryField: "fieldAlias",
          type: ops.compareData ? "bar" : ops.type,
          gap: 0.5,
          data: ops.data,
          name: ops.names ? ops.names[0] : undefined
        }
      ];

      if (ops.compareData) {
        series.push({
          field: "fieldValue",
          categoryField: "fieldAlias",
          type: "bar",
          gap: 0.5,
          data: ops.compareData,
          name: ops.names ? ops.names[1] : undefined
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
            template: function(item) {
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
              angle: ops.type === "column" ? 45 : 0
            },
            template: function(item) {
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
            template: function(item) {
              var text = formatter.valueAxisTemplate(item.value);
              return text;
            },
            step: 2
          }
        }
      };
    },
    GetCategories: function(data) {
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
