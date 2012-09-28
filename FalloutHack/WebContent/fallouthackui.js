var ui = {
    addlist : function(id, list) {
		console.log(
				$(id+' li').toArray().map(function(elem) { 
					return elem.innerHTML; 
				})
		);
		for (var i = 0; i < list.length; i++) {
	    	
		    var elem = { html : list[i] };
		    
		    // fade new content into view and refocus
		    $('<li/>', elem).hide().appendTo(id).fadeIn();
		    $('input:text').focus();
			
	    }
    }

	valid : function() {
    	return $(id+' li').toArray().map(function(elem) { 
			return elem.innerHTML; 
		})
    }
};