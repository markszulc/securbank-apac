/* JS Snippet to trigger image replacement for Content Fragment List */
var jQuery = require("jquery");

jQuery(function (element,$) {
    "use strict";

    $('.cmp-contentfragment__element--creditcardimage').each(function(){
       
        var img = document.createElement("img");
        img.src = $(this).find("dd").text();
        var $imgDiv = $('<div class="cmp-contentfragment_image"></div>').append(img);
		$(this).parent().append($imgDiv);



     });

}('body',jQuery));