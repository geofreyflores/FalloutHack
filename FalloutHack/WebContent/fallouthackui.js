var ui = {
    addlist : function(id, list) {
	  ui.hideError();
	  list = Array.prototype.slice.call(arguments, 1);
	 
      for (var i = 0; i < list.length; i++) {
    	if (!ui.inlist(id, list[i]) ) {
      	  var elem = { html : list[i] };
	      $('<li/>', elem).hide().appendTo(id).fadeIn();
      	} else {
      		ui.showError(list[i] + " is already in the list.");
      	}
      }
      $('input:text').focus();
    },
    
    inlist : function(id, text) {
    	var css_selector = id + ' li:contains(' + text + ')';
      	return ($(css_selector).length !== 0);
    },
    
    hideError : function() {
    	$('error').html('').fadeOut();
    },
    
    showError : function(errorMsg) {
    	$('error').html(errorMsg).fadeOut();
    },
    
    addclue : function(clue, occ) {
    	var elem = {
    	  span : { class: 'clue' , html: clue },
    	  span : { class: 'occ',   html: occ }
    	};
    	$('<li/>', elem).hide().appendTo('clues').fadeIn();
    },

    getlist : function(id) {
      return $(id+' li').toArray().map(function(elem) {
        return elem.innerHTML;
      });
    }
};