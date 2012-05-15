var autoOpened = false;

$(document).ready(function() {
	
	$('.getapp-button').bind ('click', getAppClick);
	
	
	
	$('.getapp-form').bind ('submit', getAppSubmit);
	
	$('.getapp-form').find ('#cellphone-input').bind ('keyup', validateNumber);
	
	
							  
        
    function openGetApp () {
    	
    	
    	
    	setTimeout (function () {
    		
    		$('.getapp-text').slideDown ();
    		
    		$('.getapp-text').find ('#cellphone-input').focus ();
    		
    		autoOpened = true;
    	}, 1250);
    }
    
    function validateNumber (e) {
    	
    	var arrow = $(this).parents ('form').find ('.getapp-arrow');
    	
    	if (validatePhoneNumber ($(this).val ())) {
    		arrow.show ();
    	} else {
    		arrow.hide ();
    	}
    	
    }
    
    function getAppSubmit (e) {
    	e.preventDefault ();
    	
    	var form = $(this)
    		, phoneNumber = form.find ("#cellphone-input").val ();
    		
    	if (validatePhoneNumber (phoneNumber)) {
    		form.hide ().next ().show ();
    	} else {
    		alert ('Invalid phone number');
    	}
    	
    }
    
    function getAppClick (e) {		
		e.preventDefault ();		
		$(this).parent ().find ('.getapp-text').slideToggle ();
    		$('.getapp-text').find ('#cellphone-input').focus ();
	}
    
    function initBackgrounds (e) {
		var img = $(this).find ('img')	
			, div = $(this);
		
		div.css ({ 'background-image': 'url(' + img.attr ('src') + ')' });
	}
	
	function validatePhoneNumber (elementValue){
		var phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
		return phoneNumberPattern.test(elementValue);
	}
	
	
	
});
