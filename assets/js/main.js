(function ($) {
	"use strict";

    jQuery(document).ready(function($){
      
      $('.project-titles li').on('click',function(){
      	var selector = $(this).attr('data-filter');
      	$(".projects-list").isotope({
      		filter: selector
      	});
      });

    });


    jQuery(window).load(function(){

        jQuery(".projects-list").isotope();
    });


}(jQuery));	