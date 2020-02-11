define([
    "../resources/color-ramps",
    "./data"
], function (
    colorRamps,
    dataUtils
) {
    /** The maps utility is a helper class containing static methods for working with the map and it's graphics.
     * @exports magcore/utils/maps
     * @since 1.0.0
     */
    var mapUtils = {
        /** Gets a specific color ramp.
         * @param {string} type - The color ramp type, either `sequential` or `diverging`.
         * @param {string} rampKey - The specific color ramp key.
         * @param {string} numBreaks - The number of class breaks for the color ramp.
         * @returns {object[]} An array of objects containing `r`, `g`, `b` key-value pairs.
         */
        getColorRamp: function (type, rampKey, numBreaks) {
            const ramps = this.getRampsByNumAndType(type, numBreaks);
            let ramp = ramps[rampKey];
            let rtnRamp = [];
            for (let i = 0; i < ramp.length; i++) {
                const clr = ramp[i];
                rtnRamp.push({
                    r: clr[0],
                    g: clr[1],
                    b: clr[2]
                });
            }
            return rtnRamp;
        },
        /** Gets all of the color ramps of a specific type.
         * @param {string} type - The color ramp type, either `sequential` or `diverging`.
         * @param {string} numBreaks - The number of class breaks for the color ramp. 
         * @returns {object} An object containing all available color ramps by key.
         */
        getRampsByNumAndType: function (type, numBreaks) {
            let classBreakSet = colorRamps[type]["classBreakSets"][numBreaks];
            let allRamps = colorRamps[type]["colorRamps"];
            let returnRamps = {};

            Object.keys(allRamps).forEach(function (rampKey) {
                let ramp = allRamps[rampKey];
                let filteredRamp = [];

                Object.keys(ramp).forEach(function (letterKey) {
                    if (classBreakSet.indexOf(letterKey) > -1) {
                        filteredRamp.push(ramp[letterKey]);
                    }
                });
                returnRamps[rampKey] = filteredRamp;
            });
            return returnRamps;
        },
        /** Converts a color ramp array to HTML.
         * @param {object[]} ramp - The color ramp array to convert.
         * @param {string} rampKey - The color ramp key.
         * @param {string} rampType - The color ramp type.
         * @returns {string} A string containing the HTML.
         */
        colorRampToHTML: function (ramp, rampKey, rampType) {
            let html = `<div data-type="${rampType}" data-id="${rampKey}" class="cRamp">`;
            for (let i = 0; i < ramp.length; i++) {
                let clr = ramp[i];
                if (clr.r && clr.g && clr.b) {
                    clr = `${clr.r}, ${clr.g}, ${clr.b}`;
                }

                html += `<div style="background-color:rgb(${clr})" class="colorRampSquare"></div>`;
            }
            return (html += "</div>");
        },
        /** Gets configuration for the active map item.
         * @param {external:jQuery} element - The jQuery object representing the list of map items.
         * //TODO: add a return value
         */
        getActiveMapData: function (element) {
            //Gets active map item
            let $activeItem = element.find(".activeMapItem");
            if ($activeItem) {
                //Pull jquery data object from active map item
                return $activeItem.data("mapsConfig");
            }
        },
        /** Gets the currently active map configuration.
         * @param {external:jQuery} element - The jQuery object representing the list of map items.
         * //TODO: add a return value
         */
        getCurrentMapsParams: async function (element, ) {
            let conf = this.getActiveMapData(element);
            let cbrCount = $classBreaksCount.val();
            let classType = $classType.val();
            let breaks = conf.breaks[classType + cbrCount];

            if ($dynamicCBRCheckbox.is(":checked") && classType !== "Custom") {
                breaks = await getDynamicClassBreaks(cbrCount, classType, conf);
            }

            let cbInfos = [];

            //Get color ramp info
            let rampKey = $colorRamp.find(".cRamp").data("id") || config.DefaultColorRamp;
            let type = $colorRamp.find(".cRamp").data("type") || config.DefaultColorScheme;

            //Get a color ramp using above data
            let colorRamp = this.getColorRamp(type, rampKey, cbrCount);

            if (classType === "Custom") {
                cbInfos = this.getCustomBreaks(colorRamp);
            } else {
                cbInfos = this.getCurrentBreaks(breaks, colorRamp);
            }

            return {
                conf: conf,
                breaks: breaks,
                rampKey: rampKey,
                type: type,
                colorRamp: colorRamp,
                cbInfos: cbInfos,
                classType: classType
            };
        },

        getCurrentBreaks: function (breaks, colorRamp, element) {
            const rtnData = [];
            let conf = this.getActiveMapData();
            for (let i = 0; i < breaks.length - 1; i++) {
                const min = breaks[i];
                const max = breaks[i + 1];

                let minLabel = min;
                let maxLabel = max;

                if (conf.Type === "percent") {
                    minLabel = Math.round(minLabel * 1000) / 10 + "%";
                    maxLabel = Math.round(maxLabel * 1000) / 10 + "%";
                } else if (conf.Type === "number") {
                    minLabel = Math.round(minLabel).toLocaleString("en-US");
                    maxLabel = Math.round(maxLabel).toLocaleString("en-US");
                }

                rtnData.push({
                    minValue: min,
                    maxValue: max,
                    symbol: {
                        type: "simple-fill",
                        color: colorRamp[i],
                        outline: {
                            color: [0, 0, 0, 0.1],
                            width: 0.5
                        }
                    },
                    label: `${minLabel} - ${maxLabel}`
                });
            }
            return rtnData;
        },
        view: null,
        map: null
    };
    async function getDynamicClassBreaks(cbrCount, classType, conf) {
        let q = {
            returnGeometry: false,
            outFields: conf.NormalizeField ? [conf.FieldName, conf.NormalizeField] : [conf.FieldName],
            where: `${conf.FieldName} IS NOT NULL`,
            geometry: mapsutils.view.extent,
            outSpatialReference: 102100,
            maxAllowableOffset: .1
        };

        return dataUtils.query(config.mainUrl + "/0", q).then(function (res) {
            let arr = [];
            res.features.forEach(feature => {
                if (conf.NormalizeField) {
                    arr.push(feature.attributes[conf.FieldName] / feature.attributes[conf.NormalizeField] || 0);
                } else {
                    arr.push(feature.attributes[conf.FieldName]);
                }
            });

            let series = new geostats();
            series.setSerie(arr);

            let breakValues = [];
            if (classType === "Jenks") {
                breakValues = series.jenks(arr, Number(cbrCount));
            } else if (classType === "EqInterval") {
                breakValues = series.getClassEqInterval(Number(cbrCount));
            } else if (classType === "Quantile") {
                breakValues = series.getClassQuantile(Number(cbrCount));
            }
            return breakValues;
        });
    }

    return mapUtils;
});