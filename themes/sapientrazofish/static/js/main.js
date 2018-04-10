jQuery(document).ready(function() {
	
	var click_counter_search = 0;
	jQuery("button:submit").click(function() { return false; });

	setMenuMobile();

	jQuery(window).resize( function() {
		setMenuMobile();
	});

	function setMenuMobile() {
		if (jQuery('body').outerWidth() > 767) {
			jQuery(".main-navigation").css("display", "block");
		} else {
			jQuery(".main-navigation").css("display", "none");
		}
	}

	jQuery(".menu-button-label").click(
		function() {
			if (jQuery('.main-navigation').is(":hidden")) {
				jQuery('.main-navigation').css("display", "block");
				jQuery(".menu-button-label").addClass('open');
			}
			else {
				jQuery('.main-navigation').css("display", "none");
				jQuery(".menu-button-label").removeClass('open');
			}
		}
	);

 //   jQuery(".search-button").hover(
	// 	function() {
	//    		//jQuery(".search-textfield").css("display","inline-block");
	//    		jQuery(".search-textfield").css("visibility","visible");
	// 	},
	// 	function() {
	// 		if (click_counter_search < 1) {
	// 				//jQuery(".search-textfield").css("display","none");
	// 				jQuery(".search-textfield").css("visibility","hidden");
	// 		}
	// 	}
	// );

   	jQuery('.search-button').on('touchstart click', function(){

            click_counter_search += 1;

			if (click_counter_search == 1) {
				//jQuery(".search-textfield").css("display","inline-block");
				// jQuery(".search-textfield").css("visibility","visible");
				jQuery(".search-button").css("color","#3C4502");
				jQuery(".search-textfield").focus();
			}
			else if (click_counter_search >= 2) {
				if(jQuery(".search-textfield").val().length < 1) {  
			        alert("Please enter some text to search");  
			        jQuery(".search-textfield").focus();
			    } 
			    else
			    {
			    	jQuery("#searchform").submit();
			    }
			} //close else if
	});  

});




