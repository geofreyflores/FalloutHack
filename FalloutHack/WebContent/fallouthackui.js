var ui = {
    addlist : function(id, list) {
	  ui.hideError();
	  list = Array.prototype.slice.call(arguments, 1);
	 
      for (var i = 0; i < list.length; i++) {
    	if (!ui.inlist(id, list[i]) ) {
      	  var elem = { html : list[i] };
	      $('<li/>', elem).hide().appendTo(id).fadeIn();
      	} else {
      		ui.showError("<strong>" + list[i] + "</strong> is already in the list.");
      	}
      }
      $('input:text').focus();
    },
    
    inlist : function(id, text) {
    	var css_selector = id + ' li:contains(' + text + ')';
      	return ($(css_selector).length !== 0);
    },
    
    hideError : function() {
    	$('#error').html('').fadeOut();
    },
    
    showError : function(errorMsg) {
    	$('#error').html(errorMsg).fadeIn();
    },
    
    addclue : function(clue, occ) {
    	var elem = $('<li/>');
    	$('<span/>', { class: 'clue', html: clue }).appendTo(elem);
    	$('<span/>', { class: 'occ', html: occ }).appendTo(elem);
    	
    	elem.hide().appendTo('#clues').fadeIn();
    	$('input:text').focus();
    },

    getlist : function(id) {
      return $(id+' li').toArray().map(function(elem) {
        return elem.innerHTML;
      });
    }
};