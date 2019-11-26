
define([
    ],
    function(
    ){

    Number.prototype.MagFormat = function () {
        return this.toFixed(1);
    };
    
    var utils = {
        qs: function(key){
            key = key.replace(/[*+?^$.\[\]{}()|\\\/]/g, "\\$&"); // escape RegEx meta chars
            var match = location.search.match(new RegExp("[?&]" + key + "=([^&]+)(&|$)"));
            return match && decodeURIComponent(match[1].replace(/\+/g, " "));
        },

        numberWithCommas: function(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
    
        chartTooltip: function(value, category) {
            return `${this.numberWithCommas(value)} <r> ${category}`;
        },
    
        valueAxisTemplate: function(value) {
            return this.numberWithCommas(value);
        },
    
        wrapText: function(value) {
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

        showInThousands: function(value) {
            console.log(value);
        },
   
    }
    
    return utils;
})