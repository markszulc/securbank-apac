/* JS Snippet to trigger image replacement for Content Fragment */
var jQuery = require("jquery");

jQuery(function (element,$) {
    "use strict";

    $('.cmp-contentfragment__element--image').each(function(){

        var img = document.createElement("img");
        img.src = $(this).find("dd").text();
        $(this).parent().parent().css("background-image", "url(" + img.src + ")");


     });


}('body',jQuery));