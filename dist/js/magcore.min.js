/*! MAG core repository
 *
 * magcore v0.1.0 (https://github.com/AZMAG/map-mag-core-js)
 * The MIT License (MIT)

Copyright (c) 2019 Maricopa Association of Governments

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */


define('magcore/utils/utils',[
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
});
